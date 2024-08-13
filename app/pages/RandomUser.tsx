"use client";
import React, { useEffect, useState } from "react";
import { User } from "../types";
import {
  Card,
  CardBody,
  Spacer,
  Code,
  User as NextUser,
  Button,
  Spinner,
  Snippet,
} from "@nextui-org/react";

export default function RandomUser() {
  const [user, setUser] = useState<User | any>({});
  const path = "/api/random-user";

  useEffect(() => {
    getRandomUser();
  }, []);

  function getRandomUser() {
    fetch(path).then((response: any) => {
      response.json().then((user: User) => {
        setUser(user);
      });
    });
  }

  return (
    <div className="w-full justify-center p-3 flex flex-col items-center">
      <Snippet color="warning">{location.origin + path}</Snippet>
      {user.id ? (
        <div className="flex flex-col gap-4 items-start">
          <NextUser
            name={user.fullname}
            description={user.occupation}
            avatarProps={{ src: user.displayPhoto }}
          />
          <Card isPressable>
            <CardBody>
              <Code className="text-wrap">@{user.username}</Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Age:</strong> {user.age}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Gender:</strong> {user.gender}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Email:</strong> {user.email}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Status:</strong> {user.status}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Address:</strong> {user.address?.street},{" "}
                {user.address?.city}, {user.address?.country},{" "}
                {user.address?.["zip-code"]}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Interests:</strong> {user.interests?.join(", ")}
              </Code>
              <Spacer y={1} />
              <Code className="text-wrap">
                <strong>Bio:</strong> {user.bio}
              </Code>
            </CardBody>
          </Card>
        </div>
      ) : (
        <Spinner size="lg" color="danger" className="my-10" />
      )}
      <Button
        onClick={getRandomUser}
        variant="solid"
        color="warning"
        className="w-full my-5"
      >
        Update
      </Button>
    </div>
  );
}
