import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import ConRendering from "./components/ConRendering";
import FormTask from "./components/FormTask";
import ExampleForm from "./components/ExampleForm";
import ExamCode from "./components/ExamCode";
import LocalStorage from "./components/LocalStorage";
import EffectCode from "./components/EffectCode";
import ChatEx from "./components/ChatEx";
import Calculator from "./components/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name= "Saifoo" heroName = "Fatty" >
        <p>This is Children Props</p></Greet>
      <Greet />
      <button>Action</button>
      <Welcome name= "Saifoo" heroName = "Fatty"/>
      <Welcome name= "Moonpie" heroName = "SmartBrat"/>
      <Welcome />
      <Hello />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent /> 
      <UserGreeting />
      <ConRendering />
      <FormTask />
      <ExampleForm />
      <ExamCode />
      <LocalStorage />
        <EffectCode />
        <EffectCode />
        <ChatEx />*/}

        <Calculator />
      </div>
    );
  }
}

export default App;
