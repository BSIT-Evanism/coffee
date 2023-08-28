import { useState } from "react";

const NavBar = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((value) => value += 1)

  }


  return (
    <div className="flex group sticky top-0 left-0 z-50 overflow-x-hidden justify-between p-5 m-5 border-solid border-2 w-screen border-black bg-[#fff4e6] m-2 rounded-full hover:border-dashed hover:bg-[#be9b7b] transition-all duration-500 ease-in-out">
      <svg
        className="fill-black group-hover:fill-white transition-all duration-300 ease-in-out"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_102_7"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <rect width={24} height={24} fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_102_7)">
          <path d="M4 21V19H20V21H4ZM8 17C6.9 17 5.95833 16.6083 5.175 15.825C4.39167 15.0417 4 14.1 4 13V3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V8C22 8.55 21.8042 9.02083 21.4125 9.4125C21.0208 9.80417 20.55 10 20 10H18V13C18 14.1 17.6083 15.0417 16.825 15.825C16.0417 16.6083 15.1 17 14 17H8ZM8 15H14C14.55 15 15.0208 14.8042 15.4125 14.4125C15.8042 14.0208 16 13.55 16 13V5H6V13C6 13.55 6.19583 14.0208 6.5875 14.4125C6.97917 14.8042 7.45 15 8 15ZM18 8H20V5H18V8Z" />
        </g>
      </svg>
      <h1 className="font-['Pacifico'] group-hover:text-white transition-all duration-500 ease-in-out">
        Coffee Stain {num}
      </h1>
      <nav>
        <ul className="flex gap-4 ">
          <li className="hover:text-white transition-all duration-300 ease-in">
            Projects
          </li>
          <li className="hover:text-white transition-all duration-300 ease-in">
            Skills
          </li>
          <li className="hover:text-white transition-all duration-300 ease-in">
            <a onClick={increment}>Contacts</a>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default NavBar;
