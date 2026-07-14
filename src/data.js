export const roles = [
  { id: "state-admin", label: "State Admin", icon: "map", image: "/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png" },
  { id: "district-admin", label: "District Admin", icon: "building-2", image: "/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png" },
  { id: "school-admin", label: "School Admin", icon: "shield-check", image: "/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png" },
  { id: "lms", label: "LMS", icon: "layers", image: "/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png" },
  { id: "student", label: "Student", icon: "sparkles", image: "/stitch_educonnect_interactive_portal/student_portal_1/screen.png" },
  { id: "teacher", label: "Teacher", icon: "graduation-cap", image: "/stitch_educonnect_interactive_portal/teacher_dashboard/screen.png" },
  { id: "parent", label: "Parent", icon: "users", image: "/stitch_educonnect_interactive_portal/parent_dashboard/screen.png" },
  { id: "messages", label: "Messages", icon: "message-circle", image: "/stitch_educonnect_interactive_portal/communication_hub/screen.png" },
  { id: "community", label: "Community", icon: "megaphone", image: "/stitch_educonnect_interactive_portal/communication_hub/screen.png" },
];

export const state = {
  role: "state-admin",
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
  selectedSubmissionId: "sub-1",
  rosterFilter: "All",
  liveUpdates: true,
  realtimeTick: 0,
  activeCallName: "",
  gatewayMode: "demo",
  backendProvider: "Supabase",
  authProvider: "Role-based demo auth",
  offlinePackReady: false,
  workHoursOpen: true,
  emergencyOverride: false,
  currentUser: "state-admin",
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
  lessonBuilderOpen: false,
  lessonDraft: null,
  lessonFilter: "All",
  lessonPreviewId: "",
  activeStudentLessonId: "lesson-moon-phases",
  lessonProgress: {},
  activeAssignmentId: "essay",
  assignmentFilter: "All",
  studentNotes: {},
  bookmarkedLessons: [],
  fontScale: "Normal",
  dyslexiaFriendly: false,
  reducedMotion: false,
  language: "English",
  notificationPreferences: { email: true, sms: false, push: true, dueDays: 2, missingWork: true, gradeReturned: true },
  impersonatingFrom: "",
  pwaInstalled: false,
  activeOperationsTab: "tenants",
};

export const userProfiles = [
  { id: "global-admin", label: "Global Test Admin", role: "Global Admin", landing: "state-admin", scope: "state", stateId: "ny", permissions: ["global-access", "manage-tenants", "approve-posts", "emergency", "lms", "teacher-tools", "message", "manage-users", "view-compliance", "submit-post", "student-missions"] },
  { id: "state-admin", label: "NYS State Admin", role: "State Admin", landing: "state-admin", scope: "state", stateId: "ny", permissions: ["manage-tenants", "approve-posts", "emergency", "lms", "teacher-tools", "message", "manage-users", "view-compliance"] },
  { id: "district-admin", label: "District Admin", role: "District Admin", landing: "district-admin", scope: "district", stateId: "ny", districtId: "nyc-doe", permissions: ["manage-tenants", "approve-posts", "emergency", "lms", "teacher-tools", "message", "manage-users", "view-compliance"] },
  { id: "school-admin", label: "School Admin", role: "School Admin", landing: "school-admin", scope: "school", stateId: "ny", districtId: "nyc-doe", schoolId: "ps-118", permissions: ["approve-posts", "emergency", "lms", "teacher-tools", "message", "manage-users", "view-compliance"] },
  { id: "teacher", label: "Demo Teacher", role: "Teacher", landing: "teacher", scope: "school", stateId: "ny", districtId: "nyc-doe", schoolId: "ps-118", permissions: ["lms", "teacher-tools", "message", "submit-post"] },
  { id: "student", label: "Demo Learner", role: "Student", landing: "student", scope: "student", stateId: "ny", districtId: "nyc-doe", schoolId: "ps-118", studentId: "learner-1", permissions: ["student-missions"] },
  { id: "parent", label: "Demo Guardian", role: "Parent", landing: "parent", scope: "guardian", stateId: "ny", districtId: "nyc-doe", schoolId: "ps-118", studentIds: ["learner-1"], permissions: ["message", "submit-post"] },
];

