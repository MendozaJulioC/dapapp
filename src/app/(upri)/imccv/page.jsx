import CardECV from "../../components/Cards/Card";
import ChartIMCV from "../../components/Charts/AmCharts/IMCVChart";

const PageImccv = () => {
  return (
    <div class="p-2 sm:ml-60">
      <div className=" bg-white px-6 py-10 sm:py-28 lg:px-6 container mx-auto">
        <div class="p-2 border-2 border-blue-200 border-dashed rounded-lg dark:border-gray-700 mt-4">
          <div className=" bg-white px-6 py-18 sm:py-10 lg:px-8 container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                IMCV
              </h2>
              <p className="mt-2 text-2xl leading-8 text-gray-600 cmb-2 font-bold tracking-tight  dark:text-white hover:text-gray-800 ml-2">
                Indice Multidimensional de Condiciones de Vida
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageImccv;
