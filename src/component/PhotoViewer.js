import React, { useContext } from "react";
import './PhotoViewer.css';
import { ImageContext ,IndexContext } from "./ImageContext";

export function PhotoViewer({src}){
    return(
        <div className ="my-main-photo">
            <img src={src} alt ="loading error"/>
        </div>

    );
}

const brokenImages = [
  1, 24, 32, 36, 44, 47
];

function getImageUrls() {
  const urls = [];

  for (let i = 0; i < 50; i++) {
      if (!brokenImages.includes(i)) {
          const imageNumberString = i.toString().padStart(2, '0');
          urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
      }
  }

  return urls;
}

export function Getlist() {
  let { imgSrc, setImgSrc } = useContext(ImageContext);
  /*let { index, setIndex } = useContext(IndexContext);
  
  function SetnewImage (newurl, newindex){
    setIndex(index = newindex);
    setImgSrc(imgSrc = newurl);
    console.log(`new image is set!!${index}`);
  }
  */

  return <div class= "photo-list">
    { getImageUrls().map( (url, idx) => {
        const isThisSelectedImage = url === imgSrc;
        
        //if(idx === index)
          return <img src={url} class = {isThisSelectedImage?"selected-image":"nonselected-image"} alt="Random"  onClick = {()=>setImgSrc(imgSrc=url)} /*onClick = {()=> {SetnewImage(url, idx)}}*//>
        //else  
          //return <img src={url} alt="Random"  onClick = {()=> {SetnewImage(url, idx)}}/>
      }
    ) }
  </div>
}