export const permissionCatalog = [
  ["global-access", "Access every test workspace"],
  ["manage-tenants", "Manage tenants"],
  ["manage-users", "Manage users"],
  ["view-compliance", "View compliance"],
  ["approve-posts", "Approve posts"],
  ["emergency", "Emergency override"],
  ["lms", "Manage LMS"],
  ["teacher-tools", "Teacher tools"],
  ["message", "Messaging"],
  ["submit-post", "Submit posts"],
  ["student-missions", "Student missions"],
];

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
          { id: "ps-118", name: "P.S. 118 Discovery Academy", category: "Public", students: 684, staff: 78, status: "Active", subdomain: "ps118", plan: "District Core", modules: ["SIS", "LMS", "Messaging", "Family Portal"], storage: 64, uptime: "99.98%", theme: "Discovery Blue", isolation: "Dedicated tenant database", avgGrade: "88.4%", attendance: "94.2%", messages: "3 pending", studentPoints: 1240, studentName: "Demo Learner", guardianName: "Demo Guardian", learnerName: "Demo Learner", workHours: "Mon-Fri, 8:00 AM-4:30 PM", afterHours: "Messages are held until the next work day" },
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

export const rosterRecords = [
  { id: "stu-1", student: "Demo Learner 1", guardian: "Demo Guardian 1", teacher: "Demo Teacher", className: "English Literature", grade: 91, attendance: 98, accommodations: "Visual vocabulary cards", status: "Active" },
  { id: "stu-2", student: "Demo Learner 2", guardian: "Demo Guardian 2", teacher: "Demo Teacher", className: "Creative Writing", grade: 88, attendance: 94, accommodations: "Extended quiz time", status: "Active" },
  { id: "stu-3", student: "Demo Learner 3", guardian: "Demo Guardian 3", teacher: "Demo Teacher", className: "English Literature", grade: 82, attendance: 91, accommodations: "Reading support", status: "Watch" },
  { id: "stu-4", student: "Demo Learner 4", guardian: "Demo Guardian 4", teacher: "Demo Teacher", className: "Creative Writing", grade: 96, attendance: 99, accommodations: "None", status: "Active" },
];

export const gradebookSubmissions = [
  { id: "sub-1", student: "Demo Learner 1", assignment: "Fractions Mastery Check", status: "Submitted", score: 88, rubric: [["Concepts", 4], ["Accuracy", 3], ["Explanation", 4], ["Neatness", 3]], comment: "Strong reasoning. Recheck mixed-number conversions." },
  { id: "sub-2", student: "Demo Learner 2", assignment: "Great Depression Essay", status: "Needs review", score: 74, rubric: [["Thesis", 3], ["Evidence", 3], ["Organization", 2], ["Conventions", 4]], comment: "Good evidence. Add a clearer argument in the introduction." },
  { id: "sub-3", student: "Demo Learner 3", assignment: "Grammar Quiz - Week 5", status: "Missing", score: 0, rubric: [["Completion", 0], ["Accuracy", 0], ["Timeliness", 0]], comment: "Family reminder queued." },
];

export const activityFeed = [
  ["Demo Learner 3", "finished reading The Great Gatsby", "15 minutes ago", "Lit 101"],
  ["Demo Learner 4", "submitted Grammar Quiz - Week 5", "42 minutes ago", "Creative Writing"],
  ["Marcus Thorne", "posted in the discussion board", "2 hours ago", "Shakespeare"],
];

export const deadlines = [
  { title: "History: Great Depression Essay", meta: "Due tomorrow, 11:59 PM", urgent: true },
  { title: "Science: Water Cycle Model", meta: "Due Thursday", urgent: false },
  { title: "Math: Quadratic Equations Quiz", meta: "Due Sunday", urgent: false },
];

export const lmsAssignments = [
  { id: "fractions", title: "Fractions Mastery Check", className: "Basic English", type: "Automated quiz", instructions: "Complete the mastery check and show your reasoning.", rubric: "4-domain rubric", analytics: 82, dueDate: "2026-10-24", points: 20, status: "Published", allowResubmit: true, maxAttempts: 2, lockDate: "Oct 24, 8:00 PM", exception: "Maya R. +24h", attachments: [] },
  { id: "essay", title: "Great Depression Essay", className: "English Literature", type: "Writing task", instructions: "Write a supported argument using at least three pieces of evidence from the unit.", rubric: "Argument + evidence rubric", analytics: 74, dueDate: "2026-10-28", points: 100, status: "Published", allowResubmit: true, maxAttempts: 3, lockDate: "Oct 28, 11:59 PM", exception: "None", attachments: [] },
];

export const lmsSubmissions = [
  { id: "work-essay-demo", assignmentId: "essay", studentId: "student", student: "Demo Learner", response: "The New Deal changed the federal government's role by expanding relief and recovery programs.", attachments: [], status: "Draft", attempt: 1, submittedAt: "", score: null, feedback: "", returnedAt: "" },
];

