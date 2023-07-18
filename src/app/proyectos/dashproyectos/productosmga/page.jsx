"use client";

import { useState } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Button, Modal, } from 'flowbite-react';

import { Label, Textarea } from 'flowbite-react';

export default function Example() {
  const [agreed, setAgreed] = useState(false);
  const [openModal, setOpenModal] = useState();
  const [modalSize, setModalSize] = useState('7xl');

  const props = { modalSize, openModal, setModalSize, setOpenModal };
  const animatedComponents = makeAnimated();


 //aqui debemos cargar el listado de productos mga

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
              Asociacion Productos MGA con Indicadores Producto DNP
            </h2>

            <p className="mt-2 text-lg leading-8 text-gray-600">
              Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
            <div className="col-span-full">
              <hr className=" mt-3 border-1 dorder-dotted border-b-gray-800/40" />
            </div>
          </div>
          <form action="#" method="POST" className="mx-auto mt-4 py-4">
            <div className="grid grid-cols-1 gap-x-8  gap-y-6 sm:grid-cols-5">
              <div>
                <input type="hiden" name="" id="" />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="first-name"
                  className="block  text-center font-semibold leading-6 text-gray-800 text-bold"
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
            <div className="col-span-full mb-2">
              <hr className=" mt-3 border-2 dorder-dotted border-b-gray-800/40" />
            </div>
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
            <div className="col-span-full">
              <hr className=" mt-3 border-2 dorder-dotted border-b-gray-800/40" />
            </div>
          </form>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Productos MGA
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Codigo Producto Catalogo DNP
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Unidad de medida
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Total
                    </th>
                    <th scope="col" className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="text-center">
                      <button
                        onClick={() => props.setOpenModal("7xl")}
                        className="bg-gray-300 p-2 border-l-gray-300 rounded-lg hover:bg-slate-400 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#0284c7"
                          class="bi bi-bag-plus-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td class="text-center">
                      <button
                        onClick={() => props.setOpenModal("5xl")}
                        className="bg-gray-300 p-2 border-l-gray-300 rounded-lg hover:bg-slate-400 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#0284c7"
                          class="bi bi-bag-plus-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="text-center">
                      <button
                        onClick={() => props.setOpenModal("5xl")}
                        className="bg-gray-300 p-2 border-l-gray-300 rounded-lg hover:bg-slate-400 "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#0284c7"
                          class="bi bi-bag-plus-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Modal
              show={props.openModal === "7xl"}
              size={props.modalSize}
              onClose={() => props.setOpenModal(undefined)}
            >
              <Modal.Header>
                Relacion Producto MGA - Indicador Producto DNP
              </Modal.Header>
              <Modal.Body>
                <div className="space-y-2 p-4 pr-10">
                  <form>
                    <div className="space-y28">
                      <div className="border-b border-gray-900/10 pb-8">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                          Informacion del Producto MGA seleccionado
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Use a permanent address where you can receive mail.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
                          <div className="col-span-2">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Codigo SAP
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div className="col-span-2">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Codigo Producto
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div className="sm:col-span-5">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Producto
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <div>
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Unidad de medida
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-1">
                            <div>
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Meta Total
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-10 mt-1">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Seleccione el producto MGA asociado al indicador
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Use a permanent address where you can receive mail.
                      </p>

                      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 border-2 p-4 border-dotted border-b-gray-200">

                        <div className="sm:col-span-10">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900 mt-2"
                          >
                            Seleccione el Indicador de Producto DNP
                          </label>
                          <div className="mt-2">
                            <Select options={options} />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="mt-10">
                            <button
                              className="bg-cyan-700
                                        text-white
                                        hover:bg-gray-700 
                                          text-grey-darkest 
                                          font-bold py-1 px-2
                                          rounded-lg
                                          inline-flex items-center
                                          border-2 border-sky-500 border-dotted
                                        "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#f0f9ff"
                                className="bi bi-plus-circle mr-2"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                              </svg>

                              <span>Agregar</span>
                            </button>
                          </div>
                        </div>

                        <div className="col-span-full">
                          <hr className=" mt-3 border-2 dorder-dotted border-b-gray-800/40" />
                        </div>

                        <div className="col-span-2">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Codigo Indicador{" "}
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Indicador de Producto DNP
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-2 mt-3">
                          <label htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900">
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Es acumulado No/Si?
                            </span>
                          </label>
                          <label className="relative inline-flex  justify-items-center mb-4 cursor-pointer mt-2 ">
                            <input
                              type="checkbox"
                              value=""
                              class="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </div>

                        <div className="col-span-2">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                          Unidad de Medida
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-3">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                          Meta Programada vigencia cero
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                          Meta Programada vigencia uno
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                          Meta Programada vigencia dos
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                          <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                          Meta Programada vigencia tres
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="col-span-3">
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                       Observaciones 
                          </label>
                          <div className="mt-2">
                          <textarea  className=' block rounded-md border-1 border-bg-slate-400 text-gray-900  focus:ring-indigo-600 ' name="textarea " rows="8" cols="116">Escriba aqui su obsevacion</textarea>
                          </div>
                        </div>

                        {/* <div className="col-span-1 mt-8">
                          <button
                            className="bg-cyan-700
                                        text-white
                                        hover:bg-gray-700 
                                          text-grey-darkest 
                                          font-bold py-1 px-6
                                          rounded-lg
                                          inline-flex items-center
                                          border-2 border-sky-500 border-dotted
                                        "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#f0f9ff"
                              className="bi bi-plus-circle mr-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            <span>DNP</span>
                          </button>
                        </div> */}
                      </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Notifications
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        We'll always let you know about important changes, but
                        you pick what else you want to hear about.
                      </p>
                    </div>

                    {/* <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div> */}
                  </form>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => props.setOpenModal(undefined)}>
                  I accept
                </Button>
                <Button
                  color="gray"
                  onClick={() => props.setOpenModal(undefined)}
                >
                  Decline
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
