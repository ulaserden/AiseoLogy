import "./ResultCard.css";

function ResultCard({ label, passed, value }) {
  return (
    <div className={`result-card ${passed ? "success" : "danger"}`}>
      <div className="result-card-header">
        <h4>{label}</h4>

        <span className={`badge ${passed ? "badge-success" : "badge-danger"}`}>
          {passed ? "PASS" : "FAIL"}
        </span>
      </div>

      <div className="result-card-body">
        <p>{value || "Not Found"}</p>
      </div>
    </div>
  );
}

export default ResultCard;