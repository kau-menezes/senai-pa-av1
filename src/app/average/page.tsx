"use client"

import { useState } from "react"

import school from "@/assets/ixcola.jpg";
import passou from "@/assets/passou.png";
import selascou from "@/assets/selascou.png";

import Image from "next/image";
import { log } from "console";

const BMI: React.FC = () => {

    const [score1, setScore1] = useState<string>(" ")
    const [score2, setScore2] = useState<string>(" ")
    const [score3, setScore3] = useState<string>(" ")
    const [score4, setScore4] = useState<string>(" ")
    const [score5, setScore5] = useState<string>(" ")
    const [final, setFinal] = useState<number | undefined>()
    
    const [err, setErr] = useState(false)
    const [errMessage, setErrMessage] = useState("Please, insert a valid input!")

    const calculateFinal = () => {

        let parsedScore1 = parseFloat(score1);
        let parsedScore2 = parseFloat(score2);
        let parsedScore3 = parseFloat(score3);
        let parsedScore4 = parseFloat(score4);
        let parsedScore5 = parseFloat(score5);
            

        if (score1 && score2 && score3 && score4 && score5) {
            let result = (parsedScore1 + parsedScore2 + parsedScore3 + parsedScore4 + parsedScore5) / 5;
            setFinal(result);
            console.log(final);
            
        }
        
    }

  return (
    <div className="flex flex-col md:justify-center mt-8 bg-mareloEscuro w-full md:w-3/4 md:p-4" >
        <div className="flex items-center justify-center w-full">
            <Image 
            src={school} 
            alt="Cardio Image"
            className="w-full h-10/12 "
            />
        </div>
        <div className="flex flex-wrap justify-between gap-3 w-full">
            <div className="flex flex-col items-center justify-center p-4 w-1/6 min-w-[185px]">
                <div className="flex flex-col">
                    <input id="weight-input" type="range" min={0} max={100} value={score1} onChange={ (e) => { setScore1(e.target.value)}} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <div className="flex items-center gap-2 w-[160px] mt-3">
                        <label 
                            htmlFor="score1-input"
                            className="text-white font-medium"
                        >
                            First score:
                            
                        </label>
                        <input 
                            id="score1-input" 
                            type="text" 
                            value={score1} 
                            placeholder="Type..." 
                            onChange={ (e) => setScore1(e.target.value)}
                            className="w-24 p-1 placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 w-1/6 min-w-[185px]">
                <div className="flex flex-col">
                    <input id="weight-input" type="range" min={0} max={100} value={score2} onChange={ (e) => { setScore2(e.target.value)}} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <div className="flex items-center gap-2 w-[160px] mt-3">
                        <label 
                            htmlFor="score2-input"
                            className="text-white font-medium"
                        >
                            Second score:
                            
                        </label>
                        <input 
                            id="score2-input" 
                            type="text" 
                            value={score2} 
                            placeholder="Type..." 
                            onChange={ (e) => setScore2(e.target.value)}
                            className="w-24 p-1 placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center justify-center p-4 w-1/6 min-w-[185px]">
                <div className="flex flex-col">
                    <input id="weight-input" type="range" min={0} max={100} value={score3} onChange={ (e) => { setScore3(e.target.value)}} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <div className="flex items-center gap-2 w-[160px] mt-3">
                        <label 
                            htmlFor="score3-input"
                            className="text-white font-medium"
                        >
                            Third score:
                            
                        </label>
                        <input 
                            id="score3-input" 
                            type="text" 
                            value={score3} 
                            placeholder="Type..." 
                            onChange={ (e) => setScore3(e.target.value)}
                            className="w-24 p-1 placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center justify-center p-4 w-1/6 min-w-[185px]">
                <div className="flex flex-col">
                    <input id="weight-input" type="range" min={0} max={100} value={score4} onChange={ (e) => { setScore4(e.target.value)}} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    <div className="flex items-center gap-2 w-[160px] mt-3">
                        <label 
                            htmlFor="score4-input"
                            className="text-white font-medium"
                        >
                            Fourth score:
                            
                        </label>
                        <input 
                            id="score4-input" 
                            type="text" 
                            value={score4} 
                            placeholder="Type..." 
                            onChange={ (e) => setScore4(e.target.value)}
                            className="w-24 p-1 placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center justify-center p-4 w-1/6 min-w-[185px]">
                <div className="flex flex-col">
                    <input id="weight-input" type="range" min={0} max={100} value={score5} onChange={ (e) => { setScore5(e.target.value)}} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 range-" />
                    <div className="flex items-center gap-2 w-[160px] mt-3">
                        <label 
                            htmlFor="score5-input"
                            className="text-white font-medium"
                        >
                            Fifth score:
                            
                        </label>
                        <input 
                            id="score5-input" 
                            type="text" 
                            value={score5} 
                            placeholder="Type..." 
                            onChange={ (e) => setScore5(e.target.value)}
                            className="w-24 p-1 placeholder:text-gray-400"
                        />
                    </div>
                </div>
            </div>

        </div>
        <div className="w-full flex justify-center">
            <button 
                onClick={ () => (calculateFinal()) } 
                className="font-medium bg-azu text-white w-[160px] hover:scale-105"
            >
                    CALCULATE
            </button>
        </div>
        <div className="mt-8 w-full flex flex-col justify-center gap-4 items-center">
            <div>
                <p className="font-medium text-white w-[160px]"> Your final score: </p>
                <div className="bg-background text-mareloEscuro font-medium text-center w-[160px] min-w-[185px]">
                { !isNaN(final ?? NaN)? final?.toFixed(2) : errMessage }
                </div>
            </div>
            <div>
                { (final && final > 70) && <Image className="w-24 h-24" src={passou} alt="Final photo"/>  }
                { (final && final < 70) && <Image className="w-24 h-24" src={selascou} alt="Final photo"/>  }
            </div>
        </div>
        </div>

    
  )
};

export default BMI