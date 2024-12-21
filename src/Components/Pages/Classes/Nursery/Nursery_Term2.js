import React, { useState, useRef } from "react";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import download from "downloadjs";
import JSZip from "jszip";
// import { userData } from "../../../UserData/UserData";
import styles from "./../PageCss.module.css";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../../Data/Slices/UserDataSlice";

function Nursery_Term2() {
  const location = useLocation();
  const { data, localPdf } = location.state;
  const userData = data.term_2;
  console.log(data, "Data in Class1_Term2");
  console.log(localPdf, "Use localPdf ?");

  const fileURL = localPdf
    ? "https://innovartan.s3.amazonaws.com/8c093da373d2fcb48313cc226546ed952109776981/f58192864ec3ec0f7407de2e887940f3.pdf"
    : "https://dpsin.s3.us-east-1.amazonaws.com/report/NUR/term2.pdf";

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

      const teacherSign2Url = student.teacher_sign_2;
      const teacherSign2Bytes = await fetch(teacherSign2Url).then((res) =>
        res.arrayBuffer()
      );
      const teacherSign3Url = student.teacher_sign_3;
      const teacherSign3Bytes = await fetch(teacherSign3Url).then((res) =>
        res.arrayBuffer()
      );

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

      const myPagePhotoUrl_2 = student.my_page_photo_2;
      const myPagePhotoBytes_2 = await fetch(myPagePhotoUrl_2).then((res) =>
        res.arrayBuffer()
      );

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSign1Image = await pdfDoc.embedJpg(teacherSign1Bytes);
      const teacherSign2Image = await pdfDoc.embedJpg(teacherSign2Bytes);
      const teacherSign3Image = await pdfDoc.embedJpg(teacherSign3Bytes);
      const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      //   const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);
      const myPagePhotoImage = await pdfDoc.embedJpg(myPagePhotoBytes);
      const myPagePhotoImage_2 = await pdfDoc.embedJpg(myPagePhotoBytes_2);

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
        x: 81,
        y: 300,
        width: 192,
        height: 265,
      });
      firstPage.drawImage(familyPhotImage, {
        x: 324,
        y: 300,
        width: 185,
        height: 265,
      });
      firstPage.drawText(student["Student's Name"][0], {
        x: 210,
        y: 250,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.Section[0], {
        x: 425,
        y: 250,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admn.no"][0], {
        x: 168,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll no"][0], {
        x: 315,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"][0].replace(/['"]/g, ""), {
        x: 460,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"][0], {
        x: 202,
        y: 193,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's (Mob)"][0], {
        x: 200,
        y: 165,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"][0], {
        x: 205,
        y: 136,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's (Mob)"][0], {
        x: 204,
        y: 108,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["I love cleanliness"][0], {
        x: student["I love cleanliness"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 656,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am organised"][0], {
        x: student["I am organised"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 633,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can eat independently"][0], {
        x: student["I can eat independently"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 610,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I have independent restroom habits"][0], {
        x:
          student["I have independent restroom habits"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 587,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["FEELING STRONG AND FREE Remarks"][0] &&
          thirdPage.drawText(student["FEELING STRONG AND FREE Remarks"][0], {
            x: 363,
            y: 656,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["FEELING STRONG AND FREE Remarks"][1] &&
          thirdPage.drawText(student["FEELING STRONG AND FREE Remarks"][1], {
            x: 363,
            y: 643,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["FEELING STRONG AND FREE Remarks"][2] &&
          thirdPage.drawText(student["FEELING STRONG AND FREE Remarks"][2], {
            x: 363,
            y: 630,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["FEELING STRONG AND FREE Remarks"][3] &&
          thirdPage.drawText(student["FEELING STRONG AND FREE Remarks"][3], {
            x: 363,
            y: 617,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I have good observation skills"][0], {
        x:
          student["I have good observation skills"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 541,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I wonder and explore my senses"][0], {
        x:
          student["I wonder and explore my senses"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 519,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can retain and recall"][0], {
        x: student["I can retain and recall"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 497,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am mindful of things around me"][0], {
        x:
          student["I am mindful of things around me"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 475,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am a logical thinker"][0], {
        x: student["I am a logical thinker"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 453,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MIND MATTERS Remarks"][0] &&
          thirdPage.drawText(student["MIND MATTERS Remarks"][0], {
            x: 363,
            y: 541,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MIND MATTERS Remarks"][1] &&
          thirdPage.drawText(student["MIND MATTERS Remarks"][1], {
            x: 363,
            y: 528,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MIND MATTERS Remarks"][2] &&
          thirdPage.drawText(student["MIND MATTERS Remarks"][2], {
            x: 363,
            y: 516,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MIND MATTERS Remarks"][3] &&
          thirdPage.drawText(student["MIND MATTERS Remarks"][3], {
            x: 363,
            y: 504,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I am an attentive listener"][0], {
        x:
          student["I am an attentive listener"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can express myself clearly"][0], {
        x:
          student["I can express myself clearly"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 383,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I share mutual gaze"][0], {
        x: student["I share mutual gaze"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 360,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["EFFECTIVE EXPRESSIONS Remarks"][0] &&
          thirdPage.drawText(student["EFFECTIVE EXPRESSIONS Remarks"][0], {
            x: 363,
            y: 405,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EFFECTIVE EXPRESSIONS Remarks"][1] &&
          thirdPage.drawText(student["EFFECTIVE EXPRESSIONS Remarks"][1], {
            x: 363,
            y: 392,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EFFECTIVE EXPRESSIONS Remarks"][2] &&
          thirdPage.drawText(student["EFFECTIVE EXPRESSIONS Remarks"][2], {
            x: 363,
            y: 379,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EFFECTIVE EXPRESSIONS Remarks"][3] &&
          thirdPage.drawText(student["EFFECTIVE EXPRESSIONS Remarks"][3], {
            x: 363,
            y: 366,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I harmonize well with classmates"][0], {
        x:
          student["I harmonize well with classmates"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 315,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I adopt and follow norms"][0], {
        x: student["I adopt and follow norms"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 292,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am assertive"][0], {
        x: student["I am assertive"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I embrace responsibilities well"][0], {
        x:
          student["I embrace responsibilities well"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 246,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am self reliant"][0], {
        x: student["I am self reliant"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 223,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["CONNECTION AND COMPASSION Remarks"][0] &&
          thirdPage.drawText(student["CONNECTION AND COMPASSION Remarks"][0], {
            x: 363,
            y: 315,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["CONNECTION AND COMPASSION Remarks"][1] &&
          thirdPage.drawText(student["CONNECTION AND COMPASSION Remarks"][1], {
            x: 363,
            y: 302,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["CONNECTION AND COMPASSION Remarks"][2] &&
          thirdPage.drawText(student["CONNECTION AND COMPASSION Remarks"][2], {
            x: 363,
            y: 289,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["CONNECTION AND COMPASSION Remarks"][3] &&
          thirdPage.drawText(student["CONNECTION AND COMPASSION Remarks"][3], {
            x: 363,
            y: 276,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      thirdPage.drawText(student["I am inquisitive"][0], {
        x: student["I am inquisitive"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 179,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am a smart thinker"][0], {
        x: student["I am a smart thinker"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 156,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["SOCIAL AWARENESS Remarks"][0] &&
          thirdPage.drawText(student["SOCIAL AWARENESS Remarks"][0], {
            x: 363,
            y: 179,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SOCIAL AWARENESS Remarks"][1] &&
          thirdPage.drawText(student["SOCIAL AWARENESS Remarks"][1], {
            x: 363,
            y: 166,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SOCIAL AWARENESS Remarks"][2] &&
          thirdPage.drawText(student["SOCIAL AWARENESS Remarks"][2], {
            x: 363,
            y: 153,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      fourthPage.drawText(student["I am number smart"][0], {
        x: student["I am number smart"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 683,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am aware of pre-math concepts"][0], {
        x:
          student["I am aware of pre-math concepts"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 658,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["NUMERACY SMART Remarks"][0] &&
          fourthPage.drawText(student["NUMERACY SMART Remarks"][0], {
            x: 378,
            y: 683,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks"][1] &&
          fourthPage.drawText(student["NUMERACY SMART Remarks"][1], {
            x: 378,
            y: 670,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks"][2] &&
          fourthPage.drawText(student["NUMERACY SMART Remarks"][2], {
            x: 378,
            y: 657,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks"][3] &&
          fourthPage.drawText(student["NUMERACY SMART Remarks"][3], {
            x: 378,
            y: 644,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I am jolly with phonics"][0], {
        x: student["I am jolly with phonics"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 612,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can comprehend and trace letters"][0], {
        x:
          student["I can comprehend and trace letters"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 589,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can converse using vocabulary"][0], {
        x:
          student["I can converse using vocabulary"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 566,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I engage in action rhymes"][0], {
        x:
          student["I engage in action rhymes"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 543,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am comfortable making patterns"][0], {
        x:
          student["I am comfortable making patterns"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 520,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["LANGUAGE LEAPS Remarks"][0] &&
          fourthPage.drawText(student["LANGUAGE LEAPS Remarks"][0], {
            x: 378,
            y: 612,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks"][1] &&
          fourthPage.drawText(student["LANGUAGE LEAPS Remarks"][1], {
            x: 378,
            y: 599,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks"][2] &&
          fourthPage.drawText(student["LANGUAGE LEAPS Remarks"][2], {
            x: 378,
            y: 586,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks"][3] &&
          fourthPage.drawText(student["LANGUAGE LEAPS Remarks"][3], {
            x: 378,
            y: 573,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["अक्षर ज्ञान"][0], {
        x: student["अक्षर ज्ञान"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 472,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["कवि ता का आनंद"][0], {
        x: student["कवि ता का आनंद"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 447,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["मेरी भाषा Remarks"][0] &&
          fourthPage.drawText(student["मेरी भाषा Remarks"][0], {
            x: 378,
            y: 472,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["मेरी भाषा Remarks"][1] &&
          fourthPage.drawText(student["मेरी भाषा Remarks"][1], {
            x: 378,
            y: 459,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["मेरी भाषा Remarks"][2] &&
          fourthPage.drawText(student["मेरी भाषा Remarks"][2], {
            x: 378,
            y: 446,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I am artistic"][0], {
        x: student["I am artistic"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 401,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I have distinct expressions"][0], {
        x:
          student["I have distinct expressions"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 378,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["AESTHETIC ME Remarks"][0] &&
          fourthPage.drawText(student["AESTHETIC ME Remarks"][0], {
            x: 378,
            y: 401,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["AESTHETIC ME Remarks"][1] &&
          fourthPage.drawText(student["AESTHETIC ME Remarks"][1], {
            x: 378,
            y: 388,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["AESTHETIC ME Remarks"][2] &&
          fourthPage.drawText(student["AESTHETIC ME Remarks"][2], {
            x: 378,
            y: 375,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I can sing melodiously"][0], {
        x: student["I can sing melodiously"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 332,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can sing in tune with expressions"][0], {
        x:
          student["I can sing in tune with expressions"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 309,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MUSIC MARVEL Remarks"][0] &&
          fourthPage.drawText(student["MUSIC MARVEL Remarks"][0], {
            x: 378,
            y: 332,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC MARVEL Remarks"][1] &&
          fourthPage.drawText(student["MUSIC MARVEL Remarks"][1], {
            x: 378,
            y: 319,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC MARVEL Remarks"][2] &&
          fourthPage.drawText(student["MUSIC MARVEL Remarks"][2], {
            x: 378,
            y: 306,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I have groovy feet"][0], {
        x: student["I have groovy feet"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 263,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am flexible"][0], {
        x: student["I am flexible"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 240,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am a dance enthusiast"][0], {
        x: student["I am a dance enthusiast"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 217,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["DANCE DYNAMO Remarks"][0] &&
          fourthPage.drawText(student["DANCE DYNAMO Remarks"][0], {
            x: 378,
            y: 263,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE DYNAMO Remarks"][1] &&
          fourthPage.drawText(student["DANCE DYNAMO Remarks"][1], {
            x: 378,
            y: 250,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE DYNAMO Remarks"][2] &&
          fourthPage.drawText(student["DANCE DYNAMO Remarks"][2], {
            x: 378,
            y: 237,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE DYNAMO Remarks"][3] &&
          fourthPage.drawText(student["DANCE DYNAMO Remarks"][3], {
            x: 378,
            y: 224,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fourthPage.drawText(student["I show strength and endurance"][0], {
        x:
          student["I show strength and endurance"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 171,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(
        student["I have appropriate control and balance"][0],
        {
          x:
            student["I have appropriate control and balance"][0] ===
            "PROGRESSIVE"
              ? 285
              : 295,
          y: 141,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      fourthPage.drawText(student["I display team spirit"][0], {
        x: student["I display team spirit"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 111,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ATHLETIC ME Remarks"][0] &&
          fourthPage.drawText(student["ATHLETIC ME Remarks"][0], {
            x: 378,
            y: 171,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ATHLETIC ME Remarks"][1] &&
          fourthPage.drawText(student["ATHLETIC ME Remarks"][1], {
            x: 378,
            y: 158,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ATHLETIC ME Remarks"][2] &&
          fourthPage.drawText(student["ATHLETIC ME Remarks"][2], {
            x: 378,
            y: 145,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ATHLETIC ME Remarks"][3] &&
          fourthPage.drawText(student["ATHLETIC ME Remarks"][3], {
            x: 378,
            y: 132,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      fifthPage.drawText(student["Total no. of working days"][0], {
        x: 135,
        y: 671,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["No. of days present"][0], {
        x: 177,
        y: 655,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I stand ______ cms tall"][0], {
        x: 294,
        y: 640,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I weigh ______ kgs"][0], {
        x: 294,
        y: 607,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite fruit"][0], {
        x: 420,
        y: 660,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite colour"][0], {
        x: 98,
        y: 535,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite TV show"][0], {
        x: 420,
        y: 550,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I extend support"][0].slice(0, 20), {
        x: 313,
        y: 445,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I extend support"][0].slice(21, 40), {
        x: 313,
        y: 432,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I am generous"][0].slice(0, 20), {
        x: 313,
        y: 408,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I am generous"][0].slice(21, 40), {
        x: 313,
        y: 395,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I get along well with my classmates"][0].slice(0, 20),
        {
          x: 313,
          y: 369,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["I get along well with my classmates"][0].slice(21, 40),
        {
          x: 313,
          y: 356,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["PARENT'S REFLECTION"][0] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][0], {
            x: 57,
            y: 265,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT'S REFLECTION"][1] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][1], {
            x: 57,
            y: 253,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT'S REFLECTION"][2] &&
          fifthPage.drawText(student["PARENT'S REFLECTION"][2], {
            x: 57,
            y: 241,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["TEACHER'S REFLECTION"][0] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][0], {
            x: 57,
            y: 185,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION"][1] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][1], {
            x: 57,
            y: 173,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION"][2] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][2], {
            x: 57,
            y: 161,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION"][3] &&
          fifthPage.drawText(student["TEACHER'S REFLECTION"][3], {
            x: 57,
            y: 149,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      fifthPage.drawImage(teacherSign1Image, {
        x: 57,
        y: 55,
        width: 70,
        height: 30,
      });
      fifthPage.drawImage(teacherSign2Image, {
        x: 140,
        y: 55,
        width: 70,
        height: 30,
      });

      sixthPage.drawImage(myPagePhotoImage, {
        x: 55,
        y: 106,
        width: 480,
        height: 590,
      });

      seventhPage.drawText(student["I love cleanliness_2"][0], {
        x: student["I love cleanliness"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 656,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I am organised_2"][0], {
        x: student["I am organised_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 633,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I can eat independently_2"][0], {
        x:
          student["I can eat independently_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 610,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I have independent restroom habits_2"][0], {
        x:
          student["I have independent restroom habits_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 587,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["FEELING STRONG AND FREE Remarks_2"][0] &&
          seventhPage.drawText(
            student["FEELING STRONG AND FREE Remarks_2"][0],
            {
              x: 363,
              y: 656,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["FEELING STRONG AND FREE Remarks_2"][1] &&
          seventhPage.drawText(
            student["FEELING STRONG AND FREE Remarks_2"][1],
            {
              x: 363,
              y: 643,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["FEELING STRONG AND FREE Remarks_2"][2] &&
          seventhPage.drawText(
            student["FEELING STRONG AND FREE Remarks_2"][2],
            {
              x: 363,
              y: 630,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["FEELING STRONG AND FREE Remarks_2"][3] &&
          seventhPage.drawText(
            student["FEELING STRONG AND FREE Remarks_2"][3],
            {
              x: 363,
              y: 617,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      seventhPage.drawText(student["I have good observation skills_2"][0], {
        x:
          student["I have good observation skills_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 541,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I wonder and explore my senses_2"][0], {
        x:
          student["I wonder and explore my senses_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 519,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I can retain and recall_2"][0], {
        x:
          student["I can retain and recall_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 497,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I am mindful of things around me_2"][0], {
        x:
          student["I am mindful of things around me_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 475,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I am a logical thinker_2"][0], {
        x: student["I am a logical thinker_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 453,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MIND MATTERS Remarks_2"][0] &&
          seventhPage.drawText(student["MIND MATTERS Remarks_2"][0], {
            x: 363,
            y: 541,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MIND MATTERS Remarks_2"][1] &&
          seventhPage.drawText(student["MIND MATTERS Remarks_2"][1], {
            x: 363,
            y: 528,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MIND MATTERS Remarks_2"][2] &&
          seventhPage.drawText(student["MIND MATTERS Remarks_2"][2], {
            x: 363,
            y: 516,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MIND MATTERS Remarks_2"][3] &&
          seventhPage.drawText(student["MIND MATTERS Remarks_2"][3], {
            x: 363,
            y: 504,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      seventhPage.drawText(student["I am an attentive listener_2"][0], {
        x:
          student["I am an attentive listener_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I can express myself clearly_2"][0], {
        x:
          student["I can express myself clearly_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 383,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I share mutual gaze_2"][0], {
        x: student["I share mutual gaze_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 360,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["EFFECTIVE EXPRESSIONS Remarks_2"][0] &&
          seventhPage.drawText(student["EFFECTIVE EXPRESSIONS Remarks_2"][0], {
            x: 363,
            y: 405,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EFFECTIVE EXPRESSIONS Remarks_2"][1] &&
          seventhPage.drawText(student["EFFECTIVE EXPRESSIONS Remarks_2"][1], {
            x: 363,
            y: 392,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EFFECTIVE EXPRESSIONS Remarks_2"][2] &&
          seventhPage.drawText(student["EFFECTIVE EXPRESSIONS Remarks_2"][2], {
            x: 363,
            y: 379,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["EFFECTIVE EXPRESSIONS Remarks_2"][3] &&
          seventhPage.drawText(student["EFFECTIVE EXPRESSIONS Remarks_2"][3], {
            x: 363,
            y: 366,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      seventhPage.drawText(student["I harmonize well with classmates_2"][0], {
        x:
          student["I harmonize well with classmates_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 315,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I adopt and follow norms_2"][0], {
        x:
          student["I adopt and follow norms_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 292,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I am assertive_2"][0], {
        x: student["I am assertive_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I embrace responsibilities well_2"][0], {
        x:
          student["I embrace responsibilities well_2"][0] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 246,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I am self reliant_2"][0], {
        x: student["I am self reliant_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 223,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["CONNECTION AND COMPASSION Remarks_2"][0] &&
          seventhPage.drawText(
            student["CONNECTION AND COMPASSION Remarks_2"][0],
            {
              x: 363,
              y: 315,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["CONNECTION AND COMPASSION Remarks_2"][1] &&
          seventhPage.drawText(
            student["CONNECTION AND COMPASSION Remarks_2"][1],
            {
              x: 363,
              y: 302,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["CONNECTION AND COMPASSION Remarks_2"][2] &&
          seventhPage.drawText(
            student["CONNECTION AND COMPASSION Remarks_2"][2],
            {
              x: 363,
              y: 289,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      {
        student["CONNECTION AND COMPASSION Remarks_2"][3] &&
          seventhPage.drawText(
            student["CONNECTION AND COMPASSION Remarks_2"][3],
            {
              x: 363,
              y: 276,
              size: 10,
              color: rgb(0, 0, 0),
            }
          );
      }
      seventhPage.drawText(student["I am inquisitive_2"][0], {
        x: student["I am inquisitive_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 179,
        size: 10,
        color: rgb(0, 0, 0),
      });
      seventhPage.drawText(student["I am a smart thinker_2"][0], {
        x: student["I am a smart thinker_2"][0] === "PROGRESSIVE" ? 275 : 285,
        y: 156,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["SOCIAL AWARENESS Remarks_2"][0] &&
          seventhPage.drawText(student["SOCIAL AWARENESS Remarks_2"][0], {
            x: 363,
            y: 179,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SOCIAL AWARENESS Remarks_2"][1] &&
          seventhPage.drawText(student["SOCIAL AWARENESS Remarks_2"][1], {
            x: 363,
            y: 166,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["SOCIAL AWARENESS Remarks_2"][2] &&
          seventhPage.drawText(student["SOCIAL AWARENESS Remarks_2"][2], {
            x: 363,
            y: 153,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      eighthPage.drawText(student["I am number smart_2"][0], {
        x: student["I am number smart_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 683,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I am aware of pre-math concepts_2"][0], {
        x:
          student["I am aware of pre-math concepts_2"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 658,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["NUMERACY SMART Remarks_2"][0] &&
          eighthPage.drawText(student["NUMERACY SMART Remarks_2"][0], {
            x: 378,
            y: 683,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks_2"][1] &&
          eighthPage.drawText(student["NUMERACY SMART Remarks_2"][1], {
            x: 378,
            y: 670,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks_2"][2] &&
          eighthPage.drawText(student["NUMERACY SMART Remarks_2"][2], {
            x: 378,
            y: 657,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["NUMERACY SMART Remarks_2"][3] &&
          eighthPage.drawText(student["NUMERACY SMART Remarks_2"][3], {
            x: 378,
            y: 644,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(student["I am jolly with phonics_2"][0], {
        x:
          student["I am jolly with phonics_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 612,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I can comprehend and trace letters_2"][0], {
        x:
          student["I can comprehend and trace letters_2"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 589,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I can converse using vocabulary_2"][0], {
        x:
          student["I can converse using vocabulary_2"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 566,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I engage in action rhymes_2"][0], {
        x:
          student["I engage in action rhymes_2"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 543,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I am comfortable making patterns_2"][0], {
        x:
          student["I am comfortable making patterns_2"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 520,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["LANGUAGE LEAPS Remarks_2"][0] &&
          eighthPage.drawText(student["LANGUAGE LEAPS Remarks_2"][0], {
            x: 378,
            y: 612,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks_2"][1] &&
          eighthPage.drawText(student["LANGUAGE LEAPS Remarks_2"][1], {
            x: 378,
            y: 599,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks_2"][2] &&
          eighthPage.drawText(student["LANGUAGE LEAPS Remarks_2"][2], {
            x: 378,
            y: 586,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["LANGUAGE LEAPS Remarks_2"][3] &&
          eighthPage.drawText(student["LANGUAGE LEAPS Remarks_2"][3], {
            x: 378,
            y: 573,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(student["अक्षर ज्ञान_2"][0], {
        x: student["अक्षर ज्ञान_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 472,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["कवि ता का आनंद_2"][0], {
        x: student["कवि ता का आनंद_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 447,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["मेरी भाषा Remarks_2"][0] &&
          eighthPage.drawText(student["मेरी भाषा Remarks_2"][0], {
            x: 378,
            y: 472,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["मेरी भाषा Remarks_2"][1] &&
          eighthPage.drawText(student["मेरी भाषा Remarks_2"][1], {
            x: 378,
            y: 459,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["मेरी भाषा Remarks_2"][2] &&
          eighthPage.drawText(student["मेरी भाषा Remarks_2"][2], {
            x: 378,
            y: 446,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(student["I am artistic_2"][0], {
        x: student["I am artistic_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 401,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I have distinct expressions_2"][0], {
        x:
          student["I have distinct expressions_2"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 378,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["AESTHETIC ME Remarks_2"][0] &&
          eighthPage.drawText(student["AESTHETIC ME Remarks_2"][0], {
            x: 378,
            y: 401,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["AESTHETIC ME Remarks_2"][1] &&
          eighthPage.drawText(student["AESTHETIC ME Remarks_2"][1], {
            x: 378,
            y: 388,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["AESTHETIC ME Remarks_2"][2] &&
          eighthPage.drawText(student["AESTHETIC ME Remarks_2"][2], {
            x: 378,
            y: 375,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(student["I can sing melodiously_2"][0], {
        x: student["I can sing melodiously_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 332,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I can sing in tune with expressions_2"][0], {
        x:
          student["I can sing in tune with expressions_2"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 309,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["MUSIC MARVEL Remarks_2"][0] &&
          eighthPage.drawText(student["MUSIC MARVEL Remarks_2"][0], {
            x: 378,
            y: 332,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC MARVEL Remarks_2"][1] &&
          eighthPage.drawText(student["MUSIC MARVEL Remarks_2"][1], {
            x: 378,
            y: 319,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["MUSIC MARVEL Remarks_2"][2] &&
          eighthPage.drawText(student["MUSIC MARVEL Remarks_2"][2], {
            x: 378,
            y: 306,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(student["I have groovy feet_2"][0], {
        x: student["I have groovy feet_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 263,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I am flexible_2"][0], {
        x: student["I am flexible_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 240,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(student["I am a dance enthusiast_2"][0], {
        x:
          student["I am a dance enthusiast_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 217,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["DANCE DYNAMO Remarks_2"][0] &&
          eighthPage.drawText(student["DANCE DYNAMO Remarks_2"][0], {
            x: 378,
            y: 263,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE DYNAMO Remarks_2"][1] &&
          eighthPage.drawText(student["DANCE DYNAMO Remarks_2"][1], {
            x: 378,
            y: 250,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE DYNAMO Remarks_2"][2] &&
          eighthPage.drawText(student["DANCE DYNAMO Remarks_2"][2], {
            x: 378,
            y: 237,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["DANCE DYNAMO Remarks_2"][3] &&
          eighthPage.drawText(student["DANCE DYNAMO Remarks_2"][3], {
            x: 378,
            y: 224,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      eighthPage.drawText(student["I show strength and endurance_2"][0], {
        x:
          student["I show strength and endurance_2"][0] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 171,
        size: 10,
        color: rgb(0, 0, 0),
      });
      eighthPage.drawText(
        student["I have appropriate control and balance_2"][0],
        {
          x:
            student["I have appropriate control and balance_2"][0] ===
            "PROGRESSIVE"
              ? 285
              : 295,
          y: 141,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      eighthPage.drawText(student["I display team spirit_2"][0], {
        x: student["I display team spirit_2"][0] === "PROGRESSIVE" ? 285 : 295,
        y: 111,
        size: 10,
        color: rgb(0, 0, 0),
      });
      {
        student["ATHLETIC ME Remarks_2"][0] &&
          eighthPage.drawText(student["ATHLETIC ME Remarks_2"][0], {
            x: 378,
            y: 171,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ATHLETIC ME Remarks_2"][1] &&
          eighthPage.drawText(student["ATHLETIC ME Remarks_2"][1], {
            x: 378,
            y: 158,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ATHLETIC ME Remarks_2"][2] &&
          eighthPage.drawText(student["ATHLETIC ME Remarks_2"][2], {
            x: 378,
            y: 145,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["ATHLETIC ME Remarks_2"][3] &&
          eighthPage.drawText(student["ATHLETIC ME Remarks_2"][3], {
            x: 378,
            y: 132,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      ninthPage.drawText(student["Total no. of working days_2"][0], {
        x: 135,
        y: 671,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["No. of days present_2"][0], {
        x: 177,
        y: 655,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["I stand ______ cms tall_2"][0], {
        x: 294,
        y: 640,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["I weigh ______ kgs_2"][0], {
        x: 294,
        y: 607,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["My favourite Book_2"][0], {
        x: 405,
        y: 653,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["My favourite place to visit_2"][0], {
        x: 98,
        y: 535,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["My best friend_2"][0], {
        x: 430,
        y: 557,
        size: 14,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["I extend support_2"][0].slice(0, 20), {
        x: 313,
        y: 445,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["I extend support_2"][0].slice(21, 40), {
        x: 313,
        y: 432,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["I am generous_2"][0].slice(0, 20), {
        x: 313,
        y: 408,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(student["I am generous_2"][0].slice(21, 40), {
        x: 313,
        y: 395,
        size: 12,
        color: rgb(0, 0, 0),
      });
      ninthPage.drawText(
        student["I get along well with my classmates_2"][0].slice(0, 20),
        {
          x: 313,
          y: 369,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      ninthPage.drawText(
        student["I get along well with my classmates_2"][0].slice(21, 40),
        {
          x: 313,
          y: 356,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      {
        student["PARENT'S REFLECTION_2"][0] &&
          ninthPage.drawText(student["PARENT'S REFLECTION_2"][0], {
            x: 57,
            y: 265,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT'S REFLECTION_2"][1] &&
          ninthPage.drawText(student["PARENT'S REFLECTION_2"][1], {
            x: 57,
            y: 253,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["PARENT'S REFLECTION_2"][2] &&
          ninthPage.drawText(student["PARENT'S REFLECTION_2"][2], {
            x: 57,
            y: 241,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }

      {
        student["TEACHER'S REFLECTION_2"][0] &&
          ninthPage.drawText(student["TEACHER'S REFLECTION_2"][0], {
            x: 57,
            y: 185,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION_2"][1] &&
          ninthPage.drawText(student["TEACHER'S REFLECTION_2"][1], {
            x: 57,
            y: 173,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION_2"][2] &&
          ninthPage.drawText(student["TEACHER'S REFLECTION_2"][2], {
            x: 57,
            y: 161,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      {
        student["TEACHER'S REFLECTION_2"][3] &&
          ninthPage.drawText(student["TEACHER'S REFLECTION_2"][3], {
            x: 57,
            y: 149,
            size: 10,
            color: rgb(0, 0, 0),
          });
      }
      ninthPage.drawImage(teacherSign1Image, {
        x: 57,
        y: 55,
        width: 70,
        height: 30,
      });
      ninthPage.drawImage(teacherSign3Image, {
        x: 140,
        y: 55,
        width: 70,
        height: 30,
      });

      tenthPage.drawImage(myPagePhotoImage_2, {
        x: 55,
        y: 106,
        width: 480,
        height: 590,
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
      download(zipBlob, "Nursery_report_cards.zip");
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
        download(pdfBytes, "Nursery.pdf", "application/pdf");
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

export default Nursery_Term2;
