import { NavLink } from "react-router-dom";
import blogData from "../../../blogData.json";
import s from "./BlogPage.module.css";

const cloudBase =
  "https://res.cloudinary.com/dcnsdntgs/image/upload/f_auto,q_auto";

export default function BlogPage() {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {blogData.map((post, index) => (
          <li
            key={post.id}
            className={`${s.item} ${index === 0 ? s.firstItem : ""}`}
          >
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`${cloudBase},w_358,h_210,c_fill/${post.image}`}
              />

              <source
                media="(min-width: 768px) and (max-width: 1439px)"
                srcSet={
                  index === 0
                    ? `${cloudBase},w_728,h_246,c_fill/${post.image}`
                    : `${cloudBase},w_356,h_220,c_fill/${post.image}`
                }
              />

              <source
                media="(min-width: 1440px)"
                srcSet={
                  index === 0
                    ? `${cloudBase},w_1280,h_460,c_fill/${post.image}`
                    : `${cloudBase},w_630,h_303,c_fill/${post.image}`
                }
              />
              <img
                src={`${cloudBase},w_358,h_210,c_fill/${post.image}`}
                alt={post.title}
                className={s.image}
              />
            </picture>

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
