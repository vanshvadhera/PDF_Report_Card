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

      const image = await pdfDoc.embedJpg(imageBytes);
      const teacherSign1Image = await pdfDoc.embedJpg(teacherSign1Bytes);
      // const teacherSign2Image = await pdfDoc.embedJpg(teacherSign2Bytes);
      const familyPhotImage = await pdfDoc.embedJpg(familyPhotoBytes);
      const groupPhotImage = await pdfDoc.embedJpg(groupPhotBytes);

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
      firstPage.drawText(student["Student's Name"], {
        x: 210,
        y: 250,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student.Section, {
        x: 425,
        y: 250,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Admn.no"], {
        x: 168,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Roll no"], {
        x: 315,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Date of Birth"].replace(/['"]/g, ""), {
        x: 460,
        y: 222,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's Name"], {
        x: 202,
        y: 193,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Father's (Mob)"], {
        x: 200,
        y: 165,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's Name"], {
        x: 205,
        y: 136,
        size: 10,
        color: rgb(0, 0, 0),
      });
      firstPage.drawText(student["Mother's (Mob)"], {
        x: 204,
        y: 108,
        size: 10,
        color: rgb(0, 0, 0),
      });

      thirdPage.drawText(student["I love cleanliness"], {
        x: student["I love cleanliness"] === "PROGRESSIVE" ? 275 : 285,
        y: 656,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am organised"], {
        x: student["I am organised"] === "PROGRESSIVE" ? 275 : 285,
        y: 633,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can eat independently"], {
        x: student["I can eat independently"] === "PROGRESSIVE" ? 275 : 285,
        y: 610,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I have independent restroom habits"], {
        x:
          student["I have independent restroom habits"] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 587,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["FEELING STRONG AND FREE Remarks"].slice(0, 40),
        {
          x: 363,
          y: 656,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["FEELING STRONG AND FREE Remarks"].slice(40, 80),
        {
          x: 363,
          y: 643,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["FEELING STRONG AND FREE Remarks"].slice(80, 120),
        {
          x: 363,
          y: 630,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["FEELING STRONG AND FREE Remarks"].slice(120, 160),
        {
          x: 363,
          y: 617,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["I have good observation skills"], {
        x:
          student["I have good observation skills"] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 541,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I wonder and explore my senses"], {
        x:
          student["I wonder and explore my senses"] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 519,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can retain and recall"], {
        x: student["I can retain and recall"] === "PROGRESSIVE" ? 275 : 285,
        y: 497,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am mindful of things around me"], {
        x:
          student["I am mindful of things around me"] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 475,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am a logical thinker"], {
        x: student["I am a logical thinker"] === "PROGRESSIVE" ? 275 : 285,
        y: 453,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MIND MATTERS Remarks"].slice(0, 40), {
        x: 363,
        y: 541,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MIND MATTERS Remarks"].slice(40, 80), {
        x: 363,
        y: 528,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MIND MATTERS Remarks"].slice(80, 120), {
        x: 363,
        y: 516,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["MIND MATTERS Remarks"].slice(120, 160), {
        x: 363,
        y: 504,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am an attentive listener"], {
        x: student["I am an attentive listener"] === "PROGRESSIVE" ? 275 : 285,
        y: 405,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I can express myself clearly"], {
        x:
          student["I can express myself clearly"] === "PROGRESSIVE" ? 275 : 285,
        y: 383,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I share mutual gaze"], {
        x: student["I share mutual gaze"] === "PROGRESSIVE" ? 275 : 285,
        y: 360,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["EFFECTIVE EXPRESSIONS Remarks"].slice(0, 37),
        {
          x: 363,
          y: 405,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["EFFECTIVE EXPRESSIONS Remarks"].slice(37, 74),
        {
          x: 363,
          y: 392,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["EFFECTIVE EXPRESSIONS Remarks"].slice(74, 111),
        {
          x: 363,
          y: 379,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["EFFECTIVE EXPRESSIONS Remarks"].slice(111, 148),
        {
          x: 363,
          y: 366,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["I harmonize well with classmates"], {
        x:
          student["I harmonize well with classmates"] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 315,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I adopt and follow norms"], {
        x: student["I adopt and follow norms"] === "PROGRESSIVE" ? 275 : 285,
        y: 292,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am assertive"], {
        x: student["I am assertive"] === "PROGRESSIVE" ? 275 : 285,
        y: 269,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I embrace responsibilities well"], {
        x:
          student["I embrace responsibilities well"] === "PROGRESSIVE"
            ? 275
            : 285,
        y: 246,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am self reliant"], {
        x: student["I am self reliant"] === "PROGRESSIVE" ? 275 : 285,
        y: 223,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(
        student["CONNECTION AND COMPASSION Remarks"].slice(0, 40),
        {
          x: 363,
          y: 315,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["CONNECTION AND COMPASSION Remarks"].slice(40, 80),
        {
          x: 363,
          y: 302,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["CONNECTION AND COMPASSION Remarks"].slice(80, 120),
        {
          x: 363,
          y: 289,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(
        student["CONNECTION AND COMPASSION Remarks"].slice(120, 160),
        {
          x: 363,
          y: 266,
          size: 10,
          color: rgb(0, 0, 0),
        }
      );
      thirdPage.drawText(student["I am inquisitive"], {
        x: student["I am inquisitive"] === "PROGRESSIVE" ? 275 : 285,
        y: 179,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["I am a smart thinker"], {
        x: student["I am a smart thinker"] === "PROGRESSIVE" ? 275 : 285,
        y: 156,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SOCIAL AWARENESS Remarks"].slice(0, 40), {
        x: 363,
        y: 179,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SOCIAL AWARENESS Remarks"].slice(40, 80), {
        x: 363,
        y: 166,
        size: 10,
        color: rgb(0, 0, 0),
      });
      thirdPage.drawText(student["SOCIAL AWARENESS Remarks"].slice(80, 120), {
        x: 363,
        y: 153,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fourthPage.drawText(student["I am number smart"], {
        x: student["I am number smart"] === "PROGRESSIVE" ? 285 : 295,
        y: 683,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am aware of pre-math concepts"], {
        x:
          student["I am aware of pre-math concepts"] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 658,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["NUMERACY SMART Remarks"].slice(0, 33), {
        x: 378,
        y: 683,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["NUMERACY SMART Remarks"].slice(33, 66), {
        x: 378,
        y: 670,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["NUMERACY SMART Remarks"].slice(66, 99), {
        x: 378,
        y: 657,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["NUMERACY SMART Remarks"].slice(99, 132), {
        x: 378,
        y: 644,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am jolly with phonics"], {
        x: student["I am jolly with phonics"] === "PROGRESSIVE" ? 285 : 295,
        y: 612,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can comprehend and trace letters"], {
        x:
          student["I can comprehend and trace letters"] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 589,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can converse using vocabulary"], {
        x:
          student["I can converse using vocabulary"] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 566,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I engage in action rhymes"], {
        x: student["I engage in action rhymes"] === "PROGRESSIVE" ? 285 : 295,
        y: 543,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am comfortable making patterns"], {
        x:
          student["I am comfortable making patterns"] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 520,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["LANGUAGE LEAPS Remarks"].slice(0, 33), {
        x: 378,
        y: 612,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["LANGUAGE LEAPS Remarks"].slice(33, 66), {
        x: 378,
        y: 599,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["LANGUAGE LEAPS Remarks"].slice(66, 99), {
        x: 378,
        y: 586,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["LANGUAGE LEAPS Remarks"].slice(99, 132), {
        x: 378,
        y: 573,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["अक्षर ज्ञान"], {
        x: student["अक्षर ज्ञान"] === "PROGRESSIVE" ? 285 : 295,
        y: 472,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["कवि ता का आनंद"], {
        x: student["कवि ता का आनंद"] === "PROGRESSIVE" ? 285 : 295,
        y: 447,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(0, 33), {
        x: 378,
        y: 472,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(33, 66), {
        x: 378,
        y: 459,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(66, 99), {
        x: 378,
        y: 446,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am artistic"], {
        x: student["अक्षर ज्ञान"] === "PROGRESSIVE" ? 285 : 295,
        y: 401,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I have distinct expressions"], {
        x: student["कवि ता का आनंद"] === "PROGRESSIVE" ? 285 : 295,
        y: 378,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["AESTHETIC ME Remarks"].slice(0, 33), {
        x: 378,
        y: 401,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(33, 66), {
        x: 378,
        y: 388,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["मेरी भाषा Remarks"].slice(66, 99), {
        x: 378,
        y: 375,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can sing melodiously"], {
        x: student["I can sing melodiously"] === "PROGRESSIVE" ? 285 : 295,
        y: 332,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I can sing in tune with expressions"], {
        x:
          student["I can sing in tune with expressions"] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 309,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC MARVEL Remarks"].slice(0, 33), {
        x: 378,
        y: 332,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC MARVEL Remarks"].slice(33, 66), {
        x: 378,
        y: 319,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["MUSIC MARVEL Remarks"].slice(66, 99), {
        x: 378,
        y: 306,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I have groovy feet"], {
        x: student["I have groovy feet"] === "PROGRESSIVE" ? 285 : 295,
        y: 263,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am flexible"], {
        x: student["I am flexible"] === "PROGRESSIVE" ? 285 : 295,
        y: 240,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I am a dance enthusiast"], {
        x: student["I am a dance enthusiast"] === "PROGRESSIVE" ? 285 : 295,
        y: 217,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["DANCE DYNAMO Remarks"].slice(0, 33), {
        x: 378,
        y: 263,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["DANCE DYNAMO Remarks"].slice(33, 66), {
        x: 378,
        y: 250,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["DANCE DYNAMO Remarks"].slice(66, 99), {
        x: 378,
        y: 237,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["DANCE DYNAMO Remarks"].slice(99, 132), {
        x: 378,
        y: 224,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I show strength and endurance"], {
        x:
          student["I show strength and endurance"] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 171,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I have appropriate control and balance"], {
        x:
          student["I have appropriate control and balance"] === "PROGRESSIVE"
            ? 285
            : 295,
        y: 141,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["I display team spirit"], {
        x: student["I display team spirit"] === "PROGRESSIVE" ? 285 : 295,
        y: 111,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ATHLETIC ME Remarks"].slice(0, 33), {
        x: 378,
        y: 171,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ATHLETIC ME Remarks"].slice(33, 66), {
        x: 378,
        y: 158,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ATHLETIC ME Remarks"].slice(66, 99), {
        x: 378,
        y: 145,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fourthPage.drawText(student["ATHLETIC ME Remarks"].slice(99, 132), {
        x: 378,
        y: 132,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText(student["Total no. of working days"], {
        x: 135,
        y: 671,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["No. of days present"], {
        x: 177,
        y: 655,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I stand ______ cms tall"], {
        x: 294,
        y: 640,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I weigh ______ kgs"], {
        x: 294,
        y: 607,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite fruit"], {
        x: 420,
        y: 660,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite colour"], {
        x: 98,
        y: 535,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["My favourite TV show"], {
        x: 420,
        y: 550,
        size: 14,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I extend support"].slice(0, 20), {
        x: 313,
        y: 445,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I extend support"].slice(21, 40), {
        x: 313,
        y: 432,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I am generous"].slice(0, 20), {
        x: 313,
        y: 408,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["I am generous"].slice(21, 40), {
        x: 313,
        y: 395,
        size: 12,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(
        student["I get along well with my classmates"].slice(0, 20),
        {
          x: 313,
          y: 369,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(
        student["I get along well with my classmates"].slice(21, 40),
        {
          x: 313,
          y: 356,
          size: 12,
          color: rgb(0, 0, 0),
        }
      );
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(0, 100), {
        x: 57,
        y: 265,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(100, 200), {
        x: 57,
        y: 253,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["PARENT'S REFLECTION"].slice(200, 300), {
        x: 57,
        y: 241,
        size: 10,
        color: rgb(0, 0, 0),
      });

      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(0, 100), {
        x: 57,
        y: 185,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(100, 200), {
        x: 57,
        y: 173,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(200, 300), {
        x: 57,
        y: 161,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawText(student["TEACHER'S REFLECTION"].slice(300, 400), {
        x: 57,
        y: 149,
        size: 10,
        color: rgb(0, 0, 0),
      });
      fifthPage.drawImage(teacherSign1Image, {
        x: 57,
        y: 55,
        width: 150,
        height: 30,
      });

      sixthPage.drawImage(groupPhotImage, {
        x: 470,
        y: 160,
        width: 480,
        height: 350,
        rotate: degrees(90),
      });

      seventhPage.drawImage(groupPhotImage, {
        x: 500,
        y: 160,
        width: 550,
        height: 350,
        rotate: degrees(90),
      });

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
      download(zipBlob, "Nursery_report_cards.zip");
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
