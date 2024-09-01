import React, { useState, useRef } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
import { userData } from "./../../../UserData/UserData";
import styles from "./../PageCss.module.css";

function Class2_Term2() {
  const [selectedStudent, setSelectedStudent] = useState(userData[0]);

  //eslint-disable-next-line
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
      const secondPage = pages[1];
      const thirdPage = pages[2];
      const fourthPage = pages[3];
      const fifthPage = pages[4];
      const sixthPage = pages[5];
      const seventhPage = pages[6];
      const eighthPage = pages[7];
      const ninthPage = pages[8];
      const tenthPage = pages[9];

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

      secondPage.drawText(`${student.principalDesk.slice(0, 90)}-`, {
        x: 85,
        y: 720,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${student.principalDesk.slice(90, 170)}-`, {
        x: 85,
        y: 700,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${student.principalDesk.slice(170, 260)}-`, {
        x: 85,
        y: 680,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${student.principalDesk.slice(260, 340)}-`, {
        x: 85,
        y: 660,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${student.principalDesk.slice(340, 420)}.`, {
        x: 85,
        y: 640,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student.english.first.language, {
        x: 295,
        y: 707,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student.english.first.written, {
        x: 295,
        y: 692,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${student.english.first.description.slice(0, 45)}`, {
        x: 348,
        y: 707,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${student.english.first.description.slice(45, 89)}`, {
        x: 348,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student.english.second.word, {
        x: 295,
        y: 662,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student.english.second.Articular, {
        x: 295,
        y: 647,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student.english.second.proficiency, {
        x: 295,
        y: 632,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${student.english.second.description.slice(0, 45)}`, {
        x: 348,
        y: 662,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        `${student.english.second.description.slice(45, 89)}`,
        {
          x: 348,
          y: 648,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student.hindi.first.language, {
        x: 295,
        y: 465,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student.hindi.first.written, {
        x: 295,
        y: 450,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${student.hindi.first.description.slice(0, 45)}`, {
        x: 348,
        y: 465,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${student.hindi.first.description.slice(45, 89)}`, {
        x: 348,
        y: 451,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student.hindi.second.word, {
        x: 295,
        y: 420,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student.hindi.second.Articular, {
        x: 295,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${student.hindi.second.description.slice(0, 45)}`, {
        x: 348,
        y: 420,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(`${student.hindi.second.description.slice(45, 89)}`, {
        x: 348,
        y: 407,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fourthPage.drawText(student.english.first.language, {
        x: 295,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student.english.first.written, {
        x: 295,
        y: 680,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(`${student.english.first.description.slice(0, 45)}`, {
        x: 348,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        `${student.english.first.description.slice(45, 89)}`,
        {
          x: 348,
          y: 681,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student.english.second.word, {
        x: 295,
        y: 648,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student.english.second.Articular, {
        x: 295,
        y: 632,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student.english.second.proficiency, {
        x: 295,
        y: 617,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        `${student.english.second.description.slice(0, 45)}`,
        {
          x: 348,
          y: 649,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        `${student.english.second.description.slice(45, 89)}`,
        {
          x: 348,
          y: 634,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student.hindi.first.language, {
        x: 295,
        y: 410,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student.hindi.first.written, {
        x: 295,
        y: 395,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(`${student.hindi.first.description.slice(0, 45)}`, {
        x: 348,
        y: 410,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(`${student.hindi.first.description.slice(45, 89)}`, {
        x: 348,
        y: 396,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(`${student.hindi.first.description.slice(89, 135)}`, {
        x: 348,
        y: 380,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student.hindi.second.word, {
        x: 295,
        y: 350,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student.hindi.second.Articular, {
        x: 295,
        y: 335,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(`${student.hindi.second.description.slice(0, 45)}`, {
        x: 348,
        y: 350,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(`${student.hindi.second.description.slice(45, 89)}`, {
        x: 348,
        y: 335,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText("English", {
        x: 210,
        y: 630,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText("Basketball", {
        x: 115,
        y: 145,
        size: 18,
        color: rgb(0, 0, 0),
      });

      sixthPage.drawText("English, Hindi, Maths", {
        x: 80,
        y: 620,
        size: 15,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        {
          x: 80,
          y: 490,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawImage(teacherSignImage, {
        x: 80,
        y: 260,
        width: 100,
        height: 30,
      });
      sixthPage.drawImage(principalSignImage, {
        x: 230,
        y: 260,
        width: 100,
        height: 30,
      });

      seventhPage.drawText(student.english.first.language, {
        x: 295,
        y: 707,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student.english.first.written, {
        x: 295,
        y: 692,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(
        `${student.english.first.description.slice(0, 45)}`,
        {
          x: 348,
          y: 707,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        `${student.english.first.description.slice(45, 89)}`,
        {
          x: 348,
          y: 693,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(student.english.second.word, {
        x: 295,
        y: 662,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student.english.second.Articular, {
        x: 295,
        y: 647,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student.english.second.proficiency, {
        x: 295,
        y: 632,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(
        `${student.english.second.description.slice(0, 45)}`,
        {
          x: 348,
          y: 662,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        `${student.english.second.description.slice(45, 89)}`,
        {
          x: 348,
          y: 648,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(student.hindi.first.language, {
        x: 295,
        y: 465,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student.hindi.first.written, {
        x: 295,
        y: 450,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(`${student.hindi.first.description.slice(0, 45)}`, {
        x: 348,
        y: 465,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(`${student.hindi.first.description.slice(45, 89)}`, {
        x: 348,
        y: 451,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student.hindi.second.word, {
        x: 295,
        y: 420,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student.hindi.second.Articular, {
        x: 295,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(`${student.hindi.second.description.slice(0, 45)}`, {
        x: 348,
        y: 420,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(
        `${student.hindi.second.description.slice(45, 89)}`,
        {
          x: 348,
          y: 407,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );

      eighthPage.drawText(student.english.first.language, {
        x: 295,
        y: 712,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student.english.first.written, {
        x: 295,
        y: 700,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(`${student.english.first.description.slice(0, 45)}`, {
        x: 348,
        y: 712,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(
        `${student.english.first.description.slice(45, 89)}`,
        {
          x: 348,
          y: 701,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(student.english.second.word, {
        x: 295,
        y: 668,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student.english.second.Articular, {
        x: 295,
        y: 652,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student.english.second.proficiency, {
        x: 295,
        y: 637,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(
        `${student.english.second.description.slice(0, 45)}`,
        {
          x: 348,
          y: 669,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        `${student.english.second.description.slice(45, 89)}`,
        {
          x: 348,
          y: 654,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(student.hindi.first.language, {
        x: 295,
        y: 430,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student.hindi.first.written, {
        x: 295,
        y: 415,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(`${student.hindi.first.description.slice(0, 45)}`, {
        x: 348,
        y: 430,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(`${student.hindi.first.description.slice(45, 89)}`, {
        x: 348,
        y: 416,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student.hindi.second.word, {
        x: 295,
        y: 370,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student.hindi.second.Articular, {
        x: 295,
        y: 355,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(`${student.hindi.second.description.slice(0, 45)}`, {
        x: 348,
        y: 370,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(`${student.hindi.second.description.slice(45, 89)}`, {
        x: 348,
        y: 355,
        size: 10,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student.english.first.description.slice(0, 60), {
        x: 80,
        y: 620,
        size: 15,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student.english.first.description.slice(60, 120), {
        x: 80,
        y: 600,
        size: 15,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student.english.first.description.slice(120, 180), {
        x: 80,
        y: 580,
        size: 15,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        {
          x: 80,
          y: 490,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );

      tenthPage.drawText("252", {
        x: 460,
        y: 655,
        size: 18,
        color: rgb(0, 0, 0),
      });
      tenthPage.drawText("152", {
        x: 455,
        y: 600,
        size: 18,
        color: rgb(0, 0, 0),
      });
      tenthPage.drawText("70%", {
        x: 458,
        y: 557,
        size: 18,
        color: rgb(0, 0, 0),
      });
      // More drawing based on the student's data...
    } catch (error) {
      console.error("Error filling PDF form:", error);
    }
  };

  const generatePdfForAllStudentsAndZip = async () => {
    try {
      const zip = new JSZip();

      for (let student of userData) {
        const existingPdfBytes = await fetch("/asserts/class2_term2.pdf").then(
          (res) => res.arrayBuffer()
        );

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        await fillPdfForm(student, pdfDoc);

        const pdfBytes = await pdfDoc.save();

        // Add the PDF to the ZIP file, using the student's name for the file name
        zip.file(
          `${student.name.replace(/\s+/g, "_")}_report_card.pdf`,
          pdfBytes
        );
      }

      // Generate the ZIP file and download it
      const zipBlob = await zip.generateAsync({ type: "blob" });
      download(zipBlob, "student_report_cards.zip");
    } catch (error) {
      console.error("Error generating PDFs and ZIP file:", error);
    }
  };

  const fillAndDownloadSinglePdf = async (shouldDownload, shouldView) => {
    try {
      const existingPdfBytes = await fetch("/asserts/class2_term2.pdf").then(
        (res) => res.arrayBuffer()
      );

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
    <div className={styles.app}>
      <div>
        <h1 className={styles.header}>Student Report Card Generator</h1>
        <select className={styles.select} onChange={handleStudentChange}>
          {userData.map((student, index) => (
            <option key={index} value={index}>
              {student.name}
            </option>
          ))}
        </select>

        <button
          className={styles.button}
          onClick={() => fillAndDownloadSinglePdf(true, false)}
        >
          Download PDF
        </button>
        <button
          className={styles.button}
          onClick={() => fillAndDownloadSinglePdf(false, true)}
        >
          View PDF
        </button>
        <button
          className={styles.buttonZip}
          onClick={generatePdfForAllStudentsAndZip}
        >
          Download All PDFs as ZIP
        </button>
      </div>
      {/* {pdfUrl && ( */}
      <iframe ref={iframeRef} className={styles.iframe} title="PDF Preview" />
      {/* )} */}
    </div>
  );
}

export default Class2_Term2;
