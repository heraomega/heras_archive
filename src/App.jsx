import { Search2Icon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  SimpleGrid,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Heading,
  Spacer,
} from "@chakra-ui/react";

import data from "../src/assets/data.json";
import { useState } from "react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(1);

  function openLink(link) {
    if (link === null) {
    }
  }

  return (
    <Box minH="100vh" minW="90vw" px="2.5em" bg="gray.300" py="2.5em">
      <HStack bg="white" minW="90vw" borderRadius="lg" shadow="lg">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.200" />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
      </HStack>
      <Divider my=".5em" />

      <SimpleGrid columns={5} gap="1.5em">
        {data.map((data, index) => {
          return (
            <Card
              onClick={() => {
                onOpen();
                setCurrentIndex(index);
              }}
              id={"Card" + index}
              bg="white"
              cursor="pointer"
              shadow="lg"
              _hover={{
                borderStyle: "solid",
                borderWidth: "5px",
                borderColor: "gray.400",
              }}
            >
              <CardHeader minH="5em">
                <Image src={data.IMG} />
              </CardHeader>
              <CardBody py={-1}>
                <Text>{data.BOOK_TITLE}</Text>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="90vw">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card direction="row" variant="outline">
              <Image
                objectFit="cover"
                boxSize="lg"
                src={data[currentIndex].IMG}
              />

              <Stack w="100%">
                <CardBody>
                  <Heading size="md">{data[currentIndex].BOOK_TITLE}</Heading>

                  <Text py="2">{data[currentIndex].Synopsis}</Text>

                  <Text py="1">Author : {data[currentIndex].AUTHOR}</Text>
                  <Text py="1">Chapters : {data[currentIndex].CHAPTERS}</Text>
                  <Text py="1">Extras : {data[currentIndex].EXTRAS}</Text>
                  <Text py="1">Genre : {data[currentIndex].GENRE}</Text>
                  <Text py="1">Timeline : {data[currentIndex].TIMELINE}</Text>

                  <HStack></HStack>
                </CardBody>

                <CardFooter>
                  <Spacer />
                  <Button
                    isDisabled={!data[currentIndex].Carrd}
                    mr="0.5em"
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => {
                      window.open(data[currentIndex].Carrd, "_blank");
                    }}
                  >
                    Open Cardd
                  </Button>
                  <Button
                    isDisabled={data[currentIndex].Eng_TL === null}
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => {
                      window.open(data[currentIndex].Eng_TL, "_blank");
                    }}
                  >
                    Go To Eng TL
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default App;
