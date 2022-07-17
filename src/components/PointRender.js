import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const PointRender = ({ el, idx, resolution, animation, size }) => {
    const ref = useRef();
    const particleColor = "#003636";
    let time = 0;
    const movementRadius = 0.0001;
    const cycle = 30;
    useFrame((state, delta) => {
        time++;
        return (ref.current.position.x +=
            animation[(idx * cycle + time) % 180] * movementRadius);
    });

    useFrame((state, delta) => {
        return (ref.current.position.y +=
            animation[(idx * cycle + time) % 180] * movementRadius * 2);
    });

    return (
        <>
            {
                <mesh ref={ref} position={el}>
                    <sphereGeometry
                        // args={[size[idx], resolution, resolution]}
                        args={[size[idx], resolution * 2, resolution * 2]}
                    />
                    <meshStandardMaterial
                        color={particleColor}
                        sizeAttenuation
                    />
                </mesh>
            }
        </>
    );
};

export default PointRender;
