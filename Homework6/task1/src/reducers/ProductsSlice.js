import { createSlice } from "@reduxjs/toolkit"

const ProductsSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                (product, index) => index !== action.payload
            );
        },
        editProduct: (state, action) => {
            const { index, updatedProduct } = action.payload;
            if (state.products[index]) {
                state.products[index] = updatedProduct;
            }
        }
    }
});

export const { addProduct, deleteProduct, editProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;