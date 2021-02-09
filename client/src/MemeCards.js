import React, { useState,useEffect } from 'react';
import axios from './axios';

const MemeCard = () => {
  const [meme,setMeme] = useState([]);

  //ComponentDid Mount
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/memes");
      setMeme(req.data);
    }
    fetchData();
  },[]);
  console.log(meme);
  return (
    <div>
      {
        
      }
    </div>
  );
}

export default MemeCard;