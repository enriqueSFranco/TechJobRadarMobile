import { ListOrders } from "@/features/ui/organisms/list-orders";
import fakeOrders from "@assets/data/orders";

export default function Orders () {
  return <ListOrders orders={fakeOrders} />;
}
