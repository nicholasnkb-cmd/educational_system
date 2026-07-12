export const roles = [
  { id: "platform", label: "Platform", icon: "building-2", image: "/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png" },
  { id: "lms", label: "LMS", icon: "layers", image: "/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png" },
  { id: "student", label: "Student", icon: "sparkles", image: "/stitch_educonnect_interactive_portal/student_portal_1/screen.png" },
  { id: "teacher", label: "Teacher", icon: "graduation-cap", image: "/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png" },
  { id: "parent", label: "Parent", icon: "users", image: "/stitch_educonnect_interactive_portal/parent_dashboard/screen.png" },
  { id: "messages", label: "Messages", icon: "message-circle", image: "/stitch_educonnect_interactive_portal/communication_hub/screen.png" },
  { id: "community", label: "Community", icon: "megaphone", image: "/stitch_educonnect_interactive_portal/communication_hub/screen.png" },
];

export const state = {
  role: "platform",
  selectedState: "ny",
  selectedDistrict: "nyc-doe",
  selectedSchool: "ps-118",
  completed: [],
  selectedClass: "All",
  checkedDeadlines: ["Science: Water Cycle Model"],
  conversationFilter: "Parents",
  activeConversationId: "sarah",
  draft: "",
  boardAudience: "All families",
  activeAccount: "teacher-school",
  offlinePackReady: false,
  workHoursOpen: true,
  emergencyOverride: false,
  currentUser: "district-admin",
  apiMode: "local",
  tourOpen: false,
  tourStep: 0,
  searchTerm: "",
  notificationsOpen: false,
  settingsOpen: false,
  toast: "",
  compactMode: false,
  highContrast: false,
  guardrails: {
    lockSubmissions: true,
    hideAnswers: true,
    parentSummaries: true,
  },
};

export const missions = [
  { id: 1, subject: "Science", title: "Space Explorers: The Moon", due: "Due tomorrow", action: "Start Mission", progress: 78, accent: "teal", icon: "rocket" },
  { id: 2, subject: "Math", title: "Number Quest: Addition", due: "Due in 2 days", action: "Play Now", progress: 44, accent: "blue", icon: "star" },
  { id: 3, subject: "Reading", title: "The Whale and the Star", due: "Keep reading", action: "Continue", progress: 56, accent: "gold", icon: "book-open" },
];

export const tenantStates = [
  {
    id: "ny",
    name: "New York",
    agency: "NYS Education Department (NYSED)",
    districts: [
      {
        id: "nyc-doe",
        name: "New York City Public Schools",
        region: "New York City",
        superintendent: "NYC Chancellor",
        schools: [
          { id: "ps-118", name: "P.S. 118 Discovery Academy", category: "Public", students: 684, staff: 78, status: "Active", subdomain: "ps118", plan: "District Core", modules: ["SIS", "LMS", "Messaging", "Family Portal"], storage: 64, uptime: "99.98%", theme: "Discovery Blue", isolation: "Dedicated tenant database", avgGrade: "88.4%", attendance: "94.2%", messages: "3 pending", studentPoints: 1240, studentName: "Hero", guardianName: "Sarah", learnerName: "Leo", workHours: "Mon-Fri, 8:00 AM-4:30 PM", afterHours: "Messages are held until the next work day" },
          { id: "bronx-charter", name: "Bronx Learning Charter", category: "Chartered", students: 412, staff: 49, status: "Onboarding", subdomain: "bronxlearning", plan: "Charter Launch", modules: ["SIS", "Messaging", "Enrollment"], storage: 31, uptime: "99.91%", theme: "Charter Gold", isolation: "Dedicated tenant database", avgGrade: "86.1%", attendance: "92.7%", messages: "8 pending", studentPoints: 890, studentName: "Explorer", guardianName: "Monica", learnerName: "Ari", workHours: "Mon-Fri, 7:45 AM-4:00 PM", afterHours: "Messages are held until staff office hours reopen" },
        ],
      },
      {
        id: "albany-csd",
        name: "Albany City School District",
        region: "Capital Region",
        superintendent: "District Superintendent",
        schools: [
          { id: "albany-prep", name: "Albany Preparatory School", category: "Private", students: 325, staff: 44, status: "Active", subdomain: "albanyprep", plan: "Private Plus", modules: ["LMS", "Messaging", "Tuition", "Family Portal"], storage: 46, uptime: "99.95%", theme: "Prep Teal", isolation: "Dedicated tenant database", avgGrade: "91.8%", attendance: "96.4%", messages: "1 pending", studentPoints: 1565, studentName: "Scholar", guardianName: "Priya", learnerName: "Noah", workHours: "Mon-Fri, 8:30 AM-5:00 PM", afterHours: "Messages wait for the next administrator-approved window" },
          { id: "eagle-point", name: "Eagle Point Elementary", category: "Public", students: 538, staff: 61, status: "Active", subdomain: "eaglepoint", plan: "District Core", modules: ["SIS", "LMS", "Messaging"], storage: 52, uptime: "99.97%", theme: "Eagle Green", isolation: "Dedicated tenant database", avgGrade: "87.2%", attendance: "95.1%", messages: "4 pending", studentPoints: 1120, studentName: "Navigator", guardianName: "Sarah", learnerName: "Mia", workHours: "Mon-Fri, 8:00 AM-4:00 PM", afterHours: "Messages are queued until office hours" },
        ],
      },
    ],
  },
  {
    id: "ca",
    name: "California",
    agency: "California Department of Education",
    districts: [
      {
        id: "la-usd",
        name: "Los Angeles Unified School District",
        region: "Los Angeles County",
        superintendent: "District Superintendent",
        schools: [
          { id: "pacific-stem", name: "Pacific STEM Charter", category: "Chartered", students: 496, staff: 52, status: "Active", subdomain: "pacificstem", plan: "STEM Charter", modules: ["SIS", "LMS", "Messaging", "Lab Scheduler"], storage: 58, uptime: "99.94%", theme: "Pacific Blue", isolation: "Dedicated tenant database", avgGrade: "90.3%", attendance: "93.8%", messages: "6 pending", studentPoints: 1325, studentName: "Innovator", guardianName: "Elena", learnerName: "Kai", workHours: "Mon-Fri, 8:00 AM-4:30 PM", afterHours: "Messages are held until staff work hours" },
        ],
      },
    ],
  },
];

