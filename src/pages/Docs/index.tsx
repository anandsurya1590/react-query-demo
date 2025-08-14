import React from "react";
import DocsNavigation from "../../components/DocsNavigation/DocsNavigation";
import "./Docs.css";

const DocsPage = () => {
  return (
    <div className="docs-layout">
      <DocsNavigation />
      <main className="docs-content">
        <div className="docs-content-inner">
          <h1>Welcome to the Documentation</h1>
          <p>Select a topic from the navigation menu to get started.</p>
        </div>
      </main>
    </div>
  );
};

export default DocsPage;
