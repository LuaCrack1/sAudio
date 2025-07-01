import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import Player from "./components/Player";

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="p-4 overflow-y-auto flex-1">
          <h2 className="text-2xl font-bold mb-4">sAudio</h2>
          <SongList setCurrentSong={setCurrentSong} />
        </div>
        <Player song={currentSong} />
      </main>
    </div>
  );
}

export default App;
