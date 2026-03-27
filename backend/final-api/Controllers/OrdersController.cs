
using Microsoft.AspNetCore.Mvc;
using final_api.Models;
using final_api.Services;

namespace final_api.Controllers;

[ApiController]
[Route("orders")]
public class OrdersController : ControllerBase
{
    private readonly OrderService _service;

    public OrdersController(OrderService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Create(Order order)
    {
        return Ok(await _service.Create(order));
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await _service.GetAll());
    }
}