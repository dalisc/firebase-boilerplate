const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

app.post("/write-doc", async (req, res) => {
  // TODO: create document reference
  try {
    // TODO: write to database
    console.log("Write Success", r);
    return res.status(200).end();
  } catch (e) {
    console.error("Write Failure", e);
    return res.status(500).end();
  }
});

app.post("/write-docs", async (req, res) => {
  const { collection, documents } = req.body;
  // TODO: Create batch transaction and document refs
  try {
    // TODO: write to database
    console.log("Batch Write Success", r);
    return res.status(200).end();
  } catch (e) {
    console.error("Batch Write Failure", e);
    return res.status(500).end();
  }
});

app.get("/read-doc", async (req, res) => {
  // TODO: create document reference
  try {
    // TODO: read from database
    console.log("Read success", r);
    return res.status(200).send({
      name: r.id,
      value: r.data(),
    });
  } catch (e) {
    console.error("Read failure", e);
    return res.status(500).end();
  }
});

exports.api = functions.https.onRequest(app);
