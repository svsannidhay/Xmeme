import React, { useState,useEffect,useReducer } from 'react';
import axios from './axios';
import './Grid.css';
import './MemeCard.css';
import promise from 'promise';
var obj = [];

function Recent100(data){
  let size = Math.min(100,data.length);
  for(let i=size-1;i>=0;i--){
    obj.push(data[i]);
  }
};

const fetchData = new promise(async function(resolve,reject){
  const req = await axios.get("/memes");
  console.log(req.data);
  Recent100(req.data);
  if(obj.length!==0){
    resolve();
  }
});


const MemeCard = () => {
  const [meme,setMeme] = useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  function handleClick() {
    forceUpdate();
  }
  //ComponentDid Mount
  useEffect(() => {
      fetchData.then(
      () => {
          setMeme(obj);
          // console.log(meme);
      }
      );

  },[meme]);
  return (
    <div className="memeCard">
      <div className="memeCard--heading">
        <h3>Recent Memes</h3>
      </div>
      {meme.map(card => (
        <section key = {card._id} className="clearfix">
          <div className="col span-1-of-3">
          </div>
          <div className="card col span-1-of-3">
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
          <div className="col span-1-of-3">
          </div>
        </section>
      ))}
    </div>
  );
}

export default MemeCard;