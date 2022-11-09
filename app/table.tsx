"use client";
import { DataGrid as DG, DataGridProps } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function DataGrid(props: DataGridProps) {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DG {...props} />
    </Box>
  );
}
