import Image from "next/image";
import Header from "../components/header";
import articles from "../constant/articles";

export default function Page() {
  return (
    <div>
      <Header sectionTitle="Articles" />

      <ul className="article-list">
        {
          articles.map((el, id) => {
            return (
              <li key={id}>
                <a href={el.link} target="_blank">
                  <h2>{el.title}</h2>
                  <p>
                    {el.excerpt}
                  </p>
                  <span>
                    {el.date}
                  </span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}