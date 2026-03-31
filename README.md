# 📦 Sistema de Pedidos Full Stack

Aplicação full stack desenvolvida com foco em integração entre frontend e 
backend, arquitetura em camadas e simulação de processamento assíncrono.

---

## 🚀 Tecnologias

### Frontend
- React
- TypeScript
- Axios

### Backend
- .NET 7+
- ASP.NET Core Web API

### Outros
- CORS configurado
- Swagger para testes de API
- Processamento assíncrono simulado

---

## 📌 Funcionalidades

- Criar pedidos via interface web
- Listar pedidos em tempo real
- Atualização automática de status:
  - Pendente
  - Processando
  - Finalizado
- Integração completa entre frontend e backend

---

## ⚙️ Como rodar o projeto

### 🔹 Backend
bash
cd backend/final-api
dotnet run

Acesse o Swagger:
http://localhost:suaporta/swagger

### 🔹Frontend
cd frontend/frontend
npm install
npm run dev

Acesse:
http://localhost:suaporta
-------------------
🧠 Arquitetura
Backend
Controller: responsável pelas rotas HTTP
Service: responsável pela lógica de negócio
Injeção de dependência
Simulação de processamento com async/await

Frontend
Componentização com React
Gerenciamento de estado com useState
Atualização automática com useEffect (polling)
Consumo de API via Axios
-------------------
🔄 Fluxo da aplicação
Usuário cria um pedido no frontend
O frontend envia a requisição para a API
O backend cria o pedido com status Pendente
Um processo assíncrono simula a mudança de status
O frontend atualiza automaticamente a lista
🎯 Objetivo do Desafio

Desenvolver um sistema de gestão de pedidos com
processamento assíncrono
utilizando mensageria (Azure Service Bus), persistência em banco de dados
e arquitetura distribuída.

⚠️ O QUE FOI IMPLEMENTADO

✔ API REST com criação e listagem de pedidos
✔ Estrutura em camadas (Controller + Service)
✔ Simulação de processamento assíncrono
✔ Integração frontend + backend
✔ Atualização automática de status no frontend

❌ O QUE NÃO FOI IMPLEMENTADO (IMPORTANTE)
🔴 Mensageria (Azure Service Bus)
Não foi implementado envio real de mensagens
O processamento assíncrono foi simulado em memória

🔴 Banco de Dados
Não foi utilizado PostgreSQL
Os dados são armazenados em memória (List<>)

🔴 Entity Framework
Não foi implementado ORM ou migrations

🔴 Worker separado
Não existe um consumidor real de mensagens
O processamento ocorre dentro do próprio backend

🔴 Infraestrutura
Não foi utilizado Docker / Docker Compose
Não há configuração de .env

🔴 Endpoint adicional
Não foi implementado:
GET /orders/{id}

🔴 Health Checks
Não foram implementados checks de:
API
Banco
Fila

🔴 Idempotência e mensageria robusta
Não há controle de duplicidade de mensagens
Não há uso de CorrelationId ou EventType

🔴 Frontend (UX)
Interface simples (sem TailwindCSS)
Não há tabela responsiva
Não há tela de detalhes do pedido

🧠 DECISÃO TÉCNICA

Este projeto foi desenvolvido com foco em:

Demonstrar entendimento de arquitetura básica
Validar integração frontend/backend
Simular comportamento assíncrono
Entregar uma base funcional rapidamente

🚀 POSSÍVEIS EVOLUÇÕES
Implementar PostgreSQL + Entity Framework
Integrar Azure Service Bus
Criar Worker separado
Adicionar Docker Compose
Melhorar UI com TailwindCSS
Implementar SignalR para tempo real
Adicionar testes automatizados

🎯 CONCLUSÃO

O projeto atende parcialmente aos requisitos do desafio,
focando na base funcional e arquitetura inicial, 
com espaço claro para evolução em mensageria, 
persistência e infraestrutura.
