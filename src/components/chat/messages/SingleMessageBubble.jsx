import config from '@/config/projectConfig.json';
import { Box, Stack, Text } from '@mantine/core';
import { FormatMessageWithLineBreaks } from '@/utils/chat.utils.js';
import { FormatDateForChat } from '@/utils/timestamp.js';
import PropTypes from 'prop-types';

function SingleMessageBubble({message, timestamp}){
  return (
    <Box
      bg={config.colors.chat.bubble.backgroundColor}
      p="sm"
      style={{
        color: 'white',
        maxWidth: '100%',
        display: 'inline-block',
        borderRadius: '15px 15px 0 15px',
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
      }}
    >
      <Stack>
        <Text style={{ whiteSpace: 'pre-line' }} mw={'60%'} c={config.colors.chat.bubble_without_avatar.text_color} fz={'0.9rem'} lh={'0.9rem'}>
          {FormatMessageWithLineBreaks(message)}
        </Text>
        <Text size="xs" c={config.colors.chat.bubble_without_avatar.text_color} align="right">
          {FormatDateForChat(timestamp)}
        </Text>
      </Stack>
    </Box>
  );
}

SingleMessageBubble.propTypes = {
  message: PropTypes.string,
  timestamp: PropTypes.number,
}

export default SingleMessageBubble;