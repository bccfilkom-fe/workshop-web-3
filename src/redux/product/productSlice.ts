import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../app/products/models/productInterface";
import { fetchProducts, fetchProductsById } from "./productThunks";

interface ProductState {
    products: Product[],
    loading: boolean,
    error: string | null,
    currentProduct: Product | null
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    currentProduct: null
}

const productSlice = createSlice({
    name: 'products', initialState, reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            // isi ini
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            // isi ini
        },

        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        setCurrentProduct: (state, action: PayloadAction<Product>) => {
            state.currentProduct = action.payload
        },
    }, extraReducers: (builder) => {
        // BY ID 
        builder.addCase(fetchProductsById.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProductsById.fulfilled, (state, action: PayloadAction<Product>) => {
            state.loading = false;
            state.currentProduct = action.payload;
        });
        builder.addCase(fetchProductsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})

export const { addProduct, updateProduct, deleteProduct, setCurrentProduct } = productSlice.actions

export default productSlice.reducer