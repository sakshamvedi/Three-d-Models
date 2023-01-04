/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 steering.gltf
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/steering-wheel-lamborghini-gt-vision-sdc-16c345526d484d2992d7a15eb39f9a25
Title: Steering wheel - Lamborghini GT Vision - SDC
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/steering.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, Math.PI / 2, 0]} scale={4.81}>
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Material.012']} />
      </group>
      <group scale={0.04}>
        <mesh geometry={nodes.Object_29.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_30.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_31.geometry} material={materials['Material.007']} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['Material.013']} position={[-1.1, 0.09, 0]} rotation={[0, Math.PI / 2, 0]} scale={[5.67, 4.81, 4.81]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_15.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.Object_16.geometry} material={materials['Material.014']} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_19.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Object_21.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Object_23.geometry} material={materials['Material.010']} rotation={[0, Math.PI / 2, 0]} scale={4.81} />
      <mesh geometry={nodes.Object_25.geometry} material={materials['Material.004']} position={[-2.32, -4.59, 0]} rotation={[0, Math.PI / 2, 0]} scale={3.78} />
      <mesh geometry={nodes.Object_27.geometry} material={materials['Material.006']} position={[-2.57, -0.69, 0]} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.Material} position={[-0.83, -0.9, 0]} scale={0.48} />
      <mesh geometry={nodes.Object_35.geometry} material={materials['Material.005']} position={[-0.83, -0.9, 0]} scale={0.48} />
      <mesh geometry={nodes.Object_37.geometry} material={materials['Material.007']} position={[-0.79, -0.9, 0]} scale={0.48} />
    </group>
  )
}

useGLTF.preload('/steering.gltf')
