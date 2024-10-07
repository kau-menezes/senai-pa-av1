interface ICard {
    name: string,
    description: string,
    id: string
}

export const Card = ( {name, description, id}:ICard ) => {
    return(
        <div className="flex flex-col justify-between h-fit text-background w-3/4 md:h-80 shadow-md md:w-[300px] md:max-w-[300px] lg:w-[350px]">
            <div className="bg-gradient-to-r from-purple-500 to-red-500 p-4 text-center">
                <h2 className="font-semibold text-xl">{name}</h2>
            </div>
            <div className="flex flex-col p-4 items-center">
                <p className="text-foreground p-8">{description}</p>
                <button className=" text-lg font-semibold bg-gradient-to-r from-purple-500 to-red-500 w-1/2 hover:scale-105">
                    <a 
                        href={`${id}`}
                    >
                        Read more!
                    </a>
                </button>
            </div>
        </div>
    )
}