export class HttpError extends Error {
  constructor(
    public statusCode: number,
    public code: unknown,
    public message: string
  ) {
    super('Ocurrio un error al solicitar el servicio')
    this.name = 'HttpError'
  }
}
