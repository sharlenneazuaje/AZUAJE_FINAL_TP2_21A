import Factory from "../models/factory.js"

class VentasService {
    constructor() {
        this.model = Factory.get("MEM")
    }

    getAllVentas = async () => {
        return await this.model.ventasModel.getAllVentas()
    }

    postVenta = async (venta) => {
        return await this.model.ventasModel.postVenta(venta)
    }
}

export default VentasService