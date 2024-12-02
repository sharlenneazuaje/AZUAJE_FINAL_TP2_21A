import { validarJuego } from '../../utils/validatorJuegos.js'

class JuegosMemModel {
    constructor() {
        this.juegos = [
            { id: 1, nombre: "Jenga", categoria: "estrategia", precio: 4500, stock: 10 },
            { id: 2, nombre: "Monopoli", categoria: "estrategia", precio: 3500, stock: 15 },
            { id: 3, nombre: "Domino", categoria: "familiar", precio: 3000, stock: 20 }
        ]
    }

    getAllJuegos = async () => {
        return this.juegos
    }

    postJuegos = async (juego) => {
        try {
            validarJuego(juego)

            const idUnico = Math.floor(Math.random() * 9000) + 1000

            const idExiste = this.juegos.some(juego => juego.id === idUnico)
            if (idExiste) {
                throw new Error("El ID generado ya existe, por favor intente nuevamente.")
            }

            const juegoConId = { ...juego, id: idUnico }
            this.juegos.push(juegoConId)
            return juegoConId

        } catch (error) {
            console.error("Ha ocurrido un error: ", error.message)
            throw new Error("No se pudo registrar el juego. " + error.message)
        }
    }
}

export default JuegosMemModel