import HomePage from "@/components/home";
import { Flex } from "@chakra-ui/react";


export default function Home() {  

  return (
    <Flex flexDirection={'column'} b>
      <HomePage/>
    </Flex>
  );
}
