# @blairwitch/proposed-ui

A collection of React components with advanced slot-based composition patterns, built on top of Radix UI and styled with Tailwind CSS.

## Installation

```bash
npm install @blairwitch/proposed-ui
# or
pnpm add @blairwitch/proposed-ui
# or 
bun add @blairwitch/proposed-ui
```

## Usage

### Basic Import

```tsx
import { Button, Input } from '@blairwitch/proposed-ui'

function MyComponent() {
  return (
    <div>
      <Button>Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  )
}
```

### Import Styles

```tsx
// Import the CSS styles in your app root
import '@blairwitch/proposed-ui/styles'
```

### Slot-based Composition

This library features advanced slot-based composition patterns:

```tsx
import { Button } from '@blairwitch/proposed-ui'
import { Search, Star } from 'lucide-react'

function SlotExample() {
  return (
    <div>
      {/* Button with start and end slots */}
      <Button 
        start={<Search className="size-4" />}
        end={<span className="text-xs">⌘K</span>}
      >
        Search
      </Button>
      
      {/* Input with slots */}
      <Input 
        placeholder="Enter email..."
        start={<Mail className="size-4" />}
        end="@company.com"
      />
    </div>
  )
}
```

## Components

- **Button** - Versatile button with slot-based composition
- **Input** - Flexible input with start/end slot support  
- **Label** - Accessible form labels
- **Select** - Dropdown select with slot composition
- **Form** - Form wrapper components
- **Group** - Component grouping utilities

## Custom Registry

You can also install individual components using the ShadCN CLI:

```bash
npx shadcn@latest add https://raw.githubusercontent.com/eblairmckee/rp-ui-playground/main/packages/proposed-ui/public/r/button.json
```

## Requirements

- React 18+
- Tailwind CSS (configured)

## License

MIT