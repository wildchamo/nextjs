"use client";
import Image from "next/image";
import { useState } from "react";

const AccordionTableItem = ({ section, isOpen, onToggle }) => {
  const columnTitles = Object.entries(section.columnTitles);

  return (
    <div className="border border-mutedForeground/50">
      <div
        className={`bg-background p-4 cursor-pointer flex justify-between items-center ${
          isOpen && "border-b border-mutedForeground/50"
        }`}
        onClick={onToggle}
      >
        <h2 className="text-xl font-bold text-tertiary">
          {section.accordionSection}
        </h2>
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="#306B12"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {isOpen && (
        <div className="bg-background p-4 rounded-xl text-mutedForeground">
          <div className="flex justify-center items-center mb-4">
            <Image
              className="object-cover h-auto w-auto"
              height={150}
              width={150}
              src={section.tipoVehiculo.imageSrc}
              alt="vehicle_image"
            />
          </div>
          <table className="w-full border border-mutedForeground/50">
            <thead className="border border-mutedForeground/50">
              <tr className="bg-mutedForeground/10">
                {columnTitles.slice(1).map(([columnName, columnTitle]) => (
                  <th
                    key={columnName}
                    className="py-2 text-center border border-mutedForeground/50"
                  >
                    {columnTitle}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.cilindraje &&
                section.cilindraje.map((_, rowIndex) => (
                  <tr
                    key={`row_${rowIndex}`}
                    className={`${
                      rowIndex % 2 === 0
                        ? "bg-background"
                        : "bg-mutedForeground/10"
                    } bg-background`}
                  >
                    {columnTitles.slice(1).map(([columnName]) => (
                      <td
                        key={`${columnName}_${rowIndex}`}
                        className="text-center py-2 border border-mutedForeground/50"
                      >
                        {section[columnName] && section[columnName][rowIndex]}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const AccordionTable = ({ accordionData }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    setOpenItem((prevItem) => (prevItem === index ? null : index));
  };

  return (
    <div className="w-full my-5">
      {accordionData.map((section, index) => (
        <AccordionTableItem
          key={index}
          section={section}
          isOpen={index === openItem}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionTable;
