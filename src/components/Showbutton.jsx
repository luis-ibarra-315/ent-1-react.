import React from 'react';
import arr from'../utils/phrases.json';
import randomArr from '../services/randomArr';
import imagesArr from '../utils/images.json';
const Showbutton = ({setRandomPhrase, setImage}) => {

    const handleClick = () => {
      const quote = randomArr(arr);
      setRandomPhrase(quote);
      const photo = randomArr(imagesArr);
      setImage(photo);
    }

  return (
    <button onClick={handleClick}className='app_btn'>
      Probar mi suerte
    </button>
  )
}

export default Showbutton;
