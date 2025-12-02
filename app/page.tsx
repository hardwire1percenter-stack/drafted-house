'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const [veto, setVeto] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const fetchVotes = async () => {
    const res = await fetch('/api/vote');
    const data = await res.json();
    setYes(data.yes);
    setNo(data.no);
    setVeto(data.veto);
    if (data.alreadyVoted) setMessage('You already voted today — thanks!');
    setLoading(false);
  };

  const vote = async (type: 'yes' | 'no' | 'veto') => {
    setMessage('');
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
      setMessage('One vote per person per day — your vote was already counted!');
    } else {
      setMessage('Vote recorded — thank you!');
    }
  };

  useEffect(() => {
    fetchVotes();
    const interval = setInterval(fetchVotes, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{padding:20, fontFamily:"system-ui", maxWidth:600, margin:"auto", textAlign:"center", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <h1 style={{fontSize:42}}>Drafted House</h1>
      <p style={{fontSize:20, marginBottom:30}}>Real citizens. Real veto power.</p>

      <div style={{margin:"40px 0", padding:25, border:"3px solid #000", borderRadius:12, background:"#fafafa"}}>
        <h2>H.R. 1234 — Test Bill</h2>
        <p>Spends $2 trillion.<br/>Hidden: $50M subsidy on page 842.</p>

        {loading ? <p>Loading live votes…</p> : (
          <div style={{margin:"30px 0", fontSize:32, fontWeight:"bold", lineHeight:1.6}}>
            <div>YES: {Number(yes).toLocaleString()}</div>
            <div>NO: {Number(no).toLocaleString()}</div>
            <div style={{color:"#c00"}}>VETO: {Number(veto).toLocaleString()}</div>
          </div>
        )}

        <div style={{marginTop:30}}>
          <button onClick={() => vote('yes')} style={{margin:10, padding:"16px 32px", fontSize:24, minWidth:120}}>YES</button>
          <button onClick={() => vote('no')} style={{margin:10, padding:"16px 32px", fontSize:24, minWidth:120}}>NO</button>
          <button onClick={() => vote('veto')} style={{margin:10, padding:"16px 32px", fontSize:24, minWidth:120, background:"#c00", color:"white", fontWeight:"bold"}}>VETO</button>
        </div>

        {message && <p style={{marginTop:20, fontSize:18, color:"#c00", fontWeight:"bold"}}>{message}</p>}
      </div>

      <p style={{marginTop:40}}>
        <a href="/amendment" style={{fontSize:20, color:"#0066cc", textDecoration:"underline"}}>
          📜 Read the full System v3.1-F amendment text
        </a>
      </p>

      <p style={{marginTop:60, fontSize:14, color:"#555"}}>
        Built by Jason Steed — System v3.1-F — December 2025
      </p>
    </div>
  );
}
