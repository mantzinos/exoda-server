const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const router = require("./routes/api/user");

connectDB();

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api", require("./routes/api/user.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start at port ${PORT}`));