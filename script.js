/* ============================================================
   CASE FILE COMPANION — script.js
   All data, navigation, grading, hints, and UI logic
   ============================================================ */

'use strict';

/* ============================================================
   CASE DATABASE
   ============================================================ */
const CASES = [
  {
    id: 1,
    number: 'CASE #01',
    title: 'THE MIDNIGHT CALL',
    location: '89.7 FM Studio, Austin TX',
    date: 'Nov 12, 2018',
    type: 'Homicide',
    difficulty: 'hard',
    solved: false,
    blurb: 'A radio host is found dead in his studio after receiving a mysterious late-night call. Nothing was stolen. Nothing makes sense.',
    story: 'Radio host Evan Moore was found dead in his studio at 1:17 AM. The last call he received came from an unknown number registered to a prepaid burner. Detectives found no signs of forced entry and no items missing. Multiple people had motive. Only one had the opportunity. Security footage shows someone entering the parking lot at 12:41 AM, 36 minutes before the estimated time of death. The studio door keypad log shows two badge swipes that night.',
    answer: 'Carla Reyes',
    answerMotive: 'Blackmail. Evan had secretly recorded Carla during a past affair and threatened to release the audio unless she paid him.',
    keywords: ['blackmail', 'recording', 'affair', 'keypad', 'carla'],
    evidence: [
      { id: 'E01', icon: '📱', name: 'Voicemail (00:47)', desc: 'Strange voice message left before the call. Digitally altered.' },
      { id: 'E02', icon: '📝', name: 'Handwritten Note', desc: "Found in victim's notebook. Says 'She knows. Pay or play.'" },
      { id: 'E03', icon: '☕', name: 'Coffee Mug', desc: 'Fingerprints found on the handle. Not matching victim.' },
      { id: 'E04', icon: '📷', name: 'Security Footage', desc: 'Shows someone entering at 12:41 AM wearing a red coat.' },
      { id: 'E05', icon: '🔑', name: 'Keypad Log', desc: 'Two badge swipes — one at 10 PM (victim) and one at 12:39 AM (unknown).' },
      { id: 'E06', icon: '💿', name: 'USB Drive', desc: 'Hidden under desk. Contains audio files labelled with initials C.R.' },
    ],
    suspects: [
      { name: 'Carla Reyes', role: 'Former Guest', emoji: '👩', bio: 'A local politician who appeared on the show 3 months ago. Charming and calculated.', motive: 'Believed Evan had compromising recordings of her. Had studio access via a borrowed keypad badge.' },
      { name: 'Dennis Park', role: 'Producer', emoji: '👨', bio: "Evan's longtime producer. Recently fired. Was seen arguing with Evan the day before.", motive: 'Bitter about being replaced. But was confirmed at a bar until 2 AM.' },
      { name: 'Tina Wolfe', role: 'Night Engineer', emoji: '👩‍💻', bio: 'On shift until midnight. Last to see Evan alive, officially.', motive: 'Owed Evan a large personal loan she could not repay. Alibi partially corroborated.' },
      { name: 'Ray Holt', role: 'Station Owner', emoji: '🧔', bio: 'Owns the building and has master access to all systems.', motive: 'Evan threatened to go public with station fraud. But was out of town — hotel receipt confirms it.' },
      { name: 'Unknown Caller', role: 'Unidentified', emoji: '❓', bio: 'The person behind the burner number. Identity never confirmed.', motive: 'Unknown.' },
    ],
    timeline: [
      { time: '10:00 PM', event: 'Evan enters studio', detail: 'Badge swipe confirmed.', key: false },
      { time: '11:30 PM', event: 'Tina Wolfe clocks out', detail: 'Last confirmed contact with Evan.', key: false },
      { time: '12:39 AM', event: 'Second badge swipe detected', detail: 'Carla\'s borrowed badge used.', key: true },
      { time: '12:41 AM', event: 'Red coat figure seen on CCTV', detail: 'Entering parking lot.', key: true },
      { time: '1:17 AM', event: 'Body discovered', detail: 'Station cleaning staff find Evan.', key: false },
      { time: '1:45 AM', event: 'Police arrive', detail: 'Studio sealed as crime scene.', key: false },
    ],
    hints: [
      { id: 'H1', label: 'HINT 1', text: 'Think about who had physical access to the studio that night. The keypad log is your best friend.', revealed: false },
      { id: 'H2', label: 'HINT 2', text: 'The motive is personal, not professional. Focus on the USB drive contents.', revealed: false },
      { id: 'H3', label: 'HINT 3', text: "Check the timeline between 12:30 AM and 1:30 AM. The red coat on CCTV matches someone's wardrobe.", revealed: false },
    ],
  },
  {
    id: 2,
    number: 'CASE #02',
    title: 'THE VANISHING WITNESS',
    location: 'Harlow County Courthouse, Ohio',
    date: 'Mar 4, 2021',
    type: 'Disappearance',
    difficulty: 'medium',
    solved: false,
    blurb: 'A star witness in a high-profile fraud trial disappears 48 hours before she is due to testify. Her car is found running. Her phone is off.',
    story: 'Sandra Osei was the key witness in the Harlow County financial fraud trial against billionaire businessman Victor Crane. She vanished from her apartment complex two days before she was supposed to take the stand. Her car was found idling in the parking garage. Her phone pinged a tower three miles away and then went dark. No ransom demand was ever made.',
    answer: 'Victor Crane',
    answerMotive: 'Crane ordered Sandra silenced to prevent her testimony from exposing his offshore accounts and money laundering operation.',
    keywords: ['crane', 'offshore', 'testimony', 'silenced', 'fraud', 'witness'],
    evidence: [
      { id: 'E01', icon: '🚗', name: "Sandra's Car", desc: 'Found running in garage. No signs of struggle. Handbag still inside.' },
      { id: 'E02', icon: '📞', name: 'Phone Records', desc: 'Last call was to an encrypted number. Pings a tower 3 miles east.' },
      { id: 'E03', icon: '📁', name: 'Case Documents', desc: "Sandra's copy of trial documents found shredded in her apartment." },
      { id: 'E04', icon: '💳', name: 'ATM Withdrawal', desc: '$3,000 cash withdrawal 6 hours before disappearance.' },
      { id: 'E05', icon: '👁️', name: 'Surveillance Gap', desc: 'Security cameras in building were offline for 2 hours that evening.' },
    ],
    suspects: [
      { name: 'Victor Crane', role: 'Defendant', emoji: '🧑‍💼', bio: 'Billionaire. Currently on trial. Reportedly told associates the trial would "take care of itself."', motive: 'Sandra\'s testimony would have confirmed offshore fraud. Worth billions to silence her.' },
      { name: 'Karen Osei', role: 'Sister', emoji: '👩', bio: "Sandra's estranged sister. Had a falling out over their late father's estate.", motive: 'Personal grudge. But no financial or legal motive confirmed.' },
      { name: 'Marcus Webb', role: 'Crane\'s Lawyer', emoji: '👨‍⚖️', bio: 'Known for aggressive tactics. Visited Sandra at her apartment the week before.', motive: 'Could have been delivering a warning or negotiating a deal.' },
      { name: 'Detective Mills', role: 'Lead Investigator', emoji: '🕵️', bio: 'Has received unexplained deposits in a secondary account over the past 4 months.', motive: 'Possibly on Crane\'s payroll. Has been known to misplace evidence.' },
    ],
    timeline: [
      { time: '2:00 PM', event: 'Sandra signs official witness form', detail: 'Courthouse records confirm.', key: false },
      { time: '6:30 PM', event: 'ATM withdrawal of $3,000', detail: 'Closest branch to her apartment.', key: true },
      { time: '7:00 PM', event: 'Building cameras go offline', detail: 'Unexplained 2-hour outage.', key: true },
      { time: '9:12 PM', event: 'Last phone ping', detail: 'Tower 3 miles east of apartment.', key: true },
      { time: '9:30 PM', event: 'Car found running in garage', detail: 'Reported by neighbor.', key: false },
      { time: 'Next day', event: 'Trial delayed', detail: 'Judge granted continuance due to missing witness.', key: false },
    ],
    hints: [
      { id: 'H1', label: 'HINT 1', text: 'Who benefits most if Sandra never testifies? Follow the money.', revealed: false },
      { id: 'H2', label: 'HINT 2', text: 'The camera outage was not a coincidence. Look for who has access to building systems.', revealed: false },
      { id: 'H3', label: 'HINT 3', text: "Detective Mills' secondary account activity ties him to Crane's organization indirectly.", revealed: false },
    ],
  },
  {
    id: 3,
    number: 'CASE #03',
    title: 'ROOM 204',
    location: 'The Pelican Hotel, Miami FL',
    date: 'Jul 19, 2019',
    type: 'Suspicious Death',
    difficulty: 'easy',
    solved: false,
    blurb: 'A retired professor is found dead in his hotel room during a conference. The door was locked from the inside. The window is six floors up.',
    story: 'Professor Gerald Marsh, 67, was attending an academic conference at The Pelican Hotel. He was found dead in Room 204 at 8 AM by housekeeping. The door was chained from the inside. The window was sealed shut and six floors up. The coroner initially ruled natural causes — until a needle mark was found behind his left ear, an unusual location for self-injection.',
    answer: 'Nina Marsh',
    answerMotive: 'Gerald had secretly changed his will to exclude Nina after learning she had been stealing from his research fund for years.',
    keywords: ['nina', 'will', 'inheritance', 'injection', 'needle', 'research fund'],
    evidence: [
      { id: 'E01', icon: '🔒', name: 'Chained Door', desc: 'Door locked from inside. No other entry points.' },
      { id: 'E02', icon: '💉', name: 'Needle Mark', desc: 'Found behind the left ear. Unusual location. Consistent with fast-acting sedative.' },
      { id: 'E03', icon: '📜', name: 'Amended Will', desc: "Found in Gerald's briefcase. Nina removed from inheritance one week prior." },
      { id: 'E04', icon: '🛎️', name: 'Room Service Log', desc: 'Gerald ordered tea at 11 PM. Served by hotel staff — but a second cup was found.' },
      { id: 'E05', icon: '🧾', name: 'Research Fund Records', desc: 'Irregularities dating back 3 years. Withdrawals traced to Nina\'s account.' },
    ],
    suspects: [
      { name: 'Nina Marsh', role: 'Daughter', emoji: '👧', bio: "Gerald's daughter and academic assistant. Stayed in Room 206 at the same hotel.", motive: 'Removed from the will after Gerald discovered she had been embezzling research funds.' },
      { name: 'Dr. Lena Cross', role: 'Academic Rival', emoji: '👩‍🔬', bio: "Gerald's longtime competitor. They had a public argument at the conference dinner.", motive: 'Professional rivalry over a disputed research patent. But was at the conference gala at time of death.' },
      { name: 'Hotel Concierge', role: 'Tom Briggs', emoji: '🛎️', bio: 'Works the night shift. Has passkeys to all rooms.', motive: 'No known motive. Routine check-ins confirmed.' },
    ],
    timeline: [
      { time: '7:00 PM', event: 'Conference dinner attended by Gerald', detail: 'Last public appearance.', key: false },
      { time: '10:30 PM', event: 'Gerald returns to Room 204', detail: 'Key card log confirms.', key: false },
      { time: '11:00 PM', event: 'Room service tea ordered', detail: 'One cup ordered. Two cups found.', key: true },
      { time: '11:15 PM', event: 'Nina visits father\'s room', detail: "Confirmed by corridor camera. 'Just checking in,' she told staff.", key: true },
      { time: '8:00 AM', event: 'Body discovered by housekeeping', detail: 'Door chained from inside.', key: false },
    ],
    hints: [
      { id: 'H1', label: 'HINT 1', text: 'A chained door does not mean no one else was there. Think about what happened before the chain was set.', revealed: false },
      { id: 'H2', label: 'HINT 2', text: 'The second cup of tea is the key. Someone joined Gerald before he died.', revealed: false },
      { id: 'H3', label: 'HINT 3', text: 'Check who visited Room 204 in the hour before death and had the most to lose financially.', revealed: false },
    ],
  },
  {
    id: 4,
    number: 'CASE #04',
    title: 'THE SILENT PARTNER',
    location: 'Blackwood Financial, Chicago IL',
    date: 'Sep 8, 2022',
    type: 'Corporate Fraud & Murder',
    difficulty: 'hard',
    solved: false,
    blurb: "A fintech startup founder is poisoned at his own company's launch party. The killer sat at the same table.",
    story: 'Chris Adler, 34, founder of Blackwood Financial, was found unconscious at his own product launch gala and died four hours later at Northwestern Memorial Hospital. Toxicology confirmed ricin poisoning administered through his champagne glass. The glass was exchanged during a toast. Seven people were within arm\'s reach. One of them is the killer.',
    answer: 'Sophie Blackwood',
    answerMotive: 'Sophie, a silent co-founder, was about to be legally erased from the company records and stripped of her 40% equity by Chris, who had falsified the original partnership agreement.',
    keywords: ['sophie', 'equity', 'partnership', 'co-founder', 'falsified', 'ricin', 'champagne'],
    evidence: [
      { id: 'E01', icon: '🥂', name: 'Champagne Glass', desc: 'Chris\'s glass swapped during toast. Residue of ricin confirmed.' },
      { id: 'E02', icon: '📄', name: 'Falsified Agreement', desc: "Original founding documents show Sophie's name removed in a scan-edited version." },
      { id: 'E03', icon: '💼', name: 'Sophie\'s Bag', desc: 'Trace amounts of ricin found in lining of her clutch bag.' },
      { id: 'E04', icon: '📸', name: 'Event Photos', desc: "Photo shows Sophie's hand near Chris's glass during the toast." },
      { id: 'E05', icon: '📧', name: 'Email Thread', desc: "Chris's lawyer emailed him 2 days before: 'Sophie must not find out until it's done.'" },
    ],
    suspects: [
      { name: 'Sophie Blackwood', role: 'Silent Co-Founder', emoji: '👩‍💼', bio: 'Claims to have built the algorithmic core of the platform. Was never publicly credited.', motive: 'Discovered Chris had erased her name from founding documents. Stood to lose $40M in equity.' },
      { name: 'James Farrow', role: 'Lead Investor', emoji: '🧓', bio: 'Poured $12M into the company. Was present at the toast.', motive: 'Had a clause in his investment that paid out if Chris died before IPO. But cooperated fully with police.' },
      { name: 'Rachel Tso', role: 'Head of Product', emoji: '👩‍💻', bio: "Chris's right hand. Was being secretly groomed to replace Sophie.", motive: "Stood to gain Sophie's equity if Sophie was removed. But had no motive to kill Chris." },
      { name: 'Marcus Dean', role: 'PR Manager', emoji: '👨', bio: 'Arranged the seating plan for the gala. Placed Sophie directly beside Chris.', motive: 'No personal motive. But knowingly or unknowingly facilitated proximity.' },
    ],
    timeline: [
      { time: '7:00 PM', event: 'Gala begins', detail: 'All seven key attendees confirmed present.', key: false },
      { time: '8:45 PM', event: 'Toast proposed by Chris', detail: 'Glasses distributed. Photo taken by event photographer.', key: true },
      { time: '8:46 PM', event: 'Glass swap captured on photo', detail: "Sophie's hand near Chris's flute.", key: true },
      { time: '9:15 PM', event: 'Chris collapses in hallway', detail: 'Paramedics called immediately.', key: false },
      { time: '1:08 AM', event: 'Chris declared dead at hospital', detail: 'Ricin confirmed by toxicology.', key: false },
    ],
    hints: [
      { id: 'H1', label: 'HINT 1', text: 'Look at who had the most to lose if the party went smoothly and the company launched successfully.', revealed: false },
      { id: 'H2', label: 'HINT 2', text: 'The founding documents contain a hidden story. Someone was erased on purpose.', revealed: false },
      { id: 'H3', label: 'HINT 3', text: "The event photo doesn't lie. Pay attention to hands, not faces.", revealed: false },
    ],
  },
  {
    id: 5,
    number: 'CASE #05',
    title: 'THE BURNED MANUSCRIPT',
    location: 'Ashford Estate, Vermont',
    date: 'Dec 1, 2020',
    type: 'Arson & Theft',
    difficulty: 'medium',
    solved: false,
    blurb: 'A reclusive novelist\'s life work is stolen the same night her estate library burns. She survives — but barely.',
    story: "Eleanor Ashford, 71, woke at 3 AM to find her private library ablaze. Her unpublished 600-page manuscript — her final novel and rumored to expose real scandals among New England's elite — was gone. A first edition collection worth $800,000 was also missing. Eleanor survived with smoke inhalation. She insists it was not an accident.",
    answer: 'Gregory Ashford',
    answerMotive: "Eleanor's nephew Gregory stood to inherit the estate. Her manuscript contained a chapter revealing his embezzlement from the family trust. He hired someone to steal it and set the fire to cover the theft.",
    keywords: ['gregory', 'nephew', 'trust', 'manuscript', 'embezzlement', 'inherit', 'hired'],
    evidence: [
      { id: 'E01', icon: '🔥', name: 'Fire Origin Point', desc: 'Investigators found the fire started at the library door, not inside. Deliberately set.' },
      { id: 'E02', icon: '📚', name: 'Missing First Editions', desc: 'High-value books removed before fire. Knew exactly which ones to take.' },
      { id: 'E03', icon: '💰', name: 'Wire Transfer', desc: '$25,000 sent from Gregory\'s account to unknown recipient 3 days before the fire.' },
      { id: 'E04', icon: '📓', name: 'Notebook Fragment', desc: 'Surviving charred pages reference "G.A." and describe trust fund fraud.', },
      { id: 'E05', icon: '🚗', name: 'Vehicle Sighting', desc: 'Neighbor saw an unfamiliar van outside the estate around 2:30 AM.', },
    ],
    suspects: [
      { name: 'Gregory Ashford', role: 'Nephew', emoji: '👨', bio: "Eleanor's only living relative. Manages the family trust fund. Visited the estate two weeks prior.", motive: "Manuscript contained evidence of his trust fraud. Also stood to inherit the estate faster if Eleanor's health deteriorated." },
      { name: 'Patrick Vane', role: 'Literary Agent', emoji: '🧑‍💼', bio: "Eleanor's agent of 20 years. Was negotiating a multimillion-dollar deal for the manuscript.", motive: 'Deal would fall through if manuscript was destroyed — but he may have wanted to control its release himself.' },
      { name: 'Laura Shen', role: 'Housekeeper', emoji: '👩', bio: "Has worked at the estate for 12 years. Was sleeping in the staff quarters during the fire.", motive: 'No known motive. Helped Eleanor escape and sustained minor burns herself.' },
    ],
    timeline: [
      { time: '11:00 PM', event: 'Eleanor retires to bedroom', detail: 'Housekeeper confirms lights off.', key: false },
      { time: '2:30 AM', event: 'Unknown van seen outside', detail: "Neighbor's testimony.", key: true },
      { time: '3:00 AM', event: 'Library fire begins', detail: 'Origin point at library door. Accelerant detected.', key: true },
      { time: '3:12 AM', event: 'Eleanor wakes and escapes', detail: 'Laura assists her out of the east wing.', key: false },
      { time: '3:20 AM', event: 'Fire department arrives', detail: 'Library destroyed. Manuscript and first editions missing.', key: false },
    ],
    hints: [
      { id: 'H1', label: 'HINT 1', text: "The fire started from outside the library. The thief took what they came for first, then lit the fire. This wasn't rage — it was planning.", revealed: false },
      { id: 'H2', label: 'HINT 2', text: "The wire transfer happened 3 days before. Someone paid someone else to do the job. Who had $25,000 to spend on a problem?", revealed: false },
      { id: 'H3', label: 'HINT 3', text: "The charred notebook pages name 'G.A.' directly. Look for the character with the most to lose from that manuscript becoming public.", revealed: false },
    ],
  },
  {
    id: 6,
    number: 'CASE #06',
    title: 'THE EMPTY ALIBI',
    location: 'Maplewood Suburbs, Portland OR',
    date: 'Feb 14, 2023',
    type: 'Homicide',
    difficulty: 'easy',
    solved: false,
    blurb: "A man claims he was home alone all evening. His wife turns up dead. The neighbors tell a different story.",
    story: "Diane Holloway, 38, was found dead in the couple's home on Valentine's Day evening. Her husband, Patrick Holloway, 41, claimed he had been home all night cooking dinner and watching TV. He said he found her at the bottom of the basement stairs at 10 PM. The medical examiner determined she died between 7 and 8 PM — when Patrick claims they were eating dinner together. Two neighbors independently confirm Patrick's car left the house at 6:45 PM and returned at 8:30 PM.",
    answer: 'Patrick Holloway',
    answerMotive: 'Diane had filed secret divorce papers and was set to receive the house and custody of their daughter. Patrick discovered the papers that morning and confronted her when he returned home.',
    keywords: ['patrick', 'divorce', 'alibi', 'papers', 'custody', 'lied', 'holloway'],
    evidence: [
      { id: 'E01', icon: '🚘', name: 'Car Movement', desc: 'Two neighbors confirm Patrick\'s car left at 6:45 PM. Returned 8:30 PM.' },
      { id: 'E02', icon: '⚖️', name: 'Divorce Papers', desc: "Found in Diane's desk drawer. Filed 3 days prior. Patrick named as respondent." },
      { id: 'E03', icon: '📺', name: 'Smart TV Log', desc: 'TV was on but no interaction recorded between 6:00 PM and 8:45 PM.' },
      { id: 'E04', icon: '📱', name: 'Phone Silence', desc: "Patrick's phone was switched off between 6:30 PM and 8:40 PM. No pings." },
      { id: 'E05', icon: '🩸', name: 'Basement Evidence', desc: 'No evidence of trip or fall. Bruising pattern inconsistent with an accident.' },
    ],
    suspects: [
      { name: 'Patrick Holloway', role: 'Husband', emoji: '🧑', bio: 'Real estate agent. Claims to have been home all evening. Story contradicted by neighbors and phone records.', motive: "Discovered Diane's secret divorce filing that morning. Stood to lose the house, savings, and custody." },
      { name: 'Diane\'s Sister — Helen', role: 'Family', emoji: '👩', bio: "Diane's older sister. Had a strained relationship but recently reconciled.", motive: 'No financial motive. Has a solid alibi — at a Valentine\'s dinner reservation confirmed by restaurant.' },
      { name: 'Marcus Bell', role: 'Neighbor', emoji: '🧔', bio: 'Lives across the street. One of the witnesses who saw Patrick\'s car leave.', motive: 'None. Cooperated fully with police.' },
    ],
    timeline: [
      { time: '6:00 PM', event: "Patrick claims dinner begins", detail: "Patrick's version of events.", key: false },
      { time: '6:45 PM', event: "Patrick's car leaves the house", detail: 'Confirmed by two independent witnesses.', key: true },
      { time: '7:00 PM', event: 'Estimated time of death', detail: 'Medical examiner window: 7 to 8 PM.', key: true },
      { time: '8:30 PM', event: "Patrick's car returns", detail: 'Witnessed by Marcus Bell.', key: true },
      { time: '10:00 PM', event: 'Patrick calls 911', detail: 'Claims he just found Diane at the bottom of the stairs.', key: false },
    ],
    hints: [
      { id: 'H1', label: 'HINT 1', text: "Patrick's alibi relies on no one checking the neighbors. Two of them already contradicted his story.", revealed: false },
      { id: 'H2', label: 'HINT 2', text: "If they were having dinner together, why was the TV inactive and his phone off during that exact window?", revealed: false },
      { id: 'H3', label: 'HINT 3', text: "The divorce papers were filed 3 days before. The question isn't who did it — it's whether he knew about them.", revealed: false },
    ],
  },
];

