import React, { useEffect, useState, useRef } from "react";
import styles from "./Dashboard.module.css";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../Data/Slices/UserDataSlice";
import { getData, uploadData } from "../../Data/API/API";
import { useNavigate } from "react-router";

function Dashboard() {
  
  // const [data, setData] = useState([]);
  const [file, setFile] = useState("");
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [term, setTerm] = useState("");
  const [className2, setClassName2] = useState("");
  const [section2, setSection2] = useState("");
  const [term2, setTerm2] = useState("");

  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClassChange = (e) => {
    setClassName(e.target.value);
  };

  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleClassChange2 = (e) => {
    setClassName2(e.target.value);
  };

  const handleSectionChange2 = (e) => {
    setSection2(e.target.value);
  };

  const handleTermChange2 = (e) => {
    setTerm2(e.target.value);
  };

  const displayAlert = (message, variant = "danger") => {
    dispatch(
      userDataActions.setAlert({
        message,
        variant,
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
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!file || !className || !section || !term) {
      displayAlert("Please fill all fields");
      return;
    }

    console.log(file, className, section, term);
    const tempData = {
      file,
      className,
      section,
      term,
    };

    const apiData = await uploadData(tempData);

    if (apiData === "error") {
      displayAlert(
        "Error uploading file. Please check your network or try again."
      );
      return;
    }

    if (apiData.status === "success") {
      setClassName("");
      setSection("");
      setTerm("");
      setFile("");

      // Clear the file input using the ref
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      displayAlert("File uploaded successfully", "success");
    }
  };

  const handleGenerate = async () => {
    if (!className2 || !section2 || !term2) {
      displayAlert("Please fill all fields");
      return;
    }
    const tempData = {
      className: className2,
      section: section2,
      term: term2,
      remarks_pos:
        className2 === "LKG"
          ? 50
          : className2 === "NUR"
          ? 35
          : className2 === "UKG"
          ? 33
          : className2 === "I"
          ? 40
          : className2 === "II"
          ? 50
          : 100,
      reflection_pos:
        className2 === "LKG"
          ? 105
          : className2 === "NUR"
          ? 105
          : className2 === "UKG"
          ? 105
          : className2 === "I"
          ? 80
          : className2 === "II"
          ? 65
          : 210,
    };

    console.log(tempData);
    const data = await getData(tempData);
    console.log(data);

    if (data === "error") {
      displayAlert(
        "Error fetching data. Please check your network or try again."
      );
      return;
    }

    if (term2 === "1" && data?.data?.term_1?.length === 0) {
      displayAlert(
        `Data not found for Class ${className2} Section ${section2} Term 1`
      );
      return;
    } else if (term2 === "2" && data?.data?.term_2?.length === 0) {
      displayAlert(
        `Data not found for Class ${className2} Section ${section2} Term 2`
      );
      return;
    } else if (term2 === "3" && data?.data?.term_3?.length === 0) {
      displayAlert(
        `Data not found for Class ${className2} Section ${section2} Term 3`
      );
      return;
    }

    navigate(`/class${className2.toLowerCase()}/term${term2}`, {
      state: { data: data.data },
    });
  };

  useEffect(() => {
    const reloaded = sessionStorage.getItem("reloaded");
    if (!reloaded) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={`${styles.dash} w-85`}>
        <form onSubmit={submitHandler}>
          <div className={`${styles.inputs} border border-black rounded p-3`}>
            <h1 className={styles.heading}>Upload Result</h1>
            <div className={`${styles.students} text-2xl`}>
              <select
                className={`${styles.select} p-2 border-black border rounded-md`}
                name="class_name"
                id="class"
                value={className}
                onChange={handleClassChange}
              >
                <option className={styles.option} value="">
                  Select Class
                </option>
                <option className={styles.option} value="NUR">
                  Nursery
                </option>
                <option className={styles.option} value="LKG">
                  LKG
                </option>
                <option className={styles.option} value="UKG">
                  UKG
                </option>
                <option className={styles.option} value="I">
                  Class 1
                </option>
                <option className={styles.option} value="II">
                  Class 2
                </option>
                <option className={styles.option} value="III">
                  Class 3
                </option>
                <option className={styles.option} value="IV">
                  Class 4
                </option>
                <option className={styles.option} value="V">
                  Class 5
                </option>
                <option className={styles.option} value="VI">
                  Class 6
                </option>
                <option className={styles.option} value="VII">
                  Class 7
                </option>
                <option className={styles.option} value="VIII">
                  Class 8
                </option>
                <option className={styles.option} value="IX">
                  Class 9
                </option>
              </select>

              <select
                className={`${styles.select} p-2 border-black border rounded-md`}
                name="section"
                id="section"
                value={section}
                onChange={handleSectionChange}
              >
                <option className={styles.option} value="">
                  Select Section
                </option>
                <option className={styles.option} value="A">
                  A
                </option>
                <option className={styles.option} value="B">
                  B
                </option>
                <option className={styles.option} value="C">
                  C
                </option>
                <option className={styles.option} value="D">
                  D
                </option>
                <option className={styles.option} value="E">
                  E
                </option>
                <option className={styles.option} value="F">
                  F
                </option>
                <option className={styles.option} value="G">
                  G
                </option>
                <option className={styles.option} value="H">
                  H
                </option>
              </select>

              <select
                className={`${styles.select} p-2 border-black border rounded-md`}
                name="term"
                id="term"
                value={term}
                onChange={handleTermChange}
              >
                <option className={styles.option} value="">
                  Select Term
                </option>
                <option className={styles.option} value="1">
                  Term 1
                </option>
                <option className={styles.option} value="2">
                  Term 2
                </option>
                <option className={styles.option} value="3">
                  Term 3
                </option>
              </select>
            </div>
            <input
              ref={fileInputRef}
              onChange={handleFileChange}
              className={`${styles.fileInput} border-1 border-black rounded-md p-2 mx-2`}
              type="file"
              name="file"
              id="excel"
            />
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </div>
        </form>
        <hr style={{ margin: "40px 0px" }} />
        <div className={`${styles.inputs} border border-black rounded p-3`}>
          <h1 className={styles.heading}>Create Report Card</h1>
          <div className={`${styles.students} text-2xl`}>
            <select
              className={`${styles.select} p-2 border-black border rounded-md`}
              name="class_name"
              id="class"
              value={className2}
              onChange={handleClassChange2}
            >
              <option className={styles.option} value="">
                Select Class
              </option>
              <option className={styles.option} value="NUR">
                Nursery
              </option>
              <option className={styles.option} value="LKG">
                LKG
              </option>
              <option className={styles.option} value="UKG">
                UKG
              </option>
              <option className={styles.option} value="I">
                Class 1
              </option>
              <option className={styles.option} value="II">
                Class 2
              </option>
              <option className={styles.option} value="III">
                Class 3
              </option>
              <option className={styles.option} value="IV">
                Class 4
              </option>
              <option className={styles.option} value="V">
                Class 5
              </option>
              <option className={styles.option} value="VI">
                Class 6
              </option>
              <option className={styles.option} value="VII">
                Class 7
              </option>
              <option className={styles.option} value="VIII">
                Class 8
              </option>
              <option className={styles.option} value="IX">
                Class 9
              </option>
            </select>

            <select
              className={`${styles.select} p-2 border-black border rounded-md`}
              name="section"
              id="section"
              value={section2}
              onChange={handleSectionChange2}
            >
              <option className={styles.option} value="">
                Select Section
              </option>
              <option className={styles.option} value="A">
                A
              </option>
              <option className={styles.option} value="B">
                B
              </option>
              <option className={styles.option} value="C">
                C
              </option>
              <option className={styles.option} value="D">
                D
              </option>
              <option className={styles.option} value="E">
                E
              </option>
              <option className={styles.option} value="F">
                F
              </option>
              <option className={styles.option} value="G">
                G
              </option>
              <option className={styles.option} value="H">
                H
              </option>
            </select>

            <select
              className={`${styles.select} p-2 border-black border rounded-md`}
              name="term"
              id="term"
              value={term2}
              onChange={handleTermChange2}
            >
              <option className={styles.option} value="">
                Select Term
              </option>
              <option className={styles.option} value="1">
                Term 1
              </option>
              <option className={styles.option} value="2">
                Term 2
              </option>
              <option className={styles.option} value="3">
                Term 3
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleGenerate}
          >
            Generate Report Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
