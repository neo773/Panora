import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export type OAuth = {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
};

export type RateLimit = {
  ttl: string;
  limit: string;
};

//for providers secret it is of the form
// get{provider_name}{vertical_name}Secret
@Injectable()
export class EnvironmentService {
  constructor(private configService: ConfigService) {}

  getEnvMode(): string {
    return this.configService.get<string>('ENV');
  }
  getSentryDsn(): string {
    return this.configService.get<string>('SENTRY_DSN');
  }
  getDistributionMode(): string {
    return this.configService.get<string>('DISTRIBUTION');
  }
  getDatabaseURL(): string {
    return this.configService.get<string>('DATABASE_URL');
  }
  getOAuthRredirectBaseUrl(): string {
    return this.configService.get<string>('OAUTH_REDIRECT_BASE');
  }
  getRedisHost(): string {
    return this.configService.get<string>('REDIS_HOST');
  }

  getCryptoKey(): string {
    return this.configService.get<string>('ENCRYPT_CRYPTO_SECRET_KEY');
  }

  getThrottleConfig(): RateLimit {
    return {
      ttl: this.configService.get<string>('THROTTLER_TTL'),
      limit: this.configService.get<string>('THROTTLER_LIMIT'),
    };
  }
}
