/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";

// const SearchWeather = () => {
//   const [search, setSearch] = useState("Delhi");
//   const [data, setData] = useState(null);
//   const [input, setInput] = useState("");

//   const API_KEY = 'a31fb01eda6cc5bd9b9adf5f9ebc0863';
//   const defaultCity = "Weather"; // Set your default city here

//   useEffect(() => {
//     const fetchWeather = async () => {
//       if (!input) return; // Don't make a request if input is empty

//       const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;

//       try {
//         const response = await fetch(API_URL);
//         const result = await response.json();

//         if (result.cod === "404") {
//           console.error("City not found");
//           return;
//         }

//         setData(result);
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//       }
//     };

//     if (search) {
//       fetchWeather();
//     }
//   }, [search, input, API_KEY]);

//   const getWeatherEmojiAndName = (temperature, weatherCondition) => {
//     // ... (same as before)
//   };

//   return (
//     <div>
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-md-4">
//             <div className="card text-white text-center border-0">
//               <img
//                 src="http://source.unsplash.com/600x900/?nature,weather"
//                 className="card-img"
//                 alt="..."
//               />
//               <div className="card-img-overlay">
//                 <form>
//                   <div className="input-group mb-4 w-75 mx-auto">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Search city"
//                       aria-label="Search city"
//                       aria-describedby="basic-addon2"
//                       value={input}
//                       onChange={(e) => setInput(e.target.value)}
//                     />
//                     <button
//                       type="button"
//                       className="input-group-text"
//                       id="basic-addon2"
//                       onClick={() => setSearch(input)}
//                     >
//                       <i className="fas fa-search"></i>
//                     </button>
//                   </div>
//                 </form>
//                 {data && (
//                   <div className="bg-dark bg-opacity-50 py-4">
//                     <h2 className="card-title">{data.name}</h2>
//                     <p className="card-text lead">
//                       {new Date().toLocaleDateString()}
//                     </p>
//                     <hr />
//                     {getWeatherEmojiAndName(data.main.temp - 273.15, data.weather[0].main)}
//                     <h1 className="fw-bolder mb-5 ">
//                       {((data.main.temp - 273.15).toFixed(2))} &deg;C
//                     </h1>
//                     <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
//                     <p className="lead">
//                       {((data.main.temp_min - 273.15).toFixed(2))} &deg;C | {((data.main.temp_max - 273.15).toFixed(2))} &deg;C
//                     </p>
//                   </div>
//                 )}
//                 {!data && (
//                   <div className="bg-dark bg-opacity-50 py-4">
//                     <h2 className="card-title">{defaultCity}</h2>
//                     <p className="card-text lead">
//                       {new Date().toLocaleDateString()}
//                     </p>
//                     <hr />
//                     {/* Set your default emoji and name here */}
                   
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchWeather;





import { useEffect, useState } from "react";

const SearchWeather = () => {
  const [search, setSearch] = useState("Delhi");
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");

  const API_KEY = 'a31fb01eda6cc5bd9b9adf5f9ebc0863';
  const defaultCity = "Date";

  const fetchWeather = async () => {
    if (!input) return;

    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (result.cod === "404") {
        console.error("City not found");
        return;
      }

      setData(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = () => {
    // Trigger weather search only when the button is clicked
    fetchWeather();
    setSearch(input); // Set search term after the button is clicked
  };

  const getWeatherEmojiAndName = (temperature, weatherCondition) => {
    // ... (same as before)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleSearch();
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-white text-center border-0">
              <img
                src="http://source.unsplash.com/600x900/?nature,weather"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay">
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search city"
                      aria-label="Search city"
                      aria-describedby="basic-addon2"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="input-group-text"
                      id="basic-addon2"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
                {data && (
                  <div className="bg-dark bg-opacity-50 py-4">
                    <h2 className="card-title">{data.name}</h2>
                    <p className="card-text lead">
                      {new Date().toLocaleDateString()}
                    </p>
                    <hr />
                    {getWeatherEmojiAndName(data.main.temp - 273.15, data.weather[0].main)}
                    <h1 className="fw-bolder mb-5 ">
                      {((data.main.temp - 273.15).toFixed(2))} &deg;C
                    </h1>
                    <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
                    <p className="lead">
                      {((data.main.temp_min - 273.15).toFixed(2))} &deg;C | {((data.main.temp_max - 273.15).toFixed(2))} &deg;C
                    </p>
                  </div>
                )}
                {!data && (
                  <div className="bg-dark bg-opacity-50 py-4">
                    <h2 className="card-title">{defaultCity}</h2>
                    <p className="card-text lead">
                      {new Date().toLocaleDateString()}
                    </p>
                    <hr />
                    {/* Set your default emoji and name here */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;

