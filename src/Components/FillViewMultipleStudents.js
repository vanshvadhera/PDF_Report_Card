import React, { useState, useRef } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import download from "downloadjs";
import { userData } from "./UserData/UserData";

function FillMultiplae() {
  const [selectedStudent, setSelectedStudent] = useState(userData[0]); // Default to the first student
  const [pdfUrl, setPdfUrl] = useState(null);
  const iframeRef = useRef(null);

  const handleStudentChange = (event) => {
    const selectedStudentIndex = event.target.value;
    setSelectedStudent(userData[selectedStudentIndex]);
  };

  const fillPdfForm = async (student, pdfDoc) => {
    try {
      const imageUrl = student.profileIMG;
      const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());

      const teacherSignUrl =
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Virat_Kohli_Signature.jpg";
      const teacherSignBytes = await fetch(teacherSignUrl).then((res) =>
        res.arrayBuffer()
      );

      const principalSignUrl =
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Virat_Kohli_Signature.jpg";
      const principalSignBytes = await fetch(principalSignUrl).then((res) =>
        res.arrayBuffer()
      );

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSignImage = await pdfDoc.embedJpg(teacherSignBytes);
      const principalSignImage = await pdfDoc.embedJpg(principalSignBytes);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      // Insert data dynamically from the student's record
      firstPage.drawImage(image, {
        x: 234,
        y: 356,
        width: 134,
        height: 175,
      });
      firstPage.drawText(student.name, {
        x: 210,
        y: 303,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.section, {
        x: 490,
        y: 303,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.admissionNumber, {
        x: 196,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.rollNumber, {
        x: 298,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.fatherName, {
        x: 202,
        y: 234,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.motherName, {
        x: 205,
        y: 164,
        size: 10,
        color: rgb(0, 0, 0),
      });

      // More drawing based on the student's data...
    } catch (error) {
      console.error("Error filling PDF form:", error);
    }
  };

  const generatePdfForAllStudents = async () => {
    try {
      const mergedPdf = await PDFDocument.create();

      for (let student of userData) {
        const existingPdfBytes = await fetch(
          process.env.PUBLIC_URL +
            "./asserts/Copy of Copy of REport Card 2E-11Feb2024 (19).pdf"
        ).then((res) => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        await fillPdfForm(student, pdfDoc);

        const pdfBytes = await pdfDoc.save();
        const singlePdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(
          singlePdf,
          singlePdf.getPageIndices()
        );

        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      download(
        mergedPdfBytes,
        "all-students-report-cards.pdf",
        "application/pdf"
      );
    } catch (error) {
      console.error("Error generating PDF for all students:", error);
    }
  };

  const fillAndDownloadSinglePdf = async (shouldDownload, shouldView) => {
    try {
      const existingPdfBytes = await fetch(
        process.env.PUBLIC_URL +
          "./asserts/Copy of Copy of REport Card 2E-11Feb2024 (19).pdf"
      ).then((res) => res.arrayBuffer());

      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      await fillPdfForm(selectedStudent, pdfDoc);

      if (shouldDownload) {
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, "filled-form.pdf", "application/pdf");
      }

      if (shouldView) {
        const pdfBytes = await pdfDoc.save();
        const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfUrl);
        if (iframeRef.current) {
          iframeRef.current.src = pdfUrl;
        }
      }
    } catch (error) {
      console.error("Error filling PDF form:", error);
    }
  };

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h1>Student Report Card Generator</h1>
        <select onChange={handleStudentChange}>
          {userData.map((student, index) => (
            <option key={index} value={index}>
              {student.name}
            </option>
          ))}
        </select>

        <button onClick={() => fillAndDownloadSinglePdf(true, false)}>
          Download PDF
        </button>
        <button onClick={() => fillAndDownloadSinglePdf(false, true)}>
          View PDF
        </button>
        <button onClick={generatePdfForAllStudents}>Download All PDFs</button>
      </div>
      {pdfUrl && (
        <iframe ref={iframeRef} title="PDF Preview" width="100%" height="800" />
      )}
    </div>
  );
}

export default FillMultiplae;
