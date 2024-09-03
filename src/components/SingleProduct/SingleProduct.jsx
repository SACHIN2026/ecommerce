import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import useFetch from "../../hooks/UseFetch"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../utils/context";


const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const {handleAddToCart}= useContext(Context)
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    if (!data) return;
    const product = data.data[0].attributes;

    const increment = () => {
        setQuantity((previousState) => previousState + 1);
    };

    const decrement = () => {
        setQuantity((previousState) => {
            if (previousState === 1) {
                return 1;
            } else {
                return previousState - 1;
            }
        });
    };

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={import.meta.env.VITE_DEV_URL +
                                product.img.data[0].attributes.url} alt="" /></div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377;{product.price}</span>
                        <span className="desc">{product.desc}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-card-button" onClick={()=>{
                                handleAddToCart(data?.data?.[0], quantity)
                                setQuantity(1)
                            }}>
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>

                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">Category:{" "}
                                <span>{product.categories.data[0].attributes.title}</span>
                            </span>
                            <span className="text-bold">Share
                                <span className="social-icons">
                                    <FaFacebookF size={20} />
                                    <FaTwitter size={20} />
                                    <FaInstagram size={20} />
                                    <FaLinkedinIn size={20} />
                                    <FaPinterest size={20} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={product.categories.data[0].id}/>
            </div>
        </div>
    )

};

export default SingleProduct;
