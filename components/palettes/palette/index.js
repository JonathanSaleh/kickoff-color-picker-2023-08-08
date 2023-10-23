import Link from "next/link";
import Swatch from '../../swatch';
import styles from './styles.module.css';

const Palette = (props) => {
	const { palette } = props;

	return (
		<Link href={`/palettes/${palette.id}`} className={styles.palette}>
			<div>{palette.name}</div>
			<div className={styles.swatchList}>
				{[1, 2, 3, 4, 5].map(colorNum => (
					<Swatch key={`swatch_${colorNum}`} red={palette[`red${colorNum}`]} green={palette[`green${colorNum}`]} blue={palette[`blue${colorNum}`]} />
				))}
			</div>
		</Link>
	);
};

export default Palette;