/* ============================================================
   APP STATE
   ============================================================ */
const state = {
  currentCaseId: null,
  currentTab: 'overview',
  hintsUsed: 0,
  solved: 0,
  scores: [],
  hintCounts: {},
};

/* ============================================================
   SPLASH
   ============================================================ */
function enterApp() {
  document.getElementById('splash').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  renderDashboard();
  renderAllCases();
  renderEvidenceArchive();
  renderAllSuspects();
  renderHintVault();
  renderStats();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function showView(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const target = document.getElementById('view-' + viewName);
  if (target) target.classList.add('active-view');

  const navItem = document.querySelector(`[data-view="${viewName}"]`);
  if (navItem) navItem.classList.add('active');

  const labels = {
    dashboard: 'Dashboard', cases: 'All Cases', evidence: 'Evidence Archive',
    suspects: 'Suspect Profiles', hints: 'Hint Vault', stats: 'Detective Stats',
  };
  document.getElementById('topbar-title').textContent = labels[viewName] || viewName;
}

function toggleHowItWorks() {
  document.getElementById('how-panel').classList.toggle('hidden');
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard() {
  document.getElementById('stat-total').textContent = CASES.length;
  document.getElementById('stat-solved').textContent = state.solved;
  document.getElementById('stat-hints').textContent = state.hintsUsed;
  const avg = state.scores.length ? Math.round(state.scores.reduce((a, b) => a + b, 0) / state.scores.length) : 0;
  document.getElementById('stat-score').textContent = avg + '%';

  const container = document.getElementById('dashboard-case-list');
  container.innerHTML = '';
  CASES.slice(0, 4).forEach(c => {
    container.appendChild(buildCaseCard(c));
  });
}

function renderAllCases() {
  const container = document.getElementById('all-case-list');
  container.innerHTML = '';
  CASES.forEach(c => container.appendChild(buildCaseCard(c)));
}

function buildCaseCard(c) {
  const card = document.createElement('div');
  card.className = 'case-card';
  card.innerHTML = `
    <div class="case-info">
      <div class="case-num">${c.number} &bull; ${c.type}</div>
      <div class="case-title">${c.title}</div>
      <div class="case-blurb">${c.blurb}</div>
      <div class="case-meta">
        <span class="meta-chip">&#128197; ${c.date}</span>
        <span class="meta-chip">&#128205; ${c.location}</span>
        <span class="meta-chip">&#128269; ${c.evidence.length} Evidence Items</span>
        <span class="meta-chip">&#128100; ${c.suspects.length} Suspects</span>
      </div>
    </div>
    <div class="case-right">
      <span class="diff-pill ${c.difficulty}">${c.difficulty.toUpperCase()}</span>
      ${c.solved ? '<span class="solved-badge">&#9989; SOLVED</span>' : ''}
      <button class="open-btn" onclick="openCase(${c.id})">OPEN FILE</button>
    </div>
  `;
  return card;
}

/* ============================================================
   CASE DETAIL
   ============================================================ */
function openCase(caseId) {
  const c = CASES.find(x => x.id === caseId);
  if (!c) return;

  state.currentCaseId = caseId;
  state.currentTab = 'overview';

  // Update difficulty badge
  const badge = document.getElementById('diff-badge');
  badge.textContent = c.difficulty.toUpperCase();
  badge.className = 'diff-badge ' + c.difficulty;

  // Update topbar
  document.getElementById('topbar-title').textContent = c.title;

  // Update theory panel
  document.getElementById('theory-prompt').textContent = `Who do you think committed "${c.title}"? State your theory and name the perpetrator.`;
  document.getElementById('theory-input').value = '';
  document.getElementById('char-count').textContent = '0';

  // Populate suspect select
  const sel = document.getElementById('suspect-select');
  sel.innerHTML = '<option value="">Select perpetrator...</option>';
  c.suspects.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.name;
    opt.textContent = s.name + ' — ' + s.role;
    sel.appendChild(opt);
  });

  // Reset result
  document.getElementById('result-box').classList.add('hidden');
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('progress-pct').textContent = '0%';

  // Build detail view
  buildDetailView(c);

  // Show detail view
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
  document.getElementById('view-case-detail').classList.add('active-view');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector('[data-view="cases"]').classList.add('active');
}

