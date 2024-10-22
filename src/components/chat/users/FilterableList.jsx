import {Container, Divider, Flex, Pagination, TextInput, Title} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from 'react';
import PropTypes from 'prop-types';
import UsersList from '@/components/chat/users/UsersList.jsx';

function FilterableList({ users, setUsers, page, totalPages, setPage, loading }) {
  const [filterText, setFilterText] = useState("");
  
  return (
    <Container bg={"#fff"} fluid p={"1rem"} mt={"1rem"}>
      <Flex direction={"column"} gap={"1rem"}>
        <Title order={3}>Lista de Usuários</Title>
        <Divider />
        <Flex w={"100%"}>
          <TextInput
            rightSection={<IconSearch />}
            rightSectionWidth={"3rem"}
            w={"100%"}
            styles={{
              input: {
                height: "auto",
                padding: "0.6rem",
                fontSize: "1.3rem",
              },
            }}
            placeholder={"Digite o nome do amigo..."}
            value={filterText}
            onChange={(e) => {
              setFilterText(e.currentTarget.value);
            }}
          />
        </Flex>
        <Pagination total={totalPages} value={page} onChange={setPage}/>
        {
          <UsersList users={users} setUsers={setUsers} filterText={filterText}/>
        }
        <Flex p={"1rem"} style={{ position: "fixed", right: 0, bottom: 0 }}></Flex>
      </Flex>
    </Container>
  );
}

FilterableList.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func,
};

export default FilterableList;