import React from "react";
// import styles from "./WeatherCard.module.css";
import Image from "next/image";

const WeatherCard = ({ city, temperature, description, icon }) => {
	return (
		<div
			styles={{
				border: "1px solid #ccc",
				padding: "16px",
				margin: "16px",
				textAlign: "center",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
				borderRadius: "8px",
				backgroundColor: "#fff",
			}}>
			<h2>{city}</h2>
			<Image
				src={`http://openweathermap.org/img/w/${icon}.png`}
				alt="Weather Icon"
				width="500"
				height="500"
			/>
			<p>{description}</p>
			<p>{temperature}°C</p>
		</div>
	);
};

export default WeatherCard;
 