import VentasService from "../services/ventas.service.js"

class VentasController {
    constructor() {
        this.service = new VentasService()
    }

    getAllVentas = async (req, res) => {
        try {
            const ventas = await this.service.getAllVentas()
            res.status(200).json(ventas)
        } catch (error) {
            res.status(500).json({ errorMsg: error.message })
        }
    }

    postVenta = async (req, res) => {
        const { idJuego, cantidad } = req.body

        if (!idJuego || !cantidad) {
            return res.status(400).json({ errorMsg: "Faltan datos para registrar la venta." })
        }

        try {
            const venta = await this.service.postVenta({ idJuego, cantidad })
            res.status(201).json(venta)
        } catch (error) {
            res.status(500).json({ errorMsg: error.message })
        }
    }
}

export default VentasController