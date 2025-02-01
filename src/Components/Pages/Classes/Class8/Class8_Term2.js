import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../../Data/Slices/UserDataSlice";

function Class8_Term2() {
  const location = useLocation();
  const { data, localPdf } = location.state;
  const userData = data.term_2;
  //   console.log(data, "Data in Class3_Term1");
  console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/f3d2af1d5d7b7c2f5cedd57690e8db8f1298990606/948b653a62b609b2546f7bbbe14926cc.pdf"
    : "https://dpsin.s3.us-east-1.amazonaws.com/report/VIII/8thterm2.pdf";

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
      const seventhPage = pages[6];
      const eighthPage = pages[7];
      const ninthPage = pages[8];
      const tenthPage = pages[9];

      // Insert data dynamically from the student's record
      fifthPage.drawText(
        student[
          "ENGLISH Listens to comprehend effectively and understand the essence of the text"
        ][0],
        {
          x: 500,
          y: 735,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Articulates thoughts and ideas clearly using proper vocabulary and grammatically correct sentences"
        ][0],
        {
          x: 500,
          y: 698,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Correctly pronounces words and demonstrates fluency"
        ][0],
        {
          x: 500,
          y: 668,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Comprehends details effectively and is able to draw inferences"
        ][0],
        {
          x: 500,
          y: 640,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Demonstrates clarity in expression and thoughts using effective sentence structures, grammar, punctuation, vocabulary, writing techniques and a creative approach"
        ][0],
        {
          x: 500,
          y: 598,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Is able to pair poetry with visual art, creating art based on a poem's theme, imagery or emotions"
        ][0],
        {
          x: 500,
          y: 555,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Is able to create illustrations for scenes from prose and poems, further enabling him/her to deepen the understanding and interpretation of the text"
        ][0],
        {
          x: 500,
          y: 515,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["ENGLISH TEACHER’S REMARKS:"][0] &&
          fifthPage?.drawText(student["ENGLISH TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 450,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ENGLISH TEACHER’S REMARKS:"][1] &&
          fifthPage?.drawText(student["ENGLISH TEACHER’S REMARKS:"][1], {
            x: 50,
            y: 438,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }

      fifthPage.drawText(
        student[
          "HINDI Listens to comprehend effectively and understand the essence of the text"
        ][0],
        {
          x: 500,
          y: 355,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Articulates thoughts and ideas clearly using proper vocabulary and grammatically correct sentences"
        ][0],
        {
          x: 500,
          y: 318,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["HINDI Correctly pronounces words and demonstrates fluency"][0],
        {
          x: 500,
          y: 288,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Comprehends details effectively and is able to draw inferences"
        ][0],
        {
          x: 500,
          y: 260,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Demonstrates clarity in expression and thoughts using effective sentence structures, grammar, punctuation, vocabulary, writing techniques and a creative approach"
        ][0],
        {
          x: 500,
          y: 210,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Is able to pair poetry with visual art, creating art based on a poem's theme, imagery or emotions"
        ][0],
        {
          x: 500,
          y: 160,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Is able to create illustrations for scenes from prose and poems, further enabling him/her to deepen the understanding and interpretation of the text"
        ][0],
        {
          x: 500,
          y: 120,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["HINDI TEACHER’S REMARKS:"][0] &&
          fifthPage?.drawText(student["HINDI TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 46,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["HINDI TEACHER’S REMARKS:"][1] &&
          fifthPage?.drawText(student["HINDI TEACHER’S REMARKS:"][1], {
            x: 50,
            y: 34,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }

      sixthPage.drawText(
        student[
          "LANGUAGE III Listens to comprehend effectively and understand the essence of the text"
        ][0],
        {
          x: 500,
          y: 733,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "LANGUAGE III Articulates thoughts and ideas clearly using proper vocabulary and grammatically correct sentences"
        ][0],
        {
          x: 500,
          y: 695,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "LANGUAGE III Correctly pronounces words and demonstrates fluency"
        ][0],
        {
          x: 500,
          y: 666,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "LANGUAGE III Comprehends details effectively and is able to draw inferences"
        ][0],
        {
          x: 500,
          y: 637,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "LANGUAGE III Demonstrates clarity in expression and thoughts using effective sentence structures, grammar, punctuation, vocabulary, writing techniques and a creative approach"
        ][0],
        {
          x: 500,
          y: 585,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["LANGUAGE III TEACHER’S REMARKS:"][0] &&
          sixthPage?.drawText(student["LANGUAGE III TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 505,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE III TEACHER’S REMARKS:"][1] &&
          sixthPage?.drawText(student["LANGUAGE III TEACHER’S REMARKS:"][1], {
            x: 50,
            y: 493,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }

      sixthPage.drawText(
        student[
          "MATHEMATICS Demonstrates and understands of Mathematical concepts and procedural fluency"
        ][0],
        {
          x: 500,
          y: 410,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Applies Mathematical knowledge and skills in real life situations"
        ][0],
        {
          x: 500,
          y: 375,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Is able to identify mathematical problem solving techniques"
        ][0],
        {
          x: 500,
          y: 335,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Verifies whether the pattern works for every other similar situation"
        ][0],
        {
          x: 500,
          y: 300,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Uses appropriate mathematical language (notation, symbols, graphs and terminology) in both oral and written statements"
        ][0],
        {
          x: 500,
          y: 260,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Expresses the information and ideas in the specified format suitable for the peer group and teacher"
        ][0],
        {
          x: 500,
          y: 215,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Infers & interprets the information from different perspective and their impacts"
        ][0],
        {
          x: 500,
          y: 175,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Is able to create work that demonstrates the beauty of mathematical concepts by understanding their applications"
        ][0],
        {
          x: 500,
          y: 135,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["MATHEMATICS TEACHER’S REMARKS:"][0] &&
          sixthPage?.drawText(student["MATHEMATICS TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 56,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MATHEMATICS TEACHER’S REMARKS:"][1] &&
          sixthPage?.drawText(student["MATHEMATICS TEACHER’S REMARKS:"][1], {
            x: 50,
            y: 44,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }

      seventhPage.drawText(
        student[
          "SCIENCE Comprehends information & Correlates Science with life applications"
        ][0],
        {
          x: 500,
          y: 733,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SCIENCE Enquires and investigates problems with a scientific approach"
        ][0],
        {
          x: 500,
          y: 695,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SCIENCE Observant / shows practical thinking and well versed with Scientific Vocabulary"
        ][0],
        {
          x: 500,
          y: 656,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SCIENCE Comes up with new innovative ideas & has the ability to work in a team"
        ][0],
        {
          x: 500,
          y: 617,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SCIENCE Effectively integrates artistic elements to enhance understanding and communication of scientific concepts"
        ][0],
        {
          x: 500,
          y: 570,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["SCIENCE TEACHER’S REMARKS:"][0] &&
          seventhPage?.drawText(student["SCIENCE TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 496,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SCIENCE TEACHER’S REMARKS:"][0] &&
          seventhPage?.drawText(student["SCIENCE TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 484,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }

      seventhPage.drawText(
        student[
          "SOCIAL SCIENCE Is aware of concepts and interprets what is acquired and perceived"
        ][0],
        {
          x: 500,
          y: 390,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SOCIAL SCIENCE Collects and analyses qualitative or quantitative data by field surveys, investigations and case study"
        ][0],
        {
          x: 500,
          y: 350,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SOCIAL SCIENCE Identifies the causes and effects of social problems so that these can be resolved"
        ][0],
        {
          x: 500,
          y: 315,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SOCIAL SCIENCE Thinks of solutions to come to a conclusion"
        ][0],
        {
          x: 500,
          y: 275,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SOCIAL SCIENCE Identifies the physical features and visualises locations and concepts through an understanding of symbols that represent the physical world"
        ][0],
        {
          x: 500,
          y: 225,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SOCIAL SCIENCE Is able to create detailed maps or timelines and visualize historical events and geographical contexts"
        ][0],
        {
          x: 500,
          y: 185,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "SOCIAL SCIENCE Is able to engage and express in role play, music, documentaries, poems and debates by appreciating and experiencing the complexities of social interactions through emotional connections"
        ][0],
        {
          x: 500,
          y: 140,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["SOCIAL SCIENCE TEACHER’S REMARKS:"][0] &&
          seventhPage?.drawText(
            student["SOCIAL SCIENCE TEACHER’S REMARKS:"][0],
            {
              x: 50,
              y: 56,
              size: 13,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["SOCIAL SCIENCE TEACHER’S REMARKS:"][1] &&
          seventhPage?.drawText(
            student["SOCIAL SCIENCE TEACHER’S REMARKS:"][1],
            {
              x: 50,
              y: 44,
              size: 13,
              color: rgb(0, 0, 0),
            }
          );
      }

      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Is able to apply critical thinking and understanding"
        ][0],
        {
          x: 500,
          y: 739,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["COMPUTER SCIENCE Is capable of writing codes"][0],
        {
          x: 500,
          y: 705,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["COMPUTER SCIENCE Participates in classroom"][0],
        {
          x: 500,
          y: 677,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["COMPUTER SCIENCE Can understand software components"][0],
        {
          x: 500,
          y: 655,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );

      {
        student["COMPUTER SCIENCE TEACHER’S REMARKS:"][0] &&
          eighthPage?.drawText(
            student["COMPUTER SCIENCE TEACHER’S REMARKS:"][0],
            {
              x: 50,
              y: 597,
              size: 12,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["COMPUTER SCIENCE TEACHER’S REMARKS:"][0] &&
          eighthPage?.drawText(
            student["COMPUTER SCIENCE TEACHER’S REMARKS:"][0],
            {
              x: 50,
              y: 585,
              size: 13,
              color: rgb(0, 0, 0),
            }
          );
      }
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Punctual to the class, neatly dressed and attentive during sessions"
        ][0],
        {
          x: 500,
          y: 480,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Shows good use of fine motor skills and gross motor skills"
        ][0],
        {
          x: 500,
          y: 445,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Shows good use of hand eye coordination and initiates automatic response"
        ][0],
        {
          x: 500,
          y: 405,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["PHYSICAL EDUCATION TEACHER’S REMARKS:"][0] &&
          eighthPage?.drawText(
            student["PHYSICAL EDUCATION TEACHER’S REMARKS:"][0],
            {
              x: 50,
              y: 343,
              size: 12,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["PHYSICAL EDUCATION TEACHER’S REMARKS:"][0] &&
          eighthPage?.drawText(
            student["PHYSICAL EDUCATION TEACHER’S REMARKS:"][0],
            {
              x: 50,
              y: 330,
              size: 13,
              color: rgb(0, 0, 0),
            }
          );
      }
      eighthPage.drawText(
        student[
          "DANCE Demonstrates proficiency in executing dance steps, focusing on proper technique, body alignment and precision"
        ][0],
        {
          x: 500,
          y: 220,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "DANCE Can convey emotions, tell a story and express individual style through movements and gestures"
        ][0],
        {
          x: 500,
          y: 175,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "DANCE Can collaborate with peers in group performances, demonstrating team work and cohesion"
        ][0],
        {
          x: 500,
          y: 140,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["DANCE TEACHER’S REMARKS:"][0] &&
          eighthPage?.drawText(student["DANCE TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 70,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE TEACHER’S REMARKS:"][1] &&
          eighthPage?.drawText(student["DANCE TEACHER’S REMARKS:"][1], {
            x: 50,
            y: 58,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }

      ninthPage.drawText(
        student["MUSIC Practices regularly with diligence"][0],
        {
          x: 500,
          y: 734,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student[
          "MUSIC Is able to gauge the pattern of beats and time the music accordingly"
        ][0],
        {
          x: 500,
          y: 703,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student[
          "MUSIC Is able to modify an existing concept to a new conceptual framework"
        ][0],
        {
          x: 500,
          y: 670,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );

      {
        student["MUSIC TEACHER’S REMARKS:"][0] &&
          ninthPage?.drawText(student["MUSIC TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 615,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC TEACHER’S REMARKS:"][0] &&
          ninthPage?.drawText(student["MUSIC TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 602,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      ninthPage.drawText(
        student[
          "YOGA Demonstrates commitment to the practice and overall discipline during practice"
        ][0],
        {
          x: 500,
          y: 520,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student[
          "YOGA Is able to avoid distractions and maintain a focused mind set throughout various poses and sequences"
        ][0],
        {
          x: 500,
          y: 485,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student[
          "YOGA Evaluates the ability to maintain balance in standing, seated and inverted poses"
        ][0],
        {
          x: 500,
          y: 455,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["YOGA TEACHER’S REMARKS:"][0] &&
          ninthPage?.drawText(student["YOGA TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 400,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["YOGA TEACHER’S REMARKS:"][0] &&
          ninthPage?.drawText(student["YOGA TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 387,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      ninthPage.drawText(
        student[
          "ART Is able to experiment with concepts before the final creation"
        ][0],
        {
          x: 500,
          y: 300,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student[
          "ART Effectively communicates the intended message or feeling through art"
        ][0],
        {
          x: 500,
          y: 265,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student[
          "ART Demonstrates understanding and proficient use of chosen materials"
        ][0],
        {
          x: 500,
          y: 230,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["ART TEACHER’S REMARKS:"][0] &&
          ninthPage?.drawText(student["ART TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 175,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ART TEACHER’S REMARKS:"][1] &&
          ninthPage?.drawText(student["ART TEACHER’S REMARKS:"][1], {
            x: 50,
            y: 163,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      ninthPage.drawText(
        student["DISCIPLINE Is punctual and regular to the class"][0],
        {
          x: 500,
          y: 88,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student[
          "DISCIPLINE Takes care of the school property and follows  instructions during teaching learning process"
        ][0],
        {
          x: 500,
          y: 62,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );

      tenthPage.drawText(
        student["WORK EDUCATION Is decisive and convincing"][0],
        {
          x: 500,
          y: 748,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      tenthPage.drawText(
        student["WORK EDUCATION Finds a workable solution to the problems"][0],
        {
          x: 500,
          y: 727,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );
      tenthPage.drawText(
        student["WORK EDUCATION Listens carefully and gives feedback"][0],
        {
          x: 500,
          y: 702,
          size: 15,
          color: rgb(0, 0, 0),
        }
      );

      {
        student["WORK EDUCATION TEACHER’S REMARKS:"][0] &&
          tenthPage?.drawText(student["WORK EDUCATION TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 636,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["WORK EDUCATION TEACHER’S REMARKS:"][0] &&
          tenthPage?.drawText(student["WORK EDUCATION TEACHER’S REMARKS:"][0], {
            x: 50,
            y: 624,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }





      {
        student["My Achievements:"][0] &&
          tenthPage?.drawText(student["My Achievements:"][0], {
            x: 175,
            y: 536,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["My Achievements:"][1] &&
          tenthPage?.drawText(student["My Achievements:"][1], {
            x: 55,
            y: 516,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["My Achievements:"][2] &&
          tenthPage?.drawText(student["My Achievements:"][2], {
            x: 55,
            y: 496,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }






      {
        student["My Strengths :"][0] &&
          tenthPage?.drawText(student["My Strengths :"][0], {
            x: 150,
            y: 434,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["My Strengths :"][1] &&
          tenthPage?.drawText(student["My Strengths :"][1], {
            x: 55,
            y: 412,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["My Strengths :"][2] &&
          tenthPage?.drawText(student["My Strengths :"][2], {
            x: 55,
            y: 393,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }



      {
        student["My Weaknesses :"][0] &&
          tenthPage?.drawText(student["My Weaknesses :"][0], {
            x: 163,
            y: 328,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["My Weaknesses :"][1] &&
          tenthPage?.drawText(student["My Weaknesses :"][1], {
            x: 55,
            y: 308,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["My Weaknesses :"][2] &&
          tenthPage?.drawText(student["My Weaknesses :"][2], {
            x: 55,
            y: 288,
            size: 13,
            color: rgb(0, 0, 0),
          });
      }

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
              {student["Name of Student"]}
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

export default Class8_Term2;
