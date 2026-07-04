import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

function ProductCard({product}) {
  const { addToCart } = useCart()

  return (
    <>
        <div className='product-card'>
                            <img className='product-card-image' src={product.image} alt={product.name} />
                            <div className='product-card-content'>
                                <h2 className='product-card-name'>{product.name}</h2>
                                <p className='product-card-price'>₦{product.price}</p>
                                <div className='product-card-actions'>
                                    <Link to={`/products/${product.id}`} className='btn btn-secondary'>View Details</Link>
                                    <button className='btn btn-primary' onClick={() => addToCart(product.id)}>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default ProductCard