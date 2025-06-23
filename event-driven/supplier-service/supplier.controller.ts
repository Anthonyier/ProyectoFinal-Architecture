import { SupplierService } from './supplier.service';
export class SupplierController {
  constructor(
    private supplierService: SupplierService
  ) { }

  // Listen {InventoryService:StockUpdated}
  handleStockUpdated(req, res) {
    const { stockUpdateDTO } = req;
    const data = this.supplierService.sendNotification(stockUpdateDTO);
    return res.json(data);
  }
}
