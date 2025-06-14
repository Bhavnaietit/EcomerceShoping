import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// const jwt = require("jsonwebtoken");
// const multer = require("mult
// er");
// const path = require("path");
import productRouter from "./routes/productRoute.js";
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// // DATA BASE CONNECTION

mongoose.connect(
		"mongodb+srv://bhavna:education%40123@cluster0.4smy43v.mongodb.net/e-commerce"
	)
	.then("database conneted");

// API creation
app.get("/", (req, res) => {
	res.send("api runing");
});

// // IMAGE STORAGE
// const storage = multer.diskStorage({
//     destination: "./upload/images",
//     filename: ((req,file,cb) => {
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     })
// });

// const upload = multer({ storage: storage });

// // Creating Upload EndPoint for images
// app.use('/images', express.static('upload/images'));

// app.post("/upload", upload.single('product'), (req, res) => {
//     res.json({
//         sucess: true,
//         image_url: `http://localhost:${port}/images/${req.file.fieldname}`
//     })
// });

app.use("/product", productRouter);

app.listen(port, (error) => {
	if (!error) console.log("server started!");
	else console.log("Error:", error);
});
