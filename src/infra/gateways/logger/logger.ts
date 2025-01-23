import type { LogFailure, LogSuccess, LogFatal } from '@/domain/contracts/gateways'
import LokiTransport from 'winston-loki'
import winston, { format } from 'winston'
import { AxiosError } from 'axios'

export class Logger implements LogFailure, LogSuccess {
  logger: winston.Logger
  constructor (appName: string, lokiUrl?: string) {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    this.logger = winston.createLogger({
      level: 'info',
      format: format.combine(
        format.errors({ stack: true }),
        format.timestamp(),
        format.colorize(),
        format.json(),
        format.prettyPrint({
          colorize: true
        })
      ),
      transports: [
        new winston.transports.File({
          filename: `logger/${day}-${month}-${year}error.log`,
          level: 'error'
        }),
        new winston.transports.File({ filename: `logger/${day}-${month}-${year}combined.log` })
      ]
    })
    if (lokiUrl){
      this.logger.add(
        new LokiTransport({
          host: lokiUrl,
          labels: {
            job: `microservice-${appName}`
          }
        })
      )
    }
    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new winston.transports.Console()
      )
    }
  }

  error (input: Error, data?: any): void {
    if (input instanceof AxiosError) {
      input = input.response?.data.error
    }

    if (!(input instanceof Error)){
      this.logger.error(new Error(input), [new Error(input), input, data])
      return
    }

    this.logger.error(input, [input, data])
  }

  fatal (message: LogFatal.Input, data?: any): void {
    this.logger.error(message, [message, data])
  }

  log ({ message }: LogSuccess.Input, data?: any): void {
    this.logger.info('info', [message, data])
  }
}
