import { CartService } from './cart.service';

export class CartController {
  constructor(
    private cartService: CartService
  ) { }

  // initiating Event
  payCart(req, res) {
    const { payCartDTO } = req;
    const payCart = this.cartService.payCart(payCartDTO);
    return res.json(payCart);
  }

  updateCart(req, res) {
    const { updateCartDTO } = req;
    const updCart = this.cartService.updateCart(updateCartDTO);
    return res.json(updCart);
  }

  createCart(req, res) {
    const { createCartDTO } = req;
    const newCart = this.cartService.createCart(createCartDTO);
    return res.json(newCart);
  }
}