export default function SingleBlog({seeDetails,EditBlogHandle, title, id, description, date}) {
  return (
    <div className={"blog-item"} key={id} onClick={() => seeDetails()}>
          <div className="blog-item-header">
            <div className="title">
              <h2 className="font-semibold">{title}</h2>
            </div>
            <div className="edit-button"  onClick={() => EditBlogHandle()}>
                <span >
                  Edit
                </span>
        </div>
          </div>
          <div className="blog-item-details">
            <blockquote className="font-bold text-slate-700">
              {new Date(date).toDateString()}
            </blockquote>
          </div>
          <div className="blog-item-description">

            <h2>{description}</h2>
          </div>
        </div>
  )
}







