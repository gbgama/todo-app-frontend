import React, { Component } from "react";
import Axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import configs from '../config/config'

const URL = configs.apiUrl;

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      list: [],
      headerSmall: "Cadastro"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

    this.refresh();
  }

  refresh(description = "") {
    const search = description ? `?description__regex=${description}` : "";
    Axios.get(`${URL}${search}`).then(resp => {      
      this.setState({ ...this.state, description, list: resp.data.todos })
    }
    );
  }

  handleSearch() {
    this.setState({ ...this.state, headerSmall: "Pesquisa" });
    this.refresh(this.state.description);
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    this.setState({ ...this.state, headerSmall: "Cadastro" });
    const description = this.state.description;
    Axios.post(URL, { description }).then(resp => this.refresh());
  }

  handleClear() {
    this.setState({ ...this.state, headerSmall: "Cadastro" });
    this.refresh();
  }

  handleRemove(todo) {
    Axios.delete(`${URL}/${todo._id}`).then(resp =>
      this.refresh(this.state.description)
    );
  }

  handleMarkAsDone(todo) {
    Axios.patch(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp =>
      this.refresh(this.state.description)
    );
  }

  handleMarkAsPending(todo) {
    Axios.patch(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp =>
      this.refresh(this.state.description)
    );
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small={this.state.headerSmall} />
        <TodoForm
          description={this.state.description}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
