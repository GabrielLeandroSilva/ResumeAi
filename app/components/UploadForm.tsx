"use client"

import { Loader2, Paperclip } from "lucide-react";
import { useRef, useState } from "react"
import { analyzePdf, analyzeText } from "../services/resumeApi";
import { AnalyzeResult } from "./AnalyzeResult";

export function UploadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [text, setText] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
    setResult(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);


    if (!text && files.length === 0) {
      setError("Informe um texto ou envie PDF");
      return;
    }

    try {
      setLoading(true);

      const response = files.length > 0 ? await analyzePdf(text, files) : await analyzeText(text);

      setResult(response);
    } catch {
      setError("Erro ao processar a análise.")
    } finally {
      setLoading(false);
    }




  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border rounded-xl p-6 bg-white dark:bg-gray-900"
      >
        <textarea
          placeholder="Cole aqui o conteúdo do currículo ou descrição..."
          value={text}
          onChange={(e) => { setText(e.target.value);  setResult(null);}  }
          className="w-full min-h-[160px] resize-none rounded-lg border px-4 py-3 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     dark:bg-gray-950 dark:border-gray-800"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-md
                         border hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Paperclip size={16} />
              Anexar PDF
            </button>

            {files.length > 0 && (
               <ul className="text-xs text-gray-500 space-y-1">
               {files.map((file, index) => (
                 <li key={index} className="truncate max-w-[260px]">
                   • {file.name}
                 </li>
               ))}
             </ul>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 text-sm rounded-md bg-blue-600 text-white
                       hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              "Analisar"
            )}
          </button>
        </div>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </form>

      <AnalyzeResult result={result} />
    </>
  )

}