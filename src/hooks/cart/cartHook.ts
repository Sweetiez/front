import CartModel from '../../components/Cart/CartModel';
import { useQuery } from 'react-query';

export function useCart() {
  return useQuery<CartModel[], Error>(
    `cart`,
    async () => {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
    },
    {
      refetchInterval: 500,
    },
  );
}

export function setCart(cart: CartModel[]): void {
  localStorage.setItem('cart', JSON.stringify(cart));
}
