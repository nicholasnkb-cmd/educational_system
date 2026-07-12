import {
  state,
  tenantStates,
  schoolDesigns,
  auditLogs,
  lmsAssignments,
  lmsFiles,
  lmsNotifications,
  offlineSyncQueue,
  activityFeed,
  conversations,
  communityBoards,
} from "./data.js";

const STORAGE_KEY = "educonnect-demo-state-v1";

const initialSnapshot = structuredClone({
  state,
  tenantStates,
  schoolDesigns,
  auditLogs,
  lmsAssignments,
  lmsFiles,
  lmsNotifications,
  offlineSyncQueue,
  activityFeed,
  conversations,
  communityBoards,
});

function replaceObject(target, next) {
  Object.keys(target).forEach((key) => delete target[key]);
  Object.assign(target, structuredClone(next));
}

function replaceArray(target, next) {
  target.splice(0, target.length, ...structuredClone(next));
}

export function hydrateDemoState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved) return;
    if (saved.state) Object.assign(state, saved.state);
    if (saved.tenantStates) replaceArray(tenantStates, saved.tenantStates);
    if (saved.schoolDesigns) replaceObject(schoolDesigns, saved.schoolDesigns);
    if (saved.auditLogs) replaceArray(auditLogs, saved.auditLogs);
    if (saved.lmsAssignments) replaceArray(lmsAssignments, saved.lmsAssignments);
    if (saved.lmsFiles) replaceArray(lmsFiles, saved.lmsFiles);
    if (saved.lmsNotifications) replaceArray(lmsNotifications, saved.lmsNotifications);
    if (saved.offlineSyncQueue) replaceArray(offlineSyncQueue, saved.offlineSyncQueue);
    if (saved.activityFeed) replaceArray(activityFeed, saved.activityFeed);
    if (saved.conversations) replaceArray(conversations, saved.conversations);
    if (saved.communityBoards) replaceObject(communityBoards, saved.communityBoards);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function persistDemoState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    state,
    tenantStates,
    schoolDesigns,
    auditLogs,
    lmsAssignments,
    lmsFiles,
    lmsNotifications,
    offlineSyncQueue,
    activityFeed,
    conversations,
    communityBoards,
  }));
}

export function resetDemoState() {
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, structuredClone(initialSnapshot.state));
  replaceArray(tenantStates, initialSnapshot.tenantStates);
  replaceObject(schoolDesigns, initialSnapshot.schoolDesigns);
  replaceArray(auditLogs, initialSnapshot.auditLogs);
  replaceArray(lmsAssignments, initialSnapshot.lmsAssignments);
  replaceArray(lmsFiles, initialSnapshot.lmsFiles);
  replaceArray(lmsNotifications, initialSnapshot.lmsNotifications);
  replaceArray(offlineSyncQueue, initialSnapshot.offlineSyncQueue);
  replaceArray(activityFeed, initialSnapshot.activityFeed);
  replaceArray(conversations, initialSnapshot.conversations);
  replaceObject(communityBoards, initialSnapshot.communityBoards);
}
