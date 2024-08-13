"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
  Spinner,
  Snippet,
} from "@nextui-org/react";
import { User } from "../types";

const columns = [
  {
    label: "Id",
    key: "id",
  },
  {
    label: "Fullname",
    key: "fullname",
  },
  {
    label: "Age",
    key: "age",
  },
  {
    label: "Gender",
    key: "gender",
  },
  {
    label: "Email",
    key: "email",
  },
];

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const rowsPerPage = 6;
  const path = "/api/users";

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  useEffect(() => {
    fetch(path)
      .then((response) => {
        response.json().then((users: User[]) => {
          setUsers(users);
        });
      })
      .finally(() => setLoading(false));
  });

  return (
    <div className="w-full justify-center p-3 flex flex-col items-center gap-5">
      <Snippet color="warning">{location.origin + path}</Snippet>
      <Table
        isStriped
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody
          items={items}
          isLoading={loading}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(user) => (
            <TableRow key={user.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(user, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
