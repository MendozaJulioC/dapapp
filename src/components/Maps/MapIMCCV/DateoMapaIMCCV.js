"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from "leaflet";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import React, { useState, useEffect, useRef, useMemo, useLayoutEffect } from "react";
import { Suspense } from 'react';

var Q_Color=[]
var Min=0; var Max=0; var Q1=0; var Q2=0; var Q3=0; var MQ1=0;  var MQ2=0; var MQ3=0;


export default function MapaDondeLider() {

  const [geojson, setGeojson] = useState();
  const map = useMap();
  const ifGeoJsonFirst = useRef(true);
  async function getData() {
    try {
      const res = await fetch(
        "https://j4ch.kratiaanalitik.net/api/gis/imcv/territorio/2022"
      );
      const response = await res.json();
      setGeojson(response.data[0].jsonb_build_object.features);
      ifGeoJsonFirst.current = false;
      return response;
    } catch (error) {
      console.error(error);
    }
    
 

    if (!ifGeoJsonFirst.current) {
      
      
      colormapa(geojson)
      const geojsonObject = L.geoJSON(geojson, {
        style: style,
        onEachFeature: function (features, layer) {

          let popupContent =
          `                       
             <div className="card" style="width: 18rem;">
                          <!-aquí podemos colocar una imagen-->     
                      <div class="card-body">
                          <h5 className="card-title">` +
            features.properties.NOMBRE +
            `</h5>
                          <p className="card-text">
                          <p  className="text-muted"  ;">Código Territorio <br> <b>` +
            features.properties.VIGENCIA +
            `</b> </p>
                          <table className="table table-hover table-inverse table-responsive">
                              <tbody>
                              <tr>
                              <td>Líder</td>
                              <td>` +
            features.properties.CODCOMUNA +
            `</td>
                          </tr>
                          <tr>
                            <td>Celular</td>
                            <td>` +
            features.properties.RESULTADO +
            `</td>
                         
                         
                              </tbody>
                          </table>
                          </div>
                      </div>`;
          let ToolTip = `${features.properties.NOMBRE} <br/>  `;
          layer.bindPopup(popupContent);
          layer.bindTooltip(ToolTip, {
            permanent: false,
            direction: "center",
          });
        },
      }).addTo(map);

      map.fitBounds(geojsonObject.getBounds());
      var info = L.control();
      info.onAdd = function (map) {
          this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
          this.update();
          return this._div;
      };

      // method that we will use to update the control based on feature properties passed
      info.update = function (props) {
          this._div.innerHTML = ` <h5> <b>IMCV por Comunas/Corregimientos </b><br /></h5>`
      };

      info.addTo(map);
      var legend = L.control({ position: 'bottomright' });
      legend.onAdd = function (map) {
          this._div = L.DomUtil.create('div', 'info legend');
          var grades = [0, (parseInt(Min)), (parseInt(MQ1)), (parseInt(MQ2)), (parseInt(MQ3)), (parseInt(Max))],
              labels = [];
          // loop through our density intervals and generate a label with a colored square for each interval
          this._div.innerHTML += ' <p>  <b>  Rango IMCV </b></p>'
          for (var i = 0; i < grades.length; i++) {
              this._div.innerHTML += '<li style="    background:' + getColor((grades[i] + 1)) + '">  ' + grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+  </li> ');
          }
          return this._div;
      };

      legend.addTo(map);

      function getColor(d) {
          return d >= Max ? '#08519c' :
              d > MQ3 ? '#3182bd' :
              d > MQ2 ? '#6baed6' :
              d > MQ1 ? '#9ecae1' :
              d >= Min ? '#c6dbef' : '#eff3ff';
      }

      function style(features) {
          return {
              fillColor: getColor((features.properties.RESULTADO)),
              weight: 1,
              opacity: 1,
              color: 'gray',
              dashArray: '3',
              fillOpacity: 0.7
          };
      }

      return <GeoJSON data={geojson.features} />;
    } else {
      return null;
    }




  }
  const MyData = () => {
    const paintmap = useMemo( () => {       pintamapa();    }, [geojson]);
    useEffect(() => { if (ifGeoJsonFirst.current) {  getData();    }  },[]);
    
    async function pintamapa() {
      if (!ifGeoJsonFirst.current) {
        colormapa(geojson)
        const geojsonObject = L.geoJSON(geojson, {
          style: style,
          onEachFeature: function (features, layer) {
            let popupContent =
            `      
            
              <div className="card" style="width: 28rem;">
                <!-aquí podemos colocar una imagen-->  
                <div  class="card-title mb-4"> <h3 className="text-xs text-gray-700 uppercase" > <strong>` +features.properties.NOMBRE +`</strong> </h3></div>
                  <hr/>  
                  <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-4 py-3">Vigencia</th>
                        <th scope="col" class="px-4 py-3">CodTerritorio</th>
                        <th scope="col" class="px-4 py-3">IMCCV</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">` + features.properties.VIGENCIA +`</th>
                        <td class="px-4 py-4 text-center">` + features.properties.CODCOMUNA +`</td>
                        <td class="px- py-4 text-center"> <strong>` + features.properties.RESULTADO +`</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>`;
            let ToolTip = `${features.properties.NOMBRE} <br/>  `;
            layer.bindPopup(popupContent);
            layer.bindTooltip(ToolTip, {
              permanent: false,
              direction: "center",
            });
          },
        }).addTo(map);

        map.fitBounds(geojsonObject.getBounds());
        var info = L.control();
        info.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
            this.update();
            return this._div;
        };

        // method that we will use to update the control based on feature properties passed
        info.update = function (props) {
            this._div.innerHTML = ` <h4> <b>IMCCV por Comunas/Corregimientos 2022 </b></h4>`
        };

        info.addTo(map);
        var legend = L.control({ position: 'bottomright' });
        legend.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info legend');
            var grades = [0, (parseInt(Min)), (parseInt(MQ1)), (parseInt(MQ2)), (parseInt(MQ3)), (parseInt(Max))],
                labels = [];
            // loop through our density intervals and generate a label with a colored square for each interval
            this._div.innerHTML += ' <p>  <b>  Rango IMCV </b></p>'
            for (var i = 0; i < grades.length; i++) {
                this._div.innerHTML += '<li style="    background:' + getColor((grades[i] + 1)) + '">  ' + grades[i] + (grades[i + 1] ? ' &ndash; ' + grades[i + 1] + '<br>' : '+  </li> ');
            }
            return this._div;
        };

        legend.addTo(map);

        function getColor(d) {
            return d >= Max ? '#08519c' :
                d > MQ3 ? '#3182bd' :
                d > MQ2 ? '#6baed6' :
                d > MQ1 ? '#9ecae1' :
                d >= Min ? '#c6dbef' : '#eff3ff';
        }

        function style(features) {
            return {
                fillColor: getColor((features.properties.RESULTADO)),
                weight: 1,
                opacity: 1,
                color: 'gray',
                dashArray: '3',
                fillOpacity: 0.7
            };
        }

        return <GeoJSON data={geojson.features} />;
      } else {
        return null;
      }


    }

  };

  return (
    <>
       <Suspense fallback = { <div>Cargando..</div> }>
        <MyData />
      </Suspense>
    </>
  );
}

