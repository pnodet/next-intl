import type IntlErrorCode from './IntlErrorCode.js';

export default class IntlError extends Error {
  public readonly code: IntlErrorCode;
  public readonly originalMessage: string | undefined;

  constructor(code: IntlErrorCode, originalMessage?: string) {
    let message: string = code;
    if (originalMessage) {
      message += ': ' + originalMessage;
    }
    super(message);

    this.code = code;
    if (originalMessage) {
      this.originalMessage = originalMessage;
    }
  }
}
