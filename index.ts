import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("<h1>Aplicação Restaurant dando inicio!!</h1>")
});

app.listen(8000, () => {
    console.log("Servidor iniciado com sucesso!!")
});