function buildDetailView(c) {
  const view = document.getElementById('view-case-detail');
  view.innerHTML = '';

  const inner = document.createElement('div');
  inner.className = 'case-detail-inner';

  // Back button
  const back = document.createElement('button');
  back.className = 'back-btn';
  back.innerHTML = '&#8249; Back to Cases';
  back.onclick = () => showView('cases');
  inner.appendChild(back);

  // Hero
  const hero = document.createElement('div');
  hero.className = 'case-hero';
  hero.innerHTML = `
    <div class="case-hero-num">${c.number} &bull; ${c.type}</div>
    <div class="case-hero-title">${c.title}</div>
    <div class="case-hero-blurb">${c.blurb}</div>
    <div class="case-hero-tags">
      <span class="hero-tag">&#128197; ${c.date}</span>
      <span class="hero-tag">&#128205; ${c.location}</span>
      <span class="hero-tag diff-pill ${c.difficulty}" style="border-radius:20px;font-size:11px;">${c.difficulty.toUpperCase()}</span>
    </div>
  `;
  inner.appendChild(hero);

  // Tabs
  const tabs = document.createElement('div');
  tabs.className = 'case-tabs';
  const tabDefs = [
    { key: 'overview', label: 'CASE OVERVIEW' },
    { key: 'evidence', label: `EVIDENCE (${c.evidence.length})` },
    { key: 'suspects', label: `SUSPECTS (${c.suspects.length})` },
    { key: 'timeline', label: 'TIMELINE' },
    { key: 'notes', label: 'NOTES' },
    { key: 'hints', label: `HINTS (${c.hints.length})` },
  ];
  tabDefs.forEach(td => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (td.key === 'overview' ? ' active' : '');
    btn.textContent = td.label;
    btn.onclick = () => switchTab(td.key);
    btn.setAttribute('data-tab', td.key);
    tabs.appendChild(btn);
  });
  inner.appendChild(tabs);

  // Tab contents
  const tabWrap = document.createElement('div');
  tabWrap.id = 'tab-wrap';

  // OVERVIEW
  const overviewContent = document.createElement('div');
  overviewContent.className = 'tab-content active';
  overviewContent.id = 'tab-overview';
  overviewContent.innerHTML = `
    <div class="story-section-title">THE STORY SO FAR</div>
    <div class="story-text">${c.story}</div>
    <div class="story-section-title">KEY EVIDENCE</div>
  `;
  const evGrid = document.createElement('div');
  evGrid.className = 'evidence-grid';
  c.evidence.slice(0, 4).forEach(e => evGrid.appendChild(buildEvCard(e)));
  overviewContent.appendChild(evGrid);
  tabWrap.appendChild(overviewContent);

  // EVIDENCE
  const evContent = document.createElement('div');
  evContent.className = 'tab-content';
  evContent.id = 'tab-evidence';
  const evFull = document.createElement('div');
  evFull.className = 'evidence-grid';
  c.evidence.forEach(e => evFull.appendChild(buildEvCard(e)));
  evContent.appendChild(evFull);
  tabWrap.appendChild(evContent);

  // SUSPECTS
  const susContent = document.createElement('div');
  susContent.className = 'tab-content';
  susContent.id = 'tab-suspects';
  const susGrid = document.createElement('div');
  susGrid.className = 'suspect-grid';
  c.suspects.forEach(s => susGrid.appendChild(buildSuspectCard(s)));
  susContent.appendChild(susGrid);
  tabWrap.appendChild(susContent);

  // TIMELINE
  const tlContent = document.createElement('div');
  tlContent.className = 'tab-content';
  tlContent.id = 'tab-timeline';
  const tl = document.createElement('div');
  tl.className = 'timeline';
  c.timeline.forEach(t => {
    const item = document.createElement('div');
    item.className = 'tl-item';
    item.innerHTML = `
      <div class="tl-dot${t.key ? ' key' : ''}"></div>
      <div class="tl-time">${t.time}</div>
      <div class="tl-event">${t.event}</div>
      <div class="tl-detail">${t.detail}</div>
    `;
    tl.appendChild(item);
  });
  tlContent.appendChild(tl);
  tabWrap.appendChild(tlContent);

  // NOTES
  const notesContent = document.createElement('div');
  notesContent.className = 'tab-content';
  notesContent.id = 'tab-notes';
  notesContent.innerHTML = `
    <div class="story-section-title">YOUR CASE NOTES</div>
    <textarea class="notes-area" placeholder="Write your observations here... This is your private scratchpad. Nothing is saved." rows="10"></textarea>
  `;
  tabWrap.appendChild(notesContent);

  // HINTS
  const hintsContent = document.createElement('div');
  hintsContent.className = 'tab-content';
  hintsContent.id = 'tab-hints';
  const hintGrid = document.createElement('div');
  hintGrid.className = 'hint-grid';
  c.hints.forEach((h, i) => hintGrid.appendChild(buildHintCard(h, i, c.id)));
  hintsContent.appendChild(hintGrid);
  tabWrap.appendChild(hintsContent);

  inner.appendChild(tabWrap);
  view.appendChild(inner);
}

