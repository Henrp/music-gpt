import Image from "next/image";

// fetch data => API request
// RESTful API => CRUD (Create, read, update, delete)
// POST/GET/PUT/DELETE

// fetch()

// async function getData(): Promise<any[]> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

// console.log will appear at VScode terminal (server side)

export default async function Home() {
  // const data = await getData();
  // console.log(data);

  return (
    <section className="">
      <h1>Hello World</h1>
    </section>
  );
}
