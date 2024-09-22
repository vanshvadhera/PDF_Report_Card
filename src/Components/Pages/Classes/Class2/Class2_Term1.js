import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../../Data/Slices/UserDataSlice";

function Class2_Term1() {
  const location = useLocation();
  const { data, localPdf } = location.state;
  const userData = data.term_1;
  console.log(data, "Data in Class1_Term2");
  console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/1d9f23f4ca910f9640e4ee8842a34062968816278/acc2c48e26ebca3c062e75786490b211.pdf"
    : "https://dpsin.s3.amazonaws.com/report/II/Class2.pdf";

  const dispatch = useDispatch();

  const [selectedStudent, setSelectedStudent] = useState(userData[0]);
  const [zipButtonText, setZipButtonText] = useState(
    "Download All PDFs as ZIP"
  );
  const [downloadButtonText, setDownloadButtonText] = useState("Download PDF");

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

      //   const familyPhotoUrl = student.family_photo;
      //   const familyPhotoBytes = await fetch(familyPhotoUrl).then((res) =>
      //     res.arrayBuffer()
      //   );

      // const groupPhotUrl = student.group_photo;
      // const groupPhotBytes = await fetch(groupPhotUrl).then((res) =>
      //   res.arrayBuffer()
      // );

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSign1Image = await pdfDoc.embedJpg(teacherSign1Bytes);
      // const teacherSign2Image = await pdfDoc.embedJpg(teacherSign2Bytes);
      //   const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      // const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      // const secondPage = pages[1];
      const thirdPage = pages[2];
      const fourthPage = pages[3];
      const fifthPage = pages[4];
      const sixthPage = pages[5];
      // const seventhPage = pages[6];
      // const eighthPage = pages[7];
      // const ninthPage = pages[8];
      // const tenthPage = pages[9];

      // Insert data dynamically from the student's record
      firstPage.drawImage(image, {
        x: 225,
        y: 347,
        width: 150,
        height: 190,
      });
      firstPage.drawText(student["Student Name"][0], {
        x: 210,
        y: 303,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Section"][0], {
        x: 475,
        y: 303,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admission Number"][0], {
        x: 196,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll No."][0], {
        x: 320,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"][0].replace(/[' "]/g, ""), {
        x: 450,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"][0], {
        x: 202,
        y: 234,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Mobile No."][0], {
        x: 225,
        y: 199,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"][0], {
        x: 205,
        y: 164,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Mobile No."][0], {
        x: 230,
        y: 129,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["ENGLISH Language competency"][0], {
        x: 295,
        y: 707,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Written assessment"][0], {
        x: 295,
        y: 692,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        `${student[
          "ENGLISH Language competency DESCRIPTIVE INDICATORS"
        ][0].slice(0, 45)}`,
        {
          x: 348,
          y: 707,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        `${student[
          "ENGLISH Language competency DESCRIPTIVE INDICATORS"
        ][0].slice(45, 89)}`,
        {
          x: 348,
          y: 693,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["ENGLISH Word perception"][0], {
        x: 295,
        y: 662,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Articulation"][0], {
        x: 295,
        y: 647,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Proficiency"][0], {
        x: 295,
        y: 632,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ENGLISH READING CALIBRE DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(
            `${student["ENGLISH READING CALIBRE DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 662,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["ENGLISH READING CALIBRE DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(
            `${student["ENGLISH READING CALIBRE DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 648,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      thirdPage.drawText(student["ENGLISH Fluency"][0], {
        x: 295,
        y: 602,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Poem presentation"][0], {
        x: 295,
        y: 587,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ENGLISH SPEAKING CALIBRE DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(
            `${student["ENGLISH SPEAKING CALIBRE DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 602,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["ENGLISH SPEAKING CALIBRE DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(
            `${student["ENGLISH SPEAKING CALIBRE DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 587,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      thirdPage.drawText(student["ENGLISH Spelling precision"][0], {
        x: 295,
        y: 557,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Effective sentence building"][0], {
        x: 295,
        y: 542,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Word power"][0], {
        x: 295,
        y: 527,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Handwriting"][0], {
        x: 295,
        y: 512,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Work presentation"][0], {
        x: 295,
        y: 497,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ENGLISH WRITING CALIBRE DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(
            `${student["ENGLISH WRITING CALIBRE DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 557,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["ENGLISH WRITING CALIBRE DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(
            `${student["ENGLISH WRITING CALIBRE DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 542,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["ENGLISH WRITING CALIBRE DESCRIPTIVE INDICATORS"][2] &&
          thirdPage.drawText(
            `${student["ENGLISH WRITING CALIBRE DESCRIPTIVE INDICATORS"][2]}`,
            {
              x: 348,
              y: 527,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["ENGLISH WRITING CALIBRE DESCRIPTIVE INDICATORS"][3] &&
          thirdPage.drawText(
            `${student["ENGLISH WRITING CALIBRE DESCRIPTIVE INDICATORS"][3]}`,
            {
              x: 348,
              y: 512,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      thirdPage.drawText(student["HINDI भाषा कुशलता"][0], {
        x: 295,
        y: 465,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI लिखित मूल्यांकन"][0], {
        x: 295,
        y: 450,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["HINDI भाषा कुशलता DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(
            `${student["HINDI भाषा कुशलता DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 465,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["HINDI भाषा कुशलता DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(
            `${student["HINDI भाषा कुशलता DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 451,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      thirdPage.drawText(student["HINDI उच्चारण एवं शब्द पहचान"][0], {
        x: 295,
        y: 420,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI पढ़ने की निपुणता / गतिशीलता"][0], {
        x: 295,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["Hindi पठन कौशल DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(
            `${student["Hindi पठन कौशल DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 420,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["Hindi पठन कौशल DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(
            `${student["Hindi पठन कौशल DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 407,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      thirdPage.drawText(student["HINDI सम्वाद गतिशीलता"][0], {
        x: 295,
        y: 375,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI कविता प्रस्तुति"][0], {
        x: 295,
        y: 360,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["HINDI वाचन कौशल DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(
            `${student["HINDI वाचन कौशल DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 375,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["HINDI वाचन कौशल DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(
            `${student["HINDI वाचन कौशल DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 360,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      thirdPage.drawText(student["HINDI शब्द शुद्धता"][0], {
        x: 295,
        y: 330,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI वाक्य संरचना"][0], {
        x: 295,
        y: 315,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI शब्दकोष"][0], {
        x: 295,
        y: 300,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI हस्तलेख"][0], {
        x: 295,
        y: 285,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI कार्य प्रस्तुति"][0], {
        x: 295,
        y: 270,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["HINDI लेखन कौशल DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(
            `${student["HINDI लेखन कौशल DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 330,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["HINDI लेखन कौशल DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(
            `${student["HINDI लेखन कौशल DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 315,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["HINDI लेखन कौशल DESCRIPTIVE INDICATORS"][2] &&
          thirdPage.drawText(
            `${student["HINDI लेखन कौशल DESCRIPTIVE INDICATORS"][2]}`,
            {
              x: 348,
              y: 300,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["HINDI लेखन कौशल DESCRIPTIVE INDICATORS"][3] &&
          thirdPage.drawText(
            `${student["HINDI लेखन कौशल DESCRIPTIVE INDICATORS"][3]}`,
            {
              x: 348,
              y: 285,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      thirdPage.drawText(student["MATHEMATICS Written assessment"][0], {
        x: 295,
        y: 240,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["MATHEMATICS Computational & calculation skills"][0],
        {
          x: 295,
          y: 225,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["MATHEMATICS Mental aptitude"][0], {
        x: 295,
        y: 210,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MATHEMATICS Precision"][0], {
        x: 295,
        y: 195,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MATHEMATICS Work presentation"][0], {
        x: 295,
        y: 180,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MATHEMATICS  DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(
            `${student["MATHEMATICS  DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 240,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["MATHEMATICS  DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(
            `${student["MATHEMATICS  DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 225,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["MATHEMATICS  DESCRIPTIVE INDICATORS"][2] &&
          thirdPage.drawText(
            `${student["MATHEMATICS  DESCRIPTIVE INDICATORS"][2]}`,
            {
              x: 348,
              y: 210,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["MATHEMATICS  DESCRIPTIVE INDICATORS"][3] &&
          thirdPage.drawText(
            `${student["MATHEMATICS  DESCRIPTIVE INDICATORS"][3]}`,
            {
              x: 348,
              y: 195,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }

      thirdPage.drawText(student["EVS Written assessment"][0], {
        x: 295,
        y: 148,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["EVS Expanded awareness of the environment"][0],
        {
          x: 295,
          y: 133,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["EVS Work presentation / Quality of work"][0],
        {
          x: 295,
          y: 118,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["EVS DESCRIPTIVE INDICATORS"][0] &&
          thirdPage.drawText(`${student["EVS DESCRIPTIVE INDICATORS"][0]}`, {
            x: 348,
            y: 148,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EVS DESCRIPTIVE INDICATORS"][1] &&
          thirdPage.drawText(`${student["EVS DESCRIPTIVE INDICATORS"][1]}`, {
            x: 348,
            y: 133,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EVS DESCRIPTIVE INDICATORS"][2] &&
          thirdPage.drawText(`${student["EVS DESCRIPTIVE INDICATORS"][2]}`, {
            x: 348,
            y: 118,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["COMPUTER SCIENCE Computer Skills"][0], {
        x: 295,
        y: 86,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        `${student["COMPUTER SCIENCE DESCRIPTIVE INDICATORS"][0]}`,
        {
          x: 348,
          y: 86,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );

      fourthPage.drawText(student["ART & CRAFT Dexterity"][0], {
        x: 295,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ART & CRAFT Creativity & imagination"][0], {
        x: 295,
        y: 680,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ART & CRAFT DESCRIPTIVE INDICATORS"][0] &&
          fourthPage.drawText(
            `${student["ART & CRAFT DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 695,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["ART & CRAFT DESCRIPTIVE INDICATORS"][1] &&
          fourthPage.drawText(
            `${student["ART & CRAFT DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 681,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      fourthPage.drawText(student["MUSIC Lyrical memory"][0], {
        x: 295,
        y: 648,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Sings in key / pitch"][0], {
        x: 295,
        y: 632,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Shows eagerness"][0], {
        x: 295,
        y: 617,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MUSIC DESCRIPTIVE INDICATORS"][0] &&
          fourthPage.drawText(`${student["MUSIC DESCRIPTIVE INDICATORS"][0]}`, {
            x: 348,
            y: 649,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC DESCRIPTIVE INDICATORS"][1] &&
          fourthPage.drawText(`${student["MUSIC DESCRIPTIVE INDICATORS"][1]}`, {
            x: 348,
            y: 634,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(
        student[
          "DANCE Demonstrates coordination between sensory perceptions and body movements in various activities"
        ][0],
        {
          x: 295,
          y: 575,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "DANCE Exhibits precision and control when working with their hands and fingers"
        ][0],
        {
          x: 295,
          y: 544,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["DANCE Displays aesthetic coordination of hands and legs"][0],
        {
          x: 295,
          y: 519,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["DANCE DESCRIPTIVE INDICATORS"][0] &&
          fourthPage.drawText(`${student["DANCE DESCRIPTIVE INDICATORS"][0]}`, {
            x: 348,
            y: 587,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE DESCRIPTIVE INDICATORS"][1] &&
          fourthPage.drawText(`${student["DANCE DESCRIPTIVE INDICATORS"][1]}`, {
            x: 348,
            y: 572,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      fourthPage.drawText(
        student[
          "PHYSICAL EDUCATION / SPORTS SMART Shows strength and endurance in carrying, walking and running"
        ][0],
        {
          x: 295,
          y: 477,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["PHYSICAL EDUCATION / SPORTS SMART Adheres to guidance"][0],
        {
          x: 295,
          y: 458,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["PHYSICAL EDUCATION / SPORTS SMART Displays team spirit"][0],
        {
          x: 295,
          y: 443,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student[
          "PHYSICAL EDUCATION / SPORTS SMART DESCRIPTIVE INDICATORS"
        ][0] &&
          fourthPage.drawText(
            `${student["PHYSICAL EDUCATION / SPORTS SMART DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 480,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student[
          "PHYSICAL EDUCATION / SPORTS SMART DESCRIPTIVE INDICATORS"
        ][1] &&
          fourthPage.drawText(
            `${student["PHYSICAL EDUCATION / SPORTS SMART DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 465,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }

      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Personal upkeep & cleanliness"][0],
        {
          x: 295,
          y: 410,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Well groomed & self reliant"][0],
        {
          x: 295,
          y: 395,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Personal belongings management"][0],
        {
          x: 295,
          y: 380,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["LIFE SKILLS & WELL BEING DESCRIPTIVE INDICATORS"][0] &&
          fourthPage.drawText(
            `${student["LIFE SKILLS & WELL BEING DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 410,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["LIFE SKILLS & WELL BEING DESCRIPTIVE INDICATORS"][1] &&
          fourthPage.drawText(
            `${student["LIFE SKILLS & WELL BEING DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 396,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["LIFE SKILLS & WELL BEING DESCRIPTIVE INDICATORS"][2] &&
          fourthPage.drawText(
            `${student["LIFE SKILLS & WELL BEING DESCRIPTIVE INDICATORS"][2]}`,
            {
              x: 348,
              y: 380,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      fourthPage.drawText(student["COGNITIVE DEVELOPMENT Vigilant mind"][0], {
        x: 295,
        y: 350,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["COGNITIVE DEVELOPMENT Proactive & volunteering"][0],
        {
          x: 295,
          y: 335,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COGNITIVE DEVELOPMENT Adherence and compliance to instructions"
        ][0],
        {
          x: 295,
          y: 320,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["COGNITIVE DEVELOPMENT Engagement in classroom ventures"][0],
        {
          x: 295,
          y: 305,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["COGNITIVE DEVELOPMENT DESCRIPTIVE INDICATORS"][0] &&
          fourthPage.drawText(
            `${student["COGNITIVE DEVELOPMENT DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 350,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COGNITIVE DEVELOPMENT DESCRIPTIVE INDICATORS"][1] &&
          fourthPage.drawText(
            `${student["COGNITIVE DEVELOPMENT DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 335,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COGNITIVE DEVELOPMENT DESCRIPTIVE INDICATORS"][2] &&
          fourthPage.drawText(
            `${student["COGNITIVE DEVELOPMENT DESCRIPTIVE INDICATORS"][2]}`,
            {
              x: 348,
              y: 320,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COGNITIVE DEVELOPMENT DESCRIPTIVE INDICATORS"][3] &&
          fourthPage.drawText(
            `${student["COGNITIVE DEVELOPMENT DESCRIPTIVE INDICATORS"][3]}`,
            {
              x: 348,
              y: 305,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }

      fourthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT Discipline"
        ][0],
        {
          x: 295,
          y: 263,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT Radiant & confident"
        ][0],
        {
          x: 295,
          y: 248,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT Promptitude"
        ][0],
        {
          x: 295,
          y: 233,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT Shows empathy"
        ][0],
        {
          x: 295,
          y: 218,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT Courteous approach"
        ][0],
        {
          x: 295,
          y: 203,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT DESCRIPTIVE INDICATORS"
        ][0] &&
          fourthPage.drawText(
            `${student["COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 263,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT DESCRIPTIVE INDICATORS"
        ][1] &&
          fourthPage.drawText(
            `${student["COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 248,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT DESCRIPTIVE INDICATORS"
        ][2] &&
          fourthPage.drawText(
            `${student["COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT DESCRIPTIVE INDICATORS"][2]}`,
            {
              x: 348,
              y: 233,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student[
          "COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT DESCRIPTIVE INDICATORS"
        ][3] &&
          fourthPage.drawText(
            `${student["COMMUNICATION AND SOCIO - EMOTIONAL DEVELOPMENT DESCRIPTIVE INDICATORS"][3]}`,
            {
              x: 348,
              y: 218,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      fourthPage.drawText(
        student["MY JOYFUL LEARNING EXPERIENCES Engagement & participation"][0],
        {
          x: 295,
          y: 172,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["MY JOYFUL LEARNING EXPERIENCES Reflection & integration"][0],
        {
          x: 295,
          y: 157,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["MY JOYFUL LEARNING EXPERIENCES DESCRIPTIVE INDICATORS"][0] &&
          fourthPage.drawText(
            `${student["MY JOYFUL LEARNING EXPERIENCES DESCRIPTIVE INDICATORS"][0]}`,
            {
              x: 348,
              y: 172,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["MY JOYFUL LEARNING EXPERIENCES DESCRIPTIVE INDICATORS"][1] &&
          fourthPage.drawText(
            `${student["MY JOYFUL LEARNING EXPERIENCES DESCRIPTIVE INDICATORS"][1]}`,
            {
              x: 348,
              y: 157,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }

      fifthPage.drawText(student["My favourite hue"][0], {
        x: 115,
        y: 585,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I relish"][0], {
        x: 325,
        y: 575,
        size: 14,
        color: rgb(0, 0, 0),
      });
      const text = cleanText(student["Fictional character I like the most"][0]);
      fifthPage.drawText(text, {
        x: 85,
        y: 420,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Best Buddy"][0].slice(0, 20), {
        x: 325,
        y: 455,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Best Buddy"][0].slice(20, 40), {
        x: 335,
        y: 445,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite bird"][0], {
        x: 108,
        y: 278,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Enjoy Celebrating"][0], {
        x: 340,
        y: 320,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite game"][0], {
        x: 107,
        y: 160,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I learnt a lot from this book!"][0], {
        x: 325,
        y: 135,
        size: 14,
        color: rgb(0, 0, 0),
      });

      {
        student["My Accolades"][0] &&
          sixthPage.drawText(student["My Accolades"][0], {
            x: 78,
            y: 624,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["My Accolades"][1] &&
          sixthPage.drawText(student["My Accolades"][1], {
            x: 78,
            y: 609,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["My Accolades"][2] &&
          sixthPage.drawText(student["My Accolades"][2], {
            x: 78,
            y: 594,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER’S HOLISTIC OVERVIEW"][0] &&
          sixthPage.drawText(student["TEACHER’S HOLISTIC OVERVIEW"][0], {
            x: 78,
            y: 496,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER’S HOLISTIC OVERVIEW"][1] &&
          sixthPage.drawText(student["TEACHER’S HOLISTIC OVERVIEW"][1], {
            x: 78,
            y: 481,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER’S HOLISTIC OVERVIEW"][2] &&
          sixthPage.drawText(student["TEACHER’S HOLISTIC OVERVIEW"][2], {
            x: 78,
            y: 465,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER’S HOLISTIC OVERVIEW"][3] &&
          sixthPage.drawText(student["TEACHER’S HOLISTIC OVERVIEW"][3], {
            x: 78,
            y: 450,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT’S REFLECTION"][0] &&
          sixthPage.drawText(student["PARENT’S REFLECTION"][0], {
            x: 78,
            y: 366,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT’S REFLECTION"][1] &&
          sixthPage.drawText(student["PARENT’S REFLECTION"][1], {
            x: 78,
            y: 352,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT’S REFLECTION"][2] &&
          sixthPage.drawText(student["PARENT’S REFLECTION"][2], {
            x: 78,
            y: 337,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      sixthPage.drawImage(teacherSign1Image, {
        x: 80,
        y: 260,
        width: 100,
        height: 30,
      });
      sixthPage.drawText(student["TOTAL NO. OF WORKING DAYS"][0], {
        x: 370,
        y: 154,
        size: 12,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["NO. OF DAYS PRESENT"][0], {
        x: 370,
        y: 122,
        size: 12,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["ATTENDANCE %"][0].replace(/[' "]/g, ""), {
        x: 370,
        y: 97,
        size: 12,
        color: rgb(0, 0, 0),
      });

      // seventhPage.drawImage(groupPhotImage, {
      //   x: 485,
      //   y: 193,
      //   width: 470,
      //   height: 330,
      //   rotate: degrees(90),
      // });

      // More drawing based on the student's data...
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
      download(zipBlob, "Class2_report_cards.zip");
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
        download(pdfBytes, "Class2.pdf", "application/pdf");
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
          {downloadButtonText}
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

export default Class2_Term1;
