import React from 'react'
import SunRise from "../../assets/images/sunrise.png"
import Sunset from "../../assets/images//sunset.png"
import { FaThermometerQuarter, FaTachometerAlt } from "react-icons/fa"
import { TiWeatherWindy } from "react-icons/ti"
import { WiHumidity } from "react-icons/wi"

const WetherDetils = ({ data }) => {
    return (
        <div>

            <div >
                <div>
                    <div className="heading_weather">
                        <h4>{data.data.name}</h4>
                        <img src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`} />
                    </div>
                    <div className="colud_location">
                        <strong>{data.data.weather[0].main}</strong>
                    </div>
                    <div className='temperature'>
                        <strong>{data.data.name}</strong>
                        <strong> {data.data.main.temp}ºC </strong>
                    </div>
                    <div className='feel_like'>
                        <div>
                            <div>
                                <FaThermometerQuarter />
                                <span>{data.data.main.feels_like} Feels Like</span>
                            </div>
                        </div>
                        <div >
                            <div>
                                <TiWeatherWindy />
                                <span>{data.data.wind.speed} Meter/sec</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <WiHumidity />
                                <span>{data.data.main.humidity}%</span>
                            </div>
                        </div>
                    </div>
                    <div className='sun_set'>
                        <div md={4}>
                            <div className='child'>
                                <FaTachometerAlt />
                                <span>{data.data.main.pressure} hPa</span>
                            </div>
                        </div>
                        <div>
                            <div className='child'>
                                <img src={SunRise} alt="" />
                                <span>{new Date(data.data.sys.sunrise * 1000).toLocaleTimeString()}</span>
                            </div>
                        </div>
                        <div>
                            <div className='child'>
                                <img src={Sunset} alt="" />
                                <span>{new Date(data.data.sys.sunset * 1000).toLocaleTimeString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WetherDetils