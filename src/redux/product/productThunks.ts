import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../app/products/models/productInterface";
import axiosInstance from "../../api/coreApi";
import { AppDispatch } from "../store";
import { addProduct, deleteProduct, updateProduct } from "./productSlice";

export const createProduct = (product: Omit<Product, 'id'>) => async (dispatch: AppDispatch) => {
  try {
    const response = await axiosInstance.post<Product>('/products', product)
    dispatch(addProduct(response.data))
  } catch (error) {
    throw new Error('An error occurred while creating the product');
  }
}

export const editProduct = (id: string, product: Omit<Product, 'id'>) => async (dispatch: AppDispatch) => {
  try {
    const response = await axiosInstance.put<Product>(`/products/${id}`, product);
    dispatch(updateProduct(response.data));
  } catch (error) {
    throw new Error('An error occurred while updating the product');
  }
}

export const removeProduct = (id: string) => async (dispatch: AppDispatch) => {
  try {
    await axiosInstance.delete(`/products/${id}`);
    dispatch(deleteProduct(id));
  } catch (error) {
    throw new Error('An error occurred while removing the product');
  }
};

// async thunk
export const fetchProducts = createAsyncThunk<Product[], void>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get<Product[]>('/products')
      return response.data
    } catch (error) {
      console.error(error)
      return rejectWithValue('Failed to fetch products')
    }
  }
)

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