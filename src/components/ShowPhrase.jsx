import React from 'react';

const ShowPhrase = ({randomPhrase}) => {

    console.log(randomPhrase);

    const {phrase,author} = randomPhrase

  return (
    <div className='app_container'>
        <p className='app_text'>{phrase}</p>
        <span className='app_author'>{author}</span>
    </div>
  )
}

export default ShowPhrase;
