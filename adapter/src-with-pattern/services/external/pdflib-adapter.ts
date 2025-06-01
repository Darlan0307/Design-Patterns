import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import { PdfAdapter } from "../interfaces/pdf-adapter";

export class PDFLibAdapter implements PdfAdapter {
  async generate(fileName: string, content: string): Promise<void> {
    // implementar regras e novos parâmetros para montar o pdf

    const pdfDoc = await PDFDocument.create();

    const page = pdfDoc.addPage([595.28, 841.89]);
    const { height } = page.getSize();

    page.drawText(content, {
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

    fs.writeFileSync(fileName, pdfBytes);

    console.log(`PDF gerado com sucesso: ${fileName}`);
  }
}
