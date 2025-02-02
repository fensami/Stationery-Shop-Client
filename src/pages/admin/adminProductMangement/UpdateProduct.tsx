/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import { useParams } from "react-router-dom";
import SSForm from "../../../components/form/SSForm";
import SSInput from "../../../components/form/SSInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateProductMutation } from "../../../redux/features/admin/productsManagement.api";
import { useGetSingleProductQuery } from "../../../redux/features/product/all-product.api";

const UpdateProduct = () => {
  const { id } = useParams();
  const [updateProduct] = useUpdateProductMutation(undefined);
  const { data: product } = useGetSingleProductQuery(id);
  console.log(product?.data.name);

  // const defaultValues = {
  //   name: product?.data?.name,
  //   brand: "Pilot",
  //   price: 20,
  //   category: "Writing",
  //   description: "A high-quality ballpoint pen for smooth writing.",
  //   quantity: 20,
  // };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Product...");

    try {
      if (!id) {
        toast.error("Product ID is missing", { id: toastId });
        return;
      }

      const productData = {
        id,
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
      };

      await updateProduct(productData).unwrap();
      toast.success("Product Updated Successfully", { id: toastId });
    } catch (err) {
      console.error("Update Error:", err);
      const errorMessage =
        (err as any).data?.message || "Failed to update product";
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <div className="update-product">
      <h2>Update Product</h2>
      <Row justify="center" align="middle">
        <Col lg={{ span: 12 }} span={24}>
          <div
            style={{
              background: "#f8f8f8",
              padding: "40px",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ marginBottom: "20px", fontSize: "34px" }}>
              Update Product
            </h2>
            <SSForm onSubmit={onSubmit}>
              <SSInput type="text" name="name" label="Product Name" />
              <SSInput type="text" name="brand" label="Brand" />
              <SSInput type="text" name="price" label="Price" />
              <SSInput type="text" name="category" label="Category" />
              <SSInput type="text" name="description" label="Description" />
              <SSInput type="text" name="quantity" label="Quantity" />
              <Button className="primary-btn" htmlType="submit">
                Update
              </Button>
            </SSForm>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateProduct;
