import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {Spinner} from "react-bootstrap"
const Product = () => {
  const pramId = useParams();

  const [prod, setProd] = useState(null);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${pramId.id}`)
      .then((res) => res.json())
      .then((json) => setProd(json));
  };
  return (
    <div>
      {prod ? (
        <div className="container mb-5">
          <h2 className="my-3">{prod.title}</h2>
          <img src={prod.image} className="w-25 img-fluid" alt="poduct-img" />
          <p className="text-muted">{prod.category}</p>
          <p className="p-5">{prod.description}</p>
          <strong className="border border-5 p-2">{prod.price}$</strong>
        </div>
          ) : (
                  <div className="container-fluid mt-5">
                    <div className="mt-5 m-auto">
                    <Spinner animation="grow" variant="dark"/>
                    <Spinner animation="grow" variant="dark"/>
                    <Spinner animation="grow" variant="dark"/>
                    <Spinner animation="grow" variant="dark"/>
                    </div>
                  </div>
      )}
    </div>
  );
};

export default Product;
