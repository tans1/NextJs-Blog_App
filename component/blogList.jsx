"use client";
import { useDispatch , useSelector} from "react-redux";
import { addBlog } from "../app/store/slices/blogSlices";
import SingleBlog from './singleBlog';
import { useRouter } from "next/navigation";



export default function BlogList({title, id, description, date}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const blog = useSelector((state) => state.blog);

  const EditBlogHandle = async () => {
    const data = {
      id: id,
      title: title,
      description: description,
    };
    
    dispatch(addBlog(data))
    router.push('/blog/edit')
  }
  
  const seeDetails = () => {
    // dispatch(addBlog())
    // router.push('')
    console.log("see details")
  }

  return (
    <SingleBlog 
        EditBlogHandle = {EditBlogHandle} 
        seeDetails = {seeDetails}
        title = {title} 
        id = {id}
        description = {description} 
        date = {date}
        />
  );
}