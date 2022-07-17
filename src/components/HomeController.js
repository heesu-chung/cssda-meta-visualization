import React, { useState } from "react";
import styled from "styled-components";
import ControlUnit from "./controller/ControlUnit";
import { AiFillLock } from "react-icons/ai";
import { useSelector } from "react-redux";

const HomeControllerWrapper = styled.div`
    position: fixed;
    top: 0;

    left: ${(props) => (props.state && props.hold === -1 ? -280 : 0)}px;
    width: 300px;
    height: 100vh;
    overflow-y: hidden;
    background: white;
    border: 3px solid #555;
    opacity: ${(props) => (props.state && props.hold === -1 ? 0.3 : 0.8)};

    z-index: 10000;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: 0.5s all ease;

    cursor: ${(props) => (props.state ? "pointer" : "auto")};

    &:hover {
        opacity: 0.8;
    }

    .icon {
        font-size: 30px;
        margin-left: 83%;
        margin-top: 10px;
        color: ${(props) => (props.hold === 1 ? "#003636" : "#ccc")};
        cursor: pointer;
        transition: 0.3s all ease;
        &:hover {
            color: #99dbdb;
        }
    }

    span {
        position: absolute;
        top: 15px;
        left: 200px;
    }
`;

const Bar = styled.div`
    width: 3px;
    height: 100px;
    border-radius: 2px;
    background: black;
    position: absolute;
    top: 50%;
    left: 97%;
    transform: translateX(-50%);
    transform: translateY(-50%);
`;

const HomeController = () => {
    const { sphere } = useSelector((state) => state);
    const [state, setState] = useState(true);
    const [hold, setHold] = useState(-1);

    return (
        <HomeControllerWrapper
            onClick={() => setState(!state)}
            state={state}
            hold={hold}
        >
            <span>Hold</span>
            <AiFillLock
                className="icon"
                hold={hold}
                onClick={() => setHold(hold * -1)}
            />
            <Bar />

            <ControlUnit el={sphere.sizeDiff} attr={"sizeDiff"} />
            <ControlUnit el={sphere.sizeRatio} attr={"sizeRatio"} />
            <ControlUnit el={sphere.resolution} attr={"resolution"} />
            <ControlUnit el={sphere.rotationSpeed} attr={"rotationSpeed"} />
        </HomeControllerWrapper>
    );
};

export default HomeController;
