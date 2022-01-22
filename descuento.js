const fs = require("fs");
const {getcustomers} = require("./consultas.js")

const comando = process.argv.slice(2);
const nombreCliente = comando[0]
const monto = comando[1]
const descuento = comando[2]

async function descuentoCliente(nombreCliente,monto,descuento){
    const descuentoTotal = monto - (monto / 100 * descuento)
    const clientes = await getcustomers()
    const cliente = clientes.find(c => c.first_name === nombreCliente );
    if (cliente == null){
        fs.writeFileSync(`./cliente.txt`, `Don: ${nombreCliente} 
    Actualmente usted no es cliente en la tienda, favor registrarse para poder realizar compras`)
    } else {
        fs.writeFileSync(`./cliente.txt`, `Cliente: ${cliente.first_name} ${cliente.last_name} 
    Su compra es de ${monto} pesos 
    porcentaje de descuento ${descuento}% da un total de: ${descuentoTotal}`)
    }
        console.log(fs.readFileSync(`./cliente.txt`,'utf8'))
}

descuentoCliente(nombreCliente,monto,descuento).then()

