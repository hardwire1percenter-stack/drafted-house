export default function Home() {
  return (
    <div style={{padding:20, fontFamily:"system-ui", maxWidth:600, margin:"auto", textAlign:"center"}}>
      <h1>Drafted House</h1>
      <p>Real citizens veto real bills.</p>
      <div style={{margin:"30px 0", padding:20, border:"2px solid #000", borderRadius:10}}>
        <h2>H.R. 1234 – Test Bill</h2>
        <p>Spends $2 trillion. Hidden: $50M subsidy on page 842.</p>
        <div style={{marginTop:20}}>
          <button style={{margin:5, padding:"10px 20px", fontSize:18}}>YES</button>
          <button style={{margin:5, padding:"10px 20px", fontSize:18}}>NO</button>
          <button style={{margin:5, padding:"10px 20px", fontSize:18, background:"#c00", color:"white"}}>VETO</button>
        </div>
      </div>
      <p><a href="https://postegorepublic.com" target="_blank">Full amendment + white paper →</a></p>
      <p style={{marginTop:40, fontSize:12}}>Built by Jason Steed – System v3.1-F</p>
    </div>
  );
}
