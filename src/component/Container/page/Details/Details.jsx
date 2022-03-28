import React, { useState, useEffect } from "react";
import "./Details.modules.scss";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductSelecto } from "../../../Store-Redux/Reducer";

const Details = () => {
  const { id } = useParams();

  const list = useSelector(ProductSelecto);
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchedProduct = list.find((item) => item.id == id);

    list && setProduct(fetchedProduct);
  }, [list, id]);

  if (!product) return <></>;

  return (
    <div className="Details">
      <div className="Details_nav">
        <a href="">Home /</a>asd
        <a href="">{product.category} /</a>
        <span>{product.name}</span>
      </div>
      <div className="Details_product">
        <div>
          <div>
            <img src={product.imageUrl} alt="" />
          </div>
          <div></div>
        </div>
        <div className="Details_number">
          <div className="Details_number-name">
            <h3>{product.name}</h3>
            <h3>{product.price} $</h3>
          </div>
          <div className="Details_number-sll">
            <span className="sll_span1">Count :</span>
            <div className="Count">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <div className="Details_types">
            <h4>Types : {product.types}</h4>
            <h4>Occasion : {product.occasion}</h4>
          </div>

          <div className="Order_Now">
            <button>Order Now</button>
            <img src="https://cassiopeia.store/svgs/cart-btn.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
