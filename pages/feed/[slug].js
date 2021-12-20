import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Feed.module.css';
import Navbar from '../../components/Navbar';
function Feed({ articles, pageNumber }) {
  return articles.length ? (
    <>
      <Head>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + ' and more!'} />
      </Head>

      <Navbar />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2"></div>
          <div className="col-md-auto">
            {' '}
            {articles.map((article, index) => (
              <div key={index} className={styles.post}>
                <h1 onClick={() => (window.location.href = article.url)}>
                  {article.title}
                </h1>
                <p>{article.description}</p>
                {!!article.urlToImage && (
                  <img src={article.urlToImage} alt="" />
                )}
              </div>
            ))}
          </div>
          <div className="col col-lg-2"></div>
        </div>
      </div>
      <nav className="paginator" aria-label="...">
        <ul className="pagination justify-content-center">
          <li className={pageNumber === 1 ? 'page-item disabled' : 'page-item'}>
            <a className="page-link" href={`/feed/${pageNumber - 1}`}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" aria-current="page">
              {pageNumber}
            </a>
          </li>
          <li className={pageNumber === 5 ? 'page-item disabled' : 'page-item'}>
            <a className="page-link" href={`/feed/${pageNumber + 1}`}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  ) : (
    <div className="page-container">
      <Navbar />
      <div className={styles.main}>
        <h1>Oops! No articles for this page</h1>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  ).then((res) => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
