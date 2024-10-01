import { SubmitButton } from "@/app/components/SubmitButton";
import prisma from "@/app/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notFound } from "next/navigation";
import React from "react";
import { requireUser } from "@/app/lib/hooks";

async function getData(userId: string) {
  const data = await prisma.availability.findMany({
    where: {
      userId: userId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

const AvailabilityPage = async () => {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);
  console.log(data);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Availability</CardTitle>
        <CardDescription>
          In this section you can manage your availability.
        </CardDescription>
      </CardHeader>
      {/* <form action={updateAvailabilityAction}> */}
      <CardContent className="flex flex-col gap-y-4">
        I am Availability
      </CardContent>
      <CardFooter>
        <SubmitButton text="Save Changes" />
      </CardFooter>
      {/* </form> */}
    </Card>
  );
};

export default AvailabilityPage;
