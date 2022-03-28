import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProduct = createAsyncThunk("Products/apiProduct", async () => {
  const res = await axios.get("http://localhost:4000/products");
  return res.data;
});

export const GetUser = createAsyncThunk("Products/apiUser", async () => {
  const res = await axios.get("http://localhost:4000/users");
  return res.data;
});
// export const AddUser = createAsyncThunk("Products/addUser", async (item) => {
//   const res = await axios.post("http://localhost:4000/users", item);
//   return res.data;
// });

const ListProducts = createSlice({
  name: "Products",
  initialState: {
    AllProducts: [],
    allCart: [],
    Ordertotal: 0,
    userLogin: [],
  },
  reducers: {
    addCart(state, action) {
      let AddProducts = state.AllProducts.find((x) => x.id === action.payload);

      if (!state.allCart.find((x) => x.id === AddProducts.id)) {
        AddProducts.quantity = 1;
        AddProducts.totalmoney = AddProducts.price;
        state.allCart.push(AddProducts);
        let monney = state.allCart.reduce((x, y) => {
          return (x += y.totalmoney);
        }, 0);
        state.Ordertotal = monney;
        return;
      }
      // if (state.allCart.find((x) => x.id === AddProducts.id)) {
      //   let item = state.allCart.find((x) => x.id === action.payload);
      //   item.quantity += 1;
      // }
    },
    DeleteCart(state, action) {
      state.allCart = state.allCart.filter((x) => x.id !== action.payload);
      let monney = state.allCart.reduce((x, y) => {
        return (x += y.totalmoney);
      }, 0);
      state.Ordertotal = monney;
    },
    upMoney(state, action) {
      state.allCart.map((x) => {
        if (x.id === action.payload) {
          x.quantity = x.quantity += 1;
          x.totalmoney = x.price * x.quantity;
        }
      });
      let monney = state.allCart.reduce((x, y) => {
        return (x += y.totalmoney);
      }, 0);
      state.Ordertotal = monney;
    },
    dowMoney(state, action) {
      state.allCart.map((x) => {
        if (x.id === action.payload) {
          if (x.quantity > 1) {
            x.quantity = x.quantity -= 1;
          }
          x.totalmoney = x.price * x.quantity;
        }
        let monney = state.allCart.reduce((x, y) => {
          return (x += y.totalmoney);
        }, 0);
        state.Ordertotal = monney;
      });
    },
  },
  extraReducers: {
    [GetProduct.fulfilled]: (state, action) => {
      state.AllProducts = action.payload;
    },
    [GetProduct.rejected]: (state, action) => {
      console.log("EROR");
    },
    [GetUser.fulfilled]: (state, action) => {
      state.userLogin = action.payload;
    },
    // [AddUser.fulfilled]: (state, action) => {
    //   state.userLogin = [...state.userLogin, action.payload];
    // },
  },
});

const MyProduct = ListProducts.reducer;
// export const { AddProduct } = ListProducts.actions;
export const { addCart, DeleteCart, upMoney, dowMoney } = ListProducts.actions;
export const ProductSelecto = (state) => state.Product.AllProducts;
export const listCart = (state) => state.Product.allCart;
export const allTotal = (state) => state.Product.Ordertotal;
// export const LogIn = (state) => state.Product.userLogin;
export default MyProduct;
