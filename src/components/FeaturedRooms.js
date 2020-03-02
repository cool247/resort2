import React, { Component } from "react";
import RoomContext from "../contexts/roomcontext";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  state = {};

  static contextType = RoomContext;
  //helper function
  renderRoomcard = () => {
    let { featuredRooms: rooms, loading } = this.context;
    if (!loading) {
      return rooms.map(room => {
        return <Room key={room.id} room={room} />;
      });
    }
    return <Loading />;
  };

  render() {
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">{this.renderRoomcard()}</div>
      </section>
    );
  }
}
