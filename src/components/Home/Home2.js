import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							Some engineers write code. I translate ideas into infrastructure.
							My journey in tech has taken me across the full stack — from
							designing systems that hold up under pressure, to building
							interfaces that feel natural to use. Along the way, I found my
							sweet spot: high-performance backends and intuitive frontend
							experiences, working in harmony.
							<br />
							<br />
							I'm fluent in
							<i>
								<b className="purple"> JavaScript, TypeScript, and Node.js </b>
							</i>
							— and I've built a deep appreciation for tools that are both
							powerful and expressive.
							<br />
							<br />
							<b className="purple"> React.js </b> is where I reach when I want
							to build something great on the frontend.{" "}
							<i>
								<b className="purple">Node.js</b> is where I stay when things
								need to be fast, flexible, and built to last.{" "}
							</i>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
