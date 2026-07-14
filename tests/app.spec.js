import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
});

async function loginAs(page, profileId = "state-admin", workspace = "") {
  await page.goto("/");
  await expect(page).toHaveTitle(/The right school view for every person/);
  await expect(page.getByRole("heading", { name: "Learning, families, and schools—connected." })).toBeVisible();
  await page.getByLabel("School email or username").fill(profileId);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByLabel("Sign out")).toBeVisible();
  if (workspace) await page.getByRole("link", { name: new RegExp(workspace, "i") }).first().click();
}

async function expectRoutePage(page, role, functionId = "") {
  const main = page.locator("#app-main");
  await expect(main).toHaveAttribute("data-route-role", role);
  await expect(main).toHaveAttribute("data-route-function", functionId);
  const routePage = main.locator(":scope > [data-route-page]");
  await expect(routePage).toHaveCount(1);
  await expect(routePage).toHaveAttribute("data-route-role", role);
  await expect(routePage).toHaveAttribute("data-route-function", functionId);
  await expect(routePage.locator(":scope > .function-page-stage")).toHaveCount(1);
  await expect(page.locator("#function-page-title")).toBeVisible();
  return routePage;
}

async function openFunction(page, role, functionId) {
  await page.getByRole("button", { name: "General menu", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "General menu" });
  await expect(dialog).toBeVisible();
  const link = dialog.locator(`[data-menu-role="${role}"][data-menu-function="${functionId}"]`);
  await expect(link).toHaveCount(1);
  const group = link.locator("xpath=ancestor::details[1]");
  if (!(await group.evaluate((element) => element.open))) await group.locator(":scope > summary").click();
  await expect(link).toBeVisible();
  await link.click();
  await expect(page).toHaveURL(new RegExp(`#${role}/${functionId}$`));
  return expectRoutePage(page, role, functionId);
}

