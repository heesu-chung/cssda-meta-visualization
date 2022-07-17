import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import InteractionDescAttr from "./InteractionDescAttr";
import { Text } from "../App";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: #35393e;
`;

const Block = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
`;

const Circle = styled.div`
    position: absolute;
    width: 800px;
    height: 800px;
    left: 15%;
    top: -630px;
    border-radius: 50%;
    background: var(--background-color);
    z-index: 1;
`;

const InteractionDescCanvas = () => {
    const { sphere, page } = useSelector((state) => state);

    /* Specific Position */
    const position = [0, 0, 10];
    const target = [0, 0, 0];

    return (
        <Wrapper>
            <Circle />
            <Text
                fontSize={"60"}
                top={"24"}
                left={"-3"}
                opacity={100}
                style={{ textAlign: "right" }}
                color={"#f2f2f2"}
            >
                Meta Visualization
            </Text>
            <Text
                fontSize={"26"}
                top={"32"}
                left={"-3.2"}
                opacity={50}
                style={{ textAlign: "right" }}
                color={"#f2f2f2"}
            >
                Circular Bar Chart
            </Text>
            <Text
                fontSize={"18"}
                top={39}
                left={"-6"}
                opacity={100}
                fontFamily={"Noto"}
                style={{
                    textAlign: "right",
                    fontWeight: "300",
                }}
                color={"white"}
            >
                페이지 별 UI/UX, Design 요소 분리 및 효과적 시각화
            </Text>
            <Text
                fontSize={"18"}
                top={44}
                left={"-6"}
                opacity={100}
                fontFamily={"Noto"}
                style={{
                    textAlign: "right",
                    fontWeight: "300",
                }}
                color={"white"}
            >
                20가지 항목에 대한 페이지들의 포함 여부
            </Text>
            <Text
                fontSize={"18"}
                top={49}
                left={"-6"}
                opacity={100}
                fontFamily={"Noto"}
                style={{
                    textAlign: "right",
                    fontWeight: "300",
                }}
                color={"white"}
            >
                CSSDA 점수 시각화
            </Text>
            <Text
                fontSize={"18"}
                top={54}
                left={"-6"}
                opacity={100}
                fontFamily={"Noto"}
                style={{
                    textAlign: "right",
                    fontWeight: "300",
                }}
                color={"white"}
            >
                Main Color를 통한 페이지 식별
            </Text>
            <Text
                fontSize={"18"}
                top={59}
                left={"-6"}
                opacity={100}
                fontFamily={"Noto"}
                style={{
                    textAlign: "right",
                    fontWeight: "300",
                }}
                color={"white"}
            >
                페이지 좌측 인터페이스 내 sizeDiff 요소 의존 ( 적정 값 : 7.9 )
            </Text>
            <Block />
            <Canvas camera={{ position: position }}>
                <ambientLight intensity={2.5} />
                <InteractionDescAttr sphere={sphere} page={page} />
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={0}
                    enableZoom={false}
                    target={target}
                />
            </Canvas>
        </Wrapper>
    );
};

export default InteractionDescCanvas;
