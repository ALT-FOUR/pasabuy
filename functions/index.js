const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");

app.use(cors());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
app.use(require("./APIs/product"));

exports.api = functions.https.onRequest(app);
