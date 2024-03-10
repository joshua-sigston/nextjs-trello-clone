import React from 'react';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import Avatar from 'react-avatar';
function GPTContainer() {
  return (
    <div className="flex items-center justify-center px-5  py-5">
      <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl p-5">
        <UserCircleIcon className="inline-block h-10 w-10 text-emerald-400 mr-1" />
        GTP is summarizing your tasks for today.....
      </p>
    </div>
  );
}

export default GPTContainer;
