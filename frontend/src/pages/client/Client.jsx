import { useEffect, useState } from "react";
import axios from "axios";
import "./Client.scss";

const Client = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecord = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get(
        "http://localhost:5000/api/records/get",
        config
      );

      setRecords(response.data);
    };

    fetchRecord();
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-[#192435] text-[32px] font-black leading-[1.31] mt-6 mb-3 overflow-hidden text-center overflow-ellipsis whitespace-nowrap">
        MICHAEL KORN
      </h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 min-w-full sm:px-6 lg:px-8">
            <div className="max-h-[600px] h-full overflow-auto">
              <table className="min-w-full">
                <thead className="border border-collapse border-[#c8ccd2] sticky top-0">
                  <tr className="bg-gray-200">
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Legal Business Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-24"
                    >
                      Number of W-2 Employees
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Industry
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records ? (
                    records.length === 0 ? (
                      <tr className="border border-collapse border-[#c8ccd2]">
                        <td colSpan="7">
                          <div className="flex items-center flex-col max-h-full justify-center p-4 h-96">
                            <svg width="80" height="80" viewBox="0 0 80 80">
                              <g fill="none" fillRule="evenodd">
                                <path d="M0 0h80v80H0z"></path>
                                <g
                                  stroke="#CBCCCD"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                >
                                  <path d="M75 21.5V30M75 37v30.5a1.5 1.5 0 0 1-1.5 1.5h-67A1.5 1.5 0 0 1 5 67.5V41M5 36.264v-2.57M13 33h12M13 46h12M13 59h12"></path>
                                  <g>
                                    <path d="M34 33h12M34 46h12M34 59h12"></path>
                                  </g>
                                  <g>
                                    <path d="M55 33h12M55 46h12M55 59h12"></path>
                                  </g>
                                  <path
                                    fill="#CBCCCD"
                                    d="M6.5 12h67a1.5 1.5 0 0 1 1.5 1.5V22H5v-8.5A1.5 1.5 0 0 1 6.5 12z"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                            <p className="mt-6 mb-4 text-center">
                              No data to show with current filters
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      records.map((item, index) => {
                        return (
                          <tr
                            key={`record_${index}`}
                            className="border border-collapse border-[#c8ccd2] even:bg-white-100 odd:bg-blue-100"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {`${item.firstName} ${item.lastName}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.phoneNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.legalBusinessName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.numberOfW2}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.industry}
                            </td>
                          </tr>
                        );
                      })
                    )
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
