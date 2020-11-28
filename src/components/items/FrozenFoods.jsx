import { PRODUCT_API } from "../../api/product-api";
import React, { useEffect, useState } from "react";

import CardItem from "../card item/CardItem";

const FrozenFoods = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [frozenFoodsData, setFrozenFoodsData] = useState([]);

  const fetchFrozenFoodsData = async () => {
    try {
      setIsLoading(true);
      const res = await PRODUCT_API.get("/products?category=frozenFoods");
      setIsLoading(false);
      setFrozenFoodsData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchFrozenFoodsData();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="items-container">
      {frozenFoodsData !== undefined
        ? frozenFoodsData.map(({ id, name, ...otherProps }) => (
            <CardItem key={id} name={name} {...otherProps} />
          ))
        : null}
    </div>
  );
};

export default FrozenFoods;
