import React from "react";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  rem,
  Indicator,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { colorWithSeed } from "@/utils/colorWithSeed";
import PropTypes from "prop-types";

export function UserButton({ handleRoomOpen, userData, unreadMessagesCount }) {
  return (
    <UnstyledButton
      w={"100%"}
      p={"1rem"}
      onClick={() => handleRoomOpen(userData)}
    >
      <Group>
        <Indicator
          label={unreadMessagesCount}
          size={16}
          style={{ zIndex: 0 }}
          color="red"
          offset={-2}
          disabled={unreadMessagesCount > 0 ? false : true}
        >
          <Avatar
            src={userData.avatarURL}
            alt={userData.username}
            radius="xl"
            color="white"
            bg={colorWithSeed(userData.id)}
          >
            {userData.username[0]}
          </Avatar>
        </Indicator>

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {userData.username}
          </Text>

          <Text c="dimmed" size="xs">
            {userData.email}
          </Text>
        </div>

        <IconChevronRight
          style={{ width: rem(14), height: rem(14) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
}

UserButton.prototype = {
  handleRoomOpen: PropTypes.func,
  userData: PropTypes.object,
  unreadMessagesCount: PropTypes.number,
}