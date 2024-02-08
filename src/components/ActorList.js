import React from 'react'


function ActorList(props) {
    

  return (
    <div>
      {props.actors && props.actors.map(actor => {
        return(
          <div key = {actor.actor_id}>
            <h2>{actor.first_name} {actor.last_name}</h2>
            <div className='row'>
                <div className = "col-md-1">
                    <button className = "btn btn-primary"
                        onClick = {()=> ActorInfo(actor)} 
                    >More Info</button>
                </div>
            </div>    
          </div>
        )
      })}
    </div>
  )

}

function ActorInfo(actor){

    document.getElementById("afname").innerHTML = actor.first_name + ' ' +  actor.last_name
    if(actor.first_name == 'GINA'){
        document.getElementById("movie1").innerHTML = "GOODFELLAS SALUTE"
        document.getElementById("movie2").innerHTML = "WIFE TURN"
        document.getElementById("movie3").innerHTML = "DOGMA FAMILY"
        document.getElementById("movie4").innerHTML = "DEER VIRGINIAN"
        document.getElementById("movie5").innerHTML = "STORM HAPPINESS"
    }
    else if(actor.first_name == 'WALTER'){
        document.getElementById("movie1").innerHTML = "HOBBIT ALIEN"
        document.getElementById("movie2").innerHTML = "WITCHES PANIC"
        document.getElementById("movie3").innerHTML = "CURTAIN VIDEOTAPE"
        document.getElementById("movie4").innerHTML = "LIES TREATMENT"
        document.getElementById("movie5").innerHTML = "WARDROBE PHANTOM"
    }
    else if(actor.first_name == 'MARY'){
        document.getElementById("movie1").innerHTML = "SWEDEN SHINING"
        document.getElementById("movie2").innerHTML = "BUTTERFLY CHOCOLAT"
        document.getElementById("movie3").innerHTML = "IDOLS SNATCHERS"
        document.getElementById("movie4").innerHTML = "GLEAMING JAWBREAKER"
        document.getElementById("movie5").innerHTML = "HANDICAP BOONDOCK"
    }
    else if(actor.first_name == 'MATTHEW'){
        document.getElementById("movie1").innerHTML = "MUSCLE BRIGHT"
        document.getElementById("movie2").innerHTML = "TOMORROW HUSTLER"
        document.getElementById("movie3").innerHTML = "HOUSE DYNAMITE"
        document.getElementById("movie4").innerHTML = "ROBBERS JOON"
        document.getElementById("movie5").innerHTML = "ENGLISH BULWORTH"
    }
    else if(actor.first_name == 'SANDRA'){
        document.getElementById("movie1").innerHTML = "FAMILY SWEET"
        document.getElementById("movie2").innerHTML = "VIRGINIAN PLUTO"
        document.getElementById("movie3").innerHTML = "BLACKOUT PRIVATE"
        document.getElementById("movie4").innerHTML = "GOLDMINE TYCOON"
        document.getElementById("movie5").innerHTML = "STAGECOACH ARMAGEDDON"
    }
}
export default ActorList
