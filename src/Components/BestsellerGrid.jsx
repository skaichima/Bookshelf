import { Button, Grid } from "@chakra-ui/react";
import BestsellerGridItem from "./BestsellerGridItem";
import data from "../data";

export default function BestsellerGrid() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={2}  dir="rtl">
        {data ? data.map(item => <BestsellerGridItem key={item.key} item={item} />) : null}
        <Button h='100%' colorScheme="yellow" fontSize={32} fontWeight='normal' borderRadius='2xl'>SEE ALL</Button>
    </Grid>
  )
}