export const governanceLevels = [
  ["State Governance", ["Board of Regents", "Commissioner of Education", "NYS Education Department (NYSED)"]],
  ["District & Regional Governance", ["BOCES District Superintendents", "Local Board of Education (BOE)", "District Superintendent / NYC Chancellor", "Assistant / Deputy Superintendents", "District Directors / Coordinators"]],
  ["School Building Administration", ["Principal", "Assistant Principal", "Dean of Students / Department Chairs"]],
  ["Classroom Faculty", ["Tenured Teachers", "Probationary Teachers", "Substitutes / Leave Replacements"]],
  ["Instructional & Specialized Support", ["Specialized Clinicians", "Teaching Assistants", "Teacher Aides / Paraprofessionals"]],
  ["Operational Support", ["Secretaries / Clerical Staff", "Custodial / Maintenance Staff", "Food Service / Security / Transportation"]],
  ["Student Leadership & Student Body", ["Student Board of Education Representative", "Student Council President / Officers", "Class Officers", "Club Presidents / Team Captains", "General Student Body"]],
];

export const teacherClasses = [
  { name: "English Literature", room: "Period 2, Room 304", grade: 89, attendance: 96, pending: 12 },
  { name: "Creative Writing", room: "Period 4, Room 201", grade: 92, attendance: 97, pending: 1 },
  { name: "Basic English", room: "Period 6, Room 118", grade: 84, attendance: 91, pending: 5 },
];

export const activityFeed = [
  ["Liam Wilson", "finished reading The Great Gatsby", "15 minutes ago", "Lit 101"],
  ["Sarah Chen", "submitted Grammar Quiz - Week 5", "42 minutes ago", "Creative Writing"],
  ["Marcus Thorne", "posted in the discussion board", "2 hours ago", "Shakespeare"],
];

export const deadlines = [
  { title: "History: Great Depression Essay", meta: "Due tomorrow, 11:59 PM", urgent: true },
  { title: "Science: Water Cycle Model", meta: "Due Thursday", urgent: false },
  { title: "Math: Quadratic Equations Quiz", meta: "Due Sunday", urgent: false },
];

export const lmsAssignments = [
  { id: "fractions", title: "Fractions Mastery Check", type: "Automated quiz", rubric: "4-domain rubric", analytics: 82, lockDate: "Oct 24, 8:00 PM", exception: "Maya R. +24h" },
  { id: "essay", title: "Great Depression Essay", type: "Writing task", rubric: "Argument + evidence rubric", analytics: 74, lockDate: "Oct 28, 11:59 PM", exception: "None" },
];

export const lmsFiles = [
  { name: "Water Cycle Worksheet.docx", status: "Converted to editable lesson copy", type: "Word" },
  { name: "Moon Lab Packet.pdf", status: "OCR indexed + annotation ready", type: "PDF" },
  { name: "Parent Signature Form.pdf", status: "Fillable fields detected", type: "PDF" },
];

