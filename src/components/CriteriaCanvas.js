import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CriteriaAttr from "./CriteriaAttr";
import { Text } from "../App";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70vh;
    background: var(--background-color);
`;

const TextContainer = styled.div`
    position: absolute;
    z-index: 100;
    top: 48%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    display: flex;
    flex-direction: row;
    color: #f2f2f2;
    font-size: 15px;
    font-family: "Antic Slab", serif;
    letter-spacing: 0.5px;
`;

const Block = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
`;

const CriteriaCanvas = () => {
    const { sphere, page } = useSelector((state) => state);

    /* Specific Position */
    const position = [0, 0, -2];
    const target = [0, 0, 0];

    return (
        <Wrapper>
            <Text
                fontSize={"40"}
                top={"45"}
                left={"0"}
                opacity={100}
                style={{ textAlign: "center" }}
            >
                Meta Criteria
            </Text>
            <TextContainer>
                <p>PAGE TYPE</p>
                <p>DESIGN ELEMENT</p>
                <p>UI/UX EFFECT</p>
                <p>AWARDS SCORE</p>
                <p>COLOR PALETTE</p>
            </TextContainer>
            <Block />
            <Canvas camera={{ position: position }}>
                <CriteriaAttr sphere={sphere} page={page} />
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={sphere.rotationSpeed * 1.6}
                    // enableRotate={true}
                    enableZoom={false}
                    // enablePan={true}
                    target={target}
                />
            </Canvas>
        </Wrapper>
    );
};

export default CriteriaCanvas;
