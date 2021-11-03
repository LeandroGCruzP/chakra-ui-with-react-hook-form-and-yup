import { Flex, FormLabel, HStack, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface SelectProps {
  label: string;
  variable: boolean;
  setVariable: Dispatch<SetStateAction<boolean>>;
}

export function Select({ label, variable, setVariable }: SelectProps) {
  console.log(setVariable);
  console.log(variable);

  return (
    <Flex flexDirection="column">
      <FormLabel>{label}</FormLabel>
      <HStack>
        <Button
          onClick={() => {
            {
              setVariable;
            }
            true;
          }}
          colorScheme={{ variable } ? "pink" : "gray"}
          color={{ variable } ? "white" : "gray.800"}
          size="lg"
          width="100%"
        >
          Macho
        </Button>
        <Button
          onClick={() => {
            {
              setVariable;
            }
            false;
          }}
          colorScheme={!{ variable } ? "pink" : "gray"}
          color={!{ variable } ? "white" : "gray.800"}
          size="lg"
          width="100%"
        >
          Fêmea
        </Button>
      </HStack>
    </Flex>
  );
}
