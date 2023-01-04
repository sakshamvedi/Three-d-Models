import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/modelDraco.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="1ce32c04bcc84e09b53feb0841dc0b30fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="sentinel_rig002" rotation={[-Math.PI / 2, 0, -0.86]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.M_sentinel_weapons} skeleton={nodes.Object_51.skeleton} />
                    <skinnedMesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.M_sentinel_body} skeleton={nodes.Object_53.skeleton} morphTargetDictionary={nodes.Object_53.morphTargetDictionary} morphTargetInfluences={nodes.Object_53.morphTargetInfluences} />
                  </group>
                </group>
                <group name="plasma_canon001" position={[-889.95, 168.11, 78.45]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
                  <mesh name="plasma_canon001_M_sentinel_weapons_0" geometry={nodes.plasma_canon001_M_sentinel_weapons_0.geometry} material={materials.M_sentinel_weapons} />
                </group>
                <group name="lascanon001" position={[-1130.98, 168.11, 78.45]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
                  <mesh name="lascanon001_M_sentinel_weapons_0" geometry={nodes.lascanon001_M_sentinel_weapons_0.geometry} material={materials.M_sentinel_weapons} />
                </group>
                <group name="autocanon001" position={[-700.4, 168.11, 78.45]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100}>
                  <mesh name="autocanon001_M_sentinel_weapons_0" geometry={nodes.autocanon001_M_sentinel_weapons_0.geometry} material={materials.M_sentinel_weapons} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/modelDraco.gltf')
