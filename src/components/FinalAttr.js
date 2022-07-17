import React from "react";

const FinalAttr = ({ sphere, page, wireframe, color }) => {
    const { resolution } = sphere;

    /* Final_Position */
    let pos = [0, 0, 0];

    /* Final_Size */
    let size = 5;

    let newResolution = resolution * 2;

    return (
        <>
            <mesh position={pos}>
                <sphereGeometry args={[size, newResolution, newResolution]} />
                <meshStandardMaterial
                    color={color}
                    sizeAttenuation
                    wireframe={wireframe}
                />
            </mesh>
        </>
    );
};

export default FinalAttr;
