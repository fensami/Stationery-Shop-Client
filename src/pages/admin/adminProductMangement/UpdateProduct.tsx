/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Row, Spin } from "antd";
import { useParams } from "react-router-dom";
import SSInput from "../../../components/form/SSInput";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  FormProvider,
} from "react-hook-form";
import { toast } from "sonner";
import { useUpdateProductMutation } from "../../../redux/features/admin/productsManagement.api";
import { useGetSingleProductQuery } from "../../../redux/features/product/all-product.api";
import { TResponse } from "../../../type/global";
import { useEffect } from "react";

const UpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  const [updateProduct] = useUpdateProductMutation(undefined);
  const formMethods = useForm(); // Get the entire useForm object
  const { setValue, handleSubmit, control } = formMethods; // Destructure the properties you need

  console.log(product);

  useEffect(() => {
    if (product?.data) {
      const { name, brand, price, quantity, description, category } =
        product.data;
      setValue("name", name || "");
      setValue("brand", brand || "");
      setValue("price", price || 0);
      setValue("quantity", quantity || 0);
      setValue("description", description || "");
      setValue("category", category || "");
    }
  }, [product, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Product...");

    try {
      if (!id) {
        toast.error("Product ID is missing", { id: toastId });
        return;
      }
      const productData = {
        id,
        data: {
          ...data,
          price: Number(data.price),
          quantity: Number(data.quantity),
        },
      };

      const res = (await updateProduct(productData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Product Updated Successfully", { id: toastId });
      }
    } catch (err) {
      console.error("Update Error:", err);
      const errorMessage =
        (err as any).data?.message || "Failed to update product";
      toast.error(errorMessage, { id: toastId });
    } finally {
      toast.dismiss(toastId);
    }
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
        <Spin size="large" />
      </Flex>
    );
  }

  if (error) {
    return <p>Error loading product.</p>;
  }

  return (
    <div className="update-product">
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
            <FormProvider {...formMethods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <SSInput
                  control={control}
                  type="text"
                  name="name"
                  label="Product Name"
                />
                <SSInput
                  control={control}
                  type="text"
                  name="brand"
                  label="Brand"
                />
                <SSInput
                  control={control}
                  type="text"
                  name="price"
                  label="Price"
                />
                <SSInput
                  control={control}
                  type="text"
                  name="category"
                  label="Category"
                />
                <SSInput
                  control={control}
                  type="text"
                  name="description"
                  label="Description"
                />
                <SSInput
                  control={control}
                  type="text"
                  name="quantity"
                  label="Quantity"
                />
                <Button className="primary-btn" htmlType="submit">
                  Update
                </Button>
              </form>
            </FormProvider>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateProduct;
