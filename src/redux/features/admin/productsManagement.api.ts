
import { baseApi } from "../../api/baseApi";

const productsManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/products/create-products",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["product"]
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `/products/delete-product/${productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["product"]
        }),
        //update
        updateProduct: builder.mutation({
            query: (args) => ({
                url: `/products/update-product/${args.id}`,
                method: "PATCH",
                body: args.data
            }),
            // invalidatesTags: ["semester"]
        }),
    }),
})

export const {
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsManagementApi;