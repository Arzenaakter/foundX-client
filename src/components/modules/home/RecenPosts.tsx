import { Button } from "@nextui-org/button";
import Link from "next/link";

import Container from "../../UI/Container";
import getRecentPosts from "@/src/services/RecenPosts";

export default async function RecenPosts() {
  const { data: posts } = await getRecentPosts();
  console.log("data", posts);
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently found items</h2>

        <p className="text-center">
          A list of items that have been recently found and reported
        </p>
      </div>
      <div className=" my-8 grid justify-center sm:grid-cols-1 md:grid-cols-4 gap-10">
        {posts?.map((item) => <h1>{item.title}</h1>)}
      </div>
      <div className="flex justify-center">
        <Button className="bg-default-900 rounded-md text-default" size="md">
          <Link href={"/found-items"}>See All</Link>
        </Button>
      </div>
    </Container>
  );
}
