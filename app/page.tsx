import { PrismaClient } from "@prisma/client";
import DataGrid from "./table";

export default async function Page() {
  const prisma = new PrismaClient();

  const reminders = await prisma.reminder.findMany();

  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },
    {
      field: "content",
      headerName: "Content",
      flex: 1,
    },
    {
      field: "published",
      headerName: "Published",
      type: "boolean",
      flex: 1,
    },
  ];

  return <DataGrid columns={columns} rows={reminders} />;
}
