
import jsPDF from "jspdf";

import * as pdfjsLib from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.entry";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

/*
Compress a PDF by turning each page to JPEG and reassembling a PDF -Isabella Roman 2025
*/
export async function compressPdfToBlob(
  file,
  { jpegQuality = 0.6, maxDim = 1600, onProgress } = {}
) {
  const arrayBuffer =
    file instanceof ArrayBuffer ? file : await file.arrayBuffer();

  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const pageCount = pdf.numPages;

  let doc = null;

  for (let i = 1; i <= pageCount; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 1 });

    const longest = Math.max(viewport.width, viewport.height);
    const scale = clamp(maxDim / longest, 0.1, 4);
    const scaled = page.getViewport({ scale });

    // Render to canvas
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(scaled.width);
    canvas.height = Math.round(scaled.height);
    const ctx = canvas.getContext("2d", { alpha: false });

    await page.render({ canvasContext: ctx, viewport: scaled }).promise;

    const imgDataUrl = canvas.toDataURL("image/jpeg", jpegQuality);

    if (!doc) {
      doc = new jsPDF({
        unit: "px",
        format: [canvas.width, canvas.height],
        orientation: canvas.width >= canvas.height ? "l" : "p",
        compress: true,
      });
    } else {
      doc.addPage(
        [canvas.width, canvas.height],
        canvas.width >= canvas.height ? "l" : "p"
      );
      doc.setPage(i);
    }

    doc.addImage(imgDataUrl, "JPEG", 0, 0, canvas.width, canvas.height, undefined, "FAST");

    if (onProgress) onProgress(i / pageCount);
  }

  if (!doc) {
    return new Blob([arrayBuffer], { type: "application/pdf" });
  }

  return doc.output("blob");
}

export function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
