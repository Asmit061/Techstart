import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passportConfig from "./lib/passportConfig.js";
import cors from "cors";
import fs from "fs";


mongoose.connect("mongodb+srv://techstart:techstart@cluster0.hvey20q.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true 
})
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));


const app = express();
const port = 4444;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

// Routing
import r from  "./routes/authRoutes.js"
import p from "./routes/apiRoutes.js"
import j from "./routes/uploadRoutes.js"
import y from "./routes/downloadRoutes.js"
app.use("/auth", r );
app.use("/api", p);
app.use("/upload", j);
app.use("/host", y);

// Making Build Folder as Public 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});

