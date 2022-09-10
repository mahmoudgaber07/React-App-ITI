import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axiosinstance from "../environment/axiosinstance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const Product = () => {
  let pramId = useParams().id;

  const [prod, setProd] = useState({});
  let isLoading = useSelector(state => state.loadRed.isLoading);

  useEffect(() => {
    const getProductDetails = () => {
      axiosinstance
        .get(`/products/${pramId}`)
        .then((res) => setProd(res.data))
        .catch((err) => console.log(err));
    };
    getProductDetails();
  }, [pramId]);

 
  return (
    <>
    {
      !isLoading && (
        <div className="container min-vh-100" key={prod.id}>
          <div className="product text-center">
            <div className="img w-50 m-auto">
              <img src={prod.image} className="w-25 img-fluid" alt="poduct-img" />
            </div>
            <h2 className="my-3">{prod.title}</h2>
            <p className="text-muted">{prod.category}</p>
            <p className="p-5">{prod.description}</p>
            <div className="ratings">
              <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} />
            </div>
              <p className="col-2 m-auto pt-2">{prod.price} {"$"}</p>
            <div className="product-buttons d-flex justify-content-between align-items-center mt-2 mb-2">
              <Link to="/shop">
                <button className="btn btn-dark m-3 p-4">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )
      }
          </>
  );
};

export default Product;
