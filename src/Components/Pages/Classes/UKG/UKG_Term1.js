import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";

function Ukg_Term1() {
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

      const groupPhotUrl = student.group_photo;
      const groupPhotBytes = await fetch(groupPhotUrl).then((res) =>
        res.arrayBuffer()
      );

      const myPagePhotoUrl = student.my_page_photo;
      const myPagePhotoBytes = await fetch(myPagePhotoUrl).then((res) =>
        res.arrayBuffer()
      );

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSign1Image = await pdfDoc.embedJpg(teacherSign1Bytes);
      // const teacherSign2Image = await pdfDoc.embedJpg(teacherSign2Bytes);
      const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);
      const myPagePhotoImage = await pdfDoc.embedJpg(myPagePhotoBytes);

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
        x: 81,
        y: 287,
        width: 192,
        height: 265,
      });
      firstPage.drawImage(familyPhotImage, {
        x: 324,
        y: 287,
        width: 185,
        height: 265,
      });
      firstPage.drawText(student["Student's Name"], {
        x: 210,
        y: 238,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.Section, {
        x: 425,
        y: 238,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admn.no"], {
        x: 168,
        y: 210,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll no"], {
        x: 315,
        y: 210,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"].replace(/['"]/g, ""), {
        x: 460,
        y: 210,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"], {
        x: 202,
        y: 181,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's (Mob)"], {
        x: 200,
        y: 153,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"], {
        x: 205,
        y: 124,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's (Mob)"], {
        x: 204,
        y: 96,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["I am conscious of personal hygiene"], {
        x:
          student["I am conscious of personal hygiene"] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 673,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am responsible and dependable"], {
        x:
          student["I am responsible and dependable"] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 652,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I embrace teamwork"], {
        x: student["I embrace teamwork"] === "PROGRESSIVE" ? 267 : 277,
        y: 630,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am polite and courteous"], {
        x: student["I am polite and courteous"] === "PROGRESSIVE" ? 267 : 277,
        y: 610,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I take care of personal belongings"], {
        x:
          student["I take care of personal belongings"] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 590,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SELF SMART Remarks"].slice(0, 40), {
        x: 353,
        y: 673,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SELF SMART Remarks"].slice(40, 80), {
        x: 353,
        y: 660,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SELF SMART Remarks"].slice(80, 120), {
        x: 353,
        y: 647,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SELF SMART Remarks"].slice(120, 160), {
        x: 353,
        y: 634,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am disciplined"], {
        x: student["I am disciplined"] === "PROGRESSIVE" ? 267 : 277,
        y: 544,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am an eloquent speaker"], {
        x: student["I am an eloquent speaker"] === "PROGRESSIVE" ? 267 : 277,
        y: 525,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I take pride in my work"], {
        x: student["I take pride in my work"] === "PROGRESSIVE" ? 267 : 277,
        y: 503,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MY MINDFULNESS Remarks"].slice(0, 40), {
        x: 353,
        y: 544,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MY MINDFULNESS Remarks"].slice(40, 80), {
        x: 353,
        y: 531,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MY MINDFULNESS Remarks"].slice(80, 120), {
        x: 353,
        y: 518,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MY MINDFULNESS Remarks"].slice(120, 160), {
        x: 353,
        y: 505,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can recollect"], {
        x: student["I can recollect"] === "PROGRESSIVE" ? 267 : 277,
        y: 460,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can enact while reciting"], {
        x: student["I can enact while reciting"] === "PROGRESSIVE" ? 267 : 277,
        y: 439,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can express clearly"], {
        x: student["I can express clearly"] === "PROGRESSIVE" ? 267 : 277,
        y: 418,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am engaged and involved"], {
        x: student["I am engaged and involved"] === "PROGRESSIVE" ? 267 : 277,
        y: 397,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["STORYTELLING AND RECITATION Remarks"].slice(0, 37),
        {
          x: 353,
          y: 460,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["STORYTELLING AND RECITATION Remarks"].slice(37, 74),
        {
          x: 353,
          y: 447,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["STORYTELLING AND RECITATION Remarks"].slice(74, 111),
        {
          x: 353,
          y: 434,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["STORYTELLING AND RECITATION Remarks"].slice(111, 148),
        {
          x: 353,
          y: 421,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["I demonstrate curiosity"], {
        x: student["I demonstrate curiosity"] === "PROGRESSIVE" ? 267 : 277,
        y: 352,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can observe and explore"], {
        x: student["I can observe and explore"] === "PROGRESSIVE" ? 267 : 277,
        y: 331,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can comprehend"], {
        x: student["I can comprehend"] === "PROGRESSIVE" ? 267 : 277,
        y: 310,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["GENERAL AWARENESS Remarks"].slice(0, 40), {
        x: 353,
        y: 352,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["GENERAL AWARENESS Remarks"].slice(40, 80), {
        x: 353,
        y: 339,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["GENERAL AWARENESS Remarks"].slice(80, 120), {
        x: 353,
        y: 326,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["GENERAL AWARENESS Remarks"].slice(120, 160), {
        x: 353,
        y: 313,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I listen attentively"], {
        x: student["I listen attentively"] === "PROGRESSIVE" ? 267 : 277,
        y: 265,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can assimilate"], {
        x: student["I can assimilate"] === "PROGRESSIVE" ? 267 : 277,
        y: 244,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can reciprocate"], {
        x: student["I can reciprocate"] === "PROGRESSIVE" ? 267 : 277,
        y: 223,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can build new words"], {
        x: student["I can build new words"] === "PROGRESSIVE" ? 267 : 277,
        y: 202,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am fluent"], {
        x: student["I am fluent"] === "PROGRESSIVE" ? 267 : 277,
        y: 181,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I have good eye and hand co-ordination"], {
        x:
          student["I have good eye and hand co-ordination"] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 160,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["LITERACY SMART ENGLISH Remarks"].slice(0, 40),
        {
          x: 353,
          y: 265,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["LITERACY SMART ENGLISH Remarks"].slice(40, 80),
        {
          x: 353,
          y: 252,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["LITERACY SMART ENGLISH Remarks"].slice(80, 120),
        {
          x: 353,
          y: 239,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );

      fourthPage.drawText(student["श्रवण कौशल"], {
        x: student["श्रवण कौशल"] === "PROGRESSIVE" ? 303 : 313,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["समझ कौशल"], {
        x: student["समझ कौशल"] === "PROGRESSIVE" ? 303 : 313,
        y: 672,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["एकाग्रता"], {
        x: student["एकाग्रता"] === "PROGRESSIVE" ? 303 : 313,
        y: 650,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["शब्दकोश"], {
        x: student["शब्दकोश"] === "PROGRESSIVE" ? 303 : 313,
        y: 629,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["स्पष्टता"], {
        x: student["स्पष्टता"] === "PROGRESSIVE" ? 303 : 313,
        y: 608,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["अक्षर पहचान"], {
        x: student["अक्षर पहचान"] === "PROGRESSIVE" ? 303 : 313,
        y: 587,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["स्वर संबंधी"], {
        x: student["स्वर संबंधी"] === "PROGRESSIVE" ? 303 : 313,
        y: 566,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["हस्त लेखन"], {
        x: student["हस्त लेखन"] === "PROGRESSIVE" ? 303 : 313,
        y: 545,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(0, 33), {
        x: 390,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(33, 66), {
        x: 390,
        y: 680,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(66, 99), {
        x: 390,
        y: 667,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(99, 132), {
        x: 390,
        y: 654,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["I display logical understanding of concepts"],
        {
          x:
            student["I display logical understanding of concepts"] ===
            "PROGRESSIVE"
              ? 303
              : 313,
          y: 500,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["I have a good mathematical understanding"], {
        x:
          student["I have a good mathematical understanding"] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 479,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can perform mathematical operations"], {
        x:
          student["I can perform mathematical operations"] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 458,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["NUMERACY SMART Remarks"].slice(0, 33), {
        x: 390,
        y: 500,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["NUMERACY SMART Remarks"].slice(33, 66), {
        x: 390,
        y: 487,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["NUMERACY SMART Remarks"].slice(66, 99), {
        x: 390,
        y: 474,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["NUMERACY SMART Remarks"].slice(99, 132), {
        x: 390,
        y: 461,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am an artist"], {
        x: student["I am an artist"] === "PROGRESSIVE" ? 303 : 313,
        y: 413,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can use colours skillfully"], {
        x:
          student["I can use colours skillfully"] === "PROGRESSIVE" ? 303 : 313,
        y: 392,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I use vivid imagination with play-doh"], {
        x:
          student["I use vivid imagination with play-doh"] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 371,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I work collaboratively in art and craft"], {
        x:
          student["I work collaboratively in art and craft"] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 350,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["AESTHETIC SKILLS Remarks"].slice(0, 33), {
        x: 390,
        y: 413,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["AESTHETIC SKILLS Remarks"].slice(33, 66), {
        x: 390,
        y: 400,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["AESTHETIC SKILLS Remarks"].slice(66, 99), {
        x: 390,
        y: 387,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can twirl"], {
        x: student["I can twirl"] === "PROGRESSIVE" ? 303 : 313,
        y: 305,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am flexible"], {
        x: student["I am flexible"] === "PROGRESSIVE" ? 303 : 313,
        y: 284,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["DANCE SMART Remarks"].slice(0, 33), {
        x: 390,
        y: 307,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["DANCE SMART Remarks"].slice(33, 66), {
        x: 390,
        y: 294,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["DANCE SMART Remarks"].slice(66, 99), {
        x: 390,
        y: 281,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can sing in harmony"], {
        x: student["I can sing in harmony"] === "PROGRESSIVE" ? 303 : 313,
        y: 240,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am lyrical"], {
        x: student["I am lyrical"] === "PROGRESSIVE" ? 303 : 313,
        y: 220,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC SMART Remarks"].slice(0, 33), {
        x: 390,
        y: 242,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC SMART Remarks"].slice(33, 66), {
        x: 390,
        y: 229,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC SMART Remarks"].slice(66, 99), {
        x: 390,
        y: 216,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am well coordinated"], {
        x: student["I am well coordinated"] === "PROGRESSIVE" ? 303 : 313,
        y: 176,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I show strength and endurance"], {
        x:
          student["I show strength and endurance"] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 155,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am prompt and swift"], {
        x: student["I am prompt and swift"] === "PROGRESSIVE" ? 303 : 313,
        y: 134,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I display team spirit"], {
        x: student["I display team spirit"] === "PROGRESSIVE" ? 303 : 313,
        y: 113,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["SPORTS SMARTS Remarks"].slice(0, 33), {
        x: 390,
        y: 176,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["SPORTS SMARTS Remarks"].slice(33, 66), {
        x: 390,
        y: 163,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["SPORTS SMARTS Remarks"].slice(66, 99), {
        x: 390,
        y: 150,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["SPORTS SMARTS Remarks"].slice(99, 132), {
        x: 390,
        y: 137,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText(student["I am ______ cms tall"], {
        x: 145,
        y: 671,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I weigh _______ kgs"], {
        x: 169,
        y: 655,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I am passionate about"], {
        x: 382,
        y: 665,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I enjoy _____________________________ with my friends"],
        {
          x: 174,
          y: 543,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(student["Total no. of working days"], {
        x: 405,
        y: 530,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["No. of days present"], {
        x: 450,
        y: 515,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I assist others"].slice(0, 20), {
        x: 305,
        y: 418,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I assist others"].slice(21, 40), {
        x: 305,
        y: 405,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I willingly share my resources"].slice(0, 20),
        {
          x: 305,
          y: 381,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["I willingly share my resources"].slice(21, 40),
        {
          x: 305,
          y: 368,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(student["I believe in team building"].slice(0, 20), {
        x: 305,
        y: 342,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I believe in team building"].slice(21, 40), {
        x: 305,
        y: 329,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(0, 100), {
        x: 57,
        y: 242,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(100, 200), {
        x: 57,
        y: 230,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(200, 300), {
        x: 57,
        y: 218,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(0, 100), {
        x: 57,
        y: 162,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(100, 200), {
        x: 57,
        y: 150,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(200, 300), {
        x: 57,
        y: 138,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(300, 400), {
        x: 57,
        y: 126,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawImage(teacherSign1Image, {
        x: 57,
        y: 50,
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
        const existingPdfBytes = await fetch("/asserts/UKG_term1.pdf").then(
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
      download(zipBlob, "UKG_report_cards.zip");
    } catch (error) {
      console.error("Error generating PDFs and ZIP file:", error);
    }
  };

  const fillAndDownloadSinglePdf = async (shouldDownload, shouldView) => {
    try {
      const existingPdfBytes = await fetch("/asserts/UKG_term1.pdf").then(
        (res) => res.arrayBuffer()
      );

      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      await fillPdfForm(selectedStudent, pdfDoc);

      if (shouldDownload) {
        const pdfBytes = await pdfDoc.save();
        download(pdfBytes, "UKG.pdf", "application/pdf");
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

export default Ukg_Term1;
