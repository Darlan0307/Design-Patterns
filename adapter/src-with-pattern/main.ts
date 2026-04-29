import { SalesReportGenerator } from "./generators/sales-report-generator";
import { JSPdfAdapter } from "./services/external/jspdf-adapter";
import { PDFLibAdapter } from "./services/external/pdflib-adapter";

const jSPdfAdapter = new JSPdfAdapter();
const pdfLibAdapter = new PDFLibAdapter();

async function main(): Promise<void> {
  // Agora temos que informar qual serviço vamos usar, e não importa qual vai ser porque todos devem seguir o mesmo contrato (interface)
  const salesReportGeneratorJSpdf = new SalesReportGenerator(jSPdfAdapter);
  await salesReportGeneratorJSpdf.generate();

  const salesReportGeneratorPDFLib = new SalesReportGenerator(pdfLibAdapter);
  await salesReportGeneratorPDFLib.generate();
}

main();
