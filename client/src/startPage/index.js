import React from 'react';
import styles from './styles.module.css';

const NEXT_MEETING = null;

const StartPage = () => {
  const [date, setFetchedDate] = React.useState(null);

  React.useEffect(async () => {
    callBackendAPI()
      .then(res => setFetchedDate(res.data[0]))
      .catch(err => console.log(err));
  }, []);

  const callBackendAPI = async () => {
    const data = await fetch("/get-date")
      .then(res => {
        if (res.status !== 200) {
          throw Error(res.message)
        }

        return res.json()
      })

    return data;
  }

  return (
    <div className={styles.background}>
      <div className={styles.image}>
      </div>
      <div className={styles.infoBox}>
        <div>Nästa föreningsmöte:</div>
        <div>{!date ? "Loading..." : date}</div>
        {NEXT_MEETING && (
          <div className={styles.bold}>åååå-mm-dd</div>
        )}
      </div>
    </div>
  )
}

export default StartPage;