export const lmsAccounts = [
  { id: "teacher-school", name: "Prof. Miller", context: "Teacher at selected school", active: true },
  { id: "parent-school", name: "Sarah Jenkins", context: "Parent profile", active: false },
  { id: "district-admin", name: "District Admin", context: "District-wide oversight", active: false },
];

export const lmsNotifications = [
  { level: "Urgent", title: "Locked submission window closes tonight", target: "Grade 4 Math", channel: "Dashboard + SMS" },
  { level: "Action", title: "3 rubric scores need review", target: "English Literature", channel: "Teacher inbox" },
  { level: "FYI", title: "New family comment on community board", target: "All families", channel: "Digest" },
];

export const workspaceIntegrations = [
  { app: "Docs", action: "Distribute editable templates instantly", status: "Connected" },
  { app: "Drive", action: "Attach, collect, and archive class files", status: "Connected" },
  { app: "Forms", action: "Auto-create quizzes with answer visibility rules", status: "Connected" },
  { app: "Slides", action: "Share lesson decks as view or copy templates", status: "Connected" },
];

export const classroomStrengths = [
  ["Intuitive Design", "Clean teacher and student workflows with minimal training."],
  ["Zero Cost Base", "Core classroom, assignments, communication, and family summaries stay free for schools."],
  ["Paperless Workflow", "Create, collect, grade, return, and archive digital assignments."],
  ["Centralized Communication", "Class announcements, direct messages, and parent summaries in one place."],
  ["Automated Guardrails", "Lock edits after submission and hide quiz answers until the assessment ends."],
];

export const tenantSettings = [
  ["Branding", "School theme, URL, logo, and notification voice"],
  ["Modules", "SIS, LMS, Messaging, Family Portal, Tuition, Lab Scheduler"],
  ["Data residency", "State-aligned storage policy with school-level isolation"],
  ["Work hours", "Parent-teacher messaging windows controlled by each school"],
];

export const permissionMatrix = [
  { role: "State Admin", scope: "State", canManage: "District creation, compliance reports, statewide policy" },
  { role: "District Admin", scope: "District", canManage: "School tenants, shared calendars, roster sync, analytics" },
  { role: "School Admin", scope: "School", canManage: "Approvers, staff roles, family access, emergency overrides" },
  { role: "Teacher", scope: "Classroom", canManage: "Assignments, grading, class messages, community submissions" },
  { role: "Parent / Student", scope: "Own learner", canManage: "Progress, approved posts, messages, submissions" },
];

export const auditLogs = [
  { actor: "District Admin", event: "Provisioned school tenant", scope: "NYC DOE", time: "Today 9:12 AM" },
  { actor: "Principal Rivera", event: "Approved community board post", scope: "P.S. 118", time: "Today 10:44 AM" },
  { actor: "System", event: "Blocked after-hours parent message", scope: "P.S. 118", time: "Yesterday 6:03 PM" },
  { actor: "NYSED Reviewer", event: "Viewed compliance dashboard", scope: "New York", time: "Yesterday 2:21 PM" },
];

export const privacyControls = [
  { label: "FERPA Mode", status: "Enabled", detail: "Student records are hidden outside authorized tenant scopes." },
  { label: "Media Review", status: "Required", detail: "Photos and files stay pending until an assigned approver approves them." },
  { label: "Data Export", status: "Logged", detail: "Every roster, gradebook, or message export appears in the audit trail." },
];

export const calendarEvents = [
  { title: "Superintendent Hearing Window", audience: "District", date: "Oct 21", type: "Compliance" },
  { title: "Science Night", audience: "P.S. 118 families", date: "Oct 23", type: "Community" },
  { title: "Fractions Mastery Lock Date", audience: "Grade 4 Math", date: "Oct 24", type: "LMS" },
  { title: "Parent Conference Block", audience: "Teachers + guardians", date: "Oct 27", type: "Messaging" },
];

export const offlineSyncQueue = [
  { item: "Fractions quiz attempt", owner: "Leo", status: "Queued for upload" },
  { item: "PDF annotation packet", owner: "Maya", status: "Conflict check ready" },
  { item: "Teacher rubric draft", owner: "Prof. Miller", status: "Saved offline" },
];

export const approvalRules = [
  ["Default route", "Parent and teacher posts go to the first active school approver."],
  ["Media route", "Photos, videos, and files require Principal or Assistant Principal approval."],
  ["Sensitive route", "Discipline, health, or student-identifying content is held for administrator review."],
  ["Publishing rule", "Approved posts publish only inside the selected school tenant."],
];

