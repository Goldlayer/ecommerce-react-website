import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProductsById } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
    const { id } = useParams();
    const [ product, setProduct ] = useState(null);
    const navigate = useNavigate;
    const { addToCart } = useCart();

    useEffect( () => {
        const foundProduct = getProductsById(id);
        if(!foundProduct){
            navigate('/')
            return;
        }

        setProduct(foundProduct)

    }, [id]);

    if(!product){
        return <h1>Loading...</h1>
    }

    return (
        <div className="page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-detail-content">
                        <h1 className="product-detail-name">{product.name}</h1>
                        < p className="product-detail-price">${product.price}</p>
                        <p className="product-detail-description">{product.description}</p>
                        <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails