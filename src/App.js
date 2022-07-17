import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import "./styles/common.scss";
import backgroundTransition from "./assets/backgroundTransition.png";

/* Redux */
import { getList } from "./redux/actions/pageAction";

/* Component */
import HomeController from "./components/HomeController";
import HomeCanvas from "./components/HomeCanvas";
import List from "./components/List";
import PointCanvas from "./components/PointCanvas";
import HighestCanvas from "./components/HighestCanvas";
import InteractionDescCanvas from "./components/InteractionDescCanvas";
import InteractionCanvas from "./components/InteractionCanvas";
import CriteriaCanvas from "./components/CriteriaCanvas";
import Footer from "./components/global/Footer";
import DistributionCanvas from "./components/DistributionCanvas";
import FinalCanvas from "./components/FinalCanvas";

/* Meta Data */
import Data from "./Data";

const AppWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`;

const Blank = styled.div`
    position: relative;
    width: 100%;
    background: var(--background-color);
    height: ${(props) => props.height}px;
`;

export const Text = styled.p`
    /* font-family: "Alfa Slab One", cursive; */
    /* font-family: "Anton", sans-serif; */
    font-family: "Rubik Mono One", sans-serif;
    position: absolute;
    font-size: ${(props) => props.fontSize}px;
    color: ${(props) => (props.color ? props.color : "#35393e")};
    margin-top: ${(props) => props.top}vh;
    margin-left: ${(props) => props.left}%;
    opacity: ${(props) => props.opacity}%;
    left: 50%;
    transform: translateX(-50%);

    z-index: 100;
    width: 100%;
    text-align: center;
    /* border: 1px solid black; */
    cursor: auto;
    ${(props) =>
        props.fontFamily === "Noto" &&
        css`
            font-family: "Noto Sans KR", sans-serif;
        `}
`;

function App() {
    const dispatch = useDispatch();
    const meta = Data(); // Meta Data

    const effects = [];
    const designElement = [];

    meta.forEach((el, idx) => {
        effects.push(el.animation[0].split(", "));
    });
    meta.forEach((el, idx) => {
        const { subDesign } = el;
        designElement.push(subDesign);
    });

    /* Parallax Scrolling */
    const parallaxScrolling = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Parallax Scrolling") !== -1)
            parallaxScrolling.push(idx);
    });
    /* Horizontal Scrolling */
    const horizontalScrolling = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Horizontal Scrolling") !== -1)
            horizontalScrolling.push(idx);
    });
    /* Auto Scrolling */
    const autoScrolling = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Auto Scrolling") !== -1) autoScrolling.push(idx);
    });
    /* Infinite Scrolling */
    const infiniteScrolling = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Infinite Scrolling") !== -1)
            infiniteScrolling.push(idx);
    });
    /* Page Slider */
    const pageSlider = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Page Slider") !== -1) pageSlider.push(idx);
    });
    /* Page Transition */
    const pageTransition = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Page Transition") !== -1) pageTransition.push(idx);
    });
    /* Page Fade In / Out */
    const pageFadeInFadeOut = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Fade In Fade Out") !== -1) pageFadeInFadeOut.push(idx);
    });
    /* Cursor Image */
    const cursorImage = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Cursor Image") !== -1) cursorImage.push(idx);
    });
    /* Gyroscope */
    const gyroscope = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Mouse Gyroscope") !== -1) gyroscope.push(idx);
    });
    /* Loading Animation */
    const cursorInterpolation = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("Cursor Interpolation") !== -1)
            cursorInterpolation.push(idx);
    });

    /* Design Element */

    /* Typography */
    const cursorShape = [];
    effects.forEach((el, idx) => {
        if (
            el.indexOf("Cursor Shape") !== -1 ||
            el.indexOf("Cursor Emoji") !== -1
        )
            cursorShape.push(idx);
    });
    /* Graphic */
    const typoGraphic = [];
    designElement.forEach((el, idx) => {
        if (
            el.indexOf("Graphic") !== -1 ||
            el.indexOf("Typographic") !== -1 ||
            el.indexOf("Typography") !== -1
        )
            typoGraphic.push(idx);
    });
    /* Illust */
    const illust = [];
    designElement.forEach((el, idx) => {
        if (el.indexOf("Illust") !== -1) illust.push(idx);
    });
    /* 3D Graphic */
    const graphic3d = [];
    designElement.forEach((el, idx) => {
        if (el.indexOf("3D Graphic") !== -1 || el.indexOf("3D") !== -1)
            graphic3d.push(idx);
    });
    /* Video/Image */
    const videoImage = [];
    designElement.forEach((el, idx) => {
        if (
            el.indexOf("Video/Image") !== -1 ||
            el.indexOf("Video/Image/Sound") !== -1
        )
            videoImage.push(idx);
    });
    /* Optical Illusion */
    const opticalIllusion = [];
    designElement.forEach((el, idx) => {
        if (el.indexOf("Optical Illusion") !== -1) opticalIllusion.push(idx);
    });
    /* Grid */
    const grid = [];
    designElement.forEach((el, idx) => {
        if (el.indexOf("Grid") !== -1) grid.push(idx);
    });
    /* Noise */
    const noise = [];
    designElement.forEach((el, idx) => {
        if (el.indexOf("Noise") !== -1) noise.push(idx);
    });
    /* WebGL */
    const webGL = [];
    effects.forEach((el, idx) => {
        if (el.indexOf("WebGL") !== -1) webGL.push(idx);
    });
    /* Vivid Tone */
    const vividTone = [];
    designElement.forEach((el, idx) => {
        if (el.indexOf("Vivid Tone") !== -1) vividTone.push(idx);
    });

    const category = [
        /* ui/ux effects */
        parallaxScrolling,
        horizontalScrolling,
        autoScrolling,
        infiniteScrolling,
        pageSlider,
        pageTransition,
        pageFadeInFadeOut,
        gyroscope,
        cursorImage,
        cursorInterpolation,
        /* designElement */
        cursorShape,
        typoGraphic,
        illust,
        graphic3d,
        videoImage,
        opticalIllusion,
        grid,
        noise,
        webGL,
        vividTone,
    ];

    useEffect(() => {
        dispatch(getList(meta));
    }, [dispatch, meta]);

    return (
        <AppWrapper className="App">
            <HomeController />
            <HomeCanvas />
            <Blank height={180} />
            <List />
            <Blank height={250} />
            <CriteriaCanvas />
            <Blank height={180} />
            <PointCanvas />
            <Blank height={280} />
            <DistributionCanvas />
            <HighestCanvas />
            <img src={backgroundTransition} alt="" />
            <InteractionDescCanvas />
            <Blank height={300} style={{ background: "#35393E" }} />
            <InteractionCanvas category={category} />
            <Blank height={330} style={{ background: "#35393E" }} />
            <FinalCanvas />
            <Footer />
        </AppWrapper>
    );
}

export default App;
