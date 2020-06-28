import React from "react";
import styled from "styled-components";

const SuperMarketTemplate = ({ items, basket }) => {
    return (
        <>
            <Wrap>
                <div className="items-wrapper">
                    <h2>상품</h2>
                    {items}
                </div>
                <div className="bascket-wrapper">
                    <h2>장바구니</h2>
                    {basket}
                </div>
            </Wrap>
        </>
    );
};

const Wrap = styled.div`
    width: 768px;
    display: flex;
    border: 1px solid black;
    margin: 3rem auto 0 auto;

    h2 {
        margin-top: 0;
    }

    > div {
        padding: 1rem;
        flex: 1;
    }

    .items-wrapper {
        background-color: #f8f9fa;
    }
`;

export default SuperMarketTemplate;
