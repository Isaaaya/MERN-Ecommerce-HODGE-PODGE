import React from "react";
import { useScreenSize } from "hooks/screenSize/useScreenSize";

const InstancesTableSkeleton = ({ colsCount, rowsCount }) => {
  const { screenSize } = useScreenSize();
  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          {[...Array(screenSize?.width < 768 ? 2 : colsCount)]
            .fill()
            .map((_, index) => (
              <th className="w-1 h-2 py-5 space-x-2 " key={index}>
                <div className="h-4 bg-gray-300 w-[50%] md:mx-auto rounded-sm" />
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(rowsCount || 5)].fill().map((_, index) => (
          <tr key={index} className="border-y odd:bg-gray-100/[0.7]">
            {[...Array(screenSize?.width < 768 ? 2 : colsCount)]
              .fill()
              .map((_, index) => (
                <td className="py-6" key={index}>
                  <div className="h-3 bg-gray-300 w-[60%] md:mx-auto rounded-sm" />
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InstancesTableSkeleton;
