import { Button } from "@nextui-org/button";
import Link from "next/link";
import getRecentPosts from "@/src/services/RecenPosts";
import { IPost } from "@/src/types";
import Container from "@/src/components/UI/Container";
import Card from "@/src/components/UI/Card";

export default async function RecenPosts() {
  const { data: posts } = await getRecentPosts();

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently found items</h2>

        <p className="text-center">
          A list of items that have been recently found and reported
        </p>
      </div>
      <div className=" my-8 grid justify-center sm:grid-cols-1 md:grid-cols-4 gap-10">
        {posts?.map((post: IPost) => <Card key={post._id} post={post} />)}
      </div>
      <div className="flex justify-center">
        <Button className="bg-default-900 rounded-md text-default" size="md">
          <Link href={"/found-items"}>See All</Link>
        </Button>
      </div>
    </Container>
  );
}
