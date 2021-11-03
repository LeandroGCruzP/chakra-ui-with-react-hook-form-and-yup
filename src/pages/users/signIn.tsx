import { Flex, Button, Stack, FormLabel, Link } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";

export default function SignIn() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        backgroundColor="gray.800"
        padding="2rem"
        borderRadius="8px"
        flexDirection="column"
      >
        <Stack spacing="4">
          <Flex justifyContent="center">
            <FormLabel>SignIn</FormLabel>
          </Flex>

          <Input name="email" type="email" label="E-mail" />
          <Input name="Password" type="Password" label="Senha" />
        </Stack>
        <Button
          type="submit"
          marginTop="24px"
          marginBottom="24px"
          colorScheme="green"
          size="lg"
        >
          Entrar
        </Button>

        <Flex
          justifyContent="center"
          borderTopWidth="1px"
          paddingTop="12px"
          borderTopColor="gray.700"
        >
          <FormLabel fontSize="12px">
            ou crie sua conta{" "}
            <Link href="/users/create" color="green.300">
              aqui
            </Link>
          </FormLabel>
        </Flex>
      </Flex>
    </Flex>
  );
}
