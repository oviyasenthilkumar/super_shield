const ArticleCard = ({ article }) => {
  return (
    <div className="border rounded p-2 shadow-sm text-sm">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{article.title}</h3>
      <p className="text-gray-600 mt-1">{article.subtitle}</p>
      <p className="text-red-600 mt-2 text-xs">🔗 Share</p>
    </div>
  );
};

export default ArticleCard;