function switchTab(key) {
  state.currentTab = key;
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === key);
  });
  document.querySelectorAll('.tab-content').forEach(tc => {
    tc.classList.toggle('active', tc.id === 'tab-' + key);
  });
}

/* ============================================================
   EVIDENCE CARDS
   ============================================================ */
function buildEvCard(e) {
  const card = document.createElement('div');
  card.className = 'ev-card';
  card.innerHTML = `
    <div class="ev-img-box">
      ${e.icon}
      <span class="ev-tag">${e.id}</span>
    </div>
    <div class="ev-body">
      <div class="ev-name">${e.name}</div>
      <div class="ev-desc">${e.desc}</div>
    </div>
  `;
  return card;
}

/* ============================================================
   SUSPECT CARDS
   ============================================================ */
function buildSuspectCard(s) {
  const card = document.createElement('div');
  card.className = 'suspect-card';
  card.innerHTML = `
    <div class="suspect-avatar">${s.emoji}</div>
    <div class="suspect-name">${s.name}</div>
    <div class="suspect-role">${s.role}</div>
    <div class="suspect-bio">${s.bio}</div>
    <div class="suspect-motive">
      <strong>POSSIBLE MOTIVE</strong>
      ${s.motive}
    </div>
  `;
  return card;
}

/* ============================================================
   HINT CARDS
   ============================================================ */
