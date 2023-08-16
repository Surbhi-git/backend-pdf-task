import { Module } from '@nestjs/common';
import { PdfController } from './controllers';
import { PdfService } from './services';
import { PdfModuleConstants } from './constants';
import { UserRepository } from './repositories';
import { GreetUser } from './commands';

@Module({
  imports: [],
  controllers: [PdfController],
  providers: [
    PdfService,
    GreetUser,
    { provide: PdfModuleConstants.pdfRepo, useClass: UserRepository },
  ],
})
export class PdfModule {}
