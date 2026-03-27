using final_api.Models;

namespace final_api.Services;

public class OrderService
{
    private static List<Order> orders = new();

    public async Task<Order> Create(Order order)
    {
        orders.Add(order);

        _ = ProcessOrder(order);

        return order;
    }

    private async Task ProcessOrder(Order order)
    {
        await Task.Delay(3000);
        order.Status = "Processando";

        await Task.Delay(3000);
        order.Status = "Finalizado";
    }

    public Task<List<Order>> GetAll()
        => Task.FromResult(orders);
}