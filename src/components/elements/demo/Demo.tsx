import { Button } from "@/components/ui/button";
import { useTestStore } from "@/store/testStore";
import { HStack, Text } from "@chakra-ui/react";

const Demo = () => {
  const { bears, increasePopulation, removeAllBears } = useTestStore();

  return (
    <>
      <Text>Медведи: {bears}</Text>
      <HStack>
        <Button onClick={increasePopulation}>Добавь медведя</Button>
        <Button variant={"outline"} onClick={removeAllBears}>
          Удалить всех
        </Button>
      </HStack>
    </>
  );
};
export default Demo;
