import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import HomeAttr from "./HomeAttr";
import { Text } from "../App";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: var(--background-color);
    margin-top: -80px;
    overflow: hidden;
`;

const Block = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
`;

const ListCanvas = () => {
    const { sphere, page } = useSelector((state) => state);

    /* Specific Position */
    const position = [0, 5.5, 0];
    const target = [0, 0, 0];

    return (
        <Wrapper>
            <Text fontSize={"20"} top={"42"} left={"0"} style={{}}>
                2022
            </Text>
            <Text fontSize={"19"} top={"45"} left={"0"} style={{}}>
                Website of the day
            </Text>
            <Text fontSize={"60"} top={"47"} left={"0"} style={{}}>
                No.180
            </Text>
            <Text
                fontSize={"90"}
                top={"790"}
                left={"10"}
                style={{ textAlign: "left" }}
            >
                JAN 1st-
            </Text>
            <Text
                fontSize={"90"}
                top={"890"}
                left={"10"}
                opacity={100}
                style={{ textAlign: "left" }}
            >
                JUL 8th
            </Text>
            <Block />
            <Canvas camera={{ position: position }}>
                <ambientLight intensity={0.5} />
                <HomeAttr sphere={sphere} page={page} isColored={true} />
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={sphere.rotationSpeed * 3}
                    enableZoom={false}
                    target={target}
                />
            </Canvas>
        </Wrapper>
    );
};

export default ListCanvas;
