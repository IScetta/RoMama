import { GiHamburgerMenu } from "react-icons/gi";

export default function Header (){
    return (
        <div className="flex flex-wrap justify-between items-center bg-cherryPink h-20 w-full px-4 ">
            <div className="text-5xl font-extrabold">
                <h1 className="font-display">RM</h1>
            </div>

            <div className="text-5xl">
                <GiHamburgerMenu />
            </div>
        </div>
    )
}