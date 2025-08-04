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
  Input as NewInput,
  InputStart as NewInputStart,
  InputRoot as NewInputRoot,
  Label as NewLabel,
  InputEnd as NewInputEnd,
  Group as NewGroup,
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
            <SearchIcon size={15} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Button className="rounded-l-none">Submit</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 basis-1/3">
        <h2 className="text-2xl">Proposed</h2>
        <div className="flex flex-col gap-3">
          <NewLabel>
            User
            <NewGroup attached>
              <NewInputRoot>
                <NewInput placeholder="John Doe">
                  <NewInputStart>
                    <SearchIcon size={15} />
                  </NewInputStart>
                </NewInput>
              </NewInputRoot>
              <NewButton>Submit</NewButton>
            </NewGroup>
          </NewLabel>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5">
            <NewLabel>
              Key
              <NewInputRoot>
                <NewInput />
              </NewInputRoot>
            </NewLabel>
            <NewLabel>
              Value
              <NewGroup attached>
                <NewInputRoot>
                  <NewInput type="password" defaultValue="fdfsdfds">
                    <NewInputEnd>
                      <NewButton variant="ghost" size="icon" className="cursor-pointer">
                        <EyeIcon size={15} />
                      </NewButton>
                    </NewInputEnd>
                  </NewInput>
                </NewInputRoot>
                <NewButton variant="secondary" size="icon" className="cursor-pointer">
                  <CopyIcon size={15} />
                </NewButton>
              </NewGroup>
            </NewLabel>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GroupDemo;
