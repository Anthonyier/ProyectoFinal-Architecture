import { OrderService } from "./order.service";

export class OrderController {
  constructor(
    private orderService: OrderService
  ) { }

  // Listen {CartService: CartPay} 
  handleCreateOrder(req, res) {
    const { createOrderDTO } = req;
    const newOrder = this.orderService.createOrder(createOrderDTO);
    return res.json(newOrder);
  }

  modifyOrderStatus(req, res) {
    const { updateStatusOrderDTO } = req;
    const updStatusOrder = this.orderService.modifyOrderStatus(updateStatusOrderDTO);
    return res.json(updStatusOrder);
  }
}