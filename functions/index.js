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
  const { collection, documentId, documentValue } = req.body;
  const docRef = db.collection(collection).doc(documentId);
  try {
    const r = await docRef.set(documentValue);
    console.log("Write Success", r);
    return res.status(200).end();
  } catch (e) {
    console.error("Write Failure", e);
    return res.status(500).end();
  }
});

app.get("/read-doc", async (req, res) => {
  const { collection, documentId } = req.query;
  const docRef = db.collection(collection).doc(documentId);
  try {
    const r = await docRef.get();
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
