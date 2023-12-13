// "use client";
import { ServerRocketPage } from "@/components/ServerRocketPage";
import { Suspense } from "react";

export default async function RocketPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) {
  return (
    <div>
      <Suspense fallback={<h1>{"We're"} taking you to Mars</h1>}>
        <ServerRocketPage id={params.id} />
      </Suspense>
    </div>
  );
}
