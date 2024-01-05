import React from "react";
import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => {
	return (
		<div className="flex items-center justify-center h-screen mb-96">
			<Oval
				type="TailSpin"
				color="#D89AFB"
				height={80}
				width={80}
				secondaryColor="#D89AFB"
			/>
		</div>
	);
};

export default LoadingSpinner;
