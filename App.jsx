import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import Player from "./components/Player";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [songs, setSongs] = useState([
    {
      id: "https://www.youtube.com/watch?v=8HithkMDS9I",
      title: "MONTAGEM NEBULA (Extended)",
      artist: "Rushex",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const setCurrentSong = (song) => {
    const index = songs.findIndex((s) => s.id === song.id);
    if (index !== -1) setCurrentIndex(index);
  };

  const addSong = (song) => {
    setSongs((prev) => [...prev, song]);
  };

  const nextSong = () => {
    if (currentIndex === null || songs.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const currentSong = songs[currentIndex] || null;

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="p-4 overflow-y-auto flex-1">
          <AdminPanel addSong={addSong} />
          <h2 className="text-2xl font-bold mb-4">Danh sách bài hát</h2>
          <SongList songs={songs} setCurrentSong={setCurrentSong} />
        </div>
        <Player song={currentSong} onEnded={nextSong} />
      </main>
    </div>
  );
}

export default App;
