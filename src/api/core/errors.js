import toast from "react-hot-toast";

export class ApiError extends Error {
  constructor({
    status = 500,
    message = "Something went wrong",
    errors = null,
    data = null,
  }) {
    super(message);

    this.name = "ApiError";

    this.status = status;
    this.errors = errors;
    this.data = data;
  }

  get isUnauthorized() {
    return this.status === 401;
  }

  get isForbidden() {
    return this.status === 403;
  }

  get isNotFound() {
    return this.status === 404;
  }

  get isValidationError() {
    return this.status === 400;
  }

  get isServerError() {
    return this.status >= 500;
  }
}

export function handleApiError(error, options = {}) {
  const message =
    error instanceof ApiError
      ? error.message
      : error?.message || "Something went wrong";

  if (error?.isUnauthorized || error?.status === 401) {
    if (!options.silent) {
      toast.error("انتهت الجلسة. يرجى تسجيل الدخول مرة أخرى.");
    }
    return;
  }

  if (error?.isValidationError || error?.status === 400) {
    if (!options.silent) {
      toast.error(message);
    }
    return;
  }

  if (error?.isServerError || error?.status >= 500) {
    if (!options.silent) {
      toast.error("حدث خطأ من الخادم. يرجى المحاولة لاحقًا.");
    }
    return;
  }

  if (!options.silent) {
    toast.error(message);
  }
}
