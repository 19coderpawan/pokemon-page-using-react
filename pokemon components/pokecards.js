import React from 'react'

const Pokecards = ({pokecurr}) => {
    console.log(pokecurr)
  return (
    <>
      <div className="card-container-top">
       
            {
                pokecurr.map((currelement)=>{
                    console.log("the curr is ", currelement)
                    const {image,id,name,description,type,ability}=currelement;
                    return(
                
                        <div className="card-container">
                        <div className="card"> 
                        <div className="card-body">
                            <span className='subtel circle' >{id}</span>
                            {/* <br /><br /><br /><br /> */}
                            <img className='card-img' src={image} alt="here is the"></img>
                            <h3 className='pokedata'>PokeData</h3>
                            {/* <br /> */}
                            <span className='title'>{name}</span>
                            {/* <br /> */}
                            <span className='card-author'>type:{type}</span>
                            {/* <br /> */}
                            <span className='card-author'>ability:{ability}</span>
                            {/* <br /> */}
                          <span className='card-des'>{description}</span>
                        </div>
                    </div>
                    </div>
                    
                    )
                })
            }
      </div>
    </>
  )
}

export default Pokecards
