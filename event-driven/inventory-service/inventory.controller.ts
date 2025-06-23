import { InventoryService } from "./inventory.service";

export class InventoryController {

  constructor(
    private invetoryService: InventoryService
  ){}
  
  // Listen {OrderService: OrderCreated}
  handleOrderCreated(req, res) {
    const { products } = req;
    const data = this.invetoryService.stockUpdated(products);
    return res.json(data);
  }
}