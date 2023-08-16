import { Module } from '@nestjs/common';
import { EventModule } from '@squareboat/nest-events';
import { PdfModule } from './pdf';
import { BoatModule } from '@libs/boat';
import { ConsoleModule } from '@squareboat/nest-console';
import { ObjectionModule } from '@squareboat/nestjs-objection';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalizationModule } from '@squareboat/nestjs-localization';

@Module({
  imports: [
    ObjectionModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('db'),
      inject: [ConfigService],
    }),
    LocalizationModule.register({
      path: 'resources/lang',
      fallbackLang: 'en',
    }),
    BoatModule,
    PdfModule,
    EventModule,
    ConsoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
