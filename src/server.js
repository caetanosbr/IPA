const express = require("express");

const routes = require("../Outros computadores/Desktop Gamer/Documents/Desenvolvimento/CURSOS/RocketSeate/Explorer/Stages/Stage 8/API/src/index.js")


const app = express();
app.use(express.json());

app.use(routes);

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
