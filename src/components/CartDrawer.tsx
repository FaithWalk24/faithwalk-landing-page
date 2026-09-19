import React, { useEffect } from 'react';
import {
  X,
  ShoppingBag,
  ArrowRight,
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  Download,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotalAmount,
    cartTotalCount,
    navigateToShop,
  } = useApp();

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#112F26]/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#2F5D50]/20 animate-in slide-in-from-right duration-300">

          {/* Header */}
          <div className="p-5 sm:p-6 bg-[#173F32] text-white flex items-center justify-between border-b border-[#2F5D50]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2F5D50] border border-[#C8A96A]/50 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-[#C8A96A]" />
              </div>

              <div>
                <h2
                  id="cart-drawer-title"
                  className="font-serif text-lg sm:text-xl font-bold text-[#FAF7F2]"
                >
                  Your FaithWalk Cart
                </h2>

                <p className="text-xs text-[#C8A96A]">
                  {cartTotalCount}{' '}
                  {cartTotalCount === 1 ? 'journal item' : 'journal items'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#FAF7F2]/80 hover:text-white hover:bg-[#2F5D50] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A96A]"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Instant Delivery Notice */}
          <div className="bg-[#2F5D50]/15 border-b border-[#2F5D50]/20 px-4 py-2.5 flex items-center gap-2.5 text-xs text-[#173F32]">
            <Download className="w-4 h-4 text-[#C8A96A] flex-shrink-0" />
            <span>
              Instant Digital PDF Delivery via email and customer account.
            </span>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2F5D50]/10 flex items-center justify-center text-[#2F5D50]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#173F32] mb-1">
                  Your cart is currently empty
                </h3>

                <p className="text-xs text-[#173F32]/70 max-w-xs mx-auto mb-6">
                  Explore our guided Christian journals and free starter guide
                  to begin your daily rhythm with God.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateToShop();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#173F32] text-[#FAF7F2] hover:bg-[#2F5D50] text-xs uppercase font-bold tracking-wider transition-colors shadow-sm"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A96A]" />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 bg-white rounded-xl border border-[#2F5D50]/15 shadow-xs hover:border-[#C8A96A]/40 transition-all"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.productName}
                    className="w-18 h-22 object-cover rounded-lg border border-[#2F5D50]/10 bg-[#FAF7F2] flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://faithwalk-journal.com/wp-content/uploads/2026/09/FaithWalk-Journal-Cover-One.png';
                    }}
                  />

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#173F32] leading-snug truncate">
                        {item.product.productName}
                      </h4>

                      <p className="text-xs text-[#2F5D50] font-bold mt-1">
                        {item.product.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#FAF7F2]">
                      <div className="flex items-center border border-[#2F5D50]/20 rounded-md overflow-hidden bg-[#FAF7F2]">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="p-1 hover:bg-[#2F5D50]/10 text-[#173F32] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>

                        <span className="px-2.5 text-xs font-bold text-[#173F32]">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="p-1 hover:bg-[#2F5D50]/10 text-[#173F32] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#173F32]/50 hover:text-red-600 p-1 transition-colors"
                        aria-label={`Remove ${item.product.productName}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-white border-t border-[#2F5D50]/15 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-[#173F32]/75">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    R{cartTotalAmount.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#173F32]/75">
                  <span>Digital Delivery</span>
                  <span className="font-semibold text-[#2F5D50]">
                    FREE (Instant Access)
                  </span>
                </div>

                <div className="flex items-center justify-between text-base font-bold text-[#173F32] pt-2 border-t border-[#2F5D50]/10">
                  <span>Total Due</span>

                  <span className="text-[#173F32] font-serif text-lg text-[#2F5D50]">
                    R{cartTotalAmount.toFixed(2)} ZAR
                  </span>
                </div>
              </div>

              {/* PayFast Direct Checkout Button */}
              <div className="space-y-2 pt-2">
                <a
                  href="https://faithwalk-journal.com/checkout/"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-[#C8A96A] text-[#173F32] hover:bg-[#DFCA95] active:scale-[0.98] shadow-md transition-all border border-[#E0C792]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#173F32]" />
                  <span>PROCEED TO PAYFAST CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 text-[#173F32]" />
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#173F32]/60 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2F5D50]" />
                <span>
                  PayFast 256-Bit SSL Encrypted • Visa, Mastercard, Instant EFT
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
