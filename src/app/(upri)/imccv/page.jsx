import CardECV from "../../../components/Cards/Card";

import dynamic from 'next/dynamic'

const ChartIMCV = dynamic(() => import('../../../components/Charts/Fusion/IMCV'), { ssr: false });

const PageImccv = () => {
  return (
    <div class="p-2 sm:ml-60">
      <div className=" bg-white px-6 py-10 sm:py-28 lg:px-6 container mx-auto">
        <div class="p-2 border-2 border-blue-200 border-dashed rounded-lg dark:border-gray-700 mt-4">
          <div className=" bg-white px-6 py-18 sm:py-10 lg:px-8 container mx-auto">
          <button type="button" className='shadow-sm p-1 px-10 rounded-md hover:bg-red-600'>  
                <img src="/pdf.svg" alt="" srcSet="" width={34}  height={34}/>
               </button>
               <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
                <img
                  className="mx-auto  w-48"
                  src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/themes/theme_alcaldia/logos/logo_footer.png"
                  alt=""
                />
              </div>
            <div className="mx-auto max-w-2xl text-center mt-10">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                IMCV
              </h2>
              <p className="mt-2 text-2xl leading-8 text-gray-600 cmb-2 font-bold tracking-tight  dark:text-white hover:text-gray-800 ml-2 mb-4">
                Índice Multidimensional de Calidad de Vida
              </p>
              <hr />
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div>
                <CardECV title={"IMCV"} valor={48.68} vigencia={2022} />
              </div>
              <div className="col-span-3">
                <ChartIMCV />
          
              </div>
           
            </div>


   
          <div className="p-2 border-4  rounded-lg dark:border-gray-700">
            <div className=" bg-white px-6 py-18 sm:py-10 lg:px-8 container mx-auto">

            <div className="col-span-full">
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                  >
                  Análisis
                  </label>
                  <div className="col-span-full border border-r-gray-300 rounded-md p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex, consequuntur cupiditate voluptas minus praesentium quod libero tempora vitae ducimus eveniet ullam beatae in, aliquid quis sequi rerum? Iste, eveniet!
              Id quo molestias sint eum perferendis minus adipisci qui aspernatur suscipit, harum, nesciunt ad provident esse consectetur incidunt nihil. Aliquam neque temporibus ullam illum ducimus maxime exercitationem impedit. Amet, sequi!
              Adipisci officiis saepe, odio, tenetur itaque accusamus odit qui fuga distinctio illo, atque rerum reprehenderit natus minus repellat exercitationem obcaecati fugiat dolore. Veniam accusantium voluptatibus veritatis! Necessitatibus facilis temporibus quia!
              Obcaecati illum quae, nulla similique nam molestiae, facilis doloribus nesciunt unde amet a odit velit! Tenetur, mollitia minus perspiciatis officiis dolorum ea totam beatae voluptas alias blanditiis laudantium minima modi.
              Aliquam provident dolorum numquam fuga modi! Iure debitis assumenda officia explicabo quisquam quam fugiat inventore delectus quas ratione labore impedit temporibus, ab cum aspernatur dicta possimus deserunt totam autem quis!
              Similique ipsa sunt praesentium perferendis quisquam eius eaque illum repellat quo. Ea qui itaque, quo harum animi voluptate corrupti magni repellat? Ut praesentium soluta veniam nisi quisquam laboriosam reiciendis odio.
              Blanditiis ducimus quae harum quos vero quo numquam doloribus, accusantium obcaecati qui consequuntur, facilis laboriosam, animi similique facere ut veniam ipsum odit sapiente adipisci officiis mollitia saepe aspernatur quam? Odio.
              Numquam, ipsa repellat molestiae temporibus assumenda commodi provident asperiores reprehenderit quas nemo fuga non illum optio tenetur, veniam in atque. Vitae accusamus rerum modi nobis magni voluptatem, cupiditate adipisci sequi.
              Ipsum nostrum aliquid beatae consequuntur expedita repudiandae, maxime sit deserunt reprehenderit quaerat deleniti, quam fuga culpa rem excepturi veritatis ab architecto repellat est obcaecati. Cumque impedit dolore nisi rem veritatis.
              Repellat illum provident odit, corporis ea amet quibusdam hic reprehenderit est delectus ab cupiditate. Laudantium ut commodi sequi vitae deserunt quo, saepe voluptates fugiat explicabo est labore quibusdam impedit cum!
              Commodi omnis, recusandae animi, dolorum cupiditate asperiores quam at, hic est facere quo. Suscipit vero non recusandae aut quam libero. Laborum dicta officiis amet aspernatur delectus, excepturi cum. Odio, doloribus.
              Adipisci perspiciatis vitae laudantium ad, vero corrupti ratione minus recusandae fuga? Quam corporis voluptatem ab, natus dolore architecto id aliquid veritatis ratione porro ad, quia eligendi consequuntur ducimus quos atque!
              Consequatur magni quis doloribus nam quasi? Quidem reiciendis reprehenderit eaque saepe, quis laborum nisi. Quas hic, ratione ut molestiae libero delectus mollitia pariatur laudantium quam voluptates, repudiandae corrupti sunt incidunt?
              Veniam odio magnam omnis repellat eius a, modi illum, laudantium perferendis in harum accusantium. Culpa enim eos eveniet nulla beatae hic mollitia dignissimos? Possimus adipisci officia sunt nam sequi alias.
              Illum praesentium asperiores consequatur reiciendis cum? Aliquam, consectetur sit autem facere provident aut aliquid velit. Culpa ipsum, quisquam eaque aliquam ad, rem libero eveniet animi dicta numquam sequi, quos officiis.
              Dolor quae beatae sunt nulla cupiditate. Et eveniet voluptatum ipsa porro incidunt quidem quaerat eius facere vero saepe cupiditate hic repellat reprehenderit, exercitationem voluptatem at iure esse sit fugiat assumenda!
              A nobis quibusdam quasi doloremque! Ullam sit neque ad quasi fugit ipsam est, amet quaerat quibusdam. Est corporis laboriosam placeat tempore molestiae quisquam! Tempore qui deleniti error vel facilis ea!
              Adipisci modi impedit est eius vero explicabo dicta facere provident autem natus expedita, itaque distinctio nesciunt inventore, consequatur qui delectus reiciendis eum voluptate eaque unde? Quibusdam, corporis rem. Nemo, iure.
              Quisquam soluta similique laborum, minima recusandae ex culpa voluptas ducimus quis, rem veniam ipsum ratione, ullam nesciunt assumenda facere mollitia illo nostrum nam eveniet enim in! Dolorum a magni asperiores.
              Similique illo tenetur quia aspernatur rerum! Doloremque enim quisquam officiis impedit labore iure error! Id molestiae ratione inventore harum voluptatum, quidem maxime iste reiciendis eligendi quasi ad soluta quos ducimus?
              </div>
                </div>

            
      
              <div className="grid grid-cols-12 gap-4 mt-4 mb-4">




              <div className="col-span-full">
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                  >
                   Objetivo :
                  </label>
                </div>
                <div className="col-span-full border border-r-gray-300 rounded-md p-6">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tenetur eum voluptates, officiis nulla similique quaerat? Aliquid iste expedita, facere quisquam commodi porro blanditiis. Ad officia iure temporibus dignissimos accusantium.
  Eos consequuntur magnam harum quasi cum laudantium id excepturi quaerat facere? Cum adipisci recusandae culpa dicta quod! Laboriosam dicta corrupti magni. Iusto, ad animi! Temporibus laborum quod cum molestias recusandae!
  Voluptas eligendi esse facere veritatis nisi recusandae suscipit minus error debitis, vel quam. Praesentium aliquid, nobis exercitationem asperiores voluptatem voluptate recusandae natus incidunt vel illum quam a quaerat excepturi in.
  Doloribus eius quo commodi ducimus? Suscipit placeat, aut sint dolorum vero corrupti deleniti! Distinctio, tenetur? Officiis perferendis nisi laudantium, itaque error numquam at. Obcaecati nihil temporibus animi? Reprehenderit, repellat dolores?
  Recusandae ut ea nemo natus, fugit aperiam tempora assumenda consectetur beatae iure aut deleniti unde magnam maxime labore voluptatum maiores? Dolor ducimus obcaecati inventore laborum dicta qui facere, amet ex!
  Ipsam, facere doloremque iste rem cum eius dolore maxime omnis quo placeat. Dolorum laboriosam quaerat praesentium, voluptatibus incidunt libero quas doloremque ducimus et repellat debitis eveniet molestias adipisci illum. Sapiente?
  Consequatur ducimus id quam, voluptatum in non repudiandae asperiores pariatur porro. Ratione earum ab libero! Suscipit, reiciendis illo? Deleniti nesciunt praesentium eveniet et accusamus totam laborum iusto sed asperiores libero!
  Illo debitis voluptatum in incidunt ab? Consectetur atque cumque rem molestias, quo vero tenetur odit suscipit similique provident nulla officia. Rem eaque quos, in corrupti asperiores reprehenderit enim fuga ad.
  Saepe corrupti laudantium tempora tenetur adipisci molestias quod corporis nesciunt incidunt quasi, soluta excepturi vitae dolorem fugit ullam doloribus earum recusandae quia quam. Maiores, modi libero amet assumenda saepe error!
  Omnis laboriosam vitae voluptate cum culpa. Quaerat modi necessitatibus ullam, ducimus illo laudantium incidunt esse nesciunt perferendis perspiciatis ipsam architecto sunt consequatur. Eligendi eius pariatur, incidunt modi ipsum vitae ut!
                </div>
  <div className="col-span-full">
                  <label
                    htmlFor="last-name"
                    className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                  >
                    Marco normativo :
                  </label>
                </div>
                <div className="col-span-full border border-r-gray-300 rounded-md p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt maxime dicta incidunt, perspiciatis dolores adipisci modi ducimus neque, expedita illo omnis impedit quis sit explicabo vitae iusto, nemo laborum?
              Quo earum, placeat quibusdam esse explicabo eius? Sunt voluptatibus reiciendis esse odit quas nulla voluptates! Eos perspiciatis nulla dolorem cumque veritatis, nesciunt harum iusto quaerat quis corporis, natus, magni voluptatibus!
              Asperiores maxime enim, magnam, sequi nam eveniet qui fugit nostrum reiciendis tempore vitae dicta omnis necessitatibus natus, praesentium nesciunt molestiae odit tenetur. Dolores voluptatem, placeat illum commodi quis corporis dignissimos.
              Hic eligendi sed est voluptatem repudiandae, ipsa eveniet in praesentium nulla mollitia animi sint quo velit asperiores itaque quasi odit tempore omnis fugit aliquam, ullam accusantium? Voluptatibus alias vitae ipsam.
              Modi atque quas saepe eligendi quis ut sit necessitatibus voluptatibus possimus nulla unde itaque est soluta, ipsam eum, laudantium delectus, minima nemo dolore molestiae? Culpa fuga optio quasi non cum.
              Nam sit voluptatem, sequi quae exercitationem animi perferendis totam facere dolor hic, eos corrupti facilis modi maxime obcaecati iste officia, magnam dignissimos fugiat porro neque eveniet quas molestiae. Magni, officia!
              Illo sit, provident recusandae nesciunt libero rerum pariatur laudantium aut excepturi molestias eius assumenda hic voluptas fugiat? Optio sed unde impedit tenetur eius eos hic, sunt corporis beatae alias quis.
              Veniam voluptas libero, laborum assumenda, voluptatum soluta nobis repellat dolorum provident temporibus harum iste eius impedit! Illo unde laboriosam nobis itaque, dolores obcaecati cum quas molestiae ut ab alias excepturi.
              Tenetur vero at accusantium cum! Tenetur possimus maxime numquam odio, facilis provident aliquam inventore omnis veniam, doloribus iste! Commodi quas quam debitis doloremque. Odit, magnam? Neque consequuntur vero blanditiis quisquam!
              Temporibus, odio assumenda praesentium sit nam ipsum consequuntur veritatis esse itaque perferendis totam laudantium dolore reiciendis id fuga asperiores omnis accusamus est dicta similique natus! Quae, enim dolore. Excepturi, suscipit!
                </div>
              </div>
              <div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-blue-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Sentido
                          <hr />
                        </div>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                     
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-yellow-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Unidad de Medida
                          <hr />
                        </div>
                        <div className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                         
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-green-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Tipo de Indicador
                          <hr />
                        </div>
                        <div className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                          
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 shadow-sm shadow-indigo-500/50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <div className="text-base font-semibold text-gray-600">
                          Periodicidad Seguimiento
                          <hr />
                        </div>
                        <div className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-2xl font-bold tracking-tight text-gray-900">
                       
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2 mt-4">
                <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                    Fórmula de cálculo
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos quia debitis esse eaque, alias non inventore commodi molestias cum dignissimos eius amet! Alias, cumque iusto excepturi quos quod unde.
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                        Variables Operativas
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam possimus dolor? Molestiae quaerat iusto eum quidem nostrum et non sapiente cum explicabo similique sint rem, dolore assumenda inventore soluta?
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Fuente de Indicador
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptate laborum animi explicabo, dolore nobis excepturi possimus ullam numquam itaque blanditiis voluptas natus reiciendis voluptatibus dolores, exercitationem consectetur, temporibus ipsum.
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Dependencia Responsable
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolore laborum ipsam repellat fugiat, voluptate praesentium ratione culpa quae reiciendis quibusdam veniam natus facere doloremque ex nemo ullam delectus vero!
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Responsable Dato
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Id labore corporis placeat rerum. Expedita culpa aut dolorem sapiente, modi consequatur, iste, ipsam numquam accusamus placeat aliquid soluta reiciendis eos nisi.
                  </div>
                  <div className="col-span-12 mt-4">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-semibold leading-6 text-gray-400 mt-2"
                    >
                      Responsable Misional
                    </label>
                  </div>
                  <div className="col-span-12  border border-r-gray-300 rounded-md p-6">
                  {"Próximamente...."}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sapiente qui accusantium culpa tenetur inventore laboriosam at asperiores, laborum eaque quisquam unde quam corrupti quae rerum nesciunt tempora, soluta necessitatibus?
                  </div>
                  

            



                </div>
              </div>
            </div>

                     <footer className='text-xs p-5  text-gray-500/90 '>
                Subdireccion de Porspectiva, Informacion y Evaluacion Estratégica <br />
                Departamento Admnistrativo de Planeación Distrital <br />
                Medellín - 2023

               </footer>
          </div> 
        
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageImccv;
