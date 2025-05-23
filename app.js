import express from "express";
import chalk from "chalk";

//Apro le porte e inizializzo il server
const app = express();
const port = 3000;

//Permetto alla cartella public di essere pubblica così posso fare le ricehiste per il contenuto tramite API
app.use(express.static("public"));

//Invoco la funzione di ascolto
app.listen(port, () => {
  console.log(chalk.bgGreenBright("Server sul retrogaming aperto"));
});
