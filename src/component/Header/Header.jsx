import "./Header.modules.scss";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import ModalCart from "./ModalCart/ModalCart";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { listCart, ProductSelecto } from "../Store-Redux/Reducer";

const Header = () => {
  const allCart = useSelector(listCart);
  const [open, setOpen] = useState(false);
  const Open = (e) => {
    setOpen(!open);
  };
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");
  const listProductSearch = useSelector(ProductSelecto);
  const itemSearch = listProductSearch.filter((x) =>
    x.name.toLowerCase().includes(search.toLowerCase())
  );

  // const location = useLocation();
  // const history = useHistory();

  const Search = (e) => {
    setSearch(e.target.value);
  };

  const Update = () => {
    setSearch("");
  };
  const OpenSearch = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <div>
      <div className="Header">
        <div className="header_Map">
          <span>
            <FaMapMarkerAlt className="map" />
          </span>
          <span>VietNam</span>
        </div>
        <div>
          <Link to="/">
            <img src="https://cassiopeia.store/svgs/logo.svg" alt="" />
          </Link>
        </div>
        <div className="header_search">
          <div className="list_search">
            <div className="product_search">
              <input
                className={openSearch ? "input_search" : "input_search2"}
                type="text"
                placeholder="Search"
                value={search}
                onChange={Search}
              />

              {search !== "" && (
                <div className="product_search_item">
                  {itemSearch.map((item) => (
                    <Link to={`/${item.category}/${item.id}`} onClick={Update}>
                      <span className="search_img">
                        <img src={item.imageUrl} alt="" srcset="" />
                      </span>
                      <span className="search_nameitem">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <BsSearch className="seacrh" onClick={OpenSearch} />
          </div>
          <div className="header_cart" onClick={Open}>
            {allCart.length > 0 && (
              <span className="cart_list" style={{ opacity: open && "0" }}>
                {allCart.length}
              </span>
            )}
            {/* <BsCart3 className="cart" /> */}
            <img
              src={
                open
                  ? "https://cassiopeia.store/svgs/close.svg"
                  : "https://cassiopeia.store/svgs/cart.svg"
              }
              alt=""
              className="cart"
            />
            {open && <ModalCart />}
          </div>
          <Link to="/login" className="login">
            <div>LogIn</div>
          </Link>
          <Link to="/registration" className="registration">
            <div>Đăng ký</div>
          </Link>
        </div>
      </div>
      <NavBar />
    </div>
  );
};
export default Header;
