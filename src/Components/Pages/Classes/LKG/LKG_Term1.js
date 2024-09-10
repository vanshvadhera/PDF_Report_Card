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
      firstPage.drawText(student["Student's Name"], {
        x: 210,
        y: 248,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.Section, {
        x: 425,
        y: 248,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admn.no"], {
        x: 168,
        y: 220,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll no"], {
        x: 315,
        y: 220,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"].replace(/['"]/g, ""), {
        x: 460,
        y: 220,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"], {
        x: 202,
        y: 191,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's (Mob)"], {
        x: 200,
        y: 163,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"], {
        x: 205,
        y: 134,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's (Mob)"], {
        x: 204,
        y: 106,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["I maintain cleanliness"], {
        x: student["I maintain cleanliness"] === "PROGRESSIVE" ? 230 : 240,
        y: 665,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am organised"], {
        x: student["I am organised"] === "PROGRESSIVE" ? 230 : 240,
        y: 644,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I practice mindful eating"], {
        x: student["I practice mindful eating"] === "PROGRESSIVE" ? 230 : 240,
        y: 621,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I use the restroom appropriately"], {
        x:
          student["I use the restroom appropriately"] === "PROGRESSIVE"
            ? 230
            : 240,
        y: 600,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SELF RELIANCE Remarks"].slice(0, 50), {
        x: 315,
        y: 665,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SELF RELIANCE Remarks"].slice(50, 100), {
        x: 315,
        y: 652,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SELF RELIANCE Remarks"].slice(100, 150), {
        x: 315,
        y: 639,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SELF RELIANCE Remarks"].slice(150, 200), {
        x: 315,
        y: 626,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I have dexterity"], {
        x: student["I have dexterity"] === "PROGRESSIVE" ? 230 : 240,
        y: 555,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I have a pincer grip"], {
        x: student["I have a pincer grip"] === "PROGRESSIVE" ? 230 : 240,
        y: 534,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can retain and recall"], {
        x: student["I can retain and recall"] === "PROGRESSIVE" ? 230 : 240,
        y: 513,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can stay engaged and involved"], {
        x:
          student["I can stay engaged and involved"] === "PROGRESSIVE"
            ? 230
            : 240,
        y: 492,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I wonder and explore my senses"], {
        x:
          student["I wonder and explore my senses"] === "PROGRESSIVE"
            ? 230
            : 240,
        y: 471,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MINDFUL MILESTONES Remarks"].slice(0, 50), {
        x: 315,
        y: 555,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MINDFUL MILESTONES Remarks"].slice(50, 100), {
        x: 315,
        y: 542,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["MINDFUL MILESTONES Remarks"].slice(100, 150),
        {
          x: 315,
          y: 529,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["MINDFUL MILESTONES Remarks"].slice(120, 160),
        {
          x: 315,
          y: 516,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["I listen and reflect"], {
        x: student["I listen and reflect"] === "PROGRESSIVE" ? 230 : 240,
        y: 426,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I seek help when needed"], {
        x: student["I seek help when needed"] === "PROGRESSIVE" ? 230 : 240,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I speak clearly"], {
        x: student["I speak clearly"] === "PROGRESSIVE" ? 230 : 240,
        y: 384,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I engage in conversation"], {
        x: student["I engage in conversation"] === "PROGRESSIVE" ? 230 : 240,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["BUILDING CONNECTIONS Remarks"].slice(0, 50), {
        x: 315,
        y: 426,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["BUILDING CONNECTIONS Remarks"].slice(50, 100),
        {
          x: 315,
          y: 413,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["BUILDING CONNECTIONS Remarks"].slice(100, 150),
        {
          x: 315,
          y: 400,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["BUILDING CONNECTIONS Remarks"].slice(150, 200),
        {
          x: 315,
          y: 387,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["I am collaborative"], {
        x: student["I am collaborative"] === "PROGRESSIVE" ? 230 : 240,
        y: 318,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I adopt and follow norms"], {
        x: student["I adopt and follow norms"] === "PROGRESSIVE" ? 230 : 240,
        y: 297,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am cordial"], {
        x: student["I am cordial"] === "PROGRESSIVE" ? 230 : 240,
        y: 276,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I express myself with clarity"], {
        x:
          student["I express myself with clarity"] === "PROGRESSIVE"
            ? 230
            : 240,
        y: 255,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am reliable"], {
        x: student["I am reliable"] === "PROGRESSIVE" ? 230 : 240,
        y: 234,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I believe in my abilities"], {
        x: student["I believe in my abilities"] === "PROGRESSIVE" ? 230 : 240,
        y: 213,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["EMPATHY EXPRESS Remarks"].slice(0, 50), {
        x: 315,
        y: 318,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["EMPATHY EXPRESS Remarks"].slice(50, 100), {
        x: 315,
        y: 305,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["EMPATHY EXPRESS Remarks"].slice(100, 150), {
        x: 315,
        y: 292,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["EMPATHY EXPRESS Remarks"].slice(150, 200), {
        x: 315,
        y: 279,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I seek information"], {
        x: student["I seek information"] === "PROGRESSIVE" ? 230 : 240,
        y: 168,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I explore my surroundings"], {
        x: student["I explore my surroundings"] === "PROGRESSIVE" ? 230 : 240,
        y: 147,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["WORLD AROUND ME Remarks"].slice(0, 50), {
        x: 315,
        y: 168,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["WORLD AROUND ME Remarks"].slice(50, 100), {
        x: 315,
        y: 155,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["WORLD AROUND ME Remarks"].slice(100, 150), {
        x: 315,
        y: 142,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fourthPage.drawText(student["I have phonic sense"], {
        x: student["I have phonic sense"] === "PROGRESSIVE" ? 250 : 260,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I know my letters"], {
        x: student["I know my letters"] === "PROGRESSIVE" ? 250 : 260,
        y: 674,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I use new words"], {
        x: student["I use new words"] === "PROGRESSIVE" ? 250 : 260,
        y: 653,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am an articulate speaker"], {
        x: student["I am an articulate speaker"] === "PROGRESSIVE" ? 250 : 260,
        y: 632,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can write neatly"], {
        x: student["I can write neatly"] === "PROGRESSIVE" ? 250 : 260,
        y: 611,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I use my writing space efficiently"], {
        x:
          student["I use my writing space efficiently"] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 590,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["LANGUAGE LEAPS Remarks"].slice(0, 50), {
        x: 343,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["LANGUAGE LEAPS Remarks"].slice(50, 100), {
        x: 343,
        y: 682,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["LANGUAGE LEAPS Remarks"].slice(100, 150), {
        x: 343,
        y: 669,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["LANGUAGE LEAPS Remarks"].slice(150, 200), {
        x: 343,
        y: 656,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am number smart"], {
        x: student["I am number smart"] === "PROGRESSIVE" ? 250 : 260,
        y: 546,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am aware of pre-math concepts"], {
        x:
          student["I am aware of pre-math concepts"] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 525,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I write within the box"], {
        x: student["I write within the box"] === "PROGRESSIVE" ? 250 : 260,
        y: 504,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["MATHEMATICAL UNDERSTANDING Remarks"].slice(0, 50),
        {
          x: 343,
          y: 546,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["MATHEMATICAL UNDERSTANDING Remarks"].slice(50, 100),
        {
          x: 343,
          y: 533,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["MATHEMATICAL UNDERSTANDING Remarks"].slice(100, 150),
        {
          x: 343,
          y: 520,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["MATHEMATICAL UNDERSTANDING Remarks"].slice(150, 200),
        {
          x: 343,
          y: 507,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["मेरा अक्षर ज्ञान"], {
        x: student["मेरा अक्षर ज्ञान"] === "PROGRESSIVE" ? 250 : 260,
        y: 459,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरा शब्दकोश"], {
        x: student["मेरा शब्दकोश"] === "PROGRESSIVE" ? 250 : 260,
        y: 438,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा"], {
        x: student["मेरी भाषा"] === "PROGRESSIVE" ? 250 : 260,
        y: 417,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरा लेखन"], {
        x: student["मेरा लेखन"] === "PROGRESSIVE" ? 250 : 260,
        y: 396,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["भाषा ज्ञान Remarks"].slice(0, 50), {
        x: 343,
        y: 459,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["भाषा ज्ञान Remarks"].slice(50, 100), {
        x: 343,
        y: 446,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["भाषा ज्ञान Remarks"].slice(100, 150), {
        x: 343,
        y: 433,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can make creative strokes"], {
        x: student["I can make creative strokes"] === "PROGRESSIVE" ? 250 : 260,
        y: 351,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I have crafty fingers"], {
        x: student["I have crafty fingers"] === "PROGRESSIVE" ? 250 : 260,
        y: 330,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ART SMART Remarks"].slice(0, 50), {
        x: 343,
        y: 354,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ART SMART Remarks"].slice(50, 100), {
        x: 343,
        y: 341,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ART SMART Remarks"].slice(100, 150), {
        x: 343,
        y: 328,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can sing in tune"], {
        x: student["I can sing in tune"] === "PROGRESSIVE" ? 250 : 260,
        y: 285,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I remember my lyrics"], {
        x: student["I remember my lyrics"] === "PROGRESSIVE" ? 250 : 260,
        y: 264,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I exhibit keen interest in music"], {
        x:
          student["I exhibit keen interest in music"] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 243,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MELODY MASTER Remarks"].slice(0, 50), {
        x: 343,
        y: 285,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MELODY MASTER Remarks"].slice(50, 100), {
        x: 343,
        y: 272,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MELODY MASTER Remarks"].slice(100, 150), {
        x: 343,
        y: 259,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can dance to the beats"], {
        x: student["I can dance to the beats"] === "PROGRESSIVE" ? 250 : 260,
        y: 200,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am a graceful dancer"], {
        x: student["I am a graceful dancer"] === "PROGRESSIVE" ? 250 : 260,
        y: 179,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am a dance enthusiast"], {
        x: student["I am a dance enthusiast"] === "PROGRESSIVE" ? 250 : 260,
        y: 158,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["TAPPING TOES Remarks"].slice(0, 50), {
        x: 343,
        y: 200,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["TAPPING TOES Remarks"].slice(50, 100), {
        x: 343,
        y: 187,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["TAPPING TOES Remarks"].slice(100, 150), {
        x: 343,
        y: 174,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["TAPPING TOES Remarks"].slice(150, 200), {
        x: 343,
        y: 161,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I have age appropriate motor skills"], {
        x:
          student["I have age appropriate motor skills"] === "PROGRESSIVE"
            ? 250
            : 260,
        y: 113,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I balance well"], {
        x: student["I balance well"] === "PROGRESSIVE" ? 250 : 260,
        y: 92,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am a team player"], {
        x: student["I am a team player"] === "PROGRESSIVE" ? 250 : 260,
        y: 71,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["SPORTY STRIDE Remarks"].slice(0, 50), {
        x: 343,
        y: 113,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["SPORTY STRIDE Remarks"].slice(50, 100), {
        x: 343,
        y: 100,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["SPORTY STRIDE Remarks"].slice(100, 150), {
        x: 343,
        y: 87,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["SPORTY STRIDE Remarks"].slice(150, 200), {
        x: 343,
        y: 74,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText(student["Total no. of working days"], {
        x: 220,
        y: 685,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["No. of days present"], {
        x: 200,
        y: 669,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I stand _______ cm tall"], {
        x: 294,
        y: 633,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["weigh _______ kgs"], {
        x: 312,
        y: 617,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite fruit"], {
        x: 420,
        y: 672,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite colour"], {
        x: 130,
        y: 545,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite place to visit"], {
        x: 430,
        y: 528,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I assist others"].slice(0, 20), {
        x: 303,
        y: 445,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I assist others"].slice(21, 40), {
        x: 303,
        y: 432,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I willingly share my resources"].slice(0, 20),
        {
          x: 303,
          y: 408,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["I willingly share my resources"].slice(21, 40),
        {
          x: 303,
          y: 395,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(student["I can team up with others"].slice(0, 20), {
        x: 303,
        y: 369,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I can team up with others"].slice(21, 40), {
        x: 303,
        y: 356,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(0, 105), {
        x: 57,
        y: 277,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(105, 210), {
        x: 57,
        y: 265,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(210, 215), {
        x: 57,
        y: 253,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(0, 105), {
        x: 57,
        y: 197,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(105, 210), {
        x: 57,
        y: 185,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(210, 315), {
        x: 57,
        y: 173,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawImage(teacherSign1Image, {
        x: 57,
        y: 82,
        width: 150,
        height: 30,
      });

      sixthPage.drawImage(myPagePhotoImage, {
        x: 534,
        y: 120,
        width: 598,
        height: 480,
        rotate: degrees(90),
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
