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
  workspaceIntegrations,
  classroomStrengths,
  tenantSettings,
  permissionMatrix,
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
import { getServerSession, loginServerProfile, sendServerNotificationTest, uploadServerFile } from "./mockApi.js";
import { initializeErrorReporting } from "./errorReporting.js";

initializeErrorReporting();

const app = document.querySelector("#app");
let authenticatedProfile = null;
let landingError = "";
let landingBusy = false;

const tourSteps = [
  { title: "Choose a role", body: "Use the demo login panel to switch between state, district, school, teacher, parent, and student access.", role: "state-admin" },
  { title: "Create learning work", body: "Teachers and admins can create assignments and build offline packs in the LMS.", role: "lms" },
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

function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

function initials(name) {
  return name.split(" ").map((part) => part[0]).slice(0, 2).join("");
}

function progress(value) {
  return `<div class="progress" aria-label="${value}% complete"><span style="width:${value}%"></span></div>`;
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

function signOut() {
  const label = activeUser().label;
  localStorage.removeItem("educonnect-session-token");
  authenticatedProfile = null;
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

function validateDemoSnapshot(snapshot) {
  const errors = [];
  if (!snapshot || typeof snapshot !== "object") errors.push("File must contain a JSON object.");
  if (!snapshot?.state || typeof snapshot.state !== "object") errors.push("Missing state object.");
  if (!Array.isArray(snapshot?.tenantStates)) errors.push("Missing tenantStates array.");
  if (!Array.isArray(snapshot?.conversations)) errors.push("Missing conversations array.");
  if (!snapshot?.communityBoards || typeof snapshot.communityBoards !== "object") errors.push("Missing communityBoards object.");
  return errors;
}

function hashRole() {
  const requested = window.location.hash.replace("#", "");
  if (requested === "platform") return "state-admin";
  return roles.some((role) => role.id === requested) ? requested : "";
}

function setActiveRole(roleId, pushRoute = true) {
  if (roleId === "platform") roleId = "state-admin";
  if (!roles.some((role) => role.id === roleId) || !allowedRoleIds().includes(roleId)) {
    if (authenticatedProfile) state.toast = "That workspace is not available for your role.";
    return;
  }
  state.role = roleId;
  state.notificationsOpen = false;
  state.settingsOpen = false;
  if (pushRoute && window.location.hash !== `#${roleId}`) {
    history.pushState(null, "", `#${roleId}`);
  }
  render();
}

function goToRole(roleId, message = "") {
  if (message) state.toast = message;
  setActiveRole(roleId);
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
  const audiences = [
    ["School leaders", "Bring school news, staff support, and everyday planning together in one welcoming place.", "shield-check"],
    ["Teachers", "Plan lessons, celebrate progress, share classroom updates, and stay close to families.", "graduation-cap"],
    ["Families", "Follow learning, remember important dates, and keep in touch with the school community.", "users"],
    ["Students", "Discover activities, continue learning adventures, and see accomplishments grow.", "sparkles"],
  ];
  return `
    <div class="landing-shell">
      <header class="landing-header">
        <a class="landing-brand" href="#top" aria-label="EduConnect home"><span>EC</span><strong>EduConnect</strong></a>
        <nav aria-label="Public navigation"><a href="#solutions">For everyone</a><a href="#trust">For schools</a><a href="#signin">Sign in</a></nav>
        <a class="primary-action landing-header-cta" href="#signin">Open your portal</a>
      </header>
      <main id="top">
        <section class="landing-hero">
          <div class="landing-hero-copy">
            <p class="eyebrow">A brighter school day, all in one place</p>
            <h1>Learning, families, and schools—connected.</h1>
            <p class="landing-lede">EduConnect makes it easier to learn, teach, share progress, and stay involved—whether you are in the classroom, at home, or on the go.</p>
            <div class="landing-actions"><a class="primary-action" href="#signin">Sign in ${icon("chevron-right")}</a><a class="secondary-action" href="#solutions">See how EduConnect helps</a></div>
            <div class="landing-proof"><span>${icon("book-open")} Made for learning</span><span>${icon("users")} Brings families closer</span><span>${icon("smartphone")} Works wherever you are</span></div>
          </div>
          <div class="landing-login-card" id="signin">
            <div class="landing-login-heading"><span class="landing-lock">${icon("book-open")}</span><div><p class="eyebrow">Your school portal</p><h2>Welcome back</h2><p>Enter the sign-in details provided by your school.</p></div></div>
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
      <footer class="landing-footer"><a class="landing-brand" href="#top"><span>EC</span><strong>EduConnect</strong></a><p>Learning together. Growing together.</p><small>Made for students, families, teachers, and schools.</small></footer>
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

function designStyle(design) {
  return `--primary:${design.primary};--primary-2:${design.primary};--teal:${design.accent};--gold:${design.highlight};--background:${design.background};`;
}

function applyDesignFromForm() {
  const school = selectedSchoolRecord();
  schoolDesigns[school.id] = {
    ...selectedSchoolDesign(),
    logo: document.querySelector("#design-logo").value.trim() || initials(school.name).slice(0, 1),
    crest: document.querySelector("#design-crest").value.trim() || `${school.name} Crest`,
    voice: document.querySelector("#design-voice").value.trim() || "School-owned portal identity",
    primary: document.querySelector("#design-primary").value,
    accent: document.querySelector("#design-accent").value,
    highlight: document.querySelector("#design-highlight").value,
    background: document.querySelector("#design-background").value,
  };
}

function render() {
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
    <div class="app ${state.compactMode ? "compact-mode" : ""} ${state.highContrast ? "high-contrast" : ""}" style="${designStyle(design)}">
      ${renderSidebar(role, design)}
      <main class="workspace workspace-${state.role}">
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
        <div class="section-heading"><h3>Notifications</h3><button class="icon-button" aria-label="Close notifications" data-close-panel>${icon("x")}</button></div>
        <div class="utility-actions">
          <button class="secondary-action" data-mark-notifications>${icon("check")} Mark all read</button>
          <button class="secondary-action" data-simulate-live>${icon("refresh-cw")} Simulate live update</button>
        </div>
        ${lmsNotifications.length ? lmsNotifications.map((notice) => `
          <article class="notice-row ${notice.level.toLowerCase()} ${notice.read ? "read" : ""}">
            <strong>${notice.level}</strong>
            <div><span>${notice.title}</span><small>${notice.target} • ${notice.channel}</small></div>
            <button class="icon-button" aria-label="Dismiss ${escapeHtml(notice.title)}" data-dismiss-notification="${notice.id}">${icon("x")}</button>
          </article>
        `).join("") : `<div class="empty-state">No notifications.</div>`}
      </aside>
    ` : ""}
    ${state.settingsOpen ? `
      <aside class="utility-panel" aria-label="Settings">
        <div class="section-heading"><h3>Settings</h3><button class="icon-button" aria-label="Close settings" data-close-panel>${icon("x")}</button></div>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="compactMode" ${state.compactMode ? "checked" : ""} /><span>Compact dashboard density</span></label>
        <label class="toggle-row"><input type="checkbox" data-toggle-setting="highContrast" ${state.highContrast ? "checked" : ""} /><span>High contrast panels</span></label>
        <button class="secondary-action" data-export-demo>${icon("download")} Export JSON File</button>
        <label class="secondary-action import-action">${icon("file-text")} Import JSON File<input type="file" id="import-demo-state" accept="application/json" /></label>
      </aside>
    ` : ""}
  `;
}

function renderTenantBar(school, design) {
  return `
    <section class="tenant-bar" aria-label="Current tenant">
      <div>
        <span class="school-logo-mini">${design.logo}</span>
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

function renderSidebar(activeRole, design) {
  return `
    <aside class="sidebar">
      <div class="brand-row">
        <div class="brand-mark">${design.logo}</div>
        <div><h1>${design.crest}</h1><p>${design.voice}</p></div>
      </div>
      <nav class="role-nav" aria-label="Portal views">
        ${visibleRoles().map((role) => `<a class="nav-item ${state.role === role.id ? "active" : ""}" href="#${role.id}" data-role="${role.id}" ${state.role === role.id ? "aria-current=\"page\"" : ""}>${icon(role.icon)}<span>${role.label}</span></a>`).join("")}
      </nav>
      <div class="reference-card">
        <img src="${asset(activeRole.image)}" alt="" />
        <div><strong>Stitch reference</strong><span>Visual source</span></div>
      </div>
    </aside>
  `;
}

function renderMobileNav() {
  return `
    <nav class="mobile-role-nav" aria-label="Mobile portal views">
      ${visibleRoles().map((role) => `<a class="mobile-nav-item ${state.role === role.id ? "active" : ""}" href="#${role.id}" data-role="${role.id}" ${state.role === role.id ? "aria-current=\"page\"" : ""}>${icon(role.icon)}<span>${role.label}</span></a>`).join("")}
    </nav>
  `;
}

function renderTopbar(role) {
  const title = role.id === "messages" ? "Communication Hub" : role.id === "state-admin" ? "State Governance" : role.id === "district-admin" ? "District Operations" : role.id === "school-admin" ? "School Administration" : `${role.label} Dashboard`;
  return `
    <header class="topbar">
      <div><p class="eyebrow">${role.label} workspace</p><h2>${title}</h2></div>
      <div class="topbar-actions">
        <label class="searchbox">${icon("search")}<input id="global-search" value="${escapeHtml(state.searchTerm)}" placeholder="Search resources..." /></label>
        <div class="account-chip"><span>${initials(activeUser().label)}</span><div><strong>${activeUser().label}</strong><small>${activeUser().role}</small></div></div>
        ${isProductionHost() ? "" : `<button class="secondary-action reset-action" data-reset-demo type="button">${icon("rotate-ccw")} Reset Demo</button>`}
        <button class="icon-button" aria-label="Notifications" data-toggle-notifications>${icon("bell")}${unreadNotifications() ? `<span class="status-dot">${unreadNotifications()}</span>` : ""}</button>
        <button class="icon-button" aria-label="Settings" data-toggle-settings>${icon("settings")}</button>
        <button class="icon-button" aria-label="Sign out" data-sign-out>${icon("x")}</button>
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
    <section class="dashboard-grid platform-grid">
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
      ${renderUnifiedOperatingSystem()}
      ${renderUsersRolesPanel()}
      ${renderRealtimePanel()}
      <section class="panel state-management-panel">
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
        <div class="section-heading"><h3>Statewide Calendar</h3><span>Policy, reporting, and public events</span></div>
        <div class="calendar-list">
          ${calendarEvents.map((event) => `<article class="calendar-row"><div class="calendar-date">${event.date}</div><div><strong>${event.title}</strong><small>${event.audience} • ${event.type}</small></div></article>`).join("")}
        </div>
      </section>
      <section class="panel hierarchy-panel">
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
    <section class="dashboard-grid platform-grid">
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
      <section class="panel tenant-controls">
        <div class="section-heading"><h3>District Scope</h3><span>${stateRecord.name}</span></div>
        <div class="tenant-selectors">
          <label><span>State</span><select id="state-filter">${tenantStates.map((item) => `<option value="${item.id}" ${state.selectedState === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
          <label><span>District</span><select id="district-filter">${stateRecord.districts.map((item) => `<option value="${item.id}" ${district.id === item.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></label>
        </div>
      </section>
      <section class="panel district-management-panel">
        <div class="section-heading"><h3>Schools In This District</h3><span>${district.region}</span></div>
        <div class="management-list">
          ${schools.map((schoolItem) => `<button class="management-row ${schoolItem.id === selectedSchoolRecord().id ? "active" : ""}" data-manage-school="${schoolItem.id}"><div class="management-icon">${icon("graduation-cap")}</div><div><strong>${schoolItem.name}</strong><small>${schoolItem.category} • ${schoolItem.subdomain}.educonnect.local</small></div><span>${schoolItem.status}</span></button>`).join("")}
        </div>
      </section>
      ${renderUnifiedOperatingSystem()}
      ${renderUsersRolesPanel()}
      ${renderRealtimePanel()}
      <section class="panel audit-panel">
        <div class="section-heading"><h3>District Audit Trail</h3><span>School and staff actions</span></div>
        <div class="audit-list">${auditLogs.map((log) => `<article class="audit-row">${icon("clipboard-check")}<div><strong>${log.event}</strong><small>${log.actor} • ${log.scope}</small></div><time>${log.time}</time></article>`).join("")}</div>
      </section>
    </section>
  `;
}

function renderSchoolAdmin() {
  const school = selectedSchoolRecord();
  const board = selectedCommunityBoard();
  const watchCount = rosterRecords.filter((record) => record.status === "Watch").length;
  const pendingSubmissions = gradebookSubmissions.filter((submission) => submission.status !== "Reviewed").length;
  return `
    <section class="dashboard-grid platform-grid">
      <div class="welcome-strip platform-welcome">
        <div>
          <p class="eyebrow">School admin workspace</p>
          <h2>${school.name}</h2>
          <p>School administrators run campus operations: users, safety messaging, approvals, LMS visibility, roster health, and family communication windows.</p>
        </div>
        <button class="primary-action" data-open-role="community">${icon("megaphone")} Review Community Posts</button>
      </div>
      ${statCard("Students", school.students.toLocaleString(), "users", "blue")}
      ${statCard("Staff", school.staff.toLocaleString(), "shield-check", "teal")}
      ${statCard("Pending approvals", board.pending.length, "clipboard-check", "gold")}
      <section class="panel instance-panel">
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
      ${renderUsersRolesPanel()}
      <section class="panel permissions-panel">
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

      <section class="panel permissions-panel">
        <div class="section-heading"><h3>Permission Matrix</h3><span>Scope-aware roles</span></div>
        <div class="permission-table">
          ${permissionMatrix.map((item) => `
            <article class="permission-row">
              <strong>${item.role}</strong>
              <span>${item.scope}</span>
              <small>${item.canManage}</small>
            </article>
          `).join("")}
        </div>
      </section>

      ${renderUsersRolesPanel()}

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

function renderUsersRolesPanel() {
  return `
    <section class="panel users-roles-panel">
      <div class="section-heading"><h3>Users & Roles</h3><span>${can("manage-users") ? "Editable" : "Read-only"}</span></div>
      <div class="users-grid">
        ${userProfiles.map((profile) => `
          <article class="user-role-card">
            <div><strong>${profile.label}</strong><small>${profile.role} • ${profile.scope || "global"} scope • lands on ${profile.landing}</small></div>
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
      ${permissionNotice("manage-users", "Only administrators can change demo role permissions.")}
    </section>
  `;
}

function renderRealtimePanel() {
  return `
    <section class="panel realtime-panel">
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
    { role: "lms", label: "LMS", iconName: "layers", metric: `${lmsAssignments.length} assignments`, detail: `${pendingSubmissions} gradebook items need review` },
    { role: "student", label: "Students", iconName: "sparkles", metric: `${rosterRecords.length} learners`, detail: `${watchCount} students on watch status` },
    { role: "teacher", label: "Teachers", iconName: "graduation-cap", metric: `${teacherClasses.length} classes`, detail: `${activityFeed.length} activity events in the feed` },
    { role: "parent", label: "Parents", iconName: "users", metric: `${deadlines.length} deadlines`, detail: `${state.checkedDeadlines.length} family tasks checked` },
    { role: "messages", label: "Messages", iconName: "message-circle", metric: `${unreadMessages} unread`, detail: `${conversations.length} parent and group threads` },
    { role: "community", label: "Community", iconName: "megaphone", metric: `${board.pending.length} pending`, detail: `${board.published.length} approved posts live` },
  ];
  return `
    <section class="panel unified-os-panel">
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
    <section class="panel production-panel">
      <div class="section-heading">
        <div><p class="eyebrow">Production operations</p><h3>Launch Control</h3></div>
        <span>${state.gatewayMode === "demo" ? "Demo mode" : "Backend-ready mode"}</span>
      </div>
      <div class="production-grid">
        <article class="production-card gateway-card">
          <div class="section-heading"><h4>Public Login Gateway</h4><span>${state.authProvider}</span></div>
          <label><span>Auth mode</span><select id="auth-provider"><option ${state.authProvider === "Role-based demo auth" ? "selected" : ""}>Role-based demo auth</option><option ${state.authProvider === "Supabase Auth" ? "selected" : ""}>Supabase Auth</option><option ${state.authProvider === "Firebase Auth" ? "selected" : ""}>Firebase Auth</option></select></label>
          <label><span>Backend provider</span><select id="backend-provider"><option ${state.backendProvider === "Supabase" ? "selected" : ""}>Supabase</option><option ${state.backendProvider === "Firebase" ? "selected" : ""}>Firebase</option><option ${state.backendProvider === "Custom API" ? "selected" : ""}>Custom API</option></select></label>
          <div class="gateway-actions">
            <button class="secondary-action" data-set-gateway="demo">${icon("play")} Demo Mode</button>
            <button class="primary-action" data-set-gateway="backend">${icon("database")} Backend Ready</button>
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Database Blueprint</h4><button class="text-button" data-provision-schema>Provision mock schema</button></div>
          <div class="schema-list">
            ${databaseTables.map((table) => `<div class="schema-row"><strong>${table.name}</strong><span>${table.records} records</span><em>${table.status}</em><small>${table.detail}</small></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Admin Onboarding</h4><span>${doneTasks}/${onboardingTasks.length} complete</span></div>
          <div class="checklist-list">
            ${onboardingTasks.map((task) => `<label class="checklist-row"><input type="checkbox" data-onboarding-task="${task.id}" ${task.done ? "checked" : ""} /><span class="custom-check">${task.done ? icon("check") : ""}</span><span><strong>${task.label}</strong><small>${task.owner}</small></span></label>`).join("")}
          </div>
          <form id="onboarding-user-form" class="mini-form">
            <input id="onboarding-user-name" placeholder="Invite user name" />
            <select id="onboarding-user-role"><option>Teacher</option><option>Parent</option><option>Student</option><option>Admin</option></select>
            <button class="secondary-action" type="submit">${icon("plus")} Invite</button>
          </form>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>File Uploads</h4><span>${fileUploads.length} files</span></div>
          <label class="upload-drop">${icon("paperclip")} Add assignment, PDF, image, or community file<input type="file" id="production-file-upload" multiple /></label>
          <div class="upload-list">
            ${fileUploads.map((file) => `<div class="upload-row"><strong>${file.name}</strong><span>${file.area} • ${file.size}</span><em>${file.status}</em></div>`).join("")}
          </div>
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Notification Delivery</h4><button class="text-button" data-send-delivery-test>Send test batch</button></div>
          ${notificationDeliveryLog.map((item) => `<div class="delivery-row"><strong>${item.channel}</strong><span>${item.audience}</span><em>${item.status}</em><small>${item.detail}</small></div>`).join("")}
        </article>

        <article class="production-card">
          <div class="section-heading"><h4>Privacy & Security</h4><span>${secured}/${securityChecklist.length} ready</span></div>
          <div class="checklist-list">
            ${securityChecklist.map((item) => `<label class="checklist-row"><input type="checkbox" data-security-check="${item.id}" ${item.done ? "checked" : ""} /><span class="custom-check">${item.done ? icon("check") : ""}</span><span><strong>${item.label}</strong><small>${item.status}</small></span></label>`).join("")}
          </div>
        </article>

        <article class="production-card deploy-card">
          <div class="section-heading"><h4>Deployment Pipeline</h4><span>Hostinger live</span></div>
          ${deployPipeline.map((item) => `<div class="pipeline-row"><strong>${item.step}</strong><span>${item.detail}</span><em class="${item.status.toLowerCase()}">${item.status}</em></div>`).join("")}
        </article>
      </div>
    </section>
  `;
}

function renderCompliancePanel() {
  return `
    <section class="panel compliance-panel">
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

function renderAdvancedLms() {
  const school = selectedSchoolRecord();
  const activeAccount = lmsAccounts.find((account) => account.id === state.activeAccount) || lmsAccounts[0];
  return `
    <section class="dashboard-grid lms-grid">
      <div class="welcome-strip lms-welcome">
        <div>
          <p class="eyebrow">${school.name} advanced LMS</p>
          <h2>Learning tools beyond basic classroom workflows</h2>
          <p>Advanced grading, firm deadlines, file conversion, account context, organized alerts, and offline access are all managed inside this school instance.</p>
        </div>
        <button class="primary-action" data-build-offline ${permissionAttrs("lms", "Only teachers and administrators can build LMS offline packs.")}>${icon("download")} ${state.offlinePackReady ? "Rebuild Offline Pack" : "Build Offline Pack"}</button>
      </div>

      ${statCard("Auto-graded checks", "18", "clipboard-check", "blue")}
      ${statCard("Rubrics active", "7", "layers", "teal")}
      ${statCard("Offline packs", state.offlinePackReady ? "Ready" : "Not built", "download", "gold")}

      ${renderBackgroundServices()}

      <section class="panel lms-panel simplicity-suite">
        <div class="section-heading"><h3>Simple Classroom Experience</h3><span>Clean by default</span></div>
        ${classroomStrengths.slice(0, 2).map(([title, body]) => `<article class="strength-row">${icon("check")}<div><strong>${title}</strong><small>${body}</small></div></article>`).join("")}
      </section>

      <section class="panel lms-panel free-suite">
        <div class="section-heading"><h3>Zero Cost Core</h3><span>No premium paywall</span></div>
        <div class="free-card"><strong>$0</strong><p>Schools can use classroom basics, paperless assignments, messaging, and parent summaries without hidden fees.</p></div>
      </section>

      <section class="panel lms-panel grading-suite">
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

      <section class="panel lms-panel deadline-suite">
        <div class="section-heading"><h3>Deadline Controls</h3><span>Firm locks + exceptions</span></div>
        ${lmsAssignments.map((item) => `
          <article class="deadline-control">
            <div><strong>${item.title}</strong><small>Locks ${item.lockDate}</small></div>
            <span>${item.exception}</span>
          </article>
        `).join("")}
      </section>

      <section class="panel lms-panel account-suite">
        <div class="section-heading"><h3>Account Context</h3><span>No constant log-outs</span></div>
        <div class="account-switcher">
          ${lmsAccounts.map((account) => `<button class="${activeAccount.id === account.id ? "active" : ""}" data-lms-account="${account.id}"><strong>${account.name}</strong><span>${account.context}</span></button>`).join("")}
        </div>
        <p class="account-note">Current context: <strong>${activeAccount.name}</strong> can switch roles without leaving ${school.name}.</p>
      </section>

      <section class="panel lms-panel workflow-suite">
        <div class="section-heading"><h3>Paperless Assignment Workflow</h3><span>Create to return</span></div>
        <div class="workflow-steps">
          ${["Create", "Distribute", "Collect", "Grade", "Return", "Archive"].map((step, index) => `<div><strong>${index + 1}</strong><span>${step}</span></div>`).join("")}
        </div>
      </section>

      <section class="panel lms-panel guardrail-suite">
        <div class="section-heading"><h3>Automated Guardrails</h3><span>Submission and quiz controls</span></div>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="lockSubmissions" ${state.guardrails.lockSubmissions ? "checked" : ""} ${can("lms") ? "" : "disabled"} /><span class="custom-check">${state.guardrails.lockSubmissions ? icon("check") : ""}</span><span>Prevent edits after submission</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="hideAnswers" ${state.guardrails.hideAnswers ? "checked" : ""} ${can("lms") ? "" : "disabled"} /><span class="custom-check">${state.guardrails.hideAnswers ? icon("check") : ""}</span><span>Hide answers until quiz closes</span></label>
        <label class="guardrail-row"><input type="checkbox" data-guardrail="parentSummaries" ${state.guardrails.parentSummaries ? "checked" : ""} ${can("lms") ? "" : "disabled"} /><span class="custom-check">${state.guardrails.parentSummaries ? icon("check") : ""}</span><span>Auto-return parent email summaries</span></label>
        ${permissionNotice("lms", "LMS guardrails are managed by teachers and administrators.")}
      </section>

      <section class="panel lms-panel offline-suite">
        <div class="section-heading"><h3>Offline Learning</h3><span>${state.offlinePackReady ? "Synced for low-connectivity use" : "Build a pack for offline work"}</span></div>
        <div class="offline-card">
          <div class="offline-status ${state.offlinePackReady ? "ready" : ""}">${state.offlinePackReady ? icon("check") : icon("download")}</div>
          <div><strong>${state.offlinePackReady ? "Offline pack ready" : "Offline pack not built"}</strong><p>Includes assignments, rubrics, PDF annotations, and queued submissions for later sync.</p></div>
        </div>
      </section>

      <section class="panel lms-panel privacy-suite">
        <div class="section-heading"><h3>Learning Privacy</h3><span>FERPA-aware LMS</span></div>
        ${privacyControls.map((item) => `<article class="strength-row">${icon("shield-check")}<div><strong>${item.label}</strong><small>${item.detail}</small></div></article>`).join("")}
      </section>
    </section>
  `;
}

function renderGradebookDetail() {
  const selected = gradebookSubmissions.find((item) => item.id === state.selectedSubmissionId) || gradebookSubmissions[0];
  return `
    <section class="panel lms-panel gradebook-detail-suite">
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
    <section class="dashboard-grid student-grid">
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
      <section class="panel missions-panel">
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
      <section class="panel awards-panel">
        <div class="section-heading"><h3>Awards</h3>${icon("award")}</div>
        <div class="award-grid">${["Kindness Kid", "Problem Solver", "Fast Learner", "Story Teller"].map((award) => `<div class="award-tile">${icon("sparkles")}<span>${award}</span></div>`).join("")}</div>
      </section>
    </section>
  `;
}

function renderBackgroundServices() {
  const unread = unreadNotifications();
  return `
    <section class="panel lms-panel background-services" aria-label="Passive background services">
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
    <section class="dashboard-grid teacher-grid">
      <div class="welcome-strip"><div><p class="eyebrow">${school.name} instance</p><h2>Welcome back, Demo Teacher.</h2><p>${school.messages} need attention in this school tenant, with class data isolated from every other school.</p></div><button class="primary-action" data-create-assignment ${permissionAttrs("teacher-tools", "Only teachers and administrators can create assignments.")}>${icon("plus")} Create Assignment</button></div>
      ${statCard("Average grade", school.avgGrade, "trending-up", "blue")}
      ${statCard("Attendance", school.attendance, "calendar-days", "teal")}
      ${statCard("Messages", school.messages, "mail", "gold")}
      <section class="panel class-panel">
        <div class="section-heading">
          <h3>Active Classes</h3>
          <select id="class-filter" aria-label="Filter classes"><option>All</option>${teacherClasses.map((item) => `<option ${state.selectedClass === item.name ? "selected" : ""}>${item.name}</option>`).join("")}</select>
        </div>
        <div class="class-list">${visible.map((item) => `<article class="class-card"><div><h4>${item.name}</h4><p>${item.room}</p></div><div class="class-metrics"><span>${item.grade}% grade</span><span>${item.attendance}% attendance</span><span>${item.pending} pending</span></div><button class="icon-button" aria-label="Open ${item.name} options" data-action="${item.name} class tools opened.">${icon("more-horizontal")}</button></article>`).join("")}</div>
      </section>
      <section class="panel assignment-composer-panel">
        <div class="section-heading"><h3>Create Assignment</h3><span>Realtime LMS filler data</span></div>
        <form id="assignment-form" class="assignment-form">
          <label><span>Title</span><input id="assignment-title" placeholder="Example: Reading Checkpoint" required /></label>
          <label><span>Class</span><select id="assignment-class">${teacherClasses.map((item) => `<option>${item.name}</option>`).join("")}</select></label>
          <label><span>Type</span><select id="assignment-type"><option>Automated quiz</option><option>Writing task</option><option>Project</option><option>Reading response</option></select></label>
          <label><span>Lock date</span><input id="assignment-lock" value="Next Friday, 8:00 PM" /></label>
          <button class="primary-action" type="submit" ${permissionAttrs("teacher-tools", "Only teachers and administrators can create assignments.")}>${icon("plus")} Add Assignment</button>
        </form>
      </section>
      <section class="panel activity-panel">
        <div class="section-heading"><h3>Recent Student Activity</h3><button class="icon-button" aria-label="Refresh activity" data-refresh-activity>${icon("refresh-cw")}</button></div>
        ${activityFeed.map(([student, action, time, course]) => `<article class="activity-row"><div class="avatar">${initials(student)}</div><div><p><strong>${student}</strong> ${action}</p><span>${time} | ${course}</span></div><button class="icon-button" aria-label="Reply to ${student}" data-reply-student="${student}">${icon("pen-line")}</button></article>`).join("")}
      </section>
      <section class="panel grading-card"><h3>Grading To-Do</h3>${progress(68)}<p>18 submissions left across 3 classes.</p><button class="secondary-action" data-open-role="lms">${icon("clipboard-check")} Open Grading Hub</button></section>
      ${permissionNotice("teacher-tools", "Teacher tools are read-only for this signed-in role.")}
      <section class="panel roster-panel">
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
    <section class="dashboard-grid parent-grid">
      <div class="welcome-strip parent-welcome"><div><p class="eyebrow">${school.learnerName}'s progress</p><h2>Welcome back, ${school.guardianName}.</h2><p>${school.learnerName}'s family view belongs to ${school.name}'s private instance.</p></div><button class="primary-action" data-open-role="messages">${icon("send")} Message Teacher</button></div>
      ${statCard("Current grade", "A-", "trending-up", "blue")}
      ${statCard("Attendance", "98%", "calendar-days", "teal")}
      ${statCard("Reading pace", "56%", "book-open", "gold")}
      <section class="panel teacher-note"><div class="teacher-avatar">MH</div><h3>Ms. Henderson</h3><p>"Leo is making great progress in Geometry. Keep practicing the new vocabulary cards at home."</p><button class="secondary-action" data-open-role="messages">${icon("message-circle")} Start Chat</button></section>
      <section class="panel deadline-panel">
        <div class="section-heading"><h3>Upcoming Deadlines</h3><button class="text-button" data-open-role="platform">Calendar ${icon("chevron-right")}</button></div>
        ${deadlines.map((item) => {
          const checked = state.checkedDeadlines.includes(item.title);
          return `<label class="deadline-row ${item.urgent ? "urgent" : ""}"><input type="checkbox" data-deadline="${item.title}" ${checked ? "checked" : ""} /><span class="custom-check">${checked ? icon("check") : ""}</span><span><strong>${item.title}</strong><small>${item.meta}</small></span></label>`;
        }).join("")}
      </section>
      <section class="panel mobile-parent-panel">
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
      <section class="panel subject-panel"><h3>Subject Snapshot</h3>${[["Math", 92], ["Science", 88], ["Reading", 84], ["History", 91]].map(([subject, score]) => `<div class="subject-row"><span>${subject}</span>${progress(score)}<strong>${score}%</strong></div>`).join("")}</section>
    </section>
  `;
}

function renderMessages() {
  const school = selectedSchoolRecord();
  const filtered = conversations.filter((item) => item.type === state.conversationFilter);
  const active = conversations.find((item) => item.id === state.activeConversationId) || filtered[0] || conversations[0];
  return `
    <section class="messages-shell">
      <aside class="conversation-list">
        <div class="segment-control">${["Parents", "Groups"].map((filter) => `<button class="${state.conversationFilter === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}</div>
        ${filtered.map((conversation) => `<button class="conversation ${active.id === conversation.id ? "active" : ""}" data-conversation="${conversation.id}"><div class="avatar">${initials(conversation.name)}</div><div><strong>${conversation.name}</strong><span>${conversation.preview}</span></div>${conversation.unread ? `<em>${conversation.unread}</em>` : ""}</button>`).join("")}
        <div class="emergency-card ${state.emergencyOverride ? "active" : ""}">
          ${icon("alert-triangle")}
          <div><strong>Emergency Override</strong><span>${state.emergencyOverride ? "Administrator enabled for urgent safety communication." : "Available only to school administrators."}</span></div>
          <button class="secondary-action" data-toggle-emergency ${permissionAttrs("emergency", "Emergency override is admin-only.")}>${state.emergencyOverride ? "Disable" : "Enable"}</button>
        </div>
      </aside>
      <section class="chat-panel">
        <header class="chat-header"><div class="avatar">${initials(active.name)}</div><div><h3>${active.name}</h3><p>${active.online ? "Online now" : active.role}</p></div><div class="chat-tools"><button class="icon-button" aria-label="Start video call" data-start-call="${active.id}">${icon("video")}</button><button class="icon-button" aria-label="More chat options" data-action="Chat options opened for ${active.name}.">${icon("more-horizontal")}</button></div></header>
        ${state.activeCallName ? `<div class="call-banner">${icon("video")} <strong>Live call with ${state.activeCallName}</strong><button class="text-button" data-end-call>End call</button></div>` : ""}
        <div class="work-hours-banner ${state.workHoursOpen || state.emergencyOverride ? "open" : "closed"}">
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
  return `
    <section class="dashboard-grid community-grid">
      <div class="welcome-strip community-welcome">
        <div>
          <p class="eyebrow">${school.name} community board</p>
          <h2>Approved school community chat</h2>
          <p>Parents and teachers can submit information, links, photos, or files. School administrators approve posts before they appear publicly.</p>
        </div>
        <span class="approval-badge">${board.pending.length} awaiting approval</span>
      </div>

      <section class="panel board-composer">
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

      <section class="panel approver-panel">
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
      </section>

      <section class="panel approval-queue">
        <div class="section-heading"><h3>Administrator Approval Queue</h3>${icon("shield-check")}</div>
        <div class="queue-list">
          ${board.pending.length ? board.pending.map((post) => renderPendingPost(post)).join("") : `<div class="empty-state">No posts waiting for approval.</div>`}
        </div>
      </section>

      <section class="panel published-board">
        <div class="section-heading"><h3>Published Community Board</h3><span>${board.published.length} approved</span></div>
        <div class="post-list">
          ${board.published.map((post) => renderPublishedPost(post)).join("")}
        </div>
      </section>

      <section class="panel board-policy">
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

      <section class="panel workflow-rules-panel">
        <div class="section-heading"><h3>Approval Workflow Rules</h3>${icon("shield-check")}</div>
        ${approvalRules.map(([rule, detail]) => `<article class="rule-row"><strong>${rule}</strong><span>${detail}</span></article>`).join("")}
      </section>
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

function createAssignmentRecord({ title, className, type, lockDate }) {
  const id = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
  lmsAssignments.unshift({
    id,
    title,
    type,
    rubric: "Auto rubric draft",
    analytics: 0,
    lockDate: lockDate || "Next Friday, 8:00 PM",
    exception: "None",
  });
  const firstStudent = rosterRecords.find((record) => className === "All classes" || record.className === className) || rosterRecords[0];
  if (firstStudent) {
    gradebookSubmissions.unshift({
      id: `sub-${Date.now()}`,
      student: firstStudent.student,
      assignment: title,
      status: "Needs review",
      score: 0,
      rubric: [["Completion", 0], ["Accuracy", 0], ["Explanation", 0]],
      comment: "New assignment created. Awaiting student work.",
    });
    state.selectedSubmissionId = gradebookSubmissions[0].id;
  }
  pushNotification("Action", `${title} is ready to publish`, className, "Teacher inbox");
  pushRealtimeEvent("LMS", `${title} created`, `${type} assigned to ${className}.`);
  addAudit(`Created assignment ${title}`, selectedSchoolRecord().name);
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

function bindEvents() {
  document.querySelectorAll("[data-role]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      setActiveRole(button.dataset.role);
    });
  });

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
          status: "Delivered",
          detail: `${channel} test generated from Launch Control`,
        });
      });
    }
    pushNotification("FYI", "Notification delivery test completed", selectedSchoolRecord().name, "Launch Control");
    addAudit("Sent notification delivery test batch");
    announce("Notification delivery test completed.");
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
      lockDate: document.querySelector("#assignment-lock").value.trim(),
    });
    announce(`${title} added to ${className}.`);
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

  document.querySelector("#design-form")?.addEventListener("change", () => {
    applyDesignFromForm();
    render();
  });

  document.querySelector("#design-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    applyDesignFromForm();
    render();
  });

  document.querySelectorAll("[data-design-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const school = selectedSchoolRecord();
      const preset = designPresets.find((item) => item.name === button.dataset.designPreset);
      if (!preset) return;
      schoolDesigns[school.id] = { ...selectedSchoolDesign(), ...preset };
      render();
    });
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
  hydrateDemoState();
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
    const requested = hashRole();
    state.role = requested && allowedRoleIds().includes(requested) ? requested : authenticatedProfile.landing;
  }
  window.addEventListener("hashchange", () => {
    if (!authenticatedProfile) return;
    const nextRole = hashRole();
    if (nextRole && nextRole !== state.role) setActiveRole(nextRole, false);
  });
  window.addEventListener("load", enhanceIcons);
  render();
  window.setInterval(() => {
    if (!authenticatedProfile || !state.liveUpdates || document.hidden) return;
    simulateLiveUpdate("automatic");
  }, 15000);
}

boot();
