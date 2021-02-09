import React, { useEffect, useState } from 'react';

const Tempapp=()=>{
    const[search, setsearchdata]=useState(" ");
    const[city , setcity]=useState(null);
    const[info, setinfo]=useState(null);
    useEffect(()=>{
        const fetchdata=async()=>{
            const result=await fetch(`http://api.weatherapi.com/v1/current.json?key=e08e24843a914396bc063515210802&q=${search}`)
            const res= await result.json();
            setcity(res.current);
            setinfo(res.location);
           
        }
        fetchdata();
    },[search])
    const InputEvent=(event)=>{
        setsearchdata(event.target.value)
    }
  return(
    <>
      <div className="box">
        <div className="InputData">
            <input type="search"
            placeholder="Search"
            className="InputField"
                value={search}
                onChange={InputEvent}
            />
        </div>
        {!(city&&info)?(<p className="errorMsg">
            No data found
        </p>):(
            <div>
            <div className="info">
               <h2 className="location">
               <i className="fas fa-street-view"></i>{info.name}
               <p style={{textAlign:"center", fontSize:"20px"}}>{info.country}</p>
               <p style={{textAlign:"center", fontSize:"20px"}}>{info.localtime}</p>
               </h2>
               <h1 className="temp">
                {city.temp_c}° Celsius

               </h1>
               <h3 className="#date">
               <p style={{textAlign:"center"}}>{city.condition.text}</p>
               last updated :{city.last_updated}
               </h3>

            </div>
                <div className="wave"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
                )}

      </div>
    </>
  )
}

export default Tempapp;


