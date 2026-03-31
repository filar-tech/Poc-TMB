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
    try {
      const response = await api.get("/orders");
      console.log("GET OK:", response.data);
      setOrders(response.data);
    } catch (error) {
      console.error("ERRO GET:", error);
    }
  }

  async function createOrder() {
    console.log("🔥 BOTÃO CLICADO");

    if (!cliente || !produto || !valor) {
      alert("Preencha tudo");
      return;
    }

    try {
      const response = await api.post("/orders", {
        cliente,
        produto,
        valor: Number(valor),
      });

      console.log("POST OK:", response.data);

      setCliente("");
      setProduto("");
      setValor("");

      await loadOrders();
    } catch (error) {
      console.error("ERRO POST:", error);
    }
  }

  useEffect(() => {
    console.log("App carregou");

    loadOrders();

    const interval = setInterval(() => {
      loadOrders();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h1>Sistema de Pedidos</h1>

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
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <br /><br />

      <button onClick={createOrder}>
        Criar Pedido
      </button>

      <hr />

      {orders.length === 0 && <p>Nenhum pedido ainda</p>}

      {orders.map((order) => (
        <div key={order.id}>
          <p><b>Cliente:</b> {order.cliente}</p>
          <p><b>Produto:</b> {order.produto}</p>
          <p><b>Valor:</b> {order.valor}</p>
          <p><b>Status:</b> {order.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;