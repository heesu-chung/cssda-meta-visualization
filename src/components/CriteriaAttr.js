import React from "react";

const CriteriaAttr = ({ sphere, page }) => {
    const { sizeDiff, sizeRatio, resolution } = sphere;

    /* 2_Position */
    let pos = [];
    const radius = 5;
    const sizeAdj = 1.5;

    for (let i = 0; i < 360; i += 2) {
        pos.push([
            Math.sin(i * (Math.PI / 180)) * radius,
            0,
            Math.cos(i * (Math.PI / 180)) * radius,
        ]);
    }

    /* 2_Size */
    let size = [];
    [...page].forEach((el, idx) => {
        const { total } = el;
        const newSize = ((total - sizeDiff) * sizeRatio * sizeAdj).toFixed(4);
        size.push(newSize);
    });

    return (
        <>
            {pos.map((el, idx) => (
                <mesh key={idx} position={el}>
                    <sphereGeometry
                        args={[size[idx], resolution, resolution]}
                    />
                    <meshStandardMaterial color={"#35393e"} sizeAttenuation />
                </mesh>
            ))}
        </>
    );
};

export default CriteriaAttr;
