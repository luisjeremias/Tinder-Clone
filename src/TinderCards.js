import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import './tindercards.css';
function TinderCards(){
  const [people, setPeople] = useState([
   
    {
      name:'Mariana Da Silva',
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnAHLzdZktlgaQVK3TW01mpMimIs46ztd7UQ&usqp=CAU",
    },
    {
      name:'Berlim Papel',
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw72UK3j7PZZL7qgdbpQEOSHPJDg6b3vmZ-g&usqp=CAU",
    },
    {
      name:'Josiane Paz',
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQhm0F7lQZHlg0h2OxOvz253XN74SNy5JASQ&usqp=CAU",
    },
    {
      name:'Pedro Perez',
      url:"https://pbs.twimg.com/media/DOZW_qUW4AAcIUh.jpg",
    },
     {
      name:'Joana Lazaro',
      url:"https://static1.purepeople.com.br/articles/7/19/64/47/@/2275547-no-palacio-joana-milana-toscano-e-apr-624x600-2.jpg",
    }
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);
  };
  const outOfFrame = (name) =>{
    console.log(name + "Left the screen!");
  }

  return(
    <div className="tinderCards">
    <div className="tinderCards__cardContainer">
    {people.map((person) => (
    <TinderCard
      className="swipe"
      key={person.name}
      preventSwipe={["up","down"]}
      onSwipe={(dir) => swiped(dir, person.name)}
      onCardLeftScreen={() => outOfFrame(person.name)}
    >
  <div
    style={{backgroundImage:`url(${person.url})`}}
    className="card"
    >
    <h3>{person.name}</h3>
  
  </div>

    </TinderCard>
  ))}
    </div>
    </div>
  );
}
export default TinderCards;
