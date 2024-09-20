import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../app/products/models/productInterface";
import axiosInstance from "../../api/coreApi";
import { AppDispatch } from "../store";
import { addProduct, deleteProduct, updateProduct } from "./productSlice";

// THUNKS itu tempat hit api (props) => async (dispatch)

// createProduct()

// editProduct()

export const removeProduct = (id: string) => async (dispatch: AppDispatch) => {
  try {
    await axiosInstance.delete(`/products/${id}`);
    dispatch(deleteProduct(id));
  } catch (error) {
    throw new Error('An error occurred while removing the product');
  }
};

// async thunk -- BUAT FETCH PRODUCT DENGAN createAsyncThunk
export const fetchProducts = () => {
  return [{
    description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    id: "1",
    image: "https://loremflickr.com/640/480/business",
    material: "Granite",
    name: "Incredible Fresh Computer",
    price: "407.00",
    slug: "quia-nostrum-fugiat"
  }]
}

export const fetchProductsById = createAsyncThunk<Product, string>(
  'products/fetchProductsById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<Product>(`/products/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
      return rejectWithValue('Failed to fetch products')
    }
  }
)