"use client";
import { useEffect, useState } from "react";
import { User } from "../types";
import {
  Card,
  CardBody,
  CardHeader,
  Snippet,
  User as NextUser,
  Code,
} from "@nextui-org/react";

export default function UsersById() {
  const [user, setUser] = useState<User>();
  const path = "/api/users/1";

  useEffect(() => {
    fetch(path).then((response) => {
      response.json().then((user: User) => {
        setUser(user);
      });
    });
  });

  return (
    <div className="w-full justify-center p-3 flex flex-col items-center gap-5">
      <Snippet color="warning">{location.origin + path}</Snippet>
      <Card>
        <CardHeader>
          <NextUser
            name={user?.fullname}
            avatarProps={{ src: user?.displayPhoto }}
          />
        </CardHeader>
        <CardBody className="flex flex-col gap-2">
          <Code className="text-wrap">@{user?.username}</Code>
          <Code className="text-wrap">
            <strong>Age:</strong> {user?.age}
          </Code>
          <Code className="text-wrap">
            <strong>Gender:</strong> {user?.gender}
          </Code>
          <Code className="text-wrap">
            <strong>Email:</strong> {user?.email}
          </Code>
          <Code className="text-wrap">
            <strong>Status:</strong> {user?.status}
          </Code>
          <Code className="text-wrap">
            <strong>Address:</strong> {user?.address?.street},{" "}
            {user?.address?.city}, {user?.address?.country},{" "}
            {user?.address?.["zip-code"]}
          </Code>
          <Code className="text-wrap">
            <strong>Interests:</strong> {user?.interests?.join(", ")}
          </Code>
          <Code className="text-wrap">
            <strong>Bio:</strong> {user?.bio}
          </Code>
        </CardBody>
      </Card>
    </div>
  );
}
