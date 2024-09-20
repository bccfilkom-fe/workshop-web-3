import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchProductsById } from "../../../redux/product/productThunks";
import { Product } from "../models/productInterface";
import { notification } from "antd";
import LoadingSpinners from "../../../shared/components/spinners/LoadingSpinners";
import ProductForm from "../components/ProductForm";

const UpdateProducts = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const product = useSelector(
    (state: RootState) => state.products.currentProduct
  );
  const loading = useSelector((state: RootState) => state.products.loading);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsById(id));
    }
  }, [id]);

  const handleSubmit = async (productData: Omit<Product, "id">) => {
    try {
      // if (id) await dispatch(editProduct(id, productData));

      // Notif
      notification.success({
        message: "Success",
        description: "Product Berhasil Diperbarui!",
      });

      navigate("/products");
    } catch (error) {
      console.error("Error updating product:", error);

      // notif
      notification.error({
        message: "Error",
        description: "Product Gagal Diperbarui!",
      });
    }
  };

  //   LOADING
  if (loading) {
    return <LoadingSpinners />;
  }

  return (
    <div>
      {/* TITLE  */}
      <h1 className="text-3xl font-bold my-2 text-center">
        Form Update Product
      </h1>

      {/* FORM */}
      <div className="w-full flex justify-center items-center">
        {product && (
          <ProductForm
            onSubmit={handleSubmit}
            initialValues={product}
            isEdit={true}
          />
        )}
      </div>
    </div>
  );
};

export default UpdateProducts;
