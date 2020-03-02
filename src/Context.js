import React, { Component } from "react";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {};

  render() {
    return (
      <RoomContext.Provider value="hello">
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Provider;
export { RoomConsumer, RoomContext, RoomProvider };