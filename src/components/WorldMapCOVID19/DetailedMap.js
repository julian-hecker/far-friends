import React, { useState, useEffect } from "react";
import "./DetailedMap.css";
import { VectorMap } from "react-jvectormap";
import countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const handleClick = (e, countryCode) => {
  console.log(countryCode);
};

const DetailedMap = () => {
  const [mapDetails, setMapDetails] = useState(null);

  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "e060ce6c8fmsh5404eaabe6d29f6p1d2845jsn9e8347027e2a",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data["response"]);
        setMapDetails(data["response"]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  let mapData = {};

  if (mapDetails) {
    mapDetails.forEach((item) => {
      // This removed only the extra white space in the beginning of the string
      let countryname = item.country.replace("-", " ");
      // This is then used to remove the white space at the end of the string
      // var newcountryname = countryname.substring(0, countryname.length -1);
      let key = countries.getAlpha2Code(countryname, "en");
      if (!key) {
        // Sometimes countries don't get coded
        switch (countryname) {
          case "USA":
            key = "US";
            break;
          case "S Korea":
            key = "KR";
            break;
          case "Vietnam":
            key = "VN";
            break;
          case "Russia":
            key = "RU";
            break;
          case "Iran":
            key = "IR";
            break;
          case "Diamond-Princess-":
            key = "JP";
            break;
          case "North Macedonia":
            key = "MK";
            break;
          case "Czechia":
            key = "CZ";
            break;
          case "UK":
            key = "GB";
            break;
          case "UAE":
            key = "AE";
            break;
          case "Palestine":
            key = "PS";
            break;
          case "Moldova":
            key = "MD";
            break;
          case "Brunei":
            key = "BN";
            break;
          case "Saint Martin":
            key = "MF";
            break;
          case "Faeroe Islands":
            key = "FO";
            break;
          case "Channel Islands":
            key = "NONE";
            break;
          case "Vatican City":
            key = "VA";
            break;
          case "St. Barth":
            key = "BL";
            break;
          case "DRC":
            key = "CD";
            break;
          case "Ivory Coast":
            key = "CI";
            break;
          case "CAR":
            key = "CF";
            break;
          case "Tanzania":
            key = "TZ";
            break;
          case "Syria":
            key = "SY";
            break;
          case "Laos":
            key = "LA";
            break;
          default:
            console.log(countryname);
            key = undefined;
        }
      }
      mapData[key] = item.cases.total;
    });

    return (
      <div className="map">
        <VectorMap
          map={"world_mill"}
          backgroundColor="#131138"
          zoomOnScroll={false}
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#7d9",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
          }}
          series={{
            regions: [
              {
                values: mapData, //this is your data
                scale: ["#dbfebd", "#ec5870"], //your color game's here
                normalizeFunction: "polynomial",
              },
            ],
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default DetailedMap;
