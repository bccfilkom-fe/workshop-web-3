import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../redux/store";
import { useEffect } from "react";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../../../redux/product/productThunks";

const ShowProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {/* TITLE */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold my-2">Products</h1>
        <Button
          size="large"
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={() => navigate("create")}
        >
          Create
        </Button>
      </div>

      {/* CARD LIST */}
      <ProductList />
    </div>
  );
};

export default ShowProducts;
