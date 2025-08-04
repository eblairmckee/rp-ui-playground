import { Button as RPButton, Input as RPInput, Select as RPSelect } from "@redpanda-data/ui";
import { ChevronDown, Search } from "lucide-react";
import { Button as NewButton, Input as NewInput, Select as NewSelect } from "@blairwitch/proposed-ui";
import { useState } from "react";
import { Button, Input, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "ui-registry";

// Component configuration types
type ComponentType = "button" | "input" | "select";

// Define all possible variants and sizes across all libraries
const componentConfigs = {
  button: {
    variant: {
      label: "Variant",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link", "solid", "unstyled"],
    },
    size: {
      label: "Size",
      options: ["xs", "sm", "default", "lg", "icon"],
    },
  },
  input: {
    variant: {
      label: "Variant",
      options: ["default", "outline", "filled", "flushed", "unstyled"],
    },
    size: {
      label: "Size",
      options: ["sm", "default", "lg"],
    },
  },
  select: {
    variant: {
      label: "Variant",
      options: ["default", "outline", "filled", "flushed", "unstyled"],
    },
    size: {
      label: "Size",
      options: ["sm", "default", "lg"],
    },
  },
} as const;

// Variant and size mappings for different libraries
const mappers = {
  redpanda: {
    button: {
      variant: (variant: string) => {
        const map: Record<string, string> = {
          default: "solid",
          destructive: "solid", // closest equivalent
          outline: "outline",
          secondary: "outline", // closest equivalent
          ghost: "ghost",
          link: "link",
          solid: "solid",
          unstyled: "unstyled",
        };
        return map[variant] || "solid";
      },
      size: (size: string) => {
        const map: Record<string, string> = {
          xs: "xs",
          sm: "sm", 
          default: "md",
          lg: "lg",
          icon: "sm", // fallback for icon
        };
        return map[size] || "md";
      },
    },
    input: {
      variant: (variant: string) => {
        const map: Record<string, string> = {
          default: "outline",
          outline: "outline",
          filled: "filled",
          flushed: "flushed",
          unstyled: "unstyled",
        };
        return map[variant] || "outline";
      },
      size: (size: string) => {
        const map: Record<string, string> = {
          sm: "sm",
          default: "md", 
          lg: "lg",
        };
        return map[size] || "md";
      },
    },
    select: {
      variant: (variant: string) => {
        const map: Record<string, string> = {
          default: "outline",
          outline: "outline",
          filled: "filled",
          flushed: "flushed",
          unstyled: "unstyled",
        };
        return map[variant] || "outline";
      },
      size: (size: string) => {
        const map: Record<string, string> = {
          sm: "sm",
          default: "md",
          lg: "lg", 
        };
        return map[size] || "md";
      },
    },
  },
  // Registry and Proposed use the same variant/size names as our unified system
  registry: {
    button: {
      variant: (variant: string) => {
        const map: Record<string, string> = {
          default: "default",
          destructive: "destructive",
          outline: "outline",
          secondary: "secondary",
          ghost: "ghost",
          link: "link",
          solid: "default", // map to closest equivalent
          unstyled: "ghost", // map to closest equivalent
        };
        return map[variant] || "default";
      },
      size: (size: string) => size === "default" ? undefined : size,
    },
    input: {
      variant: (variant: string) => variant, // Registry input doesn't have strong variant support
      size: (size: string) => size,
    },
    select: {
      variant: (variant: string) => variant, // Registry select doesn't have strong variant support
      size: (size: string) => size === "default" ? undefined : size,
    },
  },
  proposed: {
    button: {
      variant: (variant: string) => {
        const map: Record<string, string> = {
          default: "default",
          destructive: "destructive",
          outline: "outline",
          secondary: "secondary",
          ghost: "ghost",
          link: "link",
          solid: "default", // map to closest equivalent
          unstyled: "ghost", // map to closest equivalent
        };
        return map[variant] || "default";
      },
      size: (size: string) => size === "default" ? undefined : size,
    },
    input: {
      variant: (variant: string) => variant, // Proposed input doesn't have strong variant support
      size: (size: string) => size,
    },
    select: {
      variant: (variant: string) => variant, // Proposed select doesn't have strong variant support
      size: (size: string) => size,
    },
  },
};

// Configuration Controls Component
function ConfigurationControls({
  componentType,
  config,
  onConfigChange,
}: {
  componentType: ComponentType;
  config: { variant: string; size: string };
  onConfigChange: (property: "variant" | "size", value: string) => void;
}) {
  const componentOptions = componentConfigs[componentType];

  return (
    <div className="flex gap-2">
      <NewSelect
        value={config.variant}
        defaultValue="default"
        onValueChange={(value) => onConfigChange("variant", value)}
        options={componentOptions.variant.options.map((opt) => ({
          label: opt,
          value: opt,
        }))}
      />
      <NewSelect
        value={config.size}
        defaultValue="default"
        onValueChange={(value) => onConfigChange("size", value)}
        options={componentOptions.size.options.map((opt) => ({
          label: opt,
          value: opt,
        }))}
      />
    </div>
  );
}

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
  // State for component configurations
  const [buttonConfig, setButtonConfig] = useState({ variant: "default", size: "default" });
  const [inputConfig, setInputConfig] = useState({ variant: "default", size: "default" });
  const [selectConfig, setSelectConfig] = useState({ variant: "default", size: "default" });

  const updateConfig = (componentType: ComponentType, property: "variant" | "size", value: string) => {
    if (componentType === "button") {
      setButtonConfig((prev) => ({ ...prev, [property]: value }));
    } else if (componentType === "input") {
      setInputConfig((prev) => ({ ...prev, [property]: value }));
    } else if (componentType === "select") {
      setSelectConfig((prev) => ({ ...prev, [property]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">UI Libraries Comparison</h1>

        <div className="grid grid-cols-4 gap-4 items-start">
          {/* Header row */}
          <div className="font-semibold text-lg" />
          <div className="font-semibold text-lg text-center">Redpanda UI</div>
          <div className="font-semibold text-lg text-center">UI Registry</div>
          <div className="font-semibold text-lg text-center">Proposed UI</div>

          {/* Button row */}
          <div className="py-4">
            <div className="font-medium text-gray-700 mb-2">Button</div>
            <ConfigurationControls
              componentType="button"
              config={buttonConfig}
              onConfigChange={(property, value) => updateConfig("button", property, value)}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <RPButton 
              variant={mappers.redpanda.button.variant(buttonConfig.variant) as "ghost" | "outline" | "solid" | "link" | "unstyled"}
              size={mappers.redpanda.button.size(buttonConfig.size) as "xs" | "sm" | "md" | "lg"}
            >
              Click me
            </RPButton>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <Button 
              variant={mappers.registry.button.variant(buttonConfig.variant) as any} 
              size={mappers.registry.button.size(buttonConfig.size) as any}
            >
              Click me
            </Button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <NewButton
              variant={mappers.proposed.button.variant(buttonConfig.variant) as any}
              size={mappers.proposed.button.size(buttonConfig.size) as any}
              start={<Search />}
              end={<ChevronDown />}
            >
              Click me
            </NewButton>
          </div>

          {/* Select row */}
          <div className="py-4">
            <div className="font-medium text-gray-700 mb-2">Select</div>
            <ConfigurationControls
              componentType="select"
              config={selectConfig}
              onConfigChange={(property, value) => updateConfig("select", property, value)}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <RPSelect 
              options={options} 
              placeholder={placeholder} 
              variant={mappers.redpanda.select.variant(selectConfig.variant) as "outline" | "filled" | "flushed" | "unstyled"}
              size={mappers.redpanda.select.size(selectConfig.size) as "sm" | "md" | "lg"}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <Select>
              <SelectTrigger 
                className="w-full" 
                size={mappers.registry.select.size(selectConfig.size) as any}
              >
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
            <NewSelect options={options} placeholder={placeholder} start={<Search />} />
          </div>

          {/* Input row */}
          <div className="py-4">
            <div className="font-medium text-gray-700 mb-2">Input</div>
            <ConfigurationControls
              componentType="input"
              config={inputConfig}
              onConfigChange={(property, value) => updateConfig("input", property, value)}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <RPInput 
              placeholder="Type something..." 
              variant={mappers.redpanda.input.variant(inputConfig.variant) as "outline" | "filled" | "flushed" | "unstyled"}
              size={mappers.redpanda.input.size(inputConfig.size) as "sm" | "md" | "lg"}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <Input
              placeholder="Type something..."
              className={inputConfig.size === "sm" ? "h-8 text-sm" : inputConfig.size === "lg" ? "h-10 text-base" : ""}
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <NewInput
              start={<Search size={15} />}
              loading
              placeholder="Type something..."
              className={inputConfig.size === "sm" ? "h-8 text-sm" : inputConfig.size === "lg" ? "h-10 text-base" : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
