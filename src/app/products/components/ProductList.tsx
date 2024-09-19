import { List, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../../../redux/product/productThunks";
import ItemCard from "../../../shared/components/cards/ItemCard";
import LoadingSpinners from "../../../shared/components/spinners/LoadingSpinners";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  const handleDelete = async (id: string) => {
    try {
      await dispatch(removeProduct(id));

      // Notif
      notification.success({
        message: "Success",
        description: "Product Berhasil Dihapus!",
      });
    } catch (error) {
      // notif
      notification.error({
        message: "Error",
        description: "Product Gagal Dihapus!",
      });
    }
  };

  const onDetail = (id: string) => {
    navigate(`${id}`);
  };

  //   LOADING
  if (loading) {
    return <LoadingSpinners />;
  }

  return (
    <div className="flex justify-center w-full">
      <List
        grid={{ gutter: 16, xs: 1 }}
        dataSource={products}
        renderItem={(product) => (
          <List.Item
            key={product.id}
            className="flex justify-center items-center"
          >
            <ItemCard
              id={product.id}
              image={product.image}
              title={product.name}
              category={product.material}
              authorOrSeller={"$" + product.price}
              onDetail={onDetail}
              onDelete={handleDelete}
            />
          </List.Item>
        )}
        className="w-full max-w-7xl"
      />
    </div>
  );
};

export default ProductList;
