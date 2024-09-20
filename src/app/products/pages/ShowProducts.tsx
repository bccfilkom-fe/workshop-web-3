import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";

const ShowProducts = () => {
  const navigate = useNavigate();

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
