import React from "react";
import SuperMarketTemplate from "./SuperMarketTemplate";
import ShoptItemList from "./ShopItemList";
import BasketItemList from "./BasketItemList";

const SuperMarket = () => {
    return (
        <SuperMarketTemplate
            items={<ShoptItemList />}
            basket={<BasketItemList />}
        />
    );
};

export default SuperMarket;
