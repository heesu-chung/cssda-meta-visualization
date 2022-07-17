import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { useSelector } from "react-redux";
import InteractionAttr from "./InteractionAttr";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: #35393e;

    .effect {
        left: 15%;
        transform: translateX(-50%);
    }
    .design {
        left: 85%;
        transform: translateX(-50%);
    }
    cursor: grab;
    :active {
        cursor: grabbing;
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    z-index: 101;
    top: 10vh;
    transform: translateY(-50%);
`;

const Button = styled.div`
    width: 150px;
    height: 4.5vh;
    border-radius: 33px;
    margin-bottom: 30px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--background-color);
    cursor: pointer;

    transition: 0.3s all ease;

    background: #35393e;
    box-shadow: 5px 5px 10px #292c30, -5px -5px 10px #41464c;
    &:hover {
        background: #35393e;
        box-shadow: inset 5px 5px 10px #292c30, inset -5px -5px 10px #41464c;
        cursor: auto;
    }
`;

const InteractionCanvas = ({ category }) => {
    const { sphere, page } = useSelector((state) => state);
    const [hover, setHover] = useState(-1);
    /* Specific Position */
    const position = [0, 7, 0];
    const target = [0, 0, 0];

    const onMouseOver = (idx) => {
        setHover(idx);
    };

    return (
        <Wrapper>
            <ButtonContainer className="effect">
                <Button onMouseOver={(e) => onMouseOver(0)}>
                    Parallax Scrolling
                </Button>
                <Button onMouseOver={(e) => onMouseOver(1)}>
                    Horizontal Scrolling
                </Button>
                <Button onMouseOver={(e) => onMouseOver(2)}>
                    Auto Scrolling
                </Button>
                <Button onMouseOver={(e) => onMouseOver(3)}>
                    Infinite Scrolling
                </Button>
                <Button onMouseOver={(e) => onMouseOver(4)}>Page Slider</Button>
                <Button onMouseOver={(e) => onMouseOver(5)}>
                    Page Transition
                </Button>
                <Button onMouseOver={(e) => onMouseOver(6)}>
                    Page Fade In & Out
                </Button>
                <Button onMouseOver={(e) => onMouseOver(7)}>Gyroscope</Button>
                <Button onMouseOver={(e) => onMouseOver(8)}>
                    Cursor Image
                </Button>
                <Button onMouseOver={(e) => onMouseOver(9)}>
                    Cursor Interpolation
                </Button>
            </ButtonContainer>

            <ButtonContainer className="design">
                <Button onMouseOver={(e) => onMouseOver(10)}>
                    Cursor Shape
                </Button>
                <Button onMouseOver={(e) => onMouseOver(11)}>
                    Graphic / Typo
                </Button>
                <Button onMouseOver={(e) => onMouseOver(12)}>Illust</Button>
                <Button onMouseOver={(e) => onMouseOver(13)}>3D Graphic</Button>
                <Button onMouseOver={(e) => onMouseOver(14)}>
                    Video/Image
                </Button>
                <Button onMouseOver={(e) => onMouseOver(15)}>
                    Optical Illusion
                </Button>
                <Button onMouseOver={(e) => onMouseOver(16)}>Grid</Button>
                <Button onMouseOver={(e) => onMouseOver(17)}>Noise</Button>
                <Button onMouseOver={(e) => onMouseOver(18)}>WebGL</Button>
                <Button onMouseOver={(e) => onMouseOver(19)}>Vivid Tone</Button>
            </ButtonContainer>

            <Canvas camera={{ position: position }}>
                <ambientLight />
                <InteractionAttr
                    sphere={sphere}
                    page={page}
                    category={category}
                    hover={hover}
                />
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={sphere.rotationSpeed}
                    // enableRotate={true}
                    enableZoom={false}
                    // enablePan={true}
                    target={target}
                />
            </Canvas>
        </Wrapper>
    );
};

export default InteractionCanvas;
