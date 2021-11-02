import {
  Injectable,
  CallHandler,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';
import type { Observable } from 'rxjs';
import { captureException } from '@sentry/nextjs';

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  public intercept(
    _context: ExecutionContext,
    next: CallHandler
  ): Observable<any> {
    return next.handle().pipe(tap({ error: captureException }));
  }
}
