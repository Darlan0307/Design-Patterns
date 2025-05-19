import { jsPDF } from "jspdf";

export class SalesReportGeneratorJSpdf {
  generate(): void {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);

    doc.setFillColor(230, 230, 230);
    doc.rect(20, 40, 75, 25, "F");

    doc.setFillColor(0, 150, 0);
    doc.circle(150, 87.5, 12.5, "F");

    const fileName = new Date().getTime() + "-invalid.pdf";

    doc.save(fileName);
  }
}

/*
- Implementação direta fere alguns princípios da programação orientada a objetos

- Temos que programar focado em abstrações (interfaces)

- Dificuldade em realizar testes
*/
