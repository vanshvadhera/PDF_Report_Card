import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
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
      const imageUrl = student.student_photo;
      const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());

      const teacherSign1Url = student.teacher_sign_1;
      const teacherSign1Bytes = await fetch(teacherSign1Url).then((res) =>
        res.arrayBuffer()
      );

      // const teacherSign2Url = student.teacher_sign_2;
      // const teacherSign2Bytes = await fetch(teacherSign2Url).then((res) =>
      //   res.arrayBuffer()
      // );

      // const familyPhotoUrl = student.family_photo
      // const familyPhotoBytes = await fetch(familyPhotoUrl).then((res) =>
      //   res.arrayBuffer()
      // );

      const groupPhotUrl = student.group_photo;
      const groupPhotBytes = await fetch(groupPhotUrl).then((res) =>
        res.arrayBuffer()
      );

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSign1Image = await pdfDoc.embedJpg(teacherSign1Bytes);
      // const teacherSign2Image = await pdfDoc.embedJpg(teacherSign2Bytes);
      // const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      // const secondPage = pages[1];
      const thirdPage = pages[2];
      const fourthPage = pages[3];
      const fifthPage = pages[4];
      const sixthPage = pages[5];
      const seventhPage = pages[6];
      // const eighthPage = pages[7];
      // const ninthPage = pages[8];
      // const tenthPage = pages[9];

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
      firstPage.drawText(student["Admission Number"], {
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
      firstPage.drawText(student["Date Of Birth"].replace(/['"]/g, ""), {
        x: 430,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"], {
        x: 190,
        y: 188,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Mobile No."], {
        x: 210,
        y: 153,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"], {
        x: 195,
        y: 121,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Mobile No."], {
        x: 215,
        y: 87,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["ENGLISH Language Competency"], {
        x: 293,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Written assessment"], {
        x: 293,
        y: 678,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Articulation"], {
        x: 293,
        y: 645,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Proficiency"], {
        x: 293,
        y: 629,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Fluency"], {
        x: 293,
        y: 600,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Poem presentation"], {
        x: 293,
        y: 585,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Adept speller"], {
        x: 293,
        y: 553,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Word power"], {
        x: 293,
        y: 536,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Handwriting"], {
        x: 293,
        y: 519,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Work presentation"], {
        x: 293,
        y: 502,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH REMARKS"], {
        x: 343,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI भाषा कुशलता"], {
        x: 293,
        y: 468,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI लिखित मूल्यांकन"], {
        x: 293,
        y: 451,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI उच्चारण एवं शब्द पहचान"], {
        x: 293,
        y: 418,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI पढ़ने की निपुणता / गतिशीलता"], {
        x: 293,
        y: 401,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI कविता प्रस्तुति"], {
        x: 293,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI संवाद गतिशीलता"], {
        x: 293,
        y: 340,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI शब्द शुद्धता"], {
        x: 293,
        y: 305,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI शब्दकोष"], {
        x: 293,
        y: 288,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI हस्तलेख"], {
        x: 293,
        y: 271,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI Remarks"], {
        x: 343,
        y: 468,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MATHEMATICS Written assessment"], {
        x: 293,
        y: 235,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["MATHEMATICS Computational & calculation skills"],
        {
          x: 293,
          y: 213,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["MATHEMATICS Mental aptitude"], {
        x: 293,
        y: 192,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MATHEMATICS Work presentation"], {
        x: 293,
        y: 170,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MATHEMATICS Remarks"], {
        x: 343,
        y: 235,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENVIORNMENTAL STUDIES Written assessment"], {
        x: 293,
        y: 130,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["ENVIORNMENTAL STUDIE Expanded awareness of the surroundings"],
        {
          x: 293,
          y: 110,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["ENVIORNMENTAL STUDIE Work presentation"], {
        x: 293,
        y: 86,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENVIRONMENTAL STUDIES Remarks"], {
        x: 343,
        y: 130,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["COMPUTER SCIENCE Computer skills"], {
        x: 293,
        y: 51,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["COMPUTER SCIENCE Remarks"], {
        x: 343,
        y: 51,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fourthPage.drawText(student["ART & CRAFT Artistic ability"], {
        x: 291,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ART & CRAFT Remarks"], {
        x: 335,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Lyrical memory"], {
        x: 291,
        y: 655,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Sings melodiously"], {
        x: 291,
        y: 635,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Shows eagerness"], {
        x: 291,
        y: 614,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Remarks"], {
        x: 335,
        y: 655,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["DANCE Demonstrates aesthetic hand and leg coordination"],
        {
          x: 291,
          y: 570,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["DANCE Shows zest to learn new dancing skills"],
        {
          x: 291,
          y: 542,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["DANCE Remarks"], {
        x: 335,
        y: 570,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student[
          "PHYSICAL EDUCATION Shows strength and endurance in carrying, walking and running"
        ],
        {
          x: 291,
          y: 495,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["PHYSICAL EDUCATION Adheres to guidance"], {
        x: 291,
        y: 470,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["PHYSICAL EDUCATION Displays team spirit"], {
        x: 291,
        y: 450,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["PHYSICAL EDUCATION Remarks"], {
        x: 335,
        y: 495,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Personal upkeep & cleanliness"],
        {
          x: 291,
          y: 406,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Tidy and presentable"],
        {
          x: 291,
          y: 386,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Managing personal belongings"],
        {
          x: 291,
          y: 364,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["LIFE SKILLS & WELL BEING Remarks"], {
        x: 335,
        y: 406,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["COGNITIVE DEVELOPMENT Vigilant mind"], {
        x: 291,
        y: 320,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["COGNITIVE DEVELOPMENT Proactive & volunteering"],
        {
          x: 291,
          y: 300,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COGNITIVE DEVELOPMENT Adherence and compliance to instructions"
        ],
        {
          x: 291,
          y: 280,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["COGNITIVE DEVELOPMENT Self-reliance"], {
        x: 291,
        y: 257,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["COGNITIVE DEVELOPMENT Engagement in classroom ventures"],
        {
          x: 291,
          y: 235,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks"], {
        x: 335,
        y: 320,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Discipline"],
        {
          x: 291,
          y: 192,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Radiant self - confidence"
        ],
        {
          x: 291,
          y: 172,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Timeliness"],
        {
          x: 291,
          y: 150,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Shows empathy"],
        {
          x: 291,
          y: 128,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Courteous approach"
        ],
        {
          x: 291,
          y: 107,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"],
        {
          x: 335,
          y: 192,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["APPLIED LEARNING EXPERIENCES Active participation"],
        {
          x: 291,
          y: 67,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["APPLIED LEARNING EXPERIENCES Reflection and integration"],
        {
          x: 291,
          y: 47,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["APPLIED LEARNING EXPERIENCES Remarks"], {
        x: 335,
        y: 67,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText(student["My Favourite Hue…"], {
        x: 125,
        y: 545,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Relish"], {
        x: 335,
        y: 545,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["Fictional Character I like the most"], {
        x: 95,
        y: 390,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Best Buddy"].slice(0, 20), {
        x: 335,
        y: 425,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Best Buddy"].slice(20, 40), {
        x: 345,
        y: 415,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Favourite Bird.."], {
        x: 118,
        y: 248,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Enjoy Celebrating…."], {
        x: 350,
        y: 290,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Favourite Game.."], {
        x: 117,
        y: 130,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Learnt A Lot From      This Book...."], {
        x: 335,
        y: 105,
        size: 14,
        color: rgb(0, 0, 0),
      });

      sixthPage.drawText(student["Honors To My Name"].slice(0, 80), {
        x: 95,
        y: 650,
        size: 12,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["Honors To My Name"].slice(80, 160), {
        x: 95,
        y: 635,
        size: 12,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["Honors To My Name"].slice(160, 240), {
        x: 95,
        y: 620,
        size: 12,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["Teacher's Holistic Over View"].slice(0, 80), {
        x: 95,
        y: 560,
        size: 12,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(
        student["Teacher's Holistic Over View"].slice(80, 160),
        {
          x: 95,
          y: 545,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student["Teacher's Holistic Over View"].slice(160, 240),
        {
          x: 95,
          y: 530,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawImage(teacherSign1Image, {
        x: 90,
        y: 370,
        width: 100,
        height: 30,
      });
      sixthPage.drawText(student["No. Of Days Present"], {
        x: 345,
        y: 170,
        size: 15,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["Total No. Of Present"], {
        x: 345,
        y: 130,
        size: 15,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["Attendance"], {
        x: 345,
        y: 85,
        size: 15,
        color: rgb(0, 0, 0),
      });

      seventhPage.drawImage(groupPhotImage, {
        x: 470,
        y: 160,
        width: 480,
        height: 290,
        rotate: degrees(90),
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
          `${student["Admission Number"]}_report_card.pdf`,
          pdfBytes
        );
      }

      // Generate the ZIP file and download it
      const zipBlob = await zip.generateAsync({ type: "blob" });
      download(zipBlob, "Class1_report_cards.zip");
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
