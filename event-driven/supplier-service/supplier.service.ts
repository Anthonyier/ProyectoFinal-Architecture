import { SupplierEntity } from './supplier.entity';
import { StockUpdateDTO } from './dto/stock-update.dto';

export class SupplierService {
  constructor(
    private supplierEntity: SupplierEntity
  ) { }

  sendNotification(dto: StockUpdateDTO): any {
    return {};
  }
}