import { ClientProxy } from '../shared/client-proxy';
import { InventoryEntity } from './inventory.entity';
import { InventoryDTO } from './dto/inventory.dto';

export class InventoryService {
  constructor(
    private inventoryEntity: InventoryEntity,
    private supplierClient: ClientProxy,
    private notificationClient: ClientProxy
  ) { }

  // Emit -> {SupplierService:StockUpdated}
  // Emit -> {NotificationService:StockUpdated}
  stockUpdated(dto: InventoryDTO) {
    const data = this.inventoryEntity.update(dto);

    this.supplierClient.emit('StockUpdated', data);
    this.notificationClient.emit('StockUpdated', data);
    return data;
  }
}