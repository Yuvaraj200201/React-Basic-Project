import React from "react";
import { FaUser, FaStar, FaCheckSquare } from "react-icons/fa"

const tableHead = [
  {
    headName: "Avatar",
    icon: <FaUser className="text-blue-600 md:h-8 md:w-8"/>
  },
  {
    headName: "Name",
    icon: <FaStar className="text-yellow-500 md:h-8 md:w-8"/>,
  },
  {
    headName: "Status",
    icon: <FaCheckSquare className="text-green-800 md:h-8 md:w-8"/>,
  },
];

const tableData = [
  {
    avatar: <FaUser className="text-orange-600 md:h-8 md:w-8"/>,
    name: "Alice",
    status: "Active",
  },
  {
    avatar: <FaUser className="text-orange-600 md:h-8 md:w-8"/>,
    name: "Bob",
    status: "Inactive",
  },
];

const Table = () => {
  return (
    <div className="container mx-auto sm:p-6 p-2">
      <h1 className="text-lg font-bold sm:text-2xl mb-7">
        📊<b>User Data</b>
      </h1>

      <table className="min-w-full border border-collapse">
        <thead>
          <tr>
            {tableHead.map((heading) => (
              <th
                key={heading.headName}
                className="border border-gray-900 px-1 sm:px-4 py-2 bg-gray-400 "
              >
                <span className="flex justify-center text-sm sm:text-lg items-center gap-1 sm:gap-3">{heading.icon} {heading.headName}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map((user, index) => (
            <tr className="text-center" key={index}>
              <td className="border border-gray-900 py-4 flex justify-center">
                {user.avatar}
              </td>
              <td className="border border-gray-900 text-sm sm:text-lg px-4 py-2 font-semibold font-serif">{user.name}</td>
              <td
                className={`border border-gray-900 px-4 py-2 font-semibold text-sm sm:text-lg ${
                  user.status == "Active" ? `text-green-600` : `text-red-600`
                }`}
              >
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
