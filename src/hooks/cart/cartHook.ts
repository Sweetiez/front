import CartModel from '../../components/Cart/CartModel';
import { useState } from 'react';

function getCart(): CartModel[] {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function useCart() {
  function setCart(cart: CartModel[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  const [cart] = useState(getCart());

  return {
    cart,
    setCart,
  };
}

export { getCart, useCart };
