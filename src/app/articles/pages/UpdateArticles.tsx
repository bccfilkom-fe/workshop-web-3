import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchArticleById } from "../../../redux/article/articleThunks";
import { editArticle } from "../../../redux/article/articleThunks";
import { Article } from "../models/articleInterface";
import { notification } from "antd";
import LoadingSpinners from "../../../shared/components/spinners/LoadingSpinners";

const UpdateArticles = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const article = useSelector(
    (state: RootState) => state.articles.currentArticle
  );
  const loading = useSelector((state: RootState) => state.articles.loading);

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [id]);

  const handleSubmit = async (articleData: Omit<Article, "id">) => {
    try {
      if (id) await dispatch(editArticle(id, articleData));

      // Notif
      notification.success({
        message: "Success",
        description: "Artikel Berhasil Diperbarui!",
      });

      navigate("/articles");
    } catch (error) {
      console.error("Error updating article:", error);

      // notif
      notification.error({
        message: "Error",
        description: "Artikel Gagal Diperbarui!",
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
        Form Update Artikel
      </h1>

      {/* FORM */}
      <div className="w-full flex justify-center items-center">
        {article && (
          <ArticleForm
            onSubmit={handleSubmit}
            initialValues={article}
            isEdit={true}
          />
        )}
      </div>
    </div>
  );
};

export default UpdateArticles;
