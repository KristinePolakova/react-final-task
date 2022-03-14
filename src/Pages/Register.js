import { Link } from "react-router-dom"
import RegisterForm from "../Components/RegisterForm"

function Register() {
  return (
    <div className="registerContainer font-family">
      <div className="container justify-content-md-center">
        <div className="row">
          <div className="col-sm-12 my-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item nav-link">
                  <Link className="linkDecoration" to="/">
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
            <h3 className="color pb-4">Register</h3>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
