import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Link,
    Route,
} from "react-router-dom";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  const [corr, setCorr] = useState(false);

  function submit() {
    setCorr(true);
    console.log("Submitted Succesfully");
  }

  if (corr) {
      return (
        <Router>
            <Link to="/home" component={Home} ></Link>
        </Router>
      );
  }

  return (
    <Router>
    <div>
        <Route path="/" exact>
        <form onSubmit={handleSubmit} noValidate>
            <div>
            <label>Email</label>
            <div>
                <input
                className={`${errors.email && "inputError"}`}
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            </div>
            <div>
            <label>Password</label>
            <div>
                <input
                className={`${errors.email && "inputError"}`}
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            </div>
            <button type="submit">Submit</button>
        </form>
        </Route>
        <Route path="/home" component={Home} />
    </div>
    </Router>
  );
};

export default Form;