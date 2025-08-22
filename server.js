// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // per leggere JSON nel body delle richieste

// =======================
// ROTTA BASE
// =======================
app.get("/", (req, res) => {
  res.send("<h1>✅ Gestionale Ristorante Attivo!</h1><p>API pronte su /api/...</p>");
});

// =======================
// DASHBOARD
// =======================
app.get("/api/dashboard", (req, res) => {
  res.json({
    ricavi: 2847.5,
    margine: 1433626,
    ebitda: "18.06%",
    scontrinoMedio: 22.4,
    occupazione: "37.5%",
  });
});

// =======================
// ORDINI
// =======================
let ordini = [
  { id: 1, tavolo: 5, totale: 46.5, stato: "chiuso" },
  { id: 2, tavolo: 2, totale: 89.0, stato: "aperto" },
];

app.get("/api/ordini", (req, res) => res.json(ordini));

app.post("/api/ordini", (req, res) => {
  const nuovo = { id: ordini.length + 1, ...req.body };
  ordini.push(nuovo);
  res.status(201).json(nuovo);
});

// =======================
// CLIENTI
// =======================
let clienti = [
  { id: 1, nome: "Mario Rossi", email: "mario@example.com" },
  { id: 2, nome: "Laura Bianchi", email: "laura@example.com" },
];

app.get("/api/clienti", (req, res) => res.json(clienti));

app.post("/api/clienti", (req, res) => {
  const nuovo = { id: clienti.length + 1, ...req.body };
  clienti.push(nuovo);
  res.status(201).json(nuovo);
});

// =======================
// FORNITORI
// =======================
let fornitori = [
  { id: 1, nome: "Ortofrutta Roma", contatto: "info@ortoroma.it" },
  { id: 2, nome: "Carni Milano", contatto: "ordini@carnimilano.it" },
];

app.get("/api/fornitori", (req, res) => res.json(fornitori));

app.post("/api/fornitori", (req, res) => {
  const nuovo = { id: fornitori.length + 1, ...req.body };
  fornitori.push(nuovo);
  res.status(201).json(nuovo);
});

// =======================
// PRODOTTI / MENU
// =======================
let prodotti = [
  { id: 1, nome: "Pizza Margherita", prezzo: 7.5 },
  { id: 2, nome: "Carbonara", prezzo: 12.0 },
];

app.get("/api/prodotti", (req, res) => res.json(prodotti));

app.post("/api/prodotti", (req, res) => {
  const nuovo = { id: prodotti.length + 1, ...req.body };
  prodotti.push(nuovo);
  res.status(201).json(nuovo);
});

// =======================
// AVVIO SERVER
// =======================
app.listen(PORT, () => {
  console.log(`🚀 Server attivo su http://localhost:${PORT}`);
});
