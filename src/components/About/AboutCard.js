import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi everyone! I’m <span className="purple">Shivam Kumar</span> from{" "}
						<span className="purple">Pune, India</span>.
						<br />
						I’m currently working as a{" "}
						<span className="purple">Software Developer</span> at{" "}
						<span className="purple">GFK-NielsenIQ</span>.
						<br />I hold a Master's in{" "}
						<span className="purple">Computer Applications</span> from{" "}
						<span className="purple">VIT Vellore</span>.
						<br />
						<br />
						Outside of coding, I love engaging in activities that keep me
						creative and inspired:
					</p>

					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Games 🎮
						</li>
						<li className="about-activity">
							<ImPointRight /> Gym 🏋️
						</li>
						<li className="about-activity">
							<ImPointRight /> Traveling and Exploring New Places 🌍
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"Strive to build things that make a difference!"{" "}
					</p>
					<footer className="blockquote-footer">Shivam</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
