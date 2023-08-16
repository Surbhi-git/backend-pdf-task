import { Request, Response, RestController } from "@libs/boat";
import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { PdfService } from "../services";

@Controller("api/pdf")
export class PdfController extends RestController {
  constructor(private pdfService: PdfService) {
    super();
  }

  @Get("/get-pdf")
  async getPdf(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const pdfData = await this.pdfService.getPdf();
      res.setHeader("Content-Type", "application/pdf");
      res.status(200).send(pdfData);
    } catch (error) {
      console.error("Error fetching PDF:", error);
      res.status(500).send("Error fetching PDF");
    }
  }

  @Post("/update-pdf")
  async savePdf(@Body() data: { pdfData: string }): Promise<void> {
    try {
      await this.pdfService.savePdf(data.pdfData);
    } catch (error) {
      throw error;
    }
  }
}
