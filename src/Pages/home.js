import {useState, useEffect} from 'react';
import FilmList from '../components/FilmList';
import ActorList from '../components/ActorList';
import {Browser as Router,Switch,Route,Link} from "react-router-dom";


const Home = () => {
    const[films, setFilms] = useState([])
    const[actors, setActors] = useState([])

    const[actorFilms1, setActorFilms1] = useState([])
    const[actorFilms2, setActorFilms2] = useState([])
    const[actorFilms3, setActorFilms3] = useState([])
    const[actorFilms4, setActorFilms4] = useState([])
    const[actorFilms5, setActorFilms5] = useState([])


useEffect(() => {
  fetch ('http://localhost:5000/films', {
    'method':'GET',
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(resp => resp.json())
  .then(resp => setFilms(resp))
  .catch(error => console.log(error))
},[])

useEffect(() => {
  fetch ('http://localhost:5000/actors', {
    'method':'GET',
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(resp => resp.json())
  .then(resp => setActors(resp))
  .catch(error => console.log(error))
},[])

  useEffect(() => {
      fetch ('http://localhost:5000/num1movie', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setActorFilms1(resp))
      .catch(error => console.log(error))
    },[])

    useEffect(() => {
      fetch ('http://localhost:5000/num2movie', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setActorFilms2(resp))
      .catch(error => console.log(error))
    },[])

    useEffect(() => {
      fetch ('http://localhost:5000/num3movie', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setActorFilms3(resp))
      .catch(error => console.log(error))
    },[])


    useEffect(() => {
      fetch ('http://localhost:5000/num4movie', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setActorFilms4(resp))
      .catch(error => console.log(error))
    },[])

    useEffect(() => {
      fetch ('http://localhost:5000/num5movie', {
        'method':'GET',
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then(resp => resp.json())
      .then(resp => setActorFilms5(resp))
      .catch(error => console.log(error))
    },[])
return(
<div className="App">
      <h1>Top 5 Rented Films</h1>
      
      <FilmList films = {films}/>
      
      <h1>Film Info</h1>
      <h1></h1>
      <h4>Film Title: </h4><h4 id="ftitle"></h4>
      <h5>Description: <h5 id="fdesc"></h5></h5>
      <h5>Release Year: <h5 id="fyear"></h5></h5>
      <h5>Film Length(in minuets): <h5 id="fleng"></h5></h5>
      <h5>Film Rating: <h5 id="frate"></h5></h5>

      <h1>Actors</h1>

      <ActorList actors = {actors}/>
      <h1>Actor Info</h1>
      <h3 id="afname"></h3>
      <h5 id ="movie1"></h5>
      <h5 id ="movie2"></h5>
      <h5 id ="movie3"></h5>
      <h5 id ="movie4"></h5>
      <h5 id ="movie5"></h5>


    </div>
  );
}
export default Home;