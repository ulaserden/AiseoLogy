import "./RecommendationCard.css";

function RecommendationCard({ recommendations }) {
  return (
    <div className="recommendation-card">
      <h3>Recommendations</h3>

      {recommendations.length === 0 ? (
        <p className="empty">
          Excellent! No SEO issues were detected.
        </p>
      ) : (
        <ul>
          {recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecommendationCard;