/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useReducer, useRef } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { For, HStack, Stack } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
// import Demo2 from "@/components/elements/demo/Demo2";
import { formReduser, INITIAL_STATE, StatusType } from "@/store/reducer.state";

export const Route = createLazyFileRoute("/(demo)/reducer")({
  component: () => <div></div>,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function RouteComponent() {
  const [formState, dispatch] = useReducer(formReduser, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement>(null);

  const changeForm = () => {
    const statusArr: StatusType[] = [];
    const el = formRef.current;
    if (!el) return;
    for (const i in [0, 1, 2]) {
      const obj = el[i];
      if ("checked" in obj) {
        if (obj.checked) {
          // @ts-ignore
          statusArr.push(obj.name);
        }
      }
    }
    dispatch({
      type: "SET_FLAG",
      payload: statusArr,
    });
  };

  return (
    <div className="p-2">
      <form onChange={changeForm} ref={formRef}>
        <HStack align="flex-start">
          <For each={["available", "pending", "sold"]}>
            {(variant) => (
              <Stack align="flex-start" flex="1" key={variant}>
                <Checkbox variant={"subtle"} name={variant}>
                  {variant}
                </Checkbox>
              </Stack>
            )}
          </For>
        </HStack>
      </form>
      {/* <Demo2 status={formState} /> */}
    </div>
  );
}
