const http = require("http");
const WebSocket = require("ws");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("🟢 Neue Verbindung");
  ws.send("Willkommen beim Server!");

  ws.on("message", (message) => {
    console.log("📩 Nachricht:", message.toString());
    ws.send("Echo: " + message);
  });

  ws.on("close", () => {
    console.log("🔴 Verbindung geschlossen");
  });
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Server läuft auf Port ${PORT}`);
});
