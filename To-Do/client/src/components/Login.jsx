import React from 'react'

function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-lg-5 card border-primary mt-4">
          <div className="card-body">
            <h4 className="card-title">Login Now</h4>
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Email or Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email or username"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Password"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your password with anyone else.
              </small>
            </div>
            <button type="button" className="btn btn-primary">
              Login
            </button>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Login