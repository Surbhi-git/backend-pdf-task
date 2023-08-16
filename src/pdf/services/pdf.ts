import { Injectable, Inject } from "@nestjs/common";
import { UserRepositoryContract } from "../repositories";
import { ListensTo } from "@squareboat/nest-events";
import { UserSignedUp } from "../events/userSignedUp";
import { PdfModuleConstants } from "../constants";
import * as fs from "fs/promises";

@Injectable()
export class PdfService {
  constructor(
    @Inject(PdfModuleConstants.pdfRepo) private users: UserRepositoryContract
  ) {}

  async getPdf() {
    const pdfData = await fs.readFile(
      "/home/unthinkable-lap-0169/pdf-task/backend-task/example.pdf",
      "base64"
    );
    return pdfData;
  }

  async savePdf(pdfData: string): Promise<void> {
    const pdfBuffer = Buffer.from(pdfData, "base64");
    await fs.writeFile(
      "/home/unthinkable-lap-0169/pdf-task/backend-task/example.pdf",
      pdfBuffer
    );
    console.log("File updated successfully");
  }
}
