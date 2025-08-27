import { NavLink } from "react-router-dom";
import blogData from "../../../blogData.json";
import s from "./BlogPage.module.css";

export default function BlogPage() {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {blogData.map((post) => (
          <li key={post.id} className={s.item}>
            <img src={post.image} alt={post.title} className={s.image} />
            <NavLink to={`/blog/${post.id}`} className={s.link}>
              {post.title}
            </NavLink>
            <p className={s.date}>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
