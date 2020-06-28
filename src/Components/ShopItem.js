import React from "react";
import styled from "styled-components";

const ShopItem = ({ name, price }) => {
    return (
        <Wrap>
            <h4>{name}</h4>
            <div>{price}원</div>
        </Wrap>
    );
};

const Wrap = styled.div`
    background-color: white;
    border: 1px solid #495057;
    padding: 0.5rem;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background-color: #495057;
        color: white;
    }

    h4 {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    & + & {
        margin-top: 1rem;
    }
`;

export default ShopItem;
