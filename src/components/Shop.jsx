import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts();
    }, [])
    
    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))
    }

    return (
        <div className="shop container px-4 px-lg-5 mt-5">
            <h1 className="shop-header mb-5">Shop</h1>
            <section className="row flex-wrap justify-content-center">
                {products.map((product) => {
                        return (
                        <Link to={`/shop/${product.id}`} key={product.id} className="col-lg-4 col-md-6 col-sm-12 border border-2 border-light p-3">
                                <div className="card h-100">
                                    <div className="bg-light">
                                        <img src={product.image} className="card-img-top img-fluid img-thumbnail w-50 m-auto" alt="product-img" />
                                    </div>
    
                                    <div className="card-body p-4">
                                        <div className="card-text-center my-2">Title: {product.title}</div>
                                    </div>
    
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="border border-5 p-2">Price: {product.price}</div>
                                    </div>
                                </div>
                        </Link>
                        )
            })}
            </section>
        </div>
    )
}

export default Shop