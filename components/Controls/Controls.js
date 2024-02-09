import styles from './Controls.module.css'

function Controls({ onStart, onStop }) {
  const disabled = { start: false, stop: true }

  const onStartClick = async () => {
    disabled.start = true;
    try {
      await onStart();
      disabled.stop = false;
    } catch (error) {
      disabled.start = false;
      throw error;
    }
  }
  
  const onStopClick = async () => {
    disabled.stop = true;
    try {
      await onStop();
      disabled.start = false;
    } catch (error) {
      disabled.stop = false;
      throw error;
    }
  }

  return (
    <div className={styles.controls}>
      <button className="start-btn" onClick={onStartClick} disabled={disabled.start}>start</button>
      <button className="stop-btn" onClick={onStopClick} disabled={disabled.stop}>stop</button>
    </div>
  )
}

export default Controls;
