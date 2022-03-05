import React from "react"

const LoginSignup = () => {
  return (
      
    <div className="form-content-right">
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username*"
            name="username"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password*"
            name="password"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            id="password2"
            placeholder="Retype password*"
            name="password2"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            id="fistNane"
            placeholder="First name*"
            name="fistName"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last name"
            name="lastNAme"
          />
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              required
            >
              <option>
                Country*
              </option>
              <option value="1">Estonia</option>
              <option value="2">Latvia</option>
              <option value="3">Lithuania</option>
            </select>
          </div>
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" required />
            Agree with terms and conditions*
          </label>
        </div>
        <button type="submit" className="btn btn-light btn-outline-dark mt-3">
          Register
        </button>
      </form>
    </div>
  )
}

export default LoginSignup
