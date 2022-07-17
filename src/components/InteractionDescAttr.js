import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const InteractionDescAttr = ({ sphere, page }) => {
    const subRes = 50;
    const newSpeed = sphere.rotationSpeed * 4;
    /* Scale Animation */
    let scaleAni = [];
    const movementRadius = 0.7;
    const ref = useRef();
    let time = 0;
    const scaleRatio = 0.005;
    for (let i = 0; i < 360; i += 1) {
        scaleAni.push(Math.sin(i * (Math.PI / 180)) * movementRadius);
    }
    /* 5_Position */
    let posBig = [-10, 0, 0];
    let pos = [
        [-3, -3, 0],
        [0, -1.3, 0],
        [0.8, 0.4, 0],
    ];

    /* 5_Size */
    let sizeBig = 5;
    let size = [2, 1.1, 0.5];

    useFrame((state, delta) => {
        time = (time + newSpeed).toFixed(0) % 360;
        return (ref.current.scale.x += scaleAni[time] * scaleRatio);
    });
    useFrame((state, delta) => {
        time = (time + newSpeed).toFixed(0) % 360;
        return (ref.current.scale.y += scaleAni[time] * scaleRatio);
    });
    useFrame((state, delta) => {
        time = (time + newSpeed).toFixed(0) % 360;
        return (ref.current.scale.z += scaleAni[time] * scaleRatio);
    });

    return (
        <>
            <mesh ref={ref} position={posBig}>
                <circleGeometry args={[sizeBig, subRes]} />
                <meshStandardMaterial color={"#f2f2f2"} sizeAttenuation />
            </mesh>
            {[...pos].map((el, idx) => (
                <mesh key={idx} position={el}>
                    <circleGeometry args={[size[idx], subRes, subRes]} />
                    <meshStandardMaterial color={"#f2f2f2"} sizeAttenuation />
                </mesh>
            ))}
        </>
    );
};

export default InteractionDescAttr;