export const questionBank = [
  { id: "qb-claim", subject: "English Language Arts", standard: "CCSS.ELA-LITERACY.W.4.1", questionType: "Multiple choice", question: "Which statement is the strongest claim?", options: ["School is interesting.", "Schools should provide daily reading time because it improves fluency and comprehension.", "Many students read.", "Books have pages."], correctAnswer: 1, points: 5, feedback: "A strong claim is specific and supported by a clear reason." },
  { id: "qb-moon", subject: "Science", standard: "NGSS 5-ESS1-1", questionType: "True or false", question: "The Moon produces its own visible light.", options: ["True", "False", "", ""], correctAnswer: 1, points: 5, feedback: "The Moon reflects sunlight." },
  { id: "qb-fraction", subject: "Math", standard: "CCSS.MATH.CONTENT.4.NF.A.1", questionType: "Short answer", question: "Write an equivalent fraction for 1/2.", options: ["2/4", "", "", ""], correctAnswer: 0, points: 5, feedback: "Multiplying the numerator and denominator by the same number creates an equivalent fraction." },
];

export const curriculumCourses = [
  { id: "course-ela-4", title: "Grade 4 English Language Arts", subject: "English Language Arts", grade: "4", className: "English Literature", standards: ["CCSS.ELA-LITERACY.RL.4.1", "CCSS.ELA-LITERACY.W.4.1"], units: [
    { id: "unit-stories", title: "Stories and Perspective", description: "Analyze characters, point of view, and evidence.", lessonIds: ["lesson-story-elements"], assignmentIds: [] },
    { id: "unit-arguments", title: "Claims and Evidence", description: "Build clear claims supported by relevant evidence.", lessonIds: [], assignmentIds: ["essay"] },
  ] },
  { id: "course-science-4", title: "Grade 4 Earth and Space Science", subject: "Science", grade: "4", className: "Basic English", standards: ["NGSS 5-ESS1-1"], units: [
    { id: "unit-moon", title: "Earth and Moon Systems", description: "Observe patterns in the Moon's appearance.", lessonIds: ["lesson-moon-phases"], assignmentIds: [] },
  ] },
];

export const lmsLessons = [
  {
    id: "lesson-moon-phases",
    title: "Moon Phases Explorer",
    subject: "Science",
    className: "English Literature",
    summary: "Explore why the Moon appears to change shape and check your understanding.",
    status: "Published",
    visibility: "Students and families",
    dueDate: "2026-10-24",
    estimatedMinutes: 35,
    points: 20,
    allowLate: true,
    requireOrder: true,
    updatedAt: "Today",
    blocks: [
      { id: "moon-intro", type: "text", title: "Look up at the Moon", body: "The Moon does not make its own light. As it travels around Earth, sunlight illuminates different portions that we can see." },
      { id: "moon-video", type: "media", mediaType: "Video", title: "Moon phases video", url: "https://www.youtube.com/watch?v=3f_21N3wcX8", caption: "Watch the short overview, then continue to the knowledge check." },
      { id: "moon-quiz", type: "quiz", title: "Knowledge check", question: "What causes the phases of the Moon?", questionType: "Multiple choice", options: ["Earth's shadow always covers the Moon", "We see different sunlit portions as the Moon orbits Earth", "Clouds change the Moon's shape", "The Moon produces different amounts of light"], correctAnswer: 1, feedback: "The Moon's orbit changes how much of its sunlit half is visible from Earth.", points: 10, required: true },
    ],
  },
  {
    id: "lesson-story-elements",
    title: "Building a Strong Story",
    subject: "English Language Arts",
    className: "Creative Writing",
    summary: "Use character, setting, conflict, and resolution to plan an original story.",
    status: "Draft",
    visibility: "Teacher only",
    dueDate: "2026-10-28",
    estimatedMinutes: 45,
    points: 25,
    allowLate: false,
    requireOrder: false,
    updatedAt: "Yesterday",
    blocks: [
      { id: "story-intro", type: "text", title: "Four story building blocks", body: "A memorable story gives readers a character to care about, a setting they can picture, a conflict that creates tension, and a resolution that shows change." },
      { id: "story-link", type: "media", mediaType: "Link", title: "Story planner", url: "https://www.readwritethink.org/", caption: "Open the planning resource for additional examples." },
    ],
  },
];

export const lmsFiles = [
  { name: "Water Cycle Worksheet.docx", status: "Converted to editable lesson copy", type: "Word" },
  { name: "Moon Lab Packet.pdf", status: "OCR indexed + annotation ready", type: "PDF" },
  { name: "Parent Signature Form.pdf", status: "Fillable fields detected", type: "PDF" },
];

