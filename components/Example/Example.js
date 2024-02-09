import Controls from '../Controls'
import ConnectionClient from './Client'
import styles from './Example.module.css'

function Example({ name, description, options }) {
  const connectionClient = new ConnectionClient()

  let peerConnection = null

  const onStart = async () => {
    peerConnection = await connectionClient.createConnection(options)
    window.peerConnection = peerConnection
  }
  const onStop = peerConnection?.close

  return (
    <div className={styles.example}>
      <div className={`row`}>
        <div className={`col`}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className={`col`}>
          <p>Click &ldquo;Start&rdquo; to begin.</p>
          <Controls onStart={onStart} onStop={onStop} />
        </div>
      </div>
    </div>
  )
}

export default Example
