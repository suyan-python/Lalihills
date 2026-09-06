import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product, options = {}) => {
        const {
            size = null,
            grind = null,
            purchaseType = "one-time",
            frequency = null,
            quantity = 1,
        } = options;

        const cartKey = [
            product._id,
            size,
            grind,
            purchaseType,
            frequency,
        ]
            .filter(Boolean)
            .join("-");

        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.cartKey === cartKey
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.cartKey === cartKey
                        ? {
                              ...item,
                              quantity: item.quantity + quantity,
                          }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    cartKey,
                    product,
                    size,
                    grind,
                    purchaseType,
                    frequency,
                    quantity,
                },
            ];
        });

        setIsCartOpen(true);
    };

    const removeFromCart = (cartKey) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.cartKey !== cartKey)
        );
    };

    const updateQuantity = (cartKey, quantity) => {
        if (quantity < 1) {
            removeFromCart(cartKey);
            return;
        }

        setCartItems((currentItems) =>
            currentItems.map((item) =>
                item.cartKey === cartKey
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = useMemo(
        () =>
            cartItems.reduce(
                (total, item) => total + item.quantity,
                0
            ),
        [cartItems]
    );

    const cartTotal = useMemo(
        () =>
            cartItems.reduce((total, item) => {
                const price = Number(item.product.price) || 0;
                return total + price * item.quantity;
            }, 0),
        [cartItems]
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