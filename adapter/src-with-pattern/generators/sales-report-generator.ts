import { PdfAdapter } from "../services/interfaces/pdf-adapter";

export class SalesReportGenerator {
  constructor(private pdfAdapter: PdfAdapter) {}

  async generate(): Promise<void> {
    const fileName = new Date().getTime() + "-valid.pdf";

    const content = "Hello world!";

    await this.pdfAdapter.generate(fileName, content);
  }
}

/*
- Agora não importa qual lib vamos usar, apenas que o objeto recebido sabe gerar PDF

- Podemos trocar a biblioteca sem alterar a regra do relatório

- Também podemos criar uma classe fake para realizar mocks nos testes
*/
