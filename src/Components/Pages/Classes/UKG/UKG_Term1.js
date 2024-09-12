import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../../Data/Slices/UserDataSlice";

function Ukg_Term1() {
  const location = useLocation();
  const { data } = location.state;
  const userData = data.term_1;
  console.log(data, "Data in Class1_Term2");

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
      firstPage.drawText(student["Student's Name"][0], {
        x: 210,
        y: 238,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.Section[0], {
        x: 425,
        y: 238,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admn.no"][0], {
        x: 168,
        y: 210,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll no"][0], {
        x: 315,
        y: 210,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"][0].replace(/['"]/g, ""), {
        x: 460,
        y: 210,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"][0], {
        x: 202,
        y: 181,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's (Mob)"][0], {
        x: 200,
        y: 153,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"][0], {
        x: 205,
        y: 124,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's (Mob)"][0], {
        x: 204,
        y: 96,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["I am conscious of personal hygiene"][0], {
        x:
          student["I am conscious of personal hygiene"][0] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 673,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am responsible and dependable"][0], {
        x:
          student["I am responsible and dependable"][0] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 652,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I embrace teamwork"][0], {
        x: student["I embrace teamwork"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 630,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am polite and courteous"][0], {
        x:
          student["I am polite and courteous"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 610,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I take care of personal belongings"][0], {
        x:
          student["I take care of personal belongings"][0] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 590,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["SELF SMART Remarks"][0] &&
          thirdPage.drawText(student["SELF SMART Remarks"][0], {
            x: 353,
            y: 673,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF SMART Remarks"][1] &&
          thirdPage.drawText(student["SELF SMART Remarks"][1], {
            x: 353,
            y: 660,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF SMART Remarks"][2] &&
          thirdPage.drawText(student["SELF SMART Remarks"][2], {
            x: 353,
            y: 647,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF SMART Remarks"][3] &&
          thirdPage.drawText(student["SELF SMART Remarks"][3], {
            x: 353,
            y: 634,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I am disciplined"][0], {
        x: student["I am disciplined"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 544,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am an eloquent speaker"][0], {
        x: student["I am an eloquent speaker"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 525,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I take pride in my work"][0], {
        x: student["I take pride in my work"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 503,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MY MINDFULNESS Remarks"][0] &&
          thirdPage.drawText(student["MY MINDFULNESS Remarks"][0], {
            x: 353,
            y: 544,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MY MINDFULNESS Remarks"][1] &&
          thirdPage.drawText(student["MY MINDFULNESS Remarks"][1], {
            x: 353,
            y: 531,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MY MINDFULNESS Remarks"][2] &&
          thirdPage.drawText(student["MY MINDFULNESS Remarks"][2], {
            x: 353,
            y: 518,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MY MINDFULNESS Remarks"][3] &&
          thirdPage.drawText(student["MY MINDFULNESS Remarks"][3], {
            x: 353,
            y: 505,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I can recollect"][0], {
        x: student["I can recollect"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 460,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can enact while reciting"][0], {
        x:
          student["I can enact while reciting"][0] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 439,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can express clearly"][0], {
        x: student["I can express clearly"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 418,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am engaged and involved"][0], {
        x:
          student["I am engaged and involved"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 397,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["STORYTELLING AND RECITATION Remarks"][0] &&
          thirdPage.drawText(
            student["STORYTELLING AND RECITATION Remarks"][0],
            {
              x: 353,
              y: 460,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["STORYTELLING AND RECITATION Remarks"][1] &&
          thirdPage.drawText(
            student["STORYTELLING AND RECITATION Remarks"][1],
            {
              x: 353,
              y: 447,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["STORYTELLING AND RECITATION Remarks"][2] &&
          thirdPage.drawText(
            student["STORYTELLING AND RECITATION Remarks"][2],
            {
              x: 353,
              y: 434,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["STORYTELLING AND RECITATION Remarks"][3] &&
          thirdPage.drawText(
            student["STORYTELLING AND RECITATION Remarks"][3],
            {
              x: 353,
              y: 421,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      thirdPage.drawText(student["I demonstrate curiosity"][0], {
        x: student["I demonstrate curiosity"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 352,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can observe and explore"][0], {
        x:
          student["I can observe and explore"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 331,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can comprehend"][0], {
        x: student["I can comprehend"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 310,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["GENERAL AWARENESS Remarks"][0] &&
          thirdPage.drawText(student["GENERAL AWARENESS Remarks"][0], {
            x: 353,
            y: 352,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["GENERAL AWARENESS Remarks"][1] &&
          thirdPage.drawText(student["GENERAL AWARENESS Remarks"][1], {
            x: 353,
            y: 339,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["GENERAL AWARENESS Remarks"][2] &&
          thirdPage.drawText(student["GENERAL AWARENESS Remarks"][2], {
            x: 353,
            y: 326,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["GENERAL AWARENESS Remarks"][3] &&
          thirdPage.drawText(student["GENERAL AWARENESS Remarks"][3], {
            x: 353,
            y: 313,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I listen attentively"][0], {
        x: student["I listen attentively"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 265,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can assimilate"][0], {
        x: student["I can assimilate"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 244,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can reciprocate"][0], {
        x: student["I can reciprocate"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 223,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can build new words"][0], {
        x: student["I can build new words"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 202,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am fluent"][0], {
        x: student["I am fluent"][0] === "PROGRESSIVE" ? 267 : 277,
        y: 181,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I have good eye and hand co-ordination"][0], {
        x:
          student["I have good eye and hand co-ordination"][0] === "PROGRESSIVE"
            ? 267
            : 277,
        y: 160,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["LITERACY SMART ENGLISH Remarks"][0] &&
          thirdPage.drawText(student["LITERACY SMART ENGLISH Remarks"][0], {
            x: 353,
            y: 265,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LITERACY SMART ENGLISH Remarks"][1] &&
          thirdPage.drawText(student["LITERACY SMART ENGLISH Remarks"][1], {
            x: 353,
            y: 252,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LITERACY SMART ENGLISH Remarks"][2] &&
          thirdPage.drawText(student["LITERACY SMART ENGLISH Remarks"][2], {
            x: 353,
            y: 239,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      fourthPage.drawText(student["श्रवण कौशल"][0], {
        x: student["श्रवण कौशल"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["समझ कौशल"][0], {
        x: student["समझ कौशल"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 672,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["एकाग्रता"][0], {
        x: student["एकाग्रता"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 650,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["शब्दकोश"][0], {
        x: student["शब्दकोश"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 629,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["स्पष्टता"][0], {
        x: student["स्पष्टता"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 608,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["अक्षर पहचान"][0], {
        x: student["अक्षर पहचान"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 587,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["स्वर संबंधी"][0], {
        x: student["स्वर संबंधी"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 566,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["हस्त लेखन"][0], {
        x: student["हस्त लेखन"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 545,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["मेरी भाषा Remarks"][0] &&
          fourthPage.drawText(student["मेरी भाषा Remarks"][0], {
            x: 390,
            y: 693,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["मेरी भाषा Remarks"][1] &&
          fourthPage.drawText(student["मेरी भाषा Remarks"][1], {
            x: 390,
            y: 680,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["मेरी भाषा Remarks"][2] &&
          fourthPage.drawText(student["मेरी भाषा Remarks"][2], {
            x: 390,
            y: 667,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["मेरी भाषा Remarks"][3] &&
          fourthPage.drawText(student["मेरी भाषा Remarks"][3], {
            x: 390,
            y: 654,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(
        student["I display logical understanding of concepts"][0],
        {
          x:
            student["I display logical understanding of concepts"][0] ===
            "PROGRESSIVE"
              ? 303
              : 313,
          y: 500,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["I have a good mathematical understanding"][0],
        {
          x:
            student["I have a good mathematical understanding"][0] ===
            "PROGRESSIVE"
              ? 303
              : 313,
          y: 479,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["I can perform mathematical operations"][0], {
        x:
          student["I can perform mathematical operations"][0] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 458,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["NUMERACY SMART Remarks"][0] &&
          fourthPage.drawText(student["NUMERACY SMART Remarks"][0], {
            x: 390,
            y: 500,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks"][1] &&
          fourthPage.drawText(student["NUMERACY SMART Remarks"][1], {
            x: 390,
            y: 487,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks"][2] &&
          fourthPage.drawText(student["NUMERACY SMART Remarks"][2], {
            x: 390,
            y: 474,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks"][3] &&
          fourthPage.drawText(student["NUMERACY SMART Remarks"][3], {
            x: 390,
            y: 461,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I am an artist"][0], {
        x: student["I am an artist"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 413,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can use colours skillfully"][0], {
        x:
          student["I can use colours skillfully"][0] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 392,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I use vivid imagination with play-doh"][0], {
        x:
          student["I use vivid imagination with play-doh"][0] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 371,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["I work collaboratively in art and craft"][0],
        {
          x:
            student["I work collaboratively in art and craft"][0] ===
            "PROGRESSIVE"
              ? 303
              : 313,
          y: 350,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["AESTHETIC SKILLS Remarks"][0] &&
          fourthPage.drawText(student["AESTHETIC SKILLS Remarks"][0], {
            x: 390,
            y: 413,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["AESTHETIC SKILLS Remarks"][1] &&
          fourthPage.drawText(student["AESTHETIC SKILLS Remarks"][1], {
            x: 390,
            y: 400,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["AESTHETIC SKILLS Remarks"][2] &&
          fourthPage.drawText(student["AESTHETIC SKILLS Remarks"][2], {
            x: 390,
            y: 387,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I can twirl"][0], {
        x: student["I can twirl"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 305,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am flexible"][0], {
        x: student["I am flexible"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 284,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["DANCE SMART Remarks"][0] &&
          fourthPage.drawText(student["DANCE SMART Remarks"][0], {
            x: 390,
            y: 307,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE SMART Remarks"][1] &&
          fourthPage.drawText(student["DANCE SMART Remarks"][1], {
            x: 390,
            y: 294,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE SMART Remarks"][2] &&
          fourthPage.drawText(student["DANCE SMART Remarks"][2], {
            x: 390,
            y: 281,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I can sing in harmony"][0], {
        x: student["I can sing in harmony"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 240,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am lyrical"][0], {
        x: student["I am lyrical"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 220,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MUSIC SMART Remarks"][0] &&
          fourthPage.drawText(student["MUSIC SMART Remarks"][0], {
            x: 390,
            y: 242,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC SMART Remarks"][1] &&
          fourthPage.drawText(student["MUSIC SMART Remarks"][1], {
            x: 390,
            y: 229,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC SMART Remarks"][2] &&
          fourthPage.drawText(student["MUSIC SMART Remarks"][2], {
            x: 390,
            y: 216,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I am well coordinated"][0], {
        x: student["I am well coordinated"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 176,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I show strength and endurance"][0], {
        x:
          student["I show strength and endurance"][0] === "PROGRESSIVE"
            ? 303
            : 313,
        y: 155,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am prompt and swift"][0], {
        x: student["I am prompt and swift"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 134,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I display team spirit"][0], {
        x: student["I display team spirit"][0] === "PROGRESSIVE" ? 303 : 313,
        y: 113,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["SPORTS SMARTS Remarks"][0] &&
          fourthPage.drawText(student["SPORTS SMARTS Remarks"][0], {
            x: 390,
            y: 176,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SPORTS SMARTS Remarks"][1] &&
          fourthPage.drawText(student["SPORTS SMARTS Remarks"][1], {
            x: 390,
            y: 163,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SPORTS SMARTS Remarks"][2] &&
          fourthPage.drawText(student["SPORTS SMARTS Remarks"][2], {
            x: 390,
            y: 150,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SPORTS SMARTS Remarks"][3] &&
          fourthPage.drawText(student["SPORTS SMARTS Remarks"][3], {
            x: 390,
            y: 137,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      fifthPage.drawText(student["I am ______ cms tall"][0], {
        x: 145,
        y: 671,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I weigh _______ kgs"][0], {
        x: 169,
        y: 655,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I am passionate about"][0], {
        x: 382,
        y: 665,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I enjoy _____________________________ with my friends"][0],
        {
          x: 174,
          y: 543,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(student["Total no. of working days"][0], {
        x: 405,
        y: 530,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["No. of days present"][0], {
        x: 450,
        y: 515,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I assist others"][0].slice(0, 20), {
        x: 305,
        y: 418,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I assist others"][0].slice(21, 40), {
        x: 305,
        y: 405,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I willingly share my resources"][0].slice(0, 20),
        {
          x: 305,
          y: 381,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["I willingly share my resources"][0].slice(21, 40),
        {
          x: 305,
          y: 368,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["I believe in team building"][0].slice(0, 20),
        {
          x: 305,
          y: 342,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["I believe in team building"][0].slice(21, 40),
        {
          x: 305,
          y: 329,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["PARENT'S REFLECTION"][0] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][0], {
            x: 57,
            y: 242,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT'S REFLECTION"][1] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][1], {
            x: 57,
            y: 230,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT'S REFLECTION"][2] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][2], {
            x: 57,
            y: 218,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["TEACHER'S REFLECTION"][0] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][0], {
            x: 57,
            y: 162,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION"][1] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][1], {
            x: 57,
            y: 150,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION"][2] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][2], {
            x: 57,
            y: 138,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION"][3] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][3], {
            x: 57,
            y: 126,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fifthPage.drawImage(teacherSign1Image, {
        x: 57,
        y: 50,
        width: 150,
        height: 30,
      });

      sixthPage.drawImage(myPagePhotoImage, {
        x: 53,
        y: 120,
        width: 480,
        height: 598,
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
      setZipButtonText("Generating ZIP file...");
      const zip = new JSZip();

      for (let student of userData) {
        const existingPdfBytes = await fetch(
          "https://innovartan.s3.ap-southeast-1.amazonaws.com/resource/4/file-1725721624-1781446423.pdf"
        ).then((res) => res.arrayBuffer());

        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        await fillPdfForm(student, pdfDoc);

        const pdfBytes = await pdfDoc.save();

        // Add the PDF to the ZIP file, using the student's name for the file name
        zip.file(`${student["Admn.no"]}_report_card.pdf`, pdfBytes);
      }

      // Generate the ZIP file and download it
      const zipBlob = await zip.generateAsync({ type: "blob" });
      download(zipBlob, "UKG_report_cards.zip");
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
      const existingPdfBytes = await fetch(
        "https://innovartan.s3.amazonaws.com/1c5602fb110d78ecb973866f263a9d391962234724/d814c4e5600ba771020aec479aa4294b.pdf"
      ).then((res) => res.arrayBuffer());

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
          {zipButtonText}
        </button>
      </div>
      {/* {pdfUrl && ( */}
      <iframe ref={iframeRef} className={styles.iframe} title="PDF Preview" />
      {/* )} */}
    </div>
  );
}

export default Ukg_Term1;
