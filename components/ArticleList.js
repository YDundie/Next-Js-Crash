import articleSyles from '../styles/Article.module.css';
import { ArticleItem } from '../components/ArticleItem';

export const ArticleList = ({ articles }) => {
  return (
    <div className={articleSyles.grid}>
      {articles.map((article, index) => {
        return <ArticleItem article={article} key={index} />;
      })}
    </div>
  );
};
