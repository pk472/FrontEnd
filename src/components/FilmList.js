

import React from 'react'

function FilmList(props) {

    

  return (
    <div>
      {props.films && props.films.map(film => {
        return(
          <div key = {film.film_id}>
            <h2>{film.title}</h2>
            <div className='row'>
                <div className = "col-md-1">
                    <button className = "btn btn-primary"
                        onClick = {()=> myFunction(film)} 
                    >More Info</button>
                </div>
            </div>    


          </div>
        )
      })}
    </div>
  )
}

function myFunction(film){
    document.getElementById("ftitle").innerHTML = film.title
    document.getElementById("fdesc").innerHTML = film.description
    document.getElementById("fyear").innerHTML = film.release_year
    document.getElementById("fleng").innerHTML = film.length
    document.getElementById("frate").innerHTML = film.rating
}

export default FilmList
