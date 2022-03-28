import React from "react";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AddUser } from "../Store-Redux/Reducer";
import { Link } from "react-router-dom";
// import { LogIn } from "../Store-Redux/Reducer";
import { useNavigate } from "react-router-dom";
import "./Regi.modules.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/Firebase";

const Registration = () => {
  // const dataUserUp = useSelector(LogIn);
  const [isName, setIsName] = useState("");
  const [isPass, setIsPass] = useState("");
  const [isPass2, setIsPass2] = useState("");

  const Name1 = (e) => {
    setIsName(e.target.value);
  };

  const Pass1 = (e) => {
    setIsPass(e.target.value);
  };
  const Pass2 = (e) => {
    setIsPass2(e.target.value);
  };
  // const dispatch = useDispatch();
  //   chuyen huong router v6
  let navigate = useNavigate();
  // const Push = (event) => {
  //   event.preventDefault();
  //   if (isPass === isPass2 && !dataUserUp.some((x) => x.name === isName)) {
  //     alert("dang ky thanh cong");
  //     let item = {
  //       id: "",
  //       name: isName,
  //       password: isPass,
  //     };
  //     dispatch(AddUser(item));
  //     navigate("/login");
  //   } else {
  //     alert("trung tai khoan hoac nhap sai mat khau");
  //   }
  // };

  // ============ firebase dang ky
  const Push = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(getAuth(app), isName, isPass)
      .then((userCredential) => {
        // Signed in
        console.log("thanh cong");
        navigate("/login");
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log("loi");
      });
  };

  return (
    <div className="Registration">
      <form onSubmit={Push}>
        <h2 className="Dangky">Đăng Ký</h2>
        <div>
          <input
            type="text"
            required
            value={isName}
            onChange={Name1}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="password"
            required
            value={isPass}
            onChange={Pass1}
            placeholder="Password"
          />
        </div>
        <div>
          <input
            type="password"
            required
            value={isPass2}
            onChange={Pass2}
            placeholder="Nhập lại Password"
          />
        </div>
        <button type="submit">Đăng Ký</button>
        <Link to="/login" className="dangnhap">
          đăng nhập
        </Link>
      </form>
    </div>
  );
};

export default Registration;
