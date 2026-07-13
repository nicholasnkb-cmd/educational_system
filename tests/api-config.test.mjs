import assert from "node:assert/strict";
import test from "node:test";
import {
  EDUCATION_API_ORIGIN,
  resolveEducationApiBase,
} from "../src/apiConfig.js";

test("production education site always uses its dedicated API", () => {
  assert.equal(
    resolveEducationApiBase(
      "educationalsystem.fieldserviceit.com",
      "https://api.fieldserviceit.com",
      "https://api.fieldserviceit.com",
    ),
    EDUCATION_API_ORIGIN,
  );
});

test("local development can use an explicit API override", () => {
  assert.equal(
    resolveEducationApiBase("localhost", "http://127.0.0.1:4573"),
    "http://127.0.0.1:4573",
  );
});
