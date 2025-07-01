import React from "react";

export default function SongList({ songs, setCurrentSong }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {songs.map((song, idx) => (
        <div
          key={idx}
          className="bg-zinc-800 p-4 rounded-lg cursor-pointer hover:bg-zinc-700"
          onClick={() => setCurrentSong(song)}
        >
          <h3 className="font-semibold">{song.title}</h3>
          <p className="text-sm text-zinc-400">{song.artist}</p>
        </div>
      ))}
    </div>
  );
}