function buildHintCard(h, index, caseId) {
  const card = document.createElement('div');
  card.className = 'hint-card' + (h.revealed ? '' : ' locked');
  card.id = `hint-card-${caseId}-${index}`;
  card.innerHTML = `
    <div class="hint-icon ${h.revealed ? '' : 'locked-icon'}">${h.revealed ? '&#128161;' : '&#128274;'}</div>
    <div>
      <div class="hint-label">${h.label}</div>
      <div class="hint-text">${h.text}</div>
      ${!h.revealed ? `<button class="reveal-btn" onclick="revealHintByIndex(${caseId}, ${index})">Reveal Hint</button>` : ''}
    </div>
  `;
  return card;
}

function revealHintByIndex(caseId, index) {
  const c = CASES.find(x => x.id === caseId);
  if (!c) return;
  if (c.hints[index].revealed) return;

  c.hints[index].revealed = true;
  state.hintsUsed++;
  if (!state.hintCounts[caseId]) state.hintCounts[caseId] = 0;
  state.hintCounts[caseId]++;

  // Update hint card
  const card = document.getElementById(`hint-card-${caseId}-${index}`);
  if (card) {
    card.classList.remove('locked');
    card.innerHTML = `
      <div class="hint-icon">&#128161;</div>
      <div>
        <div class="hint-label">${c.hints[index].label}</div>
        <div class="hint-text">${c.hints[index].text}</div>
      </div>
    `;
  }

  // Update progress
  updateProgress(caseId);
  renderDashboard();
  renderStats();
}

