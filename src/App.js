import React, { useState, useRef } from "react";
import "./App.css";
import { PDFDocument, rgb } from "pdf-lib";
import download from "downloadjs"; // Import downloadjs
import { userData } from "./Components/UserData/UserData";

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const iframeRef = useRef(null);

  // Function to fill in the PDF
  const fillPdfForm = async (shouldDownload, shouldView) => {
    try {
      // Fetch the existing PDF (make sure the path is correct)
      const existingPdfBytes = await fetch(
        process.env.PUBLIC_URL +
          "./asserts/Copy of Copy of REport Card 2E-11Feb2024 (19).pdf"
      ).then((res) => res.arrayBuffer());

      // Load the PDFDocument
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Load the image from the URL
      const imageUrl = userData.profileIMG;
      const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());

      // Embed the image in the PDF
      const image = await pdfDoc.embedJpg(imageBytes);

      // Get the first page
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const secondPage = pages[1];
      const thirdPage = pages[2];

      // const { width, height } = image.scale(0.15); // Adjust scale as needed
      firstPage.drawImage(image, {
        x: 234, // Adjust x position as needed
        y: 356, // Adjust y position as needed
        width: 134,
        height: 175,
      });

      // Define text and positions (x, y)
      firstPage.drawText(userData.name, {
        x: 210,
        y: 303,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(userData.section, {
        x: 490,
        y: 303,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(userData.admissionNumber, {
        x: 196,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(userData.rollNumber, {
        x: 298,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(userData.fatherName, {
        x: 202,
        y: 234,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(userData.motherName, {
        x: 205,
        y: 164,
        size: 10,
        color: rgb(0, 0, 0),
      });

      secondPage.drawText(`${userData.principalDesk.slice(0, 90)}-`, {
        x: 85,
        y: 720,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${userData.principalDesk.slice(90, 170)}-`, {
        x: 85,
        y: 700,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${userData.principalDesk.slice(170, 260)}-`, {
        x: 85,
        y: 680,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${userData.principalDesk.slice(260, 340)}-`, {
        x: 85,
        y: 660,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${userData.principalDesk.slice(340, 420)}.`, {
        x: 85,
        y: 640,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(userData.english.first.language, {
        x: 295,
        y: 707,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(userData.english.first.written, {
        x: 295,
        y: 692,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${userData.english.first.description.slice(0, 45)}`, {
        x: 348,
        y: 707,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        `${userData.english.first.description.slice(45, 89)}`,
        {
          x: 348,
          y: 693,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(userData.english.second.word, {
        x: 295,
        y: 662,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(userData.english.second.Articular, {
        x: 295,
        y: 647,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(userData.english.second.proficiency, {
        x: 295,
        y: 632,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        `${userData.english.second.description.slice(0, 45)}`,
        {
          x: 348,
          y: 662,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        `${userData.english.second.description.slice(45, 89)}`,
        {
          x: 348,
          y: 648,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(userData.hindi.first.language, {
        x: 295,
        y: 465,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(userData.hindi.first.written, {
        x: 295,
        y: 450,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${userData.hindi.first.description.slice(0, 45)}`, {
        x: 348,
        y: 465,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${userData.hindi.first.description.slice(45, 89)}`, {
        x: 348,
        y: 451,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(userData.hindi.second.word, {
        x: 295,
        y: 420,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(userData.hindi.second.Articular, {
        x: 295,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${userData.hindi.second.description.slice(0, 45)}`, {
        x: 348,
        y: 420,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${userData.hindi.second.description.slice(45, 89)}`, {
        x: 348,
        y: 407,
        size: 10,
        color: rgb(0, 0, 0),
      });

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save();

      if (shouldDownload) {
        // Use downloadjs to trigger the download
        download(pdfBytes, "updated.pdf", "application/pdf");
      }

      if (shouldView) {
        // Create a Blob from the PDF bytes
        const blob = new Blob([pdfBytes], { type: "application/pdf" });

        // Generate a URL for the Blob and set it to display the PDF in the iframe
        const pdfUrl = URL.createObjectURL(blob);
        setPdfUrl(pdfUrl);

        // Update the iframe src to display the PDF
        if (iframeRef.current) {
          iframeRef.current.src = pdfUrl;
        }
      }
    } catch (error) {
      console.error("Error filling PDF form:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Click the button below to fill the PDF and view the updated version
          live.
        </p>
        <button
          onClick={() => {
            fillPdfForm(false, true); // View the PDF
          }}
        >
          Fill and View PDF
        </button>
        <button
          onClick={() => {
            fillPdfForm(true, false); // Download the PDF
          }}
        >
          Fill and Download PDF
        </button>
        <iframe
          ref={iframeRef}
          src={pdfUrl}
          style={{ width: "100%", height: "700px", marginTop: "20px" }}
          title="PDF Viewer"
        ></iframe>
      </header>
    </div>
  );
}

export default App;
