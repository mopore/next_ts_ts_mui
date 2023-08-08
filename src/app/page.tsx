import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { BackendButton } from "./components/BackendButton";
import backend from "./services/Backend";


export default async function Home() {
	return (
	<>
		<header>
		</header>
		<main>
			<div>
				<Container maxWidth="sm">
					<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
						Project Root
					</Typography>     
					<div>
						<Grid container spacing={2} justifyContent="center">
							<Grid item>
								<BackendButton serverAction={backend.helloAction} />
							</Grid>
							<Grid item>
								<Link href="/backyard">
									<Button variant="outlined" color="primary">
										Backyard
									</Button>
								</Link>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
		</main>
	</>
	);
}