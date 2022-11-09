import { PrismaClient } from "@prisma/client";
import DataGrid from "./table";
import { Box } from "@mui/material";

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

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid columns={columns} rows={reminders} />
    </Box>
  );
}
