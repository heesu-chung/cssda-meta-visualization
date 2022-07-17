import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DistributionAttr from "./DistributionAttr";
import { Text } from "../App";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 130vh;
    background: var(--background-color);
`;

const CanvasBlock = styled.div`
    width: 100%;
    height: 130vh;
    margin-left: 130px;
`;

const Block = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
`;

const DistributionCanvas = () => {
    const { sphere, page } = useSelector((state) => state);

    /* Specific Position */
    const position = [0, -4, 6];
    const target = [0, 0, 0];

    return (
        <Wrapper>
            <Text
                fontSize={"60"}
                top={"0"}
                left={"3"}
                opacity={100}
                style={{ textAlign: "left" }}
            >
                Distribution
            </Text>
            <Text
                fontSize={"26"}
                top={"8"}
                left={"3"}
                opacity={50}
                style={{ textAlign: "left" }}
            >
                UI/UX/Innovation Average
            </Text>
            <Text
                fontSize={"30"}
                top={"15"}
                left={"6"}
                opacity={100}
                style={{ textAlign: "left" }}
            >
                -8.0: 5
            </Text>
            <Text
                fontSize={"30"}
                top={"20"}
                left={"6"}
                opacity={100}
                style={{ textAlign: "left" }}
            >
                -8.2: 67
            </Text>
            <Text
                fontSize={"30"}
                top={"25"}
                left={"6"}
                opacity={100}
                style={{ textAlign: "left" }}
            >
                -8.4: 42
            </Text>
            <Text
                fontSize={"30"}
                top={"30"}
                left={"6"}
                opacity={100}
                style={{ textAlign: "left" }}
            >
                -8.6: 36
            </Text>
            <Text
                fontSize={"30"}
                top={"35"}
                left={"6"}
                opacity={100}
                style={{ textAlign: "left" }}
            >
                -8.8: 19
            </Text>
            <Text
                fontSize={"30"}
                top={"40"}
                left={"6"}
                opacity={100}
                style={{ textAlign: "left" }}
            >
                8.8-: 11
            </Text>
            <Block />
            <CanvasBlock>
                <Canvas camera={{ position: position }}>
                    <DistributionAttr sphere={sphere} page={page} />
                    <pointLight intensity={5} position={[0, 0, 10]} />
                    <pointLight intensity={5} position={[0, 0, -10]} />
                    <OrbitControls
                        autoRotate={true}
                        autoRotateSpeed={sphere.rotationSpeed}
                        enableZoom={false}
                        target={target}
                    />
                </Canvas>
            </CanvasBlock>
        </Wrapper>
    );
};

export default DistributionCanvas;
