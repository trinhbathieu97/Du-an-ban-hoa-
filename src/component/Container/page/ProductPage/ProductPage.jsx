import React from "react";
import { useState, useEffect } from "react";
import "./ProductPage.modules.scss";
import Nabar_page from "../../../UI/organisms/Navbar_page/Nabar_page";
import NavbarPageList from "../../../UI/organisms/Navbar_page_list/NavbarPageList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../Store-Redux/Reducer";

const ProductPage = ({ title, data, pathName }) => {
  const [toto, setToto] = useState(4);
  const inCart = useSelector((state) => state.Product.allCart);
  const [state, setState] = useState([]);

  const filterPrice = (value) => {
    switch (value) {
      case "Under 10$":
        setState(data.filter((x) => x.price == 10));
        break;
      case "$10 - 50$":
        setState(data.filter((x) => x.price <= 50));
        break;
      case "$50 - 100$":
        setState(data.filter((x) => x.price <= 100));
        break;
      case "Over 100$":
        setState(data.filter((x) => x.price >= 100));
        break;
      default:
        break;
    }
  };

  const filterSrotby = (value) => {
    switch (value) {
      case "Newest":
        setState(data.filter((x) => x.Newest == value));
        break;
      case "Oldest":
        setState(data.filter((x) => x.Oldest == value));
        break;
      case "Low to high":
        const a = data.sort((prev, after) => prev.price - after.price);
        setState(a);

        break;
      case "High to low":
        const b = data.sort((prev, after) => after.price - prev.price);
        setState([...b]);

        break;
      default:
        break;
    }
  };

  const filterType = () => {};
  const filterOccasion = () => {};
  // ==== dispatch
  const disphatch = useDispatch();

  const Add = (id) => {
    disphatch(addCart(id));
  };

  useEffect(() => {
    setToto(4);
  }, [pathName]);

  useEffect(() => {
    const array = data.filter((x, index) => index < toto);
    setState(array);
  }, [data, toto]);
  return (
    <div className="ProductPage">
      <Nabar_page type={title} />
      <NavbarPageList
        item={data}
        filterPrice={filterPrice}
        state={state}
        filterSrotby={filterSrotby}
        filterType={filterType}
        filterOccasion={filterOccasion}
      />
      <div className="ProductPage_list">
        {state.map((item) => (
          <div href="" className="product" key={item.id}>
            <div className="slider_list-img">
              <img className="slider_img" src={item.imageUrl} alt="" />
              <div className="cart_seachr">
                <div
                  className="cart"
                  onClick={() => {
                    Add(item.id);
                  }}
                >
                  <img
                    src="https://cassiopeia.store/svgs/cart-btn.svg"
                    alt=""
                  />
                  <p
                    style={{
                      opacity: `${
                        [...inCart].filter((e) => e.id === item.id).length > 0
                          ? 1
                          : 0
                      }`,
                    }}
                  >
                    1
                  </p>
                </div>
                <Link to={`/${item.category}/${item.id}`}>
                  <div className="a">
                    <img
                      src="https://cassiopeia.store/svgs/view-btn.svg"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="introduce">
              <a href="">{item.name}</a>
              <p>
                <span>{item.price}</span>
                <span className="sale"></span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {toto < data.length && (
        <div className="ProductPage_SeeMore">
          <span onClick={() => setToto(toto + 4)}>See More</span>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
