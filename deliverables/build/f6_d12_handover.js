// F6-D12 (part 2): Handover meeting documentation. Illustrated version: meeting details, agenda, participants
// and the pre-meeting checklist are drawn as figures; the forms used in the meeting (handover checklist,
// sign-off, minutes and action log) stay as fillable tables.
// Usage: node deliverables/build/f6_d12_handover.js out.docx
const path = require("path");
const { makeKit, buildDoc } = require("./doc_lib");
const { esc, chip, page, makeFigures } = require("./fig_lib");
const K = makeKit();
const { P, H1, H2, B, N, table, SRC, field, pageBreak } = K;
const blank = (n, cols) => Array.from({ length: n }, () => Array(cols).fill(""));
const { render, figure } = makeFigures(path.join(__dirname, "f6d12h_figs"));

// ---------------------------------------------------------------- content (unchanged from the table version)
const details = {
  purpose: "Hand over the Output 1.2 deliverables, open items, partnership leads and documents; agree owners and an action log; sign off the handover",
  date: "[To be confirmed] · in person, with an online link for partners who cannot attend",
  duration: "About two and a half hours",
  chair: "GIZ Output 1.2 lead",
  presenter: "Consultant (MNZ Consult)",
  prereads: ["F6-D12 Part 1 Readiness Pack", "F6-D11 take-away summary pack and decision sheets", "RTFF indicators", "Output 1.2 Decision Gates"],
  outputs: ["Signed handover checklist", "minutes", "agreed action log", "documents transferred to the GIZ project folder"],
};
// [start, end, item, lead, reference]
const agenda = [
  ["0:00", "0:10", "1. Welcome, purpose and agreement of the agenda", "GIZ", ""],
  ["0:10", "0:25", "2. Status of deliverables F1-D4 to F6-D12, change logs and validation (diagnostics, F6-D9, second roundtable)", "Consultant", "Readiness Pack §1, §6"],
  ["0:25", "0:55", "3. Readiness by component: 1.2.1, 1.2.2, 1.2.3, RTFF, M&E, governance, partnerships", "Consultant", "Readiness Pack §1"],
  ["0:55", "1:10", "4. The five decisions pending at the Oversight Committee; what is already decided (Chobe–Maun corridor) and what sits outside the assignment (extension)", "GIZ", "F6-D11; Readiness Pack §2"],
  ["1:10", "1:20", "Break", "", ""],
  ["1:20", "1:50", "5. RTFF: minimum entry criteria and screening; pipeline split (funding only vs capacity building plus funding); key indicators for the project and the RTFF (outputs vs impact, youth and gender lens)", "GIZ with TUI Care Foundation and SIGMA", "RTFF indicators; Readiness Pack §2, §6"],
  ["1:50", "2:05", "6. Partners handed to GIZ: state BSOs, tourism authorities and district councils; strategic partners (KAZA Conservation Trust Fund, funders active in KAZA); SADC-DFRC, OKACOM, ITC", "Consultant", "Readiness Pack §3"],
  ["2:05", "2:15", "7. Document register, templates to develop and file transfer", "Consultant", "Readiness Pack §6"],
  ["2:15", "2:30", "8. First 100-day actions, outstanding risks, roles after handover, action log and sign-off", "GIZ", "Readiness Pack §4–6; Sections 5–7 below"],
];
// [group, organisation, role, name]
const participants = [
  ["Receives the handover", "GIZ KAZA R-NBT", "Chair; Output 1.2 lead; receives the handover", ""],
  ["Receives the handover", "GIZ KAZA R-NBT", "Project management and contracts", ""],
  ["Receives the handover", "GIZ KAZA R-NBT", "M&E", ""],
  ["Receives the handover", "GIZ (regional partnerships)", "Receives partnership leads (SADC-DFRC and others)", ""],
  ["Receives the handover", "Output 1.2 implementing officers", "Receive the 100-day actions and templates", ""],
  ["Hands over", "MNZ Consult", "Consultant; presents and hands over", "Modesta Nyirenda"],
  ["Regional partners", "KAZA Secretariat", "Receives the regional layer and the RTFF future arrangements", ""],
  ["Regional partners", "SADC Secretariat (FANR)", "Policy link to the SADC TFCA programme; regional replication", ""],
  ["Programme partners", "SIGMA International", "Diagnostics and inception phase; pipeline and indicators", ""],
  ["Programme partners", "TUI Care Foundation", "RTFF administrator (agenda item 5)", ""],
];
// [task, owner]
const prep = [
  ["Confirm date, venue and online link; send invitations with pre-reads", "GIZ"],
  ["Confirm KAZA Secretariat and SADC Secretariat attendance, and TUI Care Foundation and SIGMA participation for agenda item 5", "GIZ"],
  ["Prepare the GIZ project folder and access rights for the file transfer", "GIZ"],
  ["Bring all documents in the register to final file names and versions", "Consultant"],
  ["Update the readiness ratings if any decision or partner response has arrived", "Consultant"],
  ["Print the handover checklist (Section 5) for signature", "GIZ"],
];

