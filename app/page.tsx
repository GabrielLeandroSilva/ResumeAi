import ThemeToggle from "./components/ThemeToggle";
import { UploadForm } from "./components/UploadForm";

export default function Home() {
  return (
    <section className="space-y-4">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">
          Análise de Currículo
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Envie um texto ou um PDF para análise pela IA.
        </p>
      </header>

      <UploadForm />

    </section>
  );
}