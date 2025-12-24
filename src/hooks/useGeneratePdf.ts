const UseGeneratePdf = async () => {
  const el = document.querySelector("#pdf-content");
  if (!el) throw new Error("Element not found: " + "#pdf-content");

  const html = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
           <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

          <title>Document</title>
          <!-- optionally include custom print CSS here -->
          <style>
          h1{ font-size: 2em; font-weight: bold; margin-bottom: 0.5em; }
          h2{ font-size: 1.5em; font-weight: bold; margin-bottom: 0.5em; }
          h3{ font-size: 1.17em; font-weight: bold; margin-bottom: 0.5em; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 1em; }
          th, td { border: 1px solid #ddd; padding: 8px; }
          th { background-color: #B4B4B4; } 
          ul { list-style-type: disc; margin-left: 1.5em; margin-bottom: 1em; }
          ol { list-style-type: decimal; margin-left: 1.5em; margin-bottom: 1em; }
          li { margin-bottom: 0.5em; }
          pre{
            padding:1rem;
            border-radius:0.75rem;
            background-color:#62748e;
            margin-block:1rem;
           }
           code{
            margin-block:1rem; 
           }
          </style>
        </head>
        <body>
          ${el.outerHTML}
        </body>
      </html>
    `;

  const resp = await fetch("/api/pdf-in-browser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      html,
    }),
  });

  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error("PDF generation failed: " + txt);
  }

  const blob = await resp.blob();
  // download
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Document.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

export default UseGeneratePdf;
