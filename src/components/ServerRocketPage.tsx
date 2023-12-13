export const ServerRocketPage = async ({ id }: { id: string }) => {
  const sleep = () => {
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(async () => {
            return await fetch(
              `https://api.spacexdata.com/latest/rockets/${id}`
            );
          }),
        2000
      )
    );
  };

  sleep();

  const res = await fetch(`https://api.spacexdata.com/latest/rockets/${id}`);
  const data = await res.json();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
