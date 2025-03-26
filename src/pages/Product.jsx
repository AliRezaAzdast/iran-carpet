import React from "react";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import HandowndSell from '../components/HandowndSell/HandowndSell'
import Comments from "../components/Comments/Comments";

export default function Product() {
  return (
    <>
      <ProductDetail />
      <HandowndSell/>
      <Comments/>
    </>
  );
}
