import JuegosController from "../controllers/juegos.controller.js"
import express from "express"

class JuegosRouter {
    constructor() {
        this.router = express.Router()
        this.controller = new JuegosController()
    }

    start() {
        this.router.get("/juegos", this.controller.getAllJuegos.bind(this.controller))
        this.router.post("/juegos", this.controller.postJuegos.bind(this.controller))
        return this.router
    }
}

export default JuegosRouter