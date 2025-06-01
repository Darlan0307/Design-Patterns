import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";

export class SalesReportGeneratorPDFLib {
  async generate(): Promise<void> {
    const pdfDoc = await PDFDocument.create();

    const page = pdfDoc.addPage([595.28, 841.89]);
    const { width, height } = page.getSize();

    page.drawText("Hello world!", {
      x: 10,
      y: height - 10,
      size: 12,
    });

    page.drawRectangle({
      x: 20,
      y: height - 65,
      width: 75,
      height: 25,
      color: rgb(230 / 255, 230 / 255, 230 / 255),
    });

    page.drawCircle({
      x: 150,
      y: height - 87.5,
      size: 12.5,
      color: rgb(0 / 255, 150 / 255, 0 / 255),
    });

    const pdfBytes = await pdfDoc.save();

    const fileName = new Date().getTime() + "-invalid.pdf";
    fs.writeFileSync(fileName, pdfBytes);

    console.log(`PDF gerado com sucesso: ${fileName}`);
  }
}
