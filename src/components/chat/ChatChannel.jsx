import { Flex, Box, BackgroundImage, Text, Textarea, Button } from '@mantine/core';
import { MessageHeader } from './MessageHeader';
import CustomTextArea from '@/components/shared/CustomTextArea/CustomTextArea.jsx';
import { useEffect, useRef, useState } from 'react';
import socket from '@/services/websocket/websocket.js';
import { IconArrowBigRight, IconArrowBigRightFilled } from '@tabler/icons-react';
import { useUser } from '../../providers/UserProvider';

export function ChatChannel() {
  const {socket} = useUser();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  const currentChannel = [{
    name: 'Flavinha Tsunami',
    email: 'flaviatsunami@gmail.com',
    avatarURL: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
  }];
  
  const currentHeader = currentChannel.map((channelMember, index) => {
    return <MessageHeader
      key={index} headerImg={channelMember.avatarURL}
      userData={{
        name: channelMember.name, email: channelMember.email,
      }}
    />;
  });
  
  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      socket.emit('message', {
        text: input,
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      setInput('');
    }
  };
  
  const scrollScreen = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  
  return (
    <Flex w="100%" h="100%" pl="0" pr="0">
      <BackgroundImage
        src={'https://wallpaper.forfun.com/fetch/d2/d2e37f032ae78703b942d1f12a4b1d77.jpeg'} w={'100%'}
        h={'100%'}>
        {
          currentHeader
        }
        {
        
        }
        <Flex
          style={{
            bottom: 20,
            position: 'absolute',
          }}>
          <form onSubmit={sendMessage}>
            <Flex justify={'space-between'}>
              <Textarea
                w={"100%"}
                h={"50px"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeHolder={'Digite sua mensagem aqui!'}
              />
              <Button
                leftSection={
                  <IconArrowBigRight color={'white'} size={'34'} />
                }
                type="submit"
                style={{
                  border: 'none',
                }}
                w={'40px'}
              >
              </Button>
            </Flex>
          </form>
        </Flex>
      </BackgroundImage>
    </Flex>
  );
}

export default ChatChannel;
