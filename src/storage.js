import {
  state,
  userProfiles,
  tenantStates,
  schoolDesigns,
  rosterRecords,
  gradebookSubmissions,
  auditLogs,
  lmsAssignments,
  lmsLessons,
  lmsSubmissions,
  questionBank,
  curriculumCourses,
  lmsFiles,
  lmsNotifications,
  realtimeEvents,
  databaseTables,
  onboardingTasks,
  fileUploads,
  notificationDeliveryLog,
  securityChecklist,
  deployPipeline,
  offlineSyncQueue,
  activityFeed,
  conversations,
  communityBoards,
} from "./dataSource.js";
import { loadMockApiState, saveMockApiState } from "./mockApi.js";

const STORAGE_KEY = "educonnect-demo-state-v1";

const initialSnapshot = structuredClone({
  state,
  userProfiles,
  tenantStates,
  schoolDesigns,
  rosterRecords,
  gradebookSubmissions,
  auditLogs,
  lmsAssignments,
  lmsLessons,
  lmsSubmissions,
  questionBank,
  curriculumCourses,
  lmsFiles,
  lmsNotifications,
  realtimeEvents,
  databaseTables,
  onboardingTasks,
  fileUploads,
  notificationDeliveryLog,
  securityChecklist,
  deployPipeline,
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
    applyDemoSnapshot(saved);
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function getDemoSnapshot() {
  return structuredClone({
    state,
    userProfiles,
    tenantStates,
    schoolDesigns,
    rosterRecords,
    gradebookSubmissions,
    auditLogs,
    lmsAssignments,
    lmsLessons,
    lmsSubmissions,
    questionBank,
    curriculumCourses,
    lmsFiles,
    lmsNotifications,
    realtimeEvents,
    databaseTables,
    onboardingTasks,
    fileUploads,
    notificationDeliveryLog,
    securityChecklist,
    deployPipeline,
    offlineSyncQueue,
    activityFeed,
    conversations,
    communityBoards,
  });
}

export function applyDemoSnapshot(snapshot) {
  if (!snapshot) return;
  if (snapshot.state) Object.assign(state, snapshot.state);
  if (snapshot.userProfiles) replaceArray(userProfiles, snapshot.userProfiles);
  if (snapshot.tenantStates) replaceArray(tenantStates, snapshot.tenantStates);
  if (snapshot.schoolDesigns) replaceObject(schoolDesigns, snapshot.schoolDesigns);
  if (snapshot.rosterRecords) replaceArray(rosterRecords, snapshot.rosterRecords);
  if (snapshot.gradebookSubmissions) replaceArray(gradebookSubmissions, snapshot.gradebookSubmissions);
  if (snapshot.auditLogs) replaceArray(auditLogs, snapshot.auditLogs);
  if (snapshot.lmsAssignments) replaceArray(lmsAssignments, snapshot.lmsAssignments);
  if (snapshot.lmsLessons) replaceArray(lmsLessons, snapshot.lmsLessons);
  if (snapshot.lmsSubmissions) replaceArray(lmsSubmissions, snapshot.lmsSubmissions);
  if (snapshot.questionBank) replaceArray(questionBank, snapshot.questionBank);
  if (snapshot.curriculumCourses) replaceArray(curriculumCourses, snapshot.curriculumCourses);
  if (snapshot.lmsFiles) replaceArray(lmsFiles, snapshot.lmsFiles);
  if (snapshot.lmsNotifications) replaceArray(lmsNotifications, snapshot.lmsNotifications);
  if (snapshot.realtimeEvents) replaceArray(realtimeEvents, snapshot.realtimeEvents);
  if (snapshot.databaseTables) replaceArray(databaseTables, snapshot.databaseTables);
  if (snapshot.onboardingTasks) replaceArray(onboardingTasks, snapshot.onboardingTasks);
  if (snapshot.fileUploads) replaceArray(fileUploads, snapshot.fileUploads);
  if (snapshot.notificationDeliveryLog) replaceArray(notificationDeliveryLog, snapshot.notificationDeliveryLog);
  if (snapshot.securityChecklist) replaceArray(securityChecklist, snapshot.securityChecklist);
  if (snapshot.deployPipeline) replaceArray(deployPipeline, snapshot.deployPipeline);
  if (snapshot.offlineSyncQueue) replaceArray(offlineSyncQueue, snapshot.offlineSyncQueue);
  if (snapshot.activityFeed) replaceArray(activityFeed, snapshot.activityFeed);
  if (snapshot.conversations) replaceArray(conversations, snapshot.conversations);
  if (snapshot.communityBoards) replaceObject(communityBoards, snapshot.communityBoards);
}

export function persistDemoState() {
  const snapshot = getDemoSnapshot();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  if (state.apiMode === "mock-api" || state.apiMode === "live-api") saveMockApiState(snapshot, state.apiMode).catch(() => {});
}

export async function hydrateMockApiState(mode = state.apiMode) {
  const snapshot = await loadMockApiState(mode);
  if (snapshot) applyDemoSnapshot(snapshot);
}

export function resetDemoState() {
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, structuredClone(initialSnapshot.state));
  replaceArray(userProfiles, initialSnapshot.userProfiles);
  replaceArray(tenantStates, initialSnapshot.tenantStates);
  replaceObject(schoolDesigns, initialSnapshot.schoolDesigns);
  replaceArray(rosterRecords, initialSnapshot.rosterRecords);
  replaceArray(gradebookSubmissions, initialSnapshot.gradebookSubmissions);
  replaceArray(auditLogs, initialSnapshot.auditLogs);
  replaceArray(lmsAssignments, initialSnapshot.lmsAssignments);
  replaceArray(lmsLessons, initialSnapshot.lmsLessons);
  replaceArray(lmsSubmissions, initialSnapshot.lmsSubmissions);
  replaceArray(questionBank, initialSnapshot.questionBank);
  replaceArray(curriculumCourses, initialSnapshot.curriculumCourses);
  replaceArray(lmsFiles, initialSnapshot.lmsFiles);
  replaceArray(lmsNotifications, initialSnapshot.lmsNotifications);
  replaceArray(realtimeEvents, initialSnapshot.realtimeEvents);
  replaceArray(databaseTables, initialSnapshot.databaseTables);
  replaceArray(onboardingTasks, initialSnapshot.onboardingTasks);
  replaceArray(fileUploads, initialSnapshot.fileUploads);
  replaceArray(notificationDeliveryLog, initialSnapshot.notificationDeliveryLog);
  replaceArray(securityChecklist, initialSnapshot.securityChecklist);
  replaceArray(deployPipeline, initialSnapshot.deployPipeline);
  replaceArray(offlineSyncQueue, initialSnapshot.offlineSyncQueue);
  replaceArray(activityFeed, initialSnapshot.activityFeed);
  replaceArray(conversations, initialSnapshot.conversations);
  replaceObject(communityBoards, initialSnapshot.communityBoards);
}
