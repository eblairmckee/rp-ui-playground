import {
  InputLeftElement,
  InputRightElement,
  Button as RPButton,
  Input as RPInput,
  InputGroup as RPInputGroup,
} from "@redpanda-data/ui";
import { SearchIcon, TrashIcon } from "lucide-react";
import {
  Button as NewButton,
  Group as NewGroup,
  Input as NewInput,
} from "proposed-ui";
import { Button, Input } from "ui-registry";

const GroupDemo = () => {
  return (
    <div className="p-10 gap-4 flex">
      <div className="flex flex-col gap-4 basis-1/3">
        <h2>Chakra</h2>
        <RPInputGroup>
          <InputLeftElement>
            <SearchIcon size={15} />
          </InputLeftElement>
          <RPInput placeholder="Upload a screenshot..." />
          <InputRightElement width="4.5rem">
            <RPButton colorScheme="red">Upload</RPButton>
          </InputRightElement>
        </RPInputGroup>
      </div>
      <div className="flex flex-col gap-4 basis-1/3">
        <h2>ShadCN</h2>
        <div className="flex relative items-center">
          <Input
            placeholder="Upload a screenshot..."
            className="rounded-r-none"
            style={{
              paddingLeft: 32,
            }}
          />
          <SearchIcon
            size={15}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <Button className="rounded-l-none">Upload</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 basis-1/3">
        <h2>Proposed</h2>
        <NewInput
          placeholder="Upload a screenshot..."
          start={<SearchIcon size={15} />}
          suffix={<NewButton>Upload</NewButton>}
        />
        <NewGroup
          attached
          suffix={
            <NewButton size="icon">
              <TrashIcon size={15} />
            </NewButton>
          }
        >
          <NewInput label="Key" />
          <NewInput label="Value" />
        </NewGroup>
      </div>
    </div>
  );
};
export default GroupDemo;
