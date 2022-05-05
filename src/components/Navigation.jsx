import React from "react";
import ReactDOM from "react-dom";

import Start from "./Start";
import Programs from "./Programs";
import Profile from "./Profile";

function onClickHomeHandler() {
  ReactDOM.render(
    <div>
      <Start />
      <Navigation />
    </div>,
    document.getElementById("root")
  );
}

function onClickWeightHandler() {
  ReactDOM.render(
    <div>
      <Programs />
      <Navigation />
    </div>,
    document.getElementById("root")
  );
}

function onClickProfileHandler() {
  ReactDOM.render(
    <div>
      <Profile />
      <Navigation />
    </div>,
    document.getElementById("root")
  );
}

function Navigation() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     backgroundColor: 'black'
  //   }
  //   this.onClickHomeHandler = this.onClickHomeHandler.bind(this);
  // }
  // onClickHomeHandler() {
  //   this.setState({
  //     backgroundColor: "white"
  //   });
  // }
  return (
    <div className="flex justify-around p-4 bg-black/[0.4] fixed bottom-0 w-screen rounded-t-3xl">
      <button
        className="h-8 w-8 bg-[url('/Images/Home.svg')] bg-cover bg-center cursor-pointer hover:bg-[url('/Images/HomeWhite.svg')]"
        onClick={onClickHomeHandler}
      ></button>
      <button
        className="h-8 w-14 bg-[url('/Images/Weight.svg')] bg-cover bg-center cursor-pointer hover:bg-[url('/Images/WeightWhite.svg')]"
        onClick={onClickWeightHandler}
      ></button>
      <button
        className="h-8 w-8 bg-[url('/Images/Profile.svg')] bg-cover bg-center cursor-pointer hover:bg-[url('/Images/ProfileWhite.svg')]"
        onClick={onClickProfileHandler}
      ></button>
    </div>
  );
}

export default Navigation;
