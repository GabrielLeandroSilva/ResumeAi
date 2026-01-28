import ReactMarkdown from "react-markdown";

type Props = {
    result: any
}

export function AnalyzeResult({ result }: Props) {
    if (!result) return null;

    const rawContent =
        result.response ||
        result.message ||
        result.result ||
        "";
    
    const formattedContent = rawContent.replace(/\n/g, "\n\n");

    return (
<div className="mt-6 rounded-xl border bg-white dark:bg-gray-900">
      <header className="border-b px-6 py-4">
        <h2 className="text-lg font-semibold">
          Análise do Currículo
        </h2>
        <p className="text-sm text-gray-500">
          Resumo gerado pela IA com base nas informações fornecidas
        </p>
      </header>

      <article className="prose prose-sm max-w-none dark:prose-invert px-6 py-5">
        <ReactMarkdown>{formattedContent}</ReactMarkdown>
      </article>
    </div>
    )
}