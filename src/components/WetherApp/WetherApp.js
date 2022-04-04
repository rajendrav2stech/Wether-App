import React, { useEffect, useState } from 'react'
import axios from "axios"
import WetherDetils from './WetherDetils';

const WetherApp = () => {

    const [selectedClient, setSelectedClient] = useState('tokyo');
    const handleSelectChange = (event) => {
        setSelectedClient(event.target.value);
    }
    const WEATHER_API_KEY = "6dced4cbe1493e8fc58baf0f8ba94dcc"
    const [weatherDetails, setWeatherDetails] = useState(null)
    const [loader, setLoader] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)
    let city = selectedClient
    let country = "India"
    let units = "metric"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}&units=${units}`
    useEffect(() => {
        let mounted = true;
        //Function For Getting Api Data And Setting in WeatherDetails State
        const fetchWeather = () => {
            axios
                .get(apiUrl)
                .then((response) => {
                    if (mounted) {
                        setWeatherDetails(response)
                        setLoader(false)
                    }
                })
                .catch((error) => {
                    setErrorMsg("Data Not Available")
                    setLoader(false)
                })
        }
        fetchWeather()
        return function cleanup() {
            mounted = false
        }
    }, [selectedClient])
    return (
        <>
            <div>
                <select onChange={handleSelectChange}>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Athens">Athens</option>
                    <option value="kuala Lumpur">Kuala Lumpur</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                </select>
            </div>
            {
                loader ? "Loading" : <WetherDetils data={weatherDetails} />
            }
        </>
    )
}

export default WetherApp