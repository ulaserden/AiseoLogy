import { useState } from "react";
import "./Analyzer.css";

import { analyzeSeo } from "../../utils/seoAnalyzer";

import ScoreCard from "../ScoreCard/ScoreCard";
import ResultCard from "../ResultCard/ResultCard";
import RecommendationCard from "../RecommendationCard/RecommendationCard";

function Analyzer() {
  const [html, setHtml] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = () => {
    if (!html.trim()) {
      alert("Please paste your HTML.");
      return;
    }

    setAnalysis(analyzeSeo(html));
  };

  if (!analysis) {
    return (
      <section className="analyzer" id="analyzer">
        <div className="container">

          <div className="analyzer-header">
            <h2>SEO Analyzer</h2>

            <p>
              Paste your HTML source code below and analyze its SEO structure.
            </p>
          </div>

          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            placeholder="Paste your HTML here..."
          />

          <button
            className="analyze-button"
            onClick={handleAnalyze}
          >
            Analyze
          </button>

        </div>
      </section>
    );
  }

  const recommendations = [];

  if (!analysis.title.exists)
    recommendations.push("Add a <title> tag.");

  if (!analysis.metaDescription.exists)
    recommendations.push("Add a meta description.");

  if (!analysis.h1.exists)
    recommendations.push("Add an H1 heading.");

  if (!analysis.canonical.exists)
    recommendations.push("Add a canonical URL.");

  if (!analysis.robots.exists)
    recommendations.push("Add a robots meta tag.");

  if (!analysis.openGraph.exists)
    recommendations.push("Add Open Graph tags.");

  if (!analysis.twitter.exists)
    recommendations.push("Add Twitter Card tags.");

  if (analysis.images.missingAlt > 0)
    recommendations.push(
      `Add alt attributes to ${analysis.images.missingAlt} image(s).`
    );

  if (analysis.links.empty > 0)
    recommendations.push(
      `Fix ${analysis.links.empty} empty link(s).`
    );

  return (
    <section className="analyzer" id="analyzer">
      <div className="container">

        <div className="analyzer-header">
          <h2>SEO Analyzer</h2>

          <p>
            Paste your HTML source code below and analyze its SEO structure.
          </p>
        </div>

        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          placeholder="Paste your HTML here..."
        />

        <button
          className="analyze-button"
          onClick={handleAnalyze}
        >
          Analyze
        </button>

        <div className="analysis-results">

          <ScoreCard score={analysis.score} />

          <div className="result-grid">

            <ResultCard
              label="Title"
              passed={analysis.title.exists}
              value={analysis.title.value}
            />

            <ResultCard
              label="Meta Description"
              passed={analysis.metaDescription.exists}
              value={analysis.metaDescription.value}
            />

            <ResultCard
              label="H1"
              passed={analysis.h1.exists}
              value={`${analysis.h1.count} found`}
            />

            <ResultCard
              label="H2"
              passed={analysis.h2.exists}
              value={`${analysis.h2.count} found`}
            />

            <ResultCard
              label="Canonical"
              passed={analysis.canonical.exists}
              value={
                analysis.canonical.exists
                  ? analysis.canonical.value
                  : ""
              }
            />

            <ResultCard
              label="Robots"
              passed={analysis.robots.exists}
              value={
                analysis.robots.exists
                  ? analysis.robots.value
                  : ""
              }
            />

            <ResultCard
              label="Open Graph"
              passed={analysis.openGraph.exists}
              value={`${analysis.openGraph.count} tag(s)`}
            />

            <ResultCard
              label="Twitter Card"
              passed={analysis.twitter.exists}
              value={`${analysis.twitter.count} tag(s)`}
            />

            <ResultCard
              label="Images"
              passed={analysis.images.missingAlt === 0}
              value={`${analysis.images.total} image(s) / ${analysis.images.missingAlt} missing alt`}
            />

            <ResultCard
              label="Links"
              passed={analysis.links.empty === 0}
              value={`${analysis.links.total} link(s) / ${analysis.links.empty} empty`}
            />

          </div>

          <RecommendationCard
            recommendations={recommendations}
          />

        </div>

      </div>
    </section>
  );
}

export default Analyzer;