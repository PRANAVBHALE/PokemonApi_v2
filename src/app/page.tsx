import { redirect } from 'next/navigation';
export default async function Home() {
  redirect('/pokemons?limit=10&offset=0');
}

// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
//   );
// }
