import { Button, Text, Flex, Table } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import UserRow from '@/components/chat/users/UserRow.jsx';
import { useNavigate } from 'react-router-dom';
import { adminRoutes as PrivateRoutes, userRoutes } from '@/models/routes.js';


function UsersList({ users }) {
  const LiRows = [];
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  users.forEach((user) => {
    LiRows.push(<UserRow user={user} key={user.id} />);
  });
  
  function handleAddUser() {
    currentUser.is_admin
      ? navigate(`/admin/${PrivateRoutes.CREATE_USER}`)
      : navigate(userRoutes.HOMEPAGE, { replace: true });
  }
  
  return (
    <Table withColumnBorders withRowBorders withTableBorder striped highlightOnHover gap={'1rem'} direction={'column'}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Flex w={'100%'} justify={'space-between'} align="center">
              <Text>Usuários</Text>
              {
                <Button
                  variant="subtle"
                  rightSection={<IconPlus color="white" style={{ background: '#5971d1', borderRadius: '0.1rem' }} />}
                  style={{
                    overflow: 'hidden',
                  }}
                  onClick={handleAddUser}
                >
                  <Flex align={'center'} gap={'1rem'}>
                    <Flex p={'0.2rem'}>
                      <Text c="#5971d1" fw={600} fz={'0.8rem'}>
                        Criar novo usuário
                      </Text>
                    </Flex>
                  </Flex>
                </Button>
              }
            </Flex>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{LiRows}</Table.Tbody>
    </Table>
  );
}

export default UsersList;