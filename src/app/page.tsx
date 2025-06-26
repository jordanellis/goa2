import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <main className="flex justify-center flex-col gap-2 w-fit text-center mx-auto">
        <Button to={"/heroes"}>To Heroes</Button>
        <Button to={"/matches"}>To Matches</Button>
      </main>
      <footer className="absolute bottom-1 left-0 right-0 w-fit m-auto">
        Made with Next.js by jellis
      </footer>
    </>
  );
}
