import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-zinc-900 p-4">
      <h1 className="text-xl font-bold mb-4">sAudio</h1>
      <ul>
        {["Trang chủ", "Tìm kiếm", "Thư viện"].map((txt) => (
          <li key={txt} className="mb-2 cursor-pointer hover:text-white/70">{txt}</li>
        ))}
      </ul>
    </aside>
  );
}
