import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axiosinstance from "../environment/axiosinstance";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axiosinstance
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid min-vh-100">
      <div className="row">
        {products.map((product) => {
          return (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="card col-md-3"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="mt-2">
                  <h4
                    className="text-uppercase text-nowrap bd-highlight overflow-hidden"
                    style={{ width: "15rem" }}
                  >
                    {product.title}
                  </h4>
                  <div className="mt-5 overflow-hidden">
                    <h1 className="main-heading mt-0">{product.category}</h1>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="ratings">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <h6 className="text-muted ml-1 d-block">
                      <p>{product.rating.rate}</p>
                    </h6>
                    <h6 className="text-muted ml-1 text-center">
                      Quantity: {product.rating.count}
                    </h6>
                  </div>
                </div>
                <div className="image">
                  <img
                    src={product.image}
                    style={{ width: "100%" }}
                    alt="productimage"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                <span>Available colors</span>
                <div className="colors d-flex">
                  <span></span> <span></span> <span></span> <span></span>
                </div>
              </div>
              <p> A great option weather you are at office or at home. </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
