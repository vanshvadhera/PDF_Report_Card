import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../../Data/Slices/UserDataSlice";

function Class1_Term1() {
  const location = useLocation();
  const { data, localPdf } = location.state;
  const userData = data.term_2;
  console.log(data, "Data in Class1_Term2");
  console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/330eecd575e2507c702854111222504b591934392/b6fa6b40304673f52faa7cba41a1fc9a.pdf"
    : "https://dpsin.s3.us-east-1.amazonaws.com/report/I/Class1term2.pdf";

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

      const teacherSign3Url = student.teacher_sign_3;
      const teacherSign3Bytes = await fetch(teacherSign3Url).then((res) =>
        res.arrayBuffer()
      );

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
      const teacherSign3Image = await pdfDoc.embedJpg(teacherSign3Bytes);
      // const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);

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
      const eleventhPage = pages[10];

      // Insert data dynamically from the student's record
      firstPage.drawImage(image, {
        x: 234,
        y: 330,
        width: 134,
        height: 175,
      });
      firstPage.drawText(student["Student Name"][0], {
        x: 200,
        y: 255,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.Section[0], {
        x: 480,
        y: 255,
        size: 10,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(student["Admission Number"][0], {
        x: 168,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll No."][0], {
        x: 295,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date Of Birth"][0].replace(/['"]/g, ""), {
        x: 430,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"][0], {
        x: 190,
        y: 188,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Mobile No."][0], {
        x: 215,
        y: 155,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"][0], {
        x: 195,
        y: 121,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Mobile No."][0], {
        x: 215,
        y: 87,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Language Competency"][0], {
        x: 293,
        y: 695,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Written assessment"][0], {
        x: 293,
        y: 678,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Articulation"][0], {
        x: 293,
        y: 645,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Proficiency"][0], {
        x: 293,
        y: 629,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Fluency"][0], {
        x: 293,
        y: 600,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Poem presentation"][0], {
        x: 293,
        y: 585,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Adept speller"][0], {
        x: 293,
        y: 553,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Word power"][0], {
        x: 293,
        y: 536,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Handwriting"][0], {
        x: 293,
        y: 519,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["ENGLISH Work presentation"][0], {
        x: 293,
        y: 502,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ENGLISH REMARKS"][0] &&
          thirdPage.drawText(student["ENGLISH REMARKS"][0], {
            x: 343,
            y: 695,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENGLISH REMARKS"][1] &&
          thirdPage.drawText(student["ENGLISH REMARKS"][1], {
            x: 343,
            y: 682,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENGLISH REMARKS"][2] &&
          thirdPage.drawText(student["ENGLISH REMARKS"][2], {
            x: 343,
            y: 669,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENGLISH REMARKS"][3] &&
          thirdPage.drawText(student["ENGLISH REMARKS"][3], {
            x: 343,
            y: 656,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["HINDI भाषा कुशलता"][0], {
        x: 293,
        y: 468,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI लिखित मूल्यांकन"][0], {
        x: 293,
        y: 451,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI उच्चारण एवं शब्द पहचान"][0], {
        x: 293,
        y: 418,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI पढ़ने की निपुणता / गतिशीलता"][0], {
        x: 293,
        y: 401,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI कविता प्रस्तुति"][0], {
        x: 293,
        y: 363,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI संवाद गतिशीलता"][0], {
        x: 293,
        y: 340,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI शब्द शुद्धता"][0], {
        x: 293,
        y: 305,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI शब्दकोष"][0], {
        x: 293,
        y: 288,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["HINDI हस्तलेख"][0], {
        x: 293,
        y: 271,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["HINDI Remarks"][0] &&
          thirdPage.drawText(student["HINDI Remarks"][0], {
            x: 343,
            y: 468,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["HINDI Remarks"][1] &&
          thirdPage.drawText(student["HINDI Remarks"][1], {
            x: 343,
            y: 455,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["HINDI Remarks"][2] &&
          thirdPage.drawText(student["HINDI Remarks"][2], {
            x: 343,
            y: 442,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["HINDI Remarks"][3] &&
          thirdPage.drawText(student["HINDI Remarks"][3], {
            x: 343,
            y: 429,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["MATHEMATICS Written assessment"][0], {
        x: 293,
        y: 235,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["MATHEMATICS Computational & calculation skills"][0],
        {
          x: 293,
          y: 213,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["MATHEMATICS Mental aptitude"][0], {
        x: 293,
        y: 192,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MATHEMATICS Work presentation"][0], {
        x: 293,
        y: 170,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MATHEMATICS Remarks"][0] &&
          thirdPage.drawText(student["MATHEMATICS Remarks"][0], {
            x: 343,
            y: 235,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MATHEMATICS Remarks"][1] &&
          thirdPage.drawText(student["MATHEMATICS Remarks"][1], {
            x: 343,
            y: 222,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MATHEMATICS Remarks"][2] &&
          thirdPage.drawText(student["MATHEMATICS Remarks"][2], {
            x: 343,
            y: 209,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MATHEMATICS Remarks"][3] &&
          thirdPage.drawText(student["MATHEMATICS Remarks"][3], {
            x: 343,
            y: 196,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(
        student["ENVIORNMENTAL STUDIES Written assessment"][0],
        {
          x: 293,
          y: 130,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student[
          "ENVIORNMENTAL STUDIE Expanded awareness of the surroundings"
        ][0],
        {
          x: 293,
          y: 110,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["ENVIORNMENTAL STUDIE Work presentation"][0], {
        x: 293,
        y: 86,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ENVIRONMENTAL STUDIES Remarks"][0] &&
          thirdPage.drawText(student["ENVIRONMENTAL STUDIES Remarks"][0], {
            x: 343,
            y: 130,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENVIRONMENTAL STUDIES Remarks"][1] &&
          thirdPage.drawText(student["ENVIRONMENTAL STUDIES Remarks"][1], {
            x: 343,
            y: 117,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENVIRONMENTAL STUDIES Remarks"][2] &&
          thirdPage.drawText(student["ENVIRONMENTAL STUDIES Remarks"][2], {
            x: 343,
            y: 104,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["COMPUTER SCIENCE Computer skills"][0], {
        x: 293,
        y: 51,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["COMPUTER SCIENCE Remarks"][0], {
        x: 343,
        y: 51,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fourthPage.drawText(student["ART & CRAFT Artistic ability"][0], {
        x: 291,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ART & CRAFT Remarks"][0], {
        x: 335,
        y: 693,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Lyrical memory"][0], {
        x: 291,
        y: 655,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Sings melodiously"][0], {
        x: 291,
        y: 635,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC Shows eagerness"][0], {
        x: 291,
        y: 614,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MUSIC Remarks"][0] &&
          fourthPage.drawText(student["MUSIC Remarks"][0], {
            x: 335,
            y: 655,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC Remarks"][1] &&
          fourthPage.drawText(student["MUSIC Remarks"][1], {
            x: 335,
            y: 642,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC Remarks"][2] &&
          fourthPage.drawText(student["MUSIC Remarks"][2], {
            x: 335,
            y: 629,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      fourthPage.drawText(
        student["DANCE Demonstrates aesthetic hand and leg coordination"][0],
        {
          x: 291,
          y: 570,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["DANCE Shows zest to learn new dancing skills"][0],
        {
          x: 291,
          y: 542,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["DANCE Remarks"][0] &&
          fourthPage.drawText(student["DANCE Remarks"][0], {
            x: 335,
            y: 570,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE Remarks"][1] &&
          fourthPage.drawText(student["DANCE Remarks"][1], {
            x: 335,
            y: 557,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE Remarks"][2] &&
          fourthPage.drawText(student["DANCE Remarks"][2], {
            x: 335,
            y: 544,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(
        student[
          "PHYSICAL EDUCATION Shows strength and endurance in carrying, walking and running"
        ][0],
        {
          x: 291,
          y: 495,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["PHYSICAL EDUCATION Adheres to guidance"][0],
        {
          x: 291,
          y: 470,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["PHYSICAL EDUCATION Displays team spirit"][0],
        {
          x: 291,
          y: 450,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["PHYSICAL EDUCATION Remarks"][0] &&
          fourthPage.drawText(student["PHYSICAL EDUCATION Remarks"][0], {
            x: 335,
            y: 495,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PHYSICAL EDUCATION Remarks"][1] &&
          fourthPage.drawText(student["PHYSICAL EDUCATION Remarks"][1], {
            x: 335,
            y: 482,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PHYSICAL EDUCATION Remarks"][2] &&
          fourthPage.drawText(student["PHYSICAL EDUCATION Remarks"][2], {
            x: 335,
            y: 469,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PHYSICAL EDUCATION Remarks"][3] &&
          fourthPage.drawText(student["PHYSICAL EDUCATION Remarks"][3], {
            x: 335,
            y: 456,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Personal upkeep & cleanliness"][0],
        {
          x: 291,
          y: 406,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Tidy and presentable"][0],
        {
          x: 291,
          y: 386,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS & WELL BEING Managing personal belongings"][0],
        {
          x: 291,
          y: 364,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["LIFE SKILLS & WELL BEING Remarks"][0] &&
          fourthPage.drawText(student["LIFE SKILLS & WELL BEING Remarks"][0], {
            x: 335,
            y: 406,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LIFE SKILLS & WELL BEING Remarks"][1] &&
          fourthPage.drawText(student["LIFE SKILLS & WELL BEING Remarks"][1], {
            x: 335,
            y: 393,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LIFE SKILLS & WELL BEING Remarks"][2] &&
          fourthPage.drawText(student["LIFE SKILLS & WELL BEING Remarks"][2], {
            x: 335,
            y: 380,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LIFE SKILLS & WELL BEING Remarks"][3] &&
          fourthPage.drawText(student["LIFE SKILLS & WELL BEING Remarks"][3], {
            x: 335,
            y: 367,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["COGNITIVE DEVELOPMENT Vigilant mind"][0], {
        x: 291,
        y: 320,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["COGNITIVE DEVELOPMENT Proactive & volunteering"][0],
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
        ][0],
        {
          x: 291,
          y: 280,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["COGNITIVE DEVELOPMENT Self-reliance"][0], {
        x: 291,
        y: 257,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["COGNITIVE DEVELOPMENT Engagement in classroom ventures"][0],
        {
          x: 291,
          y: 235,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["COGNITIVE DEVELOPMENT Remarks"][0] &&
          fourthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks"][0], {
            x: 335,
            y: 320,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["COGNITIVE DEVELOPMENT Remarks"][1] &&
          fourthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks"][1], {
            x: 335,
            y: 307,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["COGNITIVE DEVELOPMENT Remarks"][2] &&
          fourthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks"][2], {
            x: 335,
            y: 294,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["COGNITIVE DEVELOPMENT Remarks"][3] &&
          fourthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks"][3], {
            x: 335,
            y: 281,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Discipline"][0],
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
        ][0],
        {
          x: 291,
          y: 172,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Timeliness"][0],
        {
          x: 291,
          y: 150,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Shows empathy"
        ][0],
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
        ][0],
        {
          x: 291,
          y: 107,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"][0] &&
          fourthPage.drawText(
            student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"][0],
            {
              x: 335,
              y: 192,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"][1] &&
          fourthPage.drawText(
            student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"][1],
            {
              x: 335,
              y: 179,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"][2] &&
          fourthPage.drawText(
            student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"][2],
            {
              x: 335,
              y: 166,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"][3] &&
          fourthPage.drawText(
            student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks"][3],
            {
              x: 335,
              y: 153,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      fourthPage.drawText(
        student["APPLIED LEARNING EXPERIENCES Active participation"][0],
        {
          x: 291,
          y: 67,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["APPLIED LEARNING EXPERIENCES Reflection and integration"][0],
        {
          x: 291,
          y: 47,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["APPLIED LEARNING EXPERIENCES Remarks"][0] &&
          fourthPage.drawText(
            student["APPLIED LEARNING EXPERIENCES Remarks"][0],
            {
              x: 335,
              y: 67,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["APPLIED LEARNING EXPERIENCES Remarks"][1] &&
          fourthPage.drawText(
            student["APPLIED LEARNING EXPERIENCES Remarks"][1],
            {
              x: 335,
              y: 54,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["APPLIED LEARNING EXPERIENCES Remarks"][2] &&
          fourthPage.drawText(
            student["APPLIED LEARNING EXPERIENCES Remarks"][2],
            {
              x: 335,
              y: 41,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }

      fifthPage.drawText(student["My Favourite Hue…"][0], {
        x: 125,
        y: 545,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Relish"][0], {
        x: 335,
        y: 545,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["Fictional Character I like the most"][0], {
        x: 95,
        y: 390,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Best Buddy"][0].slice(0, 20), {
        x: 335,
        y: 425,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Best Buddy"][0].slice(20, 40), {
        x: 345,
        y: 415,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Favourite Bird.."][0], {
        x: 118,
        y: 248,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Enjoy Celebrating…."][0], {
        x: 350,
        y: 290,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My Favourite Game.."][0], {
        x: 117,
        y: 130,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I Learnt A Lot From      This Book...."][0], {
        x: 335,
        y: 105,
        size: 14,
        color: rgb(0, 0, 0),
      });
      {
        student["Honors To My Name"][0] &&
          sixthPage.drawText(student["Honors To My Name"][0], {
            x: 95,
            y: 650,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Honors To My Name"][1] &&
          sixthPage.drawText(student["Honors To My Name"][1], {
            x: 95,
            y: 635,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Honors To My Name"][2] &&
          sixthPage.drawText(student["Honors To My Name"][2], {
            x: 95,
            y: 620,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Teacher's Holistic Over View"][0] &&
          sixthPage.drawText(student["Teacher's Holistic Over View"][0], {
            x: 95,
            y: 560,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Teacher's Holistic Over View"][1] &&
          sixthPage.drawText(student["Teacher's Holistic Over View"][1], {
            x: 95,
            y: 545,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Teacher's Holistic Over View"][2] &&
          sixthPage.drawText(student["Teacher's Holistic Over View"][2], {
            x: 95,
            y: 530,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Parent's Reflection"][0] &&
          sixthPage.drawText(student["Parent's Reflection"][0], {
            x: 95,
            y: 447,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Parent's Reflection"][1] &&
          sixthPage.drawText(student["Parent's Reflection"][1], {
            x: 95,
            y: 432,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Parent's Reflection"][2] &&
          sixthPage.drawText(student["Parent's Reflection"][2], {
            x: 95,
            y: 417,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      sixthPage.drawImage(teacherSign1Image, {
        x: 90,
        y: 370,
        width: 100,
        height: 30,
      });
      sixthPage.drawText(student["Total No. Of Working Days"][0], {
        x: 345,
        y: 170,
        size: 15,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["No. Of Days Present"][0], {
        x: 345,
        y: 130,
        size: 15,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(student["Attendance %"][0].replace(/['"]/g, ""), {
        x: 340,
        y: 85,
        size: 15,
        color: rgb(0, 0, 0),
      });

      seventhPage.drawText(student["ENGLISH Language Competency_2"][0], {
        x: 293,
        y: 679,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Written assessment_2"][0], {
        x: 293,
        y: 665,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Articulation_2"][0], {
        x: 293,
        y: 630,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Proficiency_2"][0], {
        x: 293,
        y: 617,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Fluency_2"][0], {
        x: 293,
        y: 589,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Poem presentation_2"][0], {
        x: 293,
        y: 575,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Adept speller_2"][0], {
        x: 293,
        y: 543,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Effective sentence building_2"][0], {
        x: 293,
        y: 526,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Word power_2"][0], {
        x: 293,
        y: 509,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Handwriting_2"][0], {
        x: 293,
        y: 493,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["ENGLISH Work presentation_2"][0], {
        x: 293,
        y: 476,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ENGLISH REMARKS_2"][0] &&
          seventhPage.drawText(student["ENGLISH REMARKS_2"][0], {
            x: 345,
            y: 680,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENGLISH REMARKS_2"][1] &&
          seventhPage.drawText(student["ENGLISH REMARKS_2"][1], {
            x: 345,
            y: 667,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENGLISH REMARKS_2"][2] &&
          seventhPage.drawText(student["ENGLISH REMARKS_2"][2], {
            x: 345,
            y: 654,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENGLISH REMARKS_2"][3] &&
          seventhPage.drawText(student["ENGLISH REMARKS_2"][3], {
            x: 345,
            y: 641,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      seventhPage.drawText(student["HINDI भाषा कुशलता_2"][0], {
        x: 293,
        y: 443,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["HINDI लिखित मूल्यांकन_2"][0], {
        x: 293,
        y: 426,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["HINDI उच्चारण एवं शब्द पहचान_2"][0], {
        x: 293,
        y: 391,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["HINDI पढ़ने की निपुणता / गतिशीलता_2"][0], {
        x: 293,
        y: 373,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["HINDI कविता प्रस्तुति_2"][0], {
        x: 293,
        y: 340,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["HINDI संवाद गतिशीलता_2"][0], {
        x: 293,
        y: 322,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["HINDI शब्द शुद्धता_2"][0], {
        x: 293,
        y: 288,
        size: 10,
        color: rgb(0, 0, 0),
      });

      
      seventhPage.drawText(student["HINDI वाक्य संरचना_2"][0], {
        x: 293,
        y: 271,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["HINDI शब्दकोष_2"][0], {
        x: 293,
        y: 254,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["HINDI हस्तलेख_2"][0], {
        x: 293,
        y: 237,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["HINDI Remarks_2"][0] &&
          seventhPage.drawText(student["HINDI Remarks_2"][0], {
            x: 343,
            y: 445,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["HINDI Remarks_2"][1] &&
          seventhPage.drawText(student["HINDI Remarks_2"][1], {
            x: 343,
            y: 432,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["HINDI Remarks_2"][2] &&
          seventhPage.drawText(student["HINDI Remarks_2"][2], {
            x: 343,
            y: 419,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["HINDI Remarks_2"][3] &&
          seventhPage.drawText(student["HINDI Remarks_2"][3], {
            x: 343,
            y: 406,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      seventhPage.drawText(student["MATHEMATICS Written assessment_2"][0], {
        x: 293,
        y: 202,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(
        student["MATHEMATICS Computational & calculation skills_2"][0],
        {
          x: 293,
          y: 183,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(student["MATHEMATICS Mental aptitude_2"][0], {
        x: 293,
        y: 166,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["MATHEMATICS Work presentation_2"][0], {
        x: 293,
        y: 149,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MATHEMATICS Remarks_2"][0] &&
          seventhPage.drawText(student["MATHEMATICS Remarks_2"][0], {
            x: 343,
            y: 203,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MATHEMATICS Remarks_2"][1] &&
          seventhPage.drawText(student["MATHEMATICS Remarks_2"][1], {
            x: 343,
            y: 190,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MATHEMATICS Remarks_2"][2] &&
          seventhPage.drawText(student["MATHEMATICS Remarks_2"][2], {
            x: 343,
            y: 177,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MATHEMATICS Remarks_2"][3] &&
          seventhPage.drawText(student["MATHEMATICS Remarks_2"][3], {
            x: 343,
            y: 164,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      seventhPage.drawText(
        student["ENVIORNMENTAL STUDIES Written assessment_2"][0],
        {
          x: 293,
          y: 110,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "ENVIORNMENTAL STUDIE Expanded awareness of the surroundings_2"
        ][0],
        {
          x: 293,
          y: 86,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["ENVIORNMENTAL STUDIE Work presentation_2"][0],
        {
          x: 293,
          y: 68,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["ENVIRONMENTAL STUDIES Remarks_2"][0] &&
          seventhPage.drawText(student["ENVIRONMENTAL STUDIES Remarks_2"][0], {
            x: 343,
            y: 110,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENVIRONMENTAL STUDIES Remarks_2"][1] &&
          seventhPage.drawText(student["ENVIRONMENTAL STUDIES Remarks_2"][1], {
            x: 343,
            y: 97,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENVIRONMENTAL STUDIES Remarks_2"][2] &&
          seventhPage.drawText(student["ENVIRONMENTAL STUDIES Remarks_2"][2], {
            x: 343,
            y: 84,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      seventhPage.drawText(student["COMPUTER SCIENCE Computer skills_2"][0], {
        x: 293,
        y: 27 ,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["COMPUTER SCIENCE Remarks_2"][0], {
        x: 343,
        y: 31,
        size: 10,
        color: rgb(0, 0, 0),
      });

      eighthPage.drawText(student["ART & CRAFT Artistic ability_2"][0], {
        x: 291,
        y: 713,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["ART & CRAFT Remarks_2"][0], {
        x: 335,
        y: 717,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["MUSIC Lyrical memory_2"][0], {
        x: 291,
        y: 675,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["MUSIC Sings melodiously_2"][0], {
        x: 291,
        y: 655,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["MUSIC Shows eagerness_2"][0], {
        x: 291,
        y: 635,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MUSIC Remarks_2"][0] &&
          eighthPage.drawText(student["MUSIC Remarks_2"][0], {
            x: 335,
            y: 680,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC Remarks_2"][1] &&
          eighthPage.drawText(student["MUSIC Remarks_2"][1], {
            x: 335,
            y: 667,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC Remarks_2"][2] &&
          eighthPage.drawText(student["MUSIC Remarks_2"][2], {
            x: 335,
            y: 654,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      eighthPage.drawText(
        student["DANCE Demonstrates aesthetic hand and leg coordination_2"][0],
        {
          x: 291,
          y: 590,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["DANCE Shows zest to learn new dancing skills_2"][0],
        {
          x: 291,
          y: 562,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["DANCE Remarks_2"][0] &&
          eighthPage.drawText(student["DANCE Remarks_2"][0], {
            x: 335,
            y: 597,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE Remarks_2"][1] &&
          eighthPage.drawText(student["DANCE Remarks_2"][1], {
            x: 335,
            y: 584,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE Remarks_2"][2] &&
          eighthPage.drawText(student["DANCE Remarks_2"][2], {
            x: 335,
            y: 571,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Shows strength and endurance in carrying, walking and running_2"
        ][0],
        {
          x: 291,
          y: 515,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["PHYSICAL EDUCATION Adheres to guidance_2"][0],
        {
          x: 291,
          y: 490,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["PHYSICAL EDUCATION Displays team spirit_2"][0],
        {
          x: 291,
          y: 470,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["PHYSICAL EDUCATION Remarks_2"][0] &&
          eighthPage.drawText(student["PHYSICAL EDUCATION Remarks_2"][0], {
            x: 335,
            y: 520,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PHYSICAL EDUCATION Remarks_2"][1] &&
          eighthPage.drawText(student["PHYSICAL EDUCATION Remarks_2"][1], {
            x: 335,
            y: 507,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PHYSICAL EDUCATION Remarks_2"][2] &&
          eighthPage.drawText(student["PHYSICAL EDUCATION Remarks_2"][2], {
            x: 335,
            y: 482,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PHYSICAL EDUCATION Remarks_2"][3] &&
          eighthPage.drawText(student["PHYSICAL EDUCATION Remarks_2"][3], {
            x: 335,
            y: 456,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(
        student["LIFE SKILLS & WELL BEING Personal upkeep & cleanliness_2"][0],
        {
          x: 291,
          y: 426,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["LIFE SKILLS & WELL BEING Tidy and presentable_2"][0],
        {
          x: 291,
          y: 406,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["LIFE SKILLS & WELL BEING Managing personal belongings_2"][0],
        {
          x: 291,
          y: 384,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["LIFE SKILLS & WELL BEING Remarks_2"][0] &&
          eighthPage.drawText(
            student["LIFE SKILLS & WELL BEING Remarks_2"][0],
            {
              x: 335,
              y: 430,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["LIFE SKILLS & WELL BEING Remarks_2"][1] &&
          eighthPage.drawText(
            student["LIFE SKILLS & WELL BEING Remarks_2"][1],
            {
              x: 335,
              y: 420,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["LIFE SKILLS & WELL BEING Remarks_2"][2] &&
          eighthPage.drawText(
            student["LIFE SKILLS & WELL BEING Remarks_2"][2],
            {
              x: 335,
              y: 410,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["LIFE SKILLS & WELL BEING Remarks_2"][3] &&
          eighthPage.drawText(
            student["LIFE SKILLS & WELL BEING Remarks_2"][3],
            {
              x: 335,
              y: 400,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      eighthPage.drawText(student["COGNITIVE DEVELOPMENT Vigilant mind_2"][0], {
        x: 291,
        y: 340,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(
        student["COGNITIVE DEVELOPMENT Proactive & volunteering_2"][0],
        {
          x: 291,
          y: 320,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COGNITIVE DEVELOPMENT Adherence and compliance to instructions_2"
        ][0],
        {
          x: 291,
          y: 300,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(student["COGNITIVE DEVELOPMENT Self-reliance_2"][0], {
        x: 291,
        y: 277,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(
        student["COGNITIVE DEVELOPMENT Engagement in classroom ventures_2"][0],
        {
          x: 291,
          y: 255,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["COGNITIVE DEVELOPMENT Remarks_2"][0] &&
          eighthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks_2"][0], {
            x: 335,
            y: 345,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["COGNITIVE DEVELOPMENT Remarks_2"][1] &&
          eighthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks_2"][1], {
            x: 335,
            y: 332,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["COGNITIVE DEVELOPMENT Remarks_2"][2] &&
          eighthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks_2"][2], {
            x: 335,
            y: 319,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["COGNITIVE DEVELOPMENT Remarks_2"][3] &&
          eighthPage.drawText(student["COGNITIVE DEVELOPMENT Remarks_2"][3], {
            x: 335,
            y: 306,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Discipline_2"
        ][0],
        {
          x: 291,
          y: 212,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Radiant self - confidence_2"
        ][0],
        {
          x: 291,
          y: 192,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Timeliness_2"
        ][0],
        {
          x: 291,
          y: 170,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Shows empathy_2"
        ][0],
        {
          x: 291,
          y: 148,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Courteous approach_2"
        ][0],
        {
          x: 291,
          y: 127,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks_2"][0] &&
          eighthPage.drawText(
            student[
              "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks_2"
            ][0],
            {
              x: 335,
              y: 218,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks_2"][1] &&
          eighthPage.drawText(
            student[
              "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks_2"
            ][1],
            {
              x: 335,
              y: 205,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks_2"][2] &&
          eighthPage.drawText(
            student[
              "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks_2"
            ][2],
            {
              x: 335,
              y: 192,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks_2"][3] &&
          eighthPage.drawText(
            student[
              "COMMUNICATION AND SOCIO-EMOTIONAL DEVELOPMENT Remarks_2"
            ][3],
            {
              x: 335,
              y: 179,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      eighthPage.drawText(
        student["APPLIED LEARNING EXPERIENCES Active participation_2"][0],
        {
          x: 291,
          y: 89 ,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["APPLIED LEARNING EXPERIENCES Reflection and integration_2"][0],
        {
          x: 291,
          y: 67,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["APPLIED LEARNING EXPERIENCES Remarks_2"][0] &&
          eighthPage.drawText(
            student["APPLIED LEARNING EXPERIENCES Remarks_2"][0],
            {
              x: 335,
              y: 93,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["APPLIED LEARNING EXPERIENCES Remarks_2"][1] &&
          eighthPage.drawText(
            student["APPLIED LEARNING EXPERIENCES Remarks_2"][1],
            {
              x: 335,
              y: 80,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["APPLIED LEARNING EXPERIENCES Remarks_2"][2] &&
          eighthPage.drawText(
            student["APPLIED LEARNING EXPERIENCES Remarks_2"][2],
            {
              x: 335,
              y: 67,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }

      ninthPage.drawText(student["I Enjoy Visiting_2"][0], {
        x: 80,
        y: 574,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["My Biggest Strength is_2"][0], {
        x: 375,
        y: 563,
        size: 14,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["I Aspire To Be_2"][0], {
        x: 80,
        y: 408,
        size: 14,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["I Am Glad To Be _________ years_2"][0], {
        x: 420,
        y: 413,
        size: 14,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(
        student["I’m Growing Each Day ______cms_2"][0],
        {
          x: 80,
          y: 243,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student["& ____ in kgs_2"][0],
        {
          x: 180,
          y: 243,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(student["Total No. Of Working Days_2"][0], {
        x: 515,
        y: 256,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["No. Of Days Present_2"][0], {
        x: 510,
        y: 235,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Attendance %_2"][0], {
        x: 495,
        y: 214,
        size: 14,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["I help and assist others_2"][0].slice(0, 20), {
              x: 330,
              y: 108,
              size: 12,
              color: rgb(0, 0, 0),
            });
           
      ninthPage.drawText(student["I willingly share my resources_2"][0], {
        x: 330,
        y: 75,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["I work independently_2"][0], {
        x: 330,
        y: 45,
        size: 12,
        color: rgb(0, 0, 0),
      });
      
      {
        student["Honors To My Name_2"][0] &&
          tenthPage.drawText(student["Honors To My Name_2"][0], {
            x: 100,
            y: 650,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Honors To My Name_2"][1] &&
          tenthPage.drawText(student["Honors To My Name_2"][1], {
            x: 100,
            y: 635,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Honors To My Name_2"][2] &&
          tenthPage.drawText(student["Honors To My Name_2"][2], {
            x: 100,
            y: 620,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Teacher's Holistic Over View_2"][0] &&
          tenthPage.drawText(student["Teacher's Holistic Over View_2"][0], {
            x: 100,
            y: 560,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Teacher's Holistic Over View_2"][1] &&
          tenthPage.drawText(student["Teacher's Holistic Over View_2"][1], {
            x: 100,
            y: 545,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Teacher's Holistic Over View_2"][2] &&
          tenthPage.drawText(student["Teacher's Holistic Over View_2"][2], {
            x: 100,
            y: 530,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Parent's Reflection_2"][0] &&
          tenthPage.drawText(student["Parent's Reflection_2"][0], {
            x: 100,
            y: 447,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Parent's Reflection_2"][1] &&
          tenthPage.drawText(student["Parent's Reflection_2"][1], {
            x: 100,
            y: 432,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Parent's Reflection_2"][2] &&
          tenthPage.drawText(student["Parent's Reflection_2"][2], {
            x: 100,
            y: 417,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }

      tenthPage.drawImage(teacherSign3Image, {
        x: 90,
        y: 375,
        width: 100,
        height: 30,
      });

      tenthPage.drawText(
        student["I’m happy to go to Class ……_2"][0],
        {
          x: 373,
          y: 107,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      eleventhPage.drawImage(groupPhotImage, {
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
      download(zipBlob, "Class1_report_cards.zip");
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
          {zipButtonText}
        </button>
      </div>
      {/* {pdfUrl && ( */}
      <iframe ref={iframeRef} className={styles.iframe} title="PDF Preview" />
      {/* )} */}
    </div>
  );
}

export default Class1_Term1;