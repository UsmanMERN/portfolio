'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import * as animationData from '../public/lotties/animation_lmnww75b.json'; // Ensure this path is correct

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Svg() {
	return (
		<div className="w-full h-auto">
			<Lottie animationData={animationData} loop={true} autoplay={true} />
		</div>
	);
}
