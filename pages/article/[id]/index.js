import Link from 'next/link';

const Article = article => {
  //   const router = useRouter();
  //   const { id } = router.query;
  const useArticle = article.article[0];
  return (
    <>
      <h1>{useArticle.title}</h1>
      <p>{useArticle.body}</p>
      <Link href="/">Go back</Link>
    </>
  );
};

export const getStaticProps = async context => {
  const res = await fetch(`http://localhost:3000/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: { article }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/articles/`);
  const articles = await res.json();

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  };
};

// export const getStaticProps = async context => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();
//   return {
//     props: { article }
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();

//   const ids = articles.map(article => article.id);
//   const paths = ids.map(id => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false
//   };
// };

export default Article;
