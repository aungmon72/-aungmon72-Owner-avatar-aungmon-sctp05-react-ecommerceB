import { atom, useAtom } from 'jotai';

// Define the initial state of the cart. We put in one piece of test data
const initialCart = [
{
    "id": 1,
    "product_id": 1,
    "quantity": 10,
    "productName": "Organic Green Tea",
    "price": 12.99,
    "imageUrl": "https://picsum.photos/id/225/300/200",
    "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
  },
];

// Create an atom for the cart
export const cartAtom = atom(initialCart);

// Custom hook for cart operations
export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  // Function to calculate the total price of items in the cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const addToCart = (product) => {
    setCart(currentCart => {
        // find if the item already exists in the shopping item
        // important - we assume `product_id` is the id of the product
        const existingItemIndex = cart.findIndex(i => i.product_id === product.product_id);
        if (existingItemIndex !== -1) {
            let newQuantity = cart[existingItemIndex].quantity + 1;

            // existing item
            const modifiedCart = currentCart.setIn([existingItemIndex, 'quantity'], newQuantity);
            return modifiedCart;
        } else {
            // new item
            return currentCart.concat({
                ...product,
                quantity: 1
            })
        }
    })
  }

  return {
    cart,
    getCartTotal,
  };
};