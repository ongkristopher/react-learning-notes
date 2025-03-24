import { Suspense } from "react";
import Parser from "html-react-parser";
import { useAtom, useSetAtom } from "jotai";
import { postData, postId } from "../atoms/news/store";
import { Button } from "@/components/ui/button";

function Next() {
  const setPostId = useSetAtom(postId);
  return (
    <Button onClick={() => setPostId((id) => id + 1)}>
      <div>Next News →</div>
    </Button>
  );
}

function Previous() {
  const [currentPostId, setPostId] = useAtom(postId);

  return (
    <Button
      onClick={() => setPostId((id) => (id <= 1 ? id : id - 1))}
      disabled={currentPostId === 1}
    >
      <div>← Previous News</div>
    </Button>
  );
}

function PostCard() {
  const [{ by, text, time, title, url }] = useAtom(postData);
  return (
    <div className="border rounded-lg p-4">
      {title && <h4 className="pb-2 text-xl font-bold">{title}</h4>}
      <h5 className="pb-2 text-lg font-semibold">Authored by {by}</h5>
      <h6 className="pb-2 text-sm font-light">
        {new Date(time * 1000).toLocaleDateString("en-US")}
      </h6>
      {url && (
        <a className="underline" href={url} target="_blank">
          {url}
        </a>
      )}
      {text && <div>{Parser(text)}</div>}
    </div>
  );
}

function News() {
  return (
    <>
      <h2 className="pb-2 text-2xl font-bold">Hacker News</h2>
      <div>
        <Suspense
          fallback={<h2 className="pb-2 text-2xl font-bold">Loading...</h2>}
        >
          <PostCard />
        </Suspense>
      </div>
      <div className="flex justify-between pt-4">
        <Previous />
        <Next />
      </div>
    </>
  );
}

function Jotai() {
  return (
    <article className="container mx-auto py-6 w-full min-w-0 max-w-6xl">
      <h2 className="text-4xl font-bold pb-8">State Management using Jotai</h2>
      <p className="pb-2">In this page, I used Jotai for state management</p>
      <h3 className="pb-2 text-xl font-semibold">Example:</h3>
      <News />
    </article>
  );
}

export default Jotai;
