import { PRODUCT_API } from "../../api/product-api";
import React, { useEffect, useState } from "react";

import CardItem from "../card item/CardItem";

const Chips = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chipsData, setChipsData] = useState([]);

  const fetchChipsData = async () => {
    try {
      setIsLoading(true);
      const res = await PRODUCT_API.get("/products?category=chips");
      setIsLoading(false);
      setChipsData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchChipsData();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="items-container">
      {chipsData !== undefined
        ? chipsData.map(({ id, name, ...otherProps }) => (
            <CardItem key={id} name={name} {...otherProps} />
          ))
        : null}
    </div>
  );
};

export default Chips;
