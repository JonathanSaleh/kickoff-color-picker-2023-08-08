import Link from "next/link";
import PaletteForm from '../../components/paletteForm';
import styles from "./styles.module.css"

export default function Palette({ palette }) {
	return (
		<>
			<Link href="/" className={styles.viewAll}>{"<- View All"}</Link>
			<PaletteForm palette={palette} />
		</>
	);
}

export async function getServerSideProps({ query }) {
	const res = await fetch(`http://localhost:3000/api/palettes?id=${query.id}`)
	const palette = await res.json();
	return { props: { palette } }
}