//Función auxiliar para generar la orden.
const generateOrderObject = ({
    nombre = "",
    apellido = "", 
    email = "", 
    telefono = "", 
    cart = [], 
    total = 0
}) => {
    return {
        buyer: {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;