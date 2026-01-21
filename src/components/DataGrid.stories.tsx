import DataGrid from "./DataGrid";

export default {
  title: "Components/DataGrid",
  component: DataGrid,
};

const sampleColumns = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
];

const sampleRows = [
  { id: 1, name: "Bava", email: "bava@gmail.com" },
  { id: 2, name: "Ravi", email: "ravi@gmail.com" },
  { id: 3, name: "Anil", email: "anil@gmail.com" },
];

export const Default = {
  args: {
    columns: sampleColumns,
    rows: sampleRows,
    pageSize: 2,
  },
};
