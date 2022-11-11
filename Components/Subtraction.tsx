import { useContext } from 'react'
import styles from '../styles/Home.module.css'
import CounterContext from './context'

const Subtraction = () => {
	const { count } = useContext<null | any>(CounterContext)

	return (
		<span className={styles.card}>
			<h2>Subtraction &rarr;</h2>
			<div>
				<p>
					21 - {count} = {21 - count}
				</p>
			</div>
		</span>
	)
}

export default Subtraction
