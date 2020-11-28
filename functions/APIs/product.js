const router = require("express").Router();
const { db } = require("../util/admin");
const productObject = require("./productObject");

router.get("/allProducts", async (req, res) => {
  try {
    const products = await db.collection("products").get();
    let listProducts = [];
    await products.forEach((doc) => {
      listProducts.push({
        data: doc.data(),
      });
    });
    return res.json(listProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/products", async (req, res) => {
  try {
    let category = req.query.category;
    const productRef = await db.collection("products").doc(`${category}`).get();
    res.json(productRef.data());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/addProducts", async (req, res) => {
  const productObject = {
    items: [
      {
        id: 1,
        name: "Lay's Potato Chips Cheddar & Sour Cream",
        price: "149.50",
        itemPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47J1ZmwkNy4yGgOQ4AHUNm5itREh0ZI3nig&usqp=CAU",
      },
      {
        id: 2,
        name: "Potato Chips Classics Classic Barbeque",
        price: "29.50",
        itemPhoto:
          "https://i5.walmartimages.com/asr/8a71fcba-e670-4b5c-9120-8b162d739de3_1.39861ccb364e931a9b4411d1e96484c5.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
      },
      {
        id: 3,
        name: "Honey Butter Potato Chips",
        price: "91.50",
        itemPhoto:
          "https://www.widebizz.com/shopping/uploads/product_image/product_1545_1.jpg",
      },
      {
        id: 4,
        name: "Doritos Tortilla Chips Nacho Cheese",
        price: "144.50",
        itemPhoto:
          "https://images-na.ssl-images-amazon.com/images/I/81iUuyr2R7L._SL1500_.jpg",
      },
      {
        id: 5,
        name: "Nova Corn Chips",
        price: "27.50",
        itemPhoto:
          "https://www.sarisaristore.se/238-large_default/nova-chips.jpg",
      },
    ],
  };
  try {
    await db.collection("products").doc("chips").set(productObject);
    return res.json({ message: "Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
