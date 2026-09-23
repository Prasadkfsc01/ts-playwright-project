function getRequiredEnv(variableName: string): string {
  const value = process.env[variableName];

  if (!value) {
    throw new Error(`Missing required environment variable: ${variableName}`);
  }

  return value;
}

export const credentials = {
  username: getRequiredEnv("TEST_USERNAME"),
  password: getRequiredEnv("TEST_PASSWORD"),
};

export const invalidCredentials = {
  invalidPassword: "wrongPassword123",
};
