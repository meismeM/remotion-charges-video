import {AbsoluteFill} from 'remotion';
import {ReactP5Wrapper} from '@p5-wrapper/react';
import type {Sketch} from '@p5-wrapper/react';
import p5 from 'p5';

const sketch: Sketch = (p5) => {
	const particles: Particle[] = [];

	class Particle {
		pos: p5.Vector;
		vel: p5.Vector;
		acc: p5.Vector;
		maxSpeed: number;

		constructor() {
			this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
			this.vel = p5.createVector(0, 0);
			this.acc = p5.createVector(0, 0);
			this.maxSpeed = 2;
		}

		update() {
			this.vel.add(this.acc);
			this.vel.limit(this.maxSpeed);
			this.pos.add(this.vel);
			this.acc.mult(0);
		}

		follow(vectors: p5.Vector[]) {
			const x = p5.floor(this.pos.x / 20);
			const y = p5.floor(this.pos.y / 20);
			const index = x + y * p5.floor(p5.width / 20);
			const force = vectors[index];
			this.applyForce(force);
		}

		applyForce(force: p5.Vector) {
			this.acc.add(force);
		}

		show() {
			p5.stroke(255, 5);
			p5.strokeWeight(4);
			p5.point(this.pos.x, this.pos.y);
		}

		edges() {
			if (this.pos.x > p5.width) this.pos.x = 0;
			if (this.pos.x < 0) this.pos.x = p5.width;
			if (this.pos.y > p5.height) this.pos.y = 0;
			if (this.pos.y < 0) this.pos.y = p5.height;
		}
	}

	p5.setup = () => {
		p5.createCanvas(1080, 1920);
		for (let i = 0; i < 200; i++) {
			particles.push(new Particle());
		}
		p5.background(0);
	};

	p5.draw = () => {
		p5.background(0, 5);
		const scl = 20;
		const cols = p5.floor(p5.width / scl);
		const rows = p5.floor(p5.height / scl);
		const flowfield = new Array(cols * rows);

		let yoff = 0;
		for (let y = 0; y < rows; y++) {
			let xoff = 0;
			for (let x = 0; x < cols; x++) {
				const index = x + y * cols;
				const angle = p5.noise(xoff, yoff, p5.frameCount / 100) * p5.TWO_PI;
				const v = p5.createVector(1, 0).rotate(angle);
				v.setMag(1);
				flowfield[index] = v;
				xoff += 0.1;
			}
			yoff += 0.1;
		}

		for (const particle of particles) {
			particle.follow(flowfield);
			particle.update();
			particle.edges();
			particle.show();
		}
	};
};

export const P5Scene = () => {
	return (
		<AbsoluteFill>
			<ReactP5Wrapper sketch={sketch} />
		</AbsoluteFill>
	);
};