function revealNextHint() {
  if (!state.currentCaseId) return;
  const c = CASES.find(x => x.id === state.currentCaseId);
  if (!c) return;
  const nextHint = c.hints.find(h => !h.revealed);
  if (!nextHint) {
    alert('All hints have been revealed for this case!');
    return;
  }
  const index = c.hints.indexOf(nextHint);
  revealHintByIndex(state.currentCaseId, index);
}

/* ============================================================
   PROGRESS
   ============================================================ */
function updateProgress(caseId) {
  const c = CASES.find(x => x.id === caseId);
  if (!c) return;
  const revealed = c.hints.filter(h => h.revealed).length;
  const pct = Math.min(100, Math.round((revealed / c.hints.length) * 60) + 10);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent = pct + '%';
}

/* ============================================================
   THEORY SUBMISSION & GRADING
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const ta = document.getElementById('theory-input');
  if (ta) {
    ta.addEventListener('input', () => {
      document.getElementById('char-count').textContent = ta.value.length;
    });
  }
});

function submitTheory() {
  if (!state.currentCaseId) {
    flashMsg('Please open a case first before submitting your theory.');
    return;
  }

  const c = CASES.find(x => x.id === state.currentCaseId);
  const theoryText = document.getElementById('theory-input').value.trim();
  const selectedSuspect = document.getElementById('suspect-select').value;

  if (!selectedSuspect) {
    flashMsg('Select a suspect from the dropdown before submitting.');
    return;
  }

  if (theoryText.length < 20) {
    flashMsg('Write at least a sentence explaining your theory before submitting.');
    return;
  }

  const score = gradeTheory(c, selectedSuspect, theoryText);

  // Mark solved
  if (score >= 70 && !c.solved) {
    c.solved = true;
    state.solved++;
  }

  state.scores.push(score);
  renderDashboard();
  renderStats();
  updateProgress(state.currentCaseId);
  displayResult(c, score, selectedSuspect);
}

function gradeTheory(c, suspect, text) {
  let score = 0;
  const lower = text.toLowerCase();

  // Correct suspect: 40 points
  const correctSuspect = suspect === c.answer;
  if (correctSuspect) score += 40;

  // Keyword matches: up to 40 points
  const matched = c.keywords.filter(k => lower.includes(k.toLowerCase()));
  score += Math.min(40, matched.length * (40 / c.keywords.length) * (matched.length / c.keywords.length) * 2.5);

  // Length/detail bonus: up to 20 points
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  if (wordCount >= 40) score += 20;
  else if (wordCount >= 20) score += 12;
  else if (wordCount >= 10) score += 6;

  // Difficulty modifier
  if (c.difficulty === 'hard') score = Math.round(score * 0.85);
  if (c.difficulty === 'easy') score = Math.min(100, Math.round(score * 1.1));

  // Penalty for hints used
  const hintsUsedOnCase = state.hintCounts[c.id] || 0;
  score = Math.max(0, score - hintsUsedOnCase * 5);

  return Math.min(100, Math.round(score));
}

function displayResult(c, score, suspect) {
  const correctSuspect = suspect === c.answer;
  const lower = document.getElementById('theory-input').value.toLowerCase();
  const matched = c.keywords.filter(k => lower.includes(k.toLowerCase()));
  const missed = c.keywords.filter(k => !lower.includes(k.toLowerCase()));

  const grades = getGrade(score, correctSuspect);

  const box = document.getElementById('result-box');
  box.classList.remove('hidden');
  box.classList.add('flash');
  setTimeout(() => box.classList.remove('flash'), 600);

  document.getElementById('result-grade').textContent = grades.grade;
  document.getElementById('result-msg').textContent = grades.msg;
  document.getElementById('donut-pct').textContent = score + '%';

  // Animate donut
  const circumference = 2 * Math.PI * 32;
  const fill = (score / 100) * circumference;
  const donutFill = document.getElementById('donut-fill');
  donutFill.style.stroke = score >= 70 ? '#27ae60' : score >= 40 ? '#d4a017' : '#c0392b';
  setTimeout(() => {
    donutFill.style.strokeDasharray = `${fill} ${circumference}`;
  }, 100);

  // Nailed
  const nailedEl = document.getElementById('result-nailed');
  let nailedHTML = '';
  if (correctSuspect) nailedHTML += `<div><span class="check">&#10003;</span> Identified the correct suspect</div>`;
  matched.slice(0, 3).forEach(k => {
    nailedHTML += `<div><span class="check">&#10003;</span> Found clue: <em>${k}</em></div>`;
  });
  nailedEl.innerHTML = nailedHTML || '<div><span class="cross">&#10007;</span> No key elements matched</div>';

  // Missed
  const missedEl = document.getElementById('result-missed');
  let missedHTML = '';
  if (!correctSuspect) missedHTML += `<div><span class="cross">&#10007;</span> Wrong suspect named</div>`;
  missed.slice(0, 2).forEach(k => {
    missedHTML += `<div><span class="cross">&#10007;</span> Missed: <em>${k}</em></div>`;
  });
  missedEl.innerHTML = missedHTML;

  // Progress
  const pct = Math.max(parseInt(document.getElementById('progress-pct').textContent) || 0, score);
  document.getElementById('progress-fill').style.width = Math.min(100, pct) + '%';
  document.getElementById('progress-pct').textContent = Math.min(100, pct) + '%';
}

function getGrade(score, correct) {
  if (score >= 90 && correct) return {
    grade: 'SHERLOCK LEVEL. CASE CLOSED.',
    msg: 'You nailed it, detective. Every clue connected. Every motive dissected. You were born for this work.'
  };
  if (score >= 75 && correct) return {
    grade: 'SHARP DETECTIVE. ALMOST PERFECT.',
    msg: "Strong theory with the right suspect. A few details slipped through, but you've got the instincts."
  };
  if (score >= 60 && correct) return {
    grade: 'NOT BAD, DETECTIVE... BUT NOT QUITE SHERLOCK.',
    msg: 'Your theory is close and the suspect is right, but a key detail is missing. Revisit the evidence and think deeper.'
  };
  if (score >= 50) return {
    grade: 'YOU\'RE ONTO SOMETHING.',
    msg: "You're circling the truth but haven't landed yet. Wrong suspect or missing motive — dig further."
  };
  if (score >= 30) return {
    grade: 'THE CASE HAS STUMPED YOU.',
    msg: "Your theory has gaps wider than the crime scene tape. Try reviewing the evidence and timeline again."
  };
  return {
    grade: 'BACK TO THE ACADEMY, DETECTIVE.',
    msg: "That theory wouldn't hold up in an interrogation room. Wrong suspect. Wrong motive. Start over — and use a hint this time."
  };
}

function flashMsg(msg) {
  alert(msg);
}

/* ============================================================
   EVIDENCE ARCHIVE (global)
   ============================================================ */
