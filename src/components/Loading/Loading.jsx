import React from 'react'
import styles from './styles.module.css'
const Loading = ({text}) => {
  return (
    <div className={styles.loadingSpinnerContainer}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={styles.loadingSpinner}
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#858aa6"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
      </svg>
      <h2 className='text-darkest text-3xl text-center block m-auto capitalize'>{text}</h2>
  </div>
  )
}

export default Loading