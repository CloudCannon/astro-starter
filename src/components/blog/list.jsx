import PostSummary from './summary';

export default function BlogList({ posts }) {
  if (posts.length > 0) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-between gap-5 mt-8 md:mt-16">
        {posts.map((post, i) => (
          <PostSummary post={post} key={i} />
        ))}
      </div>
    );
  }
  return;
}
