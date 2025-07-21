import { Button as RPButton, Input as RPInput, Select as RPSelect } from "@redpanda-data/ui";
import { Button, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "ui-registry";
import { Button as NewButton, Input as NewInput, Select as NewSelect } from "../../../packages/proposed-ui/dist";

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Orange",
    value: "orange",
  },
];

const placeholder = "Select a color...";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">UI Libraries Comparison</h1>
        
        <div className="grid grid-cols-4 gap-4 items-start">
          {/* Header row */}
          <div className="font-semibold text-lg">Component</div>
          <div className="font-semibold text-lg text-center bg-white p-4 rounded-lg shadow-sm">Redpanda UI</div>
          <div className="font-semibold text-lg text-center bg-white p-4 rounded-lg shadow-sm">UI Registry</div>
          <div className="font-semibold text-lg text-center bg-white p-4 rounded-lg shadow-sm">Proposed UI</div>
          
          {/* Button row */}
          <div className="font-medium text-gray-700 py-4">Button</div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <RPButton>Click me</RPButton>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <Button>Click me</Button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <NewButton start="s" end="e">Click me</NewButton>
          </div>
          
          {/* Select row */}
          <div className="font-medium text-gray-700 py-4">Select</div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <RPSelect options={options} placeholder={placeholder} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option, i) => (
                    <SelectItem key={`${option.value}-${i}`} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <NewSelect options={options} placeholder={placeholder} />
          </div>
          
          {/* Input row */}
          <div className="font-medium text-gray-700 py-4">Input</div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <RPInput placeholder="Type something..." />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <Input placeholder="Type something..." />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <NewInput placeholder="Type something..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
