import '../App.css';
import { getProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
    const products = getProducts();

    return ( 
        <div className='page'>
            <div className='home-hero'>
                <h1 className='home-title'>Welcome To <strong>JoggyShop</strong></h1>
                <p className='home-subtitle'>Discover luxury quality products at unbeatable values</p>
            </div>
            
            <div className='container'>
                <h2 className='page-title'>Our Products</h2>
                <div className='product-grid'>
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
