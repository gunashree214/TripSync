const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve your frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Test API
app.get("/api/trips", (req, res) => {
    res.json({
        message: "TripSync backend is working!",
        trips: []
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`TripSync server running on http://localhost:${PORT}`);
});