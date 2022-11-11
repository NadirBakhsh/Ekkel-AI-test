import { useState, useContext } from 'react'
import styles from '../styles/Home.module.css'
import CounterContext from './context'

const Counter = ({}) => {
	const { setCount, count } = useContext<null | any>(CounterContext)

	return (
		<span className={styles.card}>
			<h2>Counter &rarr;</h2>
			<div>
				<button onClick={() => setCount(count - 1)}>-</button>
				<p>{count}</p>
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>
		</span>
	)
}

export default Counter
