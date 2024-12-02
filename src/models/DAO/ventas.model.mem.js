import { validarVenta } from '../../utils/validatorVentas.js'
import JuegosMemModel from './juegos.model.mem.js'

class VentasMemModel {
    constructor() {
        this.juegosModel = new JuegosMemModel()
        this.ventas = [
            { idJuego: 1, cantidad: 2, precioTotal: 9000, fecha: new Date() },
            { idJuego: 2, cantidad: 1, precioTotal: 3500, fecha: new Date() }
        ]
    }

    getAllVentas = async () => {
        return this.ventas
    }

    postVenta = async (venta) => {
        try {
            validarVenta(venta)

            let juego = this.juegosModel.juegos.find(j => j.id === venta.idJuego)
            if (!juego) {
                throw new Error("El id del juego no existe.")
            }

            const precioTotal = juego.precio * venta.cantidad

            const nuevaVenta = { 
                idJuego: venta.idJuego,
                cantidad: venta.cantidad,
                precioTotal,
                fecha: new Date()  
            }

            this.ventas.push(nuevaVenta)
            return nuevaVenta
        } catch (error) {
            console.error("Ha ocurrido un error: ", error.message)
            throw new Error("No se pudo registrar la venta. " + error.message)
        }
    }
}

export default VentasMemModel