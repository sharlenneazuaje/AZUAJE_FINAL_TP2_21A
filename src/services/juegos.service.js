import Factory from "../models/factory.js"

class JuegosService {
    constructor() {
        this.model = Factory.get("MEM")
    }

    getAllJuegos = async () => {
        return await this.model.juegosModel.getAllJuegos()
    }

    postJuegos = async (juego) => {
        return await this.model.juegosModel.postJuegos(juego)
    }
}

export default JuegosService