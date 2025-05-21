const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);

// Configuración de CORS para permitir conexiones desde localhost:3000
const io = socketIo(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://vercel.com/erick-olivas-projects/proyecto-emprendedores"  
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  },
});


let contadorId = 1; // Contador para los IDs únicos de los pedidos

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");

  // Manejar nuevo pedido
  socket.on("nuevoPedido", (data, callback) => {
    console.log("Nuevo pedido recibido:", data);

    // Generar un ID único para el pedido
    const pedidoConId = {
      ...data,
      id: contadorId++, // Asigna un ID único e incrementa el contador
    };

    // Emitir el nuevo pedido al tablero de cocina
    io.emit("nuevoPedido", pedidoConId);

    // Enviar el ID del pedido de vuelta al cliente
    if (callback) {
      callback({
        id: pedidoConId.id,
        mensaje: "Pedido confirmado con éxito",
      });
    }
  });

  // Manejar evento de pedido listo
  socket.on("pedidoListo", (data) => {
    console.log(`Pedido ${data.id} está listo`);

    // Emitir el evento a todos los clientes conectados
    io.emit("pedidoListo", { type: "pedidoListo", id: data.id });
  });

  // Evento de desconexión
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

// Inicia el servidor en el puerto 3001 (o el puerto que prefieras)
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Servidor WebSocket corriendo en http://localhost:${PORT}`);
});


