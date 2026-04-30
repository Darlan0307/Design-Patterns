import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
};

SyntaxHighlighter.registerLanguage("typescript", typescript);

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="max-w-full overflow-hidden rounded-lg border border-line bg-[#fbf7ee]">
      <SyntaxHighlighter
        language="typescript"
        style={oneLight}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "#fbf7ee",
          fontSize: "0.86rem",
          lineHeight: 1.65,
        }}
        codeTagProps={{
          style: {
            fontFamily:
              '"JetBrains Mono", "Cascadia Code", "SFMono-Regular", Consolas, monospace',
          },
        }}
        wrapLongLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
