import { Container, Flex } from '@mantine/core';
import config from '@/config/projectConfig.json';
import { useDisclosure } from '@mantine/hooks';
import NavBarContacts from './NavBarContacs';
import ChatChannel from './ChatChannel';

function ChatLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Container h={"96svh"} bg="blue" fluid p={0}>
      <Flex h={"100%"} w={"100%"} p={0} pt={0}>
        <NavBarContacts/>
        
        <ChatChannel/>
      </Flex>
    </Container>
  );
}

export default ChatLayout;