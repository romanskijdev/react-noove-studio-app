import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF(
        "./star_logo_fix_geometry_for_export.glb"
    );
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0, 5.771]}>
                <primitive object={nodes.Root} />
            </group>
            <mesh
                geometry={nodes.Retopo_Circle004.geometry}
                material={materials.noove2_mat}
                position={[-0.016, 1.764, 0]}
                rotation={[-1.916, 1.17, -0.955]}
            />
        </group>
    );
}

useGLTF.preload("./star_logo_fix_geometry_for_export.glb");
