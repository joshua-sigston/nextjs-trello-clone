'use client';
import Image from 'next/image';
import React from 'react';
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid';
import Avatar from 'react-avatar';

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-xl">
        <div className="absolute top-o left-0 w-screen h-96 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form
            action=""
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button hidden type="submit">
              Search
            </button>
            <Avatar name="J.Sigston" size="50" round color="#19D3DA" />
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center px-5  py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl p-5">
          <UserCircleIcon className="inline-block h-10 w-10 text-emerald-400 mr-1" />
          GTP is summarizing your tasks for today.....
        </p>
      </div>
    </header>
  );
}

export default Header;