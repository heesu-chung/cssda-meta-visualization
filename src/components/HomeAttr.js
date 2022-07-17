import React from "react";

const HomeAttr = ({ sphere, page, isColored }) => {
    const { sizeDiff, sizeRatio, resolution } = sphere;

    /* 1_Position */
    let pos = [];
    const radius = 3;
    for (let i = 0; i < 360; i += 2) {
        pos.push([
            Math.sin(i * (Math.PI / 180)) * radius,
            0,
            Math.cos(i * (Math.PI / 180)) * radius,
        ]);
    }

    /* 1_Size */
    let size = [];
    let color = [];
    [...page].forEach((el, idx) => {
        const { total, mainColor } = el;
        const newSize = ((total - sizeDiff) * sizeRatio).toFixed(3) * -1;
        size.push(newSize);
        color.push(mainColor);
    });
    return (
        <>
            {pos.map((el, idx) => (
                <mesh key={idx} position={el}>
                    <sphereGeometry
                        args={[size[idx] * -0.1, resolution, resolution]}
                    />
                    <meshStandardMaterial
                        color={isColored === true ? color[idx] : "#35393e"}
                        sizeAttenuation
                    />
                </mesh>
            ))}
        </>
    );
};

export default HomeAttr;
