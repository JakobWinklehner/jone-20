"use client";
import React from "react";
import Confetti from "react-confetti";

export default () => {
	console.log("Confeti");
	return <Confetti width={window.innerWidth} height={window.innerHeight} />;
};
