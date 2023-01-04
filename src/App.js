import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import { OrbitControls } from "@react-three/drei"
import {Model} from "./Car"
import Navbar from './Navbar';
function App() {
  return (
  <>

<div className='items'>
  <Navbar/>
 <Canvas className='canvas' style={{height : "500px" , width :"100%"}}>
  <ambientLight intensity={0.5}/>
  <OrbitControls/>
  <directionalLight position={[-2,5,2]} intensity ={-1}/>
  <Model/>
 </Canvas>
 </div>
  </>
  );
}

export default App;