export const lmsAccounts = [
  { id: "teacher-school", name: "Demo Teacher", context: "Teacher at selected school", active: true },
  { id: "parent-school", name: "Demo Guardian", context: "Parent profile", active: false },
  { id: "district-admin", name: "District Admin", context: "District-wide oversight", active: false },
];

export const lmsNotifications = [
  { id: "notice-lock-window", level: "Urgent", title: "Locked submission window closes tonight", target: "Grade 4 Math", channel: "Dashboard + SMS", read: false },
  { id: "notice-rubrics", level: "Action", title: "3 rubric scores need review", target: "English Literature", channel: "Teacher inbox", read: false },
  { id: "notice-family-comment", level: "FYI", title: "New family comment on community board", target: "All families", channel: "Digest", read: false },
];

export const realtimeEvents = [
  { id: "live-1", type: "Roster", title: "Demo Learner 1 attendance synced", detail: "SIS updated attendance to 98%.", time: "Live now" },
  { id: "live-2", type: "LMS", title: "Rubric queue refreshed", detail: "3 submissions are ready for review.", time: "Live now" },
  { id: "live-3", type: "Messages", title: "Parent digest prepared", detail: "Routine updates will send during the next work window.", time: "Live now" },
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

export const complianceMetrics = [
  { label: "FERPA access reviews", value: "12", status: "Due this month", detail: "Confirm staff access for student records." },
  { label: "Data export logs", value: "4", status: "Reviewed", detail: "Gradebook and roster exports are audit logged." },
  { label: "Media approvals", value: "1", status: "Pending", detail: "Photo content waiting for administrator approval." },
  { label: "After-hours blocks", value: "7", status: "Protected", detail: "Messages held outside school communication windows." },
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
  { item: "Teacher rubric draft", owner: "Demo Teacher", status: "Saved offline" },
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
    name: "Demo Guardian 1",
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
    name: "Demo Guardian 2",
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
      { id: "ps-post-2", author: "Demo Guardian 1", role: "Parent", type: "Resource", audience: "Grade 4", title: "Math Game Practice Link", body: "Sharing a free fractions game that helped a learner practice at home.", media: "Website link", time: "Approved yesterday" },
    ],
    pending: [
      { id: "ps-pending-1", author: "Mr. Anderson", role: "Teacher", type: "Photo", audience: "Grade 4", title: "Moon Rock Lab Photos", body: "A photo set from today's science station rotation.", media: "6 images", approverId: "principal-rivera", time: "Awaiting principal approval" },
    ],
  },
};

export const databaseTables = [
  { name: "users", records: userProfiles.length, status: "Mapped", detail: "Role, permission, school, guardian/student links" },
  { name: "schools", records: 5, status: "Mapped", detail: "State, district, tenant URL, modules, branding" },
  { name: "classes", records: teacherClasses.length, status: "Mapped", detail: "Teacher, room, attendance, pending work" },
  { name: "students", records: rosterRecords.length, status: "Mapped", detail: "Guardian, accommodations, grades, attendance" },
  { name: "assignments", records: lmsAssignments.length, status: "Mapped", detail: "Type, rubric, lock date, exceptions" },
  { name: "lessons", records: lmsLessons.length, status: "Mapped", detail: "Content blocks, media, quizzes, publishing, and learner progress" },
  { name: "submissions", records: gradebookSubmissions.length, status: "Mapped", detail: "Rubric scores, comments, review status" },
  { name: "messages", records: conversations.length, status: "Mapped", detail: "Parent and group threads with work-hour controls" },
  { name: "community_posts", records: communityBoards["ps-118"].published.length + communityBoards["ps-118"].pending.length, status: "Mapped", detail: "Approvals, media, audience, publishing state" },
  { name: "audit_logs", records: auditLogs.length, status: "Mapped", detail: "Admin actions, exports, compliance events" },
];

export const onboardingTasks = [
  { id: "district", label: "Create district and school tenants", owner: "Admin", done: true },
  { id: "staff", label: "Invite staff accounts", owner: "Admin", done: true },
  { id: "roster", label: "Import student roster", owner: "Registrar", done: true },
  { id: "guardians", label: "Connect parent and guardian accounts", owner: "School office", done: false },
  { id: "classes", label: "Assign teachers to classes", owner: "Principal", done: true },
  { id: "launch", label: "Send launch notification", owner: "Communications", done: false },
];

