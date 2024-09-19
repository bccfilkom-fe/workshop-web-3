import { Form, Input, Button, notification } from "antd";
import { useForm } from "antd/es/form/Form";
import { Article } from "../models/articleInterface";
import { ArticleFormValues, articleSchema } from "../models/articleSchema";
import { articleFields } from "../utils/articleFormUtils";

interface ArticleFormProps {
  initialValues?: Article;
  isEdit?: boolean;
  onSubmit: (articleData: Omit<Article, "id">) => void;
}

const ArticleForm = ({
  initialValues,
  isEdit = false,
  onSubmit,
}: ArticleFormProps) => {
  const [form] = useForm();

  const handleSubmit = (values: ArticleFormValues) => {
    const result = articleSchema.safeParse(values);
    if (!result.success) {
      result.error.errors.forEach((error) => {
        notification.error({
          message: "Validation Error",
          description: error.message,
        });
      });
      return;
    }

    const articleData = {
      ...result.data,
      createdAt:
        isEdit && initialValues
          ? initialValues.createdAt
          : new Date().toISOString(),
    };

    onSubmit(articleData);
  };

  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={handleSubmit}
      layout="vertical"
      className="w-[800px] max-w-[calc(100vw-40px)]"
    >
      {articleFields.map(({ name, label, placeholder, isTextArea }) => (
        <Form.Item
          key={name}
          name={name}
          label={label}
          rules={[
            {
              required: true,
              message: `${label} wajib diisi!`,
              ...(name === "image" && { type: "url", message: "Invalid URL" }),
            },
          ]}
        >
          {isTextArea ? (
            <Input.TextArea rows={4} placeholder={placeholder} />
          ) : (
            <Input placeholder={placeholder} />
          )}
        </Form.Item>
      ))}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEdit ? "Update Article" : "Create Article"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ArticleForm;
