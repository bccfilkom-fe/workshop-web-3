import { List, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeArticle } from "../../../redux/article/articleThunks";
import { AppDispatch, RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import ItemCard from "../../../shared/components/cards/ItemCard";
import LoadingSpinners from "../../../shared/components/spinners/LoadingSpinners";

const ArticleList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { articles, loading } = useSelector(
    (state: RootState) => state.articles
  );

  const handleDelete = async (id: string) => {
    try {
      await dispatch(removeArticle(id));

      // Notif
      notification.success({
        message: "Success",
        description: "Artikel Berhasil Dihapus!",
      });
    } catch (error) {
      // notif
      notification.error({
        message: "Error",
        description: "Artikel Gagal Dihapus!",
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
        dataSource={articles}
        renderItem={(article) => (
          <List.Item
            key={article.id}
            className="flex justify-center items-center"
          >
            <ItemCard
              id={article.id}
              image={article.image}
              title={article.title}
              category={article.category}
              authorOrSeller={article.author}
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

export default ArticleList;
