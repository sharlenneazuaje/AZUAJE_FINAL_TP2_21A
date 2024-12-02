import JuegosService from "../services/juegos.service.js"

class JuegosController {
    constructor() {
        this.service = new JuegosService()
    }

    getAllJuegos = async (req, res) => {
        try {
            const juegos = await this.service.getAllJuegos()
            res.status(200).send(juegos)
        } catch (error) {
            console.error("Error al obtener los juegos: ", error)
            res.status(500).send({ errorMsg: "Error interno al obtener los juegos" })
        }
    }

    postJuegos = async (req, res) => {
        try {
            const juego = req.body
            if (JSON.stringify(juego) === "{}") {
                return res.status(400).send({ errorMsg: "El cuerpo de la solicitud está vacío" })
            }
            const nuevoJuego = await this.service.postJuegos(juego)
            res.status(201).send(nuevoJuego)
        } catch (error) {
            console.error("Error al crear el juego: ", error)
            res.status(400).send({ errorMsg: error.message || "Datos del juego inválidos" })
        }
    }
}

export default JuegosController