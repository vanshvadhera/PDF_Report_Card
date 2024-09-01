import axios from "axios";

const domainURL = "http://qa.edvanz.com/api/";

export const uploadData = async (studentData) => {
  console.log(studentData, "uploadData");
  const formData = new FormData();
  formData.append("uploadFile", studentData.file);
  formData.append("class", studentData.className);
  formData.append("section", studentData.section);
  formData.append("term", studentData.term);

  const response = await axios.post(
    `${domainURL}data/upload-result`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  const data = await response.data;
  return data;
};

export const getData = async (classData) => {
  const tempData = {
    class: classData.className,
    section: classData.section,
    term: classData.term,
  };
  console.log(tempData, "getData");

  const response = await axios.post(`${domainURL}data/get-result`, tempData);
  const data = await response.data;
  return data;
};
