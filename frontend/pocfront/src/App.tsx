import { useEffect, useState } from "react";
import { api } from "./services/api";

type Order = {
  id: string;
  cliente: string;
  produto: string;
  valor: number;
  status: string;
};

function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");

  async function loadOrders() {
    const response = await api.get("/orders");
    setOrders(response.data);
  }

  async function createOrder() {
    if (!cliente || !produto || !valor) {
      alert("Preencha tudo");
      return;
    }

    await api.post("/orders", {
      cliente,
      produto,
      valor: Number(valor),
    });

    setCliente("");
    setProduto("");
    setValor("");

    loadOrders();
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h1>Pedidos</h1>

      <input
        placeholder="Cliente"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Produto"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <br /><br />

      <button onClick={createOrder}>Criar Pedido</button>

      <hr />

      {orders.map((order) => (
        <div key={order.id}>
          <p>Cliente: {order.cliente}</p>
          <p>Produto: {order.produto}</p>
          <p>Valor: {order.valor}</p>
          <p>Status: {order.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;