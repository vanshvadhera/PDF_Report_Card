import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";

function LKG_Term1() {
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

      const familyPhotoUrl = student.family_photo;
      const familyPhotoBytes = await fetch(familyPhotoUrl).then((res) =>
        res.arrayBuffer()
      );

      //   const groupPhotUrl = student.group_photo;
      //   const groupPhotBytes = await fetch(groupPhotUrl).then((res) =>
      //     res.arrayBuffer()
      //   );

      const myPagePhotoUrl = student.my_page_photo;
      const myPagePhotoBytes = await fetch(myPagePhotoUrl).then((res) =>
        res.arrayBuffer()
      );

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSign1Image = await pdfDoc.embedJpg(teacherSign1Bytes);
      // const teacherSign2Image = await pdfDoc.embedJpg(teacherSign2Bytes);
      const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      //   const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);
      const myPagePhotoImage = await pdfDoc.embedJpg(myPagePhotoBytes);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      // const secondPage = pages[1];
      const thirdPage = pages[2];
      const fourthPage = pages[3];
      const fifthPage = pages[4];
      const sixthPage = pages[5];
      //   const seventhPage = pages[6];
      // const eighthPage = pages[7];
      // const ninthPage = pages[8];
      // const tenthPage = pages[9];

      // Insert data dynamically from the student's record
      firstPage.drawImage(image, {
        x: 81,
        y: 295,
        width: 192,
        height: 265,
      });
      firstPage.drawImage(familyPhotImage, {
        x: 324,
        y: 295,
        width: 185,
        height: 265,
      });
      firstPage.drawText(student["Student's Name"][0], {
        x: 210,
        y: 248,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.Section[0], {
        x: 425,
        y: 248,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admn.no"][0], {
        x: 168,
        y: 220,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll no"][0], {
        x: 315,
        y: 220,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"][0].replace(/['"]/g, ""), {
        x: 460,
        y: 220,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"][0], {
        x: 202,
        y: 191,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's (Mob)"][0], {
        x: 200,
        y: 163,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"][0], {
        x: 205,
        y: 134,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's (Mob)"][0], {
        x: 204,
        y: 106,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["I maintain cleanliness"][0], {
        x: student["I maintain cleanliness"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 665,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am organised"][0], {
        x: student["I am organised"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 644,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I practice mindful eating"][0], {
        x:
          student["I practice mindful eating"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 621,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I use the restroom appropriately"][0], {
        x:
          student["I use the restroom appropriately"][0] === "PROGRESSIVE"
            ? 230
            : 240,
        y: 600,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["SELF RELIANCE Remarks"][0] &&
          thirdPage.drawText(student["SELF RELIANCE Remarks"][0], {
            x: 315,
            y: 665,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF RELIANCE Remarks"][1] &&
          thirdPage.drawText(student["SELF RELIANCE Remarks"][1], {
            x: 315,
            y: 652,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF RELIANCE Remarks"][2] &&
          thirdPage.drawText(student["SELF RELIANCE Remarks"][2], {
            x: 315,
            y: 639,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF RELIANCE Remarks"][3] &&
          thirdPage.drawText(student["SELF RELIANCE Remarks"][3], {
            x: 315,
            y: 626,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF RELIANCE Remarks"][4] &&
          thirdPage.drawText(student["SELF RELIANCE Remarks"][4], {
            x: 315,
            y: 613,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I have dexterity"][0], {
        x: student["I have dexterity"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 555,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I have a pincer grip"][0], {
        x: student["I have a pincer grip"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 534,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can retain and recall"][0], {
        x: student["I can retain and recall"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 513,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can stay engaged and involved"][0], {
        x:
          student["I can stay engaged and involved"][0] === "PROGRESSIVE"
            ? 230
            : 240,
        y: 492,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I wonder and explore my senses"][0], {
        x:
          student["I wonder and explore my senses"][0] === "PROGRESSIVE"
            ? 230
            : 240,
        y: 471,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MINDFUL MILESTONES Remarks"][0] &&
          thirdPage.drawText(student["MINDFUL MILESTONES Remarks"][0], {
            x: 315,
            y: 555,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MINDFUL MILESTONES Remarks"][1] &&
          thirdPage.drawText(student["MINDFUL MILESTONES Remarks"][1], {
            x: 315,
            y: 542,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MINDFUL MILESTONES Remarks"][2] &&
          thirdPage.drawText(student["MINDFUL MILESTONES Remarks"][2], {
            x: 315,
            y: 529,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MINDFUL MILESTONES Remarks"][3] &&
          thirdPage.drawText(student["MINDFUL MILESTONES Remarks"][3], {
            x: 315,
            y: 516,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MINDFUL MILESTONES Remarks"][4] &&
          thirdPage.drawText(student["MINDFUL MILESTONES Remarks"][4], {
            x: 315,
            y: 503,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I listen and reflect"][0], {
        x: student["I listen and reflect"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 426,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I seek help when needed"][0], {
        x: student["I seek help when needed"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I speak clearly"][0], {
        x: student["I speak clearly"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 384,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I engage in conversation"][0], {
        x: student["I engage in conversation"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["BUILDING CONNECTIONS Remarks"][0] &&
          thirdPage.drawText(student["BUILDING CONNECTIONS Remarks"][0], {
            x: 315,
            y: 426,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["BUILDING CONNECTIONS Remarks"][1] &&
          thirdPage.drawText(student["BUILDING CONNECTIONS Remarks"][1], {
            x: 315,
            y: 413,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["BUILDING CONNECTIONS Remarks"][2] &&
          thirdPage.drawText(student["BUILDING CONNECTIONS Remarks"][2], {
            x: 315,
            y: 400,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["BUILDING CONNECTIONS Remarks"][3] &&
          thirdPage.drawText(student["BUILDING CONNECTIONS Remarks"][3], {
            x: 315,
            y: 387,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["BUILDING CONNECTIONS Remarks"][4] &&
          thirdPage.drawText(student["BUILDING CONNECTIONS Remarks"][4], {
            x: 315,
            y: 374,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I am collaborative"][0], {
        x: student["I am collaborative"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 318,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I adopt and follow norms"][0], {
        x: student["I adopt and follow norms"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 297,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am cordial"][0], {
        x: student["I am cordial"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 276,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I express myself with clarity"][0], {
        x:
          student["I express myself with clarity"][0] === "PROGRESSIVE"
            ? 230
            : 240,
        y: 255,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am reliable"][0], {
        x: student["I am reliable"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 234,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I believe in my abilities"][0], {
        x:
          student["I believe in my abilities"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 213,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["EMPATHY EXPRESS Remarks"][0] &&
          thirdPage.drawText(student["EMPATHY EXPRESS Remarks"][0], {
            x: 315,
            y: 318,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EMPATHY EXPRESS Remarks"][1] &&
          thirdPage.drawText(student["EMPATHY EXPRESS Remarks"][1], {
            x: 315,
            y: 305,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EMPATHY EXPRESS Remarks"][2] &&
          thirdPage.drawText(student["EMPATHY EXPRESS Remarks"][2], {
            x: 315,
            y: 292,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EMPATHY EXPRESS Remarks"][3] &&
          thirdPage.drawText(student["EMPATHY EXPRESS Remarks"][3], {
            x: 315,
            y: 279,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EMPATHY EXPRESS Remarks"][4] &&
          thirdPage.drawText(student["EMPATHY EXPRESS Remarks"][4], {
            x: 315,
            y: 266,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I seek information"][0], {
        x: student["I seek information"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 168,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I explore my surroundings"][0], {
        x:
          student["I explore my surroundings"][0] === "PROGRESSIVE" ? 230 : 240,
        y: 147,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["WORLD AROUND ME Remarks"][0] &&
          thirdPage.drawText(student["WORLD AROUND ME Remarks"][0], {
            x: 315,
            y: 168,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["WORLD AROUND ME Remarks"][1] &&
          thirdPage.drawText(student["WORLD AROUND ME Remarks"][1], {
            x: 315,
            y: 155,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["WORLD AROUND ME Remarks"][2] &&
          thirdPage.drawText(student["WORLD AROUND ME Remarks"][2], {
            x: 315,
            y: 142,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      fourthPage.drawText(student["I have phonic sense"][0], {
        x: student["I have phonic sense"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I know my letters"][0], {
        x: student["I know my letters"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 674,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I use new words"][0], {
        x: student["I use new words"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 653,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am an articulate speaker"][0], {
        x:
          student["I am an articulate speaker"][0] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 632,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can write neatly"][0], {
        x: student["I can write neatly"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 611,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I use my writing space efficiently"][0], {
        x:
          student["I use my writing space efficiently"][0] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 590,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["LANGUAGE LEAPS Remarks"][0] &&
          fourthPage.drawText(student["LANGUAGE LEAPS Remarks"][0], {
            x: 343,
            y: 695,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks"][1] &&
          fourthPage.drawText(student["LANGUAGE LEAPS Remarks"][1], {
            x: 343,
            y: 682,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks"][2] &&
          fourthPage.drawText(student["LANGUAGE LEAPS Remarks"][2], {
            x: 343,
            y: 669,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks"][3] &&
          fourthPage.drawText(student["LANGUAGE LEAPS Remarks"][3], {
            x: 343,
            y: 656,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I am number smart"][0], {
        x: student["I am number smart"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 546,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am aware of pre-math concepts"][0], {
        x:
          student["I am aware of pre-math concepts"][0] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 525,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I write within the box"][0], {
        x: student["I write within the box"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 504,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MATHEMATICAL UNDERSTANDING Remarks"][0] &&
          fourthPage.drawText(
            student["MATHEMATICAL UNDERSTANDING Remarks"][0],
            {
              x: 343,
              y: 546,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["MATHEMATICAL UNDERSTANDING Remarks"][1] &&
          fourthPage.drawText(
            student["MATHEMATICAL UNDERSTANDING Remarks"][1],
            {
              x: 343,
              y: 533,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["MATHEMATICAL UNDERSTANDING Remarks"][2] &&
          fourthPage.drawText(
            student["MATHEMATICAL UNDERSTANDING Remarks"][2],
            {
              x: 343,
              y: 520,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["MATHEMATICAL UNDERSTANDING Remarks"][3] &&
          fourthPage.drawText(
            student["MATHEMATICAL UNDERSTANDING Remarks"][3],
            {
              x: 343,
              y: 507,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      fourthPage.drawText(student["मेरा अक्षर ज्ञान"][0], {
        x: student["मेरा अक्षर ज्ञान"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 459,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरा शब्दकोश"][0], {
        x: student["मेरा शब्दकोश"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 438,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा"][0], {
        x: student["मेरी भाषा"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 417,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरा लेखन"][0], {
        x: student["मेरा लेखन"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 396,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["भाषा ज्ञान Remarks"][0] &&
          fourthPage.drawText(student["भाषा ज्ञान Remarks"][0], {
            x: 343,
            y: 459,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["भाषा ज्ञान Remarks"][1] &&
          fourthPage.drawText(student["भाषा ज्ञान Remarks"][1], {
            x: 343,
            y: 446,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["भाषा ज्ञान Remarks"][2] &&
          fourthPage.drawText(student["भाषा ज्ञान Remarks"][2], {
            x: 343,
            y: 433,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I can make creative strokes"][0], {
        x:
          student["I can make creative strokes"][0] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 351,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I have crafty fingers"][0], {
        x: student["I have crafty fingers"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 330,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ART SMART Remarks"][0] &&
          fourthPage.drawText(student["ART SMART Remarks"][0], {
            x: 343,
            y: 354,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ART SMART Remarks"][1] &&
          fourthPage.drawText(student["ART SMART Remarks"][1], {
            x: 343,
            y: 341,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ART SMART Remarks"][2] &&
          fourthPage.drawText(student["ART SMART Remarks"][2], {
            x: 343,
            y: 328,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I can sing in tune"][0], {
        x: student["I can sing in tune"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 285,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I remember my lyrics"][0], {
        x: student["I remember my lyrics"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 264,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I exhibit keen interest in music"][0], {
        x:
          student["I exhibit keen interest in music"][0] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 243,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MELODY MASTER Remarks"][0] &&
          fourthPage.drawText(student["MELODY MASTER Remarks"][0], {
            x: 343,
            y: 285,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MELODY MASTER Remarks"][1] &&
          fourthPage.drawText(student["MELODY MASTER Remarks"][1], {
            x: 343,
            y: 272,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MELODY MASTER Remarks"][2] &&
          fourthPage.drawText(student["MELODY MASTER Remarks"][2], {
            x: 343,
            y: 259,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I can dance to the beats"][0], {
        x: student["I can dance to the beats"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 200,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am a graceful dancer"][0], {
        x: student["I am a graceful dancer"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 179,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am a dance enthusiast"][0], {
        x: student["I am a dance enthusiast"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 158,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["TAPPING TOES Remarks"][0] &&
          fourthPage.drawText(student["TAPPING TOES Remarks"][0], {
            x: 343,
            y: 200,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TAPPING TOES Remarks"][1] &&
          fourthPage.drawText(student["TAPPING TOES Remarks"][1], {
            x: 343,
            y: 187,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TAPPING TOES Remarks"][2] &&
          fourthPage.drawText(student["TAPPING TOES Remarks"][2], {
            x: 343,
            y: 174,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TAPPING TOES Remarks"][3] &&
          fourthPage.drawText(student["TAPPING TOES Remarks"][3], {
            x: 343,
            y: 161,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I have age appropriate motor skills"][0], {
        x:
          student["I have age appropriate motor skills"][0] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 113,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I balance well"][0], {
        x: student["I balance well"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 92,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am a team player"][0], {
        x: student["I am a team player"][0] === "PROGRESSIVE" ? 250 : 260,
        y: 71,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["SPORTY STRIDE Remarks"][0] &&
          fourthPage.drawText(student["SPORTY STRIDE Remarks"][0], {
            x: 343,
            y: 113,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SPORTY STRIDE Remarks"][1] &&
          fourthPage.drawText(student["SPORTY STRIDE Remarks"][1], {
            x: 343,
            y: 100,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SPORTY STRIDE Remarks"][2] &&
          fourthPage.drawText(student["SPORTY STRIDE Remarks"][2], {
            x: 343,
            y: 87,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SPORTY STRIDE Remarks"][3] &&
          fourthPage.drawText(student["SPORTY STRIDE Remarks"][3], {
            x: 343,
            y: 74,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      fifthPage.drawText(student["Total no. of working days"][0], {
        x: 220,
        y: 685,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["No. of days present"][0], {
        x: 200,
        y: 669,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I stand _______ cm tall"][0], {
        x: 294,
        y: 633,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["weigh _______ kgs"][0], {
        x: 312,
        y: 617,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite fruit"][0], {
        x: 420,
        y: 672,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite colour"][0], {
        x: 130,
        y: 545,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite place to visit"][0], {
        x: 430,
        y: 528,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I assist others"][0].slice(0, 20), {
        x: 303,
        y: 445,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I assist others"][0].slice(21, 40), {
        x: 303,
        y: 432,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I willingly share my resources"][0].slice(0, 20),
        {
          x: 303,
          y: 408,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["I willingly share my resources"][0].slice(21, 40),
        {
          x: 303,
          y: 395,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(student["I can team up with others"][0].slice(0, 20), {
        x: 303,
        y: 369,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I can team up with others"][0].slice(21, 40),
        {
          x: 303,
          y: 356,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["PARENT'S REFLECTION"][0] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][0], {
            x: 57,
            y: 277,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT'S REFLECTION"][1] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][1], {
            x: 57,
            y: 265,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT'S REFLECTION"][2] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][2], {
            x: 57,
            y: 253,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["TEACHER'S REFLECTION"][0] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][0], {
            x: 57,
            y: 197,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION"][1] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][1], {
            x: 57,
            y: 185,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION"][2] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][2], {
            x: 57,
            y: 173,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fifthPage.drawImage(teacherSign1Image, {
        x: 57,
        y: 82,
        width: 150,
        height: 30,
      });

      sixthPage.drawImage(myPagePhotoImage, {
        x: 53,
        y: 120,
        width: 480,
        height: 598,
        // rotate: degrees(90),
      });

      //   seventhPage.drawImage(groupPhotImage, {
      //     x: 500,
      //     y: 160,
      //     width: 550,
      //     height: 350,
      //     rotate: degrees(90),
      //   });

      // More drawing based on the student's data...
    } catch (error) {
      console.error("Error filling PDF form:", error);
    }
  };

  const generatePdfForAllStudentsAndZip = async () => {
    try {
      const zip = new JSZip();

      for (let student of userData) {
        const existingPdfBytes = await fetch("/asserts/LKG_term1.pdf").then(
          (res) => res.arrayBuffer()
        );

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        await fillPdfForm(student, pdfDoc);

        const pdfBytes = await pdfDoc.save();

        // Add the PDF to the ZIP file, using the student's name for the file name
        zip.file(`${student["Admn.no"]}_report_card.pdf`, pdfBytes);
      }

      // Generate the ZIP file and download it
      const zipBlob = await zip.generateAsync({ type: "blob" });
      download(zipBlob, "LKG_report_cards.zip");
    } catch (error) {
      console.error("Error generating PDFs and ZIP file:", error);
    }
  };

  const fillAndDownloadSinglePdf = async (shouldDownload, shouldView) => {
    try {
      const existingPdfBytes = await fetch("/asserts/LKG_term1.pdf").then(
        (res) => res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      await fillPdfForm(selectedStudent, pdfDoc);

      if (shouldDownload) {
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, "LKG.pdf", "application/pdf");
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
              {student["Student's Name"]}
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

export default LKG_Term1;
