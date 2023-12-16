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
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>{"We're"} taking you to Mars</h1>
          </div>
        }
      >
        <ServerRocketPage id={params.id} />
      </Suspense>
    </div>
  );
}
