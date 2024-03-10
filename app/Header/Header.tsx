import Image from 'next/image';
import React from 'react';
import { Background, Search, GPTContainer } from './index';

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-xl">
        <Background />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <Search />
      </div>
      <GPTContainer />
    </header>
  );
}

export default Header;
