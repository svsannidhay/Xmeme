import React, { useState,useEffect } from 'react';
import axios from '../axios';
import '../Grid.css';
import './MemeCard.css';



function Recent100(data){
  let obj = [];
  let size = Math.min(100,data.length);
  for(let i=size-1;i>=0;i--){
    obj.push(data[i]);
  }
  return obj;
};

const MemeCard = (props) => {
  
  const [meme,setMeme] = useState([]);
  useEffect(async () => {
    const req = await axios.get("/memes");
    setMeme(Recent100(req.data));
  },[props.submitted]);

  return (
    <div id = "wayPoint--memeCard" className="memeCard">
      <div className="memeCard--heading">
        <h3>Recent Memes</h3>
      </div>
      {meme.map(card => (
        <section key = {card._id} className="container clearfix">
          <div className="card">
            <div className="memeCard--name">
              <h3>{card.name}</h3>
            </div>
            <div className="memeCard--caption">
              <h4>{card.caption}</h4>
            </div>
            <div className="memeCard--image">
              <img src={card.url} alt="meme"/>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default MemeCard;