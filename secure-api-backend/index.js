require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend to access the backend
app.use(express.json());

app.get("/get-api-key", (req, res) => {
    res.json({ apiKey: process.env.VITE_GOOGLE_API_KEY });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});