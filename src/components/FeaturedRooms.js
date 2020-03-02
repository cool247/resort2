import React, { Component } from "react";
import { RoomContext } from "../Context";

export default class FeaturedRooms extends Component {
  state = {};
  static contextType = RoomContext;
  render() {
    return <div>hello from Featured rooms</div>;
  }
}
