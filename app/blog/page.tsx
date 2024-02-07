import * as Blog from "@/features/blog/components"

const BlogPage = () => {
  return (
    <div>
      <Blog.BlogCard />
      <Blog.BlogImage />
      <Blog.BlogList />
    </div>
  )
}

export default BlogPage
