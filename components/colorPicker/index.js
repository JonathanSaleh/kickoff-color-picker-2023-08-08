import { useState } from "react";
import Swatch from '../swatch';

import styles from './styles.module.css';

const ColorPicker = () => {
	const [red, setRed] = useState();
	const [green, setGreen] = useState();
	const [blue, setBlue] = useState();

	return (
		<div className={styles.picker}>
			<label for="red">Red</label>
			<input name="red" type="number" min={0} max={255} placeholder={"000"} value={red} onChange={(e) => setRed(e.target.value)} />
			<label for="green">Green</label>
			<input name="green" type="number" min={0} max={255} placeholder={"000"} value={green} onChange={(e) => setGreen(e.target.value)} />
			<label for="blue">Blue</label>
			<input name="blue" type="number" min={0} max={255} placeholder={"000"} value={blue} onChange={(e) => setBlue(e.target.value)} />
			<Swatch red={red} green={green} blue={blue} />
		</div>
	)
};

export default ColorPicker;