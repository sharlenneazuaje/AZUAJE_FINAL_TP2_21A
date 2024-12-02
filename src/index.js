import express from "express"
import JuegosRouter from "./routes/juegos.route.js"
import VentasRouter from "./routes/ventas.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", new JuegosRouter().start())
app.use("/", new VentasRouter().start())

app.listen(PORT, () => console.log("Server running..."))

app.on("Error", (error) => console.log(error))