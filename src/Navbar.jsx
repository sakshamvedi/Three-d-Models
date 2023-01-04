import React from 'react'
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import { OrbitControls } from "@react-three/drei"
import { Model } from './Knight';
function Navbar() {
  return (
  <>
  <div className='navbar'>
  <Canvas className='canvas2' style={{height : "200px" , width :"20%"}}>
  <ambientLight intensity={0.5}/>
  <OrbitControls/>
  <directionalLight position={[-2,5,2]} intensity ={1}/>
  <Model/>
  </Canvas>
<h1>3D - Models </h1>
  </div>
 
  </>
  )
}

export default Navbar