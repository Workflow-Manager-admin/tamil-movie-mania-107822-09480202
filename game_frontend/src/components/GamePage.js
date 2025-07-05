import React, { useState } from "react";

// Dummy data for quiz - lyrics and audio URL (could be expanded)
// TODO: Replace this with public API data (e.g. Musixmatch/JioSaavn for Tamil songs)
const quizData = [
  {
    type: "lyrics",
    clue: "பூவே உன்னகத்தில் பூவே, நீதான்யா எனக்குள் தேவே...",
    answer: "Poove Unakkaga",
    options: [
      "Poove Unakkaga",
      "Vinnaithaandi Varuvaayaa",
      "Kadhal Rojave",
      "Roja"
    ]
  },
  {
    type: "audio",
    clue: "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg",
    answer: "Why This Kolaveri Di",
    options: [
      "Why This Kolaveri Di",
      "Vaathi Coming",
      "Appadi Podu",
      "Munbe Vaa"
    ]
    // TODO: Use a real Tamil song snippet with fair-use short preview for demo
  },
  {
    type: "lyrics",
    clue: "வானமே எல்லை என்றாயோ...",
    answer: "Ennavale",
    options: [
      "Ennavale",
      "Uyire Uyire",
      "Anbil Avan",
      "Vennilave"
    ]
  }
];

// PUBLIC_INTERFACE
function GamePage() {
  /**
   * This is the main gameplay view for the quiz.
   * TODO: Integrate real Tamil song data (lyrics/audio) dynamically from an API.
   */
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Game finished when step reaches length
  const isFinished = step >= quizData.length;

  function handleOption(option) {
    setSelected(option);
    setTimeout(() => {
      if (option === quizData[step].answer) setScore(s => s + 1);
      setSelected(null);
      if (step + 1 < quizData.length) {
        setStep(step + 1);
      } else {
        setShowResult(true);
      }
    }, 600);
  }

  function handleRestart() {
    setStep(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  }

  if (showResult || isFinished) {
    return (
      <section style={{ background: "var(--bg-secondary)", borderRadius: "12px", padding: "2em", textAlign: "center", minWidth: 280 }}>
        <div style={{ fontSize: "1.25rem", color: "var(--text-secondary)", marginBottom: "1.1em" }}>
          Game Over!
        </div>
        <div style={{ fontSize: "1.15rem", marginBottom: "1.2em" }}>
          Your Score: <strong style={{ color: "#ffab00" }}>{score}</strong> / {quizData.length}
        </div>
        <button className="theme-toggle" style={{fontSize: "1.07rem"}} onClick={handleRestart}>
          🔁 Play Again
        </button>
      </section>
    );
  }

  const question = quizData[step];

  return (
    <section
      style={{
        background: "var(--bg-secondary)",
        padding: "2rem 1.7rem",
        borderRadius: "18px",
        minWidth: 320,
        maxWidth: 440,
        textAlign: "center",
        boxShadow: "0 1px 12px rgba(54,0,0,0.11)"
      }}
    >
      <h2 style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
        Question {step + 1} <span style={{fontSize: "0.9rem", color:'var(--text-primary)'}}>of {quizData.length}</span>
      </h2>
      {/* Show clue */}
      {question.type === "lyrics" ? (
        <blockquote style={{
          fontStyle: "italic", fontWeight:500, fontSize: "1.22rem", color: "#6200ea", margin: "1.4em 0"
        }}>
          “{question.clue}”
        </blockquote>
      ) : (
        <div style={{ margin: "1.1em 0" }}>
          {/* TODO: In production, use <audio controls> with fair-use clip from public Tamil music API */}
          <span style={{fontSize: "1rem", marginBottom:"0.4rem", display:"block"}}>Listen to the audio clip:</span>
          <audio src={question.clue} controls style={{ outline:0, borderRadius:"6px" }} preload="auto"/>
        </div>
      )}
      <div style={{marginTop: "2rem", display:"flex", flexDirection:"column", gap:"0.8em"}}>
        {question.options.map(option => (
          <button
            key={option}
            disabled={selected !== null}
            aria-pressed={selected === option}
            onClick={() => handleOption(option)}
            className="theme-toggle"
            style={{
              transition: "all 0.2s",
              background: selected === option
                ? (option === question.answer ? "#03dac6" : "#ffab00")
                : "var(--button-bg)",
              color: "var(--button-text)",
              boxShadow: selected === option ? "0 2px 7px rgba(98,0,234,0.11)" : undefined
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div style={{marginTop: "2.3rem", color: "var(--text-secondary)"}}>
        Score: <strong style={{color:"#ffab00"}}>{score}</strong>
      </div>
      {/* TODO: Add navigation (skip/next), maybe timer, and fetch next question dynamically */}
    </section>
  );
}

export default GamePage;