// ---------------------------------------------------------------- figures
const EXTRA = `.tile{border:1.4px solid #DDE3DA;border-radius:6px;padding:8px 10px}
.lab{font-size:12.5px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#5a6660}
.val{font-size:15px;font-weight:700;color:#1F3B2C;margin-top:3px;line-height:1.25}
.doc{display:flex;gap:8px;align-items:flex-start;font-size:14px;line-height:1.25;margin:5px 0}
.ic{flex:none;width:18px;height:22px;border:1.6px solid #3D5A44;border-radius:2px 7px 2px 2px;background:#F3F8F1}
.tick{flex:none;width:18px;height:18px;border-radius:50%;background:#3D7A4F;color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center}
.box{flex:none;width:22px;height:22px;border:2px solid #3D5A44;border-radius:3px;background:#fff}
.line{border-bottom:1.3px solid #9AA79E;height:20px;margin-top:4px}`;
const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

const figMeeting = page(`
<div style="background:#1F3B2C;color:#fff;border-radius:6px;padding:10px 14px"><div class="lab" style="color:#BFD6C3">Purpose</div><div style="font-size:16px;font-weight:700;line-height:1.3;margin-top:3px">${esc(details.purpose)}</div></div>
<div class="grid" style="grid-template-columns:2fr 1fr 1fr 1fr;margin-top:8px">
${[["Date and venue", details.date], ["Duration", details.duration], ["Chair", details.chair], ["Presenter", details.presenter]].map(([l, v]) => `<div class="tile"><div class="lab">${esc(l)}</div><div class="val">${esc(v)}</div></div>`).join("")}</div>
<div class="grid" style="grid-template-columns:1fr 1fr;margin-top:8px">
<div class="tile" style="background:#F7F9F6"><div class="lab">Pre-reads</div>${details.prereads.map((d) => `<div class="doc"><span class="ic"></span><span>${esc(d)}</span></div>`).join("")}</div>
<div class="tile" style="background:#FDF7E9;border-color:#F3E3BF"><div class="lab">Outputs</div>${details.outputs.map((d) => `<div class="doc"><span class="tick">✓</span><span>${esc(d.charAt(0).toUpperCase() + d.slice(1))}</span></div>`).join("")}</div></div>`, EXTRA);

const PX = 2.1; // pixels per minute for the duration bar
const figAgenda = page(`<div style="display:grid;grid-template-columns:92px 1fr;gap:0 12px">
${agenda.map(([a, b, item, lead, ref]) => {
  const mins = toMin(b) - toMin(a), brk = item === "Break";
  const m = /^(\d)\. (.*)$/.exec(item);
  return `<div style="text-align:right;padding-top:6px"><div style="font-size:15px;font-weight:700;color:#1F3B2C">${a}</div><div class="small muted">${mins} min</div></div>
<div style="display:flex;gap:10px;margin-bottom:6px;align-items:stretch">
<div style="flex:none;width:10px;border-radius:5px;background:${brk ? "#D6DBD4" : "#C98A2B"};min-height:${Math.max(30, mins * PX)}px"></div>
${brk ? `<div class="small muted" style="align-self:center;font-style:italic">Break</div>` : `<div class="card" style="flex:1;display:flex;gap:10px;align-items:flex-start"><span class="num" style="background:#3D5A44">${m[1]}</span><div style="flex:1"><div class="r" style="margin-top:1px">${esc(m[2])}</div><div style="margin-top:5px">${chip(lead, "fill")}${ref ? ` <span class="small muted">${esc(ref)}</span>` : ""}</div></div></div>`}
</div>`; }).join("")}
<div style="text-align:right"><div style="font-size:15px;font-weight:700;color:#1F3B2C">2:30</div></div><div class="small muted" style="padding-top:3px">Close</div></div>`, EXTRA);

