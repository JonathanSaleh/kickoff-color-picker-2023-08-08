import Palettes from "../components/palettes";

const Home = ({ palettes }) => {
	return <Palettes palettes={palettes} />;
};

export async function getServerSideProps() {
	const res = await fetch(`http://localhost:3000/api/palettes`)
	const palettes = await res.json();
	return { props: { palettes } }
}
export default Home;
