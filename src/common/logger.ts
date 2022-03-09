import { Injectable } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, json } = format;

@Injectable()
export class LoggerService {
  logger = createLogger({
    level: 'debug',
    format: combine(timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS a' }), json()),
    transports: [new transports.Console()],
  });
}
