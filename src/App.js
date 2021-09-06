//import logo from './logo.svg';
import './App.css';
import { Getlist, PhotoViewer } from './component/PhotoViewer';
import { useState } from 'react';
import { ImageContext, IndexContext } from './component/ImageContext';


//const ImageContext = React.createContext('imgSrc', );

function App() {
  let [ imgSrc, setImgSrc ] = useState("https://picsum.photos/id/600/1600/900.jpg");
  let  [index, setIndex ] = useState(0);

  return (
    <ImageContext.Provider value={{imgSrc: imgSrc, setImgSrc: setImgSrc }}>
      <IndexContext.Provider value={{index: index, setIndex: setIndex }}>
        <div className="App-div">
          <h1>React Photo Viewer</h1>
          <PhotoViewer src={imgSrc}/>
          <h1>Select your photo</h1>
          <Getlist />
        </div>
      </IndexContext.Provider>
    </ImageContext.Provider>

    );
}
export default App;
