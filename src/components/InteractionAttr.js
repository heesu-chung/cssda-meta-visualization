import React from "react";
import Line from "./line/Line";

const InteractionAttr = ({ sphere, page, category, hover }) => {
    const { sizeDiff, sizeRatio, resolution } = sphere;
    /* 6_Position */
    let pos = [];
    const radius = 4;
    for (let i = 0; i < 360; i += 2) {
        pos.push([
            Math.sin(i * (Math.PI / 180)) * radius,
            0,
            Math.cos(i * (Math.PI / 180)) * radius,
        ]);
    }

    /* 6_Size */
    let size = [];
    let color = [];
    let lineRatio = [];
    [...page].forEach((el, idx) => {
        const { total, mainColor } = el;
        const newSize = ((total - sizeDiff) * sizeRatio).toFixed(4);
        const newRatio = (total - sizeDiff + 0.4) / 2;
        size.push(newSize);
        color.push(mainColor);
        lineRatio.push(newRatio);
    });

    return (
        <>
            {pos.map((el, idx) => (
                <mesh key={idx} position={el}>
                    <sphereGeometry
                        // args={[size[idx], resolution, resolution]}
                        args={[size[idx] * 0.15, resolution, resolution]}
                    />
                    <meshStandardMaterial
                        color={
                            hover >= 0 && category[hover].includes(idx) === true
                                ? color[idx]
                                : "white"
                        }
                        sizeAttenuation
                    />
                </mesh>
            ))}

            {hover >= 0 &&
                category[hover].map((el, idx) => (
                    <>
                        <Line
                            start={[0, 0, 0]}
                            end={[
                                pos[el][0] * lineRatio[el],
                                pos[el][1] * lineRatio[el],
                                pos[el][2] * lineRatio[el],
                            ]}
                            color={color[el]}
                        />
                    </>
                ))}
        </>
    );
};

export default InteractionAttr;
