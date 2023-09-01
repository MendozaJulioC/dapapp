// NotFound.js

import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden bg-slate-900  ">
      <div class="earth-moon">
        <img
          class="object_moon"
          src="https://salehriaz.com/404Page/img/moon.svg"
          width="80px"
        />
      </div>
      <h2 className="p-4 text-gray-200">Lo sentimos estas como perdido😅 </h2>
      <div className="flex items-center justify-center">
        <img
          class="object_earth"
          src="https://salehriaz.com/404Page/img/earth.svg"
          width="100px"
        />
        <img
          src="https://salehriaz.com/404Page/img/astronaut.svg"
          alt=""
          className="h-48 w-auto"
        />
        <a
          href="/dashboard"
          className="flex w-full justify-center rounded-md  bg-red-900 ring-2 ring-blue-500  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-mono hover:font-mono"
        >
          <span></span>
          Regresa
        </a>
      </div>
    </div>
  );
};

export default NotFound;
