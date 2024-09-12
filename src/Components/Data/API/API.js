import axios from "axios";

const domainURL = "https://app.innovartan.com/api/";
const TIMEOUT = 30000; // 30 seconds

export const uploadData = async (studentData) => {
  try {
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
        timeout: TIMEOUT,
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return "error";
  }
};

export const getData = async (classData, localParam) => {
  try {
    const tempData = {
      class: classData.className,
      section: classData.section,
      term: classData.term,
      env: localParam ? "local" : "",
      remarks_pos: classData.remarks_pos,
      reflection_pos: classData.reflection_pos,
    };
    console.log(tempData, "getData");

    const response = await axios.post(`${domainURL}data/get-result`, tempData, {
      timeout: TIMEOUT,
    });
    const data = await response.data;
    return data;
  } catch (error) {
    return "error";
  }
};
