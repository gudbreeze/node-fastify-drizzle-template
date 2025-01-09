export interface IHeaders {
  'h-Custom': string;
}

export interface IReply {
  200: { success: boolean };
  302: { url: string };
  '4xx': { error: string };
}
