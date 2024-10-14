import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../../Data/Slices/UserDataSlice";

function Class5_Term1() {
  const location = useLocation();
  const { data, localPdf } = location.state;
  const userData = data.term_1;
  //   console.log(data, "Data in Class3_Term1");
  console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/2425ef1206b4b76d03c72e40bfb3b6ec2022516121/3feb4e55df9f3951c8fd839f9a7bf553.pdf"
    : "https://dpsin.s3.amazonaws.com/report/V/term1.pdf";

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
        y: 528,
        width: 123,
        height: 147,
      });
      firstPage.drawText(student["Student Name"][0], {
        x: 270,
        y: 308,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admission No."][0], {
        x: 270,
        y: 279,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"][0], {
        x: 270,
        y: 249,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"][0], {
        x: 270,
        y: 219,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Section"][0], {
        x: 270,
        y: 191,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll No."][0], {
        x: 270,
        y: 161,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"][0].replace(/['"]/g, ""), {
        x: 270,
        y: 133,
        size: 14,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["House"][0], {
        x: 270,
        y: 104,
        size: 14,
        color: rgb(0, 0, 0),
      });

      {
        student["ACADEMIC GOALS"][0] &&
          thirdPage.drawText(student["ACADEMIC GOALS"][0], {
            x: 75,
            y: 650,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS"][1] &&
          thirdPage.drawText(student["ACADEMIC GOALS"][1], {
            x: 75,
            y: 630,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS"][2] &&
          thirdPage.drawText(student["ACADEMIC GOALS"][2], {
            x: 75,
            y: 611,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC GOALS"][3] &&
          thirdPage.drawText(student["ACADEMIC GOALS"][3], {
            x: 75,
            y: 584,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["ACADEMIC ACHIEVEMENT"][0] &&
          thirdPage.drawText(student["ACADEMIC ACHIEVEMENT"][0], {
            x: 75,
            y: 508,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT"][1] &&
          thirdPage.drawText(student["ACADEMIC ACHIEVEMENT"][1], {
            x: 75,
            y: 488,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT"][2] &&
          thirdPage.drawText(student["ACADEMIC ACHIEVEMENT"][2], {
            x: 75,
            y: 468,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ACADEMIC ACHIEVEMENT"][3] &&
          thirdPage.drawText(student["ACADEMIC ACHIEVEMENT"][3], {
            x: 75,
            y: 445,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["NON ACADEMIC GOALS"][0] &&
          thirdPage.drawText(student["NON ACADEMIC GOALS"][0], {
            x: 75,
            y: 309,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS"][1] &&
          thirdPage.drawText(student["NON ACADEMIC GOALS"][1], {
            x: 75,
            y: 291,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS"][2] &&
          thirdPage.drawText(student["NON ACADEMIC GOALS"][2], {
            x: 75,
            y: 272,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC GOALS"][3] &&
          thirdPage.drawText(student["NON ACADEMIC GOALS"][3], {
            x: 75,
            y: 254,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC ACHIEVEMENT"][0] &&
          thirdPage.drawText(student["NON ACADEMIC ACHIEVEMENT"][0], {
            x: 75,
            y: 170,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC ACHIEVEMENT"][1] &&
          thirdPage.drawText(student["NON ACADEMIC ACHIEVEMENT"][1], {
            x: 75,
            y: 149,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC ACHIEVEMENT"][2] &&
          thirdPage.drawText(student["NON ACADEMIC ACHIEVEMENT"][2], {
            x: 75,
            y: 129,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NON ACADEMIC ACHIEVEMENT"][3] &&
          thirdPage.drawText(student["NON ACADEMIC ACHIEVEMENT"][3], {
            x: 75,
            y: 108,
            size: 14,
            color: rgb(0, 0, 0),
          });
      }

      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays a sense of respect and responsibility"
        ][0],
        {
          x: 455,
          y: 663,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Helps teachers in the routine work of the class"
        ][0],
        {
          x: 455,
          y: 646,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Identifies and reports problems and suggests solutions"
        ][0],
        {
          x: 455,
          y: 630,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays kindness towards peers"
        ][0],
        {
          x: 455,
          y: 596,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Displays sharing and caring behaviour"
        ][0],
        {
          x: 455,
          y: 581,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Leads the group with remarkable grace"
        ][0],
        {
          x: 455,
          y: 564,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Respects school property and school norms"
        ][0],
        {
          x: 455,
          y: 532,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Takes responsibility of one’s own actions"
        ][0],
        {
          x: 455,
          y: 516,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["PERSONAL AND SOCIAL TRAITS Adapts positively to changes"][0],
        {
          x: 455,
          y: 500,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Shows kindness to all life forms"
        ][0],
        {
          x: 455,
          y: 467,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Respects and shows sympathy towards environmental entities"
        ][0],
        {
          x: 455,
          y: 451,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "PERSONAL AND SOCIAL TRAITS Shows curiosity towards learning ways to protect the environment"
        ][0],
        {
          x: 455,
          y: 435,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS AND WELL BEING Manages emotions appropriately"][0],
        {
          x: 455,
          y: 295,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Promotes and supports the school motto ‘Service Before Self’"
        ][0],
        {
          x: 455,
          y: 278,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Is exceptionally resilient and treats challenges as opportunities"
        ][0],
        {
          x: 455,
          y: 263,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Displays confidence by sharing ideas and views clearly"
        ][0],
        {
          x: 455,
          y: 229,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Accomplishes all the tasks with precision"
        ][0],
        {
          x: 455,
          y: 212,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Sets realistic and achievable goals"
        ][0],
        {
          x: 455,
          y: 197,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shows interest in others’ opinions and concerns"
        ][0],
        {
          x: 455,
          y: 164,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student["LIFE SKILLS AND WELL BEING Avoids arguments and conflicts"][0],
        {
          x: 455,
          y: 148,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shows co-operation and is a patient listener"
        ][0],
        {
          x: 455,
          y: 131,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Shares responsibilities and credits"
        ][0],
        {
          x: 455,
          y: 98,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(
        student[
          "LIFE SKILLS AND WELL BEING Pays attention to the responses of others"
        ][0],
        {
          x: 455,
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
          x: 455,
          y: 67,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      fifthPage.drawText(
        student[
          "English Listens attentively and comprehends the information well"
        ][0],
        {
          x: 475,
          y: 685,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Understands the information delivered and acts appropriately"
        ][0],
        {
          x: 475,
          y: 669,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["English Connects and evaluates while listening"][0],
        {
          x: 475,
          y: 653,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Tries to improve vocabulary, diction and pronunciation by listening to a wide variety of content"
        ][0],
        {
          x: 475,
          y: 632,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Converses fluently in English, uses good vocabulary, proper pronunciation, diction and modulation"
        ][0],
        {
          x: 475,
          y: 590,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Expresses feelings, emotions and ideas confidently in English"
        ][0],
        {
          x: 475,
          y: 568,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Uses Articles and Subject-Verb Agreement appropriately"
        ][0],
        {
          x: 475,
          y: 551,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Understands the importance of modulation and uses it appropriately"
        ][0],
        {
          x: 475,
          y: 536,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Remains excited to read new content from various sources such as newspapers, library books etc."
        ][0],
        {
          x: 475,
          y: 498,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Makes inferences from the given context and draws conclusions effectively"
        ][0],
        {
          x: 475,
          y: 478,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Independently reads the text with proper intonation and pronunciation"
        ][0],
        {
          x: 475,
          y: 461,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["English Reads the text critically for comprehension"][0],
        {
          x: 475,
          y: 444,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Uses appropriate and good vocabulary, sentence structures and forms of expression"
        ][0],
        {
          x: 475,
          y: 411,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Uses appropriate Parts of Speech, Punctuation and Spellings"
        ][0],
        {
          x: 475,
          y: 395,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Presents the ideas with creativity and clarity in the form of paragraph and stories"
        ][0],
        {
          x: 475,
          y: 379,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "English Produces content that demonstrates insights and imagination while exploring and reflecting critically on new ideas and perspective"
        ][0],
        {
          x: 475,
          y: 359,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "Hindi Listens attentively and comprehends the information well"
        ][0],
        {
          x: 475,
          y: 304,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "Hindi Understands the information delivered and acts appropriately"
        ][0],
        {
          x: 475,
          y: 287,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["Hindi Connects and evaluates while listening"][0],
        {
          x: 475,
          y: 271,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "Hindi Tries to improve vocabulary, diction and pronunciation by listening to a wide variety of content"
        ][0],
        {
          x: 475,
          y: 253,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "Hindi Converses fluently in Hindi , uses good vocabulary, proper pronunciation, diction and modulation"
        ][0],
        {
          x: 475,
          y: 210,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      fifthPage.drawText(
        student[
          "Hindi Expresses feelings, emotions and ideas confidently in Hindi"
        ][0],
        {
          x: 475,
          y: 187,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["Hindi Uses Subject-Verb Agreement appropriately"][0],
        {
          x: 475,
          y: 170,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "Hindi Understands the importance of intonation and uses it appropriately"
        ][0],
        {
          x: 475,
          y: 153,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      fifthPage.drawText(
        student[
          "Hindi Remains excited to read new content from various sources such as newspapers, library books etc."
        ][0],
        {
          x: 475,
          y: 118,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "Hindi Makes inferences from the given context and draws conclusions effectively"
        ][0],
        {
          x: 475,
          y: 98,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student[
          "Hindi Independently reads the text with proper intonation and pronunciation"
        ][0],
        {
          x: 475,
          y: 81,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["Hindi Reads the text critically for comprehension"][0],
        {
          x: 475,
          y: 62,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "Hindi Uses appropriate and good vocabulary, sentence structures and forms of expression"
        ][0],
        {
          x: 473,
          y: 768,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Hindi Uses appropriate Parts of Speech, Punctuation and Spellings"
        ][0],
        {
          x: 473,
          y: 751,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Hindi Presents the ideas with creativity and clarity in the form of paragraph and stories"
        ][0],
        {
          x: 473,
          y: 736,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Hindi Produces content that demonstrates insights and imagination while exploring and reflecting critically on new ideas and perspective"
        ][0],
        {
          x: 473,
          y: 716,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student["Third Language Can understand Greetings"][0],
        {
          x: 473,
          y: 662,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Third LanguageCan understand and recognise numbers and alphabets"
        ][0],
        {
          x: 473,
          y: 645,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student["Third LanguageCan understand simple sentence structure"][0],
        {
          x: 473,
          y: 628,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Third LanguageCan understand and recite age appropriate poems and songs"
        ][0],
        {
          x: 473,
          y: 611,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student["Third LanguageEfficiently responds to Greetings"][0],
        {
          x: 473,
          y: 579,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Third LanguageCan give self-introduction in the specified language"
        ][0],
        {
          x: 473,
          y: 562,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Third LanguageCan recite vocabulary with correct pronunciation"
        ][0],
        {
          x: 473,
          y: 547,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Third LanguageCan understand the importance of intonation and uses it appropriately"
        ][0],
        {
          x: 473,
          y: 530,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(student["Third LanguageCan recognize vocabulary"][0], {
        x: 473,
        y: 498,
        size: 14,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(
        student[
          "Third LanguageCan understand simple contexts, excerpts and dialogues"
        ][0],
        {
          x: 473,
          y: 481,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student["Third LanguageCan read simple sentences"][0],
        {
          x: 473,
          y: 464,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Third LanguageCan categorize words in various parts of speech"
        ][0],
        {
          x: 473,
          y: 447,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(student["Third LanguageCan respond to Greetings"][0], {
        x: 473,
        y: 415,
        size: 14,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(
        student[
          "Third LanguageCan write basic information about a third person"
        ][0],
        {
          x: 473,
          y: 398,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(student["Third LanguageCan translate sentences"][0], {
        x: 473,
        y: 382,
        size: 14,
        color: rgb(0, 0, 0),
      });
      sixthPage.drawText(
        student[
          "Third Language Can write correct spellings of words, paying attention to special characters"
        ][0],
        {
          x: 473,
          y: 366,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "Mathematics Explores concepts, theories, figures and graphs"
        ][0],
        {
          x: 473,
          y: 317,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Uses mathematical concepts and logic to solve problems"
        ][0],
        {
          x: 473,
          y: 300,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Recognises basic geometrical shapes and their observable properties"
        ][0],
        {
          x: 473,
          y: 283,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Uses systematic approach to find solutions for complex problems"
        ][0],
        {
          x: 473,
          y: 268,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "Mathematics Is observant and can easily understand the problem"
        ][0],
        {
          x: 473,
          y: 234,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Can calculate precisely while working with large numbers"
        ][0],
        {
          x: 473,
          y: 217,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Can remember and recall various mathematical concepts such as addition, subtraction, multiplication and division subtraction, multiplication and division"
        ][0],
        {
          x: 473,
          y: 200,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Demonstrates perseverance and resilience in problem solving"
        ][0],
        {
          x: 473,
          y: 179,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "Mathematics Enjoys and understands all mathematical concepts"
        ][0],
        {
          x: 473,
          y: 143,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Uses mathematical concepts in various subjects for integrated learning"
        ][0],
        {
          x: 473,
          y: 128,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Correlates reasons and ideas with real life applications"
        ][0],
        {
          x: 473,
          y: 111,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Participates in classroom discussions actively"
        ][0],
        {
          x: 473,
          y: 95,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      sixthPage.drawText(
        student[
          "Mathematics Is able to perform minor mathematical calculations mentally"
        ][0],
        {
          x: 473,
          y: 63,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      sixthPage.drawText(
        student[
          "Mathematics Recalls and uses mathematical vocabulary and dodging tables efficiently"
        ][0],
        {
          x: 473,
          y: 46,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Mathematics Is self-motivated and tries to execute complex mathematical calculations"
        ][0],
        {
          x: 473,
          y: 785,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Mathematics Has the ability to draw logical conclusions based on the given information orHas the ability to draw logical conclusions based on the given information or assumptions assumptions"
        ][0],
        {
          x: 473,
          y: 765,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      seventhPage.drawText(
        student[
          "General Science Shows the ability to compare and classify things to bring out differences and similarities"
        ][0],
        {
          x: 473,
          y: 705,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Uses classroom learning well to make connections to the environment"
        ][0],
        {
          x: 473,
          y: 684,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Shows the ability to conduct small guided research and correlate information in oral and written forms"
        ][0],
        {
          x: 473,
          y: 664,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Shows inquisitiveness and poses questions to investigate further"
        ][0],
        {
          x: 473,
          y: 643,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Enjoys lab visits, field trips and nature walks"
        ][0],
        {
          x: 473,
          y: 609,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science  Shows curiosity and interest in every minute detail with hands on activities"
        ][0],
        {
          x: 473,
          y: 594,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science  Uses sensory perceptions and responds appropriately"
        ][0],
        {
          x: 473,
          y: 577,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Integrates sensorial perceptions to get a holistic awareness of the experiences"
        ][0],
        {
          x: 473,
          y: 560,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["General Science Demonstrates scientific thinking"][0],
        {
          x: 473,
          y: 527,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science  Exhibits a sense of responsibility and sensitivity towards the environment"
        ][0],
        {
          x: 473,
          y: 510,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Participates actively in class discussions and group activities"
        ][0],
        {
          x: 473,
          y: 495,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Has the ability to gather, analyze and communicate complex information"
        ][0],
        {
          x: 473,
          y: 478,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["General Science Identifies pictures and diagrams"][0],
        {
          x: 473,
          y: 446,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["General Science Draws and labels diagrams appropriately"][0],
        {
          x: 473,
          y: 429,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Understands and differentiates various pictorial representations such as web charts, mind maps etc."
        ][0],
        {
          x: 473,
          y: 409,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "General Science Has the ability to transform theoretical data into visual representations such as charts and diagrams"
        ][0],
        {
          x: 473,
          y: 386,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      seventhPage.drawText(
        student[
          "Social Studies Shows the ability to compare and classify things to bring out differences and similarities"
        ][0],
        {
          x: 473,
          y: 325,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Uses classroom learning well to make connections to the environment"
        ][0],
        {
          x: 473,
          y: 303,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Shows the ability to conduct small guided research and correlate information in oral and written forms"
        ][0],
        {
          x: 473,
          y: 282,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Demonstrates spatial understanding (Map Skills)"
        ][0],
        {
          x: 473,
          y: 262,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Enjoys lab visits, field trips and nature walks"
        ][0],
        {
          x: 473,
          y: 228,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Shows curiosity and interest in every minute detail with hands on activities"
        ][0],
        {
          x: 473,
          y: 211,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Uses sensory perceptions and responds appropriately"
        ][0],
        {
          x: 473,
          y: 194,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Integrates sensorial perceptions to get a holistic awareness of the experiences"
        ][0],
        {
          x: 473,
          y: 179,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Demonstrates social awareness and articulates views appropriately"
        ][0],
        {
          x: 473,
          y: 146,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Exhibits a sense of responsibility and sensitivity towards the environment"
        ][0],
        {
          x: 473,
          y: 130,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student[
          "Social Studies Participates actively in class discussions and group activities"
        ][0],
        {
          x: 473,
          y: 114,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["Social Studies Upholds National Values"][0],
        {
          x: 473,
          y: 97,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["Social Studies Identifies pictures and diagrams well"][0],
        {
          x: 473,
          y: 64,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      seventhPage.drawText(
        student["Social Studies Draws and labels diagrams appropriately"][0],
        {
          x: 473,
          y: 47,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      eighthPage.drawText(
        student[
          "Social Studies Understands and differentiates various pictorial representations such as web charts, mind maps etc."
        ][0],
        {
          x: 473,
          y: 782,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "Social Studies Demonstrates the capacity to understand and value diverse cultures"
        ][0],
        {
          x: 473,
          y: 759,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["Computer Science Displays understanding of concepts"][0],
        {
          x: 473,
          y: 710,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["Computer Science Awareness of hardware and software"][0],
        {
          x: 473,
          y: 693,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["Computer Science Executes the concepts well"][0],
        {
          x: 473,
          y: 661,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "Computer Science Shows the ability to make logical decisions"
        ][0],
        {
          x: 473,
          y: 644,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      eighthPage.drawText(
        student[
          "ART AND CRAFT Demonstrates creativity through colourful and imaginative art projects"
        ][0],
        {
          x: 473,
          y: 552,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "ART AND CRAFT Pays attention to details, ensuring neatness and precision in artwork"
        ][0],
        {
          x: 473,
          y: 535,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "ART AND CRAFT Collaborates effectively with peers during art classes"
        ][0],
        {
          x: 473,
          y: 520,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["MUSIC Demonstrates a passion for music"][0],
        {
          x: 473,
          y: 487,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["MUSIC Displays a keen sense of rhythm and melody"][0],
        {
          x: 473,
          y: 470,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "MUSIC Collaborates harmoniously with peers during group activities"
        ][0],
        {
          x: 473,
          y: 455,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["DANCE Demonstrates a passion for dance"][0],
        {
          x: 473,
          y: 422,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["DANCE Participates actively in group dance performances"][0],
        {
          x: 473,
          y: 405,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student["Dance Synchronizes harmoniously with the beat"][0],
        {
          x: 473,
          y: 388,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "Physical Education Demonstrates sportsmanship during physical activities displaying fair play"
        ][0],
        {
          x: 473,
          y: 356,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "Physical Education Engages in cooperative games and team sports, fostering teamwork with classmates"
        ][0],
        {
          x: 473,
          y: 339,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "Physical Education Follows safety guidelines and rules during sports activities"
        ][0],
        {
          x: 473,
          y: 322,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Shows interest in current events and world affairs, staying informed through reading and discussions"
        ][0],
        {
          x: 473,
          y: 288,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Demonstrates understanding of basic facts and concepts across different topics"
        ][0],
        {
          x: 473,
          y: 265,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "GENERAL KNOWLEDGE Takes initiative in expanding general knowledge on current affairs"
        ][0],
        {
          x: 473,
          y: 248,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "Yoga Has the ability to perform simple breathing exercises"
        ][0],
        {
          x: 473,
          y: 216,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "Yoga Has the ability to execute various yoga poses with proper alignment, balance, and posture"
        ][0],
        {
          x: 473,
          y: 196,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "Yoga Understands the importance of mindfulness and shows interest in practicing them"
        ][0],
        {
          x: 473,
          y: 173,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Participates enthusiastically in the chosen Friday Activity"
        ][0],
        {
          x: 473,
          y: 141,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Takes interest in honing the related skills"
        ][0],
        {
          x: 473,
          y: 124,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(
        student[
          "FRIDAY ACTIVITY Comprehends and executes the given instructions constructively"
        ][0],
        {
          x: 473,
          y: 107,
          size: 14,
          color: rgb(0, 0, 0),
        }
      );

      ninthPage.drawText(student["English PERIODIC TEST-I (35)"][0], {
        x: 272,
        y: 716,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["English MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 333,
        y: 716,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["English HALF YEARLY EXAM (50)"][0], {
        x: 400,
        y: 716,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["English TOTAL MARKS (100)"][0], {
        x: 466,
        y: 716,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["English GRADE"][0], {
        x: 526,
        y: 716,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["Hindi PERIODIC TEST-I (35)"][0], {
        x: 272,
        y: 698,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Hindi MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 333,
        y: 698,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Hindi HALF YEARLY EXAM (50)"][0], {
        x: 400,
        y: 698,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Hindi TOTAL MARKS (100)"][0], {
        x: 466,
        y: 698,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Hindi GRADE"][0], {
        x: 526,
        y: 698,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["Third Language Name"][0], {
        x: 116,
        y: 681,
        size: 9,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Third Language PERIODIC TEST-I (35)"][0], {
        x: 272,
        y: 681,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Third Language MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 333,
        y: 681,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Third Language  HALF YEARLY EXAM (50)"][0], {
        x: 400,
        y: 681,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Third Language  TOTAL MARKS (100)"][0], {
        x: 466,
        y: 681,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Third Language  GRADE"][0], {
        x: 526,
        y: 681,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["Mathematics PERIODIC TEST-I (35)"][0], {
        x: 272,
        y: 663,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Mathematics MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 333,
        y: 663,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Mathematics HALF YEARLY EXAM (50)"][0], {
        x: 400,
        y: 663,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Mathematics TOTAL MARKS (100)"][0], {
        x: 466,
        y: 663,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Mathematics GRADE"][0], {
        x: 526,
        y: 663,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["GENERAL SCIENCE PERIODIC TEST-I (35)"][0], {
        x: 272,
        y: 645,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["GENERAL SCIENCE MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 333,
        y: 645,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["GENERAL SCIENCE HALF YEARLY EXAM (50)"][0], {
        x: 400,
        y: 645,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["GENERAL SCIENCE TOTAL MARKS (100)"][0], {
        x: 466,
        y: 645,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["GENERAL SCIENCE GRADE"][0], {
        x: 526,
        y: 645,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["SOCIAL STUDIES PERIODIC TEST-I (35)"][0], {
        x: 272,
        y: 627,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["SOCIAL STUDIES MA1+SEA1+NW (5+5+5=15)"][0], {
        x: 333,
        y: 627,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["SOCIAL STUDIES HALF YEARLY EXAM (50)"][0], {
        x: 400,
        y: 627,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["SOCIAL STUDIES TOTAL MARKS (100)"][0], {
        x: 466,
        y: 627,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["SOCIAL STUDIES GRADE"][0], {
        x: 526,
        y: 627,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Computer Science PERIODIC TEST-I (50)"][0], {
        x: 265,
        y: 609,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(
        student["Computer Science MA1+SEA1+NW (5+5+5=15)"][0],
        {
          x: 333,
          y: 609,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(student["Computer Science HALF YEARLY EXAM (50)"][0], {
        x: 400,
        y: 609,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Computer Science TOTAL MARKS (100)"][0], {
        x: 466,
        y: 609,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Computer Science GRADE"][0], {
        x: 526,
        y: 609,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["Grand Total"][0], {
        x: 463,
        y: 592,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["GRADE"][0], {
        x: 526,
        y: 592,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["ATTENDANCE"][0], {
        x: 390,
        y: 574,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["CLASS RANK"][0], {
        x: 300,
        y: 556,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["PERCENTAGE"][0], {
        x: 523,
        y: 556,
        size: 12,
        color: rgb(0, 0, 0),
      });

      ninthPage.drawText(student["ART AND CRAFT Grade"][0], {
        x: 407,
        y: 504,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["MUSIC Grade"][0], {
        x: 407,
        y: 485,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["DANCE Grade"][0], {
        x: 407,
        y: 467,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["PHYSICAL EDUCATION Grade"][0], {
        x: 407,
        y: 449,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["DISCIPLINE Grade"][0], {
        x: 407,
        y: 430,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["GENERAL KNOWLEDGE Grade"][0], {
        x: 407,
        y: 413,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["YOGA Grade"][0], {
        x: 407,
        y: 395,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["FRIDAY ACTIVITY Grade"][0], {
        x: 407,
        y: 378,
        size: 12,
        color: rgb(0, 0, 0),
      });

      {
        student["REMARKS BY THE CLASS TEACHER"][0] &&
          ninthPage.drawText(student["REMARKS BY THE CLASS TEACHER"][0], {
            x: 40,
            y: 330,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["REMARKS BY THE CLASS TEACHER"][1] &&
          ninthPage.drawText(student["REMARKS BY THE CLASS TEACHER"][1], {
            x: 40,
            y: 315,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["REMARKS BY THE CLASS TEACHER"][2] &&
          ninthPage.drawText(student["REMARKS BY THE CLASS TEACHER"][2], {
            x: 40,
            y: 300,
            size: 12,
            color: rgb(0, 0, 0),
          });
      }
      ninthPage.drawImage(teacherSign1Image, {
        x: 250,
        y: 240,
        width: 100,
        height: 30,
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
      download(zipBlob, "Class5_report_cards.zip");
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
        download(pdfBytes, "Class5.pdf", "application/pdf");
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

export default Class5_Term1;
