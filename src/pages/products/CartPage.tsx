import Breadcum from "../home/inner-page-components/Breadcum";
import MyOrders from "./MyOrders";

const CartPage = () => {
  return (
    <div>
      <Breadcum title="cart" breadcrumbs="Cart" />
      <div className="container">
        <MyOrders />
      </div>
    </div>
  );
};

export default CartPage;
