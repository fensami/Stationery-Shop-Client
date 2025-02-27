
export type TProduct = {
    _id: string
    name: string
    brand: string
    price: number
    category: string
    description: string
    quantity: number
    inStock: boolean
}
export type TOrders = {
    // _id?: string
    // name?: string
    // brand?: string
    // price?: number
    // category?: string
    // description?: string
    // quantity?: number
    // inStock?: boolean
    orderStatus?: string
    totalPrice?: number
    quantity?: number
    _id: string
    product: {
        _id: string;
        name: string;
    };
}