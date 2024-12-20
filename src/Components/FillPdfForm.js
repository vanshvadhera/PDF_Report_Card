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

  const fillPdfForm = async (shouldDownload, shouldView) => {
    try {
      const existingPdfBytes = await fetch(
        process.env.PUBLIC_URL +
          "./asserts/Copy of Copy of REport Card 2E-11Feb2024 (19).pdf"
      ).then((res) => res.arrayBuffer());

      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Load the image from the selected student's profileIMG
      const imageUrl = selectedStudent.profileIMG;
      const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());

      const teacherSignUrl =
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Virat_Kohli_Signature.jpg";
      const teacherSignBytes = await fetch(teacherSignUrl).then((res) =>
        res.arrayBuffer()
      );

      const principlaSignUrl =
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Virat_Kohli_Signature.jpg";
      const principalSignBytes = await fetch(principlaSignUrl).then((res) =>
        res.arrayBuffer()
      );

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSignImage = await pdfDoc.embedJpg(teacherSignBytes);
      const principalSignImage = await pdfDoc.embedJpg(principalSignBytes);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const secondPage = pages[1];
      const thirdPage = pages[2];
      const fourthPage = pages[3];

      // Insert data dynamically from the selected student's record
      firstPage.drawImage(image, {
        x: 234,
        y: 356,
        width: 134,
        height: 175,
      });
      firstPage.drawText(selectedStudent.name, {
        x: 210,
        y: 303,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(selectedStudent.section, {
        x: 490,
        y: 303,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(selectedStudent.admissionNumber, {
        x: 196,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(selectedStudent.rollNumber, {
        x: 298,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(selectedStudent.fatherName, {
        x: 202,
        y: 234,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(selectedStudent.motherName, {
        x: 205,
        y: 164,
        size: 10,
        color: rgb(0, 0, 0),
      });

      // More drawing based on the student's data...

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

        <button onClick={() => fillPdfForm(true, false)}>Download PDF</button>
        <button onClick={() => fillPdfForm(false, true)}>View PDF</button>
      </div>
      {pdfUrl && (
        <iframe ref={iframeRef} title="PDF Preview" width="100%" height="800" />
      )}
    </div>
  );
}

export default FillMultiplae;
