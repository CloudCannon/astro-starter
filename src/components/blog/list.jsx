import PostSummary from './summary';

export default function BlogList({ posts, page }) {
  let title = '';
  if (!page.data) {
    title = page.title;
  } else {
    title = page.data.title;
  }
  if (posts.length > 0 && page.slug === 'index') {
    return (
      <section className="container mx-auto px-3">
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-12 mt-8 md:mt-16">
          {posts.map((post, i) => (
            <PostSummary post={post} key={i} />
          ))}
        </div>
        <a href="/blog/">
          <button className="button-primary rounded-lg">All Posts</button>
        </a>
      </section>
    );
  } else if (posts.length > 0) {
    return (
      <section className="container mx-auto px-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center my-12">
          {title}
        </h1>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-12 mt-8 md:mt-16">
          {posts.map((post, i) => (
            <PostSummary post={post} key={i} />
          ))}
        </div>
      </section>
    );
  }
  return;
}
