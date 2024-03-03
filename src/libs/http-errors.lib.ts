class HttpError extends Error {
  code: string;
  status: number;
  meta?: any;

  constructor(message: string, code: string, status: number, meta?: any) {
    super(message);
    this.code = code;
    this.status = status;
    this.meta = meta;
    Object.setPrototypeOf(this, new.target.prototype); // Restore prototype chain
  }
}

export class HttpErrors {
  static isHttpError(error: any): error is HttpError {
    return error instanceof HttpError;
  }

  static BadRequest = class extends HttpError {
    constructor({
      message,
      code,
      meta,
    }: {
      message: string;
      code: string;
      meta?: any;
    }) {
      super(message, code, 400, meta);
    }
  };

  static Unauthorized = class extends HttpError {
    constructor({
      message,
      code,
      meta,
    }: {
      message: string;
      code: string;
      meta?: any;
    }) {
      super(message, code, 401, meta);
    }
  };

  static Forbidden = class extends HttpError {
    constructor({
      message,
      code,
      meta,
    }: {
      message: string;
      code: string;
      meta?: any;
    }) {
      super(message, code, 403, meta);
    }
  };

  static NotFound = class extends HttpError {
    constructor({
      message,
      code,
      meta,
    }: {
      message: string;
      code: string;
      meta?: any;
    }) {
      super(message, code, 404, meta);
    }
  };

  static MethodNotAllowed = class extends HttpError {
    constructor({
      message,
      code,
      meta,
    }: {
      message: string;
      code: string;
      meta?: any;
    }) {
      super(message, code, 405, meta);
    }
  };

  static Conflict = class extends HttpError {
    constructor({
      message,
      code,
      meta,
    }: {
      message: string;
      code: string;
      meta?: any;
    }) {
      super(message, code, 409, meta);
    }
  };

  static InternalServerError = class extends HttpError {
    constructor({
      message,
      code,
      meta,
    }: {
      message: string;
      code: string;
      meta?: any;
    }) {
      super(message, code, 500, meta);
    }
  };

  static NotImplemented = class extends HttpError {
    constructor({
      message,
      code,
      meta,
    }: {
      message: string;
      code: string;
      meta?: any;
    }) {
      super(message, code, 501, meta);
    }
  };
}
