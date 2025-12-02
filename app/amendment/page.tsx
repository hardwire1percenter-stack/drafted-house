'use client';

export default function Amendment() {
  return (
    // Added backgroundColor and color to force light theme contrast
    <div style={{padding:40, fontFamily:"system-ui", maxWidth:900, margin:"auto", lineHeight:1.8, backgroundColor: "#ffffff", color: "#333333", minHeight:"100vh"}}>
      <h1 style={{textAlign:"center", fontSize:38}}>System v3.1-F</h1>
      <h2 style={{textAlign:"center", color:"#c00"}}>The Post-Ego Republic</h2>
      <p style={{textAlign:"center", fontSize:18, marginBottom:50}}>
        Primary Architect: Jason Steed — December 2025
      </p>

      <pre style={{background:"#f4f4f4", padding:30, borderRadius:12, overflowX:"auto", whiteSpace:"pre-wrap", fontSize:15, border:"1px solid #ddd", color:"#333"}}>
{`# System v3.1-F: Constitutional Architecture
## "Competence Over Charisma"

### I. The Drafted House (Legislative)
* **Selection:** Members are not elected; they are drafted by lottery from the citizenry, serving a single term (similar to jury duty).
* **Mandate:** Removes campaign finance, lobbying, and reelection incentives from the legislative process.
* **Function:** Proposes and debates legislation based on real-world needs, not donor requests.

### II. The Judiciary (Appointment & Tenure)
The Judicial Branch retains the structural hierarchy of the legacy system but undergoes a radical change in selection to ensure non-partisan interpretation of the law.

1.  **Nomination:** The Administrative Council nominates a slate of potential appointees.
2.  **The AI / Red Council Vetting:**
    * All nominees are vetted by the Red Council (AI oversight) strictly for constitutional qualifications, case history, and legal competency.
    * Partisan leanings are flagged and neutralized.
3.  **The System Vote:**
    * The vetted list is submitted to the "System."
    * Nominees are assigned a preference number based on objective metrics.
    * The System tallies the numbers to select the most qualified jurist.
4.  **Tie-Breakers:** In the rare event of a metric tie, the Senate casts the deciding vote.

### III. Operational Mechanics
To prevent corruption and stagnation, the human element is managed through strict resource controls:

* **The Pension System:** Service guarantees a life pension, removing the need for post-office "consulting" gigs or lobbying jobs.
* **Term Limits:** Absolute limits are enforced on all appointed and drafted positions. No career politicians.
* **Graduated Capability:** Access to higher levels of governance is gated by a "Graduated System of Higher Capability." One must prove competency at lower municipal levels before being eligible for nominations to higher state or federal duties.

### IV. The 4th Branch: The Citizen Veto
* **Direct Check:** Every citizen holds a digital key.
* **Power:** While citizens do not write every law, they retain the absolute power to VETO any act of the Drafted House via the app.
* **Threshold:** If a bill hits a Veto threshold (e.g., 60%), it is immediately nullified.

### V. The Cultural Engine (The "F" Patch)
A perfect system fails if the culture rots. To prevent stagnation and the worship of celebrity, v3.1-F implements "Cultural Software" reforms:

1.  **The Builder's Metric:**
    * Social influence is no longer decoupled from utility.
    * Algorithm weight in public discourse is tied to the **Graduated Capability** scale.
    * Citizens who build, fix, and maintain the republic (Tier 2+) are amplified. Performative outrage (Tier 0) is deprecated.

2.  **The Horizon Mandate:**
    * To prevent the stasis that destroys stable civilizations, the Republic is constitutionally mandated to pursue a **Grand Challenge** every 20 years.
    * 15% of national resources are directed toward a singular Frontier Goal (e.g., Fusion Energy, Atmospheric Repair, Off-World Expansion).
    * Humanity must always have a frontier to conquer, or it will turn on itself.

### VI. The Transition Strategy: "The Viral Host"
Revolution is obsolete. System v3.1 does not conquer the old system; it out-performs it until the old system becomes irrelevant.

1.  **Phase 1: Incubation (The Rust Belt Protocol):**
    * We deploy the "Shadow System" in failing municipalities (e.g., rust belt towns) where trust in local government is <20%.
    * The App runs in parallel to the City Council. It tracks the same issues, offers better solutions, and visualizes the budget transparently.
2.  **Phase 2: The Competence Gap:**
    * Citizens will see the "Shadow Vote" solving problems faster than the "Official Vote."
    * Legitimacy migrates from the City Hall to the Phone. The official government is not overthrown; it is simply ignored.
3.  **Phase 3: The Host Integration:**
    * To survive, the legacy government will be forced to adopt the v3.1 operating system to regain engagement.
    * Once adopted, the "Viral Host" rewriting begins: Term limits, Veto power, and AI auditing are installed as updates.
    * The transition is bloodless, voluntary, and inevitable.

---
**Appendix C – 120-year simulation results:**
* **Survival Rate:** 94% (up from 91%)
* **Stagnation Index:** Dropped to 12% (The Horizon Mandate kept innovation high).
* **Cultural Output:** Shifted from "Entertainment-Dominant" to "Achievement-Dominant."`}
      </pre>

      <p style={{textAlign:"center", marginTop:50}}>
        <a href="/" style={{fontSize:20, color:"#0066cc", textDecoration: "none", borderBottom:"1px solid #0066cc"}}>← Back to voting interface</a>
      </p>
    </div>
  );
}
