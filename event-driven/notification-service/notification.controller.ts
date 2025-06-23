import { NotificationService } from "./notification.service";

export class NotificationController {

  constructor(
    private notificationService: NotificationService
  ) { }

  // Listen {InventoryService:stockUpdate}
  handleStockUpdate(req, res) {
    const { mailNotificationDTO } = req;
    const status = this.notificationService.sendMail(mailNotificationDTO);

    res.json(status);
  }

  // Listen {OrderService:OrderStatusChanges}
  handleOrderStatusChanges(req, res) {
    const { orderStatusNotificationDTO } = req;
    const status = this.notificationService.sendMail(orderStatusNotificationDTO);

    res.json(status);
  }
}