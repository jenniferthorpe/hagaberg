import React from 'react';
import styles from './styles.module.css'

const NEXT_MEETING = null;

const StartPage = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.image}>
      </div>
      <div className={styles.infoBox}>
        <div>Nästa föreningsmöte:</div>
        <div>{!data ? "Loading..." : data}</div>
        {NEXT_MEETING && (
          <div className={styles.bold}>åååå-mm-dd</div>
        )}
      </div>
    </div>
  )
}

export default StartPage;
