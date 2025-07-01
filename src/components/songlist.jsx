import React from "react";

const songs = [
  {
    id: "https://www.youtube.com/watch?v=8HithkMDS9I",
    title: "MONTAGEM NEBULA",
    artist: "Rushex", "Montagem",
  },
  // bạn có thể thêm bài khác
];

export default function SongList({ setCurrentSong }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {songs.map((song) => (
        <div
          key={song.id}
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
