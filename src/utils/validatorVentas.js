export const validarVenta = (venta) => {
    if (!venta.idJuego || isNaN(venta.idJuego)) {
        throw new Error("El id del juego es inválido.")
    }

    if (!venta.cantidad || isNaN(venta.cantidad) || venta.cantidad <= 0) {
        throw new Error("La cantidad debe ser un número mayor a 0.")
    }
}