// import { findPetsByStatusOptions } from "@/client/@tanstack/react-query.gen";
// import {
//   AbsoluteCenter,
//   Box,
//   Card,
//   Center,
//   HStack,
//   Image,
//   SimpleGrid,
//   Spinner,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import { useQuery } from "@tanstack/react-query";
// import { Tag } from "@/components/ui/tag";
// import {
//   ProgressCircleRing,
//   ProgressCircleRoot,
// } from "@/components/ui/progress-circle";

// import styles from "./Demo.module.css";

// const Demo2 = ({ status }: { status: string[] }) => {
//   const { isPending, isError, data, error } = useQuery(
//     findPetsByStatusOptions({ query: { status: status } })
//   );
//   //   console.log(data);
//   if (isPending) {
//     return (
//       <AbsoluteCenter color="white" axis={"both"}>
//         {/* <ProgressCircleRoot value={null} colorPalette={"orange"}>
//           <ProgressCircleRing cap="round" />
//         </ProgressCircleRoot> */}
//         <VStack colorPalette="teal">
//           <Spinner color="colorPalette.600" />
//           <Text color="colorPalette.600">Loading...</Text>
//         </VStack>
//       </AbsoluteCenter>
//     );
//   }

//   if (isError) {
//     return <span>Error: {error.message}</span>;
//   }

//   // We can assume by this point that `isSuccess === true`
//   return (
//     <SimpleGrid columns={4} gap="40px">
//       {data.map((pets) => (
//         <Card.Root
//           width="320px"
//           key={pets.id + "id" + Math.random().toString(16).slice(2)}
//           _hover={{ shadow: "md" }}
//           _active={{ shadow: "2xl" }}
//         >
//           <Card.Body gap="2">
//             <Card.Title>{pets.name}</Card.Title>
//             <Card.Description>{pets.id}</Card.Description>
//             <p className={styles.red}>Test</p>
//             <Text>{pets.category?.name + " ---> " + pets.category?.id}</Text>
//             <Text>{pets.status}</Text>
//             <Text>{pets.name}</Text>
//           </Card.Body>
//           <Card.Footer justifyContent="flex-end">
//             <HStack>
//               {pets.tags?.map((tag) => <Tag key={tag.id}>{tag.name}</Tag>)}
//             </HStack>
//             {pets.photoUrls.map((url, i) => (
//               <>{url.startsWith("http") ? <Image key={i} src={url} /> : null}</>
//             ))}
//           </Card.Footer>
//         </Card.Root>
//       ))}
//     </SimpleGrid>
//   );
// };
// export default Demo2;
