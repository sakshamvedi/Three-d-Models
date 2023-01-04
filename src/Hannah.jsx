/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 hannah.gltf
Author: andy.gallagher714 (https://sketchfab.com/andy.gallagher714)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hannah-bc2144840be4463ea09edd8c329e5639
Title: Hannah
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/hannah.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0}>
          <mesh geometry={nodes['Body_Material_#7_0'].geometry} material={materials.Material_7} rotation={[Math.PI / 2, 0, 0]} scale={2.54} />
          <mesh geometry={nodes['Eye_Lashes_Material_#6_0'].geometry} material={materials.Material_6} rotation={[Math.PI / 2, 0, 0]} scale={2.54} />
          <mesh geometry={nodes.Eye_Puples_Material_0.geometry} material={materials.Material} rotation={[Math.PI / 2, 0, 0]} scale={2.54} />
          <mesh geometry={nodes['Eyeballs_Material_#4_0'].geometry} material={materials.Material_4} rotation={[Math.PI / 2, 0, 0]} scale={2.54} />
          <mesh geometry={nodes['Mouth_Material_#23_0'].geometry} material={materials.Material_23} rotation={[Math.PI / 2, 0, 0]} scale={2.54} />
          <mesh geometry={nodes['Hair_Material_#5_0'].geometry} material={materials.Material_5} rotation={[Math.PI / 2, 0, 0]} scale={2.54} />
          <mesh geometry={nodes['Head_Material_#3_0'].geometry} material={materials.Material_3} rotation={[Math.PI / 2, 0, 0]} scale={2.54} />
          <mesh geometry={nodes['Pubic_Hair_Material_#20_0'].geometry} material={materials.Material_20} rotation={[Math.PI / 2, 0, 0]} scale={2.54} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/hannah.gltf')