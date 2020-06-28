import React from "react";
import SuperMarketTemplate from "./SuperMarketTemplate";
import ShoptItemList from "./ShopItemList";

const SuperMarket = () => {
    return <SuperMarketTemplate items={<ShoptItemList />} basket={null} />;
};

export default SuperMarket;
