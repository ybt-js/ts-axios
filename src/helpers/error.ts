import { AxiosRequestConfig, AxiosResponse } from '../types'

class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | number | null
  request?: any
  response?: AxiosResponse | null

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | number | null,
    request?: any,
    response?: AxiosResponse | null
  ) {
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response || null
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | number | null,
  request?: any,
  response?: AxiosResponse | null
) {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
export { AxiosError, createError }
