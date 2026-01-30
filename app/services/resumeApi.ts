export async function analyzeText(prompt: string) {
    const response = await fetch(`/api/analyze`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
        throw new Error("Erro ao analisar o texto");
    }

    return response.json();

}

export async function analyzePdf(prompt:string, pdfs: File[]) {
    const formData = new FormData();
    formData.append('prompt', prompt);
    pdfs.forEach((pdf) => {
        formData.append('pdf', pdf);
    })

    const response = await fetch(`/api/analyze-pdf`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Erro ao analisar o PDF");
    }

    return response.json();

}

export async function analyzeHealth() {
    const response = await fetch(`/api/analyze-health`, {
        method: "GET",
        cache: "no-store",
    });

    return response.json();
}