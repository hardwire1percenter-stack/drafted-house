'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [veto, setVeto] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const fetchVotes = async () => {
    try {
      const res = await fetch('/api/vote');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setYes(data.yes);
      setNo(data.no);
      setVeto(data.veto);
      if (data.alreadyVoted) setMessage('You have already cast your key for this session.');
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const vote = async (type: 'yes' | 'no' | 'veto') => {
    setMessage('');
    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        body: JSON.stringify({ type }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setYes(data.yes);
      setNo(data.no);
      setVeto(data.veto);
      
      if (data.alreadyVoted) {
        setMessage('Access Denied: One vote per citizen ID per session.');
      } else {
        setMessage('Vote Recorded on the Ledger.');
      }
    } catch (e) {
      setMessage('Connection Error.');
    }
  };

  useEffect(() => {
    fetchVotes();
    const interval = setInterval(fetchVotes, 5000); // Polling every 5s for live updates
    return () => clearInterval(interval);
  }, []);

  return (
    // Added backgroundColor: "#ffffff" here to ensure contrast in dark mode
    <div style={{padding:20, fontFamily:"sans-serif", maxWidth:600, margin:"auto", textAlign:"center", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", color:"#333", backgroundColor: "#ffffff"}}>
      
      {/* HEADER */}
      <div style={{marginBottom:40}}>
        <h1 style={{fontSize:36, margin:"0 0 10px 0", letterSpacing:"-1px"}}>The Drafted House</h1>
        <p style={{fontSize:16, color:"#666", textTransform:"uppercase", letterSpacing:"2px"}}>System v3.1-F Interface</p>
      </div>

      {/* ACTIVE BILL CARD */}
      <div style={{padding:30, border:"2px solid #333", borderRadius:0, background:"#fff", boxShadow:"10px 10px 0px rgba(0,0,0,0.1)"}}>
        <div style={{borderBottom:"1px solid #eee", paddingBottom:15, marginBottom:20}}>
          <h2 style={{margin:0, fontSize:24}}>H.R. 7702 — "The Horizon Act"</h2>
          <p style={{color:"#555", fontStyle:"italic", marginTop:5}}>Allocates 15% of GDP to Fusion Energy Development.</p>
        </div>

        {loading ? <p>Syncing with Ledger...</p> : (
          <div style={{display:"flex", justifyContent:"space-around", marginBottom:30}}>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:32, fontWeight:"bold"}}>{Number(yes).toLocaleString()}</div>
              <div style={{fontSize:12, fontWeight:"bold", color:"#00aa00"}}>AFFIRM</div>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:32, fontWeight:"bold"}}>{Number(no).toLocaleString()}</div>
              <div style={{fontSize:12, fontWeight:"bold", color:"#555"}}>DISSENT</div>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:32, fontWeight:"bold", color:"#c00"}}>{Number(veto).toLocaleString()}</div>
              <div style={{fontSize:12, fontWeight:"bold", color:"#c00"}}>VETO</div>
            </div>
          </div>
        )}

        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          <div style={{display:"flex", gap:10}}>
            <button onClick={() => vote('yes')} style={{flex:1, padding:15, fontSize:18, background:"#eee", border:"none", cursor:"pointer", fontWeight:"bold", color:"#333"}}>YES</button>
            <button onClick={() => vote('no')} style={{flex:1, padding:15, fontSize:18, background:"#333", color:"#fff", border:"none", cursor:"pointer", fontWeight:"bold"}}>NO</button>
          </div>
          <button onClick={() => vote('veto')} style={{width:"100%", padding:15, fontSize:18, background:"#c00", color:"white", border:"none", cursor:"pointer", fontWeight:"bold", textTransform:"uppercase"}}>
            Invoke Citizen Veto
          </button>
        </div>

        {message && <p style={{marginTop:20, fontSize:14, color:"#c00", fontWeight:"bold", border:"1px solid #c00", padding:10}}>{message}</p>}
      </div>

      {/* FOOTER LINKS */}
      <div style={{marginTop:50}}>
        {/* Changed color to a standard link blue for better visibility */}
        <a href="/amendment" style={{fontSize:16, color:"#0066cc", textDecoration:"none", borderBottom:"1px solid #0066cc", paddingBottom:2}}>
          Read System v3.1-F White Paper
        </a>
      </div>

      <p style={{marginTop:60, fontSize:12, color:"#999"}}>
        Architect: Jason Steed — New Philadelphia Node
      </p>
    </div>
  );
}
