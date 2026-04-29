export interface PdfAdapter {
  generate(fileName: string, content: string): Promise<void>;
}
