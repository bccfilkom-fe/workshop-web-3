import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { Product } from "../models/productInterface";
import { notification } from "antd";
import ProductForm from "../components/ProductForm";

const AddProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (productData: Omit<Product, "id">) => {
    try {
      // await dispatch(createProduct(productData));

      // Notif
      notification.success({
        message: "Success",
        description: "Product Berhasil Dibuat!",
      });

      navigate("/products");
    } catch (error) {
      console.error("Error creating article:", error);

      // notif
      notification.error({
        message: "Error",
        description: "Product Gagal Dibuat!",
      });
    }
  };

  return (
    <div>
      {/* TITLE  */}
      <h1 className="text-3xl font-bold my-2 text-center">
        Form Create Products
      </h1>

      {/* FORM */}
      <div className="w-full flex justify-center items-center">
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddProducts;
