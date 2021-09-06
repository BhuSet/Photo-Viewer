import React, { useContext } from "react";
import './PhotoViewer.css';
import { ImageContext } from "./ImageContext";

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
  
  /*function SetnewImage (newurl){
    setImgSrc(imgSrc = newurl);
    console.log("new image is set!!");
  }*/

  return <div class= "photo-list">
    { getImageUrls().map( (url, index) => <img src={url} alt="Random" key={index} onClick = {()=>setImgSrc(imgSrc=url)}/> ) }
  </div>
}


