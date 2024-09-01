import React, { useState, useRef } from "react";
import { PDFDocument, rgb } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";

function Class1_Term1() {
  const location = useLocation();
  const { data } = location.state;
  const userData = data.term_1;
  console.log(data, "Data in Class1_Term2");

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
      const imageUrl =
        "https://static.vecteezy.com/system/resources/previews/002/629/904/non_2x/portrait-of-woman-university-student-holding-book-in-studio-grey-background-free-photo.jpg";
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
        y: 330,
        width: 134,
        height: 175,
      });
      firstPage.drawText(student["Student Name"], {
        x: 200,
        y: 255,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.Section, {
        x: 480,
        y: 255,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admission No."], {
        x: 168,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll No."], {
        x: 295,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"], {
        x: 430,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father Name"], {
        x: 190,
        y: 188,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father Mobile No."], {
        x: 215,
        y: 155,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother Name"], {
        x: 195,
        y: 121,
        size: 10,
        color: rgb(0, 0, 0),
      });

      secondPage.drawText(`${student["Principal's Message"].slice(0, 90)}`, {
        x: 190,
        y: 650,
        size: 14,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${student["Principal's Message"].slice(90, 170)}`, {
        x: 190,
        y: 630,
        size: 14,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${student["Principal's Message"].slice(170, 260)}`, {
        x: 190,
        y: 610,
        size: 14,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${student["Principal's Message"].slice(260, 340)}`, {
        x: 190,
        y: 590,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(`${student["Principal's Message"].slice(340, 420)}`, {
        x: 190,
        y: 570,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["English Language Competency"], {
        x: 293,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["English Written assessment"], {
        x: 293,
        y: 678,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Articulation"], {
        x: 293,
        y: 645,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Proficiency"], {
        x: 293,
        y: 629,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Fluency"], {
        x: 293,
        y: 600,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Poem presentation"], {
        x: 293,
        y: 585,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Adept speller"], {
        x: 293,
        y: 553,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Word power"], {
        x: 293,
        y: 536,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Handwriting"], {
        x: 293,
        y: 519,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Work presentation"], {
        x: 293,
        y: 502,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Eng REMARKS"], {
        x: 350,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["भाषा कुशलता"], {
        x: 293,
        y: 468,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["लिखित मूल्यांकन"], {
        x: 293,
        y: 451,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["उच्चारण एवं शब्द पहचान"], {
        x: 293,
        y: 418,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["पढ़ने की निपुणता / गतिशीलता"], {
        x: 293,
        y: 401,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["वाचन कौशल"], {
        x: 293,
        y: 384,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["कविता प्रस्तुति"], {
        x: 293,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["संवाद गतिशीलता"], {
        x: 293,
        y: 340,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["लेखन कौशल"], {
        x: 293,
        y: 322,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["शब्द शुद्धता"], {
        x: 293,
        y: 305,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["शब्दकोष"], {
        x: 293,
        y: 288,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["हस्तलेख"], {
        x: 293,
        y: 271,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Hindi Remarks"], {
        x: 350,
        y: 468,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Written assessment"], {
        x: 293,
        y: 235,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Computational & calculation skills"], {
        x: 293,
        y: 213,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Mental aptitude"], {
        x: 293,
        y: 192,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Work presentation"], {
        x: 293,
        y: 170,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Maths Remarks"], {
        x: 350,
        y: 235,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Expanded awareness of the surroundings"], {
        x: 293,
        y: 110,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["EVS Remarks"], {
        x: 350,
        y: 130,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Computer skills"], {
        x: 293,
        y: 51,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["Computer Remarks"], {
        x: 350,
        y: 51,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fourthPage.drawText(student["Artistic ability"], {
        x: 291,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["A & C Remarks"], {
        x: 350,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Lyrical memory"], {
        x: 291,
        y: 655,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Sings melodiously"], {
        x: 291,
        y: 635,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Shows eagerness"], {
        x: 291,
        y: 614,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["Demonstrates aesthetic hand and leg coordination"],
        {
          x: 291,
          y: 570,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["Shows zest to learn new dancing skills"], {
        x: 291,
        y: 542,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Dance Remarks"], {
        x: 350,
        y: 570,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student[
          "Shows strength and endurance in carrying, walking and running"
        ],
        {
          x: 291,
          y: 495,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["Adheres to guidance"], {
        x: 291,
        y: 470,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Displays team spirit"], {
        x: 291,
        y: 450,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Physical Edu Remarks"], {
        x: 350,
        y: 495,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Personal upkeep & cleanliness"], {
        x: 291,
        y: 406,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Tidy and presentable"], {
        x: 291,
        y: 386,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Managing personal belongings"], {
        x: 291,
        y: 364,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Life Skills Remarks"], {
        x: 350,
        y: 406,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Vigilant mind"], {
        x: 291,
        y: 320,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Proactive & volunteering"], {
        x: 291,
        y: 300,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Adherence and compliance to instructions"], {
        x: 291,
        y: 280,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Self-reliance"], {
        x: 291,
        y: 257,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Engagement in classroom ventures"], {
        x: 291,
        y: 235,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["COGNITIVE Remarks"], {
        x: 350,
        y: 320,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Discipline"], {
        x: 291,
        y: 192,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Radiant self - confidence"], {
        x: 291,
        y: 172,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Timeliness"], {
        x: 291,
        y: 150,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Shows empathy"], {
        x: 291,
        y: 128,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Courteous approach"], {
        x: 291,
        y: 107,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["COMMUNICATION Remarks"], {
        x: 350,
        y: 192,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Active participation"], {
        x: 291,
        y: 67,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["Reflection and integration"], {
        x: 291,
        y: 47,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["APPLIED LEARNING Remarks"], {
        x: 350,
        y: 67,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText(student["My Favourite Hue…"], {
        x: 130,
        y: 545,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Relish"], {
        x: 340,
        y: 545,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["Fictional Character I like the most"], {
        x: 115,
        y: 380,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Best Buddy"].slice(0, 20), {
        x: 340,
        y: 420,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Best Buddy"].slice(21, 40), {
        x: 360,
        y: 400,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Favourite Bird.."], {
        x: 118,
        y: 245,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Enjoy Celebrating…."], {
        x: 340,
        y: 280,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Favourite Game.."], {
        x: 117,
        y: 125,
        size: 18,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Learnt A Lot From      This Book...."], {
        x: 370,
        y: 100,
        size: 18,
        color: rgb(0, 0, 0),
      });

      sixthPage.drawText(student["Honors To My Name"], {
        x: 100,
        y: 620,
        size: 15,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["Teacher's Holistic Over View"], {
        x: 100,
        y: 530,
        size: 15,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawImage(teacherSignImage, {
        x: 90,
        y: 400,
        width: 100,
        height: 30,
      });
      sixthPage.drawImage(principalSignImage, {
        x: 240,
        y: 400,
        width: 100,
        height: 30,
      });
      sixthPage.drawText(student["Parent's/ Gaurdian Sign"], {
        x: 400,
        y: 400,
        size: 15,
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
        const existingPdfBytes = await fetch("/asserts/class1_term1.pdf").then(
          (res) => res.arrayBuffer()
        );

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        await fillPdfForm(student, pdfDoc);

        const pdfBytes = await pdfDoc.save();

        // Add the PDF to the ZIP file, using the student's name for the file name
        zip.file(
          `${student["Admission No."].replace(/\s+/g, "_")}_report_card.pdf`,
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
      const existingPdfBytes = await fetch("/asserts/class1_term1.pdf").then(
        (res) => res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      await fillPdfForm(selectedStudent, pdfDoc);

      if (shouldDownload) {
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, "Class1.pdf", "application/pdf");
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
          {userData?.map((student, index) => (
            <option key={index} value={index}>
              {student["Student Name"]}
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

export default Class1_Term1;
