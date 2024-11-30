import Demo2 from "@/components/demo/Demo2";
import { Checkbox } from "@/components/ui/checkbox";

import { For, HStack, Stack, Text } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ChangeEvent, FormEvent, useState } from "react";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const [value, setValue] = useState(["available"]);
  const changeBox =
    (status: string) =>
    (event: FormEvent<HTMLLabelElement> & ChangeEvent<HTMLInputElement>) => {
      console.log(status);
      setValue((state) =>
        event.target.checked
          ? Array.from(new Set([...state, status]))
          : [...state.filter((v) => v !== status)]
      );
    };
  return (
    <div className="p-2">
      <HStack align="flex-start">
        <For each={["available", "pending", "sold"]}>
          {(variant) => (
            <Stack align="flex-start" flex="1" key={variant}>
              <Text>{variant}</Text>
              <Checkbox
                defaultChecked
                // variant={"subtle"}
                // value={variant}
                onChange={changeBox(variant)}
              >
                {variant}
              </Checkbox>
            </Stack>
          )}
        </For>
      </HStack>
      <Demo2 status={value} />
    </div>
  );
}
