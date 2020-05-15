import React, {useState} from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
import "./Form.css";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from "react-router-dom";

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  const [log, setLog] = useState(false);

  function submit() {
    setLog(true);
    console.log("Submitted Succesfully");
  }

  if (log) {
    return (
      <Router>
          <Link to="/home" component={Home} ></Link>
      </Router>
    );
  }

  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact>
        <form className="center" onSubmit={handleSubmit} noValidate>
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
            <div className="spacing">
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
            <button className="spacing" type="submit">LOGIN</button>
        </form>
        </Route>
        <Route path="/home" component={Home} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
    </Router>
  );
};

export default Form;