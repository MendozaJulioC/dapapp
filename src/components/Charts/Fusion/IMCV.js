'use client'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useEffect } from "react";
import axios from "axios"
// Resolves charts dependancy
Charts(FusionCharts ,ReactFusioncharts, FusionTheme);
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
import  React,{ useState, useRef , useMemo} from "react";


function ChartIMCV() {
    const [categoria , setCategoria]= useState()
    const [rural , setRural]= useState()
    const [urbano , setUrbano]= useState()
    const [ciudad , setCiudad]= useState()
   
     useEffect(()=>{
      getIMCV()
     }, [])
   
     async function getIMCV(){
       const respuesta =  await axios.get('https://j4ch.kratiaanalitik.net/api/datos/total/imcv');
       let cate= []
       let urban =[]
       let rura = []
       let ciu= []
       for (let index = 0; index < respuesta.data.category.length; index++) {
         cate.push({label: (respuesta.data.category[index].label).toString()})
       }
       for (let index = 0; index < respuesta.data.urbano.length; index++) {
         urban.push({value: respuesta.data.urbano[index].value})
       }
       for (let index = 0; index < respuesta.data.rural.length; index++) {
         rura.push({value: respuesta.data.rural[index].value})
       }
       for (let index = 0; index < respuesta.data.ciudad.length; index++) {
         ciu.push({value: respuesta.data.ciudad[index].value})
       }
       setCategoria(cate); setRural(rura);setUrbano(urban);setCiudad(ciu);
     }
     
     const dataSource = {
          chart: {
           caption: "Índice Multidimensional de Calidad de Vida",
           yaxisname: "IMCV",
       
           showhovereffect: "1",
           // showvalues: "1",
           transposeAxis: "1",
           drawcrossline: "1",
           plottooltext: "<b>$dataValue</b> IMCV  $seriesName",
           theme: "fusion"
         },
           categories: [{category: categoria}],
           dataset: [
             {seriesname: "Rural",  data: rural  },
             {seriesname: "Urbano", data: urbano },
             {seriesname: "Ciudad", data: ciudad }
           ]
         };
           return (
             <ReactFusioncharts
             type="msline"
             width={'100%'}
             height={'560'}
             dataFormat="JSON"
             dataSource={dataSource}
             />
           );

}
export default ChartIMCV; 