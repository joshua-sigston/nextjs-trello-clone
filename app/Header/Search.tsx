'use client';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/16/solid';
import React from 'react';
import Avatar from 'react-avatar';

function Search() {
  return (
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
  );
}

export default Search;