const groups = ["Receives the handover", "Hands over", "Regional partners", "Programme partners"];
const gcol = { "Receives the handover": "#1F3B2C", "Hands over": "#C98A2B", "Regional partners": "#B8563E", "Programme partners": "#3D5A44" };
const pCard = ([, org, role, name]) => `<div class="card"><div class="t">${esc(org)}</div><div class="r">${esc(role)}</div>
<div style="display:flex;gap:8px;margin-top:6px;align-items:flex-end"><div style="flex:1"><div class="lab" style="font-size:11px">Name</div>${name ? `<div style="font-size:14px;font-weight:700;margin-top:2px">${esc(name)}</div>` : `<div class="line"></div>`}</div>
<div style="flex:none;font-size:11.5px;color:#5a6660;display:flex;gap:6px">${["In person", "Online", "Apologies"].map((x) => `<span style="display:flex;align-items:center;gap:3px"><span class="box" style="width:13px;height:13px;border-width:1.5px"></span>${x}</span>`).join("")}</div></div></div>`;
const figParticipants = page(`<div class="grid" style="grid-template-columns:1fr 1fr;gap:10px">
<div><div class="band" style="background:${gcol[groups[0]]}">${groups[0]}</div><div class="grid">${participants.filter((p) => p[0] === groups[0]).map(pCard).join("")}</div></div>
<div>${groups.slice(1).map((g) => `<div class="band" style="background:${gcol[g]}">${g}</div><div class="grid">${participants.filter((p) => p[0] === g).map(pCard).join("")}</div>`).join("")}</div></div>`, EXTRA);

const figPrep = page(`<div class="grid" style="grid-template-columns:1fr 1fr;gap:8px">
${prep.map(([t, o], i) => `<div class="card" style="display:flex;gap:10px;align-items:flex-start"><span class="box"></span><div style="flex:1"><div class="r" style="margin-top:0"><b style="color:#B8563E">${i + 1}.</b> ${esc(t)}</div><div style="margin-top:5px">${chip(o, o === "GIZ" ? "fill" : "")}</div></div></div>`).join("")}</div>`, EXTRA);

const FIGS = { meeting: figMeeting, agenda: figAgenda, participants: figParticipants, prep: figPrep };

