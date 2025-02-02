/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import SSForm from "../../components/form/SSForm";
import SSInput from "../../components/form/SSInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TResponse } from "../../type/global";
import { toast } from "sonner";
import { useAddProductMutation } from "../../redux/features/admin/productsManagement.api";

const CreateStationeryProduct = () => {
  // const defaultValues = {
  //   name: "Notebook",
  //   brand: "Pilot",
  //   price: 20,
  //   category: "Writing",
  //   description: "A high-quality ballpoint pen for smooth writing.",
  //   quantity: 20,
  // };
  const [createProduct] = useAddProductMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    try {
      const productData = {
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
      };
      const res = (await createProduct(productData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Product Created Successfully", { id: toastId });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("something wents wrong", { id: toastId });
    }
  };
  return (
    <div>
      <section className="product-area section-gap-100">
        <div className="container ">
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
                  Create Product
                </h2>
                <SSForm onSubmit={onSubmit}>
                  {/* <SSForm> */}
                  <SSInput type="text" name="name" label="Product Name" />
                  <SSInput type="text" name="brand" label="Brand" />
                  <SSInput type="text" name="price" label="Price" />
                  <SSInput type="text" name="category" label="Category" />
                  <SSInput type="text" name="description" label="Description" />
                  <SSInput type="text" name="quantity" label="Quantity" />
                  <Button className="primary-btn" htmlType="submit">
                    Create
                  </Button>
                </SSForm>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default CreateStationeryProduct;
