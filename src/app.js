import {
  AlertTriangle,
  Award,
  Bell,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Database,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Layers,
  Lock,
  Mail,
  Map,
  Megaphone,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  PenLine,
  Play,
  Plus,
  RefreshCw,
  Rocket,
  RotateCcw,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Video,
  X,
  createIcons,
} from "lucide";
import {
  roles,
  state,
  userProfiles,
  permissionCatalog,
  missions,
  tenantStates,
  governanceLevels,
  teacherClasses,
  rosterRecords,
  gradebookSubmissions,
  activityFeed,
  deadlines,
  lmsAssignments,
  lmsLessons,
  lmsSubmissions,
  questionBank,
  curriculumCourses,
  lmsFiles,
  lmsAccounts,
  lmsNotifications,
  realtimeEvents,
  databaseTables,
  onboardingTasks,
  fileUploads,
  notificationDeliveryLog,
  securityChecklist,
  deployPipeline,
  productionReadiness,
  workspaceIntegrations,
  classroomStrengths,
  tenantSettings,
  auditLogs,
  privacyControls,
  complianceMetrics,
  calendarEvents,
  offlineSyncQueue,
  approvalRules,
  mobileParentActions,
  schoolDesigns,
  designPresets,
  conversations,
  communityBoards,
} from "./dataSource.js";
import {
  applyDemoSnapshot,
  getDemoSnapshot,
  hydrateDemoState,
  hydrateMockApiState,
  persistDemoState,
  resetDemoState,
} from "./storage.js";
import { createServerBackup, getServerOperationsStatus, getServerSession, importServerEnrollment, loginServerProfile, runServerPlatformAction, scheduleServerNotification, sendServerNotificationTest, serverFileDownloadUrl, testServerRestore, updateServerMfa, uploadServerFile, verifyServerDomain } from "./mockApi.js";
import { initializeErrorReporting } from "./errorReporting.js";

initializeErrorReporting();

const app = document.querySelector("#app");
let authenticatedProfile = null;
let impersonatingAdminProfile = null;
let landingError = "";
let landingBusy = false;
let deferredInstallPrompt = null;
let generalMenuOpener = null;
let pendingMenuFocus = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
});

const translations = {
  English: { settings: "Settings", notifications: "Notifications", lessons: "Lessons", assignments: "Assignments", progress: "My Progress", saveDraft: "Save draft", submit: "Submit assignment", language: "Language", textSize: "Text size", email: "Email", push: "Push notifications", close: "Close", search: "Search resources...", signOut: "Sign out", noNotifications: "No notifications.", markRead: "Mark all read", sendTest: "Send test notification" },
  Spanish: { settings: "Configuración", notifications: "Notificaciones", lessons: "Lecciones", assignments: "Tareas", progress: "Mi progreso", saveDraft: "Guardar borrador", submit: "Entregar tarea", language: "Idioma", textSize: "Tamaño del texto", email: "Correo electrónico", push: "Notificaciones push", close: "Cerrar", search: "Buscar recursos...", signOut: "Cerrar sesión", noNotifications: "No hay notificaciones.", markRead: "Marcar todo como leído", sendTest: "Enviar notificación de prueba" },
  French: { settings: "Paramètres", notifications: "Notifications", lessons: "Leçons", assignments: "Travaux", progress: "Mes progrès", saveDraft: "Enregistrer le brouillon", submit: "Remettre le travail", language: "Langue", textSize: "Taille du texte", email: "Courriel", push: "Notifications push", close: "Fermer", search: "Rechercher des ressources...", signOut: "Se déconnecter", noNotifications: "Aucune notification.", markRead: "Tout marquer comme lu", sendTest: "Envoyer une notification test" },
  "Haitian Creole": { settings: "Anviwònman", notifications: "Notifikasyon", lessons: "Leson", assignments: "Devwa", progress: "Pwogrè mwen", saveDraft: "Sove bouyon", submit: "Voye devwa", language: "Lang", textSize: "Gwosè tèks", email: "Imèl", push: "Notifikasyon push", close: "Fèmen", search: "Chèche resous...", signOut: "Dekonekte", noNotifications: "Pa gen notifikasyon.", markRead: "Make tout kòm li", sendTest: "Voye notifikasyon tès" },
};

function t(key) {
  return translations[state.language]?.[key] || translations.English[key] || key;
}

const tourSteps = [
  { title: "Choose a role", body: "Use the demo login panel to switch between state, district, school, teacher, parent, and student access.", role: "state-admin" },
  { title: "Create learning work", body: "Teachers can author multimedia lessons, build quizzes, publish assignments, and prepare offline packs in the LMS.", role: "lms" },
  { title: "Communicate safely", body: "Messaging respects school work hours, with emergency override reserved for admins.", role: "messages" },
  { title: "Approve community posts", body: "Admins can approve posts before they publish to the school community board.", role: "community" },
];

const lucideIcons = {
  AlertTriangle,
  Award,
  Bell,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Database,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Layers,
  Lock,
  Mail,
  Map,
  Megaphone,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  PenLine,
  Play,
  Plus,
  RefreshCw,
  Rocket,
  RotateCcw,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Video,
  X,
};

function icon(name) {
  return `<i class="app-icon" data-lucide="${name}" data-icon="${name}" aria-hidden="true"></i>`;
}

function initials(name) {
  return name.split(" ").map((part) => part[0]).slice(0, 2).join("");
}

function progress(value) {
  const normalized = Math.max(0, Math.min(100, Number(value) || 0));
  return `<div class="progress" role="progressbar" aria-label="${normalized}% complete" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${normalized}"><span style="width:${normalized}%"></span></div>`;
}

function statCard(label, value, iconName, tone) {
  return `<article class="stat-card ${tone}"><div class="stat-icon">${icon(iconName)}</div><span>${label}</span><strong>${value}</strong></article>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function safeExternalUrl(value) {
  try {
    const url = new URL(String(value || ""));
    return ["http:", "https:"].includes(url.protocol) ? escapeHtml(url.href) : "";
  } catch {
    return "";
  }
}

function lessonBlock(type, index = 0) {
  const id = `block-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`;
  if (type === "quiz") return { id, type, title: "Knowledge check", question: "", questionType: "Multiple choice", options: ["", "", "", ""], pairs: [{ left: "", right: "" }, { left: "", right: "" }], correctAnswer: 0, feedback: "", points: 5, required: true, timeLimit: 0, maxAttempts: 2, randomize: false, showAnswers: true, partialCredit: true, questionPool: "Current lesson", accommodationMultiplier: 1.5 };
  if (type === "media") return { id, type, mediaType: "Video", title: "Learning media", url: "", caption: "" };
  return { id, type: "text", title: "Lesson section", body: "" };
}

function newLessonDraft(lesson = null) {
  if (lesson) return structuredClone(lesson);
  return {
    id: "",
    title: "",
    subject: "English Language Arts",
    className: state.selectedClass === "All" ? teacherClasses[0].name : state.selectedClass,
    summary: "",
    status: "Draft",
    visibility: "Teacher only",
    dueDate: "",
    estimatedMinutes: 30,
    points: 20,
    allowLate: true,
    requireOrder: true,
    updatedAt: "Just now",
    blocks: [lessonBlock("text")],
  };
}

function announce(message) {
  state.toast = message;
  render();
}

function addAudit(event, scope = selectedSchoolRecord().name, actor = activeUser().label) {
  auditLogs.unshift({ actor, event, scope, time: "Just now" });
}

function pushNotification(level, title, target = selectedSchoolRecord().name, channel = "Live dashboard") {
  lmsNotifications.unshift({
    id: `notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    level,
    title,
    target,
    channel,
    read: false,
  });
}