function colormapa(valores) {
   

  for (let index = 0; index < 21; index++) {
      Q_Color.push(parseInt(valores[index].properties.RESULTADO))
  }
  Q_Color.sort(function (a, b) { return a - b });
  Min = (Q_Color[0])
  Max = (Q_Color[Q_Color.length - 1])
  let tam = Q_Color.length
  Q1 = 0.25 * (tam + 1)
  if ((Q1 / parseInt(Q1)) > 1) { MQ1 = ((parseInt(Q_Color[parseInt(Q1)]) + parseInt(Q_Color[(parseInt(Q1) + 1)])) / 2) } else { MQ1 = parseInt(Q_Color[Q1]) }
  Q2 = 0.50 * (tam + 1)
  if ((Q2 / parseInt(Q2)) > 1) { MQ2 = ((parseInt(Q_Color[parseInt(Q2)]) + parseInt(Q_Color[(parseInt(Q2) + 1)])) / 2) } else { MQ2 = (Q_Color[Q2]) }
  Q3 = 0.75 * (tam + 1)
  MQ3 = (parseInt(Q_Color[parseInt(Q3)]) + parseInt(Q_Color[(parseInt(Q3) + 1)])) / 2
  if (MQ3 < MQ2) { MQ3 = (Q_Color[(parseInt(Q3) + 1)]) }
  else if ((Q3 / parseInt(Q3)) > 1) { MQ3 = ((Q_Color[parseInt(Q3)]) + parseInt(Q_Color[(parseInt(Q3) + 1)])) / 2 }
  else { MQ3 = Q_Color[Q3] }
}