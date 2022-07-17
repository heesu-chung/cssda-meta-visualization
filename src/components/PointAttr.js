import React from "react";
import Line from "./line/Line";
import PointRender from "./PointRender";

const PointAttr = ({ sphere, page }) => {
    const { sizeDiff, sizeRatio, resolution } = sphere;

    /* 2_Position */
    let pos = [];
    let aniPos = [];
    const radius = 5;
    const aniRadius = 3;
    const freq = 1;
    const sizeAdj = 0.2;

    for (let i = 0; i < 360; i += 2) {
        aniPos.push([Math.sin(i * (Math.PI / 180)) * aniRadius]);

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
            <Line start={[0, 3, 0]} end={[0, -3, 0]} />
            {pos.map(
                (el, idx) =>
                    (idx + 1) % freq === 0 && (
                        <PointRender
                            key={idx}
                            el={el}
                            idx={idx}
                            resolution={resolution}
                            animation={aniPos}
                            size={size}
                        />
                    )
            )}
        </>
    );
};

export default PointAttr;
