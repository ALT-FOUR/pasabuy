import { FIREBASE_API } from "../../api/FIREBASE_API";
import React, { useEffect, useState } from "react";

import CardItem from "../card item/CardItem";
import "./items.styles.css";

const Chips = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chipsData, setChipsData] = useState([]);

  const fetchChipsData = async () => {
    try {
      setIsLoading(true);
      const res = await FIREBASE_API.get("/products?category=chips");
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
    <div className="body">
      <div className="items-container">
        <h1 class="variety">Chips</h1>
        {chipsData !== undefined
          ? chipsData.map(({ id, name, ...otherProps }) => (
              <CardItem key={id} name={name} {...otherProps} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Chips;
