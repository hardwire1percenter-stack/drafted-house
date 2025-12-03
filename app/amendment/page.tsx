'use client';

export default function Amendment() {
  return (
    <div style={{padding:60, fontFamily:"Georgia, serif", maxWidth:900, margin:"auto", lineHeight:1.6, backgroundColor: "#ffffff", color: "#111111", minHeight:"100vh"}}>
      
      {/* HEADER */}
      <div style={{borderBottom:"4px solid #111", paddingBottom:20, marginBottom:40, textAlign:"center"}}>
        <h1 style={{fontSize:42, textTransform:"uppercase", letterSpacing:2, marginBottom:10}}>System v3.4</h1>
        <h2 style={{fontSize:18, fontStyle:"italic", color:"#444"}}>The "Optimized" Post-Ego Constitution</h2>
        <p style={{fontSize:14, marginTop:10}}>Drafted: December 2025 • Status: FINAL</p>
      </div>

      {/* DOCUMENT BODY */}
      <div style={{fontSize:16}}>
        
        {/* ARTICLE I */}
        <div style={{marginBottom:40}}>
          <h3 style={{textTransform:"uppercase", borderBottom:"1px solid #ccc", paddingBottom:5}}>Article I. The Eligibility Protocols</h3>
          <p><strong>Section 1: The Stability Filter.</strong> Entry into the Draft Pool requires verified stability via ONE of the following tracks:</p>
          <ul style={{listStyleType:"circle", paddingLeft:20}}>
            <li><strong>Academic Track:</strong> Associate Degree or higher.</li>
            <li><strong>Labor Track:</strong> High School Diploma + 4 years verified employment.</li>
            <li><strong>Experience Track:</strong> 10 years verified employment (No Diploma).</li>
            <li><em>*Verification:</em> Employment must be substantiated by Federal Tax Filings to preclude nepotistic appointments.</li>
          </ul>
        </div>

        {/* ARTICLE II */}
        <div style={{marginBottom:40}}>
          <h3 style={{textTransform:"uppercase", borderBottom:"1px solid #ccc", paddingBottom:5}}>Article II. The Drafted House</h3>
          <p><strong>Section 1: The Single-Subject Mandate.</strong> To ensure competency, "Omnibus Bills" are prohibited. Every piece of legislation must address a single, distinct subject. Multi-subject bills are automatically void.</p>
          <p><strong>Section 2: The Analog Backstop.</strong> Final ratification of all statutes must be executed via <strong>Physical Paper Ballot</strong>.</p>
          <p><strong>Section 3: The Performance Contract.</strong></p>
          <ul style={{listStyleType:"circle", paddingLeft:20}}>
            <li><strong>Compensation:</strong> Salary equivalent to O-6 Military Grade ($150k+).</li>
            <li><strong>Pension:</strong> Awarded only upon full term completion. Bonus applied if National Debt decreases.</li>
            <li><strong>Corruption:</strong> Proven outside influence results in Total Pension Forfeiture + Salary Clawback.</li>
          </ul>
        </div>

        {/* ARTICLE III */}
        <div style={{marginBottom:40}}>
          <h3 style={{textTransform:"uppercase", borderBottom:"1px solid #ccc", paddingBottom:5}}>Article III. The Judiciary</h3>
          <p><strong>Section 1: Graduated Selection.</strong> Appointments require prior service: District (12 Years) → Appellate (12 Years) → High Court.</p>
          <p><strong>Section 2: Accountability.</strong> Judges are contractually obligated to Strict Textualism. "Legislating from the Bench" triggers immediate removal.</p>
          <p><strong>Section 3: Penalties.</strong></p>
          <ul style={{listStyleType:"circle", paddingLeft:20}}>
            <li><strong>Standard:</strong> Pension forfeiture and 4-year salary clawback.</li>
            <li><strong>Egregious (Treason/Bribery):</strong> Total Asset Forfeiture + Mandatory Prison.</li>
          </ul>
        </div>

        {/* ARTICLE IV */}
        <div style={{marginBottom:40}}>
          <h3 style={{textTransform:"uppercase", borderBottom:"1px solid #ccc", paddingBottom:5}}>Article IV. Operational Mechanics</h3>
          <p><strong>Section 1: The Solvency First Mandate.</strong> The first 10% of Federal Revenue is legally garnished for Debt Principal repayment before any spending occurs.</p>
          <p><strong>Section 2: Custodial Trusts.</strong></p>
          <ul style={{listStyleType:"circle", paddingLeft:20}}>
            <li><strong>Protection:</strong> Arbitrary Asset Forfeiture is BANNED.</li>
            <li><strong>Restitution:</strong> Legitimate assets of convicts (>15 year sentence) are held in a Frozen Trust and released only upon successful completion of probation.</li>
          </ul>
        </div>

        {/* ARTICLE V */}
        <div style={{marginBottom:40}}>
          <h3 style={{textTransform:"uppercase", borderBottom:"1px solid #ccc", paddingBottom:5}}>Article V. The Transition Strategy</h3>
          <p><strong>Section 1: The Protocol of Limited Immunity ("The Golden Bridge").</strong></p>
          <ul style={{listStyleType:"circle", paddingLeft:20}}>
            <li><strong>The Offer:</strong> Resigning officials are granted Immunity for past Non-Violent Political Malfeasance.</li>
            <li><strong>The Cost (The Reconciliation Tithe):</strong> To accept Immunity, the official must pay a one-time <strong>20% Exit Tax</strong> on liquid assets to the National Debt.</li>
            <li><strong>Exclusion:</strong> Immunity is VOID for violent crimes.</li>
          </ul>
          <p><strong>Section 2: The Hybrid Rollout.</strong> Electronic voting remains Probationary for 5 years; Paper Ballots remain supreme.</p>
        </div>
      </div>

      {/* ARCHITECT'S ADDENDUM */}
      <div style={{marginTop:80, paddingTop:40, borderTop:"4px solid #111", background:"#f9f9f9", padding:30}}>
        <h3 style={{marginTop:0}}>Architect's Addendum: Simulation V3.4</h3>
        <p><strong>1. The "Princeling" Patch:</strong><br/>
        Simulations showed wealthy families using shell companies to fake "work history" for their children. The <em>Tax Verification Requirement</em> in Article I closes this loophole.</p>
        
        <p><strong>2. The "Single-Subject" Speed Fix:</strong><br/>
        Simulations showed that drafted citizens froze when faced with 2,000-page bills. The <em>Single-Subject Mandate</em> (Article II) ensures laws are short, readable, and vote-able.</p>

        <p><strong>3. The "Reconciliation" Balance:</strong><br/>
        Giving free amnesty caused public unrest (12% rebellion risk). Adding the <em>20% Exit Tax</em> (Article V) satisfied the public desire for justice while keeping the "Golden Bridge" open for the elites. Rebellion risk dropped to near zero.</p>
      </div>

      <p style={{textAlign:"center", marginTop:60}}>
        <a href="/" style={{fontSize:18, color:"#000", textDecoration: "underline"}}>← Return to Drafted House Interface</a>
      </p>
    </div>
  );
}
