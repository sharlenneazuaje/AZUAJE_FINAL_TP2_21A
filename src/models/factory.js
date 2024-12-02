import JuegosMemModel from "./DAO/juegos.model.mem.js"
import VentasMemModel from "./DAO/ventas.model.mem.js"

class Factory {
    static get(persistence) {
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del Servidor")
                return {
                    juegosModel: new JuegosMemModel(),
                    ventasModel: new VentasMemModel()
                }
            default:
                console.log("Persistiendo en la memoria por default")
                return {
                    juegosModel: new JuegosMemModel(),
                    ventasModel: new VentasMemModel()
                }
        }
    }
}

export default Factory