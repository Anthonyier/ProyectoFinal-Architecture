import { ClientProxy } from '../shared/client-proxy';
import { CreateOrderDTO } from './dto/create-order.dto';
import { OrderEntity } from './order.entity';
import { UpdateOrderDTO } from './dto/update-order.dto';
import { UpdateStatusOrderDTO } from './dto/update-status-order.dto';

export class OrderService {
  constructor(
    private orderEntity: OrderEntity,
    private inventoryClient: ClientProxy,
    private notificationClient: ClientProxy
  ) { }

  // Emit -> {InventoryService:OrderCreated}
  // Emit -> {NotificationService:OrderStatusChanges}
  createOrder(dto: CreateOrderDTO): any {
    const data = this.orderEntity.create(dto);
    this.inventoryClient.emit('OrderCreated', data);
    this.notificationClient.emit('OrderStatusChanged', data);
    return data;
  }

  // Emit -> {NotificationService:OrderStatusChanges}
  modifyOrderStatus(dto: UpdateStatusOrderDTO): any {
    const data = this.orderEntity.update(dto);
    this.notificationClient.emit('OrderStatusChanged', data);
    return data;
  }

  updateOrder(dto: UpdateOrderDTO): any {
    const data = this.orderEntity.update(dto);
    return data;
  }
}