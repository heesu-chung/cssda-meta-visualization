import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import PointAttr from "./PointAttr";
import { Text } from "../App";

const Wrapper = styled.div`
    position: relative;
    width: 120vw;
    height: 120vh;
    margin-left: 35%;
    margin-top: -120vh;
    background: var(--background-color);
    transition: 0.3s all ease;
    overflow: hidden;
    .canvas {
        transform: rotateZ(-5deg);
    }
`;

const WrapperMargin = styled.div`
    position: relative;
    width: 120vw;
    height: 120vh;
    background: var(--background-color);
`;

const Block = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
`;

const PointCanvas = () => {
    const { sphere, page } = useSelector((state) => state);

    /* Specific Position */
    const position = [0, 0.4, 6.5];
    const target = [0, 0, 0];

    return (
        <>
            <WrapperMargin>
                <Text
                    fontSize={"60"}
                    top={"35"}
                    left={"3"}
                    opacity={100}
                    style={{ textAlign: "left" }}
                >
                    Overview
                </Text>
                <Text
                    fontSize={"26"}
                    top={"43"}
                    left={"3.2"}
                    opacity={50}
                    style={{ textAlign: "left" }}
                >
                    Insight
                </Text>
                <Text
                    fontSize={"18"}
                    top={50}
                    left={"6"}
                    opacity={100}
                    fontFamily={"Noto"}
                    style={{
                        textAlign: "left",
                    }}
                >
                    캠페인 성격을 띈 페이지는 UI/UX 요소와 별개로 성적이 높아
                    제외
                </Text>
                <Text
                    fontSize={"18"}
                    top={55}
                    left={"6"}
                    opacity={100}
                    fontFamily={"Noto"}
                    style={{
                        textAlign: "left",
                    }}
                >
                    Parallax 스크롤 기반 페이지가 전반을 차지
                </Text>
                <Text
                    fontSize={"18"}
                    top={60}
                    left={"6"}
                    opacity={100}
                    fontFamily={"Noto"}
                    style={{
                        textAlign: "left",
                    }}
                >
                    Client Side 페이지 다운로드 시간에 Loading Animation/Image를
                    통한 플로우 유지
                </Text>
                <Text
                    fontSize={"18"}
                    top={65}
                    left={"6"}
                    opacity={100}
                    fontFamily={"Noto"}
                    style={{
                        textAlign: "left",
                    }}
                >
                    무거운 모션으로 인한 웹 퍼포먼스 저하는 사용자 UX 경험을
                    방해하는 요소
                </Text>
                <Text
                    fontSize={"18"}
                    top={70}
                    left={"6"}
                    opacity={100}
                    fontFamily={"Noto"}
                    style={{
                        textAlign: "left",
                    }}
                >
                    Optical Illusion, Cursor Effect, Grid Concept, Vivid Color의
                    경우 페이지 수 대비 성적 저조
                </Text>
                <Text
                    fontSize={"18"}
                    top={75}
                    left={"6"}
                    opacity={100}
                    fontFamily={"Noto"}
                    style={{
                        textAlign: "left",
                    }}
                >
                    Auto Scroll, Infinite Scroll, Mouse Gyroscope, 3D Graphic의
                    경우 페이지 수 대비 성적 고조
                </Text>
            </WrapperMargin>
            <Wrapper>
                <Block />
                <Canvas className="canvas" camera={{ position: position }}>
                    <PointAttr sphere={sphere} page={page} />
                    <OrbitControls
                        autoRotate={true}
                        autoRotateSpeed={sphere.rotationSpeed * 1.5}
                        enableZoom={false}
                        target={target}
                    />
                </Canvas>
            </Wrapper>
        </>
    );
};

export default PointCanvas;
