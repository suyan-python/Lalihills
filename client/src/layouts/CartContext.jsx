import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();
const CART_STORAGE_KEY = "laali-hills-cart";

const getStoredCart = () => {
  if (typeof window === "undefined") return [];

  try {
    const storedCart = JSON.parse(
      window.localStorage.getItem(CART_STORAGE_KEY) || "[]",
    );

    return Array.isArray(storedCart)
      ? storedCart.filter(
          (item) =>
            item &&
            typeof item.cartKey === "string" &&
            item.product &&
            Number.isFinite(Number(item.quantity)) &&
            Number(item.quantity) > 0,
        )
      : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getStoredCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Storage can be unavailable in private browsing or restricted contexts.
    }
  }, [cartItems]);

  const addToCart = (product, options = {}) => {
    const {
      size = null,
      grind = null,
      purchaseType = "one-time",
      frequency = null,
      quantity = 1,
      price = product.price,
    } = options;

    const itemPrice = Number(price) || 0;

    const cartKey = [product._id, size, grind, purchaseType, frequency]
      .filter(Boolean)
      .join("-");

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.cartKey === cartKey,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey
            ? {
                ...item,
                price: itemPrice,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        {
          cartKey,
          product,
          size,
          grind,
          purchaseType,
          frequency,
          price: itemPrice,
          quantity,
        },
        ...currentItems,
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartKey) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartKey !== cartKey),
    );
  };

  const updateQuantity = (cartKey, quantity) => {
    if (quantity < 1) {
      removeFromCart(cartKey);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const cartTotal = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        const price = Number(item.price ?? item.product.price) || 0;
        return total + price * item.quantity;
      }, 0),
    [cartItems],
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
};
