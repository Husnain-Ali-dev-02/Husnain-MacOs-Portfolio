import { WindowControls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  const hasPosts = Array.isArray(blogPosts) && blogPosts.length > 0;

  if (!hasPosts) {
    console.warn("Safari: blogPosts is missing or not an array. Rendering fallback message.");
  }
  return (
    <>
      {/* Header */}
      <div id="window-header" className="safari-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" aria-label="Sidebar toggle" />

        {/* Back / Forward */}
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" aria-label="Go back" />
          <ChevronRight className="icon" aria-label="Go forward" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" aria-hidden="true" />

          <div className="search">
            <Search className="icon" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
              aria-label="Search bar"
            />
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-5">
          <Share className="icon" aria-label="Share" />
          <Plus className="icon" aria-label="New item" />
          <Copy className="icon" aria-label="Copy" />
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog">
        <h2 className="blog-title">My Developer Blog</h2>

        <div className="space-y-8">
          {hasPosts ? (
            blogPosts.map(({ id, image, title, date, link }) => (
              <article key={id} className="blog-post">
              <div className="col-span-2">
                <img
                  src={image}
                  alt={title}
                  className="blog-thumbnail"
                  loading="lazy"
                />
              </div>

              <div className="content">
                <p className="blog-date">{date}</p>
                <h3 className="blog-heading">{title}</h3>

                <a
                  href={link}
                  className="blog-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read full post <MoveRight className="icon-hover" />
                </a>
              </div>
            </article>
            ))
          ) : (
            <div className="text-sm text-gray-500">No blog posts available.</div>
          )}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
