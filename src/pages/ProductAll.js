import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { productAction } from "../redux/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const [error, setError] = useState("");

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProduct(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {productList.length > 0 &&
            productList.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
