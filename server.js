// server.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("<h1>✅ Gestionale Ristorante Attivo!</h1><p>Benvenuto nella tua app su Render!</p>");
});

// API esempio per dashboard
app.get("/api/dashboard", (req, res) => {
  res.json({
    ricavi: 2847.5,
    margine: 1433626,
    ebidta: "18.06%",
    scontrinoMedio: 22.4,
    occupazione: "37.5%"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server avviato su http://localhost:${PORT}`);
});
