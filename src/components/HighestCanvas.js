import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import HighestAttr from "./HighestAttr";
import { Text } from "../App";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 120vh;
    background: var(--background-color);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: row;
    gap: 60px;
    cursor: grab;
    :active {
        cursor: grabbing;
    }
`;

const HighestCanvas = () => {
    const { sphere, page } = useSelector((state) => state);
    const bestIdx = [52, 78, 94, 149];
    /* Specific Position */
    const position = [
        [0, -1, 3],
        [1, 3, 0],
        [0, 1, -3],
        [0, -3, -1],
    ];
    const target = [0, 0, 0];

    return (
        <Wrapper>
            <Text
                fontSize={"60"}
                top={"-40"}
                left={"0"}
                opacity={100}
                style={{
                    textAlign: "center",
                    flex: "1",
                }}
            >
                OVER 9.00
            </Text>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    width: "84%",
                    left: "-24%",
                    top: "80vh",
                }}
            >
                <Text
                    fontSize={"16"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                        color: "#E31228",
                    }}
                >
                    The Race - Interparfums
                </Text>
                <Text
                    fontSize={"16"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                        color: "#8330C2",
                    }}
                >
                    Potion
                </Text>
                <Text
                    fontSize={"16"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                        color: "#23E5DB",
                    }}
                >
                    Ytech
                </Text>
                <Text
                    fontSize={"16"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                        color: "#ECE4B4",
                    }}
                >
                    601 Inc
                </Text>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    width: "84%",
                    left: "-24%",
                    top: "75vh",
                }}
            >
                <Text
                    fontSize={"20"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    9.06
                </Text>
                <Text
                    fontSize={"20"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    9.09
                </Text>
                <Text
                    fontSize={"20"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    9.06
                </Text>
                <Text
                    fontSize={"20"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    9.27
                </Text>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    width: "84%",
                    left: "-24%",
                    top: "85vh",
                }}
            >
                <Text
                    fontSize={"14"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    <a
                        href="https://therace.montblanclegend.com/en-us"
                        style={{ textDecoration: "none", color: "#35393e" }}
                    >
                        Link
                    </a>
                </Text>
                <Text
                    fontSize={"14"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    <a
                        href="https://www.sendpotion.com/"
                        style={{ textDecoration: "none", color: "#35393e" }}
                    >
                        Link
                    </a>
                </Text>
                <Text
                    fontSize={"14"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    <a
                        href="https://ytech.io/"
                        style={{ textDecoration: "none", color: "#35393e" }}
                    >
                        Link
                    </a>
                </Text>
                <Text
                    fontSize={"14"}
                    top={"0"}
                    left={"0"}
                    opacity={100}
                    style={{
                        textAlign: "center",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    <a
                        href="https://www.rokumaruichi.tokyo/"
                        style={{ textDecoration: "none", color: "#35393e" }}
                    >
                        Link
                    </a>
                </Text>
            </div>
            <Container>
                {[...bestIdx].map((el, idx) => (
                    <Canvas key={idx} camera={{ position: position[idx] }}>
                        <ambientLight intensity={0.3} />
                        <HighestAttr sphere={sphere} page={page[el]} />
                        <pointLight intensity={5} position={[0, 0, 10]} />
                        {/* <pointLight intensity={5} position={[0, 0, -10]} /> */}
                        <OrbitControls
                            autoRotate={true}
                            autoRotateSpeed={
                                idx % 2 === 1
                                    ? sphere.rotationSpeed * 10
                                    : sphere.rotationSpeed * -10
                            }
                            enableZoom={false}
                            target={target}
                        />
                    </Canvas>
                ))}
            </Container>
        </Wrapper>
    );
};

export default HighestCanvas;