function renderEvidenceArchive() {
  const container = document.getElementById('evidence-archive');
  container.innerHTML = '';
  CASES.forEach(c => {
    c.evidence.forEach(e => {
      const card = buildEvCard(e);
      container.appendChild(card);
    });
  });
}

/* ============================================================
   SUSPECTS (global)
   ============================================================ */
function renderAllSuspects() {
  const container = document.getElementById('suspect-list');
  container.innerHTML = '';
  CASES.forEach(c => {
    c.suspects.forEach(s => {
      container.appendChild(buildSuspectCard(s));
    });
  });
}

/* ============================================================
   HINT VAULT (global)
   ============================================================ */
function renderHintVault() {
  const container = document.getElementById('hint-vault');
  container.innerHTML = '';
  CASES.forEach(c => {
    const heading = document.createElement('h3');
    heading.className = 'section-heading';
    heading.style.fontSize = '16px';
    heading.style.marginTop = '24px';
    heading.textContent = c.title;
    container.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'hint-grid';
    c.hints.forEach((h, i) => grid.appendChild(buildHintCard(h, i, c.id)));
    container.appendChild(grid);
  });
}

/* ============================================================
   STATS VIEW
   ============================================================ */
function renderStats() {
  const panel = document.getElementById('stats-panel');
  const avg = state.scores.length ? Math.round(state.scores.reduce((a, b) => a + b, 0) / state.scores.length) : 0;

  const rank = avg >= 80 ? 'MASTER DETECTIVE'
    : avg >= 60 ? 'SENIOR INVESTIGATOR'
    : avg >= 40 ? 'FIELD DETECTIVE'
    : avg >= 20 ? 'ROOKIE AGENT'
    : 'CIVILIAN';

  const diffBreakdown = {
    easy: CASES.filter(c => c.difficulty === 'easy' && c.solved).length,
    medium: CASES.filter(c => c.difficulty === 'medium' && c.solved).length,
    hard: CASES.filter(c => c.difficulty === 'hard' && c.solved).length,
  };

  panel.innerHTML = `
    <div class="stats-widget">
      <h4>DETECTIVE RANK</h4>
      <div class="rank-display">${rank}</div>
      <div class="rank-sub">Based on ${state.scores.length} submission(s)</div>
    </div>
    <div class="stats-widget">
      <h4>PERFORMANCE BY DIFFICULTY</h4>
      <div class="score-bar-row">
        <span class="score-bar-label">EASY</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${diffBreakdown.easy / Math.max(1, CASES.filter(c=>c.difficulty==='easy').length) * 100}%; background: var(--green);"></div></div>
        <span class="score-bar-pct">${diffBreakdown.easy}/${CASES.filter(c=>c.difficulty==='easy').length}</span>
      </div>
      <div class="score-bar-row">
        <span class="score-bar-label">MEDIUM</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${diffBreakdown.medium / Math.max(1, CASES.filter(c=>c.difficulty==='medium').length) * 100}%; background: var(--amber);"></div></div>
        <span class="score-bar-pct">${diffBreakdown.medium}/${CASES.filter(c=>c.difficulty==='medium').length}</span>
      </div>
      <div class="score-bar-row">
        <span class="score-bar-label">HARD</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${diffBreakdown.hard / Math.max(1, CASES.filter(c=>c.difficulty==='hard').length) * 100}%;"></div></div>
        <span class="score-bar-pct">${diffBreakdown.hard}/${CASES.filter(c=>c.difficulty==='hard').length}</span>
      </div>
    </div>
    <div class="stats-widget">
      <h4>OVERALL STATS</h4>
      <div class="score-bar-row">
        <span class="score-bar-label">Avg Score</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${avg}%;"></div></div>
        <span class="score-bar-pct">${avg}%</span>
      </div>
      <div class="score-bar-row">
        <span class="score-bar-label">Solved</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${state.solved/CASES.length*100}%; background: var(--green);"></div></div>
        <span class="score-bar-pct">${state.solved}/${CASES.length}</span>
      </div>
      <div class="score-bar-row">
        <span class="score-bar-label">Hints Used</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${Math.min(100, state.hintsUsed*10)}%; background: var(--amber);"></div></div>
        <span class="score-bar-pct">${state.hintsUsed}</span>
      </div>
    </div>
    <div class="stats-widget">
      <h4>RECENT SCORES</h4>
      ${state.scores.length === 0
        ? '<p style="color:var(--text-dim);font-size:12px;">No submissions yet. Open a case to start.</p>'
        : state.scores.slice(-6).reverse().map((s, i) => `
          <div class="score-bar-row">
            <span class="score-bar-label">Run ${state.scores.length - i}</span>
            <div class="score-bar-track"><div class="score-bar-fill" style="width:${s}%; background:${s>=70?'var(--green)':s>=40?'var(--amber)':'var(--red)'};"></div></div>
            <span class="score-bar-pct">${s}%</span>
          </div>
        `).join('')
      }
    </div>
  `;
}

/* ============================================================
   CHAR COUNTER (bound early in case DOMContentLoaded fires
   before the listener above)
   ============================================================ */
window.addEventListener('load', () => {
  const ta = document.getElementById('theory-input');
  if (ta) {
    ta.addEventListener('input', () => {
      document.getElementById('char-count').textContent = ta.value.length;
    });
  }
});
