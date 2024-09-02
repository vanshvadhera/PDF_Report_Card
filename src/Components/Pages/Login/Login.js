import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBAlert,
} from "mdb-react-ui-kit";
import { authorizedUsers } from "../../AuthorizedUsers/AuthorizedUsers";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userDataActions } from "../../Data/Slices/UserDataSlice";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const width = window.innerWidth;

  const navigate = useNavigate();

  const handleSignIn = () => {
    // Basic validation
    if (!email || !password) {
      setErrorMessage(
        "The email address you entered isn't connected to an account."
      );
      return;
    }

    // Check if the user is authorized
    const user = authorizedUsers.find(
      (user) => user.username === email && user.password === password
    );

    if (!user) {
      setErrorMessage(
        "The password or email address you’ve entered is incorrect."
      );
      return;
    }

    if (user) {
      dispatch(userDataActions.setUser(user.username));
      localStorage.setItem("user", user.username);
    }
  };

  return (
    <MDBContainer
      fluid
      className="d-flex justify-content-center align-items-center vh-100 gradient-form"
      style={{ padding: "0" }}
    >
      <MDBRow className="w-100" style={{ maxWidth: "100%", minHeight: "100%" }}>
        <MDBCol col="6" className="d-flex m-5">
          <div
            className="d-flex flex-column w-100"
            style={{ alignSelf: "center" }}
          >
            <div className="text-center">
              <img src="/dpslogo.png" style={{ width: "130px" }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">
                Delhi Public School Indirapuram
              </h4>
            </div>

            <p style={{ textAlign: "center" }}>Please login to your account</p>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errorMessage && (
              <p className="text-danger small mb-3">{errorMessage}</p>
            )}

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                onClick={handleSignIn}
              >
                Sign in
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        {width > 500 && (
          <MDBCol col="6" style={{ padding: "0" }}>
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4
                  className="mb-1"
                  style={{ fontSize: "24px", fontWeight: "700" }}
                >
                  Digital Excellence in Every Student's Achievement
                </h4>
                <div
                  style={{
                    height: "2px",
                    width: "70%",
                    backgroundColor: "#fff",
                    marginBottom: "20px",
                    borderRadius: "5px",
                  }}
                ></div>
                <p
                  className="small mb-0"
                  style={{ fontSize: "15px", fontWeight: 500 }}
                >
                  Tailored for DPS Indirapuram, our innovative platform
                  transforms the way student report cards are created, offering
                  a seamless and efficient digital solution. Empowering teachers
                  and students with technology that celebrates academic success
                  with precision and ease.
                </p>
              </div>
            </div>
          </MDBCol>
        )}
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
