import { useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import { Product } from "../models/productInterface";
import { ProductFormValues, productSchema } from "../models/productSchema";
import { productFields } from "../utils/productFormUtils";

interface ProductFormProps {
  initialValues?: Product;
  isEdit?: boolean;
  onSubmit: (productData: Omit<Product, "id">) => void;
}

const ProductForm = ({
  initialValues,
  isEdit = false,
  onSubmit,
}: ProductFormProps) => {
  const [form] = useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  const handleSubmit = (values: ProductFormValues) => {
    // Zod
    const result = productSchema.safeParse(values);
    if (!result.success) {
      result.error.errors.forEach((error) => {
        notification.error({
          message: "Validation Error",
          description: error.message,
        });
      });
      return;
    }

    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={initialValues}
      className="w-[800px] max-w-[calc(100vw-40px)]"
    >
      {productFields.map(({ name, label, isTextArea }) => (
        <Form.Item
          key={name}
          label={label}
          name={name}
          rules={[
            {
              required: true,
              message: `${label} wajib diisi!`,
              ...(name === "image" && { type: "url", message: "Invalid URL" }),
            },
          ]}
        >
          {isTextArea ? (
            <Input.TextArea rows={4} placeholder={label} />
          ) : (
            <Input placeholder={label} />
          )}
        </Form.Item>
      ))}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEdit ? "Update Product" : "Create Product"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
