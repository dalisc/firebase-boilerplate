const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const swaggerDefinition = {
  components: {},
  info: {
    title: "Node Firebase API",
    version: "1.0.0",
    servers: ["http://localhost:8080"],
  },
};
const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "index.js")],
};
const swaggerSpec = swaggerJSDoc(options);

/**
 * @swagger
 * components:
 *   schemas:
 *     Document:
 *       type: object
 *       properties:
 *         collectionName:
 *           type: string
 *         documentName:
 *           type: string
 *         documentValue:
 *           type: object
 *
 *   parameters:
 *     collection:
 *       name: collectionName
 *       in: query
 *       required: true
 *       schema:
 *         type: string
 *
 *     document:
 *       name: documentName
 *       in: query
 *       required: true
 *       schema:
 *         type: string
 *
 */

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

/**
 * @swagger
 * /read-doc:
 *   get:
 *     description: Reads a document
 *     parameters:
 *       - $ref: '#/components/parameters/collection'
 *       - $ref: '#/components/parameters/document'
 *     responses:
 *      200:
 *        description: success
 *      500:
 *        description: failure
 */
app.get("/read-doc", async (req, res) => {});

/**
 * @swagger
 * /write-doc:
 *   post:
 *     description: Writes a document
 *     parameters:
 *       - in: body
 *         name: body
 *         schema:
 *           $ref: '#/components/schemas/Document'
 *     responses:
 *      200:
 *       description: success
 *      500:
 *       description: failure
 */
app.post("/write-doc", async (req, res) => {});

exports.api = functions.https.onRequest(app);
