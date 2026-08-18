require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/subjects', require('./routes/subjects'));

// Health check
app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
    console.log(
        `StudyTrack backend running on http://localhost:${PORT}`
    );
});