import React, { useState } from "react";

export default function AdminPanel({ addSong }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !artist || !url) return;
    addSong({ title, artist, id: url });
    setTitle(""); setArtist(""); setUrl("");
  };

  return (
    <div className="p-4 bg-zinc-800 rounded mb-4">
      <h3 className="font-bold mb-2">Thêm bài hát</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <input
          className="p-2 rounded bg-zinc-700 text-white"
          placeholder="Tên bài hát"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="p-2 rounded bg-zinc-700 text-white"
          placeholder="Nghệ sĩ"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          className="p-2 rounded bg-zinc-700 text-white"
          placeholder="Link YouTube"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          type="submit"
          className="md:col-span-3 p-2 bg-green-600 rounded hover:bg-green-700"
        >
          Thêm
        </button>
      </form>
    </div>
  );
}
