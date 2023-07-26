import React from 'react'

const Pokenav = ({ uniquecurr, filterpokeitem }) => {
  return (
    <>
      <nav className="navigation">
        <h4>choose your pokemon</h4>
        <div className="nav-body">
          {
            uniquecurr.map((currelement) => {

              return (

                <button className='btn-body' onClick={() => filterpokeitem(currelement)}>{currelement}</button>

              )
            })
          }
        </div>
      </nav>
    </>
  )
}

export default Pokenav
