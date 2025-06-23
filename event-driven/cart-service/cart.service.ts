import { ClientProxy } from "../shared/client-proxy";
import { CartEntity } from './cart.entity';
import { UpdateCartDTO } from './dto/update-cart-dto';
import { CreateCartDTO } from './dto/create-cart.dto';

export class CartService {
  constructor(
    private cartEntity: CartEntity,
    private orderClient: ClientProxy) {
  }

  // Emit -> {OrderService: CartPay}
  payCart(dto: UpdateCartDTO) {
    const data = this.cartEntity.update(dto);
    this.orderClient.emit('CartPay', data);
    return data;
  }

  createCart(dto: CreateCartDTO): any {
    const data = this.cartEntity.create(dto);
    return data;
  }

  updateCart(dto: UpdateCartDTO): any {
    const data = this.cartEntity.update(dto);
    return data;
  }
}