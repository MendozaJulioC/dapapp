
'use client'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";



Charts(FusionCharts ,ReactFusioncharts, FusionTheme);
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
import  React,{useEffect, useState, useRef , useMemo} from "react";


let dataprint =[]


function ChartTipoTematicAmpliada(props) {
    const [dateo, setDateo]= useState()
    
    useEffect(()=>{

        getVotos()
       }, [])

       async function getVotos() {
        try {
            
          const res = await fetch(
           'http://localhost:5000/api/datos/totaltematicaampliada'
          );
          const respuesta = await res.json();
          dataprint.splice(0, dataprint.length);
          respuesta.data.forEach((element) => {
       
            dataprint.push({
              label: element.tematica_indicador,
              value: element.count,
              color: props.color,
            });
        
          });


        } catch (error) {
          console.error("Error ");
        }
        setDateo(dataprint);
      }

  const dataSource = {
    chart: {
      caption: " Temática Ampliada",
      subcaption : "subpiee",
      xaxisname: "Temáticas",
      yaxisname: "total",
      showvalues: "1",
      formatnumberscale: "0",
      theme: "gammel",
   
    },
    data:dateo
  };
  
        return (
          <ReactFusioncharts
            type="bar2d"
            width={'100%'}
            height={800}
            dataFormat="JSON"
            dataSource={dataSource}
          />
        );

}
export default ChartTipoTematicAmpliada; 