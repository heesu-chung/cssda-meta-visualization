import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import {
    setDayRatio,
    setMonthRatio,
    setResolution,
    setRotationSpeed,
    setSizeDiff,
    setSizeRatio,
} from "../../redux/actions/sphereAction";

const ControlUnitWrapper = styled.div`
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;

    div {
        .title {
            font-weight: 300;
            font-size: 15px;
            margin-top: 10px;
            /* border: 1px solid black; */
        }
        .value {
            font-weight: 500;
            font-size: 15px;
            border: 1px solid #ccc;
        }
        button {
            background: white;
            height: 25px;
            transition: 0.4s all ease;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-left: 10px;
            color: #999;
            cursor: pointer;
            &:hover {
                background: black;
                border: 1px solid black;
                color: white;
            }
        }
    }
`;

const ControlUnit = ({ el, attr }) => {
    const dispatch = useDispatch();

    const [unit, setUnit] = useState(el);

    const onSubmit = () => {
        if (attr === "sizeDiff") {
            dispatch(setSizeDiff(Number(unit)));
        } else if (attr === "sizeRatio") {
            dispatch(setSizeRatio(Number(unit)));
        } else if (attr === "monthRatio") {
            dispatch(setMonthRatio(Number(unit)));
        } else if (attr === "dayRatio") {
            // dispatch(setDayRatio(Number(unit)));
        } else if (attr === "resolution") {
            dispatch(setResolution(Number(unit)));
        } else if (attr === "rotationSpeed") {
            dispatch(setRotationSpeed(Number(unit)));
        }
    };

    return (
        <ControlUnitWrapper>
            <div>
                <p className="title">{attr}</p>
                <input
                    type="text"
                    style={{ width: "20%" }}
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                />
                <button type="submit" onClick={onSubmit}>
                    Change
                </button>
            </div>
        </ControlUnitWrapper>
    );
};

export default ControlUnit;
