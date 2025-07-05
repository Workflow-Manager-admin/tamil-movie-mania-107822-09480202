import React from "react";
import { useNavigate } from "react-router-dom";

// PUBLIC_INTERFACE
function HomePage() {
  /** This is the landing screen for Tamil Movie Mania. */
  const navigate = useNavigate();

  return (
    <section style={{
      display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
      background: "var(--bg-secondary)", padding: "2.5rem", borderRadius: "22px", boxShadow: "0 1px 12px rgba(54,0,0,0.10)", maxWidth: "430px"
    }}>
      <div style={{ fontSize: "1.15rem", color: "var(--text-primary)", marginBottom: '2rem' }}>
        Play this fun game by guessing the <span style={{color: "var(--text-secondary)"}}>Tamil song</span> from the lyrics snippet or a short audio clip.<br />
        <span style={{ color: "#ffab00", fontWeight: "500" }}>Earn points for every correct answer!</span>
      </div>
      <button
        onClick={() => navigate('/play')}
        className="theme-toggle"
        style={{
          fontSize: "1.1rem",
          marginTop: "18px",
          background: "var(--button-bg)",
          color: "var(--button-text)",
          padding: "13px 36px",
          borderRadius: "12px"
        }}
      >
        🎵 Start Game
      </button>
      <p style={{marginTop: 30, fontSize:"0.98rem", color:"var(--text-secondary)"}}>
        <em>Think you know your Tamil movie music? <br />Prove it now! 😄</em>
      </p>
    </section>
  );
}

export default HomePage;
