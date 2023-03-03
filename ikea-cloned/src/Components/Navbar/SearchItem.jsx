import { Badge, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SearchItem({
  image1,
  title,
  id,
  setDisplay,
}) {
  const nav = useNavigate();

  return (
    <Flex
      cursor={"pointer"}
      _hover={{ bg: "gainsboro" }}
      borderRadius={2}
      w={"95%"}
      borderBottom={"10px solid gainsboro"}
      maxH={"100px"}
      padding={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"auto"}
      onClick={() => {
        setDisplay(false);
        nav("/chairproducts/" + id);
      }}
    >
      <HStack gap={4}>
        <Image
          src={image1}
          w={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
        ></Image>
        <Text
          color={"grey"}
          fontSize={{ base: "12px", sm: "14px", md: "14px", lg: "16px" }}
        >
          {title}
        </Text>
      </HStack>
      <Badge colorScheme={"orange"}>table</Badge>
    </Flex>
  );
}
