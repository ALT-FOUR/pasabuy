import { PRODUCT_API } from "../../api/product-api";
import React, { useEffect, useState } from "react";

import CardItem from "../card item/CardItem";

const Detergent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detergentData, setDetergentData] = useState([]);

  const fetchDetergentData = async () => {
    try {
      setIsLoading(true);
      const res = await PRODUCT_API.get("/products?category=detergent");
      setIsLoading(false);
      setDetergentData(res.data.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDetergentData();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="items-container">
      {detergentData !== undefined
        ? detergentData.map(({ id, name, ...otherProps }) => (
            <CardItem key={id} name={name} {...otherProps} />
          ))
        : null}
    </div>
  );
};

export default Detergent;
