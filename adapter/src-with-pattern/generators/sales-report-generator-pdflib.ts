import { PdfAdapter } from "../services/interfaces/pdf-adapter";

export class SalesReportGeneratorPDFLib {
  constructor(private pdfAdapter: PdfAdapter) {}

  async generate(): Promise<void> {
    const fileName = new Date().getTime() + "-valid.pdf";

    const content = "Hello world!";

    this.pdfAdapter.generate(fileName, content);
  }
}
