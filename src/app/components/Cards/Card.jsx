"use client";
import { Card } from 'flowbite-react';
const Tarjeta = (props) => {
  return (<>
  
      <div className="mt-4 bg">
      <a
       style={{ height: '18rem' }}
        href="#"
        class="flex flex-col items-center bg-slate-800 ring-4 border-gray-800/25 shadow-2xl shadow-indigo-500/50    rounded-lg  md:flex-row md:max-w-md "
      >
        <img
          class="object-cover w-full h-screen   rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
           src="/stock.svg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white hover:text-gray-800 ml-2">
           {props.title}    
          </h5>
          <p class="mb-3 font-bold text-3xl text-indigo-300">{props.valor}</p>
          <p class="mb-3 font-normal text-normal text-indigo-100 ml-2">{props.vigencia}</p>
          
        </div>
      </a>
      <a
       style={{ height: '18rem' }}
     className='mt-4'
      >
             
             <p class="mb-3 p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, quo sunt. Enim impedit praesentium quaerat id libero, molestiae quia obcaecati voluptatem, quisquam aliquam, excepturi alias aspernatur dolor doloribus corrupti eius.
          Magnam quae pariatur doloribus recusandae totam iusto hic odit quisquam repudiandae laboriosam harum facere fugiat, sint, aliquam molestiae explicabo voluptatum. Dolore nam magnam aliquam explicabo commodi eum minus neque eligendi!
      
          </p>
      </a>
    </div>




  </>

  );
};

export default Tarjeta;
