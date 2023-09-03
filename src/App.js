import React,{useState} from "react";

const App=()=>{
  let [countrytext,setText]=useState("");
  let [country,setData]=useState([]);
  const displaycountries=()=>{
    fetch(`http://disease.sh/v3/covid-19/countries/${countrytext}`)
    .then((response)=>response.json())
    .then((data)=>setData(data));
    console.log(country);

  }
    return(
        <div>
            <input type="text" onChange={(event)=>setText(event.target.value)} />

            <button onClick={displaycountries}>Output</button>

            <div>
                <p>{country.country}</p>
                <p>{country.active}</p>
                <p>{country.cases}</p>
                <p>{country.recovered}</p>
                <p>{country.tests}</p>
            </div>
        </div>
    )
}
export default App;