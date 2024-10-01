const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post("/upload", upload.single("file"), (req, res) => {
    res.send({ filePath: req.file.path });
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
