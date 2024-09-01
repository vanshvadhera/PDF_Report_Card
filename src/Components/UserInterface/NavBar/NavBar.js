import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { userDataActions } from "../../Data/Slices/UserDataSlice";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router";

function CustomNavbar({ children }) {
  const width = window.innerWidth;
  const userData = useSelector((state) => state.userData);
  const alertData = useSelector((state) => state.userData.setAlert);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(userDataActions.setUser(""));
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img
              alt=""
              src="/dpslogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ marginRight: "10px" }}
            />
            DPS Report Card Generator
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {width > 500 ? (
              <>
                <Navbar.Text style={{ marginRight: "15px" }}>
                  Signed in as:{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      color: "white",
                    }}
                  >
                    {userData.user.slice(0, 1).toUpperCase() +
                      userData.user.slice(1)}
                  </span>
                </Navbar.Text>
                <Button
                  variant="outline-light"
                  onClick={handleLogout}
                  style={{ marginLeft: "2rem" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Fade in={alertData.show}> */}
      <Alert
        key={alertData.variant}
        variant={alertData.variant}
        style={{
          position: "absolute",
          right: 2,
          zIndex: 1000,
          top: 60,
          width: "20rem",
        }}
        transition={true}
      >
        {alertData.message}
      </Alert>
      {/* </Fade> */}
      {children}
    </div>
  );
}

export default CustomNavbar;
