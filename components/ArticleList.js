// components/ArticleList.js
export default function ArticleList({ articles }) {
  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h4 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
        </div>
      ))}
    </div>
  );
}
