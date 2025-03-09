"use client"
import "./page.css";
import { useEffect } from "react";

import L from 'leaflet';  
import 'leaflet/dist/leaflet.css';

export default function Home() {


  useEffect( () => {

    // emsi hassan 
    const lat = 34.01738908484381; 
    const lon = -6.832590627878203; 

    const tileLayerUrl = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
  ? 'https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}'
  : 'https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}'

    // Initialize map
    const map = L.map('miniMap', {
      center: [ lat, lon],
      zoom: 100,
      zoomControl: false,
      // scrollWheelZoom: false,
      attributionControl: false
    })


    var Jawg = L.tileLayer( tileLayerUrl, {
      attribution: '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      accessToken: 'opPTxDWoQtoUWjYCv9BTzNLar83xUdN8xxVwPcINI6kvaQsU2Iv3x7plKiYY4goz'
    });

    Jawg.addTo( map)


    const customIcon = L.icon({
      iconUrl:
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
          ? '/icons/map-marker-dark.svg' 
          : '/icons/map-marker-light.svg', 
      iconSize: [50, 50],     
      iconAnchor: [16, 32],  
    })

    L.marker([lat, lon], {icon: customIcon})
      .addTo(map)
      .openPopup()

      return () => {
        map.remove()
      }


  }, [])



  return (
    <>

      {
        // well have different section with each on of them having a more button to expand on projects for example
      }
      <section
        className="intro"
      >
        <div
          className="info"
        >
          <p>
            I’m a software developer with over 2 years of experience in web development.
          </p>
        </div>
        <img
            src="/images/place_holder.jpg"
        />
      </section>
      <section
        className="currentPosition"
      >   
        <h1> Current Position</h1>
        <div id="miniMap"></div>
        <h1> More</h1>
        <div className="positionInfo">
        I am currently pursuing a degree in Software Engineering at the École Marocaine des Sciences de l'Ingénieur (EMSI). Established in 1986, EMSI is a private higher education institution recognized by the Moroccan State, specializing in engineering disciplines.
        The comprehensive five-year program equips students with both theoretical knowledge and practical skills, preparing them to excel in the dynamic field of software engineering.
        With a strong emphasis on innovation and research, EMSI fosters an environment where aspiring engineers can thrive and contribute to technological advancements. 
        </div> 
      </section>
      <section
        className="projects"
      >

      </section>
      <section
        className="articles"
      >

      </section>
    </>
  );
}
