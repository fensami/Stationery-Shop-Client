
import { TQueryParam, TResponseRedux } from "../../../type/global";
import { TOrders } from "../../../type/productsManagement.type";
import { baseApi } from "../../api/baseApi";

const ordersManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: "orders/get-all-orders",
                    method: "GET",
                    params: params
                }
            },
            // providesTags: ["product"],
            transformResponse: (response: TResponseRedux<TOrders[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            },

        }),
        updateOrderShipping: builder.mutation({
            query: ({ id }) => ({
                url: `/orders/admin-shipping-order/${id}`,
                method: "PATCH"
            }),
            // invalidatesTags: ["semester"]
        }),
        deleteOrder: builder.mutation({
            query: (orderId) => ({
                url: `/orders/delete-order/${orderId}`,
                method: "DELETE",
            }),
            // invalidatesTags: ["order"]
        }),
        getAllMyOrders: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                console.log(params);

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: "orders/get-my-orders",
                    method: "GET",
                    params: params
                }
            },
            // providesTags: ["product"],
            transformResponse: (response: TResponseRedux<TOrders[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            },

        }),

        createOrderProduct: builder.mutation({
            query: (producData) => ({
                url: "/orders/create-order",
                method: "POST",
                body: producData,
                credentials: "include",
            }),
            // invalidatesTags: ["orders"],
        }),

        // addProduct: builder.mutation({
        //     query: (data) => ({
        //         url: "/products/create-products",
        //         method: "POST",
        //         body: data
        //     }),
        //     invalidatesTags: ["product"]
        // }),
        // deleteProduct: builder.mutation({
        //     query: (productId) => ({
        //         url: `/products/delete-product/${productId}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ["product"]
        // }),
        //update
        // updateProduct: builder.mutation({
        //     query: (args) => ({
        //         url: `/products/update-product/${args.id}`,
        //         method: "PATCH",
        //         body: args.data
        //     }),
        //     // invalidatesTags: ["semester"]
        // }),
    }),
})

export const {
    useGetAllOrdersQuery,
    useUpdateOrderShippingMutation,
    useDeleteOrderMutation,
    useGetAllMyOrdersQuery,
    useCreateOrderProductMutation
} = ordersManagementApi;