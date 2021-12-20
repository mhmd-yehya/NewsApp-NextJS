import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="page-container">
      <Navbar />

      <div className={styles.main}>
        <h1> Live Now News </h1>
        <h3>subscribe now for latest news articles</h3>
        <input></input>
      </div>
    </div>
  );
}
export default Home;
