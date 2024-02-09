import useRandomImages from '@hooks/useRandomImages'
import styles from './ComingSoon.module.css'

export default function ComingSoon({ rows = 1, cols = 1, width = '100%', height, padding = '5%' }) {
  const style = { width, height, padding }
  const [getImage] = useRandomImages()
  return (
    <>
      <div className={`${styles.coming_soon} col`}>
        {Array.from(new Array(rows)).map((_, rowIdx) => (
          <div key={rowIdx} className="row">
            {Array.from(new Array(cols)).map((_, colIdx) => {
              const image = getImage()
              return (
                <div
                  key={colIdx}
                  className="col"
                  style={{ ...style, background: image ? `url(${image})` : 'inherit' }}
                >
                  coming soon
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}
