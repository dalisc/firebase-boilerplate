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

app.get("/read-doc", async (req, res) => {});

app.post("/write-doc", async (req, res) => {});

app.post("/write-docs", async (req, res) => {});

exports.api = functions.https.onRequest(app);
