export interface PdfAdapter {
  generate(fileName: string, content: string): void;
}
