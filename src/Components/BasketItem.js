import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

const BasketItem = observer(({ name, price, count, onTake }) => {
    return (
        <Wrap onClick={() => onTake(name)}>
            <div className="name">{name}</div>
            <div className="price">{price}원</div>
            <div className="count">{count}</div>
            <div className="return">갖다놓기</div>
        </Wrap>
    );
});

const Wrap = styled.div`
    display: flex;
    width: 100%;

    .name {
        flex: 2;
    }

    .price {
        flex: 1;
    }

    .count {
        flex: 1;
    }

    .return {
        margin-left: auto;
        color: #f06595;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

    & + & {
        margin-top: 1rem;
    }
`;

export default BasketItem;
