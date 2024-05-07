import React from 'react';
import Svg from '../Svg';
export default function Section_1({ contributions }: { contributions: number }) {
  return (
    <div
      className="flex justify-center items-center flex-col md:flex-row hero-section-1 mt-20 sm:mt-9 lg:mt-0">
      <div className="w-full md:w-1/2">
        <span
          className="bg-primary text-white p-1 rounded-md text-sm sm:text-base">
          Software Engineer
        </span>
        <br />
        <h1 className="text-2xl sm:text-4xl mt-4 leading-relaxed">
          Making The Impossible Possible. Using 1&apos;s and 0&apos;s.
        </h1>
        <p className="mt-4">Problem solving is what makes me unique.</p>
        <div className="flex gap-10 sm:gap-44">
          <div className="flex items-center gap-1 mt-16">
            <h3 className="text-2xl sm:text-4xl">3</h3>
            <p className="text-xs">Years of <br /> Experience</p>
          </div>
          <div className="flex items-center gap-1 mt-16">
            <h3 className="text-2xl sm:text-4xl">{contributions}</h3>
            <p className="text-xs">Projects / <br /> Contributions</p>
          </div>
        </div>
        <button className='download-button my-8'>
          <span className="download-button_lg">
            <span className="download-button_sl"></span>
            <span className="download-button_text">
              <a href="https://drive.google.com/uc?export=download&id=1aSGPrWW9c760C_FlVS4BUfif_xjz5L-k" download="Muhammad_Usman.pdf">View My CV</a>
            </span>
          </span>
        </button>
      </div>
      <div className="w-full md:w-1/2 hidden md:block">
        <div>
          <Svg />
        </div>
      </div>
    </div>
  );
}
