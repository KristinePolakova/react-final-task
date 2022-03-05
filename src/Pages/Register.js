import { Link } from "react-router-dom"
import Login from "../Components/Login"
import RegisterForm from "../Components/RegisterForm"


function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 my-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item nav-link">
                <Link className="link-decoration font-family" to="/">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item active nav-link active-breadcrumb font-family"
                aria-current="page"
              >
                Login
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
          <div className="col-md-4">
          {/* <Login /> */}
          <RegisterForm />
          </div>
      </div>
    </div>
  )
}

export default Register