async function setDirectRoute(page, role, functionId = "") {
  const hash = functionId ? `#${role}/${functionId}` : `#${role}`;
  await page.evaluate((nextHash) => { window.location.hash = nextHash; }, hash);
  await expect(page).toHaveURL(new RegExp(`${hash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
  return expectRoutePage(page, role, functionId);
}

test("navigates roles, searches, opens settings, and resets demo state", async ({ page }) => {
  await loginAs(page);
  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();

  await page.getByPlaceholder("Search resources...").fill("fractions");
  await expect(page.getByText('Results for "fractions"')).toBeVisible();
  await page.getByRole("button", { name: /Fractions Mastery Check/i }).click();
  await expectRoutePage(page, "lms");
  await expect(page.locator("#function-page-title")).toHaveText("LMS overview & offline pack");

  await page.getByLabel("Settings").click();
  await expect(page.getByRole("heading", { name: "Settings" })).toBeVisible();
  await page.getByLabel("Compact dashboard density").check();
  await expect(page.locator(".app")).toHaveClass(/compact-mode/);
  await page.getByLabel("Close settings").click();

  await page.getByRole("button", { name: /Reset Demo/i }).click();
  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();
});

test("runs LMS, teacher, messaging, and community demo flows", async ({ page }) => {
  await loginAs(page, "school-admin", "LMS");
  await page.getByRole("button", { name: /Build Offline Pack/i }).click();
  await expect(page.getByText("Offline pack built and sync queue prepared.")).toBeVisible();
  await openFunction(page, "lms", "offline-learning");
  await expect(page.getByText("Offline pack ready")).toBeVisible();

  await openFunction(page, "teacher", "quick-assignment");
  const quickAssignment = page.locator(".assignment-composer-panel");
  await quickAssignment.getByLabel("Title").fill("Reading Quick Check");
  await quickAssignment.getByRole("button", { name: /Add Assignment/i }).click();
  await expect(page.getByText(/Reading Quick Check added/i)).toBeVisible();
  await expect(page.getByText(/Reading Quick Check/i).first()).toBeVisible();

  await openFunction(page, "messages", "chat-panel");
  await page.getByPlaceholder(/Message/i).fill("Demo message from test");
  await page.getByRole("button", { name: "Send", exact: true }).click();
  await expect(page.locator(".chat-stream").getByText("Demo message from test")).toBeVisible();

  await openFunction(page, "community", "community-create-post");
  await page.getByLabel("Title").fill("Test community update");
  await page.getByRole("textbox", { name: "Message" }).fill("Families can review this test update.");
  await page.getByRole("button", { name: /Submit for Admin Approval/i }).click();
  await openFunction(page, "community", "community-approval-queue");
  await expect(page.getByText("Test community update")).toBeVisible();
  await page.getByRole("button", { name: /Approve/i }).first().click();
  await openFunction(page, "community", "community-published");
  await expect(page.getByText("Approved just now")).toBeVisible();
});

test("supports the mobile bottom navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await loginAs(page, "student");
  await expect(page.locator(".mobile-role-nav").getByRole("link")).toHaveCount(1);
  await expect(page.getByRole("heading", { name: /Welcome back/i })).toBeVisible();
  await page.getByRole("button", { name: /Continue Adventure/i }).click();
  await expect(page.getByText(/marked complete/i)).toBeVisible();
});

test("switches demo identities and enforces role permissions", async ({ page }) => {
  await loginAs(page, "parent");
  await expect(page.getByText("Signed in as Demo Guardian.")).toBeVisible();
  await expect(page.locator('[data-menu-workspace="state-admin"]')).toHaveCount(0);
  await expect(page.locator('[data-menu-workspace="teacher"]')).toHaveCount(0);
  await expect(page.locator('[data-menu-workspace="parent"]').first()).toBeVisible();

  await page.getByRole("button", { name: "General menu", exact: true }).click();
  await expect(page.getByRole("dialog", { name: "General menu" }).locator('[data-menu-function="emergency-override"]')).toHaveCount(0);
  await page.keyboard.press("Escape");

  await page.getByLabel("Sign out").click();
  await page.getByLabel("School email or username").fill("district-admin");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.locator('[data-menu-workspace="state-admin"]')).toHaveCount(0);
  await expect(page.locator('[data-menu-workspace="district-admin"]').first()).toBeVisible();
  await openFunction(page, "messages", "emergency-override");
  await expect(page.getByRole("button", { name: /Enable/i })).toBeEnabled();
});

test("uses a public landing page before opening a role workspace", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Open your portal/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Everyone has a place to learn and connect." })).toBeVisible();
  await expect(page.locator(".workspace")).toHaveCount(0);
  await expect(page.locator("#landing-profile")).toHaveCount(0);
  await page.getByLabel("School email or username").fill("parent");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expectRoutePage(page, "parent");
  await expect(page.locator("#function-page-title")).toHaveText("Family home");
  await expect(page.getByRole("link", { name: /Student/i })).toHaveCount(0);
});

test("gives the global test administrator every workspace", async ({ page }) => {
  await loginAs(page, "global-admin");
  await expect(page.locator(".general-menu-sidebar [data-menu-workspace]")).toHaveCount(9);
  await openFunction(page, "state-admin", "role-control-center");
  await expect(page.locator("#role-control-center").getByRole("heading", { name: "Role Control Center" })).toBeVisible();
  await expect(page.locator(".role-control-launcher").getByRole("button")).toHaveCount(9);
  await page.getByRole("link", { name: /Parent/i }).first().click();
  await expectRoutePage(page, "parent");
  await page.getByRole("link", { name: /Student/i }).first().click();
  await expectRoutePage(page, "student");
});

test("general menu opens every function group with precise deep links", async ({ page }) => {
  await loginAs(page, "global-admin");
  const sidebar = page.locator(".general-menu-sidebar");
  await expect(sidebar).toBeVisible();
  for (const width of [981, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }

  for (const functionId of [
    "role-control-center",
    "school-customization",
    "lesson-library",
    "lesson-studio",
    "student-progress",
    "family-summary",
    "chat-panel",
    "community-approval-queue",
    "operations-services",
  ]) {
    await expect(sidebar.locator(`[data-menu-function="${functionId}"]`)).toHaveCount(1);
  }

  await sidebar.locator('[data-menu-function="school-customization"]').click();
  await expect(page).toHaveURL(/#school-admin\/school-customization$/);
  await expect(page.locator("#school-customization")).toBeInViewport();
  await expect(page.locator("#function-page-title")).toBeFocused();

  await page.getByRole("button", { name: "General menu" }).click();
  const dialog = page.getByRole("dialog", { name: "General menu" });
  await expect(dialog).toBeVisible();
  await dialog.locator("summary").filter({ hasText: "Platform operations" }).click();
  await dialog.locator('[data-menu-function="operations-services"]').click();
  await expect(page).toHaveURL(/#state-admin\/operations-services$/);
  await expect(page.getByRole("tab", { name: "Connected services" })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("heading", { name: "Platform Operations Center" })).toBeInViewport();

  await page.goBack();
  await expect(page).toHaveURL(/#school-admin\/school-customization$/);
  await expect(page.locator("#function-page-title")).toBeInViewport();

  await page.getByRole("button", { name: "General menu" }).click();
  await dialog.locator("summary").filter({ hasText: "Teaching & learning" }).click();
  await dialog.locator('[data-menu-function="create-lesson"]').click();
  await expect(page).toHaveURL(/#teacher\/create-lesson$/);
  await expectRoutePage(page, "teacher", "create-lesson");
  await expect(page.locator("#lesson-studio").getByRole("heading", { name: "Create a lesson" })).toBeVisible();
});

test("every global-admin menu function resolves to its rendered destination", async ({ page }) => {
  await loginAs(page, "global-admin");
  const expectedByRole = {
    "state-admin": [
      "state-overview", "role-control-center", "unified-school-os", "district-oversight", "compliance-dashboard",
      "audit-trail", "statewide-calendar", "governance-chain", "realtime-operations", "launch-control",
      "login-gateway", "database-blueprint", "admin-onboarding", "platform-file-uploads", "notification-delivery",
      "security-checklist", "deployment-pipeline", "operations-tenants", "operations-security", "operations-notifications",
      "operations-services", "operations-jobs", "operations-monitoring", "operations-launch",
    ],
    "district-admin": [
      "district-overview", "district-scope", "district-schools", "district-unified-school-os",
      "district-realtime-operations", "district-audit-trail",
    ],
    "school-admin": [
      "school-overview", "school-customization", "enrollment-center", "school-success-center", "intervention-center",
      "campus-tenant", "school-operations", "school-compliance", "school-realtime-operations",
    ],
    lms: [
      "lms-overview", "lesson-library", "background-services", "simple-classroom", "zero-cost-core", "advanced-grading",
      "gradebook-detail", "deadline-controls", "account-context", "paperless-workflow", "lms-guardrails",
      "offline-learning", "learning-privacy",
    ],
    teacher: [
      "teacher-overview", "learning-operations", "teaching-calendar", "automated-reminders", "standards-gradebook",
      "teacher-intervention-center", "create-lesson", "lesson-studio", "active-classes", "quick-assignment", "student-activity",
      "curriculum-planner", "grading-todo", "teacher-roster",
    ],
    student: ["student-overview", "student-progress", "student-assignments", "student-lessons", "student-missions", "student-awards"],
    parent: ["parent-overview", "family-summary", "teacher-note", "family-deadlines", "mobile-parent", "subject-snapshot"],
    messages: ["messages-overview", "chat-panel", "communication-hours", "emergency-override"],
    community: [
      "community-overview", "community-create-post", "community-approvers", "community-approval-queue",
      "community-published", "community-rules", "community-workflow",
    ],
  };
  const entries = await page.locator(".general-menu-sidebar [data-menu-function]").evaluateAll((links) => links.map((link) => ({
    role: link.dataset.menuRole,
    id: link.dataset.menuFunction,
    target: link.dataset.menuTarget,
    tab: link.dataset.menuTab || "",
  })));
  const keys = entries.map((entry) => `${entry.role}/${entry.id}`);
  expect(new Set(keys).size).toBe(keys.length);
  for (const [role, expectedIds] of Object.entries(expectedByRole)) {
    expect(entries.filter((entry) => entry.role === role).map((entry) => entry.id).sort()).toEqual([...expectedIds].sort());
  }
  const actions = await page.locator(".general-menu-sidebar [data-menu-action]").evaluateAll((links) => links.map((link) => link.dataset.menuAction).sort());
  expect(actions).toEqual(["dashboard", "notifications", "search", "settings", "sign-out", "tour"]);

  const failures = [];
  for (const entry of entries) {
    const result = await page.evaluate(({ role, id, target, tab }) => {
      const link = document.querySelector(`.general-menu-sidebar [data-menu-role="${role}"][data-menu-function="${id}"]`);
      link?.click();
      return {
        hash: window.location.hash,
        targetExists: Boolean(document.getElementById(target)),
        routePages: document.querySelectorAll("#app-main > [data-route-page]").length,
        routeRole: document.querySelector("#app-main")?.dataset.routeRole,
        routeFunction: document.querySelector("#app-main")?.dataset.routeFunction,
        stageChildren: document.querySelectorAll("#app-main > [data-route-page] > .function-page-stage > *").length,
        targetInStage: Boolean(document.getElementById(target)?.closest(".function-page-stage")),
        selectedTab: tab ? document.querySelector(`[data-operations-tab="${tab}"]`)?.getAttribute("aria-selected") : "true",
      };
    }, entry);
    if (result.hash !== `#${entry.role}/${entry.id}` || !result.targetExists || result.routePages !== 1
      || result.routeRole !== entry.role || result.routeFunction !== entry.id || result.stageChildren !== 1
      || !result.targetInStage || result.selectedTab !== "true") {
      failures.push({ ...entry, ...result });
    }
  }
  expect(failures).toEqual([]);
});

