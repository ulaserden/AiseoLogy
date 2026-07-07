import "./ScoreCard.css";

function ScoreCard({ score }) {
  let status = "Needs Improvement";

  if (score >= 80) {
    status = "Excellent";
  } else if (score >= 60) {
    status = "Good";
  }

  return (
    <div className="score-card">
      <h3>SEO Score</h3>

      <div className="score-value">
        {score}
        <span>/100</span>
      </div>

      <p>{status}</p>
    </div>
  );
}

export default ScoreCard;