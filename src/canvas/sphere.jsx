export default function Sphere () {
    return (
        <mesh position={[0, 0, -2]}>
            <sphereGeometry arts={[2, 32]}/>
            <meshStandartMaterial color={0x00ff00}/>
        </mesh>
    )
}