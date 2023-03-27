import React from "react";

function DropdownButton({name,list,handleChange}) {
  return (
    <div >
      <div class="dropdown inline-block relative ">
        <button class=" text-xl text-items-centre h-10 w-15 bg-red-700 text-white rounded-sm shadow-x1 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center bg-green-500">
          <span class="mr-1">{name}</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
          {list.map((item) => {
            return (
              <li
                class="rounded-sm bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                onClick={(e) => handleChange(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DropdownButton;
