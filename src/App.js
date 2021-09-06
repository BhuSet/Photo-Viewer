//import logo from './logo.svg';
import './App.css';
import { Photolist, PhotoViewer } from './component/PhotoViewer';

//const [imgSrc, setImgSrc] = useState("https://picsum.photos/id/600/1600/900.jpg");

function App() {
  return (
      <div className="App-div">
        <h1>React Photo Viewer</h1>
        <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"}/>
        <h1>Select your photo</h1>
        <Photolist/>
      </div>

    );
}
export default App;
