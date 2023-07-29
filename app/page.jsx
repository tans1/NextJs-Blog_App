import Link from "next/link";
import BlogList from "../component/blogList";

async function fetchPost () {
  const res = await fetch("http://localhost:3000/api/blog",{
    // headers: { "Cache-Control": "no-cache" },
    next : {
      revalidate : 1
  }
})

  const data = await res.json();
  return data.posts;
}



export default  async function Home() {
  const posts =  await fetchPost();

  return (
    <main className="w-full h-full">
    <div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-5 rounded-lg bg-slate-800 drop-shadow-xl">
      <h1 className="text-slate-200 text-center text-2xl font-extrabold font-[verdana]">
        My FULL STACK Blog App With Next.js
      </h1>
    </div>
    {/* Link */}
    <div className="flex my-5">
      <Link
        href={"/blog/add"}
        className=" md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold"
      >
        Add New Blog 🚀
      </Link>
    </div>
    {/* Blogs */}
    <div className="w-full flex  flex-col justify-center items-center">
      {posts?.map((post) => (
        <BlogList key={post.id} 
          title = {post.title} 
          id = {post.id} 
          description = {post.description} 
          date = {post.date}/>
      ))}

      
    </div>
  </main>
  )
}
