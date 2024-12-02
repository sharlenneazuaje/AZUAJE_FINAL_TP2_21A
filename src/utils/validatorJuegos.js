const categoriasPermitidas = ["estrategia", "rol", "cartas", "familiar"]

export const validarJuego = (juego) => {
    if (!juego.nombre || typeof juego.nombre !== 'string' || juego.nombre.trim() === "") {
        throw new Error("El nombre del juego es obligatorio y debe ser una cadena no vacía.")
    }

    if (!juego.categoria || !categoriasPermitidas.includes(juego.categoria)) {
        throw new Error("La categoría del juego es inválida. Las categorías permitidas son: " + categoriasPermitidas.join(", "))
    }

    if (!juego.precio || isNaN(juego.precio) || juego.precio <= 0) {
        throw new Error("El precio debe ser un número mayor a 0.")
    }

    if (juego.stock === undefined || isNaN(juego.stock) || juego.stock < 0) {
        throw new Error("El stock debe ser un número mayor o igual a 0.")
    }
}