import React from "react";
import { Link } from "react-router-dom";
import "./DocsNavigation.css";

const DocsNavigation = () => {
  const menuItems = [
    { title: "Getting Started", path: "/docs" },
    { title: "useQuery", path: "/docs/use-query" },
    { title: "useMutation", path: "/docs/use-mutation" },
    { title: "useInfiniteQuery", path: "/docs/use-infinite-query" },
  ];

  return (
    <nav className="docs-nav">
      <h3 className="docs-nav-title">Documentation</h3>
      <ul className="docs-nav-list">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="docs-nav-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DocsNavigation;
