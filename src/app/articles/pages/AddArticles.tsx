import { useDispatch } from "react-redux";
import ArticleForm from "../components/ArticleForm";
import { AppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { Article } from "../models/articleInterface";
import { createArticle } from "../../../redux/article/articleThunks";
import { notification } from "antd";

const AddArticles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (articleData: Omit<Article, "id">) => {
    try {
      await dispatch(createArticle(articleData));

      // Notif
      notification.success({
        message: "Success",
        description: "Artikel Berhasil Dibuat!",
      });

      navigate("/articles");
    } catch (error) {
      console.error("Error creating article:", error);

      // notif
      notification.error({
        message: "Error",
        description: "Artikel Gagal Dibuat!",
      });
    }
  };

  return (
    <div>
      {/* TITLE  */}
      <h1 className="text-3xl font-bold my-2 text-center">
        Form Create Articles
      </h1>

      {/* FORM */}
      <div className="w-full flex justify-center items-center">
        <ArticleForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddArticles;
