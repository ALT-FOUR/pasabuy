import { FIREBASE_API } from "../../api/FIREBASE_API";
import React, { useEffect, useState } from "react";

import CardItem from "../card item/CardItem";
import "./items.styles.css";

const Detergent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detergentData, setDetergentData] = useState([]);

  const fetchDetergentData = async () => {
    try {
      setIsLoading(true);
      const res = await FIREBASE_API.get("/products?category=detergent");
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
    <div className="body">
      <div className="items-container">
        {detergentData !== undefined
          ? detergentData.map(({ id, name, ...otherProps }) => (
              <CardItem key={id} name={name} {...otherProps} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Detergent;
