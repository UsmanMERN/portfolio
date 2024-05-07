'use client'
import React from 'react';
import Lottie from 'lottie-react';
import * as animationData from '../public/lotties/animation_lmnww75b.json'; // Import your Lottie JSON file


export default function Svg() {


	return (
		<div className='lg:h-[500px] 1920px:h-[650px] ' >
			<Lottie animationData={animationData} loop={true} autoPlay={true} />
		</div>
	);
}