export const mobileParentActions = [
  { title: "One-tap teacher message", detail: "Disabled automatically outside school work hours." },
  { title: "Digest-first notifications", detail: "Urgent alerts separate from routine activity noise." },
  { title: "Offline packet pickup", detail: "Assignments and forms can be downloaded before Wi-Fi drops." },
];

export const schoolDesigns = {
  "ps-118": { logo: "D", crest: "Discovery Owls", primary: "#0050cb", accent: "#006b5f", highlight: "#735c00", background: "#f8f9ff", voice: "Bright, curious, elementary STEM" },
  "bronx-charter": { logo: "B", crest: "Bronx Torch", primary: "#6d3f00", accent: "#005b96", highlight: "#996b00", background: "#fff9ef", voice: "Confident, college-bound, community first" },
  "albany-prep": { logo: "A", crest: "Albany Shield", primary: "#005f73", accent: "#7a3e9d", highlight: "#8a5a00", background: "#f3fbfb", voice: "Polished, private school, seminar-ready" },
  "eagle-point": { logo: "E", crest: "Eagle Point", primary: "#116149", accent: "#004e98", highlight: "#7c5c00", background: "#f4fbf6", voice: "Warm, neighborhood public school" },
  "pacific-stem": { logo: "P", crest: "Pacific Wave", primary: "#0057a8", accent: "#00756f", highlight: "#7a6100", background: "#f2f8ff", voice: "Modern, STEM lab, project-based" },
};

export const designPresets = [
  { name: "Discovery Blue", primary: "#0050cb", accent: "#006b5f", highlight: "#735c00", background: "#f8f9ff" },
  { name: "Charter Gold", primary: "#6d3f00", accent: "#005b96", highlight: "#996b00", background: "#fff9ef" },
  { name: "Prep Teal", primary: "#005f73", accent: "#7a3e9d", highlight: "#8a5a00", background: "#f3fbfb" },
  { name: "Eagle Green", primary: "#116149", accent: "#004e98", highlight: "#7c5c00", background: "#f4fbf6" },
  { name: "Pacific Blue", primary: "#0057a8", accent: "#00756f", highlight: "#7a6100", background: "#f2f8ff" },
];

export const conversations = [
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "Leo's parent",
    type: "Parents",
    unread: 0,
    online: true,
    preview: "I'll send the photo of the worksheet now...",
    messages: [
      { from: "them", text: "Hi Mr. Anderson! Leo found the fractions section tricky.", time: "13:45" },
      { from: "me", text: "Thanks for the heads up. I can send a visual practice sheet today.", time: "13:52" },
      { from: "them", text: "That would help. I'll send the photo of the worksheet now.", time: "14:02" },
    ],
  },
  {
    id: "elena",
    name: "Elena Rodriguez",
    role: "Maya's parent",
    type: "Parents",
    unread: 3,
    online: false,
    preview: "Is the field trip still happening on Friday?",
    messages: [
      { from: "them", text: "Is the field trip still happening on Friday?", time: "Tue" },
      { from: "me", text: "Yes, the permission forms are due by Thursday morning.", time: "Tue" },
    ],
  },
  {
    id: "grade-team",
    name: "Grade 4 Team",
    role: "6 teachers",
    type: "Groups",
    unread: 1,
    online: true,
    preview: "New reading groups are posted.",
    messages: [
      { from: "them", text: "New reading groups are posted for next week.", time: "09:18" },
      { from: "me", text: "Great, I updated my small-group rotation.", time: "09:26" },
    ],
  },
];

export const communityBoards = {
  "ps-118": {
    approvers: [
      { id: "principal-rivera", name: "Principal Rivera", title: "Principal", active: true },
      { id: "ap-kim", name: "Assistant Principal Kim", title: "Assistant Principal", active: true },
      { id: "dean-walker", name: "Dean Walker", title: "Dean of Students", active: false },
    ],
    published: [
      { id: "ps-post-1", author: "Ms. Henderson", role: "Teacher", type: "Announcement", audience: "All families", title: "Science Night Volunteers", body: "We need four family volunteers for Thursday's hands-on moon lab.", media: "Flyer PDF", time: "Approved today" },
      { id: "ps-post-2", author: "Sarah Jenkins", role: "Parent", type: "Resource", audience: "Grade 4", title: "Math Game Practice Link", body: "Sharing a free fractions game that helped Leo practice at home.", media: "Website link", time: "Approved yesterday" },
    ],
    pending: [
      { id: "ps-pending-1", author: "Mr. Anderson", role: "Teacher", type: "Photo", audience: "Grade 4", title: "Moon Rock Lab Photos", body: "A photo set from today's science station rotation.", media: "6 images", approverId: "principal-rivera", time: "Awaiting principal approval" },
    ],
  },
};
