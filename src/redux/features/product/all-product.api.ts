import { TQueryParam, TResponseRedux } from "../../../type/global";
import { TProduct } from "../../../type/productsManagement.type";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (args) => {
                const params = new URLSearchParams();
                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: "products/get-all-products",
                    method: "GET",
                    params: params
                }
            },
            providesTags: ["product"],
            transformResponse: (response: TResponseRedux<TProduct[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            },

        }),
        getSingleProduct: builder.query({
            query: (id) => {
                const params = new URLSearchParams(id);

                return {
                    url: `products/get-single-product/${id}`,
                    method: "GET",
                    params: params
                }
            },

        }),


    }),
})

export const {
    useGetAllProductsQuery,
    useGetSingleProductQuery
} = userManagementApi;