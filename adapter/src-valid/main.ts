import { SalesReportGeneratorJSpdf } from "./generators/sales-report-generator-jspdf";
import { JSPdfAdapter } from "./services/external/jsdpf-adapter";
import { PDFLibAdapter } from "./services/external/pdflib-adapter";

const jSPdfAdapter = new JSPdfAdapter();
const pdfLibAdapter = new PDFLibAdapter();

// Agora temos que informar qual serviço vamos usar, e não importa qual vai ser porque todos devem seguir o mesmo contrato (interface)
const salesReportGeneratorJSpdf = new SalesReportGeneratorJSpdf(pdfLibAdapter);
salesReportGeneratorJSpdf.generate();
