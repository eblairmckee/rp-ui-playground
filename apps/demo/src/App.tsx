import { Button as RPButton } from "@redpanda-data/ui";
import { Button as NewButton } from "proposed-ui";
import { Button } from "ui-registry";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          UI Libraries Demo
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Redpanda UI</h2>
            <div className="flex flex-col gap-4">
              <RPButton>Click me</RPButton>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">UI Registry</h2>
            <div className="flex flex-col gap-4">
              <Button>Click me</Button>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Proposed UI</h2>
            <div className="flex flex-col gap-4">
              <NewButton>Click me</NewButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