function pushRealtimeEvent(type, title, detail) {
  realtimeEvents.unshift({
    id: `live-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type,
    title,
    detail,
    time: "Just now",
  });
  if (realtimeEvents.length > 8) realtimeEvents.length = 8;
}

function unreadNotifications() {
  return lmsNotifications.filter((notice) => !notice.read).length;
}

function simulateLiveUpdate(source = "manual") {
  const school = selectedSchoolRecord();
  const updates = [
    () => {
      const record = rosterRecords[state.realtimeTick % rosterRecords.length];
      record.attendance = Math.min(100, record.attendance + 1);
      activityFeed.unshift([record.student, "attendance synced from SIS", "Just now", record.className]);
      pushRealtimeEvent("Roster", `${record.student} synced`, `Attendance is now ${record.attendance}% in ${record.className}.`);
      pushNotification("FYI", `${record.student} roster sync completed`, record.className, "SIS");
    },
    () => {
      const submission = gradebookSubmissions[state.realtimeTick % gradebookSubmissions.length];
      submission.status = submission.status === "Missing" ? "Needs review" : submission.status;
      pushRealtimeEvent("LMS", `${submission.student} gradebook updated`, `${submission.assignment} is ${submission.status.toLowerCase()}.`);
      pushNotification("Action", `${submission.student} submission needs attention`, submission.assignment, "Teacher inbox");
    },
    () => {
      const active = conversations.find((conversation) => conversation.id === state.activeConversationId) || conversations[0];
      active.messages.push({ from: "them", text: `Live ${school.name} update received.`, time: "Now" });
      active.preview = "Live school update received.";
      active.unread = (active.unread || 0) + 1;
      pushRealtimeEvent("Messages", `New message from ${active.name}`, "Conversation preview and unread count updated.");
      pushNotification("Urgent", `New message from ${active.name}`, school.name, "Messages");
    },
  ];
  updates[state.realtimeTick % updates.length]();
  state.realtimeTick += 1;
  addAudit(`Processed ${source} live update`, school.name, "Realtime service");
  state.toast = "Live app data updated.";
  render();
}

function activeUser() {
  return authenticatedProfile || userProfiles.find((profile) => profile.id === state.currentUser) || userProfiles[0];
}

function isProductionHost() {
  return !["localhost", "127.0.0.1", "0.0.0.0"].includes(window.location.hostname);
}

function allowedRoleIds(profile = activeUser()) {
  if (!profile) return [];
  if ((profile.permissions || []).includes("global-access")) return roles.map((role) => role.id);
  const allowed = new Set([profile.landing]);
  const permissions = new Set(profile.permissions || []);
  if (profile.scope === "state") allowed.add("state-admin");
  if (["state", "district"].includes(profile.scope)) allowed.add("district-admin");
  if (["state", "district", "school"].includes(profile.scope) && /Admin$/i.test(profile.role || "")) allowed.add("school-admin");
  if (permissions.has("lms")) allowed.add("lms");
  if (permissions.has("teacher-tools")) allowed.add("teacher");
  if (permissions.has("message")) allowed.add("messages");
  if (permissions.has("approve-posts") || permissions.has("submit-post")) allowed.add("community");
  if (permissions.has("student-missions")) allowed.add("student");
  return roles.map((role) => role.id).filter((id) => allowed.has(id));
}

function visibleRoles() {
  const allowed = new Set(allowedRoleIds());
  return roles.filter((role) => allowed.has(role.id));
}

function signInProfile(profile, messagePrefix = "Signed in as") {
  if (!profile) return;
  const localProfile = userProfiles.find((item) => item.id === profile.id);
  authenticatedProfile = { ...localProfile, ...profile };
  state.currentUser = authenticatedProfile.id;
  state.toast = `${messagePrefix} ${authenticatedProfile.label}.`;
  addAudit("Signed in", selectedSchoolRecord().name, authenticatedProfile.label);
  const landing = allowedRoleIds(authenticatedProfile).includes(authenticatedProfile.landing)
    ? authenticatedProfile.landing
    : allowedRoleIds(authenticatedProfile)[0];
  setActiveRole(landing || "student");
}

function impersonateProfile(profileId) {
  if (!can("global-access")) return;
  const profile = userProfiles.find((item) => item.id === profileId);
  if (!profile || profile.id === activeUser().id) return;
  impersonatingAdminProfile = { ...authenticatedProfile };
  state.impersonatingFrom = authenticatedProfile.id;
  authenticatedProfile = { ...profile };
  state.currentUser = profile.id;
  state.toast = `Previewing the application as ${profile.label}.`;
  addAudit(`Started role preview as ${profile.label}`, selectedSchoolRecord().name, impersonatingAdminProfile.label);
  setActiveRole(profile.landing || allowedRoleIds(profile)[0] || "student");
}

function stopImpersonating() {
  if (!impersonatingAdminProfile) return;
  authenticatedProfile = impersonatingAdminProfile;
  impersonatingAdminProfile = null;
  state.currentUser = authenticatedProfile.id;
  state.impersonatingFrom = "";
  state.toast = "Returned to Global Admin.";
  setActiveRole("state-admin");
}

function signOut() {
  const label = activeUser().label;
  localStorage.removeItem("educonnect-session-token");
  authenticatedProfile = null;
  impersonatingAdminProfile = null;
  state.impersonatingFrom = "";
  state.toast = "";
  state.searchTerm = "";
  landingError = "";
  history.replaceState(null, "", window.location.pathname);
  render();
  requestAnimationFrame(() => document.querySelector("#landing-identifier")?.focus());
  console.info(`${label} signed out`);
}

function can(permission) {
  return activeUser().permissions.includes(permission);
}

function permissionAttrs(permission, label = "This role cannot use that action") {
  return can(permission) ? "" : `disabled aria-disabled="true" title="${label}"`;
}

function permissionNotice(permission, body) {
  return can(permission) ? "" : `<div class="permission-note">${icon("lock")} ${body}</div>`;
}

const generalMenuCatalog = [
  {
    id: "administration",
    label: "Administration",
    icon: "shield-check",
    items: [
      { id: "state-overview", label: "State overview", role: "state-admin", icon: "map" },
      { id: "role-control-center", label: "Role Control Center", role: "state-admin", icon: "users", permission: "manage-users" },
      { id: "unified-school-os", label: "Unified School Operating System", role: "state-admin", icon: "layers" },
      { id: "district-oversight", label: "District oversight", role: "state-admin", icon: "building-2" },
      { id: "compliance-dashboard", label: "Privacy & compliance", role: "state-admin", icon: "lock", permission: "view-compliance" },
      { id: "audit-trail", label: "State audit trail", role: "state-admin", icon: "file-text" },
      { id: "statewide-calendar", label: "Statewide calendar", role: "state-admin", icon: "calendar-days" },
      { id: "governance-chain", label: "Governance chain", role: "state-admin", icon: "layers" },
      { id: "realtime-operations", label: "Realtime operations", role: "state-admin", icon: "refresh-cw" },
      { id: "launch-control", label: "Launch Control", role: "state-admin", icon: "rocket", permission: "manage-tenants" },
      { id: "district-overview", label: "District overview", role: "district-admin", icon: "building-2" },
      { id: "district-scope", label: "District scope", role: "district-admin", icon: "map" },
      { id: "district-schools", label: "Schools in this district", role: "district-admin", icon: "graduation-cap" },
      { id: "district-unified-school-os", label: "District operating system", role: "district-admin", target: "unified-school-os", icon: "layers" },
      { id: "district-realtime-operations", label: "District realtime operations", role: "district-admin", target: "realtime-operations", icon: "refresh-cw" },
      { id: "district-audit-trail", label: "District audit trail", role: "district-admin", target: "audit-trail", icon: "file-text" },
      { id: "school-overview", label: "School overview", role: "school-admin", icon: "shield-check" },
      { id: "school-customization", label: "School customization", role: "school-admin", icon: "settings", permission: "manage-users" },
      { id: "enrollment-center", label: "Enrollment Center", role: "school-admin", icon: "users" },
      { id: "school-success-center", label: "Academic year & privacy", role: "school-admin", icon: "calendar-days" },
      { id: "intervention-center", label: "Intervention Center", role: "school-admin", icon: "trending-up" },
      { id: "campus-tenant", label: "Campus tenant", role: "school-admin", icon: "database" },
      { id: "school-operations", label: "School operations", role: "school-admin", icon: "layers" },
      { id: "school-compliance", label: "School privacy & compliance", role: "school-admin", target: "compliance-dashboard", icon: "lock", permission: "view-compliance" },
      { id: "school-realtime-operations", label: "School realtime operations", role: "school-admin", target: "realtime-operations", icon: "refresh-cw" },
    ],
  },
  {
    id: "teaching-learning",
    label: "Teaching & learning",
    icon: "book-open",
    items: [
      { id: "lms-overview", label: "LMS overview & offline pack", role: "lms", icon: "book-open" },
      { id: "lesson-library", label: "Lesson Library", role: "lms", icon: "book-open" },
      { id: "background-services", label: "Background services", role: "lms", icon: "refresh-cw" },
      { id: "simple-classroom", label: "Simple classroom experience", role: "lms", icon: "sparkles" },
      { id: "zero-cost-core", label: "Zero-cost core", role: "lms", icon: "award" },
      { id: "advanced-grading", label: "Advanced grading", role: "lms", icon: "clipboard-check" },
      { id: "gradebook-detail", label: "Gradebook detail", role: "lms", icon: "file-text" },
      { id: "deadline-controls", label: "Deadline controls", role: "lms", icon: "clock" },
      { id: "account-context", label: "Account context", role: "lms", icon: "users" },
      { id: "paperless-workflow", label: "Paperless workflow", role: "lms", icon: "send" },
      { id: "lms-guardrails", label: "Automated guardrails", role: "lms", icon: "shield-check" },
      { id: "offline-learning", label: "Offline learning", role: "lms", icon: "smartphone" },
      { id: "learning-privacy", label: "Learning privacy", role: "lms", icon: "lock" },
      { id: "teacher-overview", label: "Teacher overview & create lesson", role: "teacher", icon: "graduation-cap", permission: "teacher-tools" },
      { id: "learning-operations", label: "Learning Operations & grading", role: "teacher", icon: "clipboard-check", permission: "teacher-tools" },
      { id: "teaching-calendar", label: "Teaching calendar", role: "teacher", icon: "calendar-days", permission: "teacher-tools" },
      { id: "automated-reminders", label: "Automated reminders", role: "teacher", icon: "bell", permission: "teacher-tools" },
      { id: "standards-gradebook", label: "Standards gradebook", role: "teacher", icon: "file-text", permission: "teacher-tools" },
      { id: "teacher-intervention-center", label: "Teacher intervention center", role: "teacher", target: "intervention-center", icon: "trending-up", permission: "teacher-tools" },
      { id: "create-lesson", label: "Create a lesson", role: "teacher", action: "create-lesson", icon: "plus", permission: "teacher-tools" },
      { id: "lesson-studio", label: "Lesson Studio library", role: "teacher", icon: "pen-line", permission: "teacher-tools" },
      { id: "active-classes", label: "Active classes", role: "teacher", icon: "users", permission: "teacher-tools" },
      { id: "quick-assignment", label: "Quick assignment", role: "teacher", icon: "plus", permission: "teacher-tools" },
      { id: "student-activity", label: "Recent student activity", role: "teacher", icon: "refresh-cw", permission: "teacher-tools" },
      { id: "curriculum-planner", label: "Courses & units", role: "teacher", icon: "map", permission: "teacher-tools" },
      { id: "grading-todo", label: "Grading to-do", role: "teacher", icon: "clipboard-check", permission: "teacher-tools" },
      { id: "teacher-roster", label: "Roster & enrollments", role: "teacher", icon: "users", permission: "teacher-tools" },
      { id: "student-overview", label: "Student home", role: "student", icon: "sparkles", permission: "student-missions" },
      { id: "student-progress", label: "My Progress", role: "student", icon: "trending-up", permission: "student-missions" },
      { id: "student-assignments", label: "Submit my work", role: "student", icon: "send", permission: "student-missions" },
      { id: "student-lessons", label: "My lessons, quizzes & media", role: "student", icon: "book-open", permission: "student-missions" },
      { id: "student-missions", label: "My Missions", role: "student", icon: "rocket", permission: "student-missions" },
      { id: "student-awards", label: "Awards", role: "student", icon: "award", permission: "student-missions" },
      { id: "parent-overview", label: "Family home", role: "parent", icon: "users" },
      { id: "family-summary", label: "Weekly family summary", role: "parent", icon: "file-text" },
      { id: "teacher-note", label: "Teacher note", role: "parent", icon: "message-circle" },
      { id: "family-deadlines", label: "Upcoming deadlines", role: "parent", icon: "clock" },
      { id: "mobile-parent", label: "Mobile parent tools", role: "parent", icon: "smartphone" },
      { id: "subject-snapshot", label: "Subject snapshot", role: "parent", icon: "trending-up" },
    ],
  },
  {
    id: "communication",
    label: "Communication",
    icon: "message-circle",
    items: [
      { id: "messages-overview", label: "Conversation inbox", role: "messages", target: "conversation-list", icon: "message-circle", permission: "message" },
      { id: "chat-panel", label: "Active chat & video call", role: "messages", icon: "video", permission: "message" },
      { id: "communication-hours", label: "Communication hours", role: "messages", icon: "clock", permission: "message" },
      { id: "emergency-override", label: "Emergency override", role: "messages", icon: "alert-triangle", permission: "emergency" },
      { id: "community-overview", label: "Community overview", role: "community", icon: "megaphone", anyPermissions: ["submit-post", "approve-posts"] },
      { id: "community-create-post", label: "Create community post", role: "community", icon: "pen-line", anyPermissions: ["submit-post", "approve-posts"] },
      { id: "community-approvers", label: "Assigned approvers", role: "community", icon: "users", anyPermissions: ["approve-posts", "manage-users"] },
      { id: "community-approval-queue", label: "Approval queue", role: "community", icon: "shield-check", permission: "approve-posts" },
      { id: "community-published", label: "Published community board", role: "community", icon: "megaphone", anyPermissions: ["submit-post", "approve-posts"] },
      { id: "community-rules", label: "Posting rules", role: "community", icon: "lock", anyPermissions: ["submit-post", "approve-posts"] },
      { id: "community-workflow", label: "Approval workflow rules", role: "community", icon: "layers", permission: "approve-posts" },
    ],
  },
  {
    id: "platform-operations",
    label: "Platform operations",
    icon: "database",
    items: [
      { id: "login-gateway", label: "Login gateway", role: "state-admin", icon: "lock", permission: "manage-tenants" },
      { id: "database-blueprint", label: "Database blueprint", role: "state-admin", icon: "database", permission: "manage-tenants" },
      { id: "admin-onboarding", label: "Admin onboarding", role: "state-admin", icon: "users", permission: "manage-tenants" },
      { id: "platform-file-uploads", label: "File uploads", role: "state-admin", icon: "paperclip", permission: "manage-tenants" },
      { id: "notification-delivery", label: "Notification delivery", role: "state-admin", icon: "bell", permission: "manage-tenants" },
      { id: "security-checklist", label: "Privacy & security checklist", role: "state-admin", icon: "shield-check", permission: "manage-tenants" },
      { id: "deployment-pipeline", label: "Deployment pipeline", role: "state-admin", icon: "rocket", permission: "manage-tenants" },
      { id: "operations-tenants", label: "Tenants & domains", role: "state-admin", target: "platform-operations-center", tab: "tenants", icon: "building-2", permission: "manage-tenants" },
      { id: "operations-security", label: "Security & backups", role: "state-admin", target: "platform-operations-center", tab: "security", icon: "lock", permission: "manage-tenants" },
      { id: "operations-notifications", label: "Notification operations", role: "state-admin", target: "platform-operations-center", tab: "notifications", icon: "bell", permission: "manage-tenants" },
      { id: "operations-services", label: "Connected services & SIS", role: "state-admin", target: "platform-operations-center", tab: "services", icon: "layers", permission: "manage-tenants" },
      { id: "operations-jobs", label: "Jobs & recovery", role: "state-admin", target: "platform-operations-center", tab: "jobs", icon: "refresh-cw", permission: "manage-tenants" },
      { id: "operations-monitoring", label: "Monitoring & analytics", role: "state-admin", target: "platform-operations-center", tab: "monitoring", icon: "trending-up", permission: "manage-tenants" },
      { id: "operations-launch", label: "Launch & review", role: "state-admin", target: "platform-operations-center", tab: "launch", icon: "rocket", permission: "manage-tenants" },
    ],
  },
  {
    id: "account",
    label: "Account & help",
    icon: "settings",
    items: [
      { id: "account-dashboard", label: "My dashboard", action: "dashboard", icon: "layers" },
      { id: "account-search", label: "Global search", action: "search", icon: "search" },
      { id: "account-notifications", label: "Notifications", action: "notifications", icon: "bell" },
      { id: "account-settings", label: "Settings, accessibility & data", action: "settings", icon: "settings" },
      { id: "account-tour", label: "Guided walkthrough", action: "tour", icon: "play", permission: "global-access" },
      { id: "account-sign-out", label: "Sign out", action: "sign-out", icon: "x" },
    ],
  },
];

function menuItemAllowed(item) {
  const allowedRoles = allowedRoleIds();
  if (item.role && !allowedRoles.includes(item.role)) return false;
  if (item.permission && !can(item.permission)) return false;
  if (item.anyPermissions && !item.anyPermissions.some((permission) => can(permission))) return false;
  return true;
}

function generalMenuGroups() {
  const workspaces = visibleRoles().map((role) => ({
    id: `workspace-${role.id}`,
    label: role.label,
    role: role.id,
    icon: role.icon,
    workspace: true,
  }));
  return [
    { id: "workspaces", label: "Workspaces", icon: "layers", items: workspaces },
    ...generalMenuCatalog,
  ].map((group) => ({ ...group, items: group.items.filter(menuItemAllowed) })).filter((group) => group.items.length);
}

function findMenuDestination(roleId, functionId) {
  if (!roleId || !functionId) return null;
  return generalMenuGroups().flatMap((group) => group.items).find((item) => item.role === roleId && item.id === functionId && !item.workspace) || null;
}

function hashRoute() {
  const requested = window.location.hash.replace(/^#/, "");
  const [rawRole, rawFunction = ""] = requested.split("/");
  const role = rawRole === "platform" ? "state-admin" : rawRole;
  return {
    role: roles.some((item) => item.id === role) ? role : "",
    functionId: rawFunction,
  };
}

function validateDemoSnapshot(snapshot) {
  const errors = [];
  if (!snapshot || typeof snapshot !== "object") errors.push("File must contain a JSON object.");
  if (!snapshot?.state || typeof snapshot.state !== "object") errors.push("Missing state object.");
  if (!Array.isArray(snapshot?.tenantStates)) errors.push("Missing tenantStates array.");
  if (!Array.isArray(snapshot?.conversations)) errors.push("Missing conversations array.");
  if (!snapshot?.communityBoards || typeof snapshot.communityBoards !== "object") errors.push("Missing communityBoards object.");
  return errors;
}

function focusMenuDestination(destination) {
  if (!destination) return;
  const target = document.querySelector(`#${CSS.escape(destination.target || destination.id)}`);
  if (!target) return;
  target.scrollIntoView({ behavior: state.reducedMotion ? "auto" : "smooth", block: "start" });
  const focusTarget = target.querySelector("h2, h3, h4") || target;
  if (!focusTarget.hasAttribute("tabindex")) focusTarget.setAttribute("tabindex", "-1");
  focusTarget.focus({ preventScroll: true });
}

function setActiveRole(roleId, pushRoute = true, functionId = "") {
  if (roleId === "platform") roleId = "state-admin";
  if (!roles.some((role) => role.id === roleId) || !allowedRoleIds().includes(roleId)) {
    if (authenticatedProfile) {
      state.toast = "That workspace is not available for your role.";
      const fallbackRole = allowedRoleIds().includes(state.role) ? state.role : activeUser().landing;
      history.replaceState(null, "", `#${fallbackRole}`);
      render();
    }
    return;
  }
  const destination = functionId ? findMenuDestination(roleId, functionId) : null;
  if (functionId && !destination) {
    functionId = "";
    state.toast = "That function is not available for your role.";
  }
  if (destination?.tab) state.activeOperationsTab = destination.tab;
  state.role = roleId;
  state.notificationsOpen = false;
  state.settingsOpen = false;
  pendingMenuFocus = destination ? { roleId, functionId: destination.id } : null;
  const nextHash = functionId ? `#${roleId}/${functionId}` : `#${roleId}`;
  if (pushRoute && window.location.hash !== nextHash) {
    history.pushState(null, "", nextHash);
  } else if (!pushRoute && window.location.hash !== nextHash) {
    history.replaceState(null, "", nextHash);
  }
  render();
  if (!destination) requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

function goToRole(roleId, message = "", functionId = "") {
  if (message) state.toast = message;
  setActiveRole(roleId, true, functionId);
}

function enhanceIcons() {
  createIcons({
    icons: lucideIcons,
    attrs: {
      "stroke-width": 2.25,
    },
  });
}

function selectedStateRecord() {
  return tenantStates.find((item) => item.id === state.selectedState) || tenantStates[0];
}

function selectedDistrictRecord() {
  const stateRecord = selectedStateRecord();
  return stateRecord.districts.find((item) => item.id === state.selectedDistrict) || stateRecord.districts[0];
}

function selectedSchoolRecord() {
  const district = selectedDistrictRecord();
  return district.schools.find((item) => item.id === state.selectedSchool) || district.schools[0];
}

function searchableItems() {
  const school = selectedSchoolRecord();
  const allowed = new Set(allowedRoleIds());
  return [
    ...visibleRoles().map((role) => ({ label: role.label, detail: "Workspace", role: role.id })),
    ...missions.map((mission) => ({ label: mission.title, detail: `${mission.subject} mission`, role: "student" })),
    ...teacherClasses.map((item) => ({ label: item.name, detail: item.room, role: "teacher" })),
    ...lmsAssignments.map((item) => ({ label: item.title, detail: `${item.type} in LMS`, role: "lms" })),
    ...lmsLessons.map((item) => ({ label: item.title, detail: `${item.status} ${item.subject} lesson`, role: "lms" })),
    ...deadlines.map((item) => ({ label: item.title, detail: item.meta, role: "parent" })),
    ...conversations.map((item) => ({ label: item.name, detail: item.preview, role: "messages" })),
    ...selectedCommunityBoard().published.map((post) => ({ label: post.title, detail: `${post.type} post`, role: "community" })),
    { label: school.name, detail: `${school.category} school tenant`, role: "school-admin" },
  ].filter((item) => allowed.has(item.role));
}

function renderSearchResults() {
  const query = state.searchTerm.trim().toLowerCase();
  if (!query) return "";
  const matches = searchableItems()
    .filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(query))
    .slice(0, 6);
  return `
    <section class="search-results" aria-label="Search results">
      <div><strong>${matches.length ? `Results for "${escapeHtml(state.searchTerm)}"` : `No results for "${escapeHtml(state.searchTerm)}"`}</strong><button class="text-button" data-clear-search>Clear</button></div>
      ${matches.length ? `<div class="search-result-list">${matches.map((item) => `
        <button class="search-result" data-open-role="${item.role}">
          ${icon("search")}
          <span><strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(item.detail)}</small></span>
        </button>
      `).join("")}</div>` : ""}
    </section>
  `;
}

function renderLandingPage() {
  const production = isProductionHost();
  const landingSchool = selectedSchoolRecord();
  const landingDesign = selectedSchoolDesign();
  const audiences = [
    ["School leaders", "Bring school news, staff support, and everyday planning together in one welcoming place.", "shield-check"],
    ["Teachers", "Plan lessons, celebrate progress, share classroom updates, and stay close to families.", "graduation-cap"],
    ["Families", "Follow learning, remember important dates, and keep in touch with the school community.", "users"],
    ["Students", "Discover activities, continue learning adventures, and see accomplishments grow.", "sparkles"],
  ];
  return `
    <div class="landing-shell">
      <header class="landing-header">
        <a class="landing-brand" href="#app-main" aria-label="EduConnect home"><span>EC</span><strong>EduConnect</strong></a>
        <nav aria-label="Public navigation"><a href="#solutions">For everyone</a><a href="#trust">For schools</a><a href="#signin">Sign in</a></nav>
        <a class="primary-action landing-header-cta" href="#signin">Open your portal</a>
      </header>
      <main id="app-main">
        <section class="landing-hero">
          <div class="landing-hero-copy">
            <p class="eyebrow">A brighter school day, all in one place</p>
            <h1>Learning, families, and schools—connected.</h1>
            <p class="landing-lede">EduConnect makes it easier to learn, teach, share progress, and stay involved—whether you are in the classroom, at home, or on the go.</p>
            <div class="landing-actions"><a class="primary-action" href="#signin">Sign in ${icon("chevron-right")}</a><a class="secondary-action" href="#solutions">See how EduConnect helps</a></div>
            <div class="landing-proof"><span>${icon("book-open")} Made for learning</span><span>${icon("users")} Brings families closer</span><span>${icon("smartphone")} Works wherever you are</span></div>
          </div>
          <div class="landing-login-card" id="signin">
            <div class="landing-login-heading"><span class="landing-lock school-login-logo">${renderSchoolLogo(landingDesign)}</span><div><p class="eyebrow">${escapeHtml(landingSchool.name)} portal</p><h2>Welcome back</h2><p>${escapeHtml(landingSchool.loginMessage || "Enter the sign-in details provided by your school.")}</p></div></div>
            ${landingError ? `<div class="landing-error" role="alert">${icon("alert-triangle")} ${escapeHtml(landingError)}</div>` : ""}
            <form id="landing-login-form">
              <label><span>School email or username</span><input id="landing-identifier" type="text" autocomplete="username" placeholder="Enter your school username" required /></label>
              <label><span>Password</span><input id="landing-password" type="password" autocomplete="current-password" placeholder="Enter your password" ${production ? "required" : ""} /></label>
              <button class="primary-action landing-submit" type="submit" ${landingBusy ? "disabled" : ""}>${landingBusy ? "Signing in…" : `${icon("book-open")} Sign in`}</button>
            </form>
            <p class="landing-login-note">${production ? "Need help signing in? Contact your school office or teacher." : "Local preview: use global-admin, state-admin, district-admin, school-admin, teacher, parent, or student. No password is required."}</p>
          </div>
        </section>
        <section class="landing-role-section" id="solutions">
          <div class="landing-section-heading"><p class="eyebrow">Made for the whole school community</p><h2>Everyone has a place to learn and connect.</h2><p>Simple, welcoming experiences help each person focus on what matters most in their school day.</p></div>
          <div class="landing-role-grid">${audiences.map(([title, body, iconName]) => `<article class="landing-role-card">${icon(iconName)}<strong>${title}</strong><span>${body}</span></article>`).join("")}</div>
        </section>
        <section class="landing-trust" id="trust">
          <div><p class="eyebrow">Thoughtfully made for schools</p><h2>A calm, caring place to learn and connect.</h2><p>EduConnect keeps the school day organized without getting in the way, so people can spend more time teaching, learning, and encouraging one another.</p></div>
          <div class="landing-trust-grid"><article>${icon("sparkles")}<strong>Joyful learning</strong><span>Friendly activities and clear progress help students feel proud of every step.</span></article><article>${icon("users")}<strong>Closer families</strong><span>Updates and reminders make it easier for families to take part in learning.</span></article><article>${icon("graduation-cap")}<strong>Helpful for teachers</strong><span>Everyday classroom work stays organized and easy to find.</span></article></div>
        </section>
      </main>
      <footer class="landing-footer"><a class="landing-brand" href="#app-main"><span>EC</span><strong>EduConnect</strong></a><p>Learning together. Growing together.</p><small>Made for students, families, teachers, and schools.</small></footer>
    </div>
  `;
}

function selectedCommunityBoard() {
  const school = selectedSchoolRecord();
  if (!communityBoards[school.id]) {
    communityBoards[school.id] = {
      approvers: [
        { id: `${school.id}-principal`, name: "Principal Office", title: "Principal", active: true },
        { id: `${school.id}-assistant-principal`, name: "Assistant Principal", title: "Assistant Principal", active: true },
      ],
      published: [
        { id: `${school.id}-welcome`, author: "School Office", role: "Administrator", type: "Announcement", audience: "All families", title: `Welcome to ${school.name}`, body: "This board is reserved for administrator-approved school community updates.", media: "No media", time: "Approved" },
      ],
      pending: [],
    };
  }
  return communityBoards[school.id];
}

function activeApprover(board) {
  return board.approvers.find((approver) => approver.active) || board.approvers[0];
}

function approverName(board, approverId) {
  return board.approvers.find((approver) => approver.id === approverId)?.name || "Unassigned";
}

function selectedSchoolDesign() {
  const school = selectedSchoolRecord();
  if (!schoolDesigns[school.id]) {
    schoolDesigns[school.id] = {
      logo: initials(school.name).slice(0, 1),
      logoUrl: "",
      crest: `${school.name} Crest`,
      primary: "#0050cb",
      accent: "#006b5f",
      highlight: "#735c00",
      background: "#f8f9ff",
      voice: "School-owned portal identity",
    };
  }
  return schoolDesigns[school.id];
}

function renderSchoolLogo(design, className = "") {
  const logoUrl = safeExternalUrl(design.logoUrl);
  return logoUrl
    ? `<img class="school-logo-image ${className}" src="${logoUrl}" alt="${escapeHtml(design.crest || selectedSchoolRecord().name)} logo" />`
    : `<span class="${className}">${escapeHtml(design.logo || initials(selectedSchoolRecord().name).slice(0, 1))}</span>`;
}

function designStyle(design) {
  return `--primary:${design.primary};--primary-2:${design.primary};--teal:${design.accent};--gold:${design.highlight};--background:${design.background};`;
}

function applyDesignFromForm() {
  const school = selectedSchoolRecord();
  const subdomain = document.querySelector("#school-subdomain")?.value.trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
  school.name = document.querySelector("#school-name")?.value.trim() || school.name;
  school.subdomain = subdomain || school.subdomain;
  school.category = document.querySelector("#school-category")?.value || school.category;
  school.plan = document.querySelector("#school-plan")?.value.trim() || school.plan;
  school.theme = document.querySelector("#school-theme")?.value.trim() || school.theme;
  school.workHours = document.querySelector("#school-work-hours")?.value.trim() || school.workHours;
  school.customDomain = document.querySelector("#school-custom-domain")?.value.trim().toLowerCase() || "";
  school.loginMessage = document.querySelector("#school-login-message")?.value.trim() || "Welcome to your school learning portal.";
  school.storageQuota = Number(document.querySelector("#school-storage-quota")?.value || 25);
  school.parentPortalEnabled = document.querySelector("#school-parent-portal")?.checked ?? true;
  school.modules = Array.from(document.querySelectorAll("[data-school-module]:checked"), (input) => input.value);
  if (school.customDomain) {
    const domain = productionReadiness.domains.find((item) => item.schoolId === school.id);
    if (domain) Object.assign(domain, { domain: school.customDomain, dns: domain.domain === school.customDomain ? domain.dns : "Awaiting DNS", ssl: domain.domain === school.customDomain ? domain.ssl : "Pending", checkedAt: "Just now" });
    else productionReadiness.domains.push({ schoolId: school.id, domain: school.customDomain, dns: "Awaiting DNS", ssl: "Pending", checkedAt: "Just now" });
  }
  schoolDesigns[school.id] = {
    ...selectedSchoolDesign(),
    logo: document.querySelector("#design-logo").value.trim() || initials(school.name).slice(0, 1),
    logoUrl: document.querySelector("#design-logo-url")?.value.trim() || "",
    crest: document.querySelector("#design-crest").value.trim() || `${school.name} Crest`,
    voice: document.querySelector("#design-voice").value.trim() || "School-owned portal identity",
    primary: document.querySelector("#design-primary").value,
    accent: document.querySelector("#design-accent").value,
    highlight: document.querySelector("#design-highlight").value,
    background: document.querySelector("#design-background").value,
  };
}

function render() {
  const focused = document.activeElement;
  const focusId = focused?.id || "";
  const focusData = ["operationsTab", "testProvider", "testIntegration", "syncIntegration", "runJob", "completeIntervention"].map((key) => focused?.dataset?.[key] ? [key, focused.dataset[key]] : null).find(Boolean);
  document.documentElement.lang = ({ English: "en", Spanish: "es", French: "fr", "Haitian Creole": "ht" })[state.language] || "en";
  if (!authenticatedProfile) {
    app.innerHTML = renderLandingPage();
    bindLandingEvents();
    enhanceIcons();
    return;
  }
  const role = roles.find((item) => item.id === state.role);
  const school = selectedSchoolRecord();
  const design = selectedSchoolDesign();
  app.innerHTML = `
    <div class="app ${state.compactMode ? "compact-mode" : ""} ${state.highContrast ? "high-contrast" : ""} ${state.fontScale === "Large" ? "font-large" : state.fontScale === "Extra large" ? "font-extra-large" : ""} ${state.dyslexiaFriendly ? "dyslexia-friendly" : ""} ${state.reducedMotion ? "reduced-motion" : ""}" style="${designStyle(design)}">
      ${renderSidebar(design)}
      <main id="app-main" class="workspace workspace-${state.role}">
        ${impersonatingAdminProfile ? `<section class="impersonation-banner" role="status"><span>${icon("eye")} Previewing as <strong>${escapeHtml(activeUser().label)}</strong> (${escapeHtml(activeUser().role)})</span><button type="button" data-stop-impersonating>Return to Global Admin</button></section>` : ""}
        ${renderTenantBar(school, design)}
        ${renderTopbar(role)}
        ${renderTour()}
        ${renderSearchResults()}
        ${state.role === "state-admin" ? renderStateAdmin() : ""}
        ${state.role === "district-admin" ? renderDistrictAdmin() : ""}
        ${state.role === "school-admin" ? renderSchoolAdmin() : ""}
        ${state.role === "lms" ? renderAdvancedLms() : ""}
        ${state.role === "student" ? renderStudent() : ""}
        ${state.role === "teacher" ? renderTeacher() : ""}
        ${state.role === "parent" ? renderParent() : ""}
        ${state.role === "messages" ? renderMessages() : ""}
        ${state.role === "community" ? renderCommunityBoard() : ""}
      </main>
      ${renderMobileNav()}
      ${renderUtilityPanels()}
    </div>
  `;
  bindEvents();
  enhanceIcons();
  persistDemoState();
  requestAnimationFrame(() => {
    const selector = focusId ? `#${CSS.escape(focusId)}` : focusData ? `[data-${focusData[0].replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}="${CSS.escape(focusData[1])}"]` : "";
    if (selector) document.querySelector(selector)?.focus({ preventScroll: true });
    if (pendingMenuFocus) {
      const destination = findMenuDestination(pendingMenuFocus.roleId, pendingMenuFocus.functionId);
      pendingMenuFocus = null;
      focusMenuDestination(destination);
    }
  });
}

function renderTour() {
  if (!state.tourOpen) return "";
  const step = tourSteps[state.tourStep] || tourSteps[0];
  return `
    <section class="tour-card" aria-label="Guided onboarding">
      <div>
        <p class="eyebrow">Walkthrough ${state.tourStep + 1} of ${tourSteps.length}</p>
        <h3>${step.title}</h3>
        <p>${step.body}</p>
      </div>
      <div class="tour-actions">
        <button class="secondary-action" data-tour-prev ${state.tourStep === 0 ? "disabled" : ""}>${icon("chevron-right")} Back</button>
        <button class="primary-action" data-tour-next>${icon("play")} ${state.tourStep === tourSteps.length - 1 ? "Finish" : "Next"}</button>
      </div>
    </section>
  `;
}

function renderUtilityPanels() {
  return `
    ${state.toast ? `<div class="toast" role="status"><span>${escapeHtml(state.toast)}</span><button class="icon-button" aria-label="Dismiss message" data-dismiss-toast>${icon("x")}</button></div>` : ""}
    ${state.notificationsOpen ? `
      <aside class="utility-panel" aria-label="Notifications">
        <div class="section-heading"><h3>${t("notifications")}</h3><button class="icon-button" aria-label="${t("close")} ${t("notifications")}" data-close-panel>${icon("x")}</button></div>
        <div class="utility-actions">
          <button class="secondary-action" data-mark-notifications>${icon("check")} ${t("markRead")}</button>
          <button class="secondary-action" data-simulate-live>${icon("refresh-cw")} Simulate live update</button>
        </div>
        ${lmsNotifications.length ? lmsNotifications.map((notice) => `
          <article class="notice-row ${notice.level.toLowerCase()} ${notice.read ? "read" : ""}">
            <strong>${notice.level}</strong>
            <div><span>${notice.title}</span><small>${notice.target} • ${notice.channel}</small></div>
            <button class="icon-button" aria-label="Dismiss ${escapeHtml(notice.title)}" data-dismiss-notification="${notice.id}">${icon("x")}</button>
          </article>
        `).join("") : `<div class="empty-state">${t("noNotifications")}</div>`}
      </aside>
    ` : ""}
    ${state.settingsOpen ? `
      <aside class="utility-panel" aria-label="Settings">
        <div class="section-heading"><h3>${t("settings")}</h3><button class="icon-button" aria-label="${t("close")} ${t("settings")}" data-close-panel>${icon("x")}</button></div>
        <label class="setting-field"><span>${t("language")}</span><select aria-label="${t("language")}" data-setting-select="language">${Object.keys(translations).map((language) => `<option ${state.language === language ? "selected" : ""}>${language}</option>`).join("")}</select></label>
        <label class="setting-field"><span>${t("textSize")}</span><select aria-label="${t("textSize")}" data-setting-select="fontScale"><option ${state.fontScale === "Normal" ? "selected" : ""}>Normal</option><option ${state.fontScale === "Large" ? "selected" : ""}>Large</option><option ${state.fontScale === "Extra large" ? "selected" : ""}>Extra large</option></select></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="compactMode" ${state.compactMode ? "checked" : ""} /><span>Compact dashboard density</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="highContrast" ${state.highContrast ? "checked" : ""} /><span>High contrast panels</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="dyslexiaFriendly" ${state.dyslexiaFriendly ? "checked" : ""} /><span>Dyslexia-friendly type</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="reducedMotion" ${state.reducedMotion ? "checked" : ""} /><span>Reduce motion</span></label>
        <div class="notification-preferences"><strong>Notification preferences</strong>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="email" ${state.notificationPreferences.email ? "checked" : ""} /><span>${t("email")}</span></label>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="sms" ${state.notificationPreferences.sms ? "checked" : ""} /><span>SMS</span></label>
          <label class="toggle-row"><input type="checkbox" data-notification-preference="push" ${state.notificationPreferences.push ? "checked" : ""} /><span>${t("push")}</span></label>
          <label class="setting-field"><span>Remind me before due dates</span><select data-notification-days><option value="1" ${state.notificationPreferences.dueDays === 1 ? "selected" : ""}>1 day</option><option value="2" ${state.notificationPreferences.dueDays === 2 ? "selected" : ""}>2 days</option><option value="7" ${state.notificationPreferences.dueDays === 7 ? "selected" : ""}>1 week</option></select></label>
          <button class="secondary-action" type="button" data-send-preference-test>${icon("bell")} ${t("sendTest")}</button>
        </div>
        <button class="secondary-action" data-export-demo>${icon("download")} Export JSON File</button>
        <label class="secondary-action import-action">${icon("file-text")} Import JSON File<input type="file" id="import-demo-state" accept="application/json" /></label>
      </aside>
    ` : ""}
    ${renderGeneralMenuDialog()}
  `;
}

function renderTenantBar(school, design) {
  return `
    <section class="tenant-bar" aria-label="Current tenant">
      <div>
        ${renderSchoolLogo(design, "school-logo-mini")}
        <span class="tenant-label">Tenant</span>
        <strong>${school.name}</strong>
        <em>${school.category} school</em>
        <em>${school.subdomain}.educonnect.local</em>
        <em>${school.workHours}</em>
      </div>
      <div class="tenant-path">
        <span>${selectedStateRecord().name}</span>
        <span>${selectedDistrictRecord().name}</span>
          <span>${school.name}</span>
          <span>${school.plan}</span>
        </div>
    </section>
  `;
}

function menuItemHref(item) {
  if (item.action) return `#${item.id}`;
  if (item.workspace) return `#${item.role}`;
  return `#${item.role}/${item.id}`;
}

function renderGeneralMenu(surface = "sidebar") {
  const route = hashRoute();
  const groups = generalMenuGroups();
  return `
    <nav class="general-menu general-menu-${surface}" aria-label="${surface === "dialog" ? "All available functions" : "General menu"}">
      ${surface === "sidebar" ? `<div class="general-menu-intro"><p class="eyebrow">General menu</p><strong>All available functions</strong></div>` : ""}
      <div class="general-menu-groups">
        ${groups.map((group) => {
          const containsCurrentRole = group.items.some((item) => item.role === state.role);
          const containsCurrentFunction = group.items.some((item) => item.role === route.role && item.id === route.functionId);
          const open = surface === "dialog"
            ? group.id === "workspaces" || containsCurrentFunction
            : group.id === "workspaces" || containsCurrentRole;
          return `<details class="general-menu-group" ${open ? "open" : ""}>
            <summary>${icon(group.icon)}<span>${group.label}</span><small>${group.items.length}</small></summary>
            <div class="general-menu-links">
              ${group.items.map((item) => {
                const isCurrent = item.workspace
                  ? route.role === item.role && !route.functionId
                  : Boolean(item.role && route.role === item.role && route.functionId === item.id);
                const roleLabel = item.role ? roles.find((role) => role.id === item.role)?.label : "Account";
                const attributes = item.action
                  ? `data-menu-action="${item.action}"`
                  : item.workspace
                    ? `data-menu-workspace="${item.role}"`
                    : `data-menu-role="${item.role}" data-menu-function="${item.id}" data-menu-target="${item.target || item.id}" ${item.tab ? `data-menu-tab="${item.tab}"` : ""}`;
                return `<a class="general-menu-link ${isCurrent ? "active" : ""}" href="${menuItemHref(item)}" ${attributes} ${isCurrent ? `aria-current="${item.workspace ? "page" : "location"}"` : ""}>
                  ${icon(item.icon)}
                  <span><strong>${item.label}</strong><small>${item.workspace ? "Workspace" : roleLabel}</small></span>
                </a>`;
              }).join("")}
            </div>
          </details>`;
        }).join("")}
      </div>
    </nav>
  `;
}

function renderGeneralMenuDialog() {
  return `
    <dialog class="general-menu-dialog" id="general-menu-dialog" aria-labelledby="general-menu-dialog-title">
      <div class="general-menu-dialog-header">
        <div><p class="eyebrow">Navigate EduConnect</p><h2 id="general-menu-dialog-title">General menu</h2><p>Every function available to your account, in one place.</p></div>
        <button class="icon-button" type="button" data-close-general-menu aria-label="Close general menu">${icon("x")}</button>
      </div>
      ${renderGeneralMenu("dialog")}
    </dialog>
  `;
}

function renderSidebar(design) {
  return `
    <aside class="sidebar">
      <div class="brand-row">
        ${renderSchoolLogo(design, "brand-mark")}
        <div><h1>${design.crest}</h1><p>${design.voice}</p></div>
      </div>
      ${renderGeneralMenu()}
    </aside>
  `;
}

function renderMobileNav() {
  const quickRoleIds = [...new Set([state.role, "messages", "community"])].filter((roleId) => allowedRoleIds().includes(roleId));
  return `
    <nav class="mobile-role-nav" aria-label="Mobile portal views">
      ${quickRoleIds.map((roleId) => roles.find((role) => role.id === roleId)).filter(Boolean).map((role) => `<a class="mobile-nav-item ${state.role === role.id ? "active" : ""}" href="#${role.id}" data-role="${role.id}" ${state.role === role.id ? "aria-current=\"page\"" : ""}>${icon(role.icon)}<span>${role.label}</span></a>`).join("")}
      <button class="mobile-nav-item" type="button" data-open-general-menu aria-haspopup="dialog" aria-controls="general-menu-dialog" aria-expanded="false">${icon("layers")}<span>Menu</span></button>
    </nav>
  `;
}

function renderTopbar(role) {
  const title = role.id === "messages" ? "Communication Hub" : role.id === "state-admin" ? "State Governance" : role.id === "district-admin" ? "District Operations" : role.id === "school-admin" ? "School Administration" : `${role.label} Dashboard`;
  return `
    <header class="topbar">
      <div><p class="eyebrow">${role.label} workspace</p><h2>${title}</h2></div>
      <div class="topbar-actions">
        <button class="secondary-action general-menu-trigger" type="button" data-open-general-menu aria-haspopup="dialog" aria-controls="general-menu-dialog" aria-expanded="false">${icon("layers")} General menu</button>
        <label class="searchbox">${icon("search")}<input id="global-search" value="${escapeHtml(state.searchTerm)}" placeholder="${t("search")}" /></label>
        ${can("manage-users") && allowedRoleIds().includes("state-admin") ? `<button class="secondary-action role-controls-action" data-role-controls type="button">${icon("users")} Role controls</button>` : ""}
        ${can("manage-users") && allowedRoleIds().includes("school-admin") ? `<button class="secondary-action school-customization-action" data-school-customization type="button">${icon("settings")} School design</button>` : ""}
        <div class="account-chip"><span>${initials(activeUser().label)}</span><div><strong>${activeUser().label}</strong><small>${activeUser().role}</small></div></div>
        ${isProductionHost() ? "" : `<button class="secondary-action reset-action" data-reset-demo type="button">${icon("rotate-ccw")} Reset Demo</button>`}
        <button class="icon-button" aria-label="Notifications" data-toggle-notifications>${icon("bell")}${unreadNotifications() ? `<span class="status-dot">${unreadNotifications()}</span>` : ""}</button>
        <button class="icon-button" aria-label="Settings" data-toggle-settings>${icon("settings")}</button>
        <button class="icon-button" aria-label="${t("signOut")}" data-sign-out>${icon("x")}</button>
      </div>
    </header>
  `;
}

function renderStateAdmin() {
  const stateRecord = selectedStateRecord();
  const allDistricts = stateRecord.districts;
  const allSchools = allDistricts.flatMap((item) => item.schools);
  const activeSchools = allSchools.filter((school) => school.status === "Active").length;
  return `
    <section class="dashboard-grid platform-grid" id="state-overview">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">State admin workspace</p>
          <h2>Tenant Governance</h2>
          <p>State administrators supervise districts, compliance, tenant standards, statewide calendars, and cross-district readiness.</p>
        </div>
        <div class="inline-actions">
          <button class="secondary-action" data-open-role="district-admin">${icon("building-2")} Review Districts</button>
          <button class="primary-action" data-add-school ${permissionAttrs("manage-tenants", "Only state and district admins can add school tenants.")}>${icon("plus")} Add School Tenant</button>
        </div>
      </div>
      ${permissionNotice("manage-tenants", "Tenant creation and district configuration are admin-only in this demo.")}
      ${statCard("Districts", allDistricts.length, "building-2", "blue")}
      ${statCard("Schools", allSchools.length, "graduation-cap", "teal")}
      ${statCard("Active tenants", activeSchools, "shield-check", "gold")}
      ${renderRoleControlCenter()}
      ${renderUnifiedOperatingSystem()}
      ${renderRealtimePanel()}
      <section class="panel state-management-panel" id="district-oversight">
        <div class="section-heading"><h3>District Oversight</h3><span>${stateRecord.name}</span></div>
        <div class="management-list">
          ${allDistricts.map((districtItem) => `
            <button class="management-row ${districtItem.id === selectedDistrictRecord().id ? "active" : ""}" data-manage-district="${districtItem.id}">
              <div class="management-icon">${icon("building-2")}</div>
              <div><strong>${districtItem.name}</strong><small>${districtItem.region} • Superintendent: ${districtItem.superintendent}</small></div>
              <span>${districtItem.schools.length} schools</span>
            </button>
          `).join("")}
        </div>
      </section>
      ${renderCompliancePanel()}
      <section class="panel audit-panel" id="audit-trail">
        <div class="section-heading"><h3>Audit Trail</h3><span>Cross-tenant accountability</span></div>
        <div class="audit-list">
          ${auditLogs.map((log) => `
            <article class="audit-row">
              ${icon("clipboard-check")}
              <div><strong>${log.event}</strong><small>${log.actor} • ${log.scope}</small></div>
              <time>${log.time}</time>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel calendar-panel" id="statewide-calendar">
        <div class="section-heading"><h3>Statewide Calendar</h3><span>Policy, reporting, and public events</span></div>
        <div class="calendar-list">
          ${calendarEvents.map((event) => `<article class="calendar-row"><div class="calendar-date">${event.date}</div><div><strong>${event.title}</strong><small>${event.audience} • ${event.type}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel hierarchy-panel" id="governance-chain">
        <div class="section-heading"><h3>Governance Chain</h3><span>State to classroom</span></div>
        <div class="hierarchy-list">
          ${governanceLevels.map(([level, roleList], index) => `<article class="hierarchy-level"><div class="level-number">${index + 1}</div><div><h4>${level}</h4><p>${roleList.join(" • ")}</p></div></article>`).join("")}
        </div>
      </section>
      ${renderProductionReadiness()}
    </section>
  `;
}

function renderDistrictAdmin() {
  const stateRecord = selectedStateRecord();
  const district = selectedDistrictRecord();
  const schools = district.schools;
  const totalStudents = schools.reduce((sum, school) => sum + school.students, 0);
  const totalStaff = schools.reduce((sum, school) => sum + school.staff, 0);
  return `
    <section class="dashboard-grid platform-grid" id="district-overview">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">District admin workspace</p>
          <h2>${district.name}</h2>
          <p>District administrators manage school tenants, staffing, rollout readiness, district messages, and cross-school performance.</p>
        </div>
        <button class="primary-action" data-add-school ${permissionAttrs("manage-tenants", "Only district and state admins can add school tenants.")}>${icon("plus")} Add School Tenant</button>
      </div>
      ${statCard("Schools", schools.length, "graduation-cap", "blue")}
      ${statCard("Students", totalStudents.toLocaleString(), "users", "teal")}
      ${statCard("Staff", totalStaff.toLocaleString(), "shield-check", "gold")}
      <section class="panel tenant-controls" id="district-scope">
        <div class="section-heading"><h3>District Scope</h3><span>${stateRecord.name}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${tenantStates.map((item) => `<option value="${item.id}" ${state.selectedState === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${stateRecord.districts.map((item) => `<option value="${item.id}" ${district.id === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
        </div>
      </section>
      <section class="panel district-management-panel" id="district-schools">
        <div class="section-heading"><h3>Schools In This District</h3><span>${district.region}</span></div>
        <div class="management-list">
          ${schools.map((schoolItem) => `<button class="management-row ${schoolItem.id === selectedSchoolRecord().id ? "active" : ""}" data-manage-school="${schoolItem.id}"><div class="management-icon">${icon("graduation-cap")}</div><div><strong>${schoolItem.name}</strong><small>${schoolItem.category} • ${schoolItem.subdomain}.educonnect.local</small></div><span>${schoolItem.status}</span></button>`).join("")}
        </div>
      </section>
      ${renderUnifiedOperatingSystem()}
      ${renderRealtimePanel()}
      <section class="panel audit-panel" id="audit-trail">
        <div class="section-heading"><h3>District Audit Trail</h3><span>School and staff actions</span></div>
        <div class="audit-list">${auditLogs.map((log) => `<article class="audit-row">${icon("clipboard-check")}<div><strong>${log.event}</strong><small>${log.actor} • ${log.scope}</small></div><time>${log.time}</time></article>`).join("")}</div>
      </section>
    </section>
  `;
}

function renderSchoolCustomization() {
  const school = selectedSchoolRecord();
  const design = selectedSchoolDesign();
  const district = selectedDistrictRecord();
  return `
    <section class="panel school-customization-panel" id="school-customization" aria-labelledby="school-customization-title">
      <div class="section-heading customization-heading">
        <div><p class="eyebrow">School-owned experience</p><h3 id="school-customization-title">School Customization</h3><p>Update this school's identity, instance details, logo, colors, and portal voice.</p></div>
        <span>${can("manage-users") ? "Editable" : "Read-only"}</span>
      </div>
      ${can("manage-tenants") ? `<label class="customization-school-picker"><span>Customize school</span><select id="customization-school-filter">${district.schools.map((item) => `<option value="${item.id}" ${item.id === school.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}</select></label>` : ""}
      <div class="design-studio school-customization-studio">
        <div class="brand-preview-card school-brand-preview" style="${designStyle(design)}">
          <div class="brand-preview-top">
            ${renderSchoolLogo(design, "brand-preview-logo")}
            <div><strong>${escapeHtml(design.crest)}</strong><span>${escapeHtml(school.customDomain || `${school.subdomain}.educonnect.local`)}</span></div>
          </div>
          <div><span class="preview-school-type">${escapeHtml(school.category)} • ${escapeHtml(school.plan)}</span><h4>${escapeHtml(school.name)}</h4><p>${escapeHtml(design.voice)}</p></div>
          <div class="preview-color-row" aria-label="Current school colors"><span style="background:${design.primary}" title="Primary"></span><span style="background:${design.accent}" title="Accent"></span><span style="background:${design.highlight}" title="Highlight"></span><span style="background:${design.background}" title="Background"></span></div>
          <div class="brand-preview-actions"><button data-open-role="parent" type="button">Family Portal</button><button data-open-role="lms" type="button">LMS</button><button data-open-role="community" type="button">Community</button></div>
        </div>
        <form class="design-form customization-form" id="design-form">
          <div class="form-section-heading span-2"><strong>School identity</strong><span>Name and portal instance</span></div>
          <label class="span-2"><span>School name</span><input id="school-name" value="${escapeHtml(school.name)}" required /></label>
          <label><span>Instance slug</span><div class="input-suffix"><input id="school-subdomain" value="${escapeHtml(school.subdomain)}" required /><em>.educonnect.local</em></div></label>
          <label><span>School type</span><select id="school-category"><option ${school.category === "Public" ? "selected" : ""}>Public</option><option ${school.category === "Private" ? "selected" : ""}>Private</option><option ${school.category === "Chartered" ? "selected" : ""}>Chartered</option></select></label>
          <label><span>Plan name</span><input id="school-plan" value="${escapeHtml(school.plan)}" /></label>
          <label><span>Theme name</span><input id="school-theme" value="${escapeHtml(school.theme)}" /></label>
          <label class="span-2"><span>School work hours</span><input id="school-work-hours" value="${escapeHtml(school.workHours)}" /></label>
          <label class="span-2"><span>Custom domain</span><input type="text" id="school-custom-domain" value="${escapeHtml(school.customDomain || "")}" placeholder="learn.yourschool.org" /></label>
          <label class="span-2"><span>Login welcome message</span><textarea id="school-login-message" placeholder="Welcome students and families...">${escapeHtml(school.loginMessage || "Welcome to your school learning portal.")}</textarea></label>
          <label><span>Storage quota (GB)</span><input type="number" id="school-storage-quota" min="1" max="500" value="${school.storageQuota || 25}" /></label>
          <label class="toggle-field"><input type="checkbox" id="school-parent-portal" ${school.parentPortalEnabled !== false ? "checked" : ""} /><span>Enable family portal</span></label>
          <fieldset class="module-selector span-2"><legend>Enabled modules</legend>${["LMS", "Assignments", "Quizzes", "Messages", "Community", "Parent portal"].map((module) => `<label><input type="checkbox" data-school-module value="${module}" ${(school.modules || ["LMS", "Assignments", "Quizzes", "Messages", "Community", "Parent portal"]).includes(module) ? "checked" : ""} /><span>${module}</span></label>`).join("")}</fieldset>
          <div class="form-section-heading span-2"><strong>Logo and voice</strong><span>Use a short mark or an image URL</span></div>
          <label><span>Logo mark</span><input id="design-logo" maxlength="3" value="${escapeHtml(design.logo)}" /></label>
          <label><span>Crest / logo name</span><input id="design-crest" value="${escapeHtml(design.crest)}" /></label>
          <label class="span-2"><span>Logo image URL</span><input type="url" id="design-logo-url" value="${escapeHtml(design.logoUrl || "")}" placeholder="https://school.edu/logo.png" /></label>
          <label class="span-2"><span>School voice</span><input id="design-voice" value="${escapeHtml(design.voice)}" /></label>
          <div class="form-section-heading span-2"><strong>Portal colors</strong><span>Applied throughout the selected school experience</span></div>
          <label><span>Primary buttons</span><input type="color" id="design-primary" value="${design.primary}" /></label>
          <label><span>Accent</span><input type="color" id="design-accent" value="${design.accent}" /></label>
          <label><span>Highlight</span><input type="color" id="design-highlight" value="${design.highlight}" /></label>
          <label><span>Page background</span><input type="color" id="design-background" value="${design.background}" /></label>
          <div class="customization-form-actions span-2"><button class="secondary-action" type="button" data-reset-school-design>Reset colors</button><button class="primary-action" type="submit" ${permissionAttrs("manage-users", "Only school administrators can customize the school experience.")}>${icon("check")} Save school customization</button></div>
        </form>
      </div>
      <div class="theme-presets"><div><strong>Theme presets</strong><span>Start with a coordinated school palette.</span></div><div class="palette-list">${designPresets.map((preset) => `<button class="palette-button ${school.theme === preset.name ? "active" : ""}" data-design-preset="${preset.name}" type="button"><span style="background:${preset.primary}"></span><span style="background:${preset.accent}"></span><span style="background:${preset.highlight}"></span><strong>${preset.name}</strong></button>`).join("")}</div></div>
      ${permissionNotice("manage-users", "School branding is managed by authorized administrators.")}
    </section>
  `;
}

function renderInterventionCenter({ compact = false } = {}) {
  const school = selectedSchoolRecord();
  const interventions = productionReadiness.interventions.filter((item) => item.schoolId === school.id);
  const watchLearners = rosterRecords.filter((record) => record.status === "Watch");
  return `<section class="panel intervention-center-panel ${compact ? "compact-intervention-center" : ""}" id="intervention-center" aria-labelledby="intervention-center-title">
    <div class="section-heading"><div><p class="eyebrow">Student support</p><h3 id="intervention-center-title">Intervention Center</h3></div><span>${interventions.filter((item) => item.status !== "Completed").length} active plans</span></div>
    <p class="panel-intro">Coordinate goals, owners, review dates, and progress checks without exposing student-level details in district or state analytics.</p>
    <div class="intervention-layout">
      <form id="intervention-form" class="intervention-form">
        <h4>Create a support plan</h4>
        <label><span>Learner</span><select id="intervention-student" required>${(watchLearners.length ? watchLearners : rosterRecords).map((record) => `<option value="${record.id}">${escapeHtml(record.student)} • ${escapeHtml(record.className)}</option>`).join("")}</select></label>
        <label><span>Support area</span><input id="intervention-area" placeholder="Reading fluency, attendance, math..." required /></label>
        <label><span>Tier</span><select id="intervention-tier"><option>Tier 1</option><option selected>Tier 2</option><option>Tier 3</option></select></label>
        <label><span>Plan owner</span><input id="intervention-owner" value="${escapeHtml(activeUser().label)}" required /></label>
        <label><span>Next review</span><input id="intervention-review" type="date" required /></label>
        <label class="span-2"><span>Goal and supports</span><textarea id="intervention-notes" placeholder="Describe the measurable goal, supports, and check-in cadence." required></textarea></label>
        <button class="primary-action span-2" type="submit">${icon("plus")} Create support plan</button>
      </form>
      <div class="intervention-list" aria-label="Current intervention plans">${interventions.length ? interventions.map((item) => `<article class="intervention-card"><div><strong>${escapeHtml(item.student)}</strong><small>${escapeHtml(item.area)} • ${escapeHtml(item.tier)} • Owner: ${escapeHtml(item.owner)}</small></div><span>${escapeHtml(item.status)}</span><p>${escapeHtml(item.notes)}</p><footer><time>Review ${escapeHtml(item.nextReview)}</time>${item.status !== "Completed" ? `<button class="text-button" type="button" data-complete-intervention="${item.id}">Mark complete</button>` : ""}</footer></article>`).join("") : `<div class="empty-state">No support plans have been created for this school.</div>`}</div>
    </div>
  </section>`;
}

function renderSchoolSuccessCenter() {
  const ops = productionReadiness;
  const currentYear = ops.academicYears.find((year) => year.status === "Active") || ops.academicYears.at(-1);
  return `<section class="panel school-success-panel" id="school-success-center" aria-labelledby="school-success-title">
    <div class="section-heading"><div><p class="eyebrow">School continuity</p><h3 id="school-success-title">Academic Year & Privacy Center</h3></div><span>${escapeHtml(currentYear?.name || "Not configured")}</span></div>
    <div class="school-success-grid">
      <article class="success-card"><div class="section-heading"><h4>Academic-year rollover</h4><span>${escapeHtml(currentYear?.status || "Setup needed")}</span></div><p>Preview the next school year, then copy course structure and draft learning content while keeping prior grades and submissions archived.</p><form id="academic-rollover-form" class="stacked-form"><label><span>New school year</span><input id="rollover-name" value="2026–2027" required /></label><div class="date-pair"><label><span>Starts</span><input id="rollover-start" type="date" value="2026-08-01" required /></label><label><span>Ends</span><input id="rollover-end" type="date" value="2027-07-31" required /></label></div><label class="toggle-row"><input id="rollover-copy-lessons" type="checkbox" checked/><span>Copy courses, units, and lessons as drafts</span></label><label class="toggle-row"><input id="rollover-copy-gradebook" type="checkbox" checked/><span>Copy gradebook categories and standards</span></label><div class="inline-actions"><button class="secondary-action" type="button" data-preview-rollover>Preview rollover</button><button class="primary-action" type="submit">Create new year</button></div></form>${state.academicRolloverPreview ? `<div class="rollover-preview" role="status"><strong>Preview ready</strong><span>${escapeHtml(state.academicRolloverPreview)}</span></div>` : ""}<div class="year-history">${ops.academicYears.map((year) => `<div><strong>${escapeHtml(year.name)}</strong><span>${escapeHtml(year.status)}</span><small>${escapeHtml(year.startsOn)} to ${escapeHtml(year.endsOn)}</small></div>`).join("")}</div></article>
      <article class="success-card"><div class="section-heading"><h4>Privacy-safe school analytics</h4><span>Minimum ${ops.analytics.privacyThreshold} learners</span></div><p>Small cohorts are suppressed automatically so dashboards do not identify individual learners.</p>${ops.analytics.metrics.map((metric) => { const suppressed = metric.status === "Suppressed" || metric.cohortSize < ops.analytics.privacyThreshold; return `<div class="analytics-row"><div><strong>${escapeHtml(metric.label)}</strong><small>${suppressed ? `Not shown—fewer than ${ops.analytics.privacyThreshold} learners` : `${metric.cohortSize} learners in cohort`}</small></div><span>${suppressed ? "—" : escapeHtml(metric.value)}</span></div>`; }).join("")}<button class="secondary-action" type="button" data-refresh-analytics>Refresh school analytics</button></article>
    </div>
  </section>`;
}

function renderSchoolAdmin() {
  const school = selectedSchoolRecord();
  const board = selectedCommunityBoard();
  const watchCount = rosterRecords.filter((record) => record.status === "Watch").length;
  const pendingSubmissions = gradebookSubmissions.filter((submission) => submission.status !== "Reviewed").length;
  return `
    <section class="dashboard-grid platform-grid" id="school-overview">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">School admin workspace</p>
          <h2>${school.name}</h2>
          <p>School administrators run campus operations: users, safety messaging, approvals, LMS visibility, roster health, and family communication windows.</p>
        </div>
        <div class="inline-actions"><button class="secondary-action" data-school-customization type="button">${icon("settings")} Customize school</button><button class="primary-action" data-open-role="community">${icon("megaphone")} Review Community Posts</button></div>
      </div>
      ${statCard("Students", school.students.toLocaleString(), "users", "blue")}
      ${statCard("Staff", school.staff.toLocaleString(), "shield-check", "teal")}
      ${statCard("Pending approvals", board.pending.length, "clipboard-check", "gold")}
      ${renderSchoolCustomization()}
      ${renderEnrollmentCenter()}
      ${renderSchoolSuccessCenter()}
      ${renderInterventionCenter()}
      <section class="panel instance-panel" id="campus-tenant">
        <div class="section-heading"><h3>Campus Tenant</h3><span>${school.status}</span></div>
        <div class="instance-card">
          <div><span>Instance URL</span><strong>${school.subdomain}.educonnect.local</strong></div>
          <div><span>Plan</span><strong>${school.plan}</strong></div>
          <div><span>Work hours</span><strong>${school.workHours}</strong></div>
          <div><span>Messages</span><strong>${school.messages}</strong></div>
          <div><span>Roster watch</span><strong>${watchCount}</strong></div>
          <div><span>Submissions</span><strong>${pendingSubmissions} pending</strong></div>
        </div>
      </section>
      <section class="panel permissions-panel" id="school-operations">
        <div class="section-heading"><h3>School Operations</h3><span>LMS, messages, approvals</span></div>
        <div class="permission-table">
          <button class="permission-row" data-open-role="lms"><strong>LMS</strong><span>Assignments and gradebook</span><small>${lmsAssignments.length} assignments</small></button>
          <button class="permission-row" data-open-role="messages"><strong>Messages</strong><span>Family and staff communication</span><small>${conversations.reduce((sum, item) => sum + (item.unread || 0), 0)} unread</small></button>
          <button class="permission-row" data-open-role="community"><strong>Community</strong><span>Approval queue and published posts</span><small>${board.pending.length} pending</small></button>
        </div>
      </section>
      ${renderCompliancePanel()}
      ${renderRealtimePanel()}
    </section>
  `;
}

function renderEnrollmentCenter() {
  const school = selectedSchoolRecord();
  const imports = productionReadiness.enrollmentImports.filter((item) => item.schoolId === school.id);
  return `<section class="panel enrollment-center-panel" id="enrollment-center"><div class="section-heading"><div><p class="eyebrow">Roster operations</p><h3>Enrollment Center</h3></div><span>${rosterRecords.length} active learners</span></div><div class="enrollment-grid"><form id="enrollment-import-form" class="enrollment-import-card"><h4>Import roster</h4><p>Upload a OneRoster or CSV file, validate students and guardians, then stage changes before enrollment.</p><label class="upload-drop">${icon("paperclip")} Choose CSV or OneRoster file<input id="enrollment-file" type="file" accept=".csv,application/json" required/></label><select id="enrollment-role" aria-label="Import record type"><option>Students and guardians</option><option>Staff</option><option>Classes and enrollments</option></select><button class="primary-action" type="submit">Validate and import</button></form><div class="enrollment-history"><div class="section-heading"><h4>Import history</h4><span>${imports.length}</span></div>${imports.map((item) => `<article><div><strong>${escapeHtml(item.file)}</strong><small>${item.createdAt} • ${item.rows} rows</small></div><span>${item.accepted} accepted</span><em>${item.needsReview} review</em></article>`).join("") || `<div class="empty-state">No roster imports for this school.</div>`}</div></div><div class="enrollment-actions"><button class="secondary-action" type="button" data-export-roster>${icon("download")} Export OneRoster CSV</button><button class="secondary-action" type="button" data-send-enrollment-invites>${icon("send")} Send account invitations</button><span>Transfers and deactivations preserve audit history.</span></div></section>`;
}

function renderPlatform() {
  const stateRecord = selectedStateRecord();
  const district = selectedDistrictRecord();
  const school = selectedSchoolRecord();
  const design = selectedSchoolDesign();
  const allSchools = stateRecord.districts.flatMap((item) => item.schools);
  const categoryCounts = ["Public", "Private", "Chartered"].map((category) => [category, allSchools.filter((schoolItem) => schoolItem.category === category).length]);
  return `
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">Multi-tenant platform</p>
          <h2>${stateRecord.name} education tenant map</h2>
          <p>Schools are grouped by category, nested under districts, and governed through state-level education structures.</p>
        </div>
        <button class="primary-action" data-add-school ${permissionAttrs("manage-tenants", "Only administrators can add school tenants.")}>${icon("plus")} Add School Tenant</button>
      </div>
      ${permissionNotice("manage-tenants", "Tenant creation and district configuration are admin-only in this demo.")}
      ${statCard("States", tenantStates.length, "map", "blue")}
      ${statCard("Districts", stateRecord.districts.length, "building-2", "teal")}
      ${statCard("Schools", allSchools.length, "graduation-cap", "gold")}

      ${renderUnifiedOperatingSystem()}

      ${renderProductionReadiness()}

      ${renderRealtimePanel()}

      <section class="panel state-management-panel">
        <div class="section-heading"><h3>State Manages Districts</h3><span>${stateRecord.agency}</span></div>
        <div class="management-list">
          ${stateRecord.districts.map((districtItem) => `
            <button class="management-row ${districtItem.id === district.id ? "active" : ""}" data-manage-district="${districtItem.id}">
              <div class="management-icon">${icon("building-2")}</div>
              <div><strong>${districtItem.name}</strong><small>${districtItem.region} • ${districtItem.schools.length} school instance${districtItem.schools.length === 1 ? "" : "s"}</small></div>
              <span>Managed by state</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="panel district-management-panel">
        <div class="section-heading"><h3>District Manages Schools</h3><span>${district.name}</span></div>
        <div class="management-list">
          ${district.schools.map((schoolItem) => `
            <button class="management-row ${schoolItem.id === school.id ? "active" : ""}" data-manage-school="${schoolItem.id}">
              <div class="management-icon">${icon("graduation-cap")}</div>
              <div><strong>${schoolItem.name}</strong><small>${schoolItem.category} • ${schoolItem.subdomain}.educonnect.local</small></div>
              <span>${schoolItem.status}</span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="panel tenant-controls">
        <div class="section-heading"><h3>Tenant Instance Selector</h3><span class="badge soft">${school.status}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${tenantStates.map((item) => `<option value="${item.id}" ${state.selectedState === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${stateRecord.districts.map((item) => `<option value="${item.id}" ${district.id === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
          <label><span>School</span><select id="school-filter">${district.schools.map((item) => `<option value="${item.id}" ${school.id === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
        </div>
        <div class="school-profile">
          <div class="avatar">${initials(school.name)}</div>
          <div><h4>${school.name}</h4><p>${school.subdomain}.educonnect.local • ${school.isolation}</p></div>
          <span>${school.students} students</span>
          <span>${school.staff} staff</span>
        </div>
      </section>

      <section class="panel instance-panel">
        <div class="section-heading"><h3>School Instance</h3>${icon("database")}</div>
        <div class="instance-card">
          <div><span>Instance URL</span><strong>${school.subdomain}.educonnect.local</strong></div>
          <div><span>Plan</span><strong>${school.plan}</strong></div>
          <div><span>Theme</span><strong>${school.theme}</strong></div>
          <div><span>Uptime</span><strong>${school.uptime}</strong></div>
          <div><span>Storage</span><strong>${school.storage}% used</strong></div>
          <div><span>Isolation</span><strong>${school.isolation}</strong></div>
        </div>
        <div class="module-list">
          ${school.modules.map((module) => `<span>${module}</span>`).join("")}
        </div>
      </section>

      <section class="panel tenant-settings-panel">
        <div class="section-heading"><h3>Tenant Settings</h3><span>${school.name}</span></div>
        <div class="settings-grid">
          ${tenantSettings.map(([label, detail]) => `
            <article class="setting-tile">
              ${icon(label === "Work hours" ? "clock" : label === "Data residency" ? "shield-check" : "settings")}
              <div><strong>${label}</strong><small>${detail}</small></div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel design-studio-panel">
        <div class="section-heading"><h3>School Design Studio</h3><span>Logo, colors, voice</span></div>
        <div class="design-studio">
          <div class="brand-preview-card" style="${designStyle(design)}">
            <div class="brand-preview-top">
              <div class="brand-preview-logo">${design.logo}</div>
              <div><strong>${design.crest}</strong><span>${school.subdomain}.educonnect.local</span></div>
            </div>
            <h4>${school.name}</h4>
            <p>${design.voice}</p>
            <div class="brand-preview-actions"><button data-open-role="parent" type="button">Family Portal</button><button data-open-role="lms" type="button">LMS</button><button data-open-role="community" type="button">Community</button></div>
          </div>
          <form class="design-form" id="design-form">
            <label><span>Logo mark</span><input id="design-logo" maxlength="3" value="${design.logo}" /></label>
            <label><span>Crest / logo name</span><input id="design-crest" value="${design.crest}" /></label>
            <label class="span-2"><span>Brand voice</span><input id="design-voice" value="${design.voice}" /></label>
            <label><span>Primary</span><input type="color" id="design-primary" value="${design.primary}" /></label>
            <label><span>Accent</span><input type="color" id="design-accent" value="${design.accent}" /></label>
            <label><span>Highlight</span><input type="color" id="design-highlight" value="${design.highlight}" /></label>
            <label><span>Background</span><input type="color" id="design-background" value="${design.background}" /></label>
            <button class="primary-action span-2" type="submit">${icon("check")} Apply School Design</button>
          </form>
        </div>
        <div class="palette-list">
          ${designPresets.map((preset) => `
            <button class="palette-button" data-design-preset="${preset.name}">
              <span style="background:${preset.primary}"></span>
              <span style="background:${preset.accent}"></span>
              <span style="background:${preset.highlight}"></span>
              <strong>${preset.name}</strong>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="panel privacy-panel">
        <div class="section-heading"><h3>FERPA & Privacy Controls</h3>${icon("lock")}</div>
        ${privacyControls.map((item) => `
          <article class="privacy-row">
            <div><strong>${item.label}</strong><small>${item.detail}</small></div>
            <span>${item.status}</span>
          </article>
        `).join("")}
      </section>

      ${renderCompliancePanel()}

      <section class="panel audit-panel">
        <div class="section-heading"><h3>Audit Trail</h3><span>Cross-tenant accountability</span></div>
        <div class="audit-list">
          ${auditLogs.map((log) => `
            <article class="audit-row">
              ${icon("clipboard-check")}
              <div><strong>${log.event}</strong><small>${log.actor} • ${log.scope}</small></div>
              <time>${log.time}</time>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel calendar-panel">
        <div class="section-heading"><h3>Shared Calendar</h3><span>State, district, school</span></div>
        <div class="calendar-list">
          ${calendarEvents.map((event) => `
            <article class="calendar-row">
              <div class="calendar-date">${event.date}</div>
              <div><strong>${event.title}</strong><small>${event.audience} • ${event.type}</small></div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel category-panel">
        <div class="section-heading"><h3>School Categories</h3>${icon("layers")}</div>
        ${categoryCounts.map(([category, count]) => `<article class="category-row ${category.toLowerCase()}"><strong>${category}</strong>${progress(allSchools.length ? Math.round((count / allSchools.length) * 100) : 0)}<span>${count} tenant${count === 1 ? "" : "s"}</span></article>`).join("")}
      </section>

      <section class="panel hierarchy-panel">
        <div class="section-heading"><h3>NYS Role Hierarchy</h3><button class="text-button" data-action="Hierarchy view refreshed from state to school scope.">Top down ${icon("chevron-right")}</button></div>
        <div class="hierarchy-list">
          ${governanceLevels.map(([level, roles], index) => `
            <article class="hierarchy-level">
              <div class="level-number">${index + 1}</div>
              <div>
                <h4>${level}</h4>
                <p>${roles.join(" • ")}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel district-panel">
        <div class="section-heading"><h3>District Structure</h3><span>${district.region}</span></div>
        <div class="district-tree">
          <div class="tree-node state-node">${stateRecord.agency}</div>
          <div class="tree-node district-node">${district.name}<small>${district.superintendent}</small></div>
          ${district.schools.map((item) => `<div class="tree-node school-node ${item.id === school.id ? "active" : ""}"><strong>${item.name}</strong><small>${item.category} • ${item.status}</small></div>`).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderRoleControlCenter() {
  const scopeDescriptions = {
    "state-admin": "Statewide governance, district oversight, compliance, and policy",
    "district-admin": "School tenants, shared calendars, roster health, and district analytics",
    "school-admin": "Campus users, family access, safety, approvals, and operations",
    lms: "Assignments, gradebook, learning files, and classroom integrations",
    student: "Personal learning missions, progress, and approved resources",
    teacher: "Classes, assignments, grading, messages, and community submissions",
    parent: "Linked learner progress, deadlines, approved posts, and messages",
    messages: "Authorized family, staff, and school conversations",
    community: "School announcements, submissions, approvals, and published updates",
  };
  const availableRoles = visibleRoles();
  return `
    <section class="panel users-roles-panel role-control-center" id="role-control-center" aria-labelledby="role-control-title">
      <div class="section-heading role-control-heading">
        <div><p class="eyebrow">Global administration</p><h3 id="role-control-title">Role Control Center</h3></div>
        <span>${can("manage-users") ? "Permissions editable" : "Read-only"}</span>
      </div>
      <p class="role-control-intro">Open role-based workspaces, review their access boundaries, and manage account permissions from one place.</p>
      <div class="role-control-launcher" aria-label="Role workspaces">
        ${availableRoles.map((role) => `
          <button class="role-control-card" type="button" data-open-role="${role.id}">
            <span class="role-control-icon">${icon(role.icon)}</span>
            <span><strong>${role.label}</strong><small>${scopeDescriptions[role.id]}</small></span>
            <em>Open workspace ${icon("chevron-right")}</em>
          </button>
        `).join("")}
      </div>
      <div class="section-heading account-access-heading"><h4>Account access</h4><span>${userProfiles.length} profiles</span></div>
      <div class="users-grid">
        ${userProfiles.map((profile) => `
          <article class="user-role-card">
            <div><strong>${profile.label}</strong><small>${profile.role} • ${profile.scope || "global"} scope • lands on ${profile.landing}</small></div>
            ${can("global-access") && profile.id !== activeUser().id ? `<button class="secondary-action impersonate-action" type="button" data-impersonate-profile="${profile.id}">${icon("eye")} Preview as this user</button>` : ""}
            <div class="permission-chip-list">
              ${permissionCatalog.map(([id, label]) => `
                <label class="permission-chip ${profile.permissions.includes(id) ? "active" : ""}">
                  <input type="checkbox" data-profile-permission="${profile.id}:${id}" ${profile.permissions.includes(id) ? "checked" : ""} ${can("manage-users") ? "" : "disabled"} />
                  <span>${label}</span>
                </label>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
      ${permissionNotice("manage-users", "Only administrators can change role permissions.")}
    </section>
  `;
}

function renderRealtimePanel() {
  return `
    <section class="panel realtime-panel" id="realtime-operations">
      <div class="section-heading">
        <div><h3>Realtime Operations</h3><span>${state.liveUpdates ? "Live updates enabled" : "Live updates paused"}</span></div>
        <div class="inline-actions">
          <label class="mini-toggle"><input type="checkbox" data-toggle-live ${state.liveUpdates ? "checked" : ""} /><span>Live</span></label>
          <button class="secondary-action" data-simulate-live>${icon("refresh-cw")} Simulate Update</button>
        </div>
      </div>
      <div class="realtime-list">
        ${realtimeEvents.map((event) => `
          <article class="realtime-row">
            <strong>${event.type}</strong>
            <div><span>${event.title}</span><small>${event.detail}</small></div>
            <time>${event.time}</time>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderUnifiedOperatingSystem() {
  const school = selectedSchoolRecord();
  const board = selectedCommunityBoard();
  const averageRosterGrade = Math.round(rosterRecords.reduce((sum, record) => sum + record.grade, 0) / rosterRecords.length);
  const watchCount = rosterRecords.filter((record) => record.status === "Watch").length;
  const pendingSubmissions = gradebookSubmissions.filter((submission) => submission.status !== "Reviewed").length;
  const unreadMessages = conversations.reduce((sum, conversation) => sum + (conversation.unread || 0), 0);
  const modules = [
    { role: "lms", label: "LMS", iconName: "layers", metric: `${lmsLessons.length} lessons`, detail: `${lmsAssignments.length} assignments • ${pendingSubmissions} need review` },
    { role: "student", label: "Students", iconName: "sparkles", metric: `${rosterRecords.length} learners`, detail: `${watchCount} students on watch status` },
    { role: "teacher", label: "Teachers", iconName: "graduation-cap", metric: `${teacherClasses.length} classes`, detail: `${activityFeed.length} activity events in the feed` },
    { role: "parent", label: "Parents", iconName: "users", metric: `${deadlines.length} deadlines`, detail: `${state.checkedDeadlines.length} family tasks checked` },
    { role: "messages", label: "Messages", iconName: "message-circle", metric: `${unreadMessages} unread`, detail: `${conversations.length} parent and group threads` },
    { role: "community", label: "Community", iconName: "megaphone", metric: `${board.pending.length} pending`, detail: `${board.published.length} approved posts live` },
  ];
  return `
    <section class="panel unified-os-panel" id="unified-school-os">
      <div class="section-heading">
        <div><p class="eyebrow">One integrated system</p><h3>Unified School Operating System</h3></div>
        <span>${school.name}</span>
      </div>
      <div class="unified-os-grid">
        ${modules.map((module) => `
          <button class="module-hub-card" data-open-role="${module.role}">
            <span class="module-hub-icon">${icon(module.iconName)}</span>
            <span><strong>${module.label}</strong><small>${module.detail}</small></span>
            <em>${module.metric}</em>
          </button>
        `).join("")}
      </div>
      <div class="system-snapshot-grid">
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Students + LMS</h4><button class="text-button" data-open-role="lms">Open LMS ${icon("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${averageRosterGrade}%</strong><small>Average roster grade</small></span>
            <span><strong>${pendingSubmissions}</strong><small>Submissions in queue</small></span>
            <span><strong>${state.offlinePackReady ? "Ready" : "Build"}</strong><small>Offline learning pack</small></span>
          </div>
          ${gradebookSubmissions.slice(0, 3).map((submission) => `<div class="snapshot-row"><strong>${submission.student}</strong><span>${submission.assignment}</span><em>${submission.status}</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Teachers + Classes</h4><button class="text-button" data-open-role="teacher">Open Teacher ${icon("chevron-right")}</button></div>
          ${teacherClasses.map((item) => `<div class="snapshot-row"><strong>${item.name}</strong><span>${item.room}</span><em>${item.pending} pending</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Parents + Messages</h4><button class="text-button" data-open-role="messages">Open Messages ${icon("chevron-right")}</button></div>
          ${conversations.slice(0, 3).map((conversation) => `<div class="snapshot-row"><strong>${conversation.name}</strong><span>${conversation.preview}</span><em>${conversation.unread || 0} unread</em></div>`).join("")}
        </article>
        <article class="system-snapshot-card">
          <div class="section-heading"><h4>Admin + Community</h4><button class="text-button" data-open-role="community">Open Community ${icon("chevron-right")}</button></div>
          <div class="snapshot-metrics">
            <span><strong>${board.pending.length}</strong><small>Approval queue</small></span>
            <span><strong>${unreadNotifications()}</strong><small>Unread alerts</small></span>
            <span><strong>${auditLogs.length}</strong><small>Audit entries</small></span>
          </div>
          ${realtimeEvents.slice(0, 2).map((event) => `<div class="snapshot-row"><strong>${event.type}</strong><span>${event.title}</span><em>${event.time}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `;
}

function renderProductionReadiness() {
  const doneTasks = onboardingTasks.filter((task) => task.done).length;
  const secured = securityChecklist.filter((item) => item.done).length;
  return `
    <section class="panel production-panel" id="launch-control">
      <div class="section-heading">
        <div><p class="eyebrow">Production operations</p><h3>Launch Control</h3></div>
        <span>${state.gatewayMode === "demo" ? "Demo mode" : "Backend-ready mode"}</span>
      </div>
      <div class="production-grid">
        <article class="production-card gateway-card" id="login-gateway">
          <div class="section-heading"><h4>Public Login Gateway</h4><span>${state.authProvider}</span></div>
          <label><span>Auth mode</span><select id="auth-provider"><option ${state.authProvider === "Role-based demo auth" ? "selected" : ""}>Role-based demo auth</option><option ${state.authProvider === "Supabase Auth" ? "selected" : ""}>Supabase Auth</option><option ${state.authProvider === "Firebase Auth" ? "selected" : ""}>Firebase Auth</option></select></label>
          <label><span>Backend provider</span><select id="backend-provider"><option ${state.backendProvider === "Supabase" ? "selected" : ""}>Supabase</option><option ${state.backendProvider === "Firebase" ? "selected" : ""}>Firebase</option><option ${state.backendProvider === "Custom API" ? "selected" : ""}>Custom API</option></select></label>
          <div class="gateway-actions">
            <button class="secondary-action" data-set-gateway="demo">${icon("play")} Demo Mode</button>
            <button class="primary-action" data-set-gateway="backend">${icon("database")} Backend Ready</button>
          </div>
        </article>

        <article class="production-card" id="database-blueprint">
          <div class="section-heading"><h4>Database Blueprint</h4><button class="text-button" data-provision-schema>Provision mock schema</button></div>
          <div class="schema-list">
            ${databaseTables.map((table) => `<div class="schema-row"><strong>${table.name}</strong><span>${table.records} records</span><em>${table.status}</em><small>${table.detail}</small></div>`).join("")}
          </div>
        </article>

        <article class="production-card" id="admin-onboarding">
          <div class="section-heading"><h4>Admin Onboarding</h4><span>${doneTasks}/${onboardingTasks.length} complete</span></div>
          <div class="checklist-list">
            ${onboardingTasks.map((task) => `<label class="checklist-row"><input type="checkbox" data-onboarding-task="${task.id}" ${task.done ? "checked" : ""} /><span class="custom-check">${task.done ? icon("check") : ""}</span><span><strong>${task.label}</strong><small>${task.owner}</small></span></label>`).join("")}
          </div>
          <form id="onboarding-user-form" class="mini-form">
            <input id="onboarding-user-name" placeholder="Invite user name" />
            <select id="onboarding-user-role" aria-label="Invite user role"><option>Teacher</option><option>Parent</option><option>Student</option><option>Admin</option></select>
            <button class="secondary-action" type="submit">${icon("plus")} Invite</button>
          </form>
        </article>

        <article class="production-card" id="platform-file-uploads">
          <div class="section-heading"><h4>File Uploads</h4><span>${fileUploads.length} files</span></div>
          <label class="upload-drop">${icon("paperclip")} Add assignment, PDF, image, or community file<input type="file" id="production-file-upload" multiple /></label>
          <div class="upload-list">
            ${fileUploads.map((file) => `<div class="upload-row"><strong>${file.name}</strong><span>${file.area} • ${file.size}</span><em>${file.status}</em></div>`).join("")}
          </div>
        </article>

        <article class="production-card" id="notification-delivery">
          <div class="section-heading"><h4>Notification Delivery</h4><button class="text-button" data-send-delivery-test>Send test batch</button></div>
          ${notificationDeliveryLog.map((item) => `<div class="delivery-row"><strong>${item.channel}</strong><span>${item.audience}</span><em>${item.status}</em><small>${item.detail}</small></div>`).join("")}
        </article>

        <article class="production-card" id="security-checklist">
          <div class="section-heading"><h4>Privacy & Security</h4><span>${secured}/${securityChecklist.length} ready</span></div>
          <div class="checklist-list">
            ${securityChecklist.map((item) => `<label class="checklist-row"><input type="checkbox" data-security-check="${item.id}" ${item.done ? "checked" : ""} /><span class="custom-check">${item.done ? icon("check") : ""}</span><span><strong>${item.label}</strong><small>${item.status}</small></span></label>`).join("")}
          </div>
        </article>

        <article class="production-card deploy-card" id="deployment-pipeline">
          <div class="section-heading"><h4>Deployment Pipeline</h4><span>Hostinger live</span></div>
          ${deployPipeline.map((item) => `<div class="pipeline-row"><strong>${item.step}</strong><span>${item.detail}</span><em class="${item.status.toLowerCase()}">${item.status}</em></div>`).join("")}
        </article>
      </div>
      ${renderOperationalCommandCenter()}
    </section>
  `;
}

function renderOperationalCommandCenter() {
  const ops = productionReadiness;
  const storagePercent = Math.round((ops.storage.usedGb / ops.storage.quotaGb) * 100);
  const operationTabs = [["tenants", "Tenants & domains"], ["security", "Security & backups"], ["notifications", "Notifications"], ["services", "Connected services"], ["jobs", "Jobs & recovery"], ["monitoring", "Monitoring"], ["launch", "Launch & review"]];
  const panelAttributes = (id) => `id="operations-panel-${id}" role="tabpanel" aria-labelledby="operations-tab-${id}"`;
  return `<div class="operations-command-center" id="platform-operations-center">
    <div class="section-heading"><div><p class="eyebrow">Production readiness</p><h3>Platform Operations Center</h3></div><span>${ops.monitors.every((item) => item.status === "Operational") ? "All systems operational" : "Attention required"}</span></div>
    <div class="operations-tabs" role="tablist" aria-label="Platform operations">${operationTabs.map(([id, label]) => `<button type="button" role="tab" id="operations-tab-${id}" aria-controls="operations-panel-${id}" aria-selected="${state.activeOperationsTab === id}" tabindex="${state.activeOperationsTab === id ? "0" : "-1"}" class="${state.activeOperationsTab === id ? "active" : ""}" data-operations-tab="${id}">${label}</button>`).join("")}</div>
    ${state.activeOperationsTab === "tenants" ? `<div class="operations-grid" ${panelAttributes("tenants")}>
      <article class="operations-card"><div class="section-heading"><h4>Tenant isolation</h4><span>${ops.tenantIsolation.status}</span></div><p>${ops.tenantIsolation.strategy}</p><div class="operations-metric"><strong>${tenantStates.flatMap((item) => item.districts).flatMap((item) => item.schools).length}</strong><span>school databases</span></div><button class="secondary-action" type="button" data-run-isolation-test>${icon("shield-check")} Test isolation</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Tenant media storage</h4><span>${storagePercent}% used</span></div>${progress(storagePercent)}<p>${ops.storage.usedGb} GB of ${ops.storage.quotaGb} GB • file validation active • compression and thumbnails: ${ops.storage.compression}</p><button class="secondary-action" type="button" data-optimize-storage>${icon("database")} Optimize media</button></article>
      <article class="operations-card domain-operations"><div class="section-heading"><h4>Domains & SSL</h4><span>${ops.domains.filter((item) => item.ssl === "Active").length}/${ops.domains.length} active</span></div>${ops.domains.map((domain) => `<div class="domain-row"><div><strong>${escapeHtml(domain.domain)}</strong><small>${domain.dns} • SSL ${domain.ssl}</small></div><button class="text-button" type="button" data-verify-domain="${domain.schoolId}">Verify</button></div>`).join("")}</article>
      <article class="operations-card"><div class="section-heading"><h4>Plans & billing</h4><span>${ops.billing.status}</span></div><div class="operations-metric"><strong>$${ops.billing.monthlyEstimate}</strong><span>estimated monthly</span></div><p>${ops.billing.schools} schools on ${ops.billing.plan}. No premium classroom paywall.</p></article>
    </div>` : ""}
    ${state.activeOperationsTab === "security" ? `<div class="operations-grid" ${panelAttributes("security")}>
      <article class="operations-card"><div class="section-heading"><h4>Authentication</h4><span>${ops.security.mfaRequired ? "MFA required" : "MFA optional"}</span></div><label class="toggle-row"><input type="checkbox" data-security-setting="mfaRequired" ${ops.security.mfaRequired ? "checked" : ""}/><span>Require MFA for administrators</span></label><label class="toggle-row"><input type="checkbox" data-security-setting="loginAlerts" ${ops.security.loginAlerts ? "checked" : ""}/><span>Send new-login alerts</span></label><label class="setting-field"><span>Idle session timeout</span><select data-session-timeout><option value="30" ${ops.security.sessionTimeoutMinutes === 30 ? "selected" : ""}>30 minutes</option><option value="60" ${ops.security.sessionTimeoutMinutes === 60 ? "selected" : ""}>60 minutes</option><option value="480" ${ops.security.sessionTimeoutMinutes === 480 ? "selected" : ""}>8 hours</option></select></label></article>
      <article class="operations-card"><div class="section-heading"><h4>Active sessions</h4><span>${ops.security.activeSessions.length}</span></div>${ops.security.activeSessions.map((session) => `<div class="session-row"><div><strong>${escapeHtml(session.user)}</strong><small>${escapeHtml(session.device)} • ${escapeHtml(session.location)} • ${session.lastActive}</small></div>${session.current ? `<span>Current</span>` : `<button class="text-button" data-revoke-session="${session.id}">Revoke</button>`}</div>`).join("")}</article>
      <article class="operations-card"><div class="section-heading"><h4>Backups & recovery</h4><span>${ops.backups.encrypted ? "Encrypted" : "Review"}</span></div><p>${ops.backups.schedule} • ${ops.backups.retentionDays}-day retention • RPO ${ops.backups.rpoHours}h / RTO ${ops.backups.rtoHours}h</p><p>Last backup: ${ops.backups.lastBackup}<br/>Restore drill: ${ops.backups.lastRestoreTest}<br/>Offsite copy: ${ops.backups.offsiteStatus}</p><div class="inline-actions"><button class="secondary-action" type="button" data-create-backup>Create backup</button><button class="secondary-action" type="button" data-test-restore>Test restore</button></div></article>
      <article class="operations-card"><div class="section-heading"><h4>Accessibility assurance</h4><span>${ops.accessibility.score}/100</span></div><p>${ops.accessibility.wcagTarget} • ${ops.accessibility.issues} open issues • ${ops.accessibility.languages.join(" + ")}</p><button class="secondary-action" type="button" data-run-accessibility-audit>${icon("check")} Run accessibility audit</button></article>
    </div>` : ""}
    ${state.activeOperationsTab === "notifications" ? `<div class="operations-grid" ${panelAttributes("notifications")}><article class="operations-card notification-template-card"><div class="section-heading"><h4>Notification templates</h4><span>${ops.notifications.provider}</span></div>${ops.notifications.templates.map((template) => `<div class="template-row"><div><strong>${escapeHtml(template.name)}</strong><small>${template.channels.join(" + ")} • ${template.status}</small></div><button class="text-button" type="button" data-send-template="${template.id}">Send test</button></div>`).join("")}<form id="notification-template-form" class="mini-form"><input id="notification-template-name" placeholder="New template name" required/><select id="notification-template-channel"><option>Email</option><option>SMS</option><option>Push</option></select><button class="secondary-action" type="submit">Add template</button></form></article><article class="operations-card"><h4>Consent & opt-outs</h4><div class="operations-metric"><strong>${ops.notifications.optOuts}</strong><span>channel opt-outs honored</span></div><p>Emergency notices remain available while routine communications respect family preferences.</p></article></div>` : ""}
    ${state.activeOperationsTab === "services" ? `<div class="operations-grid" ${panelAttributes("services")}>
      <article class="operations-card span-full"><div class="section-heading"><div><h4>Production service providers</h4><p>Credentials stay in the deployment environment and are never saved in a browser snapshot.</p></div><span>${ops.providers.filter((item) => item.status === "Connected").length}/${ops.providers.length} connected</span></div><div class="service-readiness-grid">${ops.providers.map((provider) => `<div class="service-readiness-row"><div><strong>${escapeHtml(provider.name)}</strong><small>${escapeHtml(provider.purpose)}</small></div><span class="readiness-status">${escapeHtml(provider.status)}</span><button class="text-button" type="button" data-test-provider="${provider.id}">Test setup</button><em>${escapeHtml(provider.lastTest)}</em></div>`).join("")}</div></article>
      <article class="operations-card span-full"><div class="section-heading"><div><h4>SIS, identity, and classroom connections</h4><p>OneRoster CSV works without credentials. Hosted connections remain inactive until their school-owned credentials are configured.</p></div><span>${ops.integrations.length} adapters</span></div><div class="integration-operations-grid">${ops.integrations.map((integration) => `<div class="integration-operation-card"><div><strong>${escapeHtml(integration.name)}</strong><small>${escapeHtml(integration.category)} • ${escapeHtml(integration.direction)}</small></div><span>${escapeHtml(integration.status)}</span><p>Last sync: ${escapeHtml(integration.lastSync)} • ${integration.records} records</p><div class="inline-actions"><button class="secondary-action" type="button" data-test-integration="${integration.id}">Test</button><button class="primary-action" type="button" data-sync-integration="${integration.id}">Sync now</button></div></div>`).join("")}</div></article>
    </div>` : ""}
    ${state.activeOperationsTab === "jobs" ? `<div class="operations-grid" ${panelAttributes("jobs")}>
      <article class="operations-card span-full"><div class="section-heading"><div><h4>Background work</h4><p>Long-running media, delivery, SIS, analytics, and recovery work is queued and retryable.</p></div><span>${ops.jobs.filter((job) => job.status === "Queued").length} queued</span></div><div class="job-list">${ops.jobs.map((job) => `<div class="job-row"><div><strong>${escapeHtml(job.name)}</strong><small>${escapeHtml(job.schedule)} • Last run: ${escapeHtml(job.lastRun)}</small></div><span>${escapeHtml(job.status)}</span><div class="job-progress">${progress(job.progress)}</div><button class="text-button" type="button" data-run-job="${job.id}">Run now</button></div>`).join("")}</div></article>
      <article class="operations-card"><div class="section-heading"><h4>Relational data platform</h4><span>${ops.dataPlatform.status}</span></div><p>${ops.dataPlatform.engine} • ${ops.dataPlatform.tenantPolicy}</p><p>${ops.dataPlatform.migration}</p><button class="secondary-action" type="button" data-test-provider="database">Test database setup</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Recovery objectives</h4><span>${ops.backups.offsiteStatus}</span></div><div class="operations-metric"><strong>${ops.backups.rtoHours}h</strong><span>restore target</span></div><p>Maximum target data loss: ${ops.backups.rpoHours} hours. Offsite copy runs after the nightly encrypted backup.</p></article>
    </div>` : ""}
    ${state.activeOperationsTab === "monitoring" ? `<div class="operations-grid" ${panelAttributes("monitoring")}><article class="operations-card monitor-card"><div class="section-heading"><h4>Live service health</h4><button class="text-button" type="button" data-run-monitors>Run checks</button></div>${ops.monitors.map((monitor) => `<div class="monitor-row"><span class="health-dot ${monitor.status.toLowerCase()}"></span><div><strong>${monitor.service}</strong><small>${monitor.latency} ms • ${monitor.uptime} uptime</small></div><em>${monitor.status}</em></div>`).join("")}</article><article class="operations-card"><h4>Installable applications</h4><p>EduConnect supports installation, offline lesson access, queued submissions, and background synchronization.</p><button class="secondary-action" type="button" data-install-app>${icon("smartphone")} ${state.pwaInstalled ? "App installed" : "Install EduConnect"}</button></article><article class="operations-card"><div class="section-heading"><h4>Privacy-safe analytics</h4><span>Minimum cohort ${ops.analytics.privacyThreshold}</span></div>${ops.analytics.metrics.map((metric) => `<div class="analytics-row"><div><strong>${escapeHtml(metric.label)}</strong><small>${metric.status === "Suppressed" || metric.cohortSize < ops.analytics.privacyThreshold ? `Not shown—fewer than ${ops.analytics.privacyThreshold} learners` : `${metric.cohortSize} learners`}</small></div><span>${metric.status === "Suppressed" || metric.cohortSize < ops.analytics.privacyThreshold ? "—" : escapeHtml(metric.value)}</span></div>`).join("")}<button class="secondary-action" type="button" data-refresh-analytics>Refresh aggregates</button></article><article class="operations-card"><div class="section-heading"><h4>Observability</h4><span>${ops.observability.lastIncident}</span></div><p>Structured logs, client error capture, performance tracking, and notification delivery alerts are enabled.</p><p>Alert destination: ${ops.observability.alertDestination}</p></article></div>` : ""}
    ${state.activeOperationsTab === "launch" ? `<div class="operations-grid" ${panelAttributes("launch")}>
      <article class="operations-card"><div class="section-heading"><h4>Safe sandbox school</h4><span>${ops.sandbox.status}</span></div><p>${escapeHtml(ops.sandbox.name)} uses synthetic content only and excludes real students, grades, messages, files, and credentials.</p>${ops.sandbox.tenantId ? `<p>Tenant: ${escapeHtml(ops.sandbox.tenantId)} • Expires ${escapeHtml(ops.sandbox.expiresOn)}</p>` : ""}<button class="primary-action" type="button" data-create-sandbox>${ops.sandbox.tenantId ? "Reset sandbox" : "Create sandbox"}</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Pilot school plan</h4><span>${ops.pilot.status}</span></div><p>${ops.pilot.dataPolicy}</p>${ops.pilot.checkpoints.map((checkpoint) => `<label class="checklist-row"><input type="checkbox" data-pilot-checkpoint="${escapeHtml(checkpoint)}" ${ops.pilot.completed.includes(checkpoint) ? "checked" : ""}/><span class="custom-check">${ops.pilot.completed.includes(checkpoint) ? icon("check") : ""}</span><span><strong>${escapeHtml(checkpoint)}</strong></span></label>`).join("")}</article>
      <article class="operations-card"><div class="section-heading"><h4>Independent security review</h4><span>${ops.securityReview.status}</span></div><p>${escapeHtml(ops.securityReview.reviewer)}. The package includes configuration, authentication, authorization, upload, recovery, and dependency review scopes.</p><p>Last export: ${escapeHtml(ops.securityReview.lastExport)}</p><button class="secondary-action" type="button" data-export-security-review>Generate review package</button></article>
      <article class="operations-card"><div class="section-heading"><h4>Launch boundary</h4><span>External coordination</span></div><p>Provider credentials, a participating pilot school, and an independent reviewer must be supplied by authorized people before these items can be marked complete.</p><button class="secondary-action" type="button" data-run-launch-check>Run launch check</button></article>
    </div>` : ""}
  </div>`;
}

function renderCompliancePanel() {
  return `
    <section class="panel compliance-panel" id="compliance-dashboard">
      <div class="section-heading"><h3>Privacy & Compliance Dashboard</h3><span>FERPA operations</span></div>
      <div class="compliance-grid">
        ${complianceMetrics.map((item) => `
          <article class="compliance-card">
            ${icon("shield-check")}
            <div><strong>${item.value}</strong><span>${item.label}</span><small>${item.status} • ${item.detail}</small></div>
          </article>
        `).join("")}
      </div>
      ${permissionNotice("view-compliance", "Compliance detail is admin-only.")}
    </section>
  `;
}

function renderLessonLibrary({ teacherStudio = false } = {}) {
  const filtered = state.lessonFilter === "All" ? lmsLessons : lmsLessons.filter((lesson) => lesson.status === state.lessonFilter);
  const published = lmsLessons.filter((lesson) => lesson.status === "Published").length;
  const drafts = lmsLessons.length - published;
  return `
    <section class="panel lesson-library-panel ${teacherStudio ? "teacher-lesson-library" : "lms-panel"}" id="${teacherStudio ? "lesson-studio" : "lesson-library"}">
      <div class="section-heading lesson-library-heading">
        <div><p class="eyebrow">${teacherStudio ? "Teacher authoring" : "Course content"}</p><h3>Lesson Library</h3></div>
        <div class="inline-actions">
          <select id="lesson-filter" aria-label="Filter lessons"><option>All</option><option ${state.lessonFilter === "Published" ? "selected" : ""}>Published</option><option ${state.lessonFilter === "Draft" ? "selected" : ""}>Draft</option></select>
          ${teacherStudio ? `<button class="primary-action" type="button" data-new-lesson ${permissionAttrs("teacher-tools", "Only teachers and administrators can create lessons.")}>${icon("plus")} Create lesson</button>` : ""}
        </div>
      </div>
      <div class="lesson-library-stats"><span><strong>${lmsLessons.length}</strong> total lessons</span><span><strong>${published}</strong> published</span><span><strong>${drafts}</strong> drafts</span></div>
      <div class="lesson-card-grid">
        ${filtered.map((lesson) => {
          const quizCount = lesson.blocks.filter((block) => block.type === "quiz").length;
          const mediaCount = lesson.blocks.filter((block) => block.type === "media").length;
          return `
            <article class="lesson-card">
              <div class="lesson-card-top"><span class="lesson-status ${lesson.status.toLowerCase()}">${lesson.status}</span><small>${escapeHtml(lesson.subject)}</small></div>
              <h4>${escapeHtml(lesson.title)}</h4>
              <p>${escapeHtml(lesson.summary)}</p>
              <div class="lesson-meta"><span>${icon("graduation-cap")} ${escapeHtml(lesson.className)}</span><span>${icon("clock")} ${lesson.estimatedMinutes} min</span><span>${icon("layers")} ${lesson.blocks.length} blocks</span></div>
              <div class="lesson-feature-row"><span>${quizCount} quiz${quizCount === 1 ? "" : "zes"}</span><span>${mediaCount} media</span><span>${lesson.points} points</span></div>
              <div class="lesson-card-actions">
                <button class="secondary-action" type="button" data-preview-lesson="${lesson.id}">${icon("eye")} Preview</button>
                ${can("teacher-tools") ? `<button class="secondary-action" type="button" data-edit-lesson="${lesson.id}">${icon("pen-line")} Edit</button><button class="text-button" type="button" data-toggle-lesson="${lesson.id}">${lesson.status === "Published" ? "Unpublish" : "Publish"}</button>` : ""}
              </div>
            </article>
          `;
        }).join("") || `<div class="empty-state">No ${state.lessonFilter.toLowerCase()} lessons yet.</div>`}
      </div>
      ${renderInstructorLessonPreview(lmsLessons.find((lesson) => lesson.id === state.lessonPreviewId))}
    </section>
  `;
}

function renderInstructorLessonPreview(lesson) {
  if (!lesson) return "";
  return `<aside class="lesson-preview-panel" aria-label="Lesson preview">
    <div class="section-heading"><div><p class="eyebrow">Student preview</p><h4>${escapeHtml(lesson.title)}</h4></div><button class="icon-button" type="button" data-close-lesson-preview aria-label="Close lesson preview">${icon("x")}</button></div>
    <p>${escapeHtml(lesson.summary)}</p>
    <div class="lesson-preview-meta"><span>${escapeHtml(lesson.className)}</span><span>${lesson.estimatedMinutes} minutes</span><span>${lesson.points} points</span></div>
    <div class="lesson-preview-blocks">${lesson.blocks.map((block, index) => {
      if (block.type === "text") return `<article><span class="block-number">${index + 1}</span><div><strong>${escapeHtml(block.title)}</strong><p>${escapeHtml(block.body)}</p></div></article>`;
      if (block.type === "media") return `<article><span class="block-number">${index + 1}</span><div><strong>${escapeHtml(block.title)}</strong>${renderLessonMedia(block)}</div></article>`;
      return `<article><span class="block-number">${index + 1}</span><div><strong>${escapeHtml(block.title)}</strong><p>${escapeHtml(block.question)}</p><div class="preview-answer-list">${block.options.filter(Boolean).map((option) => `<span>${escapeHtml(option)}</span>`).join("")}</div></div></article>`;
    }).join("")}</div>
  </aside>`;
}

function renderLessonBlockEditor(block, index, total) {
  const moveControls = `<div class="block-order-actions"><button type="button" data-move-lesson-block="${block.id}:up" ${index === 0 ? "disabled" : ""} aria-label="Move block up">↑</button><span>${index + 1}</span><button type="button" data-move-lesson-block="${block.id}:down" ${index === total - 1 ? "disabled" : ""} aria-label="Move block down">↓</button><button type="button" data-remove-lesson-block="${block.id}" aria-label="Remove block">${icon("x")}</button></div>`;
  if (block.type === "quiz") return `
    <article class="lesson-block-editor quiz-block-editor" data-lesson-block="${block.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${icon("clipboard-check")}</span><div><strong>Quiz</strong><small>Auto-graded knowledge check</small></div></div>${moveControls}</div>
      <div class="lesson-block-fields">
        <label><span>Quiz title</span><input value="${escapeHtml(block.title)}" data-block-field="${block.id}:title" /></label>
        <label><span>Question type</span><select data-block-field="${block.id}:questionType"><option ${block.questionType === "Multiple choice" ? "selected" : ""}>Multiple choice</option><option ${block.questionType === "True or false" ? "selected" : ""}>True or false</option><option ${block.questionType === "Short answer" ? "selected" : ""}>Short answer</option><option ${block.questionType === "Fill in the blank" ? "selected" : ""}>Fill in the blank</option><option ${block.questionType === "Matching" ? "selected" : ""}>Matching</option></select></label>
        <label class="span-2"><span>Question</span><textarea data-block-field="${block.id}:question" placeholder="What should students understand?">${escapeHtml(block.question)}</textarea></label>
        <div class="quiz-option-editor span-2">
          ${block.questionType === "Matching"
            ? `<div class="matching-pair-editor">${(block.pairs || []).map((pair, pairIndex) => `<label><span>Prompt ${pairIndex + 1}</span><input value="${escapeHtml(pair.left)}" data-match-pair="${block.id}:${pairIndex}:left" /></label><label><span>Match ${pairIndex + 1}</span><input value="${escapeHtml(pair.right)}" data-match-pair="${block.id}:${pairIndex}:right" /></label>`).join("")}</div>`
            : ["Short answer", "Fill in the blank"].includes(block.questionType)
            ? `<label><span>Accepted answer</span><input aria-label="Accepted short answer" value="${escapeHtml(block.options[0] || "")}" data-quiz-option="${block.id}:0" /></label>`
            : block.options.map((option, optionIndex) => `<label class="quiz-option ${block.questionType === "True or false" && optionIndex > 1 ? "hidden-option" : ""}"><input type="radio" name="correct-${block.id}" value="${optionIndex}" data-correct-answer="${block.id}" ${Number(block.correctAnswer) === optionIndex ? "checked" : ""} /><span>Correct</span><input aria-label="Answer option ${optionIndex + 1}" value="${escapeHtml(option)}" data-quiz-option="${block.id}:${optionIndex}" /></label>`).join("")}
        </div>
        <label><span>Points</span><input type="number" min="1" max="100" value="${block.points}" data-block-field="${block.id}:points" /></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${block.id}:required" ${block.required ? "checked" : ""} /><span>Required question</span></label>
        <label><span>Time limit (minutes)</span><input type="number" min="0" max="180" value="${block.timeLimit || 0}" data-block-field="${block.id}:timeLimit" /></label>
        <label><span>Maximum attempts</span><input type="number" min="1" max="10" value="${block.maxAttempts || 1}" data-block-field="${block.id}:maxAttempts" /></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${block.id}:randomize" ${block.randomize ? "checked" : ""} /><span>Randomize answer choices</span></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${block.id}:showAnswers" ${block.showAnswers !== false ? "checked" : ""} /><span>Show feedback after submission</span></label>
        <label class="toggle-field"><input type="checkbox" data-block-field="${block.id}:partialCredit" ${block.partialCredit !== false ? "checked" : ""} /><span>Allow partial credit</span></label>
        <label><span>Question pool</span><select data-block-field="${block.id}:questionPool"><option ${block.questionPool === "Current lesson" ? "selected" : ""}>Current lesson</option><option ${block.questionPool === "Course bank" ? "selected" : ""}>Course bank</option><option ${block.questionPool === "Standards bank" ? "selected" : ""}>Standards bank</option></select></label>
        <label><span>Accommodation time</span><select data-block-field="${block.id}:accommodationMultiplier"><option value="1" ${Number(block.accommodationMultiplier) === 1 ? "selected" : ""}>Standard time</option><option value="1.5" ${Number(block.accommodationMultiplier || 1.5) === 1.5 ? "selected" : ""}>1.5× time</option><option value="2" ${Number(block.accommodationMultiplier) === 2 ? "selected" : ""}>2× time</option></select></label>
        <label class="span-2"><span>Answer feedback</span><textarea data-block-field="${block.id}:feedback" placeholder="Explain the correct answer.">${escapeHtml(block.feedback)}</textarea></label>
      </div>
    </article>`;
  if (block.type === "media") return `
    <article class="lesson-block-editor media-block-editor" data-lesson-block="${block.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${icon("video")}</span><div><strong>Media</strong><small>Video, image, audio, document, or link</small></div></div>${moveControls}</div>
      <div class="lesson-block-fields">
        <label><span>Media title</span><input value="${escapeHtml(block.title)}" data-block-field="${block.id}:title" /></label>
        <label><span>Media type</span><select data-block-field="${block.id}:mediaType">${["Video", "Image", "Audio", "Document", "Link"].map((type) => `<option ${block.mediaType === type ? "selected" : ""}>${type}</option>`).join("")}</select></label>
        <label class="span-2"><span>Media URL</span><input type="url" value="${escapeHtml(block.url)}" data-block-field="${block.id}:url" placeholder="https://..." /></label>
        <label class="span-2 lesson-file-upload"><span>Or upload media</span><input type="file" data-lesson-media-upload="${block.id}" accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx" /><small>${block.file ? `${escapeHtml(block.file.name)} • ${escapeHtml(block.file.status || "Ready")}` : "Images, video, audio, PDF, Word, or PowerPoint up to 5 MB"}</small></label>
        <label class="span-2"><span>Caption or instructions</span><textarea data-block-field="${block.id}:caption">${escapeHtml(block.caption)}</textarea></label>
      </div>
    </article>`;
  return `
    <article class="lesson-block-editor text-block-editor" data-lesson-block="${block.id}">
      <div class="lesson-block-heading"><div><span class="block-type-icon">${icon("file-text")}</span><div><strong>Content</strong><small>Directions, reading, or explanation</small></div></div>${moveControls}</div>
      <div class="lesson-block-fields">
        <label class="span-2"><span>Section title</span><input value="${escapeHtml(block.title)}" data-block-field="${block.id}:title" /></label>
        <label class="span-2"><span>Lesson content</span><textarea class="lesson-content-textarea" data-block-field="${block.id}:body" placeholder="Write instructions or learning content...">${escapeHtml(block.body)}</textarea></label>
      </div>
    </article>`;
}

function renderLessonBuilder() {
  const draft = state.lessonDraft || newLessonDraft();
  return `
    <section class="panel lesson-builder-panel" id="lesson-studio" aria-labelledby="lesson-builder-title">
      <div class="section-heading lesson-builder-heading"><div><p class="eyebrow">Lesson Studio</p><h3 id="lesson-builder-title">${draft.id ? "Edit lesson" : "Create a lesson"}</h3></div><button class="icon-button" type="button" data-close-lesson-builder aria-label="Close lesson builder">${icon("x")}</button></div>
      <form id="lesson-builder-form" class="lesson-builder-form">
        <div class="lesson-settings-grid">
          <label class="span-2"><span>Lesson title</span><input required value="${escapeHtml(draft.title)}" data-lesson-field="title" placeholder="Example: Exploring persuasive writing" /></label>
          <label><span>Subject</span><select data-lesson-field="subject">${["English Language Arts", "Math", "Science", "Social Studies", "Art", "Technology"].map((subject) => `<option ${draft.subject === subject ? "selected" : ""}>${subject}</option>`).join("")}</select></label>
          <label><span>Class</span><select data-lesson-field="className">${teacherClasses.map((item) => `<option ${draft.className === item.name ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
          <label class="span-2"><span>Learning objective and summary</span><textarea required data-lesson-field="summary" placeholder="What will students learn and do?">${escapeHtml(draft.summary)}</textarea></label>
          <label><span>Due date</span><input type="date" value="${escapeHtml(draft.dueDate)}" data-lesson-field="dueDate" /></label>
          <label><span>Estimated minutes</span><input type="number" min="5" max="240" value="${draft.estimatedMinutes}" data-lesson-field="estimatedMinutes" /></label>
          <label><span>Total points</span><input type="number" min="0" max="1000" value="${draft.points}" data-lesson-field="points" /></label>
          <label><span>Visibility</span><select data-lesson-field="visibility"><option ${draft.visibility === "Teacher only" ? "selected" : ""}>Teacher only</option><option ${draft.visibility === "Students" ? "selected" : ""}>Students</option><option ${draft.visibility === "Students and families" ? "selected" : ""}>Students and families</option></select></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="allowLate" ${draft.allowLate ? "checked" : ""} /><span>Allow late completion</span></label>
          <label class="toggle-field"><input type="checkbox" data-lesson-field="requireOrder" ${draft.requireOrder ? "checked" : ""} /><span>Require blocks in order</span></label>
        </div>
        <div class="lesson-block-toolbar"><div><strong>Lesson blocks</strong><small>Add and reorder learning content.</small></div><div class="inline-actions"><button class="secondary-action" type="button" data-add-lesson-block="text">${icon("file-text")} Content</button><button class="secondary-action" type="button" data-add-lesson-block="media">${icon("video")} Media</button><button class="secondary-action" type="button" data-add-lesson-block="quiz">${icon("clipboard-check")} Quiz</button></div></div>
        <div class="question-bank-bar"><div><strong>Question bank</strong><small>Reuse standards-aligned questions.</small></div><select id="question-bank-select" aria-label="Question bank item">${questionBank.map((item) => `<option value="${item.id}">${escapeHtml(item.subject)} • ${escapeHtml(item.question)}</option>`).join("")}</select><button class="secondary-action" type="button" data-add-bank-question>${icon("plus")} Add question</button></div>
        <div class="lesson-block-list">${draft.blocks.map((block, index) => renderLessonBlockEditor(block, index, draft.blocks.length)).join("")}</div>
        <div class="lesson-publish-bar"><div><strong>${draft.blocks.length} blocks</strong><span>Changes are saved when you choose an action.</span></div><div class="inline-actions"><button class="secondary-action" type="submit" data-lesson-status="Draft">Save draft</button><button class="primary-action" type="submit" data-lesson-status="Published">${icon("check")} Publish lesson</button></div></div>
      </form>
    </section>
  `;
}

function renderTeacherLessonStudio() {
  return state.lessonBuilderOpen ? renderLessonBuilder() : renderLessonLibrary({ teacherStudio: true });
}

function renderLessonMedia(block) {
  if (block.file) {
    const downloadUrl = block.file.id?.startsWith("upload-") && state.apiMode === "live-api" ? serverFileDownloadUrl(block.file.id) : block.file.dataUrl || "#";
    return `<a class="lesson-media-link" href="${escapeHtml(downloadUrl)}" ${downloadUrl === "#" ? "" : "target=\"_blank\" rel=\"noreferrer\""}>${icon("paperclip")}<span><strong>${escapeHtml(block.file.name)}</strong><small>${escapeHtml(block.caption || block.file.type || "Lesson attachment")}</small></span>${icon("download")}</a>`;
  }
  const url = safeExternalUrl(block.url);
  if (!url) return `<div class="lesson-media-placeholder">${icon("paperclip")}<span>Media link has not been added yet.</span></div>`;
  if (block.mediaType === "Image") return `<figure class="student-lesson-media"><img src="${url}" alt="${escapeHtml(block.caption || block.title)}" /><figcaption>${escapeHtml(block.caption)}</figcaption></figure>`;
  if (block.mediaType === "Audio") return `<div class="student-lesson-media"><audio controls src="${url}"></audio><p>${escapeHtml(block.caption)}</p></div>`;
  if (block.mediaType === "Video" && /\.(mp4|webm|ogg)(\?|$)/i.test(url)) return `<div class="student-lesson-media"><video controls src="${url}"></video><p>${escapeHtml(block.caption)}</p></div>`;
  return `<a class="lesson-media-link" href="${url}" target="_blank" rel="noreferrer">${icon(block.mediaType === "Video" ? "play" : "paperclip")}<span><strong>${escapeHtml(block.title)}</strong><small>${escapeHtml(block.caption || `Open ${block.mediaType.toLowerCase()}`)}</small></span>${icon("chevron-right")}</a>`;
}

function renderStudentQuizAnswers(block) {
  if (["Short answer", "Fill in the blank"].includes(block.questionType)) {
    return `<label class="short-answer-field"><span>Your answer</span><input name="quiz-${block.id}" ${block.required ? "required" : ""} /></label>`;
  }
  if (block.questionType === "Matching") {
    const pairs = (block.pairs || []).filter((pair) => pair.left.trim() && pair.right.trim());
    const choices = block.randomize ? [...pairs].reverse() : pairs;
    return pairs.map((pair, pairIndex) => `<label class="matching-answer"><span>${escapeHtml(pair.left)}</span><select name="quiz-${block.id}-${pairIndex}" ${block.required ? "required" : ""}><option value="">Choose a match</option>${choices.map((choice) => `<option value="${escapeHtml(choice.right)}">${escapeHtml(choice.right)}</option>`).join("")}</select></label>`).join("");
  }
  let choices = block.options.map((option, optionIndex) => ({ option, optionIndex })).filter(({ option }) => option.trim());
  if (block.randomize) choices = [...choices].reverse();
  return choices.map(({ option, optionIndex }) => `<label><input type="radio" name="quiz-${block.id}" value="${optionIndex}" ${block.required ? "required" : ""} /><span>${escapeHtml(option)}</span></label>`).join("");
}

function lessonProgressPercent(lesson) {
  const record = state.lessonProgress?.[lesson.id] || {};
  const completed = new Set(record.completedBlocks || []);
  lesson.blocks.filter((block) => block.type === "quiz" && record.completed).forEach((block) => completed.add(block.id));
  return lesson.blocks.length ? Math.round((completed.size / lesson.blocks.length) * 100) : 0;
}

function renderStudentLessons() {
  const lessons = lmsLessons.filter((lesson) => lesson.status === "Published");
  const active = lessons.find((lesson) => lesson.id === state.activeStudentLessonId) || lessons[0];
  const progressRecord = active ? state.lessonProgress?.[active.id] : null;
  return `
    <section class="panel student-lessons-panel" id="student-lessons">
      <div class="section-heading"><div><p class="eyebrow">My classroom</p><h3>${t("lessons")}</h3></div><span>${lessons.length} available</span></div>
      <div class="student-lesson-layout">
        <div class="student-lesson-list">
          ${lessons.map((lesson) => `<button class="student-lesson-card ${active?.id === lesson.id ? "active" : ""}" type="button" data-open-student-lesson="${lesson.id}"><span>${icon("book-open")}</span><div><strong>${escapeHtml(lesson.title)}</strong><small>${escapeHtml(lesson.subject)} • ${lesson.estimatedMinutes} min • ${lesson.points} points</small>${progress(lessonProgressPercent(lesson))}</div><em>${lessonProgressPercent(lesson)}%</em></button>`).join("")}
        </div>
        ${active ? `<article class="student-lesson-view">
          <div class="student-lesson-hero"><span>${escapeHtml(active.subject)}</span><h4>${escapeHtml(active.title)}</h4><p>${escapeHtml(active.summary)}</p><div><small>Due ${active.dueDate || "anytime"}</small><small>${active.allowLate ? "Late work allowed" : "Firm deadline"}</small><small>${active.requireOrder ? "Complete in order" : "Flexible order"}</small></div><div class="student-lesson-tools"><button type="button" data-bookmark-lesson="${active.id}">${icon(state.bookmarkedLessons?.includes(active.id) ? "star" : "book-open")} ${state.bookmarkedLessons?.includes(active.id) ? "Bookmarked" : "Bookmark"}</button><button type="button" data-read-lesson="${active.id}">${icon("play")} Read aloud</button></div></div>
          <form class="student-lesson-content" data-submit-lesson="${active.id}">
            ${active.blocks.map((block, index) => {
              if (block.type === "text") return `<section class="student-content-block"><span class="block-number">${index + 1}</span><div><h5>${escapeHtml(block.title)}</h5><p>${escapeHtml(block.body).replace(/\n/g, "<br />")}</p><button class="text-button" type="button" data-complete-lesson-block="${active.id}:${block.id}">${progressRecord?.completedBlocks?.includes(block.id) ? icon("check") + " Completed" : "Mark section complete"}</button></div></section>`;
              if (block.type === "media") return `<section class="student-content-block"><span class="block-number">${index + 1}</span><div><h5>${escapeHtml(block.title)}</h5>${renderLessonMedia(block)}<button class="text-button" type="button" data-complete-lesson-block="${active.id}:${block.id}">${progressRecord?.completedBlocks?.includes(block.id) ? icon("check") + " Completed" : "Mark media complete"}</button></div></section>`;
              return `<fieldset class="student-quiz-block"><legend><span class="block-number">${index + 1}</span><span><strong>${escapeHtml(block.title)}</strong><small>${block.points} points${block.required ? " • Required" : ""}${block.timeLimit ? ` • ${block.timeLimit} min` : ""} • ${block.maxAttempts || 1} attempt${(block.maxAttempts || 1) === 1 ? "" : "s"}</small></span></legend><p>${escapeHtml(block.question)}</p><div class="student-answer-list">${renderStudentQuizAnswers(block)}</div>${progressRecord && block.showAnswers !== false ? `<div class="quiz-feedback ${progressRecord.answers?.[block.id]?.correct ? "correct" : "incorrect"}">${progressRecord.answers?.[block.id]?.correct ? icon("check") : icon("alert-triangle")} ${escapeHtml(progressRecord.answers?.[block.id]?.correct ? block.feedback || "Correct." : "Review this question and try again.")}</div>` : ""}</fieldset>`;
            }).join("")}
            <label class="student-lesson-notes"><span>Private notes</span><textarea data-lesson-note="${active.id}" placeholder="Write notes or questions to revisit...">${escapeHtml(state.studentNotes?.[active.id] || "")}</textarea><button class="secondary-action" type="button" data-save-lesson-note="${active.id}">Save notes</button></label>
            <div class="student-lesson-submit"><div>${progressRecord ? `<strong>${progressRecord.score}%</strong><span>Latest score • Attempt ${progressRecord.attempts || 1}</span>` : `<strong>${active.points}</strong><span>points available</span>`}</div><div class="inline-actions">${progressRecord?.certificate ? `<button class="secondary-action" type="button" data-download-certificate="${active.id}">${icon("award")} Certificate</button>` : ""}<button class="primary-action" type="submit">${icon("check")} ${progressRecord ? "Submit again" : "Complete lesson"}</button></div></div>
          </form>
        </article>` : `<div class="empty-state">No published lessons are available yet.</div>`}
      </div>
    </section>`;
}

function learnerProfileId() {
  return activeUser().role === "Student" ? activeUser().id : "student";
}

function submissionFor(assignmentId, create = false) {
  let submission = lmsSubmissions.find((item) => item.assignmentId === assignmentId && item.studentId === learnerProfileId());
  if (!submission && create) {
    submission = { id: `work-${assignmentId}-${Date.now()}`, assignmentId, studentId: learnerProfileId(), student: activeUser().role === "Student" ? activeUser().label : "Demo Learner", response: "", attachments: [], status: "Not started", attempt: 1, submittedAt: "", score: null, feedback: "", returnedAt: "" };
    lmsSubmissions.unshift(submission);
  }
  return submission;
}

function renderStudentAssignments() {
  const assignments = lmsAssignments.filter((item) => (item.status || "Published") === "Published");
  const active = assignments.find((item) => item.id === state.activeAssignmentId) || assignments[0];
  const work = active ? submissionFor(active.id) : null;
  const missing = assignments.filter((item) => !submissionFor(item.id) || ["Not started", "Draft"].includes(submissionFor(item.id)?.status)).length;
  return `<section class="panel student-assignments-panel" id="student-assignments">
    <div class="section-heading"><div><p class="eyebrow">${t("assignments")}</p><h3>Submit Your Work</h3></div><span>${missing} need attention</span></div>
    <div class="student-assignment-layout">
      <div class="student-assignment-list">${assignments.map((assignment) => {
        const submission = submissionFor(assignment.id);
        return `<button type="button" class="student-assignment-card ${active?.id === assignment.id ? "active" : ""}" data-open-assignment="${assignment.id}"><span>${icon("file-text")}</span><div><strong>${escapeHtml(assignment.title)}</strong><small>${escapeHtml(assignment.className || "All classes")} • Due ${escapeHtml(assignment.dueDate || assignment.lockDate)}</small></div><em>${submission?.status || "Not started"}</em></button>`;
      }).join("")}</div>
      ${active ? `<form class="student-assignment-work" data-assignment-work="${active.id}">
        <div class="assignment-detail-heading"><div><span>${escapeHtml(active.type)}</span><h4>${escapeHtml(active.title)}</h4><p>${escapeHtml(active.instructions || "Complete the assignment and submit your work.")}</p></div><strong>${active.points || 100} pts</strong></div>
        <div class="assignment-requirements"><span>${active.allowResubmit ? "Resubmissions allowed" : "One submission"}</span><span>Up to ${active.maxAttempts || 1} attempts</span><span>${escapeHtml(active.rubric)}</span></div>
        ${work?.status === "Returned" ? `<div class="returned-feedback"><strong>${work.score}% • Returned</strong><p>${escapeHtml(work.feedback || "Review the teacher feedback and resubmit when ready.")}</p></div>` : ""}
        <label><span>Written response</span><textarea id="student-assignment-response" placeholder="Write or paste your response here...">${escapeHtml(work?.response || "")}</textarea></label>
        <label class="assignment-upload"><span>Attach files</span><input type="file" data-assignment-file="${active.id}" multiple accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx,.txt" /><small>Up to 5 MB per file</small></label>
        <div class="submission-attachments">${(work?.attachments || []).map((file) => `<span>${icon("paperclip")} ${escapeHtml(file.name)} <button type="button" data-remove-assignment-file="${active.id}:${file.id}" aria-label="Remove ${escapeHtml(file.name)}">${icon("x")}</button></span>`).join("") || `<small>No files attached.</small>`}</div>
        <div class="assignment-submit-actions"><span>Attempt ${work?.attempt || 1} of ${active.maxAttempts || 1}</span><div class="inline-actions"><button class="secondary-action" type="submit" data-work-status="Draft">${t("saveDraft")}</button><button class="primary-action" type="submit" data-work-status="Submitted">${icon("send")} ${t("submit")}</button></div></div>
      </form>` : `<div class="empty-state">No published assignments.</div>`}
    </div>
  </section>`;
}

function renderStudentProgressHub() {
  const published = lmsLessons.filter((lesson) => lesson.status === "Published");
  const completed = published.filter((lesson) => state.lessonProgress?.[lesson.id]?.completed);
  const scores = completed.map((lesson) => state.lessonProgress[lesson.id].score);
  const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;
  const missing = lmsAssignments.filter((assignment) => !["Submitted", "Returned"].includes(submissionFor(assignment.id)?.status)).length;
  return `<section class="panel student-progress-hub" id="student-progress"><div class="section-heading"><div><p class="eyebrow">Learning overview</p><h3>My Progress</h3></div><span>Resumes automatically</span></div><div class="student-progress-grid"><article><strong>${completed.length}/${published.length}</strong><span>Lessons completed</span>${progress(published.length ? Math.round((completed.length / published.length) * 100) : 0)}</article><article><strong>${average}%</strong><span>Average quiz score</span>${progress(average)}</article><article class="${missing ? "needs-attention" : ""}"><strong>${missing}</strong><span>Missing or draft assignments</span></article><article><strong>${state.bookmarkedLessons?.length || 0}</strong><span>Bookmarked lessons</span></article><article><strong>${completed.filter((lesson) => state.lessonProgress[lesson.id].certificate).length}</strong><span>Certificates earned</span></article></div></section>`;
}

function renderTeacherLearningOperations() {
  const submitted = lmsSubmissions.filter((item) => item.status === "Submitted");
  const returned = lmsSubmissions.filter((item) => item.status === "Returned");
  return `<section class="panel teacher-operations-panel" id="learning-operations">
    <div class="section-heading"><div><p class="eyebrow">Teacher command center</p><h3>Learning Operations</h3></div><span>${submitted.length} ready to grade</span></div>
    <div class="teacher-operation-stats"><span><strong>${lmsLessons.filter((item) => item.status === "Draft").length}</strong> lesson drafts</span><span><strong>${lmsAssignments.filter((item) => item.status === "Published").length}</strong> live assignments</span><span><strong>${submitted.length}</strong> grading queue</span><span><strong>${returned.length}</strong> returned</span></div>
    <div class="grading-inbox"><div class="section-heading"><h4>Submission Inbox</h4><span>Score, comment, return</span></div>${submitted.length ? submitted.map((submission) => {
      const assignment = lmsAssignments.find((item) => item.id === submission.assignmentId);
      return `<form class="grading-inbox-row" data-return-submission="${submission.id}"><div><strong>${escapeHtml(submission.student)}</strong><small>${escapeHtml(assignment?.title || submission.assignmentId)} • Attempt ${submission.attempt}</small><p>${escapeHtml(submission.response || "Attachment submission")}</p></div><label><span>Score</span><input type="number" min="0" max="100" value="${submission.score ?? ""}" required data-grade-score /></label><label><span>Feedback</span><textarea required data-grade-feedback>${escapeHtml(submission.feedback || "")}</textarea></label><button class="primary-action" type="submit">${icon("check")} Return</button></form>`;
    }).join("") : `<div class="empty-state">No submissions are waiting for review.</div>`}</div>
  </section>`;
}

function renderCurriculumPlanner() {
  return `<section class="panel curriculum-planner-panel" id="curriculum-planner">
    <div class="section-heading"><div><p class="eyebrow">Curriculum map</p><h3>Courses and Units</h3></div><span>${curriculumCourses.length} courses</span></div>
    <form class="curriculum-create-form" id="course-create-form"><input id="course-title" placeholder="New course title" required /><select id="course-subject"><option>English Language Arts</option><option>Math</option><option>Science</option><option>Social Studies</option><option>Art</option><option>Technology</option></select><input id="course-grade" placeholder="Grade" required /><button class="secondary-action" type="submit">${icon("plus")} Add course</button></form>
    <div class="curriculum-course-list">${curriculumCourses.map((course) => `<article class="curriculum-course"><div class="curriculum-course-heading"><div><span>${escapeHtml(course.subject)} • Grade ${escapeHtml(course.grade)}</span><h4>${escapeHtml(course.title)}</h4><small>${course.standards.join(" • ") || "Standards can be added"}</small></div><form data-add-unit="${course.id}"><input aria-label="New unit for ${escapeHtml(course.title)}" placeholder="New unit title" required /><button class="text-button" type="submit">${icon("plus")} Add unit</button></form></div><div class="curriculum-unit-list">${course.units.map((unit) => `<section><div><strong>${escapeHtml(unit.title)}</strong><small>${escapeHtml(unit.description || "Curriculum unit")}</small></div><span>${unit.lessonIds.length} lessons</span><span>${unit.assignmentIds.length} assignments</span><form data-link-curriculum="${course.id}:${unit.id}"><select aria-label="Content to add to ${escapeHtml(unit.title)}"><optgroup label="Lessons">${lmsLessons.map((lesson) => `<option value="lesson:${lesson.id}">${escapeHtml(lesson.title)}</option>`).join("")}</optgroup><optgroup label="Assignments">${lmsAssignments.map((assignment) => `<option value="assignment:${assignment.id}">${escapeHtml(assignment.title)}</option>`).join("")}</optgroup></select><button class="text-button" type="submit">Link content</button></form></section>`).join("")}</div></article>`).join("")}</div>
  </section>`;
}

function renderTeacherPlanningCalendar() {
  const items = [
    ...lmsLessons.filter((item) => item.dueDate).map((item) => ({ title: item.title, date: item.dueDate, kind: "Lesson", status: item.status })),
    ...lmsAssignments.filter((item) => item.dueDate).map((item) => ({ title: item.title, date: item.dueDate, kind: "Assignment", status: item.status })),
  ].sort((a, b) => a.date.localeCompare(b.date));
  return `<section class="panel teacher-calendar-panel" id="teaching-calendar"><div class="section-heading"><div><p class="eyebrow">Instruction plan</p><h3>Teaching Calendar</h3></div><span>${items.length} scheduled</span></div><div class="teaching-calendar-list">${items.map((item) => `<article><time>${escapeHtml(item.date)}</time><div><strong>${escapeHtml(item.title)}</strong><small>${item.kind} • ${item.status}</small></div></article>`).join("") || `<div class="empty-state">Add a due date to a lesson or assignment to place it here.</div>`}</div></section>`;
}

function renderNotificationAutomation() {
  const channels = Object.entries(state.notificationPreferences).filter(([key, value]) => ["email", "sms", "push"].includes(key) && value).map(([key]) => key.toUpperCase());
  return `<section class="panel notification-automation-panel" id="automated-reminders"><div class="section-heading"><div><p class="eyebrow">Family communication</p><h3>Automated Reminders</h3></div><span>${channels.join(" + ") || "Dashboard only"}</span></div><p>Due-date reminders are scheduled ${state.notificationPreferences.dueDays} day${state.notificationPreferences.dueDays === 1 ? "" : "s"} ahead using each person's preferences.</p><button class="secondary-action" type="button" data-send-class-reminder>${icon("send")} Send class reminder now</button><div class="delivery-summary">${notificationDeliveryLog.slice(0, 3).map((item) => `<span><strong>${escapeHtml(item.channel)}</strong> ${escapeHtml(item.status)}</span>`).join("")}</div></section>`;
}

function renderStandardsGradebook() {
  const gradebook = activeSchoolGradebook();
  const weightTotal = gradebook.categories.reduce((sum, item) => sum + Number(item.weight), 0);
  return `<section class="panel standards-gradebook-panel" id="standards-gradebook"><div class="section-heading"><div><p class="eyebrow">Standards and reporting</p><h3>Standards Gradebook</h3></div><span>${weightTotal === 100 ? "Weights balanced" : `${weightTotal}% total`}</span></div><div class="standards-gradebook-grid"><div><h4>Weighted categories</h4><div class="weight-list">${gradebook.categories.map((category, index) => `<label><span>${escapeHtml(category.name)}</span><input type="number" min="0" max="100" value="${category.weight}" data-gradebook-weight="${index}"/><em>%</em></label>`).join("")}</div></div><div><h4>Standards mastery</h4><div class="standards-list">${gradebook.standards.map((standard) => `<article><div><strong>${escapeHtml(standard.code)}</strong><span>${standard.mastery}% mastery</span></div>${progress(standard.mastery)}</article>`).join("")}</div></div><div class="reporting-actions"><h4>Reporting & SIS</h4><p>Generate report cards or exchange grades using ${gradebook.sisExport.format}.</p><button class="secondary-action" type="button" data-generate-report-cards>${icon("file-text")} Generate report cards</button><button class="secondary-action" type="button" data-export-sis>${icon("download")} Export to SIS</button><small>Last export: ${gradebook.sisExport.lastExport}</small></div></div></section>`;
}

function activeSchoolGradebook() {
  productionReadiness.gradebooks ||= {};
  const schoolId = selectedSchoolRecord().id;
  if (!productionReadiness.gradebooks[schoolId]) productionReadiness.gradebooks[schoolId] = structuredClone(productionReadiness.gradebook);
  return productionReadiness.gradebooks[schoolId];
}

function renderAdvancedLms() {
  const school = selectedSchoolRecord();
  const activeAccount = lmsAccounts.find((account) => account.id === state.activeAccount) || lmsAccounts[0];
  const quizCount = lmsLessons.reduce((total, lesson) => total + lesson.blocks.filter((block) => block.type === "quiz").length, 0);
  const publishedLessons = lmsLessons.filter((lesson) => lesson.status === "Published").length;
  return `
    <section class="dashboard-grid lms-grid" id="lms-overview">
      <div class="welcome-strip lms-welcome">
        <div>
          <p class="eyebrow">${school.name} advanced LMS</p>
          <h2>Lessons, quizzes, media, and grading in one LMS</h2>
          <p>Teachers can build multimedia lessons, publish quizzes, manage assignments, grade submissions, and support offline learning inside this school instance.</p>
        </div>
        <button class="primary-action" data-build-offline ${permissionAttrs("lms", "Only teachers and administrators can build LMS offline packs.")}>${icon("download")} ${state.offlinePackReady ? "Rebuild Offline Pack" : "Build Offline Pack"}</button>
      </div>

      ${statCard("Published lessons", publishedLessons, "book-open", "blue")}
      ${statCard("Quiz blocks", quizCount, "clipboard-check", "teal")}
      ${statCard("Offline packs", state.offlinePackReady ? "Ready" : "Not built", "download", "gold")}

      ${renderLessonLibrary()}
      ${renderBackgroundServices()}

      <section class="panel lms-panel simplicity-suite" id="simple-classroom">
        <div class="section-heading"><h3>Simple Classroom Experience</h3><span>Clean by default</span></div>
        ${classroomStrengths.slice(0, 2).map(([title, body]) => `<article class="strength-row">${icon("check")}<div><strong>${title}</strong><small>${body}</small></div></article>`).join("")}
      </section>

      <section class="panel lms-panel free-suite" id="zero-cost-core">
        <div class="section-heading"><h3>Zero Cost Core</h3><span>No premium paywall</span></div>
        <div class="free-card"><strong>$0</strong><p>Schools can use classroom basics, paperless assignments, messaging, and parent summaries without hidden fees.</p></div>
      </section>

      <section class="panel lms-panel grading-suite" id="advanced-grading">
        <div class="section-heading"><h3>Advanced Grading</h3><span>Automated tests + rubrics + analytics</span></div>
        <div class="assignment-list">
          ${lmsAssignments.map((item) => `
            <article class="assignment-row">
              <div><strong>${item.title}</strong><small>${item.type} • ${item.rubric}</small></div>
              ${progress(item.analytics)}
              <span>${item.analytics}% mastery</span>
            </article>
          `).join("")}
        </div>
      </section>

      ${renderGradebookDetail()}

      <section class="panel lms-panel deadline-suite" id="deadline-controls">
        <div class="section-heading"><h3>Deadline Controls</h3><span>Firm locks + exceptions</span></div>
        ${lmsAssignments.map((item) => `
          <article class="deadline-control">
            <div><strong>${item.title}</strong><small>Locks ${item.lockDate}</small></div>
            <span>${item.exception}</span>
          </article>
        `).join("")}
      </section>

      <section class="panel lms-panel account-suite" id="account-context">
        <div class="section-heading"><h3>Account Context</h3><span>No constant log-outs</span></div>
        <div class="account-switcher">
          ${lmsAccounts.map((account) => `<button class="${activeAccount.id === account.id ? "active" : ""}" data-lms-account="${account.id}"><strong>${account.name}</strong><span>${account.context}</span></button>`).join("")}
        </div>
        <p class="account-note">Current context: <strong>${activeAccount.name}</strong> can switch roles without leaving ${school.name}.</p>
      </section>

      <section class="panel lms-panel workflow-suite" id="paperless-workflow">
        <div class="section-heading"><h3>Paperless Assignment Workflow</h3><span>Create to return</span></div>
        <div class="workflow-steps">
          ${["Create", "Distribute", "Collect", "Grade", "Return", "Archive"].map((step, index) => `<div><strong>${index + 1}</strong><span>${step}</span></div>`).join("")}
        </div>
      </section>

      <section class="panel lms-panel guardrail-suite" id="lms-guardrails">
        <div class="section-heading"><h3>Automated Guardrails</h3><span>Submission and quiz controls</span></div>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="lockSubmissions" ${state.guardrails.lockSubmissions ? "checked" : ""} ${can("lms") ? "" : "disabled"} /><span class="custom-check">${state.guardrails.lockSubmissions ? icon("check") : ""}</span><span>Prevent edits after submission</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="hideAnswers" ${state.guardrails.hideAnswers ? "checked" : ""} ${can("lms") ? "" : "disabled"} /><span class="custom-check">${state.guardrails.hideAnswers ? icon("check") : ""}</span><span>Hide answers until quiz closes</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="parentSummaries" ${state.guardrails.parentSummaries ? "checked" : ""} ${can("lms") ? "" : "disabled"} /><span class="custom-check">${state.guardrails.parentSummaries ? icon("check") : ""}</span><span>Auto-return parent email summaries</span></label>
        ${permissionNotice("lms", "LMS guardrails are managed by teachers and administrators.")}
      </section>

      <section class="panel lms-panel offline-suite" id="offline-learning">
        <div class="section-heading"><h3>Offline Learning</h3><span>${state.offlinePackReady ? "Synced for low-connectivity use" : "Build a pack for offline work"}</span></div>
        <div class="offline-card">
          <div class="offline-status ${state.offlinePackReady ? "ready" : ""}">${state.offlinePackReady ? icon("check") : icon("download")}</div>
          <div><strong>${state.offlinePackReady ? "Offline pack ready" : "Offline pack not built"}</strong><p>Includes assignments, rubrics, PDF annotations, and queued submissions for later sync.</p></div>
        </div>
      </section>

      <section class="panel lms-panel privacy-suite" id="learning-privacy">
        <div class="section-heading"><h3>Learning Privacy</h3><span>FERPA-aware LMS</span></div>
        ${privacyControls.map((item) => `<article class="strength-row">${icon("shield-check")}<div><strong>${item.label}</strong><small>${item.detail}</small></div></article>`).join("")}
      </section>
    </section>
  `;
}

function renderGradebookDetail() {
  const selected = gradebookSubmissions.find((item) => item.id === state.selectedSubmissionId) || gradebookSubmissions[0];
  return `
    <section class="panel lms-panel gradebook-detail-suite" id="gradebook-detail">
      <div class="section-heading"><h3>Gradebook Detail</h3><span>Submissions, rubric, comments</span></div>
      <div class="gradebook-layout">
        <div class="submission-list">
          ${gradebookSubmissions.map((submission) => `
            <button class="submission-row ${selected.id === submission.id ? "active" : ""}" data-submission="${submission.id}">
              ${icon(submission.status === "Missing" ? "alert-triangle" : "file-text")}
              <span><strong>${submission.student}</strong><small>${submission.assignment} • ${submission.status}</small></span>
              <em>${submission.score}%</em>
            </button>
          `).join("")}
        </div>
        <article class="submission-detail">
          <div class="section-heading"><h4>${selected.student}</h4><span>${selected.assignment}</span></div>
          ${selected.rubric.map(([label, score]) => `<div class="rubric-row"><span>${label}</span>${progress(Math.round((score / 4) * 100))}<strong>${score}/4</strong></div>`).join("")}
          <label><span>Teacher comment</span><textarea id="submission-comment">${escapeHtml(selected.comment)}</textarea></label>
          <button class="primary-action" data-save-submission="${selected.id}" ${permissionAttrs("teacher-tools", "Only teachers and administrators can save grading comments.")}>${icon("check")} Save Comment</button>
        </article>
      </div>
    </section>
  `;
}

function renderStudent() {
  const school = selectedSchoolRecord();
  const points = (school.studentPoints + state.completed.length * 75).toLocaleString();
  return `
    <section class="dashboard-grid student-grid" id="student-overview">
      <div class="hero-card student-hero">
        <div>
          <span class="badge soft">${icon("star")} ${points} points</span>
          <h2>Welcome back, ${school.studentName}!</h2>
          <p>You are learning inside the ${school.name} instance. Keep going and unlock today's discovery badge.</p>
          <button class="primary-action" data-continue-adventure>${icon("play")} Continue Adventure</button>
        </div>
        <div class="orbital-scene" aria-hidden="true"><span class="planet planet-one"></span><span class="planet planet-two"></span><span class="rocket-shape">${icon("rocket")}</span></div>
      </div>
      ${statCard("Daily streak", "5 days", "trending-up", "blue")}
      ${statCard("Books read", "12", "book-open", "teal")}
      ${renderStudentProgressHub()}
      ${renderStudentAssignments()}
      ${renderStudentLessons()}
      <section class="panel missions-panel" id="student-missions">
        <div class="section-heading"><div><p class="eyebrow">Today</p><h3>My Missions</h3></div><button class="text-button" data-action="All available missions are already shown for this learner.">See all ${icon("chevron-right")}</button></div>
        <div class="mission-list">
          ${missions.map((mission) => {
            const done = state.completed.includes(mission.id);
            return `
              <article class="mission-card ${mission.accent}">
                <div class="mission-icon">${icon(mission.icon)}</div>
                <div class="mission-main">
                  <div class="mission-meta"><span>${mission.subject}</span><span>${mission.due}</span></div>
                  <h4>${mission.title}</h4>
                  ${progress(done ? 100 : mission.progress)}
                </div>
                <button class="complete-button ${done ? "done" : ""}" data-complete="${mission.id}">${icon(done ? "check" : "play")} ${done ? "Done" : mission.action}</button>
              </article>
            `;
          }).join("")}
        </div>
      </section>
      <section class="panel awards-panel" id="student-awards">
        <div class="section-heading"><h3>Awards</h3>${icon("award")}</div>
        <div class="award-grid">${["Kindness Kid", "Problem Solver", "Fast Learner", "Story Teller"].map((award) => `<div class="award-tile">${icon("sparkles")}<span>${award}</span></div>`).join("")}</div>
      </section>
    </section>
  `;
}

function renderBackgroundServices() {
  const unread = unreadNotifications();
  return `
    <section class="panel lms-panel background-services" id="background-services" aria-label="Passive background services">
      <div class="section-heading">
        <div><p class="eyebrow">Passive background layer</p><h3>Background Services</h3></div>
        <span>Runs quietly behind LMS work</span>
      </div>
      <div class="background-service-grid">
        <article class="background-service-card">
          <div>${icon("refresh-cw")}<strong>Workspace sync</strong></div>
          <small>${workspaceIntegrations.length} connected services attach, collect, archive, and export in the background.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${icon("paperclip")}<strong>File handling</strong></div>
          <small>${lmsFiles.length} class files are converted, attached, or archived without interrupting classroom flow.</small>
          <span>Passive</span>
        </article>
        <article class="background-service-card">
          <div>${icon("bell")}<strong>Notification routing</strong></div>
          <small>${unread} unread alert${unread === 1 ? "" : "s"} stay in the notification tray unless action is needed.</small>
          <span>Tray</span>
        </article>
        <article class="background-service-card">
          <div>${icon("calendar-days")}<strong>Calendar bridge</strong></div>
          <small>${calendarEvents.length} shared events inform deadlines and family reminders in the background.</small>
          <span>Synced</span>
        </article>
      </div>
      <details class="background-details">
        <summary>View background service activity</summary>
        <div class="background-activity">
          ${workspaceIntegrations.map((item) => `<article><strong>${item.app}</strong><small>${item.action}</small><span>${item.status}</span></article>`).join("")}
          ${offlineSyncQueue.map((item) => `<article><strong>${item.item}</strong><small>${item.owner}</small><span>${state.offlinePackReady ? item.status : "Waiting"}</span></article>`).join("")}
        </div>
      </details>
    </section>
  `;
}

function renderTeacher() {
  const school = selectedSchoolRecord();
  const visible = state.selectedClass === "All" ? teacherClasses : teacherClasses.filter((item) => item.name === state.selectedClass);
  const roster = state.rosterFilter === "All" ? rosterRecords : rosterRecords.filter((item) => item.status === state.rosterFilter);
  return `
    <section class="dashboard-grid teacher-grid" id="teacher-overview">
      <div class="welcome-strip"><div><p class="eyebrow">${school.name} instance</p><h2>Welcome back, Demo Teacher.</h2><p>Build lessons with rich content, quizzes, and media, then publish them directly to your students.</p></div><button class="primary-action" data-new-lesson ${permissionAttrs("teacher-tools", "Only teachers and administrators can create lessons.")}>${icon("plus")} Create lesson</button></div>
      ${statCard("Average grade", school.avgGrade, "trending-up", "blue")}
      ${statCard("Attendance", school.attendance, "calendar-days", "teal")}
      ${statCard("Messages", school.messages, "mail", "gold")}
      ${renderTeacherLearningOperations()}
      ${renderTeacherPlanningCalendar()}
      ${renderNotificationAutomation()}
      ${renderStandardsGradebook()}
      ${renderInterventionCenter({ compact: true })}
      ${renderTeacherLessonStudio()}
      <section class="panel class-panel" id="active-classes">
        <div class="section-heading">
          <h3>Active Classes</h3>
          <select id="class-filter" aria-label="Filter classes"><option>All</option>${teacherClasses.map((item) => `<option ${state.selectedClass === item.name ? "selected" : ""}>${item.name}</option>`).join("")}</select>
        </div>
        <div class="class-list">${visible.map((item) => `<article class="class-card"><div><h4>${item.name}</h4><p>${item.room}</p></div><div class="class-metrics"><span>${item.grade}% grade</span><span>${item.attendance}% attendance</span><span>${item.pending} pending</span></div><button class="icon-button" aria-label="Open ${item.name} options" data-action="${item.name} class tools opened.">${icon("more-horizontal")}</button></article>`).join("")}</div>
      </section>
      <section class="panel assignment-composer-panel" id="quick-assignment">
        <div class="section-heading"><h3>Quick Assignment</h3><span>Add a simple graded task</span></div>
        <form id="assignment-form" class="assignment-form">
          <label><span>Title</span><input id="assignment-title" placeholder="Example: Reading Checkpoint" required /></label>
          <label><span>Class</span><select id="assignment-class">${teacherClasses.map((item) => `<option>${item.name}</option>`).join("")}</select></label>
          <label><span>Type</span><select id="assignment-type"><option>Automated quiz</option><option>Writing task</option><option>Project</option><option>Reading response</option></select></label>
          <label><span>Due date</span><input type="date" id="assignment-due" value="2026-10-30" /></label>
          <label class="span-2"><span>Instructions</span><textarea id="assignment-instructions" placeholder="What should students submit?"></textarea></label>
          <label><span>Points</span><input type="number" id="assignment-points" min="1" max="1000" value="100" /></label>
          <label><span>Maximum attempts</span><input type="number" id="assignment-attempts" min="1" max="10" value="2" /></label>
          <label class="toggle-field span-2"><input type="checkbox" id="assignment-resubmit" checked /><span>Allow resubmissions after feedback</span></label>
          <button class="primary-action" type="submit" ${permissionAttrs("teacher-tools", "Only teachers and administrators can create assignments.")}>${icon("plus")} Add Assignment</button>
        </form>
        <div class="quick-assignment-list">${lmsAssignments.slice(0, 5).map((assignment) => `<article><strong>${escapeHtml(assignment.title)}</strong><span>${escapeHtml(assignment.className || "All classes")} • ${assignment.status || "Published"}</span></article>`).join("")}</div>
      </section>
      <section class="panel activity-panel" id="student-activity">
        <div class="section-heading"><h3>Recent Student Activity</h3><button class="icon-button" aria-label="Refresh activity" data-refresh-activity>${icon("refresh-cw")}</button></div>
        ${activityFeed.map(([student, action, time, course]) => `<article class="activity-row"><div class="avatar">${initials(student)}</div><div><p><strong>${student}</strong> ${action}</p><span>${time} | ${course}</span></div><button class="icon-button" aria-label="Reply to ${student}" data-reply-student="${student}">${icon("pen-line")}</button></article>`).join("")}
      </section>
      ${renderCurriculumPlanner()}
      <section class="panel grading-card" id="grading-todo"><h3>Grading To-Do</h3>${progress(68)}<p>18 submissions left across 3 classes.</p><button class="secondary-action" data-open-role="lms">${icon("clipboard-check")} Open Grading Hub</button></section>
      ${permissionNotice("teacher-tools", "Teacher tools are read-only for this signed-in role.")}
      <section class="panel roster-panel" id="teacher-roster">
        <div class="section-heading">
          <h3>Roster & Enrollments</h3>
          <select id="roster-filter" aria-label="Filter roster"><option>All</option><option>Active</option><option>Watch</option></select>
        </div>
        <div class="roster-table">
          ${roster.map((record) => `
            <article class="roster-row editable-roster-row">
              <div><strong>${record.student}</strong><small>${record.className} • Guardian: ${record.guardian}</small></div>
              <label><span>Grade</span><input type="number" min="0" max="100" value="${record.grade}" data-roster-grade="${record.id}" /></label>
              <label><span>Attendance</span><input type="number" min="0" max="100" value="${record.attendance}" data-roster-attendance="${record.id}" /></label>
              <label><span>Status</span><select data-roster-status="${record.id}"><option ${record.status === "Active" ? "selected" : ""}>Active</option><option ${record.status === "Watch" ? "selected" : ""}>Watch</option></select></label>
            </article>
          `).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderParent() {
  const school = selectedSchoolRecord();
  return `
    <section class="dashboard-grid parent-grid" id="parent-overview">
      <div class="welcome-strip parent-welcome"><div><p class="eyebrow">${school.learnerName}'s progress</p><h2>Welcome back, ${school.guardianName}.</h2><p>${school.learnerName}'s family view belongs to ${school.name}'s private instance.</p></div><button class="primary-action" data-open-role="messages">${icon("send")} Message Teacher</button></div>
      ${statCard("Current grade", "A-", "trending-up", "blue")}
      ${statCard("Attendance", "98%", "calendar-days", "teal")}
      ${statCard("Reading pace", "56%", "book-open", "gold")}
      ${renderFamilyWeeklySummary()}
      <section class="panel teacher-note" id="teacher-note"><div class="teacher-avatar">MH</div><h3>Ms. Henderson</h3><p>"Leo is making great progress in Geometry. Keep practicing the new vocabulary cards at home."</p><button class="secondary-action" data-open-role="messages">${icon("message-circle")} Start Chat</button></section>
      <section class="panel deadline-panel" id="family-deadlines">
        <div class="section-heading"><h3>Upcoming Deadlines</h3><button class="text-button" data-open-role="platform">Calendar ${icon("chevron-right")}</button></div>
        ${deadlines.map((item) => {
          const checked = state.checkedDeadlines.includes(item.title);
          return `<label class="deadline-row ${item.urgent ? "urgent" : ""}"><input type="checkbox" data-deadline="${item.title}" ${checked ? "checked" : ""} /><span class="custom-check">${checked ? icon("check") : ""}</span><span><strong>${item.title}</strong><small>${item.meta}</small></span></label>`;
        }).join("")}
      </section>
      <section class="panel mobile-parent-panel" id="mobile-parent">
        <div class="phone-preview">
          <div class="phone-top">${school.learnerName}</div>
          <strong>${school.name}</strong>
          <span>${state.workHoursOpen ? "Teacher chat open" : "Teacher chat resumes during work hours"}</span>
          <button data-open-role="messages">${icon("send")} Message</button>
        </div>
        <div class="mobile-actions">
          <h3>Mobile Parent Experience</h3>
          ${mobileParentActions.map((item) => `<article class="mobile-action">${icon("smartphone")}<div><strong>${item.title}</strong><small>${item.detail}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel subject-panel" id="subject-snapshot"><h3>Subject Snapshot</h3>${[["Math", 92], ["Science", 88], ["Reading", 84], ["History", 91]].map(([subject, score]) => `<div class="subject-row"><span>${subject}</span>${progress(score)}<strong>${score}%</strong></div>`).join("")}</section>
    </section>
  `;
}

function renderFamilyWeeklySummary() {
  const preferences = state.notificationPreferences;
  return `<section class="panel family-summary-panel" id="family-summary"><div class="section-heading"><div><p class="eyebrow">Family digest</p><h3>This Week at a Glance</h3></div><span>Updated today</span></div><div class="family-summary-grid"><article><strong>4</strong><span>assignments completed</span></article><article><strong>2</strong><span>deadlines ahead</span></article><article><strong>98%</strong><span>attendance</span></article><article><strong>+6%</strong><span>reading growth</span></article></div><div class="family-summary-body"><div><h4>Teacher highlights</h4><p>Strong participation in discussion and continued progress with evidence-based writing.</p></div><div><h4>Delivery preferences</h4><span>${preferences.email ? "Email" : ""}${preferences.sms ? " • SMS" : ""}${preferences.push ? " • Push" : ""}</span><button class="text-button" type="button" data-open-family-settings>Manage preferences</button></div><button class="secondary-action" type="button" data-send-weekly-summary>${icon("send")} Send summary now</button></div></section>`;
}

function renderMessages() {
  const school = selectedSchoolRecord();
  const filtered = conversations.filter((item) => item.type === state.conversationFilter);
  const active = conversations.find((item) => item.id === state.activeConversationId) || filtered[0] || conversations[0];
  return `
    <section class="messages-shell" id="messages-overview">
      <aside class="conversation-list" id="conversation-list">
        <div class="segment-control">${["Parents", "Groups"].map((filter) => `<button class="${state.conversationFilter === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}</div>
        ${filtered.map((conversation) => `<button class="conversation ${active.id === conversation.id ? "active" : ""}" data-conversation="${conversation.id}"><div class="avatar">${initials(conversation.name)}</div><div><strong>${conversation.name}</strong><span>${conversation.preview}</span></div>${conversation.unread ? `<em>${conversation.unread}</em>` : ""}</button>`).join("")}
        <div class="emergency-card ${state.emergencyOverride ? "active" : ""}" id="emergency-override">
          ${icon("alert-triangle")}
          <div><strong>Emergency Override</strong><span>${state.emergencyOverride ? "Administrator enabled for urgent safety communication." : "Available only to school administrators."}</span></div>
          <button class="secondary-action" data-toggle-emergency ${permissionAttrs("emergency", "Emergency override is admin-only.")}>${state.emergencyOverride ? "Disable" : "Enable"}</button>
        </div>
      </aside>
      <section class="chat-panel" id="chat-panel">
        <header class="chat-header"><div class="avatar">${initials(active.name)}</div><div><h3>${active.name}</h3><p>${active.online ? "Online now" : active.role}</p></div><div class="chat-tools"><button class="icon-button" aria-label="Start video call" data-start-call="${active.id}">${icon("video")}</button><button class="icon-button" aria-label="More chat options" data-action="Chat options opened for ${active.name}.">${icon("more-horizontal")}</button></div></header>
        ${state.activeCallName ? `<div class="call-banner">${icon("video")} <strong>Live call with ${state.activeCallName}</strong><button class="text-button" data-end-call>End call</button></div>` : ""}
        <div class="work-hours-banner ${state.workHoursOpen || state.emergencyOverride ? "open" : "closed"}" id="communication-hours">
          ${icon(state.workHoursOpen || state.emergencyOverride ? "check" : "x")}
          <div><strong>${state.emergencyOverride ? "Emergency override active" : state.workHoursOpen ? "Communication window open" : "After-hours messaging paused"}</strong><span>${school.workHours}. ${state.emergencyOverride ? "Urgent administrator-approved messages can be sent now." : state.workHoursOpen ? "Parents and teachers can message now." : school.afterHours}</span></div>
          <button class="text-button" data-toggle-hours>${state.workHoursOpen ? "Simulate after hours" : "Open work hours"}</button>
        </div>
        <div class="chat-stream">${active.messages.map((message) => `<div class="bubble ${message.from === "me" ? "mine" : ""}"><p>${message.text}</p><span>${message.time}</span></div>`).join("")}</div>
        <form class="compose-box ${state.workHoursOpen || state.emergencyOverride ? "" : "locked"}" id="compose"><input id="message-draft" value="${state.draft}" placeholder="${state.workHoursOpen || state.emergencyOverride ? `Message ${active.name}...` : "Messaging resumes during work hours"}" ${state.workHoursOpen || state.emergencyOverride ? "" : "disabled"} /><button class="primary-action" type="submit" ${state.workHoursOpen || state.emergencyOverride ? "" : "disabled"}>${icon("send")} Send</button></form>
      </section>
    </section>
  `;
}

function renderCommunityBoard() {
  const school = selectedSchoolRecord();
  const board = selectedCommunityBoard();
  const assignedApprover = activeApprover(board);
  const canManageApprovers = can("approve-posts") || can("manage-users");
  return `
    <section class="dashboard-grid community-grid" id="community-overview">
      <div class="welcome-strip community-welcome">
        <div>
          <p class="eyebrow">${school.name} community board</p>
          <h2>Approved school community chat</h2>
          <p>Parents and teachers can submit information, links, photos, or files. School administrators approve posts before they appear publicly.</p>
        </div>
        <span class="approval-badge">${board.pending.length} awaiting approval</span>
      </div>

      <section class="panel board-composer" id="community-create-post">
        <div class="section-heading"><h3>Create Post</h3><span>Parent or teacher submission</span></div>
        <form id="board-form" class="board-form">
          <label><span>Author</span><input id="board-author" value="Demo Guardian" /></label>
          <label><span>Role</span><select id="board-role"><option>Parent</option><option>Teacher</option></select></label>
          <label><span>Type</span><select id="board-type"><option>Announcement</option><option>Resource</option><option>Photo</option><option>Event</option><option>File</option></select></label>
          <label><span>Audience</span><select id="board-audience"><option>All families</option><option>Grade 4</option><option>Teachers</option><option>PTA / PTO</option></select></label>
          <label class="span-2"><span>Title</span><input id="board-title" placeholder="What should the community know?" required /></label>
          <label class="span-2"><span>Message</span><textarea id="board-body" placeholder="Post details, event information, resource description, or context for media..." required></textarea></label>
          <label class="span-2"><span>Media or attachment</span><input id="board-media" placeholder="Example: 3 photos, flyer PDF, Google Drive link, website link" /></label>
          <label class="span-2"><span>Assigned approver</span><select id="board-approver">${board.approvers.map((approver) => `<option value="${approver.id}" ${assignedApprover.id === approver.id ? "selected" : ""}>${approver.name} - ${approver.title}</option>`).join("")}</select></label>
          <button class="primary-action span-2" type="submit">${icon("send")} Submit for Admin Approval</button>
        </form>
      </section>

      ${canManageApprovers ? `<section class="panel approver-panel" id="community-approvers">
        <div class="section-heading"><h3>Assigned Post Approvers</h3>${icon("shield-check")}</div>
        <div class="approver-list">
          ${board.approvers.map((approver) => `
            <label class="approver-row ${approver.active ? "active" : ""}">
              <input type="checkbox" data-approver-toggle="${approver.id}" ${approver.active ? "checked" : ""} />
              <span class="custom-check">${approver.active ? icon("check") : ""}</span>
              <span><strong>${approver.name}</strong><small>${approver.title}</small></span>
            </label>
          `).join("")}
        </div>
        <form id="approver-form" class="approver-form">
          <input id="new-approver-name" placeholder="Add approver name" />
          <select id="new-approver-title"><option>Principal</option><option>Assistant Principal</option><option>Dean of Students</option><option>Department Chair</option></select>
          <button class="secondary-action" type="submit">${icon("plus")} Assign</button>
        </form>
      </section>` : ""}

      ${can("approve-posts") ? `<section class="panel approval-queue" id="community-approval-queue">
        <div class="section-heading"><h3>Administrator Approval Queue</h3>${icon("shield-check")}</div>
        <div class="queue-list">
          ${board.pending.length ? board.pending.map((post) => renderPendingPost(post)).join("") : `<div class="empty-state">No posts waiting for approval.</div>`}
        </div>
      </section>` : ""}

      <section class="panel published-board" id="community-published">
        <div class="section-heading"><h3>Published Community Board</h3><span>${board.published.length} approved</span></div>
        <div class="post-list">
          ${board.published.map((post) => renderPublishedPost(post)).join("")}
        </div>
      </section>

      <section class="panel board-policy" id="community-rules">
        <h3>Posting Rules</h3>
        <ul>
          <li>Parents and teachers can submit posts and media.</li>
          <li>School administrators approve before publication.</li>
          <li>Direct parent-teacher communication is limited to school work hours.</li>
          <li>Each school instance has a separate board and approval queue.</li>
          <li>Published posts are visible only inside the selected school tenant.</li>
        </ul>
        ${permissionNotice("approve-posts", "Only administrators can approve or reject community posts.")}
      </section>

      ${can("approve-posts") ? `<section class="panel workflow-rules-panel" id="community-workflow">
        <div class="section-heading"><h3>Approval Workflow Rules</h3>${icon("shield-check")}</div>
        ${approvalRules.map(([rule, detail]) => `<article class="rule-row"><strong>${rule}</strong><span>${detail}</span></article>`).join("")}
      </section>` : ""}
    </section>
  `;
}

function renderPendingPost(post) {
  const board = selectedCommunityBoard();
  return `
    <article class="board-post pending-post">
      <div class="post-header"><div class="avatar">${initials(post.author)}</div><div><strong>${post.title}</strong><span>${post.author} • ${post.role} • ${post.audience}</span></div></div>
      <p>${post.body}</p>
      <div class="post-media">${icon("paperclip")} ${post.media || "No media"}</div>
      <div class="assigned-approver">${icon("shield-check")} Assigned to ${approverName(board, post.approverId)}</div>
      <div class="approval-actions">
        <button class="secondary-action" data-reject-post="${post.id}" ${permissionAttrs("approve-posts", "Only administrators can reject community posts.")}>${icon("x")} Reject</button>
        <button class="primary-action" data-approve-post="${post.id}" ${permissionAttrs("approve-posts", "Only administrators can approve community posts.")}>${icon("check")} Approve</button>
      </div>
    </article>
  `;
}

function renderPublishedPost(post) {
  return `
    <article class="board-post">
      <div class="post-header"><div class="avatar">${initials(post.author)}</div><div><strong>${post.title}</strong><span>${post.author} • ${post.role} • ${post.time}</span></div></div>
      <p>${post.body}</p>
      <div class="post-tags"><span>${post.type}</span><span>${post.audience}</span><span>${post.media || "No media"}</span></div>
    </article>
  `;
}

function addDemoSchoolTenant() {
  const district = selectedDistrictRecord();
  const count = district.schools.length + 1;
  const id = `demo-school-${Date.now()}`;
  const school = {
    id,
    name: `Demo Learning Academy ${count}`,
    category: "Public",
    students: 240 + count * 18,
    staff: 32 + count,
    status: "Onboarding",
    subdomain: `demoacademy${count}`,
    plan: "District Core",
    modules: ["SIS", "LMS", "Messaging", "Family Portal"],
    storage: 18,
    uptime: "Provisioning",
    theme: "Discovery Blue",
    isolation: "Dedicated tenant database",
    avgGrade: "89.0%",
    attendance: "95.0%",
    messages: "0 pending",
    studentPoints: 760,
    studentName: "Explorer",
    guardianName: "Jordan",
    learnerName: "Riley",
    workHours: "Mon-Fri, 8:00 AM-4:00 PM",
    afterHours: "Messages are queued until office hours",
  };
  district.schools.push(school);
  productionReadiness.domains.push({ schoolId: id, domain: `${school.subdomain}.educationalsystem.fieldserviceit.com`, dns: "Awaiting DNS", ssl: "Pending", checkedAt: "Just now" });
  productionReadiness.billing.schools = tenantStates.flatMap((item) => item.districts).flatMap((item) => item.schools).length;
  state.selectedSchool = id;
  addAudit("Created demo school tenant", district.name);
  state.toast = `${school.name} was added to ${district.name}.`;
  render();
}

function createDemoAssignment() {
  const title = `Quick Check ${lmsAssignments.length + 1}`;
  createAssignmentRecord({
    title,
    className: state.selectedClass === "All" ? "All classes" : state.selectedClass,
    type: "Teacher-created assignment",
    lockDate: "Next Friday, 8:00 PM",
  });
  goToRole("lms", `${title} was created in the LMS grading suite.`);
}

function createAssignmentRecord({ title, className, type, lockDate, dueDate = "", instructions = "Complete the assignment and submit your work.", points = 100, maxAttempts = 1, allowResubmit = false }) {
  const id = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
  lmsAssignments.unshift({
    id,
    schoolId: selectedSchoolRecord().id,
    title,
    className,
    type,
    instructions,
    dueDate,
    points,
    status: "Published",
    allowResubmit,
    maxAttempts,
    attachments: [],
    rubric: "Auto rubric draft",
    analytics: 0,
    lockDate: lockDate || "Next Friday, 8:00 PM",
    exception: "None",
  });
  pushNotification("FYI", `${title} published`, className, "Student inbox");
  pushRealtimeEvent("LMS", `${title} created`, `${type} assigned to ${className}.`);
  addAudit(`Created assignment ${title}`, selectedSchoolRecord().name);
}

function openLessonBuilder(lessonId = "") {
  const lesson = lmsLessons.find((item) => item.id === lessonId);
  state.lessonDraft = newLessonDraft(lesson);
  state.lessonBuilderOpen = true;
  if (state.role !== "teacher") goToRole("teacher", lesson ? `${lesson.title} opened in Lesson Studio.` : "Lesson Studio opened.", "lesson-studio");
  else setActiveRole("teacher", true, "lesson-studio");
}

function saveLesson(status) {
  const draft = state.lessonDraft;
  if (!draft?.title?.trim() || !draft?.summary?.trim()) {
    announce("Add a lesson title and learning objective before saving.");
    return;
  }
  if (!draft.blocks.length) {
    announce("Add at least one content, media, or quiz block.");
    return;
  }
  const invalidQuiz = draft.blocks.find((block) => block.type === "quiz" && (
    !block.question.trim()
    || (["Short answer", "Fill in the blank"].includes(block.questionType) && !block.options[0]?.trim())
    || (block.questionType === "Matching" && (block.pairs || []).filter((pair) => pair.left.trim() && pair.right.trim()).length < 2)
    || (!["Short answer", "Fill in the blank", "Matching"].includes(block.questionType) && block.options.filter((option) => option.trim()).length < 2)
  ));
  if (invalidQuiz) {
    announce("Each quiz needs a question and at least two answer choices.");
    return;
  }
  const lesson = structuredClone(draft);
  lesson.schoolId = lesson.schoolId || selectedSchoolRecord().id;
  lesson.id ||= `lesson-${lesson.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${Date.now()}`;
  lesson.status = status;
  lesson.visibility = status === "Published" && lesson.visibility === "Teacher only" ? "Students" : lesson.visibility;
  lesson.updatedAt = "Just now";
  const existingIndex = lmsLessons.findIndex((item) => item.id === lesson.id);
  if (existingIndex >= 0) lmsLessons.splice(existingIndex, 1, lesson);
  else lmsLessons.unshift(lesson);
  state.lessonDraft = null;
  state.lessonBuilderOpen = false;
  state.activeStudentLessonId = status === "Published" ? lesson.id : state.activeStudentLessonId;
  pushRealtimeEvent("LMS", `${lesson.title} ${status === "Published" ? "published" : "saved"}`, `${lesson.blocks.length} lesson blocks for ${lesson.className}.`);
  pushNotification(status === "Published" ? "FYI" : "Action", `${lesson.title} ${status === "Published" ? "is available to students" : "saved as a draft"}`, lesson.className, "Lesson Studio");
  addAudit(`${status === "Published" ? "Published" : "Saved draft lesson"} ${lesson.title}`, lesson.className);
  announce(`${lesson.title} ${status === "Published" ? "published to students" : "saved as a draft"}.`);
}

function toggleLessonStatus(lessonId) {
  const lesson = lmsLessons.find((item) => item.id === lessonId);
  if (!lesson) return;
  lesson.status = lesson.status === "Published" ? "Draft" : "Published";
  lesson.visibility = lesson.status === "Published" && lesson.visibility === "Teacher only" ? "Students" : lesson.visibility;
  lesson.updatedAt = "Just now";
  addAudit(`${lesson.status === "Published" ? "Published" : "Unpublished"} lesson ${lesson.title}`, lesson.className);
  announce(`${lesson.title} is now ${lesson.status.toLowerCase()}.`);
}

function submitStudentLesson(lessonId, form) {
  const lesson = lmsLessons.find((item) => item.id === lessonId && item.status === "Published");
  if (!lesson) return;
  const quizBlocks = lesson.blocks.filter((block) => block.type === "quiz");
  const currentProgress = state.lessonProgress?.[lesson.id];
  const allowedAttempts = Math.min(...quizBlocks.map((block) => Number(block.maxAttempts) || 1), 10);
  if ((currentProgress?.attempts || 0) >= allowedAttempts) {
    announce(`Maximum attempts reached for ${lesson.title}.`);
    return;
  }
  const answers = {};
  let earned = 0;
  let available = 0;
  const formData = new FormData(form);
  quizBlocks.forEach((block) => {
    const rawAnswer = formData.get(`quiz-${block.id}`);
    let selected;
    let correct;
    let credit = 0;
    if (["Short answer", "Fill in the blank"].includes(block.questionType)) {
      selected = String(rawAnswer || "").trim();
      correct = selected.toLowerCase() === String(block.options[0] || "").trim().toLowerCase();
    } else if (block.questionType === "Matching") {
      const pairs = (block.pairs || []).filter((pair) => pair.left.trim() && pair.right.trim());
      selected = pairs.map((pair, pairIndex) => String(formData.get(`quiz-${block.id}-${pairIndex}`) || ""));
      correct = pairs.every((pair, pairIndex) => selected[pairIndex] === pair.right);
      if (block.partialCredit !== false && pairs.length) credit = pairs.filter((pair, pairIndex) => selected[pairIndex] === pair.right).length / pairs.length;
    } else {
      selected = rawAnswer === null ? -1 : Number(rawAnswer);
      correct = selected === Number(block.correctAnswer);
    }
    if (correct) credit = 1;
    answers[block.id] = { selected, correct, credit };
    available += Number(block.points) || 0;
    earned += (Number(block.points) || 0) * credit;
  });
  const score = available ? Math.round((earned / available) * 100) : 100;
  state.lessonProgress ||= {};
  state.lessonProgress[lesson.id] = { completed: true, score, earned, available, answers, attempts: (currentProgress?.attempts || 0) + 1, submittedAt: "Just now", certificate: score >= 70 };
  activityFeed.unshift([activeUser().label, `completed ${lesson.title} with ${score}%`, "Just now", lesson.className]);
  pushRealtimeEvent("LMS", `${activeUser().label} completed a lesson`, `${lesson.title}: ${score}% quiz score.`);
  announce(`${lesson.title} completed with a ${score}% quiz score.`);
}

function continueAdventure() {
  const nextMission = missions.find((mission) => !state.completed.includes(mission.id));
  if (!nextMission) {
    announce("All missions are complete. Reset the demo or wait for the next adventure.");
    return;
  }
  if (!state.completed.includes(nextMission.id)) state.completed.push(nextMission.id);
  announce(`${nextMission.title} marked complete. Points updated.`);
}

function refreshActivity() {
  activityFeed.unshift(["Demo Student", "opened the newest assignment", "Just now", state.selectedClass === "All" ? "All Classes" : state.selectedClass]);
  announce("Student activity refreshed.");
}

function replyToStudent(student) {
  state.conversationFilter = "Groups";
  state.activeConversationId = "grade-team";
  state.draft = `Following up about ${student}'s recent activity.`;
  goToRole("messages", `Reply draft started for ${student}.`);
}

async function performPlatformAction(action, payload = {}, simulate = () => ({})) {
  let result;
  if (state.apiMode === "live-api") {
    result = await runServerPlatformAction(action, payload);
    if (result.snapshot) applyDemoSnapshot(result.snapshot);
    else applyDemoSnapshot({
      ...(result.productionReadiness ? { productionReadiness: result.productionReadiness } : {}),
      ...(result.tenantStates ? { tenantStates: result.tenantStates } : {}),
      ...(result.schoolDesigns ? { schoolDesigns: result.schoolDesigns } : {}),
      ...(result.lmsLessons ? { lmsLessons: result.lmsLessons } : {}),
      ...(result.lmsAssignments ? { lmsAssignments: result.lmsAssignments } : {}),
      ...(result.curriculumCourses ? { curriculumCourses: result.curriculumCourses } : {}),
    });
  } else result = await simulate();
  return result || {};
}

function localSandboxClone() {
  const source = selectedSchoolRecord();
  const district = selectedDistrictRecord();
  const existing = district.schools.find((school) => school.id === productionReadiness.sandbox.tenantId);
  const expiresOn = new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10);
  if (existing) {
    Object.assign(existing, { status: "Active", expiresOn, students: 12, staff: 4, sandbox: true });
    Object.assign(productionReadiness.sandbox, { status: "Reset with synthetic content", expiresOn, createdAt: "Just now" });
    return { sandbox: productionReadiness.sandbox };
  }
  const id = `sandbox-${Date.now()}`;
  const sandbox = {
    ...structuredClone(source),
    id,
    name: productionReadiness.sandbox.name,
    subdomain: `sandbox-${Date.now().toString().slice(-6)}`,
    customDomain: "",
    students: 12,
    staff: 4,
    status: "Active",
    sandbox: true,
    sandboxOf: source.id,
    expiresOn,
    loginMessage: "Welcome to a synthetic EduConnect training school.",
  };
  district.schools.push(sandbox);
  schoolDesigns[id] = { ...structuredClone(selectedSchoolDesign()), crest: "Safe Test School", voice: "Synthetic learning and training workspace" };
  Object.assign(productionReadiness.sandbox, { status: "Active", tenantId: id, sourceSchoolId: source.id, expiresOn, createdAt: "Just now" });
  return { sandbox: productionReadiness.sandbox };
}

function localAcademicRollover({ name, startsOn, endsOn, copyLessons, copyGradebook }) {
  const activeYear = productionReadiness.academicYears.find((year) => year.status === "Active");
  const id = name.replace(/[^0-9]+/g, "-").replace(/^-|-$/g, "") || `year-${Date.now()}`;
  const existing = productionReadiness.academicYears.find((year) => year.id === id || year.name === name);
  if (existing) return { year: existing, idempotent: true };
  if (activeYear) Object.assign(activeYear, { status: "Archived", archivedAt: "Just now" });
  const nextYear = { id, name, startsOn, endsOn, status: "Active", archivedAt: "" };
  productionReadiness.academicYears.push(nextYear);
  if (copyLessons) {
    const schoolId = selectedSchoolRecord().id;
    const nextLessons = lmsLessons.filter((item) => !item.schoolId || item.schoolId === schoolId).map((item) => ({ ...structuredClone(item), id: `${item.id}-${id}`, schoolId, academicYearId: id, status: "Draft", title: `${item.title} (${name})` }));
    const nextAssignments = lmsAssignments.filter((item) => !item.schoolId || item.schoolId === schoolId).map((item) => ({ ...structuredClone(item), id: `${item.id}-${id}`, schoolId, academicYearId: id, status: "Draft", title: `${item.title} (${name})` }));
    lmsLessons.push(...nextLessons);
    lmsAssignments.push(...nextAssignments);
  }
  if (copyGradebook) productionReadiness.gradebooks[selectedSchoolRecord().id] = structuredClone(activeSchoolGradebook());
  return { year: nextYear, idempotent: false };
}

function downloadSecurityReviewPackage() {
  const payload = {
    generatedAt: new Date().toISOString(),
    application: "EduConnect",
    reviewStatus: productionReadiness.securityReview.status,
    scope: productionReadiness.securityReview.scope,
    tenantIsolation: productionReadiness.tenantIsolation,
    security: { ...productionReadiness.security, activeSessions: [] },
    backups: productionReadiness.backups,
    providers: productionReadiness.providers.map(({ requirements, ...provider }) => ({ ...provider, credentialFields: requirements.length })),
    note: "This package excludes credentials, personal data, student records, and session identifiers.",
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `educonnect-security-review-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function bindLandingEvents() {
  document.querySelector("#landing-login-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const identifier = document.querySelector("#landing-identifier").value.trim();
    const password = document.querySelector("#landing-password").value;
    const normalizedIdentifier = identifier.toLowerCase();
    const localProfile = userProfiles.find((item) => [item.id, item.email, item.username, item.label].filter(Boolean).some((value) => String(value).toLowerCase() === normalizedIdentifier));
    landingError = "";
    if (!isProductionHost()) {
      if (localProfile) signInProfile(localProfile);
      else {
        landingError = "We could not find that school account.";
        render();
      }
      return;
    }
    landingBusy = true;
    render();
    try {
      const payload = await loginServerProfile(identifier, password);
      localStorage.setItem("educonnect-session-token", payload.token);
      state.apiMode = "live-api";
      await hydrateMockApiState("live-api").catch(() => undefined);
      landingBusy = false;
      signInProfile(payload.user, "Securely signed in as");
    } catch (error) {
      localStorage.removeItem("educonnect-session-token");
      landingBusy = false;
      landingError = error.message || "Invalid credentials.";
      render();
    }
  });
}

function closeGeneralMenu(restoreFocus = true) {
  const dialog = document.querySelector("#general-menu-dialog");
  const opener = generalMenuOpener;
  generalMenuOpener = null;
  document.querySelectorAll("[data-open-general-menu]").forEach((button) => button.setAttribute("aria-expanded", "false"));
  if (dialog?.open) dialog.close();
  if (restoreFocus && opener?.isConnected) requestAnimationFrame(() => opener.focus());
}

function openGeneralMenu(button) {
  const dialog = document.querySelector("#general-menu-dialog");
  if (!dialog) return;
  generalMenuOpener = button;
  document.querySelectorAll("[data-open-general-menu]").forEach((trigger) => trigger.setAttribute("aria-expanded", "true"));
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
  requestAnimationFrame(() => {
    const current = dialog.querySelector("[aria-current]");
    (current || dialog.querySelector(".general-menu-link") || dialog.querySelector("[data-close-general-menu]"))?.focus();
  });
}

function handleGeneralMenuAction(action) {
  closeGeneralMenu(false);
  if (action === "dashboard") {
    goToRole(activeUser().landing, "Your dashboard opened.");
    return;
  }
  if (action === "search") {
    requestAnimationFrame(() => document.querySelector("#global-search")?.focus());
    return;
  }
  if (action === "notifications" || action === "settings") {
    state.notificationsOpen = action === "notifications";
    state.settingsOpen = action === "settings";
    render();
    requestAnimationFrame(() => {
      const heading = document.querySelector(`.utility-panel[aria-label="${action === "notifications" ? "Notifications" : "Settings"}"] h3`);
      heading?.setAttribute("tabindex", "-1");
      heading?.focus();
    });
    return;
  }
  if (action === "create-lesson") {
    openLessonBuilder();
    return;
  }
  if (action === "tour") {
    state.tourOpen = true;
    state.tourStep = 0;
    goToRole(tourSteps[0].role, "Walkthrough started.");
    return;
  }
  if (action === "sign-out") signOut();
}

function bindEvents() {
  document.querySelectorAll("[data-role]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveRole(button.dataset.role);
    });
  });

  document.querySelectorAll("[data-open-general-menu]").forEach((button) => button.addEventListener("click", () => openGeneralMenu(button)));
  document.querySelector("[data-close-general-menu]")?.addEventListener("click", () => closeGeneralMenu());
  const generalMenuDialog = document.querySelector("#general-menu-dialog");
  generalMenuDialog?.addEventListener("click", (event) => {
    if (event.target === generalMenuDialog) closeGeneralMenu();
  });
  generalMenuDialog?.addEventListener("close", () => {
    document.querySelectorAll("[data-open-general-menu]").forEach((button) => button.setAttribute("aria-expanded", "false"));
    const opener = generalMenuOpener;
    generalMenuOpener = null;
    if (opener?.isConnected) requestAnimationFrame(() => opener.focus());
  });

  document.querySelectorAll("[data-menu-workspace]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    closeGeneralMenu(false);
    state.searchTerm = "";
    setActiveRole(link.dataset.menuWorkspace);
  }));

  document.querySelectorAll("[data-menu-function]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    closeGeneralMenu(false);
    state.searchTerm = "";
    const destination = findMenuDestination(link.dataset.menuRole, link.dataset.menuFunction);
    if (!destination) return;
    goToRole(destination.role, `${destination.label} opened.`, destination.id);
  }));

  document.querySelectorAll("[data-menu-action]").forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    handleGeneralMenuAction(link.dataset.menuAction);
  }));

  document.querySelector("[data-reset-demo]")?.addEventListener("click", () => {
    resetDemoState();
    state.currentUser = authenticatedProfile.id;
    setActiveRole(authenticatedProfile.landing);
  });

  document.querySelector("[data-sign-out]")?.addEventListener("click", signOut);

  document.querySelector("#global-search")?.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    render();
  });

  document.querySelector("[data-clear-search]")?.addEventListener("click", () => {
    state.searchTerm = "";
    render();
  });

  document.querySelectorAll("[data-open-role]").forEach((button) => {
    button.addEventListener("click", () => {
      state.searchTerm = "";
      goToRole(button.dataset.openRole, `${roles.find((role) => role.id === button.dataset.openRole)?.label || "Workspace"} opened.`);
    });
  });

  document.querySelector("[data-role-controls]")?.addEventListener("click", () => {
    goToRole("state-admin", "Role Control Center opened.", "role-control-center");
  });

  document.querySelectorAll("[data-school-customization]").forEach((button) => button.addEventListener("click", () => {
    goToRole("school-admin", "School Customization opened.", "school-customization");
  }));

  document.querySelectorAll("[data-impersonate-profile]").forEach((button) => button.addEventListener("click", () => impersonateProfile(button.dataset.impersonateProfile)));
  document.querySelector("[data-stop-impersonating]")?.addEventListener("click", stopImpersonating);

  document.querySelector("[data-start-tour]")?.addEventListener("click", () => {
    state.tourOpen = true;
    state.tourStep = 0;
    goToRole(tourSteps[0].role, "Walkthrough started.");
  });

  document.querySelector("[data-tour-next]")?.addEventListener("click", () => {
    if (state.tourStep >= tourSteps.length - 1) {
      state.tourOpen = false;
      announce("Walkthrough complete.");
      return;
    }
    state.tourStep += 1;
    goToRole(tourSteps[state.tourStep].role);
  });

  document.querySelector("[data-tour-prev]")?.addEventListener("click", () => {
    if (state.tourStep === 0) return;
    state.tourStep -= 1;
    goToRole(tourSteps[state.tourStep].role);
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => announce(button.dataset.action));
  });

  document.querySelector("[data-dismiss-toast]")?.addEventListener("click", () => {
    state.toast = "";
    render();
  });

  document.querySelector("[data-toggle-notifications]")?.addEventListener("click", () => {
    state.notificationsOpen = !state.notificationsOpen;
    state.settingsOpen = false;
    render();
  });

  document.querySelector("[data-toggle-settings]")?.addEventListener("click", () => {
    state.settingsOpen = !state.settingsOpen;
    state.notificationsOpen = false;
    render();
  });

  document.querySelectorAll("[data-close-panel]").forEach((button) => {
    button.addEventListener("click", () => {
      state.notificationsOpen = false;
      state.settingsOpen = false;
      render();
    });
  });

  document.querySelector("[data-mark-notifications]")?.addEventListener("click", () => {
    lmsNotifications.forEach((notice) => {
      notice.read = true;
    });
    announce("All notifications marked read.");
  });

  document.querySelectorAll("[data-dismiss-notification]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = lmsNotifications.findIndex((notice) => notice.id === button.dataset.dismissNotification);
      if (index >= 0) lmsNotifications.splice(index, 1);
      render();
    });
  });

  document.querySelectorAll("[data-simulate-live]").forEach((button) => {
    button.addEventListener("click", () => simulateLiveUpdate("manual"));
  });

  document.querySelector("[data-toggle-live]")?.addEventListener("change", (event) => {
    state.liveUpdates = event.target.checked;
    announce(state.liveUpdates ? "Realtime updates enabled." : "Realtime updates paused.");
  });

  document.querySelector("#auth-provider")?.addEventListener("change", (event) => {
    state.authProvider = event.target.value;
    addAudit(`Updated auth provider to ${state.authProvider}`);
    announce(`${state.authProvider} selected.`);
  });

  document.querySelector("#backend-provider")?.addEventListener("change", (event) => {
    state.backendProvider = event.target.value;
    addAudit(`Updated backend provider to ${state.backendProvider}`);
    announce(`${state.backendProvider} selected as backend provider.`);
  });

  document.querySelectorAll("[data-set-gateway]").forEach((button) => {
    button.addEventListener("click", () => {
      state.gatewayMode = button.dataset.setGateway;
      pushRealtimeEvent("Production", "Gateway mode updated", `Launch gateway is now ${state.gatewayMode}.`);
      announce(state.gatewayMode === "backend" ? "Backend-ready mode enabled." : "Demo mode enabled.");
    });
  });

  document.querySelector("[data-provision-schema]")?.addEventListener("click", () => {
    databaseTables.forEach((table) => {
      table.status = "Ready";
    });
    pushRealtimeEvent("Database", "Mock schema provisioned", `${databaseTables.length} production tables marked ready.`);
    addAudit("Provisioned mock production schema");
    announce("Database blueprint marked ready.");
  });

  document.querySelectorAll("[data-onboarding-task]").forEach((input) => {
    input.addEventListener("change", () => {
      const task = onboardingTasks.find((item) => item.id === input.dataset.onboardingTask);
      if (!task) return;
      task.done = input.checked;
      addAudit(`${task.done ? "Completed" : "Reopened"} onboarding task: ${task.label}`);
      announce("Onboarding checklist updated.");
    });
  });

  document.querySelector("#onboarding-user-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#onboarding-user-name").value.trim();
    const role = document.querySelector("#onboarding-user-role").value;
    if (!name) return;
    const landing = role === "Admin" ? "school-admin" : role.toLowerCase();
    userProfiles.push({
      id: `${role.toLowerCase()}-${Date.now()}`,
      label: name,
      role,
      landing,
      permissions: role === "Admin" ? ["manage-tenants", "approve-posts", "emergency", "lms", "teacher-tools", "message", "manage-users", "view-compliance"] : role === "Teacher" ? ["lms", "teacher-tools", "message", "submit-post"] : role === "Parent" ? ["message", "submit-post"] : ["student-missions"],
    });
    pushNotification("Action", `${name} invited`, selectedSchoolRecord().name, "Onboarding");
    addAudit(`Invited ${role}: ${name}`);
    announce(`${name} invited as ${role}.`);
  });

  document.querySelector("#production-file-upload")?.addEventListener("change", async (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    for (const file of selectedFiles) {
      if (state.apiMode === "live-api") {
        try {
          const payload = await uploadServerFile(file, state.role === "community" ? "Community" : "LMS");
          fileUploads.unshift(payload.file);
        } catch {
          fileUploads.unshift({
            id: `upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,
            name: file.name,
            area: state.role === "community" ? "Community" : "LMS",
            size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
            status: "Server upload failed; metadata stored locally",
          });
        }
      } else {
        fileUploads.unshift({
          id: `upload-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          name: file.name,
          area: state.role === "community" ? "Community" : "LMS",
          size: `${Math.max(1, Math.round(file.size / 1024))} KB`,
          status: "Stored in demo metadata; ready for cloud storage",
        });
      }
    }
    pushRealtimeEvent("Files", "Upload metadata captured", `${event.target.files?.length || 0} file(s) added to production upload queue.`);
    addAudit("Added production upload metadata");
    announce("File upload metadata added.");
  });

  document.querySelector("[data-send-delivery-test]")?.addEventListener("click", async () => {
    if (state.apiMode === "live-api") {
      try {
        const payload = await sendServerNotificationTest("Launch test group");
        payload.records.forEach((record) => notificationDeliveryLog.unshift(record));
      } catch {
        ["Email", "SMS", "Push"].forEach((channel) => {
          notificationDeliveryLog.unshift({
            id: `delivery-${Date.now()}-${channel}`,
            channel,
            audience: "Launch test group",
            status: "Failed over locally",
            detail: `${channel} test could not reach operational API`,
          });
        });
      }
    } else {
      ["Email", "SMS", "Push"].forEach((channel) => {
        notificationDeliveryLog.unshift({
          id: `delivery-${Date.now()}-${channel}`,
          channel,
          audience: "Launch test group",
          status: "Simulated",
          detail: `${channel} test validated locally; external delivery requires a connected provider`,
        });
      });
    }
    pushNotification("FYI", "Notification delivery test completed", selectedSchoolRecord().name, "Launch Control");
    addAudit("Sent notification delivery test batch");
    announce("Notification delivery test completed.");
  });

  document.querySelectorAll("[data-operations-tab]").forEach((button) => button.addEventListener("click", () => {
    state.activeOperationsTab = button.dataset.operationsTab;
    render();
  }));

  document.querySelector("[role='tablist'][aria-label='Platform operations']")?.addEventListener("keydown", (event) => {
    const tabs = Array.from(event.currentTarget.querySelectorAll("[role='tab']"));
    const index = tabs.indexOf(document.activeElement);
    if (index < 0 || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : event.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    state.activeOperationsTab = tabs[nextIndex].dataset.operationsTab;
    render();
    requestAnimationFrame(() => document.querySelector(`#operations-tab-${state.activeOperationsTab}`)?.focus());
  });

  document.querySelectorAll("[data-test-provider]").forEach((button) => button.addEventListener("click", async () => {
    const provider = productionReadiness.providers.find((item) => item.id === button.dataset.testProvider);
    if (!provider) return;
    try {
      const response = await performPlatformAction("test-provider", { providerId: provider.id }, () => {
        provider.status = provider.requirements.length ? (provider.id === "malware" ? "Fallback active" : "Needs credentials") : "Connected";
        provider.lastTest = provider.requirements.length ? "Deployment credentials required" : "Connected • Just now";
        return { provider };
      });
      if (response.provider) Object.assign(provider, response.provider);
      addAudit(`Tested ${provider.name} provider readiness`);
      announce(provider.status === "Connected" ? `${provider.name} is connected.` : `${provider.name} is ready for deployment credentials.`);
    } catch (error) { announce(error.message); }
  }));

  document.querySelectorAll("[data-test-integration]").forEach((button) => button.addEventListener("click", async () => {
    const integration = productionReadiness.integrations.find((item) => item.id === button.dataset.testIntegration);
    if (!integration) return;
    try {
      const response = await performPlatformAction("test-integration", { integrationId: integration.id, schoolId: selectedSchoolRecord().id }, () => {
        integration.status = integration.requirements.length ? "Needs credentials" : "Ready";
        integration.lastSync = integration.requirements.length ? "Credentials required" : "Connection test passed • Just now";
        return { integration };
      });
      if (response.integration) Object.assign(integration, response.integration);
      announce(integration.status === "Connected" || integration.status === "Ready" ? `${integration.name} is ready.` : `${integration.name} needs school-owned credentials.`);
    } catch (error) { announce(error.message); }
  }));

  document.querySelectorAll("[data-sync-integration]").forEach((button) => button.addEventListener("click", async () => {
    const integration = productionReadiness.integrations.find((item) => item.id === button.dataset.syncIntegration);
    if (!integration) return;
    try {
      const response = await performPlatformAction("sync-integration", { integrationId: integration.id, schoolId: selectedSchoolRecord().id }, () => {
        if (integration.requirements.length) return { blocked: true, integration };
        Object.assign(integration, { status: "Synced", lastSync: "Just now", records: rosterRecords.length });
        return { integration };
      });
      if (response.integration) Object.assign(integration, response.integration);
      if (response.blocked || integration.status === "Needs credentials") announce(`${integration.name} sync is waiting for school-owned credentials.`);
      else {
        addAudit(`Completed ${integration.name} synchronization`);
        announce(`${integration.name} synchronized successfully.`);
      }
    } catch (error) { announce(error.message); }
  }));

  document.querySelectorAll("[data-run-job]").forEach((button) => button.addEventListener("click", async () => {
    const job = productionReadiness.jobs.find((item) => item.id === button.dataset.runJob);
    if (!job) return;
    try {
      const response = await performPlatformAction("run-job", { jobId: job.id }, () => {
        if (job.id === "backup-copy" && productionReadiness.backups.offsiteStatus !== "Connected") return { blocked: true, job };
        Object.assign(job, { status: "Completed", progress: 100, lastRun: "Just now" });
        return { job };
      });
      if (response.job) Object.assign(job, response.job);
      announce(response.blocked || job.status === "Blocked" ? `${job.name} is blocked until its provider is connected.` : `${job.name} completed.`);
    } catch (error) { announce(error.message); }
  }));

  document.querySelector("[data-create-sandbox]")?.addEventListener("click", async () => {
    try {
      const response = await performPlatformAction("create-sandbox", { sourceSchoolId: selectedSchoolRecord().id, name: productionReadiness.sandbox.name, expiresInDays: 30 }, localSandboxClone);
      if (response.sandbox) Object.assign(productionReadiness.sandbox, response.sandbox);
      addAudit("Created or reset synthetic sandbox school", selectedDistrictRecord().name);
      announce(`${productionReadiness.sandbox.name} is ready with synthetic data only.`);
    } catch (error) { announce(error.message); }
  });

  document.querySelectorAll("[data-pilot-checkpoint]").forEach((input) => input.addEventListener("change", async () => {
    const checkpoint = input.dataset.pilotCheckpoint;
    productionReadiness.pilot.completed = input.checked ? [...new Set([...productionReadiness.pilot.completed, checkpoint])] : productionReadiness.pilot.completed.filter((item) => item !== checkpoint);
    productionReadiness.pilot.status = productionReadiness.pilot.completed.length === productionReadiness.pilot.checkpoints.length ? "Ready for outcome review" : productionReadiness.pilot.completed.length ? "In progress" : "Planning";
    try { await performPlatformAction("update-pilot", { checkpoint, completed: input.checked }); } catch (error) { announce(error.message); return; }
    announce("Pilot readiness checkpoint updated.");
  }));

  document.querySelector("[data-export-security-review]")?.addEventListener("click", async () => {
    try {
      await performPlatformAction("generate-security-review", {}, () => {
        Object.assign(productionReadiness.securityReview, { status: "Ready for independent review", lastExport: "Just now" });
      });
      productionReadiness.securityReview.lastExport = "Just now";
      downloadSecurityReviewPackage();
      addAudit("Generated privacy-safe independent security review package");
      announce("Security review package generated without credentials or student data.");
    } catch (error) { announce(error.message); }
  });

  document.querySelector("[data-run-launch-check]")?.addEventListener("click", () => {
    const pendingProviders = productionReadiness.providers.filter((item) => item.status !== "Connected" && item.id !== "malware").length;
    const pendingPilot = productionReadiness.pilot.checkpoints.length - productionReadiness.pilot.completed.length;
    announce(`${pendingProviders} provider setups and ${pendingPilot} pilot checkpoints still need authorized external input.`);
  });

  document.querySelectorAll("[data-refresh-analytics]").forEach((button) => button.addEventListener("click", async () => {
    try {
      const response = await performPlatformAction("refresh-analytics", { schoolId: selectedSchoolRecord().id }, () => {
        const threshold = productionReadiness.analytics.privacyThreshold;
        const learners = selectedSchoolRecord().students;
        productionReadiness.analytics.metrics = [
          { label: "Active learners", value: learners, cohortSize: learners, status: learners < threshold ? "Suppressed" : "Published" },
          { label: "Assignment completion", value: `${Math.round((lmsSubmissions.filter((item) => item.status === "Submitted" || item.status === "Returned").length / Math.max(1, rosterRecords.length)) * 100)}%`, cohortSize: rosterRecords.length, status: rosterRecords.length < threshold ? "Suppressed" : "Published" },
          { label: "Interventions on track", value: `${Math.round((productionReadiness.interventions.filter((item) => item.status === "Monitoring").length / Math.max(1, productionReadiness.interventions.length)) * 100)}%`, cohortSize: productionReadiness.interventions.length, status: productionReadiness.interventions.length < threshold ? "Suppressed" : "Published" },
        ];
        productionReadiness.analytics.lastRefresh = "Just now";
        productionReadiness.analytics.suppressedGroups = productionReadiness.analytics.metrics.filter((item) => item.status === "Suppressed").length;
        return { analytics: productionReadiness.analytics };
      });
      if (response.analytics) Object.assign(productionReadiness.analytics, response.analytics);
      addAudit("Refreshed privacy-safe aggregate analytics");
      announce("Analytics refreshed; small cohorts remain hidden.");
    } catch (error) { announce(error.message); }
  }));

  document.querySelector("[data-preview-rollover]")?.addEventListener("click", () => {
    const name = document.querySelector("#rollover-name")?.value.trim();
    state.academicRolloverPreview = `${curriculumCourses.length} course shells, ${lmsLessons.length} lessons, and ${lmsAssignments.length} assignments can be copied into ${name || "the new year"}; submissions and grades will stay archived.`;
    announce("Academic-year rollover preview is ready.");
  });

  document.querySelector("#academic-rollover-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const payload = {
      schoolId: selectedSchoolRecord().id,
      name: document.querySelector("#rollover-name").value.trim(),
      startsOn: document.querySelector("#rollover-start").value,
      endsOn: document.querySelector("#rollover-end").value,
      copyLessons: document.querySelector("#rollover-copy-lessons").checked,
      copyGradebook: document.querySelector("#rollover-copy-gradebook").checked,
    };
    try {
      const response = await performPlatformAction("academic-year-rollover", payload, () => localAcademicRollover(payload));
      state.academicRolloverPreview = null;
      addAudit(`Completed academic-year rollover to ${payload.name}`, selectedSchoolRecord().name);
      announce(response.idempotent ? `${payload.name} already exists; no records were duplicated.` : `${payload.name} was created and prior student work remains archived.`);
    } catch (error) { announce(error.message); }
  });

  document.querySelector("#intervention-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const studentId = document.querySelector("#intervention-student").value;
    const student = rosterRecords.find((record) => record.id === studentId);
    const intervention = {
      id: `intervention-${Date.now()}`,
      schoolId: selectedSchoolRecord().id,
      studentId,
      student: student?.student || "Learner",
      area: document.querySelector("#intervention-area").value.trim(),
      tier: document.querySelector("#intervention-tier").value,
      owner: document.querySelector("#intervention-owner").value.trim(),
      nextReview: document.querySelector("#intervention-review").value,
      notes: document.querySelector("#intervention-notes").value.trim(),
      status: "Monitoring",
    };
    try {
      const response = await performPlatformAction("create-intervention", { intervention }, () => {
        productionReadiness.interventions.unshift(intervention);
        return { intervention };
      });
      if (response.intervention && !productionReadiness.interventions.some((item) => item.id === response.intervention.id)) productionReadiness.interventions.unshift(response.intervention);
      addAudit("Created a student intervention plan", selectedSchoolRecord().name);
      announce(`Support plan created for ${intervention.student}.`);
    } catch (error) { announce(error.message); }
  });

  document.querySelectorAll("[data-complete-intervention]").forEach((button) => button.addEventListener("click", async () => {
    const intervention = productionReadiness.interventions.find((item) => item.id === button.dataset.completeIntervention);
    if (!intervention) return;
    try {
      const response = await performPlatformAction("complete-intervention", { interventionId: intervention.id }, () => {
        Object.assign(intervention, { status: "Completed", completedAt: "Just now" });
        return { intervention };
      });
      if (response.intervention) Object.assign(intervention, response.intervention);
      addAudit("Completed a student intervention plan", selectedSchoolRecord().name);
      announce("Support plan marked complete.");
    } catch (error) { announce(error.message); }
  }));

  document.querySelector("[data-run-isolation-test]")?.addEventListener("click", () => {
    productionReadiness.tenantIsolation.lastTest = "Passed • Just now";
    addAudit("Passed cross-tenant isolation test", selectedStateRecord().name, activeUser().label);
    announce("Tenant isolation test passed: no cross-school records were exposed.");
  });

  document.querySelector("[data-optimize-storage]")?.addEventListener("click", () => {
    productionReadiness.storage.usedGb = Math.max(0, Number((productionReadiness.storage.usedGb - 1.2).toFixed(1)));
    addAudit("Optimized cloud media storage");
    announce("Media optimization completed and 1.2 GB was reclaimed.");
  });

  document.querySelectorAll("[data-verify-domain]").forEach((button) => button.addEventListener("click", async () => {
    const domain = productionReadiness.domains.find((item) => item.schoolId === button.dataset.verifyDomain);
    if (!domain) return;
    if (state.apiMode === "live-api") {
      try { Object.assign(domain, (await verifyServerDomain(domain.schoolId)).domain); } catch (error) { announce(error.message); return; }
    } else Object.assign(domain, { dns: "Verified", ssl: "Active", checkedAt: "Just now" });
    addAudit(`Verified custom domain ${domain.domain}`);
    announce(`${domain.domain} DNS and SSL are verified.`);
  }));

  document.querySelectorAll("[data-security-setting]").forEach((input) => input.addEventListener("change", async () => {
    productionReadiness.security[input.dataset.securitySetting] = input.checked;
    if (state.apiMode === "live-api" && input.dataset.securitySetting === "mfaRequired") {
      try { await updateServerMfa(input.checked); } catch (error) { announce(error.message); return; }
    }
    addAudit(`Updated security policy ${input.dataset.securitySetting}`);
    announce("Security policy updated.");
  }));

  document.querySelector("[data-session-timeout]")?.addEventListener("change", (event) => {
    productionReadiness.security.sessionTimeoutMinutes = Number(event.target.value);
    announce("Session timeout policy updated.");
  });

  document.querySelectorAll("[data-revoke-session]").forEach((button) => button.addEventListener("click", () => {
    productionReadiness.security.activeSessions = productionReadiness.security.activeSessions.filter((item) => item.id !== button.dataset.revokeSession);
    addAudit("Revoked an active account session");
    announce("Session revoked.");
  }));

  document.querySelector("[data-create-backup]")?.addEventListener("click", async () => {
    if (state.apiMode === "live-api") {
      try { await createServerBackup(); } catch (error) { announce(error.message); return; }
    }
    productionReadiness.backups.lastBackup = "Just now";
    addAudit("Created encrypted platform backup");
    announce("Encrypted backup created successfully.");
  });

  document.querySelector("[data-test-restore]")?.addEventListener("click", async () => {
    if (state.apiMode === "live-api") {
      try { await testServerRestore(); } catch (error) { announce(error.message); return; }
    }
    productionReadiness.backups.lastRestoreTest = "Passed • Just now";
    addAudit("Completed backup restore drill");
    announce("Restore drill passed and the backup snapshot was valid.");
  });

  document.querySelector("[data-run-accessibility-audit]")?.addEventListener("click", () => {
    productionReadiness.accessibility.score = 100;
    productionReadiness.accessibility.issues = 0;
    productionReadiness.accessibility.lastAudit = "Just now";
    announce("WCAG 2.2 AA accessibility audit passed.");
  });

  document.querySelector("#notification-template-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#notification-template-name").value.trim();
    const channel = document.querySelector("#notification-template-channel").value;
    productionReadiness.notifications.templates.push({ id: `template-${Date.now()}`, name, channels: [channel], status: "Active" });
    addAudit(`Created notification template ${name}`);
    announce(`${name} template created.`);
  });

  document.querySelectorAll("[data-send-template]").forEach((button) => button.addEventListener("click", async () => {
    const template = productionReadiness.notifications.templates.find((item) => item.id === button.dataset.sendTemplate);
    if (!template) return;
    if (state.apiMode === "live-api") {
      try { await scheduleServerNotification({ channel: template.channels[0], audience: "Test recipients", template: template.name }); } catch (error) { announce(error.message); return; }
    }
    notificationDeliveryLog.unshift({ id: `template-delivery-${Date.now()}`, channel: template.channels.join(" + "), audience: "Test recipients", status: state.apiMode === "live-api" ? "Scheduled" : "Simulated", detail: template.name });
    announce(`${template.name} test queued.`);
  }));

  document.querySelector("[data-run-monitors]")?.addEventListener("click", async () => {
    if (state.apiMode === "live-api") {
      try {
        const payload = await getServerOperationsStatus();
        if (payload.monitors?.length) productionReadiness.monitors.splice(0, productionReadiness.monitors.length, ...payload.monitors);
      } catch (error) { announce(error.message); return; }
    } else productionReadiness.monitors.forEach((monitor, index) => Object.assign(monitor, { status: "Operational", latency: 82 + index * 31, checkedAt: "Just now" }));
    pushRealtimeEvent("Monitoring", "Production health checks passed", "Website, API, storage, and notifications are operational.");
    announce("All production service checks passed.");
  });

  document.querySelector("[data-install-app]")?.addEventListener("click", async () => {
    if (deferredInstallPrompt) {
      await deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    }
    state.pwaInstalled = true;
    announce("EduConnect is ready for offline use on this device.");
  });

  document.querySelector("#enrollment-import-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const file = document.querySelector("#enrollment-file").files?.[0];
    if (!file) return;
    const text = await file.text();
    const rows = file.name.toLowerCase().endsWith(".json") ? (JSON.parse(text).length || 0) : Math.max(0, text.split(/\r?\n/).filter(Boolean).length - 1);
    let record = { id: `import-${Date.now()}`, schoolId: selectedSchoolRecord().id, file: file.name, rows, accepted: rows, needsReview: 0, status: "Completed", createdAt: "Just now", recordType: document.querySelector("#enrollment-role").value };
    if (state.apiMode === "live-api") {
      try { record = (await importServerEnrollment(selectedSchoolRecord().id, file.name, Array.from({ length: rows }, (_, index) => ({ row: index + 1 })))).import; } catch (error) { announce(error.message); return; }
    }
    productionReadiness.enrollmentImports.unshift(record);
    addAudit(`Imported ${rows} enrollment records`, selectedSchoolRecord().name);
    announce(`${rows} enrollment records validated and imported.`);
  });

  document.querySelector("[data-export-roster]")?.addEventListener("click", () => {
    const csv = ["student,guardian,class,grade,attendance,status", ...rosterRecords.map((item) => [item.student, item.guardian, item.className, item.grade, item.attendance, item.status].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const link = document.createElement("a"); link.href = url; link.download = `${selectedSchoolRecord().subdomain}-oneroster.csv`; link.click(); URL.revokeObjectURL(url);
    addAudit("Exported OneRoster CSV");
    announce("OneRoster CSV exported.");
  });

  document.querySelector("[data-send-enrollment-invites]")?.addEventListener("click", () => {
    pushNotification("FYI", "Enrollment invitations sent", selectedSchoolRecord().name, "Email + SMS");
    announce("Account invitations queued for enrolled families and staff.");
  });

  document.querySelectorAll("[data-gradebook-weight]").forEach((input) => input.addEventListener("change", () => {
    activeSchoolGradebook().categories[Number(input.dataset.gradebookWeight)].weight = Number(input.value);
    announce("Gradebook category weights updated.");
  }));

  document.querySelector("[data-generate-report-cards]")?.addEventListener("click", () => {
    addAudit("Generated standards-based report cards");
    announce("Standards-based report cards generated for the active classes.");
  });

  document.querySelector("[data-export-sis]")?.addEventListener("click", () => {
    activeSchoolGradebook().sisExport.lastExport = "Just now";
    addAudit("Exported grades to SIS using OneRoster CSV");
    announce("Gradebook exported to the SIS.");
  });

  document.querySelector("[data-open-family-settings]")?.addEventListener("click", () => {
    state.settingsOpen = true;
    render();
  });

  document.querySelector("[data-send-weekly-summary]")?.addEventListener("click", async () => {
    if (state.apiMode === "live-api") {
      try { await scheduleServerNotification({ channel: "Email", audience: activeUser().label, template: "Weekly family progress summary" }); } catch (error) { announce(error.message); return; }
    }
    notificationDeliveryLog.unshift({ id: `weekly-${Date.now()}`, channel: "Email", audience: activeUser().label, status: state.apiMode === "live-api" ? "Scheduled" : "Simulated", detail: "Weekly family progress summary" });
    announce("Weekly family summary queued.");
  });

  document.querySelectorAll("[data-security-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const item = securityChecklist.find((check) => check.id === input.dataset.securityCheck);
      if (!item) return;
      item.done = input.checked;
      item.status = item.done ? "Configured" : "Needs review";
      addAudit(`Updated security checklist: ${item.label}`);
      announce("Security checklist updated.");
    });
  });

  document.querySelectorAll("[data-toggle-setting]").forEach((input) => {
    input.addEventListener("change", () => {
      state[input.dataset.toggleSetting] = input.checked;
      render();
    });
  });

  document.querySelectorAll("[data-setting-select]").forEach((input) => input.addEventListener("change", () => {
    state[input.dataset.settingSelect] = input.value;
    render();
  }));

  document.querySelectorAll("[data-notification-preference]").forEach((input) => input.addEventListener("change", () => {
    state.notificationPreferences[input.dataset.notificationPreference] = input.checked;
    render();
  }));

  document.querySelector("[data-notification-days]")?.addEventListener("change", (event) => {
    state.notificationPreferences.dueDays = Number(event.target.value);
    render();
  });

  document.querySelector("[data-send-preference-test]")?.addEventListener("click", () => {
    pushNotification("FYI", "Your notification preferences are working", activeUser().label, "Preference test");
    announce("Test notification added to your notification tray.");
  });

  document.querySelector("[data-export-demo]")?.addEventListener("click", async () => {
    const payload = JSON.stringify(getDemoSnapshot(), null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "educonnect-demo-state.json";
    link.click();
    URL.revokeObjectURL(url);
    addAudit("Exported demo state JSON");
    try {
      await navigator.clipboard.writeText(payload);
      announce("Demo state exported and copied to clipboard.");
    } catch {
      announce("Demo state exported as a JSON file.");
    }
  });

  document.querySelector("#import-demo-state")?.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const snapshot = JSON.parse(await file.text());
      const errors = validateDemoSnapshot(snapshot);
      if (errors.length) {
        announce(`Import failed: ${errors.join(" ")}`);
        return;
      }
      applyDemoSnapshot(snapshot);
      addAudit("Imported demo state JSON");
      announce("Demo state imported.");
    } catch {
      announce("That JSON file could not be imported.");
    }
  });

  document.querySelector("[data-add-school]")?.addEventListener("click", addDemoSchoolTenant);

  document.querySelector("[data-create-assignment]")?.addEventListener("click", createDemoAssignment);

  document.querySelector("#assignment-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#assignment-title").value.trim();
    if (!title) return;
    const className = document.querySelector("#assignment-class").value;
    createAssignmentRecord({
      title,
      className,
      type: document.querySelector("#assignment-type").value,
      lockDate: document.querySelector("#assignment-due").value,
      dueDate: document.querySelector("#assignment-due").value,
      instructions: document.querySelector("#assignment-instructions").value.trim(),
      points: Number(document.querySelector("#assignment-points").value),
      maxAttempts: Number(document.querySelector("#assignment-attempts").value),
      allowResubmit: document.querySelector("#assignment-resubmit").checked,
    });
    announce(`${title} added to ${className}.`);
  });

  document.querySelectorAll("[data-new-lesson]").forEach((button) => button.addEventListener("click", () => openLessonBuilder()));

  document.querySelector("[data-close-lesson-builder]")?.addEventListener("click", () => {
    state.lessonBuilderOpen = false;
    state.lessonDraft = null;
    render();
  });

  document.querySelector("#lesson-filter")?.addEventListener("change", (event) => {
    state.lessonFilter = event.target.value;
    render();
  });

  document.querySelectorAll("[data-edit-lesson]").forEach((button) => button.addEventListener("click", () => openLessonBuilder(button.dataset.editLesson)));
  document.querySelectorAll("[data-toggle-lesson]").forEach((button) => button.addEventListener("click", () => toggleLessonStatus(button.dataset.toggleLesson)));
  document.querySelectorAll("[data-preview-lesson]").forEach((button) => button.addEventListener("click", () => {
    state.lessonPreviewId = button.dataset.previewLesson;
    render();
    requestAnimationFrame(() => document.querySelector(".lesson-preview-panel")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  }));
  document.querySelector("[data-close-lesson-preview]")?.addEventListener("click", () => {
    state.lessonPreviewId = "";
    render();
  });

  document.querySelectorAll("[data-lesson-field]").forEach((input) => {
    input.addEventListener("change", () => {
      if (!state.lessonDraft) return;
      const field = input.dataset.lessonField;
      state.lessonDraft[field] = input.type === "checkbox" ? input.checked : input.type === "number" ? Number(input.value) : input.value;
    });
    input.addEventListener("input", () => {
      if (!state.lessonDraft || ["checkbox", "number"].includes(input.type)) return;
      state.lessonDraft[input.dataset.lessonField] = input.value;
    });
  });

  document.querySelectorAll("[data-block-field]").forEach((input) => {
    const update = () => {
      const [blockId, field] = input.dataset.blockField.split(":");
      const block = state.lessonDraft?.blocks.find((item) => item.id === blockId);
      if (!block) return;
      block[field] = input.type === "checkbox" ? input.checked : input.type === "number" ? Number(input.value) : input.value;
      if (field === "questionType" && input.value === "True or false") {
        block.options = ["True", "False", "", ""];
        block.correctAnswer = 0;
        render();
      }
      if (field === "questionType" && input.value === "Short answer") {
        block.options = ["", "", "", ""];
        block.correctAnswer = 0;
        render();
      }
      if (field === "questionType" && input.value === "Fill in the blank") {
        block.options = ["", "", "", ""];
        block.correctAnswer = 0;
        render();
      }
      if (field === "questionType" && input.value === "Matching") {
        block.pairs = block.pairs?.length ? block.pairs : [{ left: "", right: "" }, { left: "", right: "" }];
        render();
      }
    };
    input.addEventListener("change", update);
    input.addEventListener("input", update);
  });

  document.querySelectorAll("[data-quiz-option]").forEach((input) => input.addEventListener("input", () => {
    const [blockId, optionIndex] = input.dataset.quizOption.split(":");
    const block = state.lessonDraft?.blocks.find((item) => item.id === blockId);
    if (block) block.options[Number(optionIndex)] = input.value;
  }));

  document.querySelectorAll("[data-match-pair]").forEach((input) => input.addEventListener("input", () => {
    const [blockId, pairIndex, side] = input.dataset.matchPair.split(":");
    const block = state.lessonDraft?.blocks.find((item) => item.id === blockId);
    if (block?.pairs?.[Number(pairIndex)]) block.pairs[Number(pairIndex)][side] = input.value;
  }));

  document.querySelector("[data-add-bank-question]")?.addEventListener("click", () => {
    const item = questionBank.find((question) => question.id === document.querySelector("#question-bank-select")?.value);
    if (!item || !state.lessonDraft) return;
    state.lessonDraft.blocks.push({ ...structuredClone(item), id: `block-bank-${Date.now()}`, type: "quiz", title: `${item.subject} check`, required: true, timeLimit: 0, maxAttempts: 2, randomize: false, showAnswers: true, pairs: item.pairs || [{ left: "", right: "" }, { left: "", right: "" }] });
    render();
  });

  document.querySelectorAll("[data-lesson-media-upload]").forEach((input) => input.addEventListener("change", async () => {
    const file = input.files?.[0];
    const block = state.lessonDraft?.blocks.find((item) => item.id === input.dataset.lessonMediaUpload);
    if (!file || !block) return;
    if (file.size > 5 * 1024 * 1024) {
      announce("Lesson media must be 5 MB or smaller.");
      return;
    }
    try {
      let uploaded;
      if (state.apiMode === "live-api") {
        uploaded = (await uploadServerFile(file, "Lesson Media")).file;
      } else {
        const dataUrl = file.size <= 750 * 1024 ? await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        }) : "";
        uploaded = { id: `lesson-file-${Date.now()}`, name: file.name, type: file.type, size: `${Math.max(1, Math.round(file.size / 1024))} KB`, status: dataUrl ? "Ready" : "Metadata saved; upload on publish", dataUrl };
      }
      block.file = uploaded;
      block.mediaType = file.type.startsWith("image/") ? "Image" : file.type.startsWith("video/") ? "Video" : file.type.startsWith("audio/") ? "Audio" : "Document";
      if (!fileUploads.some((item) => item.id === uploaded.id)) fileUploads.unshift(uploaded);
      announce(`${file.name} attached to the lesson.`);
    } catch {
      announce(`Could not upload ${file.name}.`);
    }
  }));

  document.querySelectorAll("[data-correct-answer]").forEach((input) => input.addEventListener("change", () => {
    const block = state.lessonDraft?.blocks.find((item) => item.id === input.dataset.correctAnswer);
    if (block) block.correctAnswer = Number(input.value);
  }));

  document.querySelectorAll("[data-add-lesson-block]").forEach((button) => button.addEventListener("click", () => {
    state.lessonDraft?.blocks.push(lessonBlock(button.dataset.addLessonBlock, state.lessonDraft.blocks.length));
    render();
  }));

  document.querySelectorAll("[data-remove-lesson-block]").forEach((button) => button.addEventListener("click", () => {
    if (!state.lessonDraft || state.lessonDraft.blocks.length === 1) {
      announce("A lesson must keep at least one block.");
      return;
    }
    state.lessonDraft.blocks = state.lessonDraft.blocks.filter((block) => block.id !== button.dataset.removeLessonBlock);
    render();
  }));

  document.querySelectorAll("[data-move-lesson-block]").forEach((button) => button.addEventListener("click", () => {
    if (!state.lessonDraft) return;
    const [blockId, direction] = button.dataset.moveLessonBlock.split(":");
    const index = state.lessonDraft.blocks.findIndex((block) => block.id === blockId);
    const target = direction === "up" ? index - 1 : index + 1;
    if (index < 0 || target < 0 || target >= state.lessonDraft.blocks.length) return;
    [state.lessonDraft.blocks[index], state.lessonDraft.blocks[target]] = [state.lessonDraft.blocks[target], state.lessonDraft.blocks[index]];
    render();
  }));

  document.querySelector("#lesson-builder-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveLesson(event.submitter?.dataset.lessonStatus || "Draft");
  });

  document.querySelectorAll("[data-open-student-lesson]").forEach((button) => button.addEventListener("click", () => {
    state.activeStudentLessonId = button.dataset.openStudentLesson;
    render();
  }));

  document.querySelector("[data-submit-lesson]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    submitStudentLesson(event.currentTarget.dataset.submitLesson, event.currentTarget);
  });

  document.querySelectorAll("[data-complete-lesson-block]").forEach((button) => button.addEventListener("click", () => {
    const [lessonId, blockId] = button.dataset.completeLessonBlock.split(":");
    state.lessonProgress ||= {};
    const record = state.lessonProgress[lessonId] ||= { completed: false, score: 0, earned: 0, available: 0, answers: {}, attempts: 0, completedBlocks: [] };
    record.completedBlocks = [...new Set([...(record.completedBlocks || []), blockId])];
    announce("Lesson progress saved. You can resume here later.");
  }));

  document.querySelectorAll("[data-bookmark-lesson]").forEach((button) => button.addEventListener("click", () => {
    const lessonId = button.dataset.bookmarkLesson;
    state.bookmarkedLessons ||= [];
    state.bookmarkedLessons = state.bookmarkedLessons.includes(lessonId) ? state.bookmarkedLessons.filter((id) => id !== lessonId) : [...state.bookmarkedLessons, lessonId];
    announce(state.bookmarkedLessons.includes(lessonId) ? "Lesson bookmarked." : "Bookmark removed.");
  }));

  document.querySelectorAll("[data-save-lesson-note]").forEach((button) => button.addEventListener("click", () => {
    const lessonId = button.dataset.saveLessonNote;
    state.studentNotes ||= {};
    state.studentNotes[lessonId] = document.querySelector(`[data-lesson-note="${lessonId}"]`)?.value.trim() || "";
    announce("Private lesson notes saved.");
  }));

  document.querySelectorAll("[data-read-lesson]").forEach((button) => button.addEventListener("click", () => {
    const lesson = lmsLessons.find((item) => item.id === button.dataset.readLesson);
    if (!lesson || !("speechSynthesis" in window)) {
      announce("Read aloud is not available in this browser.");
      return;
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance([lesson.title, lesson.summary, ...lesson.blocks.filter((block) => block.type === "text").map((block) => `${block.title}. ${block.body}`)].join(". ")));
    state.toast = "Reading lesson aloud.";
    render();
  }));

  document.querySelectorAll("[data-download-certificate]").forEach((button) => button.addEventListener("click", () => {
    const lesson = lmsLessons.find((item) => item.id === button.dataset.downloadCertificate);
    const record = state.lessonProgress?.[button.dataset.downloadCertificate];
    if (!lesson || !record?.certificate) return;
    const blob = new Blob([`EduConnect Certificate of Completion\n\n${activeUser().label}\n${lesson.title}\nScore: ${record.score}%\n${selectedSchoolRecord().name}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${lesson.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-certificate.txt`;
    link.click();
    URL.revokeObjectURL(url);
    addAudit(`Downloaded certificate for ${lesson.title}`, activeUser().label);
    announce("Certificate downloaded.");
  }));

  document.querySelectorAll("[data-open-assignment]").forEach((button) => button.addEventListener("click", () => {
    state.activeAssignmentId = button.dataset.openAssignment;
    render();
  }));

  document.querySelector("[data-assignment-work]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const assignment = lmsAssignments.find((item) => item.id === event.currentTarget.dataset.assignmentWork);
    const submission = submissionFor(assignment?.id, true);
    if (!assignment || !submission) return;
    const nextStatus = event.submitter?.dataset.workStatus || "Draft";
    if (nextStatus === "Submitted" && submission.status === "Returned" && submission.attempt >= (assignment.maxAttempts || 1)) {
      announce("Maximum assignment attempts reached.");
      return;
    }
    submission.response = document.querySelector("#student-assignment-response")?.value.trim() || "";
    if (nextStatus === "Submitted" && !submission.response && !submission.attachments.length) {
      announce("Add a written response or attachment before submitting.");
      return;
    }
    if (nextStatus === "Submitted" && submission.status === "Returned") submission.attempt += 1;
    submission.status = nextStatus;
    submission.submittedAt = nextStatus === "Submitted" ? "Just now" : submission.submittedAt;
    if (nextStatus === "Submitted") {
      pushNotification("Action", `${submission.student} submitted ${assignment.title}`, assignment.className, "Teacher inbox");
      pushRealtimeEvent("LMS", `${assignment.title} submitted`, `${submission.student} sent attempt ${submission.attempt}.`);
    }
    addAudit(`${nextStatus === "Submitted" ? "Submitted" : "Saved draft for"} ${assignment.title}`, submission.student);
    announce(`${assignment.title} ${nextStatus === "Submitted" ? "submitted" : "draft saved"}.`);
  });

  document.querySelector("[data-assignment-file]")?.addEventListener("change", async (event) => {
    const assignmentId = event.target.dataset.assignmentFile;
    const submission = submissionFor(assignmentId, true);
    for (const file of Array.from(event.target.files || [])) {
      if (file.size > 5 * 1024 * 1024) continue;
      try {
        const uploaded = state.apiMode === "live-api" ? (await uploadServerFile(file, "Assignment Submission")).file : { id: `assignment-file-${Date.now()}-${Math.random().toString(16).slice(2)}`, name: file.name, type: file.type, size: `${Math.max(1, Math.round(file.size / 1024))} KB`, status: "Ready" };
        submission.attachments.push(uploaded);
        if (!fileUploads.some((item) => item.id === uploaded.id)) fileUploads.unshift(uploaded);
      } catch {}
    }
    announce("Assignment attachments updated.");
  });

  document.querySelectorAll("[data-remove-assignment-file]").forEach((button) => button.addEventListener("click", () => {
    const [assignmentId, fileId] = button.dataset.removeAssignmentFile.split(":");
    const submission = submissionFor(assignmentId);
    if (submission) submission.attachments = submission.attachments.filter((file) => file.id !== fileId);
    announce("Attachment removed.");
  }));

  document.querySelectorAll("[data-return-submission]").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submission = lmsSubmissions.find((item) => item.id === form.dataset.returnSubmission);
    const assignment = lmsAssignments.find((item) => item.id === submission?.assignmentId);
    if (!submission || !assignment) return;
    submission.score = Number(form.querySelector("[data-grade-score]").value);
    submission.feedback = form.querySelector("[data-grade-feedback]").value.trim();
    submission.status = "Returned";
    submission.returnedAt = "Just now";
    let gradeRecord = gradebookSubmissions.find((item) => item.assignment === assignment.title && item.student === submission.student);
    if (!gradeRecord) {
      gradeRecord = { id: `grade-${Date.now()}`, student: submission.student, assignment: assignment.title, status: "Reviewed", score: submission.score, rubric: [["Completion", 4], ["Accuracy", 4], ["Explanation", 4]], comment: submission.feedback };
      gradebookSubmissions.unshift(gradeRecord);
    } else Object.assign(gradeRecord, { status: "Reviewed", score: submission.score, comment: submission.feedback });
    pushNotification("FYI", `${assignment.title} was graded`, submission.student, "Student inbox");
    addAudit(`Returned graded assignment ${assignment.title}`, submission.student);
    announce(`${assignment.title} returned to ${submission.student}.`);
  }));

  document.querySelector("#course-create-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#course-title").value.trim();
    curriculumCourses.push({ id: `course-${Date.now()}`, title, subject: document.querySelector("#course-subject").value, grade: document.querySelector("#course-grade").value.trim(), className: teacherClasses[0].name, standards: [], units: [] });
    addAudit(`Created curriculum course ${title}`);
    announce(`${title} added to the curriculum map.`);
  });

  document.querySelectorAll("[data-add-unit]").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    const course = curriculumCourses.find((item) => item.id === form.dataset.addUnit);
    const input = form.querySelector("input");
    if (!course || !input.value.trim()) return;
    course.units.push({ id: `unit-${Date.now()}`, title: input.value.trim(), description: "New curriculum unit", lessonIds: [], assignmentIds: [] });
    announce(`${input.value.trim()} added to ${course.title}.`);
  }));

  document.querySelectorAll("[data-link-curriculum]").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    const [courseId, unitId] = form.dataset.linkCurriculum.split(":");
    const course = curriculumCourses.find((item) => item.id === courseId);
    const unit = course?.units.find((item) => item.id === unitId);
    const [type, id] = form.querySelector("select").value.split(":");
    if (!unit) return;
    const target = type === "lesson" ? unit.lessonIds : unit.assignmentIds;
    if (!target.includes(id)) target.push(id);
    addAudit(`Linked ${type} to ${course.title}: ${unit.title}`);
    announce(`Content linked to ${unit.title}.`);
  }));

  document.querySelector("[data-send-class-reminder]")?.addEventListener("click", () => {
    const channels = ["email", "sms", "push"].filter((channel) => state.notificationPreferences[channel]);
    (channels.length ? channels : ["dashboard"]).forEach((channel) => notificationDeliveryLog.unshift({ id: `reminder-${Date.now()}-${channel}`, channel: channel.toUpperCase(), audience: state.selectedClass === "All" ? "All active classes" : state.selectedClass, status: "Delivered", detail: `Assignment reminder sent by ${activeUser().label}` }));
    pushNotification("FYI", "Class assignment reminder sent", state.selectedClass === "All" ? "All active classes" : state.selectedClass, channels.join(" + ") || "Dashboard");
    addAudit("Sent class assignment reminder");
    announce("Class reminder sent using the selected notification channels.");
  });

  document.querySelector("[data-continue-adventure]")?.addEventListener("click", continueAdventure);

  document.querySelector("[data-refresh-activity]")?.addEventListener("click", refreshActivity);

  document.querySelectorAll("[data-reply-student]").forEach((button) => {
    button.addEventListener("click", () => replyToStudent(button.dataset.replyStudent));
  });

  document.querySelectorAll("[data-guardrail]").forEach((input) => {
    input.addEventListener("change", () => {
      state.guardrails[input.dataset.guardrail] = input.checked;
      addAudit(`Updated guardrail ${input.dataset.guardrail}`);
      announce("Guardrail setting updated.");
    });
  });

  document.querySelectorAll("[data-profile-permission]").forEach((input) => {
    input.addEventListener("change", () => {
      const [profileId, permission] = input.dataset.profilePermission.split(":");
      const profile = userProfiles.find((item) => item.id === profileId);
      if (!profile) return;
      profile.permissions = input.checked
        ? [...new Set([...profile.permissions, permission])]
        : profile.permissions.filter((item) => item !== permission);
      addAudit(`Updated ${profile.role} permission: ${permission}`);
      announce(`${profile.role} permissions updated.`);
    });
  });

  document.querySelectorAll("[data-submission]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSubmissionId = button.dataset.submission;
      render();
    });
  });

  document.querySelectorAll("[data-save-submission]").forEach((button) => {
    button.addEventListener("click", () => {
      const submission = gradebookSubmissions.find((item) => item.id === button.dataset.saveSubmission);
      if (!submission) return;
      submission.comment = document.querySelector("#submission-comment").value.trim();
      submission.status = "Reviewed";
      addAudit(`Saved gradebook comment for ${submission.student}`, submission.assignment);
      announce("Gradebook comment saved.");
    });
  });

  document.querySelectorAll("[data-complete]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.complete);
      if (!state.completed.includes(id)) state.completed.push(id);
      const mission = missions.find((item) => item.id === id);
      announce(`${mission?.title || "Mission"} marked complete.`);
    });
  });

  document.querySelector("#class-filter")?.addEventListener("change", (event) => {
    state.selectedClass = event.target.value;
    render();
  });

  document.querySelector("#roster-filter")?.addEventListener("change", (event) => {
    state.rosterFilter = event.target.value;
    render();
  });

  document.querySelectorAll("[data-roster-grade], [data-roster-attendance], [data-roster-status]").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.dataset.rosterGrade || input.dataset.rosterAttendance || input.dataset.rosterStatus;
      const record = rosterRecords.find((item) => item.id === id);
      if (!record) return;
      if (input.dataset.rosterGrade) record.grade = Math.max(0, Math.min(100, Number(input.value) || 0));
      if (input.dataset.rosterAttendance) record.attendance = Math.max(0, Math.min(100, Number(input.value) || 0));
      if (input.dataset.rosterStatus) record.status = input.value;
      pushRealtimeEvent("Roster", `${record.student} record updated`, `Grade ${record.grade}%, attendance ${record.attendance}%, status ${record.status}.`);
      addAudit(`Updated roster record for ${record.student}`, record.className);
      announce(`${record.student}'s roster record updated.`);
    });
  });

  document.querySelectorAll("[data-lms-account]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeAccount = button.dataset.lmsAccount;
      render();
    });
  });

  document.querySelector("[data-build-offline]")?.addEventListener("click", () => {
    state.offlinePackReady = true;
    offlineSyncQueue.forEach((item) => {
      item.status = item.status.replace("Waiting for pack", "Queued for upload");
    });
    announce("Offline pack built and sync queue prepared.");
  });

  document.querySelector("#state-filter")?.addEventListener("change", (event) => {
    state.selectedState = event.target.value;
    const nextState = selectedStateRecord();
    state.selectedDistrict = nextState.districts[0].id;
    state.selectedSchool = nextState.districts[0].schools[0].id;
    render();
  });

  document.querySelector("#district-filter")?.addEventListener("change", (event) => {
    state.selectedDistrict = event.target.value;
    state.selectedSchool = selectedDistrictRecord().schools[0].id;
    render();
  });

  document.querySelector("#school-filter")?.addEventListener("change", (event) => {
    state.selectedSchool = event.target.value;
    render();
  });

  document.querySelector("#design-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    applyDesignFromForm();
    addAudit(`Updated school customization for ${selectedSchoolRecord().name}`);
    announce(`${selectedSchoolRecord().name} customization saved.`);
  });

  document.querySelectorAll("#design-primary, #design-accent, #design-highlight, #design-background").forEach((input) => input.addEventListener("input", () => {
    const preview = document.querySelector(".school-brand-preview");
    if (!preview) return;
    const property = { "design-primary": "--primary", "design-accent": "--teal", "design-highlight": "--gold", "design-background": "--background" }[input.id];
    preview.style.setProperty(property, input.value);
  }));

  document.querySelector("#customization-school-filter")?.addEventListener("change", (event) => {
    state.selectedSchool = event.target.value;
    render();
  });

  document.querySelectorAll("[data-design-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const school = selectedSchoolRecord();
      const preset = designPresets.find((item) => item.name === button.dataset.designPreset);
      if (!preset) return;
      schoolDesigns[school.id] = { ...selectedSchoolDesign(), ...preset };
      school.theme = preset.name;
      addAudit(`Applied ${preset.name} theme`, school.name);
      announce(`${preset.name} applied to ${school.name}.`);
    });
  });

  document.querySelector("[data-reset-school-design]")?.addEventListener("click", () => {
    const school = selectedSchoolRecord();
    const preset = designPresets[0];
    schoolDesigns[school.id] = { ...selectedSchoolDesign(), ...preset };
    school.theme = preset.name;
    addAudit("Reset school colors", school.name);
    announce(`${school.name} colors reset.`);
  });

  document.querySelectorAll("[data-manage-district]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDistrict = button.dataset.manageDistrict;
      state.selectedSchool = selectedDistrictRecord().schools[0].id;
      render();
    });
  });

  document.querySelectorAll("[data-manage-school]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSchool = button.dataset.manageSchool;
      render();
    });
  });

  document.querySelectorAll("[data-deadline]").forEach((input) => {
    input.addEventListener("change", () => {
      const title = input.dataset.deadline;
      state.checkedDeadlines = state.checkedDeadlines.includes(title)
        ? state.checkedDeadlines.filter((item) => item !== title)
        : [...state.checkedDeadlines, title];
      render();
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.conversationFilter = button.dataset.filter;
      const next = conversations.find((item) => item.type === state.conversationFilter);
      if (next) state.activeConversationId = next.id;
      render();
    });
  });

  document.querySelectorAll("[data-conversation]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeConversationId = button.dataset.conversation;
      const conversation = conversations.find((item) => item.id === state.activeConversationId);
      if (conversation) conversation.unread = 0;
      render();
    });
  });

  document.querySelector("#message-draft")?.addEventListener("input", (event) => {
    state.draft = event.target.value;
  });

  document.querySelector("[data-toggle-hours]")?.addEventListener("click", () => {
    state.workHoursOpen = !state.workHoursOpen;
    render();
  });

  document.querySelector("[data-toggle-emergency]")?.addEventListener("click", () => {
    state.emergencyOverride = !state.emergencyOverride;
    addAudit(`${state.emergencyOverride ? "Enabled" : "Disabled"} emergency override`);
    render();
  });

  document.querySelectorAll("[data-start-call]").forEach((button) => {
    button.addEventListener("click", () => {
      const conversation = conversations.find((item) => item.id === button.dataset.startCall);
      if (!conversation) return;
      state.activeCallName = conversation.name;
      pushRealtimeEvent("Messages", `Live call started with ${conversation.name}`, "Video room is active in the communication hub.");
      addAudit(`Started video call with ${conversation.name}`, selectedSchoolRecord().name);
      announce(`Video call started with ${conversation.name}.`);
    });
  });

  document.querySelector("[data-end-call]")?.addEventListener("click", () => {
    const name = state.activeCallName;
    state.activeCallName = "";
    if (name) pushRealtimeEvent("Messages", `Live call ended with ${name}`, "Call state closed.");
    announce("Video call ended.");
  });

  document.querySelector("#compose")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.workHoursOpen && !state.emergencyOverride) return;
    const text = state.draft.trim();
    if (!text) return;
    conversations.splice(0, conversations.length, ...conversations.map((conversation) =>
      conversation.id === state.activeConversationId
        ? { ...conversation, preview: text, messages: [...conversation.messages, { from: "me", text, time: "Now" }] }
        : conversation,
    ));
    pushRealtimeEvent("Messages", "Message sent", `Delivered to ${activeUser().label}'s active conversation.`);
    pushNotification("FYI", "Message delivered", selectedSchoolRecord().name, "Messages");
    state.draft = "";
    render();
  });

  document.querySelector("#board-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const school = selectedSchoolRecord();
    const board = selectedCommunityBoard();
    board.pending.unshift({
      id: `${school.id}-${Date.now()}`,
      author: document.querySelector("#board-author").value.trim() || "Community Member",
      role: document.querySelector("#board-role").value,
      type: document.querySelector("#board-type").value,
      audience: document.querySelector("#board-audience").value,
      title: document.querySelector("#board-title").value.trim(),
      body: document.querySelector("#board-body").value.trim(),
      media: document.querySelector("#board-media").value.trim() || "No media",
      approverId: document.querySelector("#board-approver").value,
      time: "Awaiting administrator approval",
    });
    pushRealtimeEvent("Community", "Community post submitted", `${document.querySelector("#board-title").value.trim()} is waiting for approval.`);
    pushNotification("Action", "Community post awaiting approval", school.name, "Approval queue");
    addAudit("Submitted community post for approval", school.name);
    announce("Post submitted for administrator approval.");
  });

  document.querySelectorAll("[data-approver-toggle]").forEach((input) => {
    input.addEventListener("change", () => {
      const board = selectedCommunityBoard();
      board.approvers = board.approvers.map((approver) => approver.id === input.dataset.approverToggle ? { ...approver, active: input.checked } : approver);
      render();
    });
  });

  document.querySelector("#approver-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const board = selectedCommunityBoard();
    const name = document.querySelector("#new-approver-name").value.trim();
    if (!name) return;
    board.approvers.push({
      id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
      name,
      title: document.querySelector("#new-approver-title").value,
      active: true,
    });
    render();
  });

  document.querySelectorAll("[data-approve-post]").forEach((button) => {
    button.addEventListener("click", () => {
      const board = selectedCommunityBoard();
      const post = board.pending.find((item) => item.id === button.dataset.approvePost);
      if (!post) return;
      board.pending = board.pending.filter((item) => item.id !== post.id);
      board.published.unshift({ ...post, time: "Approved just now" });
      addAudit(`Approved community post: ${post.title}`);
      render();
    });
  });

  document.querySelectorAll("[data-reject-post]").forEach((button) => {
    button.addEventListener("click", () => {
      const board = selectedCommunityBoard();
      const post = board.pending.find((item) => item.id === button.dataset.rejectPost);
      board.pending = board.pending.filter((item) => item.id !== button.dataset.rejectPost);
      if (post) addAudit(`Rejected community post: ${post.title}`);
      render();
    });
  });
}

