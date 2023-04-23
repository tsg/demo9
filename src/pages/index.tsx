import Image from "next/image";
import { Inter } from "next/font/google";
import { getXataClient } from "../xata";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: any) {
  const xata = getXataClient();
  const user = await xata.db.Users.getFirst();
  return {
    props: { name: user?.name }, // will be passed to the page component as props
  };
}

export default function Home({ name }: { name: string }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Hi {name}!
    </main>
  );
}
