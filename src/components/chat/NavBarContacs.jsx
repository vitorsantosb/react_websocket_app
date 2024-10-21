import { Avatar, Box, Divider, Flex, Group, ScrollArea, Stack, Text } from '@mantine/core';
import { UserButton } from './UserButton/UserButton';

export function NavBarContacts() {
  const usersList = [
    { username: 'Nome do usuário', avatarURL: 'https://i.pravatar.cc/300', email: 'XbLwO@example.com' },
    { username: 'Nome do usuário', avatarURL: 'https://i.pravatar.cc/300', email: 'XbLwO@example.com' },
    { username: 'Nome do usuário', avatarURL: 'https://i.pravatar.cc/300', email: 'XbLwO@example.com' },
    { username: 'Nome do usuário', avatarURL: 'https://i.pravatar.cc/300', email: 'XbLwO@example.com' },
    { username: 'Nome do usuário', avatarURL: 'https://i.pravatar.cc/300', email: 'XbLwO@example.com' },
    { username: 'Nome do usuário', avatarURL: 'https://i.pravatar.cc/300', email: 'XbLwO@example.com' },
    { username: 'Nome do usuário', avatarURL: 'https://i.pravatar.cc/300', email: 'XbLwO@example.com' },
    { username: 'Nome do usuário', avatarURL: 'https://i.pravatar.cc/300', email: 'XbLwO@example.com' },
  ];
  const existingChats = usersList?.map((userData, index) => (
    <UserButton
      handleRoomOpen={false}
      key={index}
      userData={userData}
      unreadMessagesCount={0}
    />
  ));
  
  
  return (
    <Flex direction={'column'} w={300}>
      <Flex direction={'column'} w={'100%'} h={'100%'} style={{ background: 'white' }}>
        <Flex p={'1rem'} justify={'space-between'} align={'center'}>
          <Text fz={'1rem'}>Contatos</Text>
        </Flex>
        <Divider />
        <ScrollArea scrollbarSize={0} type="never" h={'100%'} w={'100%'}>
          {usersList && existingChats}
        </ScrollArea>
      </Flex>
    </Flex>
  );
}

export default NavBarContacts;
