import {
  InputLeftElement,
  InputRightElement,
  Button as RPButton,
  Input as RPInput,
  InputGroup as RPInputGroup,
  Text,
} from "@redpanda-data/ui";
import { CopyIcon, EyeIcon, SearchIcon, TrashIcon } from "lucide-react";
import {
  Button as NewButton,
  Group as NewGroup,
  Input as NewInput,
  InputStart
} from "@blairwitch/proposed-ui";
import { Button, Input, Label } from "ui-registry";

const GroupDemo = () => {
  return (
    <div className="p-10 gap-6 flex">
      <div className="flex flex-col gap-4 basis-1/3">
        <h2 className="text-2xl">RP UI</h2>
        <Text variant="label">User</Text>
        <RPInputGroup>
          <InputLeftElement>
            <SearchIcon size={15} />
          </InputLeftElement>
          <RPInput placeholder="John Doe" />
          <InputRightElement width="4.5rem">
            <RPButton colorScheme="red">Submit</RPButton>
          </InputRightElement>
        </RPInputGroup>
      </div>
      <div className="flex flex-col gap-6 basis-1/3">
        <h2 className="text-2xl">UI Registry</h2>
        <div className="flex flex-col gap-1.5">
          <Label>User</Label>
          <div className="flex relative items-center">
            <Input
              placeholder="John Doe"
              className="rounded-r-none"
              style={{
                paddingLeft: 32,
              }}
            />
            <SearchIcon
              size={15}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <Button className="rounded-l-none">Submit</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 basis-1/3">
        <h2 className="text-2xl">Proposed</h2>
        <div className="flex flex-col gap-3">
          <NewInput
            placeholder="John Doe"
            suffix={<NewButton>Submit</NewButton>}
            label="User"
          >
            <InputStart>
              <SearchIcon size={15} />
            </InputStart>
          </NewInput>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-gray-400 uppercase">
            Input with Button in Group
          </p>
          <NewGroup attached>
            <NewInput placeholder="John Doe" start={<SearchIcon size={15} />} />
            <NewButton>Submit</NewButton>
          </NewGroup>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-gray-400 uppercase">
            Input in a Group with a Button
          </p>
          <NewGroup
            attached
            suffix={
              <NewButton size="icon">
                <TrashIcon size={15} />
              </NewButton>
            }
          >
            <NewInput label="Key" />
            <NewInput
              label="Value"
              type="password"
              defaultValue="fdfsdfds"
              end={
                <NewButton
                  className="cursor-pointer"
                  variant="ghost"
                  size="icon"
                >
                  <EyeIcon size={15} />
                </NewButton>
              }
              suffix={
                <NewButton
                  variant="secondary"
                  size="icon"
                  className="cursor-pointer"
                >
                  <CopyIcon size={15} />
                </NewButton>
              }
            />
          </NewGroup>
        </div>
      </div>
    </div>
  );
};
export default GroupDemo;
