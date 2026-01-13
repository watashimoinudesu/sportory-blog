
// import { BlogCard } from "./BlogCard"
// import { blogPosts } from "../data/blogPosts"
// export function BlogCardSection (){
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
//         <BlogCard {...blogPosts[0]} />
//         <BlogCard {...blogPosts[1]} />
//         <BlogCard {...blogPosts[2]} />
//         <BlogCard {...blogPosts[3]} />
//         <BlogCard {...blogPosts[4]} />
//         <BlogCard {...blogPosts[5]} />
//       </div>
//     )
// }


import { BlogCard } from "./BlogCard"
import { blogPosts } from "../data/blogPosts"

export function BlogCardSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
      {blogPosts.map((post, index) => (
        <BlogCard key={post.id ?? index} {...post} />
      ))}
    </div>
  )
}

