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
  const userData = data.term_1;
  //   console.log(data, "Data in Class3_Term1");
  console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/10f755159d81b7a7ef9c14b7c9d072531369542047/b500a3de62d0a34bc0aae7117bd358b2.pdf"
    : "https://dpsin.s3.amazonaws.com/report/III/term1.pdf";

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
        student["PERSONAL AND SOCIAL TRAITS Adapts positively to changes"][0],
        {
          x: 460,
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
          "LIFE SKILLS AND WELL BEING Plans and carries out group activities well"
        ][0],
        {
          x: 460,
          y: 68,
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
        student["ENGLISH Connects and evaluates while listening"][0],
        {
          x: 470,
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
        student["ENGLISH Presents the ideas creatively with clarity"][0],
        {
          x: 470,
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
        student["HINDI Connects and evaluates while listening"][0],
        {
          x: 470,
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
        student["HINDI Uses Subject-Verb Agreement appropriately"][0],
        {
          x: 470,
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
        student["HINDI Presents the ideas creatively with clarity"][0],
        {
          x: 470,
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
          "MATHEMATICS Is self-motivated and tries to execute complex mathematical calculations"
        ][0],
        {
          x: 470,
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
        student["EVS Enjoys lab visits, field trips and nature walks"][0],
        {
          x: 470,
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
        student["EVS Uses sensory perceptions and responds appropriately"][0],
        {
          x: 470,
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
        student["EVS Identifies pictures and diagrams well"][0],
        {
          x: 470,
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
        student["COMPUTER SCIENCE Displays understanding of concepts"][0],
        {
          x: 470,
          y: 256,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["COMPUTER SCIENCE Awareness of hardware and software"][0],
        {
          x: 470,
          y: 230,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["COMPUTER SCIENCE Executes the concepts well"][0],
        {
          x: 470,
          y: 177,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
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

      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 682,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 655,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 628,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 576,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 550,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 523,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 471,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 444,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 417,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 365,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 337,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 308,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 256,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 223,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 193,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 141,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
          y: 114,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "COMPUTER SCIENCE Shows the ability to make logical decisions"
        ][0],
        {
          x: 470,
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
