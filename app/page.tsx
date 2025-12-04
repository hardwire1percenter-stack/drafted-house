'use client';

import { useState, useEffect } from 'react';
import { getCount, incrementCount } from './actions';

// --- CONFIGURATION: SET YOUR STARTING NUMBERS HERE ---
const STARTING_YES = 10250;  // Change this to your old "Yes" count
const STARTING_NO = 840;    // Change this to your old "No" count
const STARTING_VETO = 12;   // Change this to your old "Veto" count
// -----------------------------------------------------

export default function Home() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [veto, setVeto] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  
  // Secret Admin Toggle: false = Public View, true = Real Data View
  const [showRealStats, setShowRealStats] = useState(false);

  // 1. Sync with the Database
  const fetchVotes = async () => {
    try {
      const y = await getCount('vote_yes');
      const n = await getCount('vote_no');
      const v = await getCount('vote_veto');
      
      setYes(y);
      setNo(n);
      setVeto(v);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  // 2. Transmit Vote
  const vote = async (type: 'yes' | 'no' | 'veto') => {
    if (hasVoted) {
      setMessage('Status: Vote Already Recorded.');
      return;
    }

    setMessage('Transmitting to Ledger...');

    // Optimistic Update
    if (type === 'yes') setYes(prev => prev + 1);
    if (type === 'no') setNo(prev => prev + 1);
    if (type === 'veto') setVeto(prev => prev + 1);
    setHasVoted(true);

    try {
      await incrementCount(`vote_${type}`);
      setMessage('Vote Confirmed. Screenshot this to share.');
    } catch (e) {
      setMessage('Connection Error: Node Offline.');
    }
  };

  // 3. Live Polling
  useEffect(() => {
    fetchVotes();
    const interval = setInterval(fetchVotes, 3000); 
    return () => clearInterval(interval);
  }, []);

  // Helper to decide which number to show
  const displayYes = showRealStats ? yes : (yes + STARTING_YES);
  const displayNo = showRealStats ? no : (no + STARTING_NO);
  const displayVeto = showRealStats ? veto : (veto + STARTING_VETO);

  return (
    <div style={{
      padding: 20, 
      fontFamily: 'Georgia, serif', 
      maxWidth: 600, 
      margin: "auto", 
      textAlign: "center", 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      backgroundColor: showRealStats ? "#f0f0f0" : "#ffffff", // Background changes slightly in Admin Mode
      color: "#111"
    }}>
      
      {/* HEADER */}
      <div style={{marginBottom: 40}}>
        <h1 style={{fontSize: 28, margin: "0 0 10px 0", letterSpacing: "1px", textTransform: "uppercase"}}>The Competence Restoration Act</h1>
        <p style={{fontSize: 14, color: "#666", fontStyle: "italic", borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd", padding: "10px 0", width: "80%", margin: "0 auto"}}>
          National Shadow Interface • Primary Node
        </p>
      </div>

      {/* ACTIVE BILL CARD */}
      <div style={{
        padding: 30, 
        border: "4px solid #111", 
        background: "#fff", 
        textAlign: "left"
      }}>
        <div style={{borderBottom: "1px solid #eee", paddingBottom: 15, marginBottom: 20}}>
          <div style={{fontSize: 12, fontWeight: "bold", color: "#c00", textTransform: "uppercase", marginBottom: 5}}>
            {showRealStats ? "ADMIN MODE: RAW DATABASE DATA" : "Live Ratification Session"}
          </div>
          <h2 style={{margin: 0, fontSize: 22, lineHeight: 1.3, fontFamily: "sans-serif", fontWeight: "bold"}}>H.R.2201 — "The Competence Restoration Act"</h2>
          <p style={{color: "#444", marginTop: 10, fontSize: 15, lineHeight: 1.5, fontFamily: "sans-serif"}}>
            <strong>Mandate:</strong> Establishing a government of <strong>Competency Over Corruption</strong>.
            <br/>
            <strong>System Check:</strong> <span style={{color:"green", fontWeight:"bold"}}>READY FOR RATIFICATION</span>
          </p>
        </div>

        {/* TALLY DISPLAY */}
        {loading ? <p style={{textAlign:"center", fontStyle:"italic"}}>Syncing Ledger...</p> : (
          <div style={{display: "flex", justifyContent: "space-between", marginBottom: 30, textAlign: "center", fontFamily: "sans-serif"}}>
            <div style={{flex: 1}}>
              <div style={{fontSize: 32, fontWeight: "900"}}>{Number(displayYes).toLocaleString()}</div>
              <div style={{fontSize: 11, fontWeight: "bold", color: "#009900", textTransform: "uppercase", letterSpacing: 1}}>
                {showRealStats ? "Real Yes" : "Affirm"}
              </div>
            </div>
            <div style={{flex: 1, borderLeft: "1px solid #eee", borderRight: "1px solid #eee"}}>
              <div style={{fontSize: 32, fontWeight: "900"}}>{Number(displayNo).toLocaleString()}</div>
              <div style={{fontSize: 11, fontWeight: "bold", color: "#555", textTransform: "uppercase", letterSpacing: 1}}>
                 {showRealStats ? "Real No" : "Dissent"}
              </div>
            </div>
            <div style={{flex: 1}}>
              <div style={{fontSize: 32, fontWeight: "900", color: "#c00"}}>{Number(displayVeto).toLocaleString()}</div>
              <div style={{fontSize: 11, fontWeight: "bold", color: "#c00", textTransform: "uppercase", letterSpacing: 1}}>
                 {showRealStats ? "Real Veto" : "Citizen Veto"}
              </div>
            </div>
          </div>
        )}

        {/* BUTTONS */}
        <div style={{display: "flex", flexDirection: "column", gap: 10, fontFamily: "sans-serif"}}>
          <div style={{display: "flex", gap: 10}}>
            <button 
              onClick={() => vote('yes')} 
              style={{flex: 1, padding: 15, fontSize: 16, background: "#f0f0f0", border: "1px solid #ccc", cursor: "pointer", fontWeight: "bold", color: "#333"}}
            >
              Yes
            </button>
            <button 
              onClick={() => vote('no')} 
              style={{flex: 1, padding: 15, fontSize: 16, background: "#333", color: "#fff", border: "1px solid #333", cursor: "pointer", fontWeight: "bold"}}
            >
              No
            </button>
          </div>
          <button 
            onClick={() => vote('veto')} 
            style={{width: "100%", padding: 15, fontSize: 16, background: "#a00", color: "white", border: "none", cursor: "pointer", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px"}}
          >
            Veto
          </button>
        </div>

        {/* STATUS MESSAGE */}
        {message && (
          <div style={{marginTop: 20, fontSize: 13, fontWeight: "bold", textAlign: "center", padding: 10, background: "#f9f9f9", border: "1px solid #eee", fontFamily: "sans-serif", color: "#555"}}>
            {message}
          </div>
        )}
      </div>

      {/* FOOTER - SECRET CLICK HERE */}
      <div style={{marginTop: 50}}>
        <a href="/amendment" style={{fontSize: 16, color: "#111", textDecoration: "underline", fontWeight: "bold"}}>
          Read the Competence Restoration Amendment
        </a>
        
        {/* CLICK THIS TEXT BELOW TO TOGGLE REAL STATS */}
        <p 
          onClick={() => setShowRealStats(!showRealStats)} 
          style={{
            marginTop: 20, 
            fontSize: 12, 
            color: "#999", 
            maxWidth: 400, 
            margin: "20px auto", 
            fontFamily: "sans-serif", 
            cursor: "pointer",
            userSelect: "none"
          }}
          title="System Diagnostic"
        >
          System v3.4 • Verified Deployment {showRealStats ? "(DEBUG MODE)" : ""}
        </p>
      </div>
    </div>
  );
}
