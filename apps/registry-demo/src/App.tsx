import { useState } from 'react'
import { Button } from './components/button'
import { Input } from './components/input'
import { Search, User, Mail, Heart, Star } from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Registry Demo</h1>
        <p className="text-lg text-gray-600">
          Components from the <code>proposed-ui</code> custom registry
        </p>
      </div>

      {/* Button Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Button Components</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-center flex-wrap">
            <Button>Default Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          <div className="flex gap-4 items-center flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Heart className="size-4" /></Button>
          </div>

          {/* Slot-based Button Examples */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Slot-based Composition</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <Button start={<User className="size-4" />}>With Start Icon</Button>
              <Button end={<Star className="size-4" />}>With End Icon</Button>
              <Button 
                start={<Search className="size-4" />} 
                end={<span className="bg-gray-200 px-1 rounded text-xs">⌘K</span>}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Counter Example */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Interactive Example</h3>
            <Button 
              onClick={() => setCount((count) => count + 1)}
              start={count > 0 ? <Star className="size-4 text-yellow-500" /> : undefined}
            >
              Count is {count}
            </Button>
          </div>
        </div>
      </section>

      {/* Input Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Input Components</h2>
        <div className="space-y-4 max-w-md">
          <Input placeholder="Default input" />
          <Input 
            placeholder="Search..." 
            start={<Search className="size-4" />}
          />
          <Input 
            placeholder="Email address" 
            start={<Mail className="size-4" />}
            end={<span className="text-xs text-gray-500">@example.com</span>}
          />
          <Input 
            placeholder="With validation" 
            start={<User className="size-4" />}
            className="border-green-500"
          />
        </div>
      </section>

      {/* Registry Info */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Registry Information</h3>
        <p className="text-sm text-gray-600 mb-4">
          These components were installed from the custom registry:
        </p>
        <div className="space-y-2 text-sm font-mono bg-white p-4 rounded border">
          <div>✅ npx shadcn@latest add https://raw.githubusercontent.com/eblairmckee/rp-ui-playground/main/packages/proposed-ui/public/r/button.json</div>
          <div>✅ npx shadcn@latest add https://raw.githubusercontent.com/eblairmckee/rp-ui-playground/main/packages/proposed-ui/public/r/input.json</div>
          <div>✅ npx shadcn@latest add https://raw.githubusercontent.com/eblairmckee/rp-ui-playground/main/packages/proposed-ui/public/r/slot-utils.json</div>
          <div>✅ npx shadcn@latest add https://raw.githubusercontent.com/eblairmckee/rp-ui-playground/main/packages/proposed-ui/public/r/group-context.json</div>
        </div>
      </section>
    </div>
  )
}

export default App