test("every workspace link opens one isolated overview page", async ({ page }) => {
  await loginAs(page, "global-admin");
  const overviewTargets = {
    "state-admin": "state-overview",
    "district-admin": "district-overview",
    "school-admin": "school-overview",
    lms: "lms-overview",
    teacher: "teacher-overview",
    student: "student-overview",
    parent: "parent-overview",
    messages: "conversation-list",
    community: "community-overview",
  };

  for (const [role, target] of Object.entries(overviewTargets)) {
    await page.getByRole("button", { name: "General menu", exact: true }).click();
    const dialog = page.getByRole("dialog", { name: "General menu" });
    await dialog.locator(`[data-menu-workspace="${role}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${role}$`));
    const routePage = await expectRoutePage(page, role);
    await expect(routePage.locator(":scope > .function-page-stage > *")).toHaveCount(1);
    await expect(routePage.locator(`#${target}`)).toBeVisible();
    await expect(page.locator(`.general-menu-sidebar [data-menu-workspace="${role}"]`)).toHaveAttribute("aria-current", "page");
  }
});

test("preserves an authorized direct function link through sign in", async ({ page }) => {
  await page.goto("/#teacher/create-lesson");
  await page.getByLabel("School email or username").fill("global-admin");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page).toHaveURL(/#teacher\/create-lesson$/);
  await expectRoutePage(page, "teacher", "create-lesson");
  await expect(page.locator("#lesson-studio").getByRole("heading", { name: "Create a lesson" })).toBeVisible();
  await setDirectRoute(page, "school-admin", "school-customization");
  await expect(page.locator("#school-customization")).toBeVisible();
});

