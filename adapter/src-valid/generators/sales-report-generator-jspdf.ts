import { PdfAdapter } from "../services/interfaces/pdf-adapter";

export class SalesReportGeneratorJSpdf {
  constructor(private pdfAdapter: PdfAdapter) {}

  generate(): void {
    const fileName = new Date().getTime() + "-valid.pdf";

    const content = "Hello world!";

    this.pdfAdapter.generate(fileName, content);
  }
}

/*
- Agora não importa qual vai ser a lib que vamos usar e sim que vamos receber um objeto que vai gerar o pdf

- Agora podemos criar uma classe fake para realizar o mock nos testes
*/
