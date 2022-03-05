import React from "react"
import { Form } from "semantic-ui-react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

function RegisterForm() {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions)

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username*"
              name="username"
              {...register("username", { required: true })}
            />
          </div>
        </Form.Field>
        <div className="invalid-feedback"></div>
        {errors.firstName && (
          <p style={{ color: "red" }}>Please fill in username</p>
        )}
        <Form.Field>
          <div className="form-group mb-3">
            <input
              name="password"
              type="password"
              placeholder="Password*"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="form-group mb-3">
            <input
              name="confirmPassword"
              type="password"
              placeholder="Retype password*"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First name*"
              name="fistName"
              {...register("firstName", { required: true })}
            />
          </div>
        </Form.Field>
        {errors.firstName && (
          <p style={{ color: "red" }}>Please fill in the First Name</p>
        )}
        <Form.Field>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              {...register("lastName")}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <div className="form-group">
            <div className="input-group mb-3">
              <select
                className="form-select"
                name="country"
                {...register("country", { required: true })}
              >
                <option value="">Country*</option>
                <option value="Estonia">Estonia</option>
                <option value="Latvia">Latvia</option>
                <option value="Lithuania">Lithuania</option>
              </select>
            </div>
          </div>
        </Form.Field>
        {errors.country && (
          <p style={{ color: "red" }}>Please select your country</p>
        )}
        <Form.Field>
          <div className="form-group form-check">
            <input
              className="form-check-label"
              {...register("checkbox", { required: true })}
              type="checkbox"
            />
            Agree with terms and conditions*
          </div>
        </Form.Field>
        {errors.checkbox && (
          <p style={{ color: "red" }}>
            You need to agree with terms an conditions
          </p>
        )}
        <button
          type="submit"
          className="btn btn-light btn-outline-dark mt-3 mb-5"
        >
          Register
        </button>
      </Form>
    </div>
  )
}

export default RegisterForm
