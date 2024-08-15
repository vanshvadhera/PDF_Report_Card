import { PDFDocument, rgb } from "pdf-lib";
import download from "downloadjs"; // You may need to install this library

async function fillPdfForm() {
  // Fetch the existing PDF
  const existingPdfBytes = await fetch(
    "../../public/asserts/Copy of Copy of REport Card 2E-11Feb2024 (19).pdf"
  ).then((res) => res.arrayBuffer());

  // Load the PDFDocument
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Get the first page
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Define text and positions (x, y)
  firstPage.drawText("John Doe", {
    x: 150,
    y: 700,
    size: 12,
    color: rgb(0, 0, 0),
  });
  firstPage.drawText("Section A", {
    x: 150,
    y: 680,
    size: 12,
    color: rgb(0, 0, 0),
  });
  firstPage.drawText("123456", {
    x: 150,
    y: 660,
    size: 12,
    color: rgb(0, 0, 0),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the download of the updated PDF
  download(pdfBytes, "updated.pdf", "application/pdf");
}

fillPdfForm();
