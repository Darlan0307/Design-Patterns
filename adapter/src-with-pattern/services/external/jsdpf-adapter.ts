import { jsPDF } from "jspdf";
import { PdfAdapter } from "../interfaces/pdf-adapter";

export class JSPdfAdapter implements PdfAdapter {
  private doc: jsPDF;
  constructor() {
    this.doc = new jsPDF();
  }

  generate(fileName: string, content: string): void {
    // implementar regras e novos parâmetros para montar o pdf

    this.doc.text(content, 10, 10);

    this.doc.setFillColor(230, 230, 230);
    this.doc.rect(20, 40, 75, 25, "F");

    this.doc.setFillColor(0, 150, 0);
    this.doc.circle(150, 87.5, 12.5, "F");

    this.doc.save(fileName);
  }
}
