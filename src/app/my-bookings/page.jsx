import MyAllBookingsTable from "../components/tables/MyBookingsTable";
import { headers } from "next/headers";

const fetchMyBookings = async () => {
  const res = await fetch("http://localhost:3000/api/service", {
    headers: await headers(),
  });
  const d = await res.json();
  return d;
};

const MyBookingsPage = async () => {
  const data = await fetchMyBookings();
  return <MyAllBookingsTable data={data}></MyAllBookingsTable>;
};

export default MyBookingsPage;
