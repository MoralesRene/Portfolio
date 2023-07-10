import { Link } from "react-scroll";

function OptionNav({name,id}) {
    return (
        <li className="cursor-pointer p-[5px] before:duration-300 relative before:absolute before:bg-cyan-800/60 before:z-10 before:w-0 before:hover:w-full before:h-full before:top-0 before:left-0">
            <Link
            activeClass="active"
            to={id}
            spy={true}
            smooth={true}
            offset={-20}
            duration={600}
            className="relative z-20 text-white"
            >
            {name}
            </Link>        
        </li>
    )
}

export default OptionNav