import * as React from 'react';

// 1. import `ChakraProvider` component
import { ChakraProvider, Heading, Image, Text } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Image
        src="/assets/images/twitter-header-6.jpg"
        w="100%"
        h="150px"
      ></Image>
      <Heading as="h1">This a car!</Heading>
      <Heading as="h2" size="2xl">
        and this is a heading!
      </Heading>
      <Image src="/assets/images/car.jpg"></Image>
      <Text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          natus sed cupiditate iusto consequuntur fugit assumenda nam tempore
          placeat quo ad hic id, eos nulla obcaecati dolores! Animi, quasi
          fugiat?
        </p>
        <p>
          Corrupti id soluta aliquid, quidem rem cumque laborum atque, deserunt
          vero magni sit ullam maiores. Molestiae sequi ut vitae ipsa iusto
          cupiditate soluta. Nesciunt, dolore hic eos consequatur atque porro.
        </p>
        <p>
          Animi laboriosam, adipisci molestiae minima labore ducimus dolorum
          iusto, vero iste accusamus ex cupiditate sapiente, optio earum
          consequatur sequi blanditiis quis voluptatum quae sit et asperiores.
          Distinctio sed assumenda excepturi.
        </p>
      </Text>
    </>
  );
}
export default App;
