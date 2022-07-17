import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import HomeAttr from "./HomeAttr";
import { Text } from "../App";
import cssda from "../assets/cssdesignawards.png";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: var(--background-color);
    overflow: hidden;
    cursor: grab;
    :active {
        cursor: grabbing;
    }
`;

const HomeCanvas = () => {
    const { sphere, page } = useSelector((state) => state);

    /* Specific Position */
    const position = [0, 5, 0];
    const target = [0, 0, 0];

    return (
        <Wrapper>
            <img
                src={cssda}
                alt=""
                style={{
                    position: "absolute",
                    top: "22vh",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "0.7rem",
                    opacity: "0.8",
                }}
            />

            <Text fontSize={"150"} top={"40"} left={"0"} style={{}}>
                META
            </Text>
            <Text fontSize={"40"} top={"64"} left={"0"} style={{}}>
                Visualization
            </Text>
            <Canvas camera={{ position: position }}>
                <HomeAttr sphere={sphere} page={page} isColored={false} />
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

export default HomeCanvas;
