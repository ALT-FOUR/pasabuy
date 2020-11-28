const router = require("express").Router();
const { db } = require("../util/admin");

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
        name: "Vitamilk Soya Drink Choco Shake 300ml",
        price: "27.50",
        itemPhoto:
          "https://i1.wp.com/gmart.com.ph/wp-content/uploads/2020/05/VITAMILK-DOUBLE-CHOCO-300ML.jpg",
      },
      {
        id: 2,
        name: "Mogu Mogu Juice Lychee 1L",
        price: "104.50",
        itemPhoto:
          "https://webtest.snrshopping.com/upload/product/Mogu%20Mogu%20Lychee%20with%20Nata%20De%20Coco%20Juice%20Drink%201L-511/Mogu%20Mogu%20Lychee%20with%20Nata%20De%20Coco%20Juice%20Drink%201L-0hV7FWN06f.jpg",
      },
      {
        id: 3,
        name: "Motts Juice Apple",
        price: "262.50",
        itemPhoto:
          "https://ph-test-11.slatic.net/p/b8d63ba60c67117f36cb6908899f7865.jpg",
      },
      {
        id: 4,
        name: "Florida Juice Orange 1L",
        price: "200.00",
        itemPhoto:
          "https://www.thefeta.com/wp-content/uploads/2020/08/Floridas-Natural-100-Premium-Florida-Orange-Juice-No-Pulp-59-Fl-Oz-Feta.jpeg",
      },
      {
        id: 5,
        name: "C2 Green Tea Plain",
        price: "27.50",
        itemPhoto:
          "https://www.grandhypermarkets.com/qatar/image/cache/catalog/products/1/4800016052101-800x800.jpg",
      },
    ],
  };
  try {
    await db.collection("products").doc("beverages").set(productObject);
    return res.json({ message: "Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
