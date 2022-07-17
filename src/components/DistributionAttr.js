import React from "react";
import Line from "./line/Line";

const DistributionAttr = ({ sphere, page }) => {
    const { sizeDiff, sizeRatio, resolution } = sphere;

    const sizeAdj = 0.2;

    const score80 = [];
    const score82 = [];
    const score84 = [];
    const score86 = [];
    const score88 = [];
    const score90 = [];

    [...page].forEach((el) => {
        const { total } = el;
        if (total < 8.0) score80.push([total, "black"]);
        else if (total >= 8.0 && total < 8.2) score82.push([total, "black"]);
        else if (total >= 8.2 && total < 8.4) score84.push([total, "black"]);
        else if (total >= 8.4 && total < 8.6) score86.push([total, "black"]);
        else if (total >= 8.6 && total < 8.8) score88.push([total, "black"]);
        else score90.push([total, "black"]);
    });

    /* 3_Position */
    const pos80 = [];
    const pos82 = [];
    const pos84 = [];
    const pos86 = [];
    const pos88 = [];
    const pos90 = [];

    const rad80 = 1;
    const rad82 = 1.3;
    const rad84 = 1.8;
    const rad86 = 2.6;
    const rad88 = 3.8;
    const rad90 = 4.2;

    for (let i = 0; i < 360; i += 4) {
        let x = Math.sin(i * (Math.PI / 180));
        let y = Math.cos(i * (Math.PI / 180));

        pos80.push([x * rad80, 0, y * rad80]);
        pos82.push([x * rad82, 0, y * rad82]);
        pos84.push([x * rad84, 0, y * rad84]);
        pos86.push([x * rad86, 0, y * rad86]);
        pos88.push([x * rad88, 0, y * rad88]);
        pos90.push([x * rad90, 0, y * rad90]);
    }

    return (
        <>
            {score80.map((el, idx) => (
                <mesh key={idx} position={pos80[idx * 2 + 75]}>
                    <sphereGeometry
                        args={[
                            ((el[0] - sizeDiff) * sizeRatio * sizeAdj).toFixed(
                                4
                            ) * 2,
                            resolution,
                            resolution,
                        ]}
                    />
                    <meshStandardMaterial color={el[1]} sizeAttenuation />
                </mesh>
            ))}
            {score82.map((el, idx) => (
                <mesh key={idx} position={pos82[idx]}>
                    <sphereGeometry
                        args={[
                            ((el[0] - sizeDiff) * sizeRatio * sizeAdj).toFixed(
                                4
                            ),
                            resolution,
                            resolution,
                        ]}
                    />
                    <meshStandardMaterial color={el[1]} sizeAttenuation />
                </mesh>
            ))}
            {score84.map((el, idx) => (
                <mesh key={idx} position={pos84[idx * 2 + 5]}>
                    <sphereGeometry
                        args={[
                            ((el[0] - sizeDiff) * sizeRatio * sizeAdj).toFixed(
                                4
                            ),
                            resolution,
                            resolution,
                        ]}
                    />
                    <meshStandardMaterial color={el[1]} sizeAttenuation />
                </mesh>
            ))}
            {score86.map((el, idx) => (
                <mesh key={idx} position={pos86[idx * 2]}>
                    <sphereGeometry
                        args={[
                            ((el[0] - sizeDiff) * sizeRatio * sizeAdj).toFixed(
                                4
                            ) * 1.3,
                            resolution,
                            resolution,
                        ]}
                    />
                    <meshStandardMaterial color={el[1]} sizeAttenuation />
                </mesh>
            ))}
            {score88.map((el, idx) => (
                <mesh key={idx} position={pos88[idx * 2 + 50]}>
                    <sphereGeometry
                        args={[
                            ((el[0] - sizeDiff) * sizeRatio * sizeAdj).toFixed(
                                4
                            ) * 1.3,
                            resolution,
                            resolution,
                        ]}
                    />
                    <meshStandardMaterial color={el[1]} sizeAttenuation />
                </mesh>
            ))}
            {score90.map((el, idx) => (
                <mesh key={idx} position={pos90[idx * 2 + 5]}>
                    <sphereGeometry
                        args={[
                            ((el[0] - sizeDiff) * sizeRatio * sizeAdj).toFixed(
                                4
                            ) * 1.2,
                            resolution,
                            resolution,
                        ]}
                    />
                    <meshStandardMaterial color={el[1]} sizeAttenuation />
                </mesh>
            ))}
            <Line start={[0, 2, 0]} end={[0, -2, 0]} />
        </>
    );
};
export default DistributionAttr;
