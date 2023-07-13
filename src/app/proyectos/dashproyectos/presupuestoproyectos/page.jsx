"use client";

import { useState } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  const animatedComponents = makeAnimated();

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div class="p-4 sm:ml-64">
    <div class="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20">
    <div className=" bg-white px-6 py-24 sm:py-32 lg:px-6 container mx-auto">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Asociacion Programatica Plan de Desarrollo
        </h2>

        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
        <hr />
      </div>
      <form action="#" method="POST" className="mx-auto mt-4 py-4">
        <div className="grid grid-cols-1 gap-x-8  gap-y-6 sm:grid-cols-5">
          <div>
            <input type="hiden" name="" id="" />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="first-name"
              className="block  text-center font-semibold leading-6 text-gray-900 text-bold"
            >
              Codigo SAP
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="mt-9">
              <button className="flex justify-center rounded-md bg-sky-400  px-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Buscar
              </button>
            </div>
          </div>
        </div>{" "}
        <br />
        <hr className="  border-1  border-sky-400" />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900 mt-2"
            >
              Codigo SUIFP
            </label>
            <div className="mt-2.5">
              <input
                disabled
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900 mt-2"
            >
              Centro Gestor
            </label>
            <div className="mt-2.5">
              <input
                disabled
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900  mt-2.5"
            >
              Nombre del Proyecto
            </label>
            <div className="mt-1">
              <input
                disabled
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <br />
        <hr className="  border-1  border-sky-400" />

        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900 mt-2"
          >
           Indicadores de producto
          </label>
          <div className="mt-2.5">

          <Select
          options={options}
          isMulti
          />
          </div>
        </div>

        <div>
            <div className="mt-9">
              <button className="flex justify-center rounded-md bg-sky-400  px-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Buscar
              </button>
              </div>
        </div>
        
        <hr className="  border-1  border-sky-400 mb-2 mt-2" />


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</div>


      


      </form>
    </div>
    </div>

</div>
  );
}
