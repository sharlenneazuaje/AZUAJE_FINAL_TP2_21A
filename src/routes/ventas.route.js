import express from "express"
import VentasController from "../controllers/ventas.controller.js"

class VentasRouter {
    constructor() {
        this.router = express.Router()
        this.controller = new VentasController()
    }

    start() {
        this.router.get("/ventas", this.controller.getAllVentas.bind(this.controller))
        this.router.post("/ventas", this.controller.postVenta.bind(this.controller))

        return this.router
    }
}

export default VentasRouter