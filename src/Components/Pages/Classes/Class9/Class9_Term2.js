import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../../Data/Slices/UserDataSlice";

function Class9_Term2() {
  const location = useLocation();
  const { data, localPdf } = location.state;
  const userData = data.term_2;
  console.log(data, "Data in Class3_Term1");
  console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/46ecfbdd7cfc96681a6393a5ddaae6c01237221437/ab53d1a9164a7487d69161e1f5c76ec2.pdf"
    : "https://dpsin.s3.us-east-1.amazonaws.com/report/IX/9thterm2.pdf";

  const dispatch = useDispatch();

  const [selectedStudent, setSelectedStudent] = useState(userData[0]);
  const [zipButtonText, setZipButtonText] = useState(
    "Download All PDFs as ZIP"
  );

  //eslint-disable-next-line
  const [pdfUrl, setPdfUrl] = useState(null);
  const iframeRef = useRef(null);

  const handleStudentChange = (event) => {
    const selectedStudentIndex = event.target.value;
    setSelectedStudent(userData[selectedStudentIndex]);
  };

  function cleanText(text) {
    return text.replace(/[\u200B-\u200D\u2060-\u206F]/g, "");
  }

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

      // const groupPhotUrl = student.group_photo;
      // const groupPhotBytes = await fetch(groupPhotUrl).then((res) =>
      //   res.arrayBuffer()
      // );

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSign1Image = await pdfDoc.embedJpg(teacherSign1Bytes);
      // const teacherSign2Image = await pdfDoc.embedJpg(teacherSign2Bytes);
      // const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      // const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);

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

      firstPage.drawImage(image, {
        x: 470,
        y: 570,
        width: 80,
        height: 87,
      });
      firstPage.drawText(student["Student Name_2"][0], {
        x: 179,
        y: 180,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Class_2"][0], {
        x: 105,
        y: 158,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"][0], {
        x: 165,
        y: 134,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth_2"][0].replace(/[' "]/g, ""), {
        x: 152,
        y: 110,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admission No._2"][0], {
        x: 455,
        y: 180,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Section_2"][0], {
        x: 410,
        y: 158,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name_2"][0], {
        x: 459,
        y: 134,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["House_2"][0], {
        x: 405,
        y: 110,
        size: 10,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["2nd Language Name_2"][0], {
        x: 39,
        y: 677,
        size: 9.48,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["3 Subject Name Mathematics/Painting_2"][0], {
        x: 39,
        y: 654,
        size: 9.48,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(
        student["4 Subject Name Science/Computer Application_2"][0],
        {
          x: 39,
          y: 631,
          size: 9.48,
          color: rgb(0, 0, 0),
        }
      );
      secondPage.drawText(student["ENGLISH INTERNAL ASSESSMENT_2"][0], {
        x: 220,
        y: 700,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["ENGLISH ANNUAL EXAM_2"][0], {
        x: 320,
        y: 700,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["ENGLISH TOTAL (100)_2"][0], {
        x: 420,
        y: 700,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["ENGLISH GRADE_2"][0], {
        x: 520,
        y: 700,
        size: 12,
        color: rgb(0, 0, 0),
      });

      secondPage.drawText(student["2nd LANGUAGE INTERNAL ASSESSMENT_2"][0], {
        x: 220,
        y: 677,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["2nd LANGUAGE ANNUAL EXAM_2"][0], {
        x: 320,
        y: 677,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["2nd LANGUAGE  TOTAL (100)_2"][0], {
        x: 420,
        y: 677,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["2nd LANGUAGE GRADE_2"][0], {
        x: 520,
        y: 677,
        size: 12,
        color: rgb(0, 0, 0),
      });

      secondPage.drawText(student["3 INTERNAL ASSESSMENT_2"][0], {
        x: 220,
        y: 654,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["3 ANNUAL EXAM_2"][0], {
        x: 320,
        y: 654,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["3 TOTAL (100)_2"][0], {
        x: 420,
        y: 654,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["3 GRADE_2"][0], {
        x: 520,
        y: 654,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["4 INTERNAL ASSESSMENT_2"][0], {
        x: 220,
        y: 631,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["4 ANNUAL EXAM_2"][0], {
        x: 320,
        y: 631,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["4 TOTAL (100)_2"][0], {
        x: 420,
        y: 631,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["4 GRADE_2"][0], {
        x: 520,
        y: 631,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["5  INTERNAL ASSESSMENT_2"][0], {
        x: 220,
        y: 608,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["5 ANNUAL EXAM_2"][0], {
        x: 320,
        y: 608,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["5 TOTAL (100)_2"][0], {
        x: 420,
        y: 608,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["5 GRADE_2"][0], {
        x: 520,
        y: 608,
        size: 12,
        color: rgb(0, 0, 0),
      });

      secondPage.drawText(student["ARTIFICIAL INTELLIGENCE INTERNAL ASSESMENT_2"][0], {
        x: 220,
        y: 585,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["ARTIFICIAL INTELLIGENCE ANNUAL EXAM_2"][0], {
        x: 320,
        y: 585,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["ARTIFICIAL INTELLIGENCE TOTAL (100)_2"][0], {
        x: 420,
        y: 585,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["ARTIFICIAL INTELLIGENCE GRADE_2"][0], {
        x: 520,
        y: 585,
        size: 12,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["Work Education GRADE_2"][0], {
        x: 493,
        y: 529,
        size: 14,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["Art Education GRADE_2"][0], {
        x: 493,
        y: 511,
        size: 14,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["Health & Physical Education GRADE_2"][0], {
        x: 493,
        y: 494,
        size: 14,
        color: rgb(0, 0, 0),
      });
      secondPage.drawText(student["Discipline GRADE_2"][0], {
        x: 493,
        y: 442,
        size: 14,
        color: rgb(0, 0, 0),
      });

      {
        student["Class Teacher’s Remarks_2"][0] &&
          secondPage.drawText(student["Class Teacher’s Remarks_2"][0], {
            x: 169,
            y: 407,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Class Teacher’s Remarks_2"][1] &&
          secondPage.drawText(student["Class Teacher’s Remarks_2"][1], {
            x: 169,
            y: 397,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Class Teacher’s Remarks_2"][2] &&
          secondPage.drawText(student["Class Teacher’s Remarks_2"][2], {
            x: 169,
            y: 387,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Class Teacher’s Remarks_2"][3] &&
          secondPage.drawText(student["Class Teacher’s Remarks_2"][3], {
            x: 169,
            y: 377,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }

      thirdPage.drawText(
        student[
          "COGNITIVE DEVELOPMENT Comprehends main ideas and details effectively_2"
        ][0],
        {
          x: 479,
          y: 745,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "COGNITIVE DEVELOPMENT Extracts inferences and draws conclusion_2"
        ][0],
        {
          x: 479,
          y: 727,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "COGNITIVE DEVELOPMENT Demonstrates effective problem solving skills and applies logical reasoning_2"
        ][0],
        {
          x: 479,
          y: 711,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "COGNITIVE DEVELOPMENT Demonstrates persuasion in representing related concepts and data_2"
        ][0],
        {
          x: 479,
          y: 694,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "COGNITIVE DEVELOPMENT Collaborative thinking and effective communication_2"
        ][0],
        {
          x: 479,
          y: 677,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "SOCIO-EMOTIONAL DEVELOPMENT AND DILIGENCE Can communicate effectively in diverse environments_2"
        ][0],
        {
          x: 479,
          y: 630,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "SOCIO-EMOTIONAL DEVELOPMENT AND DILIGENCE Displays emotional regulation and resilience and is empathetic_2"
        ][0],
        {
          x: 479,
          y: 611,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "SOCIO-EMOTIONAL DEVELOPMENT AND DILIGENCE Exhibits social competence and maintain healthy relationships with others_2"
        ][0],
        {
          x: 479,
          y: 594,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "SOCIO-EMOTIONAL DEVELOPMENT AND DILIGENCE Awareness of one’s strength and weaknesses_2"
        ][0],
        {
          x: 479,
          y: 578,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "SOCIO-EMOTIONAL DEVELOPMENT AND DILIGENCE Takes constructive criticism positively_2"
        ][0],
        {
          x: 479,
          y: 561,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "ICT Is able to apply theoretical knowledge into practical usage_2"
        ][0],
        {
          x: 479,
          y: 509,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "ICT Analysis of art works, contextual understanding, Interdisciplinary connections_2"
        ][0],
        {
          x: 479,
          y: 488,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "ICT Use digital technologies (computers, media players, GPS, etc.), communication /networking tools and social networks appropriately_2"
        ][0],
        {
          x: 479,
          y: 466,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "ICT Skill proficiency in materials and techniques, use of tools, detail and precision_2"
        ][0],
        {
          x: 479,
          y: 444,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      thirdPage.drawText(
        student[
          "WORK ETHICS, GENERAL ATTITUDE AND BEHAVIOUR Adheres to deadlines_2"
        ][0],
        {
          x: 479,
          y: 394,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "WORK ETHICS, GENERAL ATTITUDE AND BEHAVIOUR Participates in class discussions_2"
        ][0],
        {
          x: 479,
          y: 376,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "WORK ETHICS, GENERAL ATTITUDE AND BEHAVIOUR Submits assignments/notebooks on time_2"
        ][0],
        {
          x: 479,
          y: 356,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "WORK ETHICS, GENERAL ATTITUDE AND BEHAVIOUR Respects teachers and classmates_2"
        ][0],
        {
          x: 479,
          y: 334,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      thirdPage.drawText(
        student[
          "WORK ETHICS, GENERAL ATTITUDE AND BEHAVIOUR Is humble, punctual and sincere_2"
        ][0],
        {
          x: 479,
          y: 316,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "INNOVATION Is being able to execute new ideas in an innovative manner_2"
        ][0],
        {
          x: 479,
          y: 270,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "INNOVATION Is ready to take risks and adapt to changing conditions_2"
        ][0],
        {
          x: 479,
          y: 250,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      thirdPage.drawText(
        student["LITERARY SKILLS Asks thought provoking questions_2"][0],
        {
          x: 479,
          y: 206,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      thirdPage.drawText(
        student[
          "LITERARY SKILLS Infers meaning from the given information_2"
        ][0],
        {
          x: 479,
          y: 187,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "LITERARY SKILLS Demonstrates knowledge and research skills_2"
        ][0],
        {
          x: 479,
          y: 167,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "ACTIVITY CLUBS Proficient in use of materials and techniques_2"
        ][0],
        {
          x: 479,
          y: 121,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      thirdPage.drawText(
        student[
          "ACTIVITY CLUBS Demonstration of skill in chosen activity_2"
        ][0],
        {
          x: 479,
          y: 108,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "ACTIVITY CLUBS Exhibits co-operation and self-discipline_2"
        ][0],
        {
          x: 479,
          y: 94,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawImage(teacherSign1Image, {
        x: 60,
        y: 55,
        width: 100,
        height: 30,
      });
    } catch (error) {
      console.error("Error filling PDF form:", error);
    }
  };

  const generatePdfForAllStudentsAndZip = async () => {
    try {
      setZipButtonText("Generating ZIP file...");
      const zip = new JSZip();

      for (let student of userData) {
        const existingPdfBytes = await fetch(fileURL).then((res) =>
          res.arrayBuffer()
        );

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        await fillPdfForm(student, pdfDoc);

        const pdfBytes = await pdfDoc.save();

        // Add the PDF to the ZIP file, using the student's name for the file name
        zip.file(`${student["zip_name"]}_report_card.pdf`, pdfBytes);
      }

      // Generate the ZIP file and download it
      const zipBlob = await zip.generateAsync({ type: "blob" });
      download(zipBlob, "Class6_report_cards.zip");
      setZipButtonText("Download All PDFs as ZIP");
      dispatch(
        userDataActions.setAlert({
          message: "Zip Downloaded Successfully",
          variant: "success",
          show: true,
        })
      );

      setTimeout(() => {
        dispatch(
          userDataActions.setAlert({
            message: "",
            variant: "",
            show: false,
          })
        );
      }, 3000);
    } catch (error) {
      console.error("Error generating PDFs and ZIP file:", error);
      setZipButtonText("Download All PDFs as ZIP");
      dispatch(
        userDataActions.setAlert({
          message: "Error generating PDFs and ZIP file",
          variant: "danger",
          show: true,
        })
      );

      setTimeout(() => {
        dispatch(
          userDataActions.setAlert({
            message: "",
            variant: "",
            show: false,
          })
        );
      }, 3000);
    }
  };

  const fillAndDownloadSinglePdf = async (shouldDownload, shouldView) => {
    try {
      const existingPdfBytes = await fetch(fileURL).then((res) =>
        res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      await fillPdfForm(selectedStudent, pdfDoc);

      if (shouldDownload) {
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, "Class6.pdf", "application/pdf");
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
          {zipButtonText}
        </button>
      </div>
      {/* {pdfUrl && ( */}
      <iframe ref={iframeRef} className={styles.iframe} title="PDF Preview" />
      {/* )} */}
    </div>
  );
}

export default Class9_Term2;
