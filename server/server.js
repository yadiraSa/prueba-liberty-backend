const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan("tiny"));

const estadosMexicanos = [
  { id: 1, nombre: "Ciudad de México", fianza: "1954-0000" },
  { id: 2, nombre: "Monterrey, Nuevo León", fianza: "8524-0000" },
  { id: 3, nombre: "Saltillo, Coahuila", fianza: "1584-0000" },
  { id: 4, nombre: "Aguascalientes", fianza: "1845-0000" },
  { id: 5, nombre: "Querétaro", fianza: "9711-0457" },
  { id: 6, nombre: "Guadalajara, Jal", fianza: "6857-0457" },
];

const agentes = [
  { id: 1, nombre: "Zurich" },
  { id: 2, nombre: "MAPFRE" },
  { id: 3, nombre: "GNP" },
  { id: 4, nombre: "METLIFE" },
  { id: 5, nombre: "ALLIANZ" },
];

const ejecutivos = [
  { id: 1, nombre: "Mario Estrada" },
  { id: 2, nombre: "Carla Pereira" },
  { id: 3, nombre: "Mariana Torres" },
  { id: 4, nombre: "Cesar Prado" },
  { id: 5, nombre: "Adrián Mendoza" },
];

// Ruta para obtener la lista de estados
app.get("/estados", (req, res) => {
  res.json(estadosMexicanos);
});

app.get("/agentes", (req, res) => {
  res.json(agentes);
});

app.get("/ejecutivos", (req, res) => {
  res.json(ejecutivos);
});

app.listen(PORT, () => {
  console.log(`Servidor API en ejecución en el puerto ${PORT}`);
});