test("restores isolated pages with browser history and routes operations tabs", async ({ page }) => {
  await loginAs(page, "global-admin");
  await openFunction(page, "school-admin", "school-customization");
  await page.locator("#app-main").evaluate((element) => { element.scrollTop = element.scrollHeight; });
  await openFunction(page, "state-admin", "operations-services");
  await expect.poll(() => page.locator("#app-main").evaluate((element) => element.scrollTop)).toBe(0);
  await expect(page.getByRole("tab", { name: "Connected services" })).toHaveAttribute("aria-selected", "true");

  await page.goBack();
  await expect(page).toHaveURL(/#school-admin\/school-customization$/);
  await expectRoutePage(page, "school-admin", "school-customization");
  await page.goForward();
  await expect(page).toHaveURL(/#state-admin\/operations-services$/);
  await expectRoutePage(page, "state-admin", "operations-services");
  await expect(page.getByRole("tab", { name: "Connected services" })).toHaveAttribute("aria-selected", "true");

  await page.getByRole("tab", { name: "Jobs & recovery" }).click();
  await expect(page).toHaveURL(/#state-admin\/operations-jobs$/);
  await expectRoutePage(page, "state-admin", "operations-jobs");
  await page.goBack();
  await expect(page).toHaveURL(/#state-admin\/operations-services$/);
  await expect(page.getByRole("tab", { name: "Connected services" })).toHaveAttribute("aria-selected", "true");
});

test("general menu restores focus and identifies the active function", async ({ page }) => {
  await loginAs(page, "global-admin");
  await openFunction(page, "school-admin", "school-customization");
  const opener = page.getByRole("button", { name: "General menu", exact: true });
  await opener.click();
  const dialog = page.getByRole("dialog", { name: "General menu" });
  const activeLink = dialog.locator('[data-menu-function="school-customization"]');
  await expect(activeLink).toHaveAttribute("aria-current", "page");
  await expect(activeLink).toBeFocused();
  await expect(opener).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
  await expect(opener).toHaveAttribute("aria-expanded", "false");
});

test("general menu honors parent and student role boundaries", async ({ page }) => {
  await loginAs(page, "parent");
  await page.getByRole("button", { name: "General menu" }).click();
  let dialog = page.getByRole("dialog", { name: "General menu" });
  await expect(dialog.locator('[data-menu-workspace="parent"]')).toBeVisible();
  await expect(dialog.locator('[data-menu-workspace="messages"]')).toBeVisible();
  await expect(dialog.locator('[data-menu-workspace="community"]')).toBeVisible();
  await expect(dialog.locator('[data-menu-workspace="state-admin"]')).toHaveCount(0);
  await expect(dialog.locator('[data-menu-function="community-approval-queue"]')).toHaveCount(0);
  await expect(dialog.locator('[data-menu-function="lesson-studio"]')).toHaveCount(0);

  await page.keyboard.press("Escape");
  await openFunction(page, "community", "community-create-post");
  await expect(page.locator("#community-create-post")).toBeVisible();
  await expect(page.locator("#community-approvers")).toHaveCount(0);
  await expect(page.locator("#community-approval-queue")).toHaveCount(0);
  await page.getByLabel("Sign out").click();
  await page.getByLabel("School email or username").fill("student");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.getByRole("button", { name: "General menu" }).click();
  dialog = page.getByRole("dialog", { name: "General menu" });
  await expect(dialog.locator('[data-menu-workspace="student"]')).toBeVisible();
  await expect(dialog.locator("[data-menu-workspace]")).toHaveCount(1);
  await dialog.locator("summary").filter({ hasText: "Teaching & learning" }).click();
  await expect(dialog.locator('[data-menu-function="student-lessons"]')).toBeVisible();
  await expect(dialog.locator('[data-menu-function="messages-overview"]')).toHaveCount(0);
});

test("general menu remains usable on a narrow mobile screen", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 640 });
  await loginAs(page, "global-admin");
  const mobileMenuButton = page.locator(".mobile-role-nav").getByRole("button", { name: "Menu" });
  await expect(page.locator(".mobile-role-nav").locator("a, button")).toHaveCount(4);
  await mobileMenuButton.click();
  const dialog = page.getByRole("dialog", { name: "General menu" });
  await expect(dialog).toBeVisible();
  const bounds = await dialog.evaluate((element) => {
    const dialogRect = element.getBoundingClientRect();
    const menuRect = element.querySelector(".general-menu").getBoundingClientRect();
    return {
      dialogRight: dialogRect.right,
      dialogBottom: dialogRect.bottom,
      menuRight: menuRect.right,
      menuBottom: menuRect.bottom,
    };
  });
  expect(bounds.dialogRight).toBeLessThanOrEqual(320);
  expect(bounds.dialogBottom).toBeLessThanOrEqual(640);
  expect(bounds.menuRight).toBeLessThanOrEqual(bounds.dialogRight);
  expect(bounds.menuBottom).toBeLessThanOrEqual(bounds.dialogBottom);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(mobileMenuButton).toBeFocused();

  await mobileMenuButton.click();
  await dialog.locator("summary").filter({ hasText: "Administration" }).click();
  await dialog.locator('[data-menu-function="school-customization"]').click();
  await expectRoutePage(page, "school-admin", "school-customization");
  await expect(page.locator("#school-customization")).toBeVisible();
  await expect.poll(() => page.locator("#app-main").evaluate((element) => element.scrollTop)).toBe(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(320);
});

test("forbidden deep links return to the current authorized workspace", async ({ page }) => {
  await loginAs(page, "student");
  await page.evaluate(() => { window.location.hash = "#state-admin/role-control-center"; });
  await expect(page).toHaveURL(/#student$/);
  await expectRoutePage(page, "student");
  await expect(page.getByText("That workspace is not available for your role.")).toBeVisible();
});

test("manages permissions, roster, gradebook, and audit trail", async ({ page }) => {
  await loginAs(page);
  await openFunction(page, "state-admin", "role-control-center");
  await expect(page.locator("#role-control-center").getByRole("heading", { name: "Role Control Center" })).toBeVisible();
  await page.locator('[data-profile-permission="teacher:submit-post"]').click();
  await expect(page.getByText("permissions updated")).toBeVisible();

  await openFunction(page, "teacher", "teacher-roster");
  await page.getByLabel("Filter roster").selectOption("Watch");
  const rosterPanel = page.locator(".roster-panel");
  await expect(rosterPanel.getByText("Demo Learner 3")).toBeVisible();
  await expect(rosterPanel.getByText("Demo Learner 1")).not.toBeVisible();

  await openFunction(page, "lms", "gradebook-detail");
  await page.getByRole("button", { name: /Demo Learner 2/i }).click();
  await page.getByRole("textbox", { name: "Teacher comment" }).fill("Updated rubric feedback.");
  await page.getByRole("button", { name: /Save Comment/i }).click();
  await expect(page.getByText("Gradebook comment saved.")).toBeVisible();

  await openFunction(page, "state-admin", "audit-trail");
  await expect(page.getByText("Saved gradebook comment for Demo Learner 2")).toBeVisible();
});

test("keeps role controls in one centralized workspace", async ({ page }) => {
  await loginAs(page, "global-admin");
  await expect(page.locator("#role-control-center")).toHaveCount(0);
  await openFunction(page, "state-admin", "role-control-center");
  await expect(page.locator("#role-control-center")).toHaveCount(1);
  await page.getByRole("link", { name: /District Admin/i }).first().click();
  await expect(page.locator("#role-control-center")).toHaveCount(0);
  await page.getByRole("button", { name: /Role controls/i }).click();
  await expect(page.locator("#role-control-center")).toHaveCount(1);
  await expect(page.locator("#role-control-center").getByRole("heading", { name: "Role Control Center" })).toBeVisible();
});

test("customizes school identity, instance, logo, and colors from School Admin", async ({ page }) => {
  await loginAs(page, "school-admin");
  await openFunction(page, "school-admin", "school-customization");
  await expect(page.locator("#school-customization").getByRole("heading", { name: "School Customization" })).toBeVisible();

  await page.getByLabel("School name").fill("P.S. 118 Discovery Lab");
  await page.getByLabel("Instance slug").fill("ps118lab");
  await page.getByLabel("Logo mark").fill("DL");
  await page.getByLabel("Crest / logo name").fill("Discovery Lab Owls");
  await page.getByLabel("School voice").fill("Curious learners building a brighter future");
  await page.getByLabel("Custom domain").fill("learn.discoverylab.org");
  await page.getByLabel("Login welcome message").fill("Welcome, Discovery Lab learners!");
  await page.getByLabel("Storage quota (GB)").fill("75");
  await page.getByLabel("Community").uncheck();
  await page.getByLabel("Primary buttons").fill("#3157c8");
  await page.getByRole("button", { name: /Save school customization/i }).click();

  await expect(page.getByText("P.S. 118 Discovery Lab customization saved.")).toBeVisible();
  await expect(page.locator(".tenant-bar").getByText("P.S. 118 Discovery Lab", { exact: true }).first()).toBeVisible();
  await expect(page.locator(".tenant-bar").getByText("ps118lab.educonnect.local")).toBeVisible();
  await expect(page.locator(".school-brand-preview").getByText("learn.discoverylab.org")).toBeVisible();
  await expect(page.locator(".brand-mark")).toHaveText("DL");

  await page.getByRole("link", { name: /LMS/i }).first().click();
  await page.getByRole("button", { name: /School design/i }).click();
  await expect(page.locator("#school-customization").getByRole("heading", { name: "School Customization" })).toBeVisible();
  await expect(page.getByLabel("School name")).toHaveValue("P.S. 118 Discovery Lab");
});

test("creates, publishes, previews, and completes a multimedia quiz lesson", async ({ page }) => {
  await loginAs(page, "teacher");
  await page.getByRole("button", { name: "Create lesson" }).first().click();
  await expect(page).toHaveURL(/#teacher\/create-lesson$/);
  await expect(page.locator("#lesson-studio").getByRole("heading", { name: "Create a lesson" })).toBeVisible();

  await page.getByLabel("Lesson title").fill("Persuasive Media Lab");
  await page.getByLabel("Learning objective and summary").fill("Analyze a message, identify supporting evidence, and demonstrate understanding.");
  await page.getByLabel("Section title").fill("Start with a claim");
  await page.getByLabel("Lesson content").fill("A strong claim is clear, focused, and supported by relevant evidence.");

  await page.getByRole("button", { name: /Media/i }).click();
  await page.getByLabel("Media title").fill("Persuasion example");
  await page.getByLabel("Media URL").fill("https://example.com/persuasion-video");
  await page.getByLabel("Caption or instructions").fill("Open the example and identify the main claim.");
  await page.locator("[data-lesson-media-upload]").setInputFiles({ name: "persuasion-guide.pdf", mimeType: "application/pdf", buffer: Buffer.from("teacher media guide") });
  await expect(page.getByText("persuasion-guide.pdf attached to the lesson.")).toBeVisible();

  await page.getByRole("button", { name: /Quiz/i }).click();
  await page.getByLabel("Quiz title").fill("Claim check");
  await page.getByLabel("Question", { exact: true }).fill("Which statement best describes a strong claim?");
  await page.getByLabel("Answer option 1").fill("It includes every possible detail.");
  await page.getByLabel("Answer option 2").fill("It is clear and supported by evidence.");
  await page.locator('[data-correct-answer]').nth(1).check();
  await page.getByLabel("Answer feedback").fill("A strong claim is focused and supported by relevant evidence.");
  await page.getByRole("button", { name: /Publish lesson/i }).click();
  await expect(page.getByText("Persuasive Media Lab published to students.")).toBeVisible();
  await expect(page).toHaveURL(/#teacher\/lesson-studio$/);

  await openFunction(page, "lms", "lesson-library");
  const lessonCard = page.locator(".lesson-card").filter({ hasText: "Persuasive Media Lab" });
  await expect(lessonCard.getByText("Published")).toBeVisible();
  await lessonCard.getByRole("button", { name: /Preview/i }).click();
  await expect(page.locator(".lesson-preview-panel").getByRole("heading", { name: "Persuasive Media Lab" })).toBeVisible();

  await page.getByLabel("Sign out").click();
  await page.getByLabel("School email or username").fill("student");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await openFunction(page, "student", "student-lessons");
  await page.getByRole("button", { name: /Persuasive Media Lab/i }).click();
  const lessonView = page.locator(".student-lesson-view");
  await lessonView.getByText("It is clear and supported by evidence.").click();
  await lessonView.getByRole("button", { name: /Complete lesson/i }).click();
  await expect(page.getByText("Persuasive Media Lab completed with a 100% quiz score.")).toBeVisible();
  await expect(lessonView.getByText("Latest score")).toBeVisible();
});

test("validates imported demo state JSON", async ({ page }) => {
  await loginAs(page);
  await page.getByLabel("Settings").click();
  const chooserPromise = page.waitForEvent("filechooser");
  await page.getByText("Import JSON File").click();
  const chooser = await chooserPromise;
  await chooser.setFiles({
    name: "bad-state.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify({ hello: "world" })),
  });
  await expect(page.getByText(/Import failed: Missing state object/i)).toBeVisible();

  const legacySnapshot = await page.evaluate(() => JSON.parse(localStorage.getItem("educonnect-demo-state-v1")));
  legacySnapshot.productionReadiness = { tenantIsolation: { status: "Enforced" } };
  const legacyChooserPromise = page.waitForEvent("filechooser");
  await page.getByText("Import JSON File").click();
  const legacyChooser = await legacyChooserPromise;
  await legacyChooser.setFiles({ name: "legacy-state.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(legacySnapshot)) });
  await openFunction(page, "state-admin", "operations-tenants");
  await expect(page.getByRole("heading", { name: "Platform Operations Center" })).toBeVisible();
  await expect(page.getByText("All systems operational")).toBeVisible();
});

test("runs realtime app workflows with editable filler data", async ({ page }) => {
  await loginAs(page);
  await openFunction(page, "state-admin", "realtime-operations");
  await page.locator(".realtime-panel").getByRole("button", { name: /Simulate Update/i }).click();
  await expect(page.getByText("Live app data updated.")).toBeVisible();
  await expect(page.locator(".realtime-panel").getByText(/synced|updated|message/i).first()).toBeVisible();

  await openFunction(page, "teacher", "quick-assignment");
  const assignmentForm = page.locator("#assignment-form");
  await assignmentForm.getByPlaceholder("Example: Reading Checkpoint").fill("Realtime Reading Draft");
  await assignmentForm.locator("#assignment-class").selectOption("Creative Writing");
  await assignmentForm.getByRole("button", { name: /Add Assignment/i }).click();
  await expect(page.getByText("Realtime Reading Draft added to Creative Writing.")).toBeVisible();

  await openFunction(page, "teacher", "teacher-roster");
  const rosterRow = page.locator(".editable-roster-row").filter({ hasText: "Demo Learner 2" });
  await rosterRow.locator("[data-roster-status]").selectOption("Watch");
  await expect(page.getByText("Demo Learner 2's roster record updated.")).toBeVisible();

  await openFunction(page, "lms", "advanced-grading");
  await expect(page.locator(".assignment-list").getByText("Realtime Reading Draft")).toBeVisible();

  await page.getByLabel("Notifications").click();
  await page.getByRole("button", { name: /Mark all read/i }).click();
  await expect(page.getByText("All notifications marked read.")).toBeVisible();

  await openFunction(page, "messages", "chat-panel");
  await page.getByLabel("Start video call").click();
  await expect(page.getByText(/Live call with/i)).toBeVisible();
  await page.getByRole("button", { name: "End call" }).click();
  await expect(page.getByText("Video call ended.")).toBeVisible();
});

test("keeps workspace-style services passive in the LMS background", async ({ page }) => {
  await loginAs(page, "teacher", "LMS");
  await openFunction(page, "lms", "background-services");
  const services = page.locator(".background-services");
  await expect(services.getByRole("heading", { name: "Background Services" })).toBeVisible();
  await expect(services.getByText("Runs quietly behind LMS work")).toBeVisible();
  await expect(services.getByText("Workspace sync")).toBeVisible();
  await expect(services.getByText("File handling")).toBeVisible();
  await expect(services.getByText("Notification routing")).toBeVisible();
  await expect(services.getByText("Calendar bridge")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Workspace Integration" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "File Handling" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Organized Notifications" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Offline Sync Queue" })).toHaveCount(0);
});

test("integrates every workspace into the platform operating system", async ({ page }) => {
  await loginAs(page);
  await openFunction(page, "state-admin", "unified-school-os");
  await expect(page.locator("#unified-school-os").getByRole("heading", { name: "Unified School Operating System" })).toBeVisible();
  const hub = page.locator(".unified-os-panel");
  const modules = hub.locator(".unified-os-grid");
  await expect(modules.getByRole("button", { name: /LMS/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Students/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Teachers/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Parents/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Messages/i })).toBeVisible();
  await expect(modules.getByRole("button", { name: /Community/i })).toBeVisible();
  await expect(hub.getByText("Students + LMS")).toBeVisible();
  await expect(hub.getByText("Teachers + Classes")).toBeVisible();
  await expect(hub.getByText("Parents + Messages")).toBeVisible();
  await expect(hub.getByText("Admin + Community")).toBeVisible();

  await modules.getByRole("button", { name: /Messages/i }).click();
  await expectRoutePage(page, "messages");
  await expect(page.locator("#function-page-title")).toHaveText("Conversation inbox");
});

test("runs production launch controls with backend-ready filler data", async ({ page }) => {
  await loginAs(page);
  await openFunction(page, "state-admin", "login-gateway");
  let launch = page.locator(".function-page-stage");
  await expect(launch.getByRole("heading", { name: "Public Login Gateway" })).toBeVisible();

  await launch.locator("#backend-provider").selectOption("Firebase");
  await expect(page.getByText("Firebase selected as backend provider.")).toBeVisible();

  await launch.getByRole("button", { name: /Backend Ready/i }).click();
  await expect(page.getByText("Backend-ready mode enabled.")).toBeVisible();

  await openFunction(page, "state-admin", "database-blueprint");
  launch = page.locator(".function-page-stage");
  await launch.getByRole("button", { name: /Provision mock schema/i }).click();
  await expect(page.getByText("Database blueprint marked ready.")).toBeVisible();

  await openFunction(page, "state-admin", "admin-onboarding");
  launch = page.locator(".function-page-stage");
  await launch.getByPlaceholder("Invite user name").fill("Launch Teacher");
  await launch.locator("#onboarding-user-role").selectOption("Teacher");
  await launch.getByRole("button", { name: /Invite/i }).click();
  await expect(page.getByText("Launch Teacher invited as Teacher.")).toBeVisible();

  await openFunction(page, "state-admin", "notification-delivery");
  launch = page.locator(".function-page-stage");
  await launch.getByRole("button", { name: /Send test batch/i }).click();
  await expect(page.getByText("Notification delivery test completed.")).toBeVisible();

  await openFunction(page, "state-admin", "platform-file-uploads");
  await expect(page.locator("#platform-file-uploads").getByRole("heading", { name: "File Uploads" })).toBeVisible();
  await openFunction(page, "state-admin", "security-checklist");
  await expect(page.locator("#security-checklist").getByRole("heading", { name: "Privacy & Security" })).toBeVisible();
  await openFunction(page, "state-admin", "deployment-pipeline");
  await expect(page.locator("#deployment-pipeline").getByRole("heading", { name: "Deployment Pipeline" })).toBeVisible();
});

test("lets global administrators preview a role and safely return", async ({ page }) => {
  await loginAs(page, "global-admin");
  await openFunction(page, "state-admin", "role-control-center");
  const teacherCard = page.locator(".user-role-card").filter({ hasText: "Demo Teacher" });
  await teacherCard.getByRole("button", { name: /Preview as this user/i }).click();
  await expect(page.getByText(/Previewing as/)).toBeVisible();
  await expectRoutePage(page, "teacher");
  await expect(page.getByRole("link", { name: /State Admin/i })).toHaveCount(0);
  await page.getByRole("button", { name: /Return to Global Admin/i }).click();
  await expect(page.getByRole("heading", { name: "Tenant Governance" })).toBeVisible();
  await expect(page.getByText("Returned to Global Admin.")).toBeVisible();
});

test("supports student assignment submission and teacher feedback", async ({ page }) => {
  await loginAs(page, "student");
  await openFunction(page, "student", "student-assignments");
  const assignment = page.locator(".student-assignment-work").first();
  await assignment.getByLabel("Written response").fill("My evidence-based response for teacher review.");
  await assignment.getByRole("button", { name: /Submit assignment/i }).click();
  await expect(page.getByText(/submitted\./i)).toBeVisible();

  await page.getByLabel("Sign out").click();
  await page.getByLabel("School email or username").fill("teacher");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await openFunction(page, "teacher", "learning-operations");
  const gradingRow = page.locator("[data-return-submission]").filter({ hasText: "My evidence-based response" });
  await gradingRow.getByLabel("Score").fill("92");
  await gradingRow.getByLabel("Feedback").fill("Strong evidence. Add one more source next time.");
  await gradingRow.getByRole("button", { name: /Return/i }).click();
  await expect(page.getByText(/returned to/i)).toBeVisible();
});

test("applies accessibility, language, and notification preferences", async ({ page }) => {
  await loginAs(page, "student");
  await page.getByLabel("Settings").click();
  await page.getByLabel("Language").selectOption("Spanish");
  await expect(page.getByRole("heading", { name: "Configuración" })).toBeVisible();
  await page.getByLabel("Tamaño del texto").selectOption("Large");
  await expect(page.locator(".app")).toHaveClass(/font-large/);
  await page.getByLabel("Dyslexia-friendly type").check();
  await expect(page.locator(".app")).toHaveClass(/dyslexia-friendly/);
  await page.getByLabel("SMS").check();
  await page.getByRole("button", { name: /Enviar notificación de prueba/i }).click();
  await expect(page.getByText(/Test notification added/i)).toBeVisible();
});

test("runs tenant, security, backup, notification, and monitoring operations", async ({ page }) => {
  await loginAs(page, "global-admin");
  await openFunction(page, "state-admin", "operations-tenants");
  const operations = page.locator(".operations-command-center");
  await expect(operations.getByRole("heading", { name: "Platform Operations Center" })).toBeVisible();
  await operations.getByRole("button", { name: /Test isolation/i }).click();
  await expect(page.getByText(/Tenant isolation test passed/i)).toBeVisible();
  await operations.getByRole("button", { name: "Verify" }).last().click();
  await expect(page.getByText(/DNS and SSL are verified/i)).toBeVisible();

  await operations.getByRole("tab", { name: "Security & backups" }).click();
  await expect(page).toHaveURL(/#state-admin\/operations-security$/);
  await operations.getByLabel("Require MFA for administrators").uncheck();
  await expect(page.getByText("Security policy updated.")).toBeVisible();
  await operations.getByRole("button", { name: "Test restore" }).click();
  await expect(page.getByText(/Restore drill passed/i)).toBeVisible();

  await operations.getByRole("tab", { name: "Notifications" }).click();
  await expect(page).toHaveURL(/#state-admin\/operations-notifications$/);
  await operations.getByPlaceholder("New template name").fill("Attendance follow-up");
  await operations.getByRole("button", { name: "Add template" }).click();
  await expect(page.getByText("Attendance follow-up template created.")).toBeVisible();

  await operations.getByRole("tab", { name: "Monitoring" }).click();
  await expect(page).toHaveURL(/#state-admin\/operations-monitoring$/);
  await operations.getByRole("button", { name: "Run checks" }).click();
  await expect(page.getByText("All production service checks passed.")).toBeVisible();
  await operations.getByRole("button", { name: /Install EduConnect/i }).click();
  await expect(page.getByText(/ready for offline use/i)).toBeVisible();
});

test("imports enrollment data and exports standards-based grades", async ({ page }) => {
  await loginAs(page, "school-admin");
  await openFunction(page, "school-admin", "enrollment-center");
  const enrollment = page.locator(".enrollment-center-panel");
  await enrollment.locator("#enrollment-file").setInputFiles({ name: "new-students.csv", mimeType: "text/csv", buffer: Buffer.from("student,guardian\nA Student,A Guardian\nB Student,B Guardian") });
  await enrollment.getByRole("button", { name: /Validate and import/i }).click();
  await expect(page.getByText("2 enrollment records validated and imported.")).toBeVisible();
  await expect(enrollment.getByText("new-students.csv")).toBeVisible();

  await openFunction(page, "teacher", "standards-gradebook");
  const gradebook = page.locator(".standards-gradebook-panel");
  await expect(gradebook.getByRole("heading", { name: "Standards Gradebook" })).toBeVisible();
  await gradebook.locator("[data-gradebook-weight]").first().fill("45");
  await gradebook.locator("[data-gradebook-weight]").first().blur();
  await expect(page.getByText("Gradebook category weights updated.")).toBeVisible();
  await gradebook.getByRole("button", { name: /Export to SIS/i }).click();
  await expect(page.getByText("Gradebook exported to the SIS.")).toBeVisible();
});

test("shows a family weekly summary and installable PWA metadata", async ({ page }) => {
  await loginAs(page, "parent");
  await openFunction(page, "parent", "family-summary");
  const summary = page.locator(".family-summary-panel");
  await expect(summary.getByRole("heading", { name: "This Week at a Glance" })).toBeVisible();
  await summary.getByRole("button", { name: /Send summary now/i }).click();
  await expect(page.getByText("Weekly family summary queued.")).toBeVisible();
  const manifestHref = await page.locator('link[rel="manifest"]').getAttribute("href");
  const manifestUrl = new URL(manifestHref, page.url());
  const manifest = await page.request.get(manifestUrl.href);
  expect(manifest.ok()).toBeTruthy();
  expect((await manifest.json()).display).toBe("standalone");
  const worker = await page.request.get(new URL("service-worker.js", manifestUrl).href);
  expect(worker.ok()).toBeTruthy();
});

test("operates provider readiness, SIS sync, background jobs, and a synthetic sandbox", async ({ page }) => {
  await loginAs(page, "global-admin");
  await openFunction(page, "state-admin", "operations-services");
  const operations = page.locator(".operations-command-center");

  const oneRoster = operations.locator(".integration-operation-card").filter({ hasText: "OneRoster 1.2" });
  await oneRoster.getByRole("button", { name: "Test", exact: true }).click();
  await expect(page.getByText("OneRoster 1.2 is ready.")).toBeVisible();
  await oneRoster.getByRole("button", { name: "Sync now" }).click();
  await expect(page.getByText("OneRoster 1.2 synchronized successfully.")).toBeVisible();

  await operations.getByRole("tab", { name: "Jobs & recovery" }).click();
  await expect(page).toHaveURL(/#state-admin\/operations-jobs$/);
  const analyticsJob = operations.locator(".job-row").filter({ hasText: "Privacy-safe analytics rollup" });
  await analyticsJob.getByRole("button", { name: "Run now" }).click();
  await expect(page.getByText("Privacy-safe analytics rollup completed.")).toBeVisible();
  await expect(analyticsJob.getByText("Completed", { exact: true })).toBeVisible();

  await operations.getByRole("tab", { name: "Launch & review" }).click();
  await expect(page).toHaveURL(/#state-admin\/operations-launch$/);
  await operations.getByRole("button", { name: "Create sandbox" }).click();
  await expect(page.getByText(/ready with synthetic data only/i)).toBeVisible();
  await expect(operations.getByText("Active", { exact: true }).first()).toBeVisible();
});

test("previews an academic rollover and manages an intervention without exposing a small cohort", async ({ page }) => {
  await loginAs(page, "school-admin");
  await openFunction(page, "school-admin", "school-success-center");
  const continuity = page.locator(".school-success-panel");
  await continuity.getByRole("button", { name: "Preview rollover" }).click();
  await expect(continuity.getByText("Preview ready")).toBeVisible();
  await continuity.getByRole("button", { name: "Create new year" }).click();
  await expect(page.getByText(/2026–2027 was created/i)).toBeVisible();
  await expect(continuity.getByText("Archived", { exact: true })).toBeVisible();

  await openFunction(page, "school-admin", "intervention-center");
  const interventions = page.locator(".intervention-center-panel");
  await interventions.getByLabel("Support area").fill("Attendance support");
  await interventions.getByLabel("Next review").fill("2026-09-15");
  await interventions.getByLabel("Goal and supports").fill("Weekly check-ins with an attendance goal of 95 percent.");
  await interventions.getByRole("button", { name: /Create support plan/i }).click();
  await expect(page.getByText(/Support plan created/i)).toBeVisible();
  await expect(interventions.getByText("Attendance support")).toBeVisible();

  await openFunction(page, "school-admin", "school-success-center");
  const refreshedContinuity = page.locator(".school-success-panel");
  await refreshedContinuity.getByRole("button", { name: "Refresh school analytics" }).click();
  await expect(page.getByText("Analytics refreshed; small cohorts remain hidden.")).toBeVisible();
  await expect(refreshedContinuity.getByText(/Not shown—fewer than 5 learners/i).first()).toBeVisible();
});

test("supports multilingual chrome and keyboard navigation across operations tabs", async ({ page }) => {
  await loginAs(page, "global-admin");
  await page.getByLabel("Settings").click();
  await page.getByLabel("Language").selectOption("French");
  await expect(page.getByRole("heading", { name: "Paramètres" })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await page.getByLabel("Langue").selectOption("Haitian Creole");
  await expect(page.getByRole("heading", { name: "Anviwònman" })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "ht");
  await page.getByLabel("Fèmen Anviwònman").click();

  await openFunction(page, "state-admin", "operations-tenants");
  const firstTab = page.getByRole("tab", { name: "Tenants & domains" });
  await firstTab.focus();
  await firstTab.press("ArrowRight");
  await expect(page).toHaveURL(/#state-admin\/operations-security$/);
  await expect(page.getByRole("tab", { name: "Security & backups" })).toBeFocused();
  await expect(page.getByRole("tabpanel", { name: "Security & backups" })).toBeVisible();
});
