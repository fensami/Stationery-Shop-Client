import { Col, Row } from "antd";
import { useGetAllProductsQuery } from "../../../redux/features/product/all-product.api";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../../redux/features/admin/productsManagement.api";
import { toast } from "sonner";

const AllProductsDashboard = () => {
  const { data: products } = useGetAllProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation(undefined);
  const handleDelete = async (productId: string) => {
    const toastId = toast.loading("Creating...");
    try {
      await deleteProduct(productId).unwrap();
      // Optionally, show a success message or refetch products
      toast.success("product Deleted Success !", { id: toastId });
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product:", { id: toastId });
    }
  };

  return (
    <div>
      <div className="product-card-area">
        <Row gutter={[24, 24]}>
          {products?.data?.map((product, index) => (
            <Col lg={{ span: 8 }} key={index}>
              <div className="product-card-wrap">
                <div>
                  <img
                    src="https://soniofficemate.com/wp-content/uploads/2024/10/664080159-executive-kit.webp"
                    alt={product.name}
                  />
                </div>
                <h2 className="title">{product.name}</h2>
                <p className="para">{product.price}</p>
                <p className="para-two">{product.category}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link
                    className="btn-primary"
                    to={`/admin/update-product/${product._id}`}
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn-primary delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllProductsDashboard;
