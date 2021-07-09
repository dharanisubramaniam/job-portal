import React from "react";
import "./Info.scss";

function Info() {
  return (
    <div className="info">
      <h1>Dedicated portal for Video and Graphic Design Jobs</h1>
      <h2> Your Dream Job is just a click away</h2>
      <form>
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail"
              value="email@example.com"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Info;
