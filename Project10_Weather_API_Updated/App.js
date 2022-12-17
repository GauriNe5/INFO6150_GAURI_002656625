import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})

  useEffect(() => {
    handleSearch();
  }, []);

  const getWeatherDetails = async (place) => {
    if (!place) return
    const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=23dca9409e0548dfa81235723221512&q=${place}&days=1&aqi=no&alerts=no` 
    await axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  
  const handleChangeInput = (e) => {
        console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWeatherDetails(inputCity)
  }

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather Website</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity} placeholder="Enter a City Name"
             onChange={handleChangeInput}  />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>

        </div>
      </div>

      {Object.keys(data).length > 0 &&  //response has list of 3 paramaters current,forecast, location 
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded weatherResultBox">
            <img className="weatherIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

            <h5 className="weatherCity">
              {data?.name}
            </h5>
            <h6 className="weatherTemp">{((data.current.temp_f))}°F</h6>
          </div>
        </div>
      }

    </div>
  );
}

export default App;
