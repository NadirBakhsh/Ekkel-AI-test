import { useContext } from 'react'
import styles from '../styles/Home.module.css'
import CounterContext from './context'
const Multiplier = () => {
	const { count } = useContext<any>(CounterContext)

	return (
		<span className={styles.card}>
			<h2>Multiplier &rarr;</h2>
			<div>
				<p>
					21 * {count} = {21 * count}
				</p>
			</div>
		</span>
	)
}

export default Multiplier
