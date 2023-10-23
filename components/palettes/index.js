import Link from "next/link";
import Palette from './palette';
import styles from './styles.module.css';

// with more time, pagination
const Palettes = (props) => {
	const { palettes = [] } = props;

	return (
		<div className={styles.list}>
			<Link href="/create/palette" className={styles.newLink}>Create new +</Link>
			{palettes.map(palette => <Palette key={`palette_${palette.id}`} palette={palette} />)}
		</div>
	);
}

export default Palettes;