import React from 'react'
import { useLoader } from '@react-three/fiber'
import {TextureLoader} from "three/src/loaders/TextureLoader"


function Box() {
    const colormap = useLoader(TextureLoader , "textr2.jpg");
  return <mesh rotation={[80,10,80]}>
    <boxBufferGeometry attach={"geometry"} args = {[3,3,3]}/>
    <meshStandardMaterial map={colormap}/>
  </mesh>
}

export default Box