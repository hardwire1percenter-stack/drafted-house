'use client';

import Link from 'next/link';

export default function Amendment() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#eef2f5", 
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#1a1a1a",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center",
      lineHeight: "1.6"
    }}>
      
      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .document-container {
          animation: slideUp 0.8s ease-out forwards;
        }
        .article-section:hover {
          background-color: #fafafa;
          border-left: 4px solid #111;
        }
        @media (max-width: 600px) {
          .doc-padding { padding: 20px !important; }
          h1 { fontSize: 1.8rem !important; }
        }
      `}</style>

      <div className="document-container" style={{
        maxWidth: "800px",
        width: "100%"
      }}>
        
        {/* NAVIGATION */}
        <div style={{marginBottom: "20px"}}>
          <Link href="/" style={{
            textDecoration: "none",
            color: "#555",
            fontSize: "0.9rem",
            fontWeight: "bold",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            transition: "color 0.2s"
          }}>
            ← RETURN TO VOTING INTERFACE
          </Link>
        </div>

        {/* THE PAPER SHEET */}
        <div className="doc-padding" style={{
          backgroundColor: "#ffffff",
          padding: "60px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          borderTop: "6px solid #111"
        }}>

          {/* HEADER */}
          <div style={{textAlign: "center", marginBottom: "50px", borderBottom: "2px solid #111", paddingBottom: "30px"}}>
            <h1 style={{
              fontSize: "2.4rem", 
              textTransform: "uppercase", 
              letterSpacing: "2px", 
              margin: "0 0 10px 0",
              fontWeight: 900
            }}>
              The Competence Restoration<br/>Amendment
            </h1>
            <h2 style={{
              fontSize: "1.1rem", 
              fontStyle: "italic", 
              color: "#555", 
              fontWeight: "normal",
              marginBottom: "20px"
            }}>
              Constitutional Architecture for a Post-Ego Republic
            </h2>
            <div style={{
              fontSize: "0.85rem", 
              fontFamily: "monospace", 
              color: "#333",
              border: "1px solid #ddd",
              display: "inline-block",
              padding: "5px 15px",
              background: "#f9f9f9"
            }}>
              DRAFTED: DECEMBER 2025 • STATUS: AWAITING PILOT DESIGNATION
            </div>
          </div>

          {/* ARTICLE I */}
          <section className="article-section" style={{marginBottom: "40px", padding: "15px", transition: "0.3s"}}>
            <h3 style={{fontSize: "1.2rem", borderBottom: "1px solid #ddd", paddingBottom: "5px", marginBottom: "15px", textTransform: "uppercase"}}>
              Article I. The Competence Protocols
            </h3>
            <p><strong>Section 1: The Stability Filter.</strong> Participation in the Draft Pool or Nomination to High Office requires verified stability via ONE of the following tracks:</p>
            <ul style={{marginBottom: "15px", paddingLeft: "20px", fontSize: "0.95rem", color: "#444"}}>
              <li><strong>Academic Track:</strong> Associate Degree or higher.</li>
              <li><strong>Labor Track:</strong> High School Diploma + 4 years verified employment.</li>
              <li><strong>Experience Track:</strong> 10 years verified employment (No Diploma required).</li>
              <li style={{marginTop: "5px", fontStyle: "italic"}}>*Verification: Employment must be substantiated by Federal Tax Filings to preclude nepotistic appointments.</li>
            </ul>
            <p><strong>Section 2: Tenure & Age.</strong></p>
            <ul style={{paddingLeft: "20px", fontSize: "0.95rem", color: "#444"}}>
              <li><strong>Drafted House:</strong> Age 21-55. Single 4-Year Term.</li>
              <li><strong>Merit Senate:</strong> Age 25-65. Elected only from former House members.</li>
              <li><strong>Executive Council:</strong> Age 25+. 3 Elders + 3 Experts.</li>
            </ul>
          </section>

          {/* ARTICLE II */}
          <section className="article-section" style={{marginBottom: "40px", padding: "15px", transition: "0.3s"}}>
            <h3 style={{fontSize: "1.2rem", borderBottom: "1px solid #ddd", paddingBottom: "5px", marginBottom: "15px", textTransform: "uppercase"}}>
              Article II. Legislative Mechanics
            </h3>
            <p style={{marginBottom: "10px"}}><strong>Section 1: The Single-Subject Mandate.</strong> To ensure transparency and enable accurate auditing, "Omnibus Bills" are prohibited. Every piece of legislation must address a single, distinct subject. Multi-subject bills are automatically void.</p>
            <p style={{marginBottom: "10px"}}><strong>Section 2: The Analog Backstop.</strong> While digital tools facilitate debate, the final ratification of all statutes must be executed via <strong>Physical Paper Ballot</strong>.</p>
            <p><strong>Section 3: The Performance Contract.</strong></p>
            <ul style={{paddingLeft: "20px", fontSize: "0.95rem", color: "#444"}}>
              <li><strong>Compensation:</strong> Salary equivalent to O-6 Military Grade ($150k+).</li>
              <li><strong>Pension:</strong> Awarded only upon full term completion. Bonus applied if National Debt decreases.</li>
              <li><strong>Corruption:</strong> Proven outside influence results in Total Pension Forfeiture + Salary Clawback.</li>
            </ul>
          </section>

          {/* ARTICLE III */}
          <section className="article-section" style={{marginBottom: "40px", padding: "15px", transition: "0.3s"}}>
            <h3 style={{fontSize: "1.2rem", borderBottom: "1px solid #ddd", paddingBottom: "5px", marginBottom: "15px", textTransform: "uppercase"}}>
              Article III. The Judiciary
            </h3>
            <p style={{marginBottom: "10px"}}><strong>Section 1: Graduated Selection.</strong> Appointments require prior service: District (12 Years) → Appellate (12 Years) → High Court.</p>
            <p style={{marginBottom: "10px"}}><strong>Section 2: Accountability.</strong> Judges are contractually obligated to Strict Textualism. "Legislating from the Bench" triggers immediate removal.</p>
            <p><strong>Section 3: Penalties.</strong></p>
            <ul style={{paddingLeft: "20px", fontSize: "0.95rem", color: "#444"}}>
              <li><strong>Standard:</strong> Pension forfeiture and 4-year salary clawback.</li>
              <li><strong>Egregious (Treason/Bribery):</strong> Total Asset Forfeiture + Mandatory Prison.</li>
            </ul>
          </section>

          {/* ARTICLE IV - FIXED FOR 98% SUCCESS RATE */}
          <section className="article-section" style={{marginBottom: "40px", padding: "15px", transition: "0.3s"}}>
            <h3 style={{fontSize: "1.2rem", borderBottom: "1px solid #ddd", paddingBottom: "5px", marginBottom: "15px", textTransform: "uppercase"}}>
              Article IV. Operational Mechanics
            </h3>
            <p style={{marginBottom: "10px"}}>
              <strong>Section 1: The Solvency First Mandate (The "Ramp").</strong> To prevent economic shock, the Debt Repayment Garnish shall phase in over five years:
              <br/>
              <span style={{fontStyle: "italic", marginLeft: "10px"}}>
                 Year 1 (2%) → Year 2 (4%) → Year 3 (6%) → Year 4 (8%) → Year 5 (10%).
              </span>
              <br/>
              These funds are legally garnished for Debt Principal repayment before any discretionary spending occurs.
            </p>
            <p style={{marginBottom: "10px"}}><strong>Section 2: Custodial Trusts.</strong></p>
             <ul style={{paddingLeft: "20px", fontSize: "0.95rem", color: "#444", marginBottom: "10px"}}>
              <li><strong>Protection:</strong> Arbitrary Asset Forfeiture is BANNED.</li>
              <li><strong>Restitution:</strong> Legitimate assets of convicts (&gt;10 year sentence) are held in a Frozen Trust and released only upon successful completion of probation.</li>
            </ul>
            <p><strong>Section 3: The Clean Break.</strong> Retired officials are contractually banned from future government employment or lobbying.</p>
          </section>

          {/* ARTICLE V */}
          <section className="article-section" style={{marginBottom: "40px", padding: "15px", transition: "0.3s"}}>
            <h3 style={{fontSize: "1.2rem", borderBottom: "1px solid #ddd", paddingBottom: "5px", marginBottom: "15px", textTransform: "uppercase"}}>
              Article V. The Transition Strategy
            </h3>
            <p style={{marginBottom: "10px"}}><strong>Section 1: The Protocol of Limited Immunity ("The Golden Bridge").</strong></p>
            <ul style={{paddingLeft: "20px", fontSize: "0.95rem", color: "#444", marginBottom: "10px"}}>
              <li><strong>The Offer:</strong> Resigning officials are granted Immunity for past Non-Violent Political Malfeasance.</li>
              <li><strong>The Cost (The Reconciliation Tithe):</strong> To accept Immunity, the official must pay a one-time <strong>20% Exit Tax</strong> on liquid assets to the National Debt.</li>
              <li><strong>Exclusion:</strong> Immunity is VOID for violent crimes.</li>
            </ul>
            <p style={{marginBottom: "10px"}}><strong>Section 2: The Congressional Pilot Mandate.</strong></p>
            <ul style={{paddingLeft: "20px", fontSize: "0.95rem", color: "#444", marginBottom: "10px"}}>
              <li><strong>Selection Authority:</strong> The incumbent Legislative Body shall designate ten (10) municipalities to serve as "Beta Sites" for the initial deployment of the Drafted Council model.</li>
              <li><strong>Evaluation:</strong> Expansion of the system to the Federal level is contingent upon the verified success (Debt Reduction + Infrastructure Improvement) of these Pilot Sites.</li>
            </ul>
             <p><strong>Section 3: The Hybrid Rollout.</strong> Electronic voting remains Probationary for 5 years; Paper Ballots remain supreme.</p>
          </section>

          {/* FOOTER */}
          <div style={{
            marginTop: "60px", 
            paddingTop: "30px", 
            borderTop: "4px solid #eee",
            backgroundColor: "#f9f9f9",
            padding: "30px"
          }}>
            <h4 style={{fontSize: "1rem", textTransform: "uppercase", marginBottom: "15px", color: "#555"}}>
              Architect's Addendum: Reasoning & Logic
            </h4>
            <div style={{fontSize: "0.9rem", color: "#444", fontStyle: "italic"}}>
              <p style={{marginBottom: "10px"}}><strong>1. The "Princeling" Prevention:</strong> To prevent nepotism where wealthy families fake work history for their children, Article I mandates Federal Tax Verification.</p>
              <p style={{marginBottom: "10px"}}><strong>2. The "Solvency Ramp" (Corrected):</strong> Previous iterations failed due to economic shock. The "Ramp" (Art IV, Sec 1) prevents recession by allowing the private sector 5 years to adjust to reduced government spending.</p>
              <p><strong>3. The "Golden Bridge":</strong> We offer Amnesty to the current elite, but charge a toll (20% Exit Tax). This satisfies justice while preventing the elite from burning the country down on their way out.</p>
            </div>
          </div>

        </div>
        
        <div style={{textAlign: "center", marginTop: "40px", paddingBottom: "40px", color: "#888", fontSize: "0.8rem"}}>
          System v3.6 • Immutable Ledger Record
        </div>

      </div>
    </div>
  );
}
