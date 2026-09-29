const express = require("express");
const pedidos = require("../dados.json");

const mostrarPedido = (req, res) => {
    res.send(pedidos)
}

const novoPedido = (req, res) => {
    if (req.body) {
        res.send("Pedido recebido");
        pedidos.push(req.body)
    } else {
        res.send("Erro ao receber pedido")
    }
}

const excluirPedido = (req, res) => {
    const id = req.params.id;

    pedidos.forEach((pedido, indice) => {
        if(pedido.id == id){
            pedidos.splice(indice, 1);
        }
    });

    res.send("Pedido Excluido com sucesso!")
};

const alterarPedido = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    pedidos.forEach((pedido) => {
        if(pedido.id == id) {
            pedido.item = dados.item;
            pedido.local = dados.local;
            pedido.dataRegistro = dados.dataRegistro;
            pedido.valor = dados.valor;
            pedido.patrimonio = dados.patrimonio
        }
    });
    res.send("Pedido atulizado com sucesso");
};

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const porta = 3000;

app.get("/inventario", mostrarPedido);
app.post("/inventario", novoPedido);
app.delete("/inventario/:id", excluirPedido);
app.put("/inventario/:id", alterarPedido);

app.listen(porta, () => {
    console.log(`Servidor: http://127.0.0.1:${porta}/inventario`);
});