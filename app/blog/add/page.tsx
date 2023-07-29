// for the client side components , we add the following 
"use client";

import { useRouter } from "next/navigation";
import { Fragment, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const postBlog = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const res = fetch("http://localhost:3000/api/blog", {
    method: "POST",
    body: JSON.stringify({ title, description }),
    //@ts-ignore
    "Content-Type": "application/json",
  });
  return (await res).json();
};

const AddBlog = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (title && description) {
      toast.loading("Sending Request 🚀", { id: "1" });
      await postBlog({
        title: title,
        description: description,
      });
      toast.success("Blog Posted Successfully", { id: "2" , duration: 3});

      router.push("/");
    }
  };
  return (
    <Fragment>
      <Toaster />
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-200 font-bold p-3">
            Add A Wonderful Blog 🚀
          </p>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => {setTitle(e.target.value)}}

              placeholder="Enter Title"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2 "
            />
            <textarea
              onChange={(e) => {setDescription(e.target.value)}}
              placeholder="Enter Description"
              className="rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100" type={"submit"}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBlog;