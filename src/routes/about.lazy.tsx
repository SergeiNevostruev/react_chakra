import Demo2 from "@/components/demo/Demo2";

import { Radio, RadioGroup } from "@/components/ui/radio";
import { HStack } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const [value, setValue] = useState("available");

  return (
    <div className="p-2">
      <RadioGroup value={value} onValueChange={(e) => setValue(e.value)}>
        <HStack gap="6">
          <Radio value="available">available</Radio>
          <Radio value="pending">pending</Radio>
          <Radio value="sold">sold</Radio>
        </HStack>
      </RadioGroup>
      {/* <HStack align="flex-start">
        <For each={["available", "pending", "sold"]}>
          {(variant) => (
            <Stack align="flex-start" flex="1" key={variant}>
              <Text>{variant}</Text>
              <Checkbox
                defaultChecked
                variant={"subtle"}
                value={variant}
                {...register("status", {})}
              >
                {variant}
              </Checkbox>
            </Stack>
          )}
        </For>
      </HStack> */}
      <Demo2 status={[value]} />
    </div>
  );
}