async function boot() {
  if ("serviceWorker" in navigator && isProductionHost()) navigator.serviceWorker.register(`${import.meta.env.BASE_URL}service-worker.js`).catch(() => undefined);
  hydrateDemoState();
  const hostname = window.location.hostname.toLowerCase();
  const hostSchool = tenantStates.flatMap((item) => item.districts).flatMap((item) => item.schools).find((school) => [school.customDomain, `${school.subdomain}.educationalsystem.fieldserviceit.com`, school.id === "ps-118" ? "educationalsystem.fieldserviceit.com" : ""].filter(Boolean).includes(hostname));
  if (hostSchool) state.selectedSchool = hostSchool.id;
  if (isProductionHost()) {
    state.apiMode = "live-api";
    if (localStorage.getItem("educonnect-session-token")) {
      try {
        const session = await getServerSession();
        const localProfile = userProfiles.find((item) => item.id === session.user.id);
        authenticatedProfile = { ...localProfile, ...session.user };
        state.currentUser = authenticatedProfile.id;
      } catch {
        localStorage.removeItem("educonnect-session-token");
      }
    }
  }
  if (authenticatedProfile && (state.apiMode === "mock-api" || state.apiMode === "live-api")) {
    try {
      await hydrateMockApiState(state.apiMode);
    } catch {
      if (!isProductionHost()) {
        state.apiMode = "local";
        state.toast = "Server API unavailable. Local demo state mode enabled.";
      }
    }
  }
  if (authenticatedProfile) {
    const requested = hashRoute();
    const requestedRoleAllowed = requested.role && allowedRoleIds().includes(requested.role);
    state.role = requestedRoleAllowed ? requested.role : authenticatedProfile.landing;
    const destination = findMenuDestination(state.role, requested.functionId);
    if (destination?.tab) state.activeOperationsTab = destination.tab;
    if (destination) pendingMenuFocus = { roleId: state.role, functionId: destination.id };
    if (requested.role && !requestedRoleAllowed) state.toast = "That workspace is not available for your role.";
    else if (requested.functionId && !destination) state.toast = "That function is not available for your role.";
    if (requested.role) {
      const canonicalHash = destination ? `#${state.role}/${destination.id}` : `#${state.role}`;
      if (window.location.hash !== canonicalHash) history.replaceState(null, "", canonicalHash);
    }
  }
  window.addEventListener("hashchange", () => {
    if (!authenticatedProfile) return;
    const nextRoute = hashRoute();
    if (nextRoute.role) setActiveRole(nextRoute.role, false, nextRoute.functionId);
  });
  window.addEventListener("load", enhanceIcons);
  render();
  window.setInterval(() => {
    if (!authenticatedProfile || !state.liveUpdates || document.hidden) return;
    simulateLiveUpdate("automatic");
  }, 15000);
}

boot();
