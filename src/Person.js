import React from 'react';

function Person({id, image, quote, name, title, position}) {
  return <>
    <article className={`person ${position}`}>
        <img src={image} alt={name} className='person-img'/>
        <div className='info'>
            <h2>{name}</h2>
            <p className='title'>{title}</p>
            <p className='quote'>{quote}</p>
        </div>
    </article>
  </>;
}

export default Person;
