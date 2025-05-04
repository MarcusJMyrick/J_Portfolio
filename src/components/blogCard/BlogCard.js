import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
          title={blog.title}
        >
          {blog.date && (
            <div className="blog-date">
              <span role="img" aria-label="calendar">
                📅
              </span>{" "}
              {blog.date}
            </div>
          )}
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
            <span
              className="blog-link-icon"
              role="img"
              aria-label="black woman"
            >
              🧑🏿‍🦱
            </span>
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
