import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Line from "./line/Line";

const posAdj = 0.8;

/*
    3  2
    4  1
    
    7  6
    8  5
*/
const lineStart = [
    [posAdj, posAdj, posAdj], // 1 -> 2
    [posAdj, posAdj, -posAdj], // 2 -> 3
    [-posAdj, posAdj, -posAdj], // 3 -> 4
    [-posAdj, posAdj, posAdj], // 4 -> 1

    [posAdj, -posAdj, posAdj], // 5 -> 6
    [posAdj, -posAdj, -posAdj], // 6 -> 7
    [-posAdj, -posAdj, -posAdj], // 7 -> 8
    [-posAdj, -posAdj, posAdj], // 8 -> 5

    [posAdj, posAdj, posAdj], // 1 -> 5
    [posAdj, posAdj, -posAdj], // 2 -> 6
    [-posAdj, posAdj, -posAdj], // 3 -> 7
    [-posAdj, posAdj, posAdj], // 4 -> 8
];
const lineEnd = [
    [posAdj, posAdj, -posAdj], // -> 2
    [-posAdj, posAdj, -posAdj], // -> 3
    [-posAdj, posAdj, posAdj], // -> 4
    [posAdj, posAdj, posAdj], // -> 1

    [posAdj, -posAdj, -posAdj], // -> 6
    [-posAdj, -posAdj, -posAdj], // -> 7
    [-posAdj, -posAdj, posAdj], // -> 8
    [posAdj, -posAdj, posAdj], // -> 5

    [posAdj, -posAdj, posAdj], // -> 5
    [posAdj, -posAdj, -posAdj], // -> 6
    [-posAdj, -posAdj, -posAdj], // -> 7
    [-posAdj, -posAdj, posAdj], // -> 8
];

const HighestAttr = ({ sphere, page }) => {
    const { resolution } = sphere;

    /* 4_Position */
    let pos = [];
    pos.push([0, 0, 0]); // size 0.7

    /* 4_Size */
    let size = [];
    size.push(0.7); // MainColor

    const ref = useRef();
    let time = 0;
    const movementRadius = 0.01;
    const posAni = [];

    for (let i = 0; i < 360; i += 2) {
        posAni.push(Math.sin(i * (Math.PI / 180)) * movementRadius);
    }

    useFrame((state, delta) => {
        time = (time + sphere.rotationSpeed * 2) % 180;
        return (ref.current.position.y += posAni[time]);
    });

    return (
        <>
            {pos.map((el, idx) => (
                <mesh
                    ref={ref}
                    key={idx}
                    position={[el[0], el[1] - 0.3, el[2]]}
                >
                    <sphereGeometry
                        args={[size[idx], resolution * 2, resolution * 2]}
                    />
                    <meshStandardMaterial color={"black"} sizeAttenuation />
                </mesh>
            ))}
            {[...lineStart].map((el, idx) => (
                <Line
                    key={idx}
                    start={lineStart[idx]}
                    end={lineEnd[idx]}
                    color={"#ccc"}
                />
            ))}
        </>
    );
};

export default HighestAttr;
