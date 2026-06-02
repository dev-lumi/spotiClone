import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto scrollbar-none ">
          {albumsData.map(({ image, name, desc, id }) => (
            <AlbumItem
              image={image}
              name={name}
              desc={desc}
              id={id}
              key={id}
            ></AlbumItem>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto scrollbar-none">
          {songsData.map(({ name, image, id, desc }) => (
            <SongItem
              name={name}
              image={image}
              id={id}
              desc={desc}
              key={id}
            ></SongItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
