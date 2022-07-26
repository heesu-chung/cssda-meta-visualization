import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FinalAttr from "./FinalAttr";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    background: white;

    .canvas {
        position: absolute;
        width: 100%;
        height: 90vh;
    }
    .wrap {
        background: #35393e;
        width: 25%;
        margin-left: 50%;
        transform: translateX(-50%);
    }
`;

const Block = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
`;

const FinalCanvas = () => {
    const { sphere, page } = useSelector((state) => state);

    /* Specific Position */
    const position = [0, 3, 3];
    const target = [0, 0, 0];

    return (
        <Wrapper>
            <Block />
            <div className="canvas">
                <Canvas camera={{ position: position }}>
                    <FinalAttr
                        sphere={sphere}
                        page={page}
                        wireframe={true}
                        color={"#666"}
                    />
                    <pointLight intensity={5} position={[0, 0, 10]} />
                    <pointLight intensity={5} position={[0, 0, -10]} />
                    <OrbitControls
                        autoRotate={true}
                        autoRotateSpeed={sphere.rotationSpeed * 2}
                        enableZoom={false}
                        target={target}
                    />
                </Canvas>
            </div>
            <div className="canvas wrap">
                <Canvas camera={{ position: position }}>
                    <ambientLight />
                    <FinalAttr
                        sphere={sphere}
                        page={page}
                        wireframe={true}
                        color={"#fff"}
                    />
                    <OrbitControls
                        autoRotate={true}
                        autoRotateSpeed={sphere.rotationSpeed * 2}
                        enableZoom={false}
                        target={target}
                    />
                </Canvas>
            </div>
        </Wrapper>
    );
};

export default FinalCanvas;
