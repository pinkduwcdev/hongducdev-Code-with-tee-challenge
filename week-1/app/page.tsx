import BlogCard from "@/components/blog-card"
import { BlogCardData } from "@/data"

const HomePage = () => {
  return (
    <div className="w-full px-2 md:px-0 md:max-w-[1000px] mx-auto flex flex-col gap-10 my-10">
      {
        BlogCardData.map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))
      }
    </div>
  )
}

export default HomePage