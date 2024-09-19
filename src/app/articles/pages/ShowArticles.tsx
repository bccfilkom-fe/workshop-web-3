import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchArticles } from "../../../redux/article/articleThunks";
import ArticleList from "../components/ArticleList";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ShowArticles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div>
      {/* TITLE */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold my-2">Articles</h1>
        <Button size="large" type="primary" icon={<PlusCircleOutlined />} onClick={() => navigate('create')}>
          Create
        </Button>
      </div>

      {/* CARD LIST  */}
      <ArticleList />
    </div>
  );
};

export default ShowArticles;
