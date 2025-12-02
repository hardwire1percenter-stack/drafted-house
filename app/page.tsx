'use client';

import { useState } from 'react';

export default function Home() {
  const [yes, setYes] = useState(102741);
  const [no, setNo] = useState(8921);
  const [veto, setVeto] = useState(28457);

  return (
    <div style={{padding:20, fontFamily:"system-ui", maxWidth:600, margin:"auto", textAlign:"center"}}>
      <h1>Drafted House</h1>
      <p>Real citizens veto real bills.</p>
      
      <div style={{margin:"30px 0", padding:20, border:"2px solid #000", borderRadius:10, background:"#f9f9f9"}}>
        <h2>H.R. 1234 – Test Bill</h2>
        <p>Spends $2 trillion. Hidden: $50M subsidy on page 842.</p>
        
        <div style={{marginTop:30, fontSize:28, fontWeight:"bold"}}>
          <div>YES: {yes.toLocaleString()}</div>
          <div>NO: {no.toLocaleString()}</div>
          <div style={{color:"#c00"}}>VETO: {veto.toLocaleString()}</div>
        </div>

        <div style={{marginTop:30}}>
          <button onClick={() => setYes(yes + 1)} style={{margin:8, padding:"14px 28px", fontSize:22}}>YES</button>
          <button onClick={() => setNo(no + 1)} style={{margin:8, padding:"14px 28px", fontSize:22}}>NO</button>
          <button onClick={() => setVeto(veto + 1)} style={{margin:8, padding:"14px 28px", fontSize:22, background:"#c00", color:"white", fontWeight:"bold"}}>VETO</button>
        </div>
      </div>

      <p><a href="https://postegorepublic.com" target="_blank">Full amendment + white paper →</a></p>
      <p style={{marginTop:50, fontSize:14}}>Built by Jason Steed – System v3.1-F</p>
    </div>
  );
}
