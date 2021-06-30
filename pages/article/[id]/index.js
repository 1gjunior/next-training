import Link from 'next/link';
import { useRouter } from 'next/router';

const article = ({ article }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default article;
