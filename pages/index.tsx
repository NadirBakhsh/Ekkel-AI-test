import { use, useState } from 'react'
import { CounterProvider } from '../Components/context'
import Counter from '../Components/Counter'
import Divider from '../Components/Divider'
import Multiplier from '../Components/Multiplier'
import Subtraction from '../Components/Subtraction'
import styles from '../styles/Home.module.css'

export default function Home() {
	const [count, setCount] = useState<number>(0)
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.grid}>
					<CounterProvider value={{ count, setCount }}>
						<Counter />
						<Divider />
						<Multiplier />
						<Subtraction />
					</CounterProvider>
				</div>
			</main>
		</div>
	)
}
