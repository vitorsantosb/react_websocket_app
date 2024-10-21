import { Avatar, Divider, Flex, Text } from '@mantine/core';
import PropTypes from 'prop-types';
import config from '@/config/projectConfig.json';


export function MessageHeader({ userData, headerImg }) {
  return (
    <Flex h={'58px'} w="100%" style={{
      backgroundColor: config.colors.chat.message_header.background_color,
      borderColor: config.colors.chat.message_header.border_color,
      border: config.colors.chat.message_header.border_config,
    }}>
      <Flex direction={'row'} align={'center'}>
        <Avatar
          src={headerImg}
          w={'50px'}
          h={'50px'}
          radius={'xl'}
          alt={'message_author'}
        />
        <Flex pb={"0.2rem"} direction={'column'}>
          <Text p={0} pb={0} size={"md"} >
            {userData.name}
          </Text>
          <Text p={0} pt={0} c="dimmed" size="xs">
            {userData.email}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

MessageHeader.propTypes = {
  userData: PropTypes.object,
  headerImg: PropTypes.string,
};

export default MessageHeader;
