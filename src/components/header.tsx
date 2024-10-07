import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React from "react";

interface IHeader{
    op1?: string,
    op2?: string,
    op3?: string;
}

/* export const Menu = ({ op1, op2, op3, op4 }{
    op1: string, 
    op2: string,
    op3: String,
    op4: string
}) => { return... */

// export const Menu: React.FC<IMenu> = ({ op1, op2, op3, op4 }) => {

export const Header = ({ op1, op2, op3 }: IHeader ) => {
    return(
        <>
        <nav className="font-semibold flex flex-row flex-wrap gap-5 bg-marelo justify-center p-3 font-karlaFont h-fit md:h-[7vh]">
          <Link href={ROUTES.home} className="font-semibold hover:cursor-pointer hover:bg-azu hover:text-white text-center h-8 min-w-24 py-1 px-2 text-foreground bg-mareloClaro">{op1}</Link>
          <Link href={ROUTES.imc} className="font-semibold hover:cursor-pointer hover:bg-azu hover:text-white text-center h-8 min-w-24 py-1 px-2 text-foreground bg-mareloClaro">{op2}</Link>
          <Link href={ROUTES.average} className="font-semibold hover:cursor-pointer hover:bg-azu hover:text-white text-center h-8 min-w-24 py-1 px-2 text-foreground bg-mareloClaro">{op3}</Link>
        </nav>
        </>
    )
}