import React, { useState, useMemo } from "react";

export interface RowData {
  id: number;
  name: string;
  age: number;
  city: string;
}

interface DataGridProps {
  data: RowData[];
}

export const DataGrid: React.FC<DataGridProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return data.slice(start, start + rowsPerPage);
  }, [data, currentPage]);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-full border border-gray-300"
        role="table"
        aria-label="Accessible data grid"
      >
        <thead className="bg-gray-100">
          <tr role="row">
            <th className="px-4 py-2 text-left" role="columnheader">ID</th>
            <th className="px-4 py-2 text-left" role="columnheader">Name</th>
            <th className="px-4 py-2 text-left" role="columnheader">Age</th>
            <th className="px-4 py-2 text-left" role="columnheader">City</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id} role="row" className="even:bg-gray-50 hover:bg-gray-100">
              <td className="px-4 py-2" role="cell">{row.id}</td>
              <td className="px-4 py-2" role="cell">{row.name}</td>
              <td className="px-4 py-2" role="cell">{row.age}</td>
              <td className="px-4 py-2" role="cell">{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          &lt;
        </button>
        <span aria-live="polite">Page {currentPage} of {totalPages}</span>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};