async function main() {
  await render(FIGS);
  const children = [
  H1("1. About the handover meeting"),
  P("The handover meeting transfers the Output 1.2 work on financial mechanisms for R-NBT MSMEs from the consultant to GIZ, the KAZA Secretariat, the SADC Secretariat and the officers responsible for implementing Output 1.2, as the terms of reference require. It walks through the readiness pack (F6-D12 Part 1), confirms who owns each open item, transfers the documents and closes with a signed handover record. Because the consultancy closes on 30 November 2026 while validation and decisions are still pending, the meeting and any follow-up draw on hours committed under the contract."),
  ...figure("meeting", "Meeting details"),

  H1("2. Agenda"),
  P("The agenda combines the handover with the joint TUI Care Foundation, GIZ and SIGMA discussion on RTFF selection criteria, pipeline and indicators, which the close-out discussion identified as the most urgent open item. If that discussion is held separately, item 5 becomes a short status report. In Figure 2 the length of each bar shows the time given to each item."),
  ...figure("agenda", "Agenda"),

  H1("3. Participants"),
  P("Figure 3 shows the proposed participants by organisation and role. Names and attendance are completed when invitations are confirmed."),
  ...figure("participants", "Participant list"),

  H1("4. Before the meeting"),
  P("Figure 4 lists the tasks to complete before the meeting, with the owner of each; tick each box when done."),
  ...figure("prep", "Pre-meeting checklist"),

  pageBreak(),
  H1("5. Handover checklist and sign-off"),
  P("Each item is confirmed in the meeting. ‘Received by’ is the person who takes ownership; comments record any condition or follow-up."),
  ...table("Handover checklist", ["#", "Item handed over", "Handed over (Y/N)", "Received by", "Comments"], [500, 4200, 1100, 1700, 2246], [
    { band: "Deliverables" },
    ["1", "F1-D4 to F5-D8 finance deliverables (latest versions) and roundtable finance segment reports", "", "", ""],
    ["2", "F6-D9 Consolidated Synthesis Report (Word and PDF), change logs and figure files", "", "", ""],
    ["3", "F6-D10 validation deck and plenary facilitation guide", "", "", ""],
    ["4", "F6-D11 Oversight Committee deck, summary pack with decision sheets, take-away summary pack and deck change log", "", "", ""],
    ["5", "F6-D12 readiness pack and this handover documentation", "", "", ""],
    { band: "Supporting documents and data" },
    ["6", "GM1-D5 indicator extract; RTFF pilot and handover indicators; decision-gate criteria", "", "", ""],
    ["7", "KAZA–OKACOM synergy note (with RTFF section) and ITC convergence note", "", "", ""],
    ["8", "Consultation records and contact list of institutions consulted (shared under GIZ data rules)", "", "", ""],
    ["9", "Survey and roundtable data used in the reports, where held by the consultant", "", "", ""],
    { band: "Open items and leads" },
    ["10", "First 100-day actions with owners agreed (Readiness Pack Figure 6)", "", "", ""],
    ["11", "Key decisions and open questions (Readiness Pack Figure 3) and outstanding risks (Figure 7) with owners agreed", "", "", ""],
    ["12", "Partners and leads: state BSOs, tourism authorities and district councils; KAZA Conservation Trust Fund and funders active in KAZA; SADC-DFRC, OKACOM, TUI Care Foundation, ITC, KAZA Secretariat, SIGMA", "", "", ""],
    ["13", "Template outlines: supply MOU, RTFF referral protocol, grant manual, readiness diagnostic", "", "", ""],
    ["14", "Action log agreed (Section 7)", "", "", ""],
  ], { h: 420 }),
  pageBreak(),
  H2("Sign-off"),
  P("By signing, the parties confirm that the items above have been handed over and received as recorded, and that open items have owners in the action log."),
  ...table(null, ["", "Handed over by (consultant)", "Received by (GIZ)"], [1800, 3973, 3973], [
    ["Name", "Modesta Nyirenda, MNZ Consult", ""],
    ["Signature", "", ""],
    ["Date", "", ""],
  ], { h: 560 }),

  H1("6. Minutes template"),
  ...table(null, ["Meeting", "Output 1.2 handover meeting"], [2200, 7546], [
    ["Date, time and venue", ""],
    ["Chair", ""],
    ["Present", ""],
    ["Apologies", ""],
    ["Minutes taken by", ""],
  ], { h: 420, plainFirst: false }),
  ...table("Minutes by agenda item", ["Item", "Discussion (key points)", "Decisions or agreements", "Actions (see log)"], [1900, 3846, 2200, 1800], [
    ["1. Welcome and agenda", "", "", ""],
    ["2. Status of deliverables", "", "", ""],
    ["3. Readiness by component", "", "", ""],
    ["4. Decisions pending", "", "", ""],
    ["5. RTFF criteria, pipeline and indicators", "", "", ""],
    ["6. Partners and leads", "", "", ""],
    ["7. Documents and templates", "", "", ""],
    ["8. Roles, action log and sign-off", "", "", ""],
  ], { h: 680 }),
  field("Next meeting or follow-up call:", 40),
  field("Minutes approved by (name, date):", 36),

  H1("7. Action log", { newPage: true }),
  P("The log is pre-filled with the actions known at close-out (November 2026). Owners and dates are proposals to be confirmed in the meeting; rows are added for new actions."),
  ...table("Action log", ["No.", "Action", "Owner", "Due", "Status", "Notes"], [500, 3946, 1500, 1100, 1000, 1700], [
    ["1", "Hold the TUI Care Foundation, GIZ and SIGMA meeting on selection criteria and screening, pipeline split and key indicators", "GIZ", "Dec 2026", "Open", "Invitation sent before contract close"],
    ["2", "Agree ownership of the key indicators as one shared live document (project and RTFF; outputs vs impact; youth, gender and environment)", "GIZ / SIGMA", "Dec 2026", "Open", ""],
    ["3", "Incorporate KAZA Secretariat feedback into F1-D4 Financial Landscape Analysis", "Consultant", "On receipt", "Open", "Feedback awaited"],
    ["4", "Incorporate GIZ feedback into F4-D7, presenting the RTFF as one option among several", "Consultant", "Dec 2026", "Open", "Reflected in F6-D9 to F6-D11"],
    ["5", "Follow up SADC-DFRC for its official position; then take GIZ a concrete proposal", "Consultant, then GIZ", "Dec 2026", "Open", ""],
    ["6", "Discuss OKACOM overlap with the GIZ Transboundary Water Management project; short call with the consultant", "GIZ", "Jan 2027", "Open", "Synergy note provided"],
    ["7", "Confirm ITC coverage of Maun and agree a division of labour; share criteria and beneficiary lists", "GIZ", "Jan 2027", "Open", ""],
    ["8", "Confirm the lead state BSO and grant manager per area (SMEDCO with ZIDA, ZDA and CEEC, LEA with CEDA, NIPDB, INAPEM); explore training of trainers", "GIZ", "Q1 2027", "Open", ""],
    ["9", "Share the capacity gaps (records, compliance, management) with SIGMA as part of the access-to-finance barrier", "Consultant", "Nov 2026", "Open", "Record of input"],
    ["10", "Hold the second roundtable validation session (F6-D10) and revise F6-D9 with a change log", "GIZ; consultant", "Per roundtable", "Open", ""],
    ["11", "Table the five decisions at the Oversight Committee (F6-D11); complete the take-away with the outcomes and circulate it", "GIZ", "Next sitting", "Open", ""],
    ["12", "Commission the readiness diagnostic, supply MOU template, intake baseline and grant manual", "GIZ / SIGMA", "Feb–Mar 2027", "Open", ""],
    ["13", "Schedule the first platform sessions in PA1 and PA2 for the 2026–27 low season", "Lead BSOs; GIZ", "Feb 2027", "Open", ""],
    ["14", "Transfer all files to the GIZ project folder", "Consultant", "At meeting", "Open", ""],
    ["15", "Invite tourism authorities (ZTA, BTO) and district councils (for example the Chobe District Council) to the platforms; discuss simpler licensing for micro operators", "GIZ; lead BSOs", "Feb 2027", "Open", ""],
    ["16", "Co-learning letter of intent between the RTFF pilot and the KAZA Conservation Trust Fund design, with the TUI Care Foundation", "GIZ; KAZA Secretariat", "Q1 2027", "Open", ""],
    ["17", "Confirm who decided the Chobe–Maun corridor and when, and add it to F6-D9 Section 2.6", "GIZ; consultant", "Dec 2026", "Open", ""],
    ["18", "Carry the final deck changes into the F6-D11 summary pack (executive summary, measurement, budget and consultation rows, acronyms) and the F6-D10 guide", "Consultant", "Dec 2026", "Done", "Completed 27 Nov 2026"],
    ...blank(3, 6),
  ], { h: 360 }),
  SRC("Status: Open, In progress, Done, Dropped (with reason)."),
  ];

  await buildDoc({
  out: process.argv[2],
  header: "KAZA R-NBT Output 1.2 · F6-D12 Handover Meeting Documentation",
  cover: {
    title: "Output 1.2 Handover Meeting",
    subtitle: "Agenda, Participants, Handover Checklist and Sign-off, Minutes Template and Action Log",
    code: "F6-D12: Readiness Pack and Handover Meeting Documentation (Part 2)",
    codeLine: "Read with Part 1, the Output 1.2 Readiness Pack",
    dateLine: "November 2026 · Meeting date to be confirmed",
    status: "FOR THE HANDOVER MEETING",
  },
  children,
  toc: false,
});
}
main().catch((e) => { console.error(e); process.exit(1); });
