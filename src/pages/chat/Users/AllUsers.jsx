import { Container } from '@mantine/core';
import FilterableList from '@/components/chat/users/FilterableList.jsx';
import { useEffect, useState } from 'react';
import { GetAllUsersFromDbWithPagination } from '@/services/routes/user/user.routes.js';

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  async function getUsers() {
    const responseUser = await GetAllUsersFromDbWithPagination(page, 10);
    if (responseUser.data.length > 0) {
      setUsers((prev) => {
        return (prev = responseUser.data);
      });
      setTotalPages(responseUser.totalPages);
    }
  }
  
  useEffect(() => {
    getUsers(setUsers);
  }, [page]);
  
  return (
    <Container fluid p={0}>
      <FilterableList users={users} setUsers={setUsers} setPage={setPage} totalPages={totalPages} page={page}/>
    </Container>
  );
}

export default AllUsers;