export const EDUCATION_PRODUCTION_HOST = "educationalsystem.fieldserviceit.com";
export const EDUCATION_API_ORIGIN = "https://api.educationalsystem.fieldserviceit.com";

export function resolveEducationApiBase(hostname, runtimeOverride = "", environmentBase = "") {
  if (hostname === EDUCATION_PRODUCTION_HOST) return EDUCATION_API_ORIGIN;
  return runtimeOverride || environmentBase || "";
}
