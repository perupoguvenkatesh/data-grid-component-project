import { useMemo } from "react";

function DataGrid({ rows = [], columns = [], pageSize = 5 }) {
  const visibleRows = useMemo(() => {
    return (rows || []).slice(0, pageSize);
  }, [rows, pageSize]);

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {visibleRows.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataGrid;
