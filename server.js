const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("."));

// ================= GET PUBLICATIONS =================
app.get("/api/publications", (req, res) => {
    const data = fs.readFileSync("publications.json");
    res.json(JSON.parse(data));
});

// ================= ADD PUBLICATION =================
app.post("/api/publications", (req, res) => {
    const data = JSON.parse(fs.readFileSync("publications.json"));

    data.push(req.body);

    fs.writeFileSync("publications.json", JSON.stringify(data, null, 2));

    res.json({ success: true });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));