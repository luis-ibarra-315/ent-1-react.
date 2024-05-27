import {useState} from 'react';
import './App.css';
import ShowPhrase from './components/ShowPhrase';
import Showbutton from './components/Showbutton';
import randomArr from './services/randomArr.js';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json'

function App() {

  const quote = randomArr(arr);
  const [randomPhrase,setRandomPhrase] = useState(quote);
  const photo = randomArr(imagesArr);
  const [image, setImage] = useState(photo);


  const appStyle= {
    backgroundImage: `url(../fortuna-1/fondo${image}.jpg)`,
  }
 
  return (
    <div className='app' style={appStyle}>
   <h1 className='app_title'>Galletas de la fortuna</h1>
   <Showbutton
  setRandomPhrase ={setRandomPhrase}
  setImage={setImage}
   />
   <ShowPhrase
   randomPhrase={randomPhrase}
   />
   </div>

  )
}

export default App;
