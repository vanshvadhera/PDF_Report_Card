import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../../Data/Slices/UserDataSlice";

function Class3_Term1() {
  const location = useLocation();
  const { data, localPdf } = location.state;
  const userData = data.term_2;
  console.log(data, "Data in Class3_Term2");
  //   console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/776540f593b44804e9bab4683850acba1205709531/c12f6852fdeefbf14481468882e75224.pdf"
    : "https://dpsin.s3.amazonaws.com/report/III/term2.pdf";

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

      const groupPhotUrl = student.group_photo;
      const groupPhotBytes = await fetch(groupPhotUrl).then((res) =>
        res.arrayBuffer()
      );

      const barUrl =
        "https://innovartan.s3.amazonaws.com/1cc34aea5f864bc6f60a0b15e4cdf0a31415071175/2cdb488e7a0f98f13f383a9e6be8a9c7.png";
      const barBytes = await fetch(barUrl).then((res) => res.arrayBuffer());

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSign1Image = await pdfDoc.embedJpg(teacherSign1Bytes);
      // const teacherSign2Image = await pdfDoc.embedJpg(teacherSign2Bytes);
      // const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);
      const barImage = await pdfDoc.embedPng(barBytes);

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
      const eleventhPage = pages[10];
      const twevelthPage = pages[11];
      const thirteenPage = pages[12];
      const fourteenPage = pages[13];
      const fifteenthPage = pages[14];

      // Insert data dynamically from the student's record
      firstPage.drawImage(image, {
        x: 236,
        y: 521,
        width: 123,
        height: 147,
      });
      firstPage.drawText(student["Student Name"][0], {
        x: 270,
        y: 277,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admission Number"][0], {
        x: 270,
        y: 247,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"][0], {
        x: 270,
        y: 217,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"][0], {
        x: 270,
        y: 189,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Class and Section"][0], {
        x: 270,
        y: 160,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll No."][0], {
        x: 270,
        y: 131,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"][0].replace(/['"]/g, ""), {
        x: 270,
        y: 102,
        size: 14,
        color: rgb(0, 0, 0),
      });

      firstPage.drawText(student["House"][0], {
        x: 270,
        y: 73,
        size: 14,
        color: rgb(0, 0, 0),
      });

      {
        student["ACADEMIC GOALS (Term I)"][0] &&
          thirdPage.drawText(student["ACADEMIC GOALS (Term I)"][0], {
            x: 57,
            y: 657,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS (Term I)"][1] &&
          thirdPage.drawText(student["ACADEMIC GOALS (Term I)"][1], {
            x: 57,
            y: 639,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS (Term I)"][2] &&
          thirdPage.drawText(student["ACADEMIC GOALS (Term I)"][2], {
            x: 57,
            y: 621,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS (Term I)"][3] &&
          thirdPage.drawText(student["ACADEMIC GOALS (Term I)"][3], {
            x: 57,
            y: 597,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["ACADEMIC ACHIEVEMENT (Term I)"][0] &&
          thirdPage.drawText(student["ACADEMIC ACHIEVEMENT (Term I)"][0], {
            x: 57,
            y: 502,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT (Term I)"][1] &&
          thirdPage.drawText(student["ACADEMIC ACHIEVEMENT (Term I)"][1], {
            x: 57,
            y: 484,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT (Term I)"][2] &&
          thirdPage.drawText(student["ACADEMIC ACHIEVEMENT (Term I)"][2], {
            x: 57,
            y: 464,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT (Term I)"][3] &&
          thirdPage.drawText(student["ACADEMIC ACHIEVEMENT (Term I)"][3], {
            x: 57,
            y: 441,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["NON ACADEMIC GOALS (Term I)"][0] &&
          thirdPage.drawText(student["NON ACADEMIC GOALS (Term I)"][0], {
            x: 57,
            y: 318,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS (Term I)"][1] &&
          thirdPage.drawText(student["NON ACADEMIC GOALS (Term I)"][1], {
            x: 57,
            y: 300,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS (Term I)"][2] &&
          thirdPage.drawText(student["NON ACADEMIC GOALS (Term I)"][2], {
            x: 57,
            y: 281,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS (Term I)"][3] &&
          thirdPage.drawText(student["NON ACADEMIC GOALS (Term I)"][3], {
            x: 57,
            y: 263,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC ACHIEVEMENT (Term I)"][0] &&
          thirdPage.drawText(student["NON ACADEMIC ACHIEVEMENT (Term I)"][0], {
            x: 57,
            y: 170,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC ACHIEVEMENT (Term I)"][1] &&
          thirdPage.drawText(student["NON ACADEMIC ACHIEVEMENT (Term I)"][1], {
            x: 57,
            y: 151,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC ACHIEVEMENT (Term I)"][2] &&
          thirdPage.drawText(student["NON ACADEMIC ACHIEVEMENT (Term I)"][2], {
            x: 57,
            y: 133,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC ACHIEVEMENT (Term I)"][3] &&
          thirdPage.drawText(student["NON ACADEMIC ACHIEVEMENT (Term I)"][3], {
            x: 57,
            y: 110,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays a sense of respect and responsibility"
        ][0],
        {
          x: 460,
          y: 681,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays a sense of respect and responsibility_2"
        ][0],
        {
          x: 525,
          y: 681,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Helps teachers in the routine work of the class"
        ][0],
        {
          x: 460,
          y: 662,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Helps teachers in the routine work of the class_2"
        ][0],
        {
          x: 525,
          y: 662,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Identifies and reports problems and suggests solutions"
        ][0],
        {
          x: 460,
          y: 643,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Identifies and reports problems and suggests solutions_2"
        ][0],
        {
          x: 525,
          y: 643,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays kindness towards peers"
        ][0],
        {
          x: 460,
          y: 605,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays kindness towards peers_2"
        ][0],
        {
          x: 525,
          y: 605,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays sharing and caring behaviour"
        ][0],
        {
          x: 460,
          y: 586,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays sharing and caring behaviour_2"
        ][0],
        {
          x: 525,
          y: 586,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Leads the group with remarkable grace"
        ][0],
        {
          x: 460,
          y: 566,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Leads the group with remarkable grace_2"
        ][0],
        {
          x: 525,
          y: 566,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Respects school property and school norms"
        ][0],
        {
          x: 460,
          y: 528,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Respects school property and school norms_2"
        ][0],
        {
          x: 525,
          y: 528,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Takes responsibility of one’s own actions"
        ][0],
        {
          x: 460,
          y: 509,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Takes responsibility of one’s own actions_2"
        ][0],
        {
          x: 525,
          y: 509,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["PERSONAL AND SOCIAL TRAITS Adapts positively to changes"][0],
        {
          x: 460,
          y: 490,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["PERSONAL AND SOCIAL TRAITS Adapts positively to changes_2"][0],
        {
          x: 525,
          y: 490,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Shows kindness to all life forms"
        ][0],
        {
          x: 460,
          y: 451,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Shows kindness to all life forms_2"
        ][0],
        {
          x: 525,
          y: 451,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Respects and shows sympathy towards environmental entities"
        ][0],
        {
          x: 460,
          y: 432,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Respects and shows sympathy towards environmental entities_2"
        ][0],
        {
          x: 525,
          y: 432,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Shows curiosity towards learning ways to protect the environment"
        ][0],
        {
          x: 460,
          y: 413,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Shows curiosity towards learning ways to protect the environment_2"
        ][0],
        {
          x: 525,
          y: 413,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS AND WELL BEING Manages emotions appropriately"][0],
        {
          x: 460,
          y: 298,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Manages emotions appropriately_2"
        ][0],
        {
          x: 525,
          y: 298,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Promotes and supports the school motto ‘Service Before Self’"
        ][0],
        {
          x: 460,
          y: 279,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Promotes and supports the school motto ‘Service Before Self’_2"
        ][0],
        {
          x: 525,
          y: 279,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Is exceptionally resilient and treats challenges as opportunities"
        ][0],
        {
          x: 460,
          y: 260,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Is exceptionally resilient and treats challenges as opportunities_2"
        ][0],
        {
          x: 525,
          y: 260,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Displays confidence by sharing ideas and views clearly"
        ][0],
        {
          x: 460,
          y: 221,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Displays confidence by sharing ideas and views clearly_2"
        ][0],
        {
          x: 525,
          y: 221,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Accomplishes all the tasks with precision"
        ][0],
        {
          x: 460,
          y: 202,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Accomplishes all the tasks with precision_2"
        ][0],
        {
          x: 525,
          y: 202,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shows interest in others’ opinions and concerns"
        ][0],
        {
          x: 460,
          y: 164,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shows interest in others’ opinions and concerns_2"
        ][0],
        {
          x: 525,
          y: 164,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shows co-operation and is a patient listener"
        ][0],
        {
          x: 460,
          y: 144,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shows co-operation and is a patient listener_2"
        ][0],
        {
          x: 525,
          y: 144,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shares responsibilities and credits"
        ][0],
        {
          x: 460,
          y: 106,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shares responsibilities and credits_2"
        ][0],
        {
          x: 525,
          y: 106,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Pays attention to the responses of others"
        ][0],
        {
          x: 460,
          y: 87,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Pays attention to the responses of others_2"
        ][0],
        {
          x: 525,
          y: 82,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Plans and carries out group activities well"
        ][0],
        {
          x: 460,
          y: 68,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Plans and carries out group activities well_2"
        ][0],
        {
          x: 525,
          y: 67,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Listens attentively and comprehends the information well"
        ][0],
        {
          x: 470,
          y: 643,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Listens attentively and comprehends the information well_2"
        ][0],
        {
          x: 530,
          y: 643,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Understands the information delivered and acts appropriately"
        ][0],
        {
          x: 470,
          y: 616,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Understands the information delivered and acts appropriately_2"
        ][0],
        {
          x: 530,
          y: 616,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["ENGLISH Connects and evaluates while listening"][0],
        {
          x: 470,
          y: 591,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["ENGLISH Connects and evaluates while listening_2"][0],
        {
          x: 530,
          y: 591,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Converses fluently in English, uses good vocabulary, proper pronunciation, diction and modulation"
        ][0],
        {
          x: 470,
          y: 537,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Converses fluently in English, uses good vocabulary, proper pronunciation, diction and modulation_2"
        ][0],
        {
          x: 530,
          y: 537,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Expresses feelings, emotions and ideas confidently in English"
        ][0],
        {
          x: 470,
          y: 508,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Expresses feelings, emotions and ideas confidently in English_2"
        ][0],
        {
          x: 530,
          y: 508,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Uses Articles and Subject-Verb Agreement appropriately"
        ][0],
        {
          x: 470,
          y: 482,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Uses Articles and Subject-Verb Agreement appropriately_2"
        ][0],
        {
          x: 530,
          y: 482,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Remains excited to read new content from various sources such as newspapers, library books etc."
        ][0],
        {
          x: 470,
          y: 425,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Remains excited to read new content from various sources such as newspapers, library books etc._2"
        ][0],
        {
          x: 530,
          y: 425,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Makes inferences from the given context and draws conclusions effectively"
        ][0],
        {
          x: 470,
          y: 397,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Makes inferences from the given context and draws conclusions effectively_2"
        ][0],
        {
          x: 530,
          y: 397,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Independently reads the text with proper intonation and pronunciation"
        ][0],
        {
          x: 470,
          y: 368,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Independently reads the text with proper intonation and pronunciation_2"
        ][0],
        {
          x: 530,
          y: 368,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Uses appropriate and good vocabulary, sentence structures and forms of expression"
        ][0],
        {
          x: 470,
          y: 316,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Uses appropriate and good vocabulary, sentence structures and forms of expression_2"
        ][0],
        {
          x: 530,
          y: 316,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Uses appropriate Parts of Speech, Punctuation and Spellings"
        ][0],
        {
          x: 470,
          y: 285,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "ENGLISH Uses appropriate Parts of Speech, Punctuation and Spellings_2"
        ][0],
        {
          x: 530,
          y: 285,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["ENGLISH Presents the ideas creatively with clarity"][0],
        {
          x: 470,
          y: 257,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["ENGLISH Presents the ideas creatively with clarity_2"][0],
        {
          x: 530,
          y: 257,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Listens attentively and comprehends the information well"
        ][0],
        {
          x: 470,
          y: 178,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Listens attentively and comprehends the information well_2"
        ][0],
        {
          x: 530,
          y: 178,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Understands the information delivered and acts appropriately"
        ][0],
        {
          x: 470,
          y: 151,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Understands the information delivered and acts appropriately_2"
        ][0],
        {
          x: 530,
          y: 151,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["HINDI Connects and evaluates while listening"][0],
        {
          x: 470,
          y: 124,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["HINDI Connects and evaluates while listening_2"][0],
        {
          x: 530,
          y: 124,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Converses fluently in Hindi , uses good vocabulary, proper pronunciation, diction and modulation"
        ][0],
        {
          x: 470,
          y: 68,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "HINDI Converses fluently in Hindi , uses good vocabulary, proper pronunciation, diction and modulation_2"
        ][0],
        {
          x: 530,
          y: 68,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "HINDI Expresses feelings, emotions and ideas confidently in Hindi"
        ][0],
        {
          x: 470,
          y: 774,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "HINDI Expresses feelings, emotions and ideas confidently in Hindi_2"
        ][0],
        {
          x: 530,
          y: 774,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student["HINDI Uses Subject-Verb Agreement appropriately"][0],
        {
          x: 470,
          y: 748,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student["HINDI Uses Subject-Verb Agreement appropriately_2"][0],
        {
          x: 530,
          y: 748,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "HINDI Remains excited to read new content from various sources such as newspapers, library books etc."
        ][0],
        {
          x: 470,
          y: 694,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "HINDI Remains excited to read new content from various sources such as newspapers, library books etc._2"
        ][0],
        {
          x: 530,
          y: 694,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "HINDI Makes inferences from the given context and draws conclusions effectively"
        ][0],
        {
          x: 470,
          y: 665,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "HINDI Makes inferences from the given context and draws conclusions effectively_2"
        ][0],
        {
          x: 530,
          y: 665,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "HINDI Independently reads the text with proper intonation and pronunciation"
        ][0],
        {
          x: 470,
          y: 635,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "HINDI Independently reads the text with proper intonation and pronunciation_2"
        ][0],
        {
          x: 530,
          y: 635,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "HINDI Uses appropriate and good vocabulary, sentence structures and forms of expression"
        ][0],
        {
          x: 470,
          y: 581,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "HINDI Uses appropriate and good vocabulary, sentence structures and forms of expression_2"
        ][0],
        {
          x: 530,
          y: 581,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "HINDI Uses appropriate Parts of Speech, Punctuation and Spellings"
        ][0],
        {
          x: 470,
          y: 552,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "HINDI Uses appropriate Parts of Speech, Punctuation and Spellings_2"
        ][0],
        {
          x: 530,
          y: 552,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student["HINDI Presents the ideas creatively with clarity"][0],
        {
          x: 470,
          y: 524,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student["HINDI Presents the ideas creatively with clarity_2"][0],
        {
          x: 530,
          y: 524,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "MATHEMATICS Explores concepts, theories, figures and graphs"
        ][0],
        {
          x: 470,
          y: 446,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Explores concepts, theories, figures and graphs_2"
        ][0],
        {
          x: 530,
          y: 446,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Uses mathematical concepts and logic to solve problems"
        ][0],
        {
          x: 470,
          y: 419,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Uses mathematical concepts and logic to solve problems_2"
        ][0],
        {
          x: 530,
          y: 419,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Recognises basic geometrical shapes and their observable properties"
        ][0],
        {
          x: 470,
          y: 392,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Recognises basic geometrical shapes and their observable properties_2"
        ][0],
        {
          x: 530,
          y: 392,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "MATHEMATICS Is observant and can easily understand the problem"
        ][0],
        {
          x: 470,
          y: 340,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Is observant and can easily understand the problem_2"
        ][0],
        {
          x: 530,
          y: 340,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Calculates precisely while working with large numbers"
        ][0],
        {
          x: 470,
          y: 313,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Calculates precisely while working with large numbers_2"
        ][0],
        {
          x: 530,
          y: 313,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Can remember and recall various mathematical concepts such as addition, subtraction, multiplication and division"
        ][0],
        {
          x: 470,
          y: 286,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Can remember and recall various mathematical concepts such as addition, subtraction, multiplication and division_2"
        ][0],
        {
          x: 530,
          y: 286,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "MATHEMATICS Enjoys and understands all mathematical concepts"
        ][0],
        {
          x: 470,
          y: 230,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Enjoys and understands all mathematical concepts_2"
        ][0],
        {
          x: 530,
          y: 230,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Uses mathematical concepts in various subjects for integrated learning"
        ][0],
        {
          x: 470,
          y: 204,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Uses mathematical concepts in various subjects for integrated learning_2"
        ][0],
        {
          x: 530,
          y: 204,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Correlates reasons and ideas with real life applications"
        ][0],
        {
          x: 470,
          y: 178,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Correlates reasons and ideas with real life applications_2"
        ][0],
        {
          x: 530,
          y: 178,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "MATHEMATICS Is able to perform minor mathematical calculations mentally"
        ][0],
        {
          x: 470,
          y: 124,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Is able to perform minor mathematical calculations mentally_2"
        ][0],
        {
          x: 530,
          y: 124,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Recalls and uses mathematical vocabulary and dodging tables efficiently"
        ][0],
        {
          x: 470,
          y: 97,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Recalls and uses mathematical vocabulary and dodging tables efficiently_2"
        ][0],
        {
          x: 530,
          y: 97,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Is self-motivated and tries to execute complex mathematical calculations"
        ][0],
        {
          x: 470,
          y: 70,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "MATHEMATICS Is self-motivated and tries to execute complex mathematical calculations_2"
        ][0],
        {
          x: 530,
          y: 70,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      seventhPage.drawText(
        student[
          "EVS Shows the ability to compare and classify things to bring out differences and similarities"
        ][0],
        {
          x: 470,
          y: 720,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Shows the ability to compare and classify things to bring out differences and similarities_2"
        ][0],
        {
          x: 530,
          y: 720,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Uses classroom learning well to make connections to the environment"
        ][0],
        {
          x: 470,
          y: 692,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Uses classroom learning well to make connections to the environment_2"
        ][0],
        {
          x: 530,
          y: 692,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Shows the ability to conduct small guided research and correlate information in oral and written forms"
        ][0],
        {
          x: 470,
          y: 663,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Shows the ability to conduct small guided research and correlate information in oral and written forms_2"
        ][0],
        {
          x: 530,
          y: 663,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["EVS Enjoys lab visits, field trips and nature walks"][0],
        {
          x: 470,
          y: 608,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["EVS Enjoys lab visits, field trips and nature walks_2"][0],
        {
          x: 530,
          y: 608,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Shows curiosity and interests in every minute detail with hands on activities"
        ][0],
        {
          x: 470,
          y: 581,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Shows curiosity and interests in every minute detail with hands on activities_2"
        ][0],
        {
          x: 530,
          y: 581,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["EVS Uses sensory perceptions and responds appropriately"][0],
        {
          x: 470,
          y: 551,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["EVS Uses sensory perceptions and responds appropriately_2"][0],
        {
          x: 530,
          y: 551,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Has the ability to gather, analyze and communicate complex information"
        ][0],
        {
          x: 470,
          y: 498,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Has the ability to gather, analyze and communicate complex information_2"
        ][0],
        {
          x: 530,
          y: 498,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Exhibits a sense of responsibility and sensitivity towards the environment"
        ][0],
        {
          x: 470,
          y: 472,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Exhibits a sense of responsibility and sensitivity towards the environment_2"
        ][0],
        {
          x: 530,
          y: 472,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Participates actively in class discussions and group activities"
        ][0],
        {
          x: 470,
          y: 445,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Participates actively in class discussions and group activities_2"
        ][0],
        {
          x: 530,
          y: 445,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["EVS Identifies pictures and diagrams well"][0],
        {
          x: 470,
          y: 391,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["EVS Identifies pictures and diagrams well_2"][0],
        {
          x: 530,
          y: 391,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["EVS Draws and labels diagrams appropriately"][0],
        {
          x: 470,
          y: 364,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["EVS Draws and labels diagrams appropriately_2"][0],
        {
          x: 530,
          y: 364,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Understands and differentiates various pictorial representations such as web charts, mind maps etc."
        ][0],
        {
          x: 470,
          y: 337,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "EVS Understands and differentiates various pictorial representations such as web charts, mind maps etc._2"
        ][0],
        {
          x: 530,
          y: 337,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["COMPUTER SCIENCE Displays understanding of concepts"][0],
        {
          x: 470,
          y: 256,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["COMPUTER SCIENCE Displays understanding of concepts_2"][0],
        {
          x: 530,
          y: 256,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      // Original text for "Awareness of hardware and software"
      seventhPage.drawText(
        student["COMPUTER SCIENCE Awareness of hardware and software"][0],
        {
          x: 470,
          y: 230,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Text with _2 added for "Awareness of hardware and software"
      seventhPage.drawText(
        student["COMPUTER SCIENCE Awareness of hardware and software_2"][0],
        {
          x: 530,
          y: 230,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Original text for "Executes the concepts well"
      seventhPage.drawText(
        student["COMPUTER SCIENCE Executes the concepts well"][0],
        {
          x: 470,
          y: 177,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Text with _2 added for "Executes the concepts well"
      seventhPage.drawText(
        student["COMPUTER SCIENCE Executes the concepts well_2"][0],
        {
          x: 530,
          y: 177,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Shows the ability to make logical decisions"
      seventhPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 150,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Shows the ability to make logical decisions" with _2
      seventhPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions_2"
        ][0],
        {
          x: 530,
          y: 150,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Demonstrates creativity through colourful and imaginative art projects"
      eighthPage.drawText(
        student[
          "ART AND CRAFT Demonstrates creativity through colourful and imaginative art projects"
        ][0],
        {
          x: 470,
          y: 682,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Demonstrates creativity through colourful and imaginative art projects" with _2
      eighthPage.drawText(
        student[
          "ART AND CRAFT Demonstrates creativity through colourful and imaginative art projects_2"
        ][0],
        {
          x: 530,
          y: 682,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Pays attention to details, ensuring neatness and precision in artwork"
      eighthPage.drawText(
        student[
          "ART AND CRAFT Pays attention to details, ensuring neatness and precision in artwork"
        ][0],
        {
          x: 470,
          y: 655,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Pays attention to details, ensuring neatness and precision in artwork" with _2
      eighthPage.drawText(
        student[
          "ART AND CRAFT Pays attention to details, ensuring neatness and precision in artwork_2"
        ][0],
        {
          x: 530,
          y: 655,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Collaborates effectively with peers during art classes and activities"
      eighthPage.drawText(
        student[
          "ART AND CRAFT Collaborates effectively with peers during art classes and activities"
        ][0],
        {
          x: 470,
          y: 628,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Collaborates effectively with peers during art classes and activities" with _2
      eighthPage.drawText(
        student[
          "ART AND CRAFT Collaborates effectively with peers during art classes and activities_2"
        ][0],
        {
          x: 530,
          y: 628,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Demonstrates a passion for music"
      eighthPage.drawText(
        student["MUSIC Demonstrates a passion for music"][0],
        {
          x: 470,
          y: 576,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Demonstrates a passion for music" with _2
      eighthPage.drawText(
        student["MUSIC Demonstrates a passion for music_2"][0],
        {
          x: 530,
          y: 576,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Displays a keen sense of rhythm and melody"
      eighthPage.drawText(
        student["MUSIC Displays a keen sense of rhythm and melody"][0],
        {
          x: 470,
          y: 550,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Displays a keen sense of rhythm and melody" with _2
      eighthPage.drawText(
        student["MUSIC Displays a keen sense of rhythm and melody_2"][0],
        {
          x: 530,
          y: 550,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Collaborates harmoniously with peers during group musical activities"
      eighthPage.drawText(
        student[
          "MUSIC Collaborates harmoniously with peers during group musical activities"
        ][0],
        {
          x: 470,
          y: 523,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Collaborates harmoniously with peers during group musical activities" with _2
      eighthPage.drawText(
        student[
          "MUSIC Collaborates harmoniously with peers during group musical activities_2"
        ][0],
        {
          x: 530,
          y: 523,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Demonstrates a passion for dance"
      eighthPage.drawText(
        student["DANCE Demonstrates a passion for dance"][0],
        {
          x: 470,
          y: 471,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Demonstrates a passion for dance" with _2
      eighthPage.drawText(
        student["DANCE Demonstrates a passion for dance_2"][0],
        {
          x: 530,
          y: 471,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Participates actively in group dance performances"
      eighthPage.drawText(
        student["DANCE Participates actively in group dance performances"][0],
        {
          x: 470,
          y: 444,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Participates actively in group dance performances" with _2
      eighthPage.drawText(
        student["DANCE Participates actively in group dance performances_2"][0],
        {
          x: 530,
          y: 444,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Synchronizes harmoniously with the beat"
      eighthPage.drawText(
        student["DANCE Synchronizes harmoniously with the beat"][0],
        {
          x: 470,
          y: 417,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Synchronizes harmoniously with the beat" with _2
      eighthPage.drawText(
        student["DANCE Synchronizes harmoniously with the beat_2"][0],
        {
          x: 530,
          y: 417,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Demonstrates sportsmanship during physical activities displaying fair play"
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Demonstrates sportsmanship during physical activities displaying fair play"
        ][0],
        {
          x: 470,
          y: 365,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Demonstrates sportsmanship during physical activities displaying fair play" with _2
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Demonstrates sportsmanship during physical activities displaying fair play_2"
        ][0],
        {
          x: 530,
          y: 365,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Engages in cooperative games and team sports, fostering teamwork with classmates"
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Engages in cooperative games and team sports, fostering teamwork with classmates"
        ][0],
        {
          x: 470,
          y: 337,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Engages in cooperative games and team sports, fostering teamwork with classmates" with _2
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Engages in cooperative games and team sports, fostering teamwork with classmates_2"
        ][0],
        {
          x: 530,
          y: 337,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Follows safety guidelines and rules during sports activities"
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Follows safety guidelines and rules during sports activities"
        ][0],
        {
          x: 470,
          y: 308,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Follows safety guidelines and rules during sports activities" with _2
      eighthPage.drawText(
        student[
          "PHYSICAL EDUCATION Follows safety guidelines and rules during sports activities_2"
        ][0],
        {
          x: 530,
          y: 308,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Shows interest in current events and world affairs, staying informed through reading and discussions"
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Shows interest in current events and world affairs, staying informed through reading and discussions"
        ][0],
        {
          x: 470,
          y: 256,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Shows interest in current events and world affairs, staying informed through reading and discussions" with _2
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Shows interest in current events and world affairs, staying informed through reading and discussions_2"
        ][0],
        {
          x: 530,
          y: 256,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Demonstrates understanding of basic facts and concepts across different topics"
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Demonstrates understanding of basic facts and concepts across different topics"
        ][0],
        {
          x: 470,
          y: 223,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Demonstrates understanding of basic facts and concepts across different topics" with _2
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Demonstrates understanding of basic facts and concepts across different topics_2"
        ][0],
        {
          x: 530,
          y: 223,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Takes initiative in expanding general knowledge on current affairs"
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Takes initiative in expanding general knowledge on current affairs"
        ][0],
        {
          x: 470,
          y: 193,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Takes initiative in expanding general knowledge on current affairs" with _2
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Takes initiative in expanding general knowledge on current affairs_2"
        ][0],
        {
          x: 530,
          y: 193,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Participates enthusiastically in the chosen Friday Activity"
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Participates enthusiastically in the chosen Friday Activity"
        ][0],
        {
          x: 470,
          y: 141,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Participates enthusiastically in the chosen Friday Activity" with _2
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Participates enthusiastically in the chosen Friday Activity_2"
        ][0],
        {
          x: 530,
          y: 141,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Takes interest in honing the related skills"
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Takes interest in honing the related skills"
        ][0],
        {
          x: 470,
          y: 114,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Takes interest in honing the related skills" with _2
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Takes interest in honing the related skills_2"
        ][0],
        {
          x: 530,
          y: 114,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // First text for "Comprehends and executes the given instructions constructively"
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Comprehends and executes the given instructions constructively"
        ][0],
        {
          x: 470,
          y: 87,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      // Second text for "Comprehends and executes the given instructions constructively" with _2
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Comprehends and executes the given instructions constructively_2"
        ][0],
        {
          x: 530,
          y: 87,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      ninthPage.drawText(student["ENGLISH PERIODIC TEST-I (35)"][0], {
        x: 279,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["ENGLISH MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 340,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["ENGLISH HALF YEARLY EXAM (50)"][0], {
        x: 407,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["ENGLISH TOTAL MARKS (100)"][0], {
        x: 473,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["ENGLISH GRADE"][0], {
        x: 533,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["HINDI PERIODIC TEST-I (35)"][0], {
        x: 279,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["HINDI MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 340,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["HINDI HALF YEARLY EXAM (50)"][0], {
        x: 407,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["HINDI TOTAL MARKS (100)"][0], {
        x: 473,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["HINDI GRADE"][0], {
        x: 533,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["MATHEMATICS PERIODIC TEST-I (35)"][0], {
        x: 279,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["MATHEMATICS MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 340,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["MATHEMATICS HALF YEARLY EXAM (50)"][0], {
        x: 407,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["MATHEMATICS TOTAL MARKS (100)"][0], {
        x: 473,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["MATHEMATICS GRADE"][0], {
        x: 533,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["EVS PERIODIC TEST-I (35)"][0], {
        x: 279,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["EVS MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 340,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["EVS HALF YEARLY EXAM (50)"][0], {
        x: 407,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["EVS TOTAL MARKS (100)"][0], {
        x: 473,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["EVS GRADE"][0], {
        x: 533,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["COMPUTER SCIENCE PERIODIC TEST-I (50)"][0], {
        x: 270,
        y: 632,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(
        student["COMPUTER SCIENCE MA1+SEA1+NW (5+5+5=15)"][0],
        {
          x: 340,
          y: 632,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(student["COMPUTER SCIENCE HALF YEARLY EXAM (50)"][0], {
        x: 407,
        y: 632,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["COMPUTER SCIENCE TOTAL MARKS (100)"][0], {
        x: 473,
        y: 632,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["COMPUTER SCIENCE GRADE"][0], {
        x: 533,
        y: 632,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Grand Total"][0], {
        x: 470,
        y: 613,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Grade"][0], {
        x: 533,
        y: 613,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["ATTENDANCE"][0], {
        x: 300,
        y: 594,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["PERCENTAGE"][0], {
        x: 530,
        y: 594,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["ART AND CRAFT Grade"][0], {
        x: 407,
        y: 537,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["MUSIC Grade"][0], {
        x: 407,
        y: 518,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["DANCE Grade"][0], {
        x: 407,
        y: 499,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["PHYSICAL EDUCATION Grade"][0], {
        x: 407,
        y: 480,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["DISCIPLINE Grade"][0], {
        x: 407,
        y: 461,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["GENERAL KNOWLEDGE Grade"][0], {
        x: 407,
        y: 442,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["FRIDAY ACTIVITY Grade"][0], {
        x: 407,
        y: 423,
        size: 12,
        color: rgb(0, 0, 0),
      });

      {
        student["REMARKS BY THE CLASS TEACHER"][0] &&
          ninthPage.drawText(student["REMARKS BY THE CLASS TEACHER"][0], {
            x: 45,
            y: 380,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["REMARKS BY THE CLASS TEACHER"][1] &&
          ninthPage.drawText(student["REMARKS BY THE CLASS TEACHER"][1], {
            x: 45,
            y: 365,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["REMARKS BY THE CLASS TEACHER"][2] &&
          ninthPage.drawText(student["REMARKS BY THE CLASS TEACHER"][2], {
            x: 45,
            y: 350,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      ninthPage.drawImage(teacherSign1Image, {
        x: 250,
        y: 280,
        width: 100,
        height: 30,
      });

      // seventhPage.drawImage(groupPhotImage, {
      //   x: 470,
      //   y: 160,
      //   width: 480,
      //   height: 290,
      //   rotate: degrees(90),
      // });

      {
        student["ACADEMIC GOALS (Term II)_2"][0] &&
          tenthPage.drawText(student["ACADEMIC GOALS (Term II)_2"][0], {
            x: 57,
            y: 670,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS (Term II)_2"][1] &&
          tenthPage.drawText(student["ACADEMIC GOALS (Term II)_2"][1], {
            x: 57,
            y: 649,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS (Term II)_2"][2] &&
          tenthPage.drawText(student["ACADEMIC GOALS (Term II)_2"][2], {
            x: 57,
            y: 631,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS (Term II)_2"][3] &&
          tenthPage.drawText(student["ACADEMIC GOALS (Term II)_2"][3], {
            x: 57,
            y: 607,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["ACADEMIC ACHIEVEMENT (Term II)_2"][0] &&
          tenthPage.drawText(student["ACADEMIC ACHIEVEMENT (Term II)_2"][0], {
            x: 57,
            y: 517,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT (Term II)_2"][1] &&
          tenthPage.drawText(student["ACADEMIC ACHIEVEMENT (Term II)_2"][1], {
            x: 57,
            y: 491,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT (Term II)_2"][2] &&
          tenthPage.drawText(student["ACADEMIC ACHIEVEMENT (Term II)_2"][2], {
            x: 57,
            y: 471,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT (Term II)_2"][3] &&
          tenthPage.drawText(student["ACADEMIC ACHIEVEMENT (Term II)_2"][3], {
            x: 57,
            y: 448,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["NON ACADEMIC GOALS (Term II)_2"][0] &&
          tenthPage.drawText(student["NON ACADEMIC GOALS (Term II)_2"][0], {
            x: 57,
            y: 323,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS (Term II)_2"][1] &&
          tenthPage.drawText(student["NON ACADEMIC GOALS (Term II)_2"][1], {
            x: 57,
            y: 300,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS (Term II)_2"][2] &&
          tenthPage.drawText(student["NON ACADEMIC GOALS (Term II)_2"][2], {
            x: 57,
            y: 281,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS (Term II)_2"][3] &&
          tenthPage.drawText(student["NON ACADEMIC GOALS (Term II)_2"][3], {
            x: 57,
            y: 263,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["NON ACADEMIC ACHIEVEMENT (Term II)_2"][0] &&
          tenthPage.drawText(
            student["NON ACADEMIC ACHIEVEMENT (Term II)_2"][0],
            {
              x: 57,
              y: 173,
              size: 14,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["NON ACADEMIC ACHIEVEMENT (Term II)_2"][1] &&
          tenthPage.drawText(
            student["NON ACADEMIC ACHIEVEMENT (Term II)_2"][1],
            {
              x: 57,
              y: 151,
              size: 14,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["NON ACADEMIC ACHIEVEMENT (Term II)_2"][2] &&
          tenthPage.drawText(
            student["NON ACADEMIC ACHIEVEMENT (Term II)_2"][2],
            {
              x: 57,
              y: 130,
              size: 14,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["NON ACADEMIC ACHIEVEMENT (Term II)_2"][3] &&
          tenthPage.drawText(
            student["NON ACADEMIC ACHIEVEMENT (Term II)_2"][3],
            {
              x: 57,
              y: 107,
              size: 14,
              color: rgb(0, 0, 0),
            }
          );
      }

      eleventhPage.drawText(student["ENGLISH PERIODIC TEST-II (35)_2"][0], {
        x: 279,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["ENGLISH MA2+SEA2+NW (5+5+5=15)_2"][0], {
        x: 340,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["ENGLISH ANNUAL EXAM (50)_2"][0], {
        x: 400,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });

      eleventhPage.drawText(student["ENGLISH TOTAL MARKS (100)_2"][0], {
        x: 473,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });

      eleventhPage.drawText(student["ENGLISH GRADE_2"][0], {
        x: 533,
        y: 708,
        size: 12,
        color: rgb(0, 0, 0),
      });

      eleventhPage.drawText(student["HINDI PERIODIC TEST-II (35)_2"][0], {
        x: 279,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["HINDI MA2+SEA2+NW (5+5+5=15)_2"][0], {
        x: 340,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["HINDI ANNUAL EXAM (50)_2"][0], {
        x: 400,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });

      eleventhPage.drawText(student["HINDI TOTAL MARKS (100)_2"][0], {
        x: 473,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["HINDI GRADE_2"][0], {
        x: 533,
        y: 689,
        size: 12,
        color: rgb(0, 0, 0),
      });

      eleventhPage.drawText(student["MATHEMATICS PERIODIC TEST-II (35)_2"][0], {
        x: 279,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(
        student["MATHEMATICS MA2+SEA2+NW (5+5+5=15)_2"][0],
        {
          x: 340,
          y: 670,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      eleventhPage.drawText(student["MATHEMATICS ANNUAL EXAM (50)_2"][0], {
        x: 407,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["MATHEMATICS TOTAL MARKS (100)_2"][0], {
        x: 473,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["MATHEMATICS GRADE_2"][0], {
        x: 533,
        y: 670,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["EVS PERIODIC TEST-II (35)_2"][0], {
        x: 279,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["EVS MA2+SEA2+NW (5+5+5=15)_2"][0], {
        x: 340,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["EVS HALF YEARLY EXAM (50)"][0], {
        x: 407,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["EVS TOTAL MARKS (100)_2"][0], {
        x: 473,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["EVS GRADE_2"][0], {
        x: 533,
        y: 651,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(
        student["COMPUTER SCIENCE PERIODIC TEST-II (50)_2"][0],
        {
          x: 270,
          y: 632,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      eleventhPage.drawText(
        student["COMPUTER SCIENCE MA2+SEA2+NW (5+5+5=15)_2"][0],
        {
          x: 340,
          y: 632,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      eleventhPage.drawText(
        student["COMPUTER SCIENCE HALF YEARLY EXAM (50)"][0],
        {
          x: 407,
          y: 632,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      eleventhPage.drawText(
        student["COMPUTER SCIENCE TOTAL MARKS (100)_2"][0],
        {
          x: 473,
          y: 632,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      eleventhPage.drawText(student["COMPUTER SCIENCE GRADE_2"][0], {
        x: 533,
        y: 632,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["GRAND TOTAL_2"][0], {
        x: 470,
        y: 613,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["GRADE_2"][0], {
        x: 533,
        y: 613,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["ATTENDANCE_2"][0], {
        x: 300,
        y: 594,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["PERCENTAGE_2"][0], {
        x: 530,
        y: 594,
        size: 12,
        color: rgb(0, 0, 0),
      });

      eleventhPage.drawText(student["ART AND CRAFT Grade_2"][0], {
        x: 407,
        y: 537,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["MUSIC Grade_2"][0], {
        x: 407,
        y: 518,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["DANCE Grade_2"][0], {
        x: 407,
        y: 499,
        size: 12,
        color: rgb(0, 0, 0),
      });

      eleventhPage.drawText(student["PHYSICAL EDUCATION Grade_2"][0], {
        x: 407,
        y: 480,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["DISCIPLINE Grade_2"][0], {
        x: 407,
        y: 461,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["GENERAL KNOWLEDGE Grade_2"][0], {
        x: 407,
        y: 442,
        size: 12,
        color: rgb(0, 0, 0),
      });
      eleventhPage.drawText(student["FRIDAY ACTIVITY Grade_2"][0], {
        x: 407,
        y: 423,
        size: 12,
        color: rgb(0, 0, 0),
      });

      {
        student["REMARKS BY THE CLASS TEACHER_2"][0] &&
          eleventhPage.drawText(student["REMARKS BY THE CLASS TEACHER_2"][0], {
            x: 45,
            y: 380,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["REMARKS BY THE CLASS TEACHER_2"][1] &&
          eleventhPage.drawText(student["REMARKS BY THE CLASS TEACHER_2"][1], {
            x: 45,
            y: 365,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["REMARKS BY THE CLASS TEACHER_2"][2] &&
          eleventhPage.drawText(student["REMARKS BY THE CLASS TEACHER_2"][2], {
            x: 45,
            y: 350,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }

      eleventhPage.drawImage(teacherSign1Image, {
        x: 250,
        y: 270,
        width: 100,
        height: 30,
      });

      twevelthPage.drawText(student["ENGLISH TERM I (50)_2"][0], {
        x: 268,
        y: 641,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["ENGLISH TERM II (50)_2"][0], {
        x: 343,
        y: 641,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["ENGLISH TOTAL MARKS (100)"][0], {
        x: 430,
        y: 641,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["ENGLISH GRADE"][0], {
        x: 520,
        y: 641,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["HINDI TERM I (50)_2"][0], {
        x: 268,
        y: 613,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["HINDI TERM II (50)_2"][0], {
        x: 343,
        y: 613,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["HINDI TOTAL MARKS (100)"][0], {
        x: 430,
        y: 613,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["HINDI GRADE"][0], {
        x: 520,
        y: 613,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["MATHEMATICS TERM I (50)_2"][0], {
        x: 267,
        y: 584,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["MATHEMATICS TERM II (50)_2"][0], {
        x: 342,
        y: 584,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["MATHEMATICS TOTAL MARKS (100)"][0], {
        x: 429,
        y: 584,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["MATHEMATICS GRADE"][0], {
        x: 519,
        y: 584,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["EVS TERM I (50)_2"][0], {
        x: 268,
        y: 555,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["EVS TERM II (50)_2"][0], {
        x: 343,
        y: 555,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["EVS TOTAL MARKS (100)"][0], {
        x: 430,
        y: 555,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["EVS GRADE"][0], {
        x: 520,
        y: 555,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["COMPUTER SCIENCE TERM I (50)_2"][0], {
        x: 268,
        y: 526,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["COMPUTER SCIENCE TERM II (50)_2"][0], {
        x: 343,
        y: 526,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["COMPUTER SCIENCE TOTAL MARKS (100)"][0], {
        x: 430,
        y: 526,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["COMPUTER SCIENCE GRADE"][0], {
        x: 520,
        y: 526,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["GRAND TOTAL_2"][0], {
        x: 300,
        y: 495,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["Grand Total_2"][0], {
        x: 430,
        y: 495,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["Grade_2"][0], {
        x: 520,
        y: 495,
        size: 12,
        color: rgb(0, 0, 0),
      });

      twevelthPage.drawText(student["ATTENDANCE_2"][0], {
        x: 300,
        y: 465,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawText(student["PERCENTAGE_2"][0], {
        x: 517,
        y: 465,
        size: 12,
        color: rgb(0, 0, 0),
      });
      twevelthPage.drawImage(teacherSign1Image, {
        x: 250,
        y: 340,
        width: 100,
        height: 30,
      });

      {
        student["SELF ASSESSMENT_2"][0] &&
          thirteenPage.drawText(student["SELF ASSESSMENT_2"][0], {
            x: 45,
            y: 686,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF ASSESSMENT_2"][1] &&
          thirteenPage.drawText(student["SELF ASSESSMENT_2"][1], {
            x: 45,
            y: 671,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF ASSESSMENT_2"][2] &&
          thirteenPage.drawText(student["SELF ASSESSMENT_2"][2], {
            x: 45,
            y: 656,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF ASSESSMENT_2"][3] &&
          thirteenPage.drawText(student["SELF ASSESSMENT_2"][3], {
            x: 45,
            y: 641,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SELF ASSESSMENT_2"][4] &&
          thirteenPage.drawText(student["SELF ASSESSMENT_2"][4], {
            x: 45,
            y: 626,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["PEER FEEDBACK_2"][0] &&
          thirteenPage.drawText(student["PEER FEEDBACK_2"][0], {
            x: 45,
            y: 540,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PEER FEEDBACK_2"][1] &&
          thirteenPage.drawText(student["PEER FEEDBACK_2"][1], {
            x: 45,
            y: 525,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PEER FEEDBACK_2"][2] &&
          thirteenPage.drawText(student["PEER FEEDBACK_2"][2], {
            x: 45,
            y: 510,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PEER FEEDBACK_2"][3] &&
          thirteenPage.drawText(student["PEER FEEDBACK_2"][3], {
            x: 45,
            y: 495,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PEER FEEDBACK_2"][4] &&
          thirteenPage.drawText(student["PEER FEEDBACK_2"][4], {
            x: 45,
            y: 480,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["CLASS TEACHER’S FEEDBACK_2"][0] &&
          thirteenPage.drawText(student["CLASS TEACHER’S FEEDBACK_2"][0], {
            x: 45,
            y: 392,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["CLASS TEACHER’S FEEDBACK_2"][1] &&
          thirteenPage.drawText(student["CLASS TEACHER’S FEEDBACK_2"][1], {
            x: 45,
            y: 377,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["CLASS TEACHER’S FEEDBACK_2"][2] &&
          thirteenPage.drawText(student["CLASS TEACHER’S FEEDBACK_2"][2], {
            x: 45,
            y: 362,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["CLASS TEACHER’S FEEDBACK_2"][3] &&
          thirteenPage.drawText(student["CLASS TEACHER’S FEEDBACK_2"][3], {
            x: 45,
            y: 347,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["CLASS TEACHER’S FEEDBACK_2"][4] &&
          thirteenPage.drawText(student["CLASS TEACHER’S FEEDBACK_2"][4], {
            x: 45,
            y: 332,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Prize_2"][0] &&
          thirteenPage.drawText(student["Prize_2"][0], {
            x: 45,
            y: 307,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Prize_2"][1] &&
          thirteenPage.drawText(student["Prize_2"][1], {
            x: 45,
            y: 292,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Prize_2"][2] &&
          thirteenPage.drawText(student["Prize_2"][2], {
            x: 45,
            y: 277,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Prize_2"][3] &&
          thirteenPage.drawText(student["Prize_2"][3], {
            x: 45,
            y: 262,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["Prize_2"][4] &&
          thirteenPage.drawText(student["Prize_2"][4], {
            x: 430,
            y: 247,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      //
      thirteenPage.drawText(student["You have been promoted to Class_2"][0], {
        x: 240,
        y: 113,
        size: 12,
        color: rgb(0, 0, 0),
      });
      thirteenPage.drawText(student["Sec_2"][0], {
        x: 330,
        y: 113,
        size: 12,
        color: rgb(0, 0, 0),
      });
      thirteenPage.drawText(student["The new session begins on:_2"][0], {
        x: 205,
        y: 92,
        size: 12,
        color: rgb(0, 0, 0),
      });

      fourteenPage.drawImage(barImage, {
        x: 101,
        y: 462,
        width: 26,
        height: Number(student["PUNCTUALITY_2"][0]),
      });
      fourteenPage.drawImage(barImage, {
        x: 180,
        y: 462,
        width: 26,
        height: Number(student["ATTENTIVENESS_2"][0]),
      });
      fourteenPage.drawImage(barImage, {
        x: 259,
        y: 462,
        width: 26,
        height: Number(student["POLITE AND COURTEOUS_2"][0]),
      });
      fourteenPage.drawImage(barImage, {
        x: 338,
        y: 462,
        width: 26,
        height: Number(student["RESPONSIBLE_2"][0]),
      });
      fourteenPage.drawImage(barImage, {
        x: 417,
        y: 462,
        width: 26,
        height: Number(student["HEALTH AND HYGIENE_2"][0]),
      });
      fourteenPage.drawImage(barImage, {
        x: 496,
        y: 462,
        width: 26,
        height: Number(student["ATTENTIVENESS_2"][0]),
      });

      fourteenPage.drawText(student["TERM I Height (cms)_2"][0], {
        x: 90,
        y: 233,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fourteenPage.drawText(student["TERM I Weight (kgs)_2"][0], {
        x: 90,
        y: 148,
        size: 12,
        color: rgb(0, 0, 0),
      });

      fourteenPage.drawText(student["TERM II Height (cms)_2"][0], {
        x: 470,
        y: 236,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fourteenPage.drawText(student["TERM II Weight (kgs)_2"][0], {
        x: 470,
        y: 151,
        size: 12,
        color: rgb(0, 0, 0),
      });

      fifteenthPage.drawImage(groupPhotImage, {
        x: 550,
        y: 160,
        width: 600,
        height: 500,
        rotate: degrees(90),
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
      download(zipBlob, "Class3_report_cards.zip");
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
        download(pdfBytes, "Class3.pdf", "application/pdf");
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

export default Class3_Term1;
