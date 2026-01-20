import { DataGrid } from "./components/DataGrid";
import type { RowData } from "./components/DataGrid";

const sampleData: RowData[] = [
  { id: 1, name: "John Doe", age: 28, city: "New York" },
  { id: 2, name: "Jane Smith", age: 34, city: "Los Angeles" },
  { id: 3, name: "Alice Brown", age: 45, city: "Chicago" },
  { id: 4, name: "Bob Johnson", age: 22, city: "Houston" },
  { id: 5, name: "Charlie Wilson", age: 31, city: "Phoenix" },
  { id: 6, name: "Emily Davis", age: 29, city: "Philadelphia" },
  { id: 7, name: "Frank Miller", age: 50, city: "San Antonio" },
];

function App() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Data Grid Component</h1>
      <DataGrid data={sampleData} />
    </div>
  );
}

export default App;