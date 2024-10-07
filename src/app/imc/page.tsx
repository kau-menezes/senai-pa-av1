"use client"

import { useState } from "react"

import cardio from "@/assets/cardio.jpg";
import Image from "next/image";

const BMI: React.FC = () => {

    const [weight, setWeight] = useState<string>(" ")
    const [height, setHeight] = useState<string>(" ")
    const [bmi, setBMI] = useState<number | undefined >()
    const [err, setErr] = useState(false)
    const [errMessage, setErrMessage] = useState("Please, insert a valid input!")

    const calculateBMI = () => {

        let parsedWeight = parseFloat(weight);
        let parsedHeight = parseFloat(height);
        if (weight && height) {
            console.log(weight);
            console.log(height);
            
        let result = parsedWeight / parsedHeight;
        setBMI(result);
        } else {
            setErr(true);
        }
    }

  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-center mt-8 p-4 bg-azu w-3/4" >
        <div className="flex justify-center items-center" >
            <Image 
            src={cardio} 
            alt="Cardio Image"
            className="w-[500px] h-[360px] min-w-[500px] min-h-[360px]"
            />
        </div>
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col">
                <input id="weight-input" type="range" min={0} max={400} onChange={ (e) => { setWeight(e.target.value)}} className="" />
                <div className="flex items-center gap-2 w-[160px] mt-3">
                    <label 
                        htmlFor="weight-input"
                        className="text-white font-medium"
                    >
                        Weight:
                         
                    </label>
                    <input 
                        id="weight-input" 
                        type="text" 
                        value={weight} 
                        placeholder="Type yout weight..." 
                        onChange={ (e) => setWeight(e.target.value)}
                        className="w-24 p-1 placeholder:text-gray-400"
                    />
                </div>
            </div>
            <div className="flex flex-col p-8">
                <input id="height-input" type="range" min={0} max={250} onChange={ (e) => { setHeight(e.target.value)}} />
                <div className="flex items-center gap-2 w-[160px] mt-3">
                    <label 
                        htmlFor="height-input"
                        className="text-white font-medium"
                    >
                        Height:
                         
                    </label>
                    <input 
                        id="height-input" 
                        type="text" 
                        value={height} 
                        placeholder="Type yout weight..." 
                        onChange={ (e ) => setHeight(e.target.value)}
                        className="w-24 p-1 placeholder:text-gray-400"
                    />
                </div>
            </div>
            <button 
                onClick={ () => calculateBMI() } 
                className="font-medium bg-background text-azu w-[160px]"
            >
                    CALCULATE
            </button>
            <div className="mt-8 w-[160px]">
                <p className="font-medium text-white"> Your BMI </p>
                <div className="bg-background text-azu font-medium text-center">
                { !isNaN(bmi ?? NaN)? bmi : errMessage }
                </div>
            </div>
        </div>

    </div>
    
  )
};

export default BMI