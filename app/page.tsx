'use client';

import { useState, useEffect } from 'react';
import { getCount, castVote } from './actions'; // Importing the NEW secure function

// --- CONFIGURATION ---
const STARTING_YES = 12250;
const STARTING_NO = 845;
const STARTING_VETO = 12;
// ---------------------

export default function Home() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [veto, setVeto] = useState(0);
  const [message, setMessage] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  
  // Hover states
  const [hoverYes, setHoverYes] = useState(false);
  const [hoverNo, setHoverNo] = useState(false);
  const [hoverVeto, setHoverVeto] = useState(false);

  // Admin Toggle
  const [showRealStats, setShowRealStats] = useState(false);

  // Sync with Database
  const fetchVotes = async () => {
    try {
      const y = await getCount('vote_yes');
      const n = await getCount('vote_no');
      const v = await getCount('vote_veto');
      setYes(y);
      setNo(n);
      setVeto(v);
    } catch (e) {
      console.error(e);
    }
  };

  // The New Secure Vote Action
  const handleVote = async (type: 'yes' | 'no' | 'veto') => {
    if (hasVoted) return;

    setMessage('Verifying Identity...');

    // 1. Send vote to server to check IP
    const result = await castVote(type);

    if (result.success) {
      // Success! Update screen
      if (type === 'yes') setYes(prev => prev + 1);
      if (type === 'no') setNo(prev => prev + 1);
      if (type === 'veto') setVeto(prev => prev + 1);
      
      setHasVoted(true);
      setMessage('Vote Confirmed. Identity Secured.');
    } else {
      // Failed (IP already used)
      setHasVoted(true);
      setMessage('Error: This Network Has Already Voted.');
    }
  };

  useEffect(() => {
    fetchVotes();
    const interval = setInterval(fetchVotes, 3000); 
    return () => clearInterval(interval);
  }, []);

  const displayYes = showRealStats ? yes : (yes + STARTING_YES);
  const displayNo = showRealStats ? no : (no + STARTING_NO);
  const displayVeto = showRealStats ? veto : (veto + STARTING_VETO);

  return (
    <div style={{
      minHeight: "100vh",
      background: showRealStats ? "#e0e0e0" : "#f4f4f9",
      fontFamily: "'Georgia', serif",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      transition: "background 0.5s ease"
    }}>
      
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        .animate-fade { animation: fadeIn 0.8s ease-out forwards; }
        .number-box { transition: all 0.3s ease; }
        .number-box:hover { transform: translateY(-2px); }
      `}</style>

      {/* HEADER */}
      <div className="animate-fade" style={{textAlign: "center", marginBottom: 40, maxWidth: 600}}>
        <h1 style={{
          fontSize: "2.5rem", 
          marginBottom: "10px", 
          textTransform: "uppercase", 
          letterSpacing: "2px",
          borderBottom: "2px solid #333",
          paddingBottom: "10px"
        }}>
          The Competence Restoration Act
        </h1>
        <p style={{fontSize: "0.9rem", color: "#666", fontStyle: "italic", fontFamily: "monospace"}}>
          National Shadow Interface • Primary Node • <span style={{color: "green"}}>SECURE</span>
        </p>
      </div>

      {/* MAIN CARD */}
      <div className="animate-fade" style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        maxWidth: "600px",
        width: "100%",
        borderTop: "6px solid #111"
      }}>
        
        {/* CARD HEADER */}
        <div style={{marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "20px"}}>
          <div style={{fontSize: "12px", fontWeight: "bold", color: showRealStats ? "#c00" : "#009900", marginBottom: "5px", letterSpacing: "1px"}}>
             {showRealStats ? "⚠️ ADMIN DEBUG MODE ACTIVE" : "● LIVE RATIFICATION SESSION"}
          </div>
          <h2 style={{fontSize: "1.5rem", margin: 0, fontFamily: "sans-serif", fontWeight: 700}}>
            H.R.2201 — "The Competence Restoration Act"
          </h2>
          <p style={{color: "#555", marginTop: "15px", fontSize: "1rem", lineHeight: "1.6", fontFamily: "sans-serif"}}>
            <strong>Mandate:</strong> Establishing a government of <strong>Competency Over Corruption</strong>.
            <br/>
            <strong>System Check:</strong> <span style={{color:"#009900", fontWeight:"bold"}}>READY FOR RATIFICATION</span>
          </p>
        </div>

        {/* COUNTERS */}
        <div style={{display: "flex", justifyContent: "space-between", marginBottom: "40px", gap: "10px"}}>
          {/* YES */}
          <div className="number-box" style={{textAlign: "center", flex: 1}}>
            <div style={{fontSize: "2.5rem", fontWeight: 900, color: "#111"}}>{Number(displayYes).toLocaleString()}</div>
            <div style={{fontSize: "0.8rem", fontWeight: "bold", color: "#009900", letterSpacing: "1px"}}>AFFIRM</div>
          </div>
          {/* NO */}
          <div className="number-box" style={{textAlign: "center", flex: 1, borderLeft: "1px solid #eee", borderRight: "1px solid #eee"}}>
            <div style={{fontSize: "2.5rem", fontWeight: 900, color: "#111"}}>{Number(displayNo).toLocaleString()}</div>
            <div style={{fontSize: "0.8rem", fontWeight: "bold", color: "#666", letterSpacing: "1px"}}>DISSENT</div>
          </div>
          {/* VETO */}
          <div className="number-box" style={{textAlign: "center", flex: 1}}>
            <div style={{fontSize: "2.5rem", fontWeight: 900, color: "#c00"}}>{Number(displayVeto).toLocaleString()}</div>
            <div style={{fontSize: "0.8rem", fontWeight: "bold", color: "#c00", letterSpacing: "1px"}}>VETO</div>
          </div>
        </div>

        {/* BUTTONS */}
        <div style={{display: "flex", flexDirection: "column", gap: "15px"}}>
          <div style={{display: "flex", gap: "15px"}}>
            <button 
              onClick={() => handleVote('yes')}
              onMouseEnter={() => setHoverYes(true)}
              onMouseLeave={() => setHoverYes(false)}
              style={{flex: 1, padding: "15px", fontSize: "1.1rem", border: "none", background: hoverYes ? "#d4edda" : "#f0f0f0", color: hoverYes ? "#155724" : "#333", cursor: "pointer", fontWeight: "bold", borderRadius: "5px", transition: "all 0.2s ease", transform: hoverYes ? "translateY(-2px)" : "none", boxShadow: hoverYes ? "0 4px 10px rgba(0,0,0,0.1)" : "none"}}
            >
              Aye / Yes
            </button>
            <button 
              onClick={() => handleVote('no')}
              onMouseEnter={() => setHoverNo(true)}
              onMouseLeave={() => setHoverNo(false)}
              style={{flex: 1, padding: "15px", fontSize: "1.1rem", border: "none", background: hoverNo ? "#444" : "#333", color: "#fff", cursor: "pointer", fontWeight: "bold", borderRadius: "5px", transition: "all 0.2s ease", transform: hoverNo ? "translateY(-2px)" : "none", boxShadow: hoverNo ? "0 4px 10px rgba(0,0,0,0.2)" : "none"}}
            >
              Nay / No
            </button>
          </div>
          <button 
            onClick={() => handleVote('veto')}
            onMouseEnter={() => setHoverVeto(true)}
            onMouseLeave={() => setHoverVeto(false)}
            style={{width: "100%", padding: "15px", fontSize: "1.1rem", border: "none", background: hoverVeto ? "#cc0000" : "#a00", color: "white", cursor: "pointer", fontWeight: "bold", borderRadius: "5px", textTransform: "uppercase", letterSpacing: "2px", transition: "all 0.2s ease", transform: hoverVeto ? "translateY(-2px)" : "none", boxShadow: hoverVeto ? "0 4px 15px rgba(200,0,0,0.3)" : "none"}}
          >
            Citizen Veto
          </button>
        </div>

        {/* STATUS MESSAGE */}
        <div style={{marginTop: "25px", minHeight: "40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
          {message && (
            <div style={{fontSize: "0.9rem", fontWeight: "bold", padding: "10px 20px", background: hasVoted ? "#e2e3e5" : "#d1ecf1", color: hasVoted ? "#383d41" : "#0c5460", borderRadius: "50px", animation: "pulse 0.5s ease-in-out"}}>
              {message}
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div className="animate-fade" style={{marginTop: "50px", textAlign: "center"}}>
        <a href="/amendment" style={{fontSize: "1rem", color: "#111", textDecoration: "none", fontWeight: "bold", borderBottom: "2px solid #111"}}>
          Read the Competence Restoration Amendment
        </a>
        <p onClick={() => setShowRealStats(!showRealStats)} style={{marginTop: "20px", fontSize: "0.75rem", color: "#999", cursor: "pointer", fontFamily: "monospace"}} title="Toggle Admin View">
          System v3.7 • Verified Deployment {showRealStats ? "(DEBUG ACTIVE)" : ""}
        </p>
      </div>
    </div>
  );
}