export const fileUploads = [
  { id: "upload-1", name: "Moon Lab Packet.pdf", area: "LMS", size: "1.2 MB", status: "Ready for class distribution" },
  { id: "upload-2", name: "Science Night Flyer.pdf", area: "Community", size: "420 KB", status: "Waiting for approval" },
];

export const notificationDeliveryLog = [
  { id: "delivery-1", channel: "Email", audience: "Grade 4 families", status: "Queued", detail: "Science Night reminder" },
  { id: "delivery-2", channel: "SMS", audience: "Emergency contacts", status: "Ready", detail: "Emergency override test" },
  { id: "delivery-3", channel: "Push", audience: "Teachers", status: "Delivered", detail: "Rubric queue refresh" },
];

export const securityChecklist = [
  { id: "auth", label: "Role-based authentication rules", status: "Configured", done: true },
  { id: "ferpa", label: "FERPA tenant data isolation", status: "Configured", done: true },
  { id: "audit", label: "Audit log export policy", status: "Configured", done: true },
  { id: "backups", label: "Nightly database backups", status: "Needs backend provider", done: false },
  { id: "encryption", label: "Encrypted file storage", status: "Needs storage provider", done: false },
  { id: "retention", label: "Data retention schedule", status: "Drafted", done: false },
];

export const deployPipeline = [
  { step: "Build", status: "Passing", detail: "Vite production build generates static assets" },
  { step: "Tests", status: "Passing", detail: "Playwright local and live smoke tests available" },
  { step: "FTP deploy", status: "Live", detail: "educationalsystem.fieldserviceit.com is serving the app" },
  { step: "GitHub sync", status: "Connected", detail: "Backend repository deploys through Hostinger hPanel" },
];

export const productionReadiness = {
  tenantIsolation: { status: "Enforced", strategy: "School-scoped records and permission-filtered API responses", lastTest: "Today" },
  storage: { provider: "Dedicated tenant storage", quotaGb: 75, usedGb: 18.4, virusScanning: true, compression: "Media worker ready", thumbnailing: "Media worker ready" },
  domains: [
    { schoolId: "ps-118", domain: "educationalsystem.fieldserviceit.com", dns: "Verified", ssl: "Active", checkedAt: "Just now" },
    { schoolId: "bronx-charter", domain: "bronxlearning.educonnect.local", dns: "Awaiting DNS", ssl: "Pending", checkedAt: "Today" },
  ],
  enrollmentImports: [
    { id: "import-fall", schoolId: "ps-118", file: "fall-roster.csv", rows: 684, accepted: 680, needsReview: 4, status: "Completed", createdAt: "Aug 18" },
  ],
  gradebook: {
    categories: [{ name: "Assessments", weight: 40 }, { name: "Projects", weight: 30 }, { name: "Classwork", weight: 20 }, { name: "Participation", weight: 10 }],
    standards: [{ code: "CCSS.ELA-LITERACY.W.4.1", mastery: 82 }, { code: "CCSS.ELA-LITERACY.RL.4.1", mastery: 88 }, { code: "NGSS 5-ESS1-1", mastery: 79 }],
    sisExport: { status: "Ready", format: "OneRoster CSV", lastExport: "Not exported" },
  },
  gradebooks: {},
  security: {
    mfaRequired: true,
    sessionTimeoutMinutes: 60,
    loginAlerts: true,
    activeSessions: [{ id: "session-current", user: "Global Test Admin", device: "Current browser", location: "New York, US", lastActive: "Now", current: true }],
  },
  backups: { schedule: "Nightly at 2:00 AM", retentionDays: 30, lastBackup: "Today 2:00 AM", lastRestoreTest: "Passed • Today", encrypted: false },
  notifications: {
    provider: "Operational API",
    templates: [{ id: "due", name: "Assignment due reminder", channels: ["Email", "Push"], status: "Active" }, { id: "weekly", name: "Weekly family summary", channels: ["Email"], status: "Active" }],
    optOuts: 3,
  },
  accessibility: { wcagTarget: "WCAG 2.2 AA", score: 96, issues: 0, languages: ["English", "Spanish"], lastAudit: "Today" },
  monitors: [
    { service: "Education website", status: "Operational", latency: 184, uptime: "99.98%", checkedAt: "Just now" },
    { service: "Dedicated API", status: "Operational", latency: 96, uptime: "99.99%", checkedAt: "Just now" },
    { service: "File storage", status: "Operational", latency: 121, uptime: "99.97%", checkedAt: "Just now" },
    { service: "Notifications", status: "Operational", latency: 208, uptime: "99.95%", checkedAt: "Just now" },
  ],
  billing: { plan: "District Core", schools: 5, monthlyEstimate: 0, status: "Community deployment" },
};
