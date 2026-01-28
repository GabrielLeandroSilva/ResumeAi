type Props = {
    result: any
}

export function AnalyzeResult({ result }: Props) {
    if (!result) return null;

    return (
        <div className="mt-6 rounded-xl border p-5 bg-white dark:bg-gray-900">
            <h2 className="text-lg font-semibold mb-2">
                Resultado da Análise
            </h2>

            <pre className="text-sm whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                {JSON.stringify(result, null, 2)}
            </pre>
        </div>
    )
}