import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  // SkeletonText,
  Table,
  // TableContainer,
  // Tbody,
  // Td,
  // Th,
  // Thead,
  // Tr,
} from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";
import { SkeletonText } from "@/components/ui/skeleton";

import { type UserPublic, UsersService } from "@/client";
// import ActionsMenu from "@/components/elements/Common/ActionsMenu";
import { PaginationFooter } from "@/components/elements/Common/PaginationFooter";
import Navbar from "@/components/elements/Common/Navbar";
import AddUser from "@/components/elements/Admin/AddUser";
import ActionsMenu from "@/components/elements/Common/ActionsMenu";

const usersSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute("/_layout/admin")({
  component: Admin,
  validateSearch: (search) => usersSearchSchema.parse(search),
});

const PER_PAGE = 5;

function getUsersQueryOptions({ page }: { page: number }) {
  return {
    queryFn: () =>
      UsersService.readUsers({ skip: (page - 1) * PER_PAGE, limit: PER_PAGE }),
    queryKey: ["users", { page }],
  };
}

function UsersTable() {
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      search: (prev: { [key: string]: string }) => ({ ...prev, page }),
    });

  const {
    data: users,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getUsersQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage = !isPlaceholderData && users?.data.length === PER_PAGE;
  const hasPreviousPage = page > 1;

  useEffect(() => {
    if (hasNextPage) {
      queryClient.prefetchQuery(getUsersQueryOptions({ page: page + 1 }));
    }
  }, [page, queryClient, hasNextPage]);

  return (
    <>
      <Container>
        <Table.Root size={{ base: "sm", md: "md" }}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader width="20%">Full name</Table.ColumnHeader>
              <Table.ColumnHeader width="50%">Email</Table.ColumnHeader>
              <Table.ColumnHeader width="10%">Role</Table.ColumnHeader>
              <Table.ColumnHeader width="10%">Status</Table.ColumnHeader>
              <Table.ColumnHeader width="10%">Actions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          {isPending ? (
            <Table.Body>
              <Table.Row>
                {new Array(4).fill(null).map((_, index) => (
                  <Table.Row key={index}>
                    <SkeletonText noOfLines={1} paddingBlock="16px" />
                  </Table.Row>
                ))}
              </Table.Row>
            </Table.Body>
          ) : (
            <Table.Body>
              {users?.data.map((user) => (
                <Table.Row key={user.id}>
                  <Table.Cell
                    color={!user.full_name ? "ui.dim" : "inherit"}
                    truncate
                    maxWidth="150px"
                  >
                    {user.full_name || "N/A"}
                    {currentUser?.id === user.id && (
                      <Badge ml="1" colorScheme="teal">
                        Вы
                      </Badge>
                    )}
                  </Table.Cell>
                  <Table.Cell truncate maxWidth="150px">
                    {user.email}
                  </Table.Cell>
                  <Table.Cell>
                    {user.is_superuser ? "Superuser" : "User"}
                  </Table.Cell>
                  <Table.Cell>
                    <Flex gap={2}>
                      <Box
                        w="2"
                        h="2"
                        borderRadius="50%"
                        bg={user.is_active ? "ui.success" : "ui.danger"}
                        alignSelf="center"
                      />
                      {user.is_active ? "Active" : "Inactive"}
                    </Flex>
                  </Table.Cell>
                  <Table.Cell>
                    <ActionsMenu
                      type="User"
                      value={user}
                      disabled={currentUser?.id === user.id}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          )}
        </Table.Root>
      </Container>
      <PaginationFooter
        onChangePage={setPage}
        page={page}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
      />
    </>
  );
}

function Admin() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
        Users Management
      </Heading>

      <Navbar type={"User"} addModalAs={AddUser} />
      <UsersTable />
    </Container>
  );
}
