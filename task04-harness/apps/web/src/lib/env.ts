const APP_ENV_VALUES = ["local", "test", "staging", "production"] as const;

type AppEnvironment = (typeof APP_ENV_VALUES)[number];

function parseAppEnvironment(value: string | undefined): AppEnvironment {
  const resolved = value ?? "local";

  if (!APP_ENV_VALUES.includes(resolved as AppEnvironment)) {
    throw new Error(`APP_ENV must be one of: ${APP_ENV_VALUES.join(", ")}`);
  }

  return resolved as AppEnvironment;
}

function parseUrl(name: string, value: string | undefined, fallback: string): URL {
  const resolved = value ?? fallback;

  try {
    return new URL(resolved);
  } catch {
    throw new Error(`${name} must be an absolute URL`);
  }
}

export const env = Object.freeze({
  appEnv: parseAppEnvironment(process.env.APP_ENV),
  siteUrl: parseUrl("SITE_URL", process.env.SITE_URL, "http://localhost:3000"),
});
