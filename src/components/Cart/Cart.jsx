import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem"
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/Context";
import { loadStripe } from "@stripe/stripe-js"
import { makePaymentRequest } from "../../utils/api";
//--------------------//dfsf

const Cart = ({ setShowCart }) => {
    const { cartItems, cartSubTotal } = useContext(Context)
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise
            const response = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            })
            await stripe.redirectToCheckout({
                sessionId: response.data.stripeSession.id,
            })

        } catch (error) {
            console.log(error)
        }

    }

    const gotoHome = () => {
        setShowCart(false)
    }

    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">

            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn"
                    onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>
            {!cartItems?.length && <div className="empty-cart">
                <BsCartX />
                <span>No products in the cart</span>
                <button className="return-cta" onClick={gotoHome}>Return to shop</button>
            </div>}


            {!!cartItems?.length && <>
                <CartItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">&#8377; {cartSubTotal} </span>
                    </div>

                    <div className="button">
                        <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                    </div>
                </div>
            </>}
        </div>
    </div>;
};

export default Cart;
