import { Container, Heading, Table } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { z } from "zod";

import { ItemsService } from "@/client/index.ts";

import Navbar from "@/components/elements/Common/Navbar.tsx";
import ActionsMenu from "@/components/elements/Common/ActionsMenu.tsx";
import AddItem from "@/components/elements/Items/AddItem.tsx";
import { PaginationFooter } from "@/components/elements/Common/PaginationFooter";
import { SkeletonText } from "@/components/ui/skeleton";

const itemsSearchSchema = z.object({
  page: z.number().catch(1),
});

export const Route = createFileRoute("/_layout/items")({
  component: Items,
  validateSearch: (search) => itemsSearchSchema.parse(search),
});

const PER_PAGE = 5;

function getItemsQueryOptions({ page }: { page: number }) {
  return {
    queryFn: () =>
      ItemsService.readItems({ skip: (page - 1) * PER_PAGE, limit: PER_PAGE }),
    queryKey: ["items", { page }],
  };
}

function ItemsTable() {
  const queryClient = useQueryClient();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const setPage = (page: number) =>
    navigate({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      search: (prev: { [key: string]: string }) => ({ ...prev, page }),
    });

  const {
    data: items,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getItemsQueryOptions({ page }),
    placeholderData: (prevData) => prevData,
  });

  const hasNextPage = !isPlaceholderData && items?.data.length === PER_PAGE;
  const hasPreviousPage = page > 1;

  useEffect(() => {
    if (hasNextPage) {
      queryClient.prefetchQuery(getItemsQueryOptions({ page: page + 1 }));
    }
  }, [page, queryClient, hasNextPage]);

  return (
    <>
      <Container>
        <Table.Root size={{ base: "sm", md: "md" }}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Title</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
              <Table.ColumnHeader>Actions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          {isPending ? (
            <Table.Body>
              <Table.Row>
                {new Array(4).fill(null).map((_, index) => (
                  <Table.Cell key={index}>
                    <SkeletonText noOfLines={1} paddingBlock="16px" />
                  </Table.Cell>
                ))}
              </Table.Row>
            </Table.Body>
          ) : (
            <Table.Body>
              {items?.data.map((item) => (
                <Table.Row key={item.id} opacity={isPlaceholderData ? 0.5 : 1}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell truncate maxWidth="150px">
                    {item.title}
                  </Table.Cell>
                  <Table.Cell
                    color={!item.description ? "ui.dim" : "inherit"}
                    truncate
                    maxWidth="150px"
                  >
                    {item.description || "N/A"}
                  </Table.Cell>
                  <Table.Cell>
                    <ActionsMenu type={"Пункт"} value={item} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          )}
        </Table.Root>
      </Container>
      <PaginationFooter
        page={page}
        onChangePage={setPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
      />
    </>
  );
}

function Items() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
        Менеджер пунктов
      </Heading>

      <Navbar type={"Пункт"} addModalAs={AddItem} />
      <ItemsTable />
    </Container>
  );
}
