import { ActionIcon, AspectRatio, Badge, Box, Flex, Table } from '@mantine/core';
import Swal from 'sweetalert2';
import defaultProfile from '@/assets/profile/defaultProfile.svg'
import { IconTrash } from "@tabler/icons-react";

function UserRow({ user }) {
  
  const handleDeleteUser = async () => {
    Swal.fire({
      title: "Deseja deletar este usuário ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sim! Deletar permanentemente",
      denyButtonText: "Não, Cancelar",
      cancelButtonText: "Cancelar Operação!",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //call delete function for administrators
        Swal.fire("Deletado com sucesso!", "", "success");
        //setUsers((prevUsers) => prevUsers.filter((deletedUser) => deletedUser.id !== user.id));
      } else if (result.isDenied) {
        Swal.fire("Operação abortada!");
      }
    });
  };
  
  return (
    <Table.Tr key={user.id}>
      <Table.Th p={'0.5rem'}>
        <Flex justify={'space-between'} align={'center'}>
          <Flex align={'center'} gap={'1rem'}>
            <Box w={"2rem"}>
              <AspectRatio style={{ borderRadius: '20rem', overflow: 'hidden' }} w={'100%'} ratio={10 / 10}>
                <img
                  style={{ width: '100%', objectFit: 'cover' }}
                  src={user.avatarURL ? user.avatarURL : defaultProfile}
                  alt="imagem de perfil"
                />
              </AspectRatio>
            </Box>
            <Flex direction={'column'} gap={'0.2rem'}>
              <p id="username">{user.name ? user.name.toUpperCase() : ''}</p>
              <Badge size="xs">
                {user.email}
              </Badge>
            </Flex>
          </Flex>
          {
            <Flex mx={{ base: 0, md: '2rem' }}>
              <ActionIcon onClick={() => handleDeleteUser()} size={'md'} variant="light" color={'#ff0000'}>
                <IconTrash />
              </ActionIcon>
            </Flex>
          }
        </Flex>
      </Table.Th>
    </Table.Tr>
  );
}

export default UserRow;