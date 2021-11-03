import { useState, FormEvent } from "react";
import {
  Flex,
  Stack,
  HStack,
  FormLabel,
  Button,
  Select,
} from "@chakra-ui/react";
// import { SubmitHandler, useForm } from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { Input } from "../../components/Form/Input";

interface CreatePetProps {
  name: string;
  owner: string;
  yearOfBirth: number;
  gender: boolean;
  size: string;
  breed: string;
  state: boolean;
}

const createPetSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Minimo 3 caracteres")
    .required("Precisa preencher este campo"),
  owner: yup.string().required("Precisa preencher este campo"),
  yearOfBirth: yup
    .number()
    .min(2000)
    .max(2021)
    .required("Precisa preencher este campo"),
  gender: yup.boolean().required("Precisa preencher este campo"),
  size: yup.string().required("Precisa preencher este campo"),
  breed: yup.string().required("Precisa preencher este campo"),
  state: yup.boolean().required("Precisa preencher este campo"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createPetSchema),
  });

  const { errors } = formState;

  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState(0);
  const [gender, setGender] = useState(true);
  const [size, setSize] = useState("");
  const [breed, setBreed] = useState("");
  const [state, setState] = useState(true);

  const [loading, setLoading] = useState(false);

  async function handleCreatePet(event: FormEvent) {
    event.preventDefault();

    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
      setLoading(true);
    });

    console.log(name);
    console.log(owner);
    console.log(yearOfBirth);
    console.log(gender);
    console.log(size);
    console.log(breed);
    console.log(state);

    setLoading(false);
  }

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
        onSubmit={handleCreatePet}
      >
        <Stack spacing="4">
          {/* ---------- Name ---------- */}
          <Input
            name="name"
            label="Nome Completo"
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={errors.name}
            // {...register("name")}
          />

          {/* ---------- Owner ---------- */}
          <Flex flexDirection="column">
            <FormLabel htmlFor="owner">Dono</FormLabel>
            <Select
              id="owner"
              size="lg"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: "gray.900",
              }}
              onChange={(event) => setOwner(event.target.value)}
              placeholder="Seleccione"
            >
              <option
                style={{ backgroundColor: "#171923" }}
                value="80009184988"
              >
                Leandro Cruz (80009184988)
              </option>
              <option
                style={{ backgroundColor: "#171923" }}
                value="11111111111"
              >
                Alexandra Laroca (11111111111)
              </option>
              <option
                style={{ backgroundColor: "#171923" }}
                value="22222222222"
              >
                Marcos Junill (22222222222)
              </option>
            </Select>
          </Flex>

          {/* ---------- Year of Birth ---------- */}
          <Input
            name="yearOfBirth"
            label="Ano de nascimento"
            value={yearOfBirth}
            onChange={(event) => setYearOfBirth(Number(event.target.value))}
          />

          {/* ---------- Gender ---------- */}
          <Flex flexDirection="column">
            <FormLabel htmlFor="gender">Gênero</FormLabel>
            <HStack>
              <Button
                id="gender"
                onClick={() => setGender(true)}
                colorScheme={gender ? "pink" : "gray"}
                color={gender ? "white" : "gray.800"}
                size="lg"
                width="100%"
              >
                Macho
              </Button>
              <Button
                id="gender"
                onClick={() => setGender(false)}
                colorScheme={!gender ? "pink" : "gray"}
                color={!gender ? "white" : "gray.800"}
                size="lg"
                width="100%"
              >
                Fêmea
              </Button>
            </HStack>
          </Flex>

          {/* ---------- Size ---------- */}
          <Flex flexDirection="column">
            <FormLabel htmlFor="size">Tamanho</FormLabel>
            <Select
              id="size"
              size="lg"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: "gray.900",
              }}
              onChange={(event) => setSize(event.target.value)}
            >
              <option style={{ backgroundColor: "#171923" }} value="big">
                Grande
              </option>
              <option style={{ backgroundColor: "#171923" }} value="medium">
                Médio
              </option>
              <option style={{ backgroundColor: "#171923" }} value="small">
                Pequeno
              </option>
            </Select>
          </Flex>

          {/* ---------- Breed ---------- */}
          <Flex flexDirection="column">
            <FormLabel htmlFor="breed">Raça</FormLabel>
            <Select
              id="breed"
              size="lg"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: "gray.900",
              }}
              onChange={(event) => setBreed(event.target.value)}
              placeholder="Seleccione"
            >
              <option style={{ backgroundColor: "#171923" }} value="pug">
                Pug
              </option>
              <option style={{ backgroundColor: "#171923" }} value="maltes">
                Maltês
              </option>
              <option style={{ backgroundColor: "#171923" }} value="buldogue">
                Buldogue
              </option>
              <option style={{ backgroundColor: "#171923" }} value="pit_bull">
                Pit Bull
              </option>
              <option
                style={{ backgroundColor: "#171923" }}
                value="pastor_alemao"
              >
                Pastor Alemão
              </option>
              <option style={{ backgroundColor: "#171923" }} value="labrador">
                Labrador
              </option>
              <option
                style={{ backgroundColor: "#171923" }}
                value="cocker_spaniel"
              >
                Cocker Spaniel
              </option>
              <option style={{ backgroundColor: "#171923" }} value="other">
                Outro..
              </option>
            </Select>
          </Flex>

          {/* ---------- State ---------- */}
          <Flex flexDirection="column">
            <FormLabel htmlFor="state">Estado</FormLabel>
            <HStack>
              <Button
                id="state"
                onClick={() => setState(true)}
                colorScheme={state ? "pink" : "gray"}
                color={state ? "white" : "gray.800"}
                size="lg"
                width="100%"
              >
                Ativo
              </Button>
              <Button
                id="state"
                onClick={() => setState(false)}
                colorScheme={!state ? "pink" : "gray"}
                color={!state ? "white" : "gray.800"}
                size="lg"
                width="100%"
              >
                Inativo
              </Button>
            </HStack>
          </Flex>
        </Stack>

        <Button
          type="submit"
          marginTop="24px"
          colorScheme="green"
          size="lg"
          isLoading={loading}
        >
          Criar
        </Button>
      </Flex>
    </Flex>
  );
}
