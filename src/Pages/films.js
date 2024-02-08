import React from 'react'
import { useState, useEffect } from 'react'

const Films = () =>{
    const[allFilms, setAllFilms] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const [filteredFilms, setFilteredFilms] = useState(allFilms)
    const [filterName, setFilterName] = useState('title')

    useEffect(() => {
      fetch ('http://localhost:5000/allFilms', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setAllFilms(resp))
      .catch(error => console.log(error))
    },[])





    const handleInputChange = (e) => { 
      const searchTerm = e.target.value;
      setSearchItem(searchTerm)
      if(filterName == 'title'){
        const filteredFilms = allFilms.filter((film) =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFilms(filteredFilms);
      }
      else if(filterName == 'actor'){
        const filteredFilms = allFilms.filter((film) =>
        film.actors.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFilms(filteredFilms);
      }
      else if(filterName =='category'){
        const filteredFilms = allFilms.filter((film) =>
        film.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFilms(filteredFilms);
      }

    }
  




  return (
    
    <div> 

      <h1 class = "center">Search And Filter</h1>
      <h1 class = "center">Film Info:      
      <h2>Film Title: </h2><h2 id="ftitle"></h2>
      <h3>Description: <h3 id="fdesc"></h3></h3>
      <h3>Release Year: <h3 id="fyear"></h3></h3>
      <h3>Film Length(in minuets): <h3 id="fleng"></h3></h3>
      <h3>Film Rating: <h3 id="frate"></h3></h3>
      </h1>
      

      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      /> 
      <select onChange={(e)=> setFilterName(e.target.value)}>
        <option value ='title'>Title</option>
        <option value ='actor'>Actor Name</option>
        <option value ='category'>Genre</option>
      </select>  

      


      <ul>
        {filteredFilms.map(allFilm => <li key={allFilm.film_id}>{allFilm.title}         <div className = "col-md-1">
                    <button className = "btn btn-primary"
                        onClick = {()=> myFunction(allFilm)} 
                    >More Info</button>
                </div></li>)}

      </ul>
</div>
  )
}
function myFunction(film){
  document.getElementById("ftitle").innerHTML = film.title
  document.getElementById("fdesc").innerHTML = film.description
  document.getElementById("fyear").innerHTML = film.release_year
  document.getElementById("fleng").innerHTML = film.length
  document.getElementById("frate").innerHTML = film.rating
  window.scrollTo(0,0)
}

export default Films
