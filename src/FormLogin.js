//console.log("May Node be with you");
//https://zellwk.com/blog/crud-express-mongodb/
//https://bezkoder.com/node-express-mongodb-crud-rest-api/
//https://www.digitalocean.com/community/tutorials/react-axios-react
import React, { Component } from "react";
import "./FormLogin.css";
import { Button } from "react-bootstrap";
import http from "./http-common";

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { empname: "", empidstate: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  getempid() {
    return this.state.empid;
  }
  putempid(myvalue) {
    this.setState({ empid: myvalue });
  }
  getempname() {
    return this.state.empname;
  }
  putempname(mynameval) {
    this.setState({ empname: mynameval });
  }
  handleChange = (event) => {
    this.setState({ empidstate: event.target.value });
    //this.putempid(event.target.value);
  };
  handleChange2 = (event) => {
    //this.setState({empidstate: event.target.value});
    this.putempname(event.target.value);
  };
  getMany = () => {
    return http.get("/");
  };
  viewEmployeeMany = () => {
    this.getMany()
      .then((response) => {
        console.log(response.data);
        console.log("xxxxxxxxxxxxxxxxxxxxxxx");
        console.log(response.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  getone = (data4) => {
    console.log({ data4 });
    return http.post("/employeefindone", data4);
  };
  viewEmployee = () => {
    const user2 = {
      name: this.getempname(),
    };
    this.getone(user2)
      .then((response) => {
        console.log(response.data.empid);
        //this.putempid(response.data.empid);
        this.setState({ empidstate: response.data.empid });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  modifyEmployee = () => {};
  delelteEmployee = () => {};
  create = (data4) => {
    console.log({ data4 });
    return http.post("/employeeinsert", data4);
  };
  addEmployee = () => {
    const user2 = {
      name: "new23",
      empid: "emp010",
    };

    this.create(user2)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    return (
      <div id="login" className="login">
        <label>:{this.state.empidstate}:</label>
        <form>
          <h3>Employee</h3>

          <div className="form-group">
            <label>Employee name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Empname"
              onChange={this.handleChange2}
            />
          </div>

          <div className="form-group">
            <label>{this.state.empidstate}</label>
            <input
              type="text"
              className="form-control"
              value={this.state.empidstate}
            />
          </div>
          <Button onClick={this.addEmployee} size="lg">
            Add
          </Button>
          <br />
          <br />
          <Button onClick={this.viewEmployeeMany} size="lg">
            ViewMany
          </Button>
          <br />
          <br />
          <Button onClick={this.viewEmployee} size="lg">
            ViewOne
          </Button>
          <br />
          <br />
          <Button onClick={this.modifyEmployee} size="lg">
            update
          </Button>
          <br />
          <br />
          <Button onClick={this.deleteEmployee} size="lg">
            delete
          </Button>
          <br />
        </form>
      </div>
    );
  }
}
