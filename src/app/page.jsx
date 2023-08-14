"use client";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
	return (
		<main className="">
			<Navbar />
		</main>
	);
}

// import React, { useState } from "react";
// import axios from "axios";
// import WeatherCard from "./components/weatherCard/WeaterCard";

// const Home = () => {
// 	const [city, setCity] = useState("");
// 	const [weatherData, setWeatherData] = useState(null);

// 	const fetchWeatherData = async () => {
// 		try {
// 			const response = await axios.get(
// 				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b0872c84833245374bafc509ce3d9730`
// 			);
// 			setWeatherData(response.data);
// 		} catch (error) {
// 			console.error("Error fetching weather data:", error);
// 		}
// 	};

// 	return (
// 		<div>
// 			<h1>Weather App</h1>
// 			<input
// 				className=" text-black"
// 				type="text"
// 				placeholder="Enter city name"
// 				value={city}
// 				onChange={(e) => setCity(e.target.value)}
// 			/>
// 			<button onClick={fetchWeatherData}>Search</button>
// 			{weatherData && (
// 				<WeatherCard
// 					city={weatherData.name}
// 					temperature={weatherData.main.temp}
// 					description={weatherData.weather[0].description}
// 					icon={weatherData.weather[0].icon}
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default Home;
