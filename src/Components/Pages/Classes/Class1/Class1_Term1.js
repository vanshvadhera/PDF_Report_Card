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
  const userData = data.term_1;
  console.log(data, "Data in Class1_Term2");
  console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/8bbef6eb15b7516dc39fe4d2a98a7f40261504813/99060cfc082965233f64675885aa1875.pdf"
    : "https://dpsin.s3.amazonaws.com/report/II/Class2.pdf";

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
        x: 210,
        y: 153,
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
      const text = cleanText(student["Fictional Character I like the most"][0]);
      fifthPage.drawText(text, {
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

      // seventhPage.drawImage(groupPhotImage, {
      //   x: 470,
      //   y: 160,
      //   width: 480,
      //   height: 290,
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
