type ErrorLike = {
  code?: unknown;
  userMessage?: unknown;
  response?: {
    status?: unknown;
  };
};

const isErrorLike = (error: unknown): error is ErrorLike =>
  typeof error === "object" && error !== null;

export const getErrorCode = (error: unknown): string | undefined => {
  if (!isErrorLike(error) || typeof error.code !== "string") return undefined;
  return error.code;
};

export const getHttpStatus = (error: unknown): number | undefined => {
  if (!isErrorLike(error) || typeof error.response?.status !== "number") return undefined;
  return error.response.status;
};

export const getUserMessage = (error: unknown, fallback: string): string => {
  if (!isErrorLike(error) || typeof error.userMessage !== "string") return fallback;
  return error.userMessage;
};
