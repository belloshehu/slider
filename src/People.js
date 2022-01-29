import React, { useEffect } from 'react';
import Person from './Person';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

function People({people, index, setIndex}) {
    useEffect(() => {
        let newIndex = people.length - 1
        if(index < 0 ){
            setIndex(newIndex)
        }
        if(index > newIndex ){
            setIndex(0)
        }
    }, [index, people]);
    useEffect(() => {
        let newIndex = people.length - 1
        if(index < 0 ){
            setIndex(newIndex)
        }
        if(index > newIndex ){
            setIndex(0)
        }
        let sliderInterval = setInterval(()=>{
            setIndex(index + 1)
        }, 3000)  
        return () => {
            clearInterval(sliderInterval)
        };
    }, [index]);
    
  return(
      <section className='people'>
        <div className='slider'>
            {
                people.map((person, personIndex) =>{
                    let position = 'nextSlide'
                    if(index === personIndex){
                        position = 'activeSlide'
                    }
                    if(personIndex === index - 1 || 
                        (index === 0 && personIndex === people.length - 1)){
                        position = 'lastSlide'
                    }
                    return(
                        <Person key={personIndex} {...person} position={position}/>
                    )
                })
            }
        </div>
        <div className="slider-btn">
            <button 
                className='prev-btn'
                type='button'
                onClick={()=>setIndex(index - 1)}>
                <FiChevronLeft />
            </button>
            <button 
                className='next-btn'
                type='button'
                onClick={()=>setIndex(index + 1)}>
                <FiChevronRight />
            </button>
        </div>
      </section>
  )
}

export default People;
