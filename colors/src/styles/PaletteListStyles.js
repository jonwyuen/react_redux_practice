import { makeStyles } from "@material-ui/styles";
import sizes from "./sizes";
import bg from "../assets/bg.svg";

export default makeStyles({
	"@global": {
		".fade-exit": {
			opacity: 1
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 300ms ease-out"
		}
	},
	root: {
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		overflow: "auto",
		/* background by SVGBackgrounds.com */
		backgroundColor: "#47b9ff",
		backgroundImage: `url(${bg})`
	},
	heading: {
		fontSize: "2rem"
	},
	container: {
		width: "50%",
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		alignItems: "flex-start",
		[sizes.down("xl")]: {
			width: "80%"
		},
		[sizes.down("xs")]: {
			width: "75%"
		}
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		color: "white",
		"& a": {
			color: "white",
			textDecoration: "none"
		}
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "2.5rem",
		[sizes.down("md")]: {
			gridTemplateColumns: "repeat(2, 50%)"
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)",
			gridGap: "1.4rem"
		}
	}
});
