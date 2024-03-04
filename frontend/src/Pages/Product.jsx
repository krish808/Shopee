import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Compontents/Breadcrum/Breadcrum";
import ProductDisplay from "../Compontents/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Compontents/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Compontents/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum
        name={product.name}
        image={product.image}
        category={product.category}
      />
      <ProductDisplay
        id={product.id}
        name={product.name}
        image={product.image}
        old_price={product.old_price}
        new_price={product.new_price}
      />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
