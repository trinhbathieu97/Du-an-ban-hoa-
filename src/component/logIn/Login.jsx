import React from "react";
// import { LogIn } from "../Store-Redux/Reducer";
// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./LoginApp.modules.scss";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/Firebase";

const Login = () => {
  // const dataUser = useSelector(LogIn);
  const [nameUser, setNameUser] = useState("");
  const [pass, setPass] = useState("");

  // useEffect(() => {}, [dataUser]);

  const NameUser = (e) => {
    setNameUser(e.target.value);
  };
  const PassWord = (e) => {
    setPass(e.target.value);
  };

  // let navigate = useNavigate();

  // const Dangnhap = (event) => {
  //   event.preventDefault();

  //   if (dataUser.some((x) => x.name === nameUser && x.password === pass)) {
  //     alert("Dang nhap thanh cong");
  //     navigate("/");
  //     setNameUser("");
  //     setPass("");
  //   } else {
  //     alert("sai mat khau hoac pass word");
  //   }
  // };

  // ===========
  // dang nhap firebase====

  const Dangnhap = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(getAuth(app), nameUser, pass)
      .then((userCredential) => {
        // Signed in
        console.log("dang nhap thanh cong");
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log("sai mat khau hoac password");
      });
  };

  // firebase
  const Google = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log("loi duong truyen");
      });
  };

  const out = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        console.log("dax uot");
      })
      .catch((error) => {
        console.log("chua uot");
      });
  };
  return (
    <div className="Registration">
      <form onSubmit={Dangnhap}>
        <h2 className="Dangky">Đăng nhập</h2>
        <div>
          <input
            type="text"
            required
            value={nameUser}
            onChange={NameUser}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="password"
            required
            value={pass}
            onChange={PassWord}
            placeholder="Password"
          />
        </div>

        <button type="submit">Đăng Nhập</button>
        <Link to="/registration" className="dangnhap">
          Đăng ký
        </Link>
        {/* <button onClick={Google}>Goole</button> */}
      </form>
      <button onClick={Google}>Goole</button>
      <button onClick={out}>out</button>
    </div>
  );
};

export default Login;
