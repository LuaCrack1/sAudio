import React from "react";
import ReactPlayer from "react-player";

export default function Player({ song, onEnded }) {
  if (!song) {
    return <div className="h-24 bg-zinc-900 p-4">Chọn bài để phát...</div>;
  }

  return (
    <div className="h-24 bg-zinc-900 p-4 flex items-center">
      <div className="flex-1">
        <h3 className="font-bold">{song.title}</h3>
        <p className="text-sm text-zinc-400">{song.artist}</p>
      </div>
      <div className="w-80">
        <ReactPlayer
          url={song.id}
          playing
          controls
          width="100%"
          height="50px"
          onEnded={onEnded}
        />
      </div>
    </div>
  );
}
