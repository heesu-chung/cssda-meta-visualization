import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListCanvas from "./ListCanvas";
import { Text } from "../App";

const ListWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 160vh;
    background: var(--background-color);

    display: flex;
    flex-direction: row;
    div {
        flex: 3;
    }
`;

const ListContainer = styled.div`
    font-size: 12px;
    line-height: 22px;
    flex: 6;
    margin-left: 50px;
    text-align: justify;
    .color {
        padding: 0 6px;
        border-radius: 50%;
        border: 1px solid #ccc;
        margin: 0 10px;
    }
    font-family: "Antic Slab", serif;
`;

const List = () => {
    const { page } = useSelector((state) => state);
    const titles = [];
    const mainColors = [];
    const dates = [];
    [...page].forEach((el) => {
        titles.push(el.title);
        mainColors.push(el.mainColor);
        dates.push(el.date);
    });

    return (
        <ListWrapper>
            <ListContainer>
                <>
                    <Text
                        fontSize={"90"}
                        top={"110"}
                        left={"55"}
                        style={{ textAlign: "left" }}
                    >
                        JAN 1st-
                    </Text>
                    <Text
                        fontSize={"90"}
                        top={"120"}
                        left={"55"}
                        opacity={100}
                        style={{ textAlign: "left" }}
                    >
                        JUL 8th
                    </Text>
                    {[...titles].map((el, idx) => (
                        <span key={idx}>
                            <span
                                className="color"
                                colors={mainColors[idx]}
                                style={{ background: mainColors[idx] }}
                            />
                            <span>
                                {dates[idx]} {el}
                            </span>
                        </span>
                    ))}
                </>
            </ListContainer>
            <ListCanvas />
        </ListWrapper>
    );
};

export default List;
