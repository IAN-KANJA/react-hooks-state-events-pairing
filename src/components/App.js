import video from "../data/video.js";
import React, {useState} from "react";

function App() {
  console.log("Here's your data:", video);

 const [like,setLike] =useState(10000000)
 const [Dislike,setdisLike] =useState(10000)

 const [likeactive,setLikeactive] =useState(false)
 const [Dislikeactive,setDisLikeactive] =useState(false)

function likef(){
  if(likeactive){
    setLikeactive(false)
    setLike(like -1)
  }else{
    setLikeactive(true)
    setLike(like+1)
    if(Dislikeactive){
      setDisLikeactive(false)
      setLike(like +1)
      setdisLike(Dislike +1)
    }
  }
  
}
function dislikef(){
  if(Dislikeactive){
    setDisLikeactive(false)
    setdisLike(Dislike -1)
  }else{
    setDisLikeactive(true)
    setdisLike(like+1)
    if(likeactive){
      setDisLikeactive(false)
      setdisLike(Dislike +1)
      setLike(like +1)
    }
  }
}


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <p>
        NEVER GONNA GIVE UP - Rick Astley
        </p>
        <p>
        1,532,449,264 views | Oct 25, 2009
        </p>
      <p><button className="like" onClick={likef}>like {like}</button>
      <button  className="dislike"  onClick={dislikef}>Dislike {Dislike}</button></p>
      <p><button>Hidden comments</button></p>
    </div>
  );
}

export default App;
