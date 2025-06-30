type Article = {
  title: string
  excerpt: string
  link: string
  image: string
  date: string
}

const articles: Article[] = [
  {
    title: "How to Deploy n8n to AWS. Part II : ECS",
    excerpt: "Deploy n8n to AWS series. In this second part, I write about deploying n8n to ECS.",
    link: "https://medium.com/@destiya.dian/how-to-deploy-n8n-to-aws-part-i-ecs-710742460128",
    image: "https://miro.medium.com/v2/resize:fit:300/format:webp/1*DJnD6gOxo13nmwYWMDL4uw.png",
    date: "2025-06-24"
  },
  {
    title: "How to Deploy n8n to AWS. Part I : EC2",
    excerpt: "Deploy n8n to AWS series. In this first part, I write about deploying n8n to EC2.",
    link: "https://medium.com/@destiya.dian/how-to-deploy-n8n-to-aws-part-i-ec2-c3a7da3074ec",
    image: "https://cdn-images-1.medium.com/max/1320/1*-1TrU4XSJkFDYLdajR1pbQ.png",
    date: "2025-06-23"
  },
  {
    title: "Building MCP Server : SDK vs n8n, which one to choose?",
    excerpt: "You can build your MCP server using SDK or n8n, each of them has their own strength. Depends on what you build, it's your choice to choose.",
    link: "https://medium.com/@destiya.dian/building-mcp-server-sdk-vs-n8n-which-one-to-choose-af29f08e221c",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sf4-Z4hGc8EIez2b9vTVig.png",
    date: "2025-06-09"
  },
  {
    title: "I vibe code developer tooling and here is my experience",
    excerpt: "Out of curiosity, I did vibe coding session to see what AI assistant can really do in developer perspective.",
    link: "https://medium.com/@destiya.dian/i-vibe-code-developer-tooling-and-here-is-my-experience-10bd9c3f904f",
    image: "https://cdn-images-1.medium.com/max/880/1*n9NSbEbCINYrfrqQVE8e5Q.png",
    date: "2025-04-28"
  },
  {
    title: "Combine useActionState with React Hook Form and Zod",
    excerpt: "I was challenged to use those three things and make it work. So here is my approach.",
    link: "https://medium.com/@destiya.dian/combine-useactionstate-with-react-hook-form-and-zod-209cdec12b08",
    image: "https://cdn-images-1.medium.com/max/880/1*tp0Ejsbk4KVCuIU96Q-E-A.png",
    date: "2025-03-28"
  },
  {
    title: "Shadcn DataTable Server Side Pagination on NextJS App Router",
    excerpt: "My approach to use server actions for Shadcn DataTable pagination on NextJS App Router.",
    link: "https://medium.com/@destiya.dian/shadcn-datatable-server-side-pagination-on-nextjs-app-router-83a35075c767",
    image: "https://cdn-images-1.medium.com/max/880/1*r6mWckgk-vj4oUJo_edFpQ.png",
    date: "2025-03-26"
  }
]

export default articles;