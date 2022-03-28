import { useState, useEffect } from "react";
import Header from "./component/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./component/Container/page/Homepage/HomePage";
import ProductPage from "./component/Container/page/ProductPage/ProductPage";
import Footer from "./component/Footer/Footer";
import AboutUs from "./component/Container/page/Aboutus/AboutUs";
import { useSelector, useDispatch } from "react-redux";
import { ProductSelecto } from "./component/Store-Redux/Reducer";
import { GetProduct, GetUser } from "./component/Store-Redux/Reducer";
import Disconts from "./component/Container/page/Disconts/Disconts";
import Details from "./component/Container/page/Details/Details";
import Login from "./component/logIn/Login";
import Registration from "./component/Registration/RegisTration";

function App() {
  const data = useSelector(ProductSelecto);
  const [item, setItem] = useState([]);
  const location = useLocation();
  const path = location.pathname;

  const category = path.slice(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProduct());
    dispatch(GetUser());
  }, []);

  useEffect(() => {
    setItem(data.filter((x) => x.category === category));
  }, [category, data]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/flowers"
          element={<ProductPage data={item} pathName={path} title="Flowers" />}
        />
        <Route path="/flowers/:id" element={<Details />} />
        <Route
          path="/plants"
          element={<ProductPage data={item} pathName={path} title="Plants" />}
        />
        <Route path="/plants/:id" element={<Details />} />
        <Route
          path="/gifts"
          element={<ProductPage data={item} pathName={path} title="Gifts" />}
        />
        <Route path="/gifts/:id" element={<Details />} />
        <Route path="/Disconts" element={<Disconts />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
