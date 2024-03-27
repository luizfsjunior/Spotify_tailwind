import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight} from "lucide-react";

import React from 'react';

export default function Home() {
  return (
   <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <nav className="space-y-5">
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <HomeIcon />
            Home
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Search/>
            Search
          </a>
          <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Library />
            Your Library
          </a>
        </nav>

        <nav className="mt-6 pt-6 bordet-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft/>
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight/>
          </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded overflow-hidden">
              <img src="/placeholder.jpeg" width={102} height={102} alt="Capa Am Arctic Monkeys" />
              </div>
            <div className="bg-white/10 rounded overflow-hidden">
              <img src="/placeholder.jpeg" width={102} height={102} alt="Capa Am Arctic Monkeys" />
              </div>
            <div className="bg-white/10 rounded overflow-hidden">
              <img src="/placeholder.jpeg" width={102} height={102} alt="Capa Am Arctic Monkeys"/>
              </div>
            <div className="bg-white/10 rounded overflow-hidden">
              <img src="/placeholder.jpeg" width={102} height={102} alt="Capa Am Arctic Monkeys" />
              </div>
            <div className="bg-white/10 rounded overflow-hidden">
              <img src="/placeholder.jpeg" width={102} height={102} alt="Capa Am Arctic Monkeys" />
              </div>
            <div className="bg-white/10 rounded overflow-hidden">
              <img src="/placeholder.jpeg" width={102} height={102} alt="Capa Am Arctic Monkeys" />
              </div>
          </div>
      </main>
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
      footer
    </footer>
   </div>
  );
}
