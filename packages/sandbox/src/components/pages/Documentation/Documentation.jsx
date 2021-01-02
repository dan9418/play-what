import React from 'react';
import styled from 'styled-components';

const StyledDocumentation = styled.div`
	min-height: 100%;
	width: 100%;
	max-width: 512px;
	margin: auto;

	& h1, h2, h3, h4, h5 {
		margin: 16px 0;
		&:first-child {
			margin-top: 0;
		}
	}
	& h1 {
		padding-bottom: 8px;
		border-bottom: 1px solid #ccc;
	}
	& p {
		margin: 16px 0;
	}
	& section {
		margin-bottom: 16px;
	}
	& li {
		padding: 4px 0;
	}
	& ul {
		margin-left: 16px;
	}
	& details {
		margin: 4px;
		& summary {
			cursor: pointer;
		}
	}
	& code {
		display: block;
		padding: 4px;
		width: 100%;
		text-align: center;
	}
`;

const StyledBlock = styled.div`
	background-color: #ddd;
	padding: 16px;
	border-radius: 16px;
`;

const Documentation = () => {
	return (
		<StyledDocumentation>
			<h1>Documentation</h1>

			<section>
				<h2>Play <em>What?</em></h2>

				<p>
					Play What is a toolkit for modeling and analyzing musical concepts, inlcuding...
				</p>
				<ul>
					<li>A simple, efficient, and flexible musical data structure spec</li>
					<li>A JavaScript API for working with these data structures</li>
					<li>A React component library for consuming and analyzing these data structures</li>
					<li>A free web app demonstrating its abilities</li>
					<li>An open-source repository designed to be easily forked and extended</li>
					<li>A young community of technical music theory enthusiasts</li>
				</ul>
			</section>

			<section>
				<h2>Pods</h2>
				<p>
					The foundational building block of Play What is a concept called a pod.
					In its most raw, basic form, a pod is simply a pair of two numbers.
				</p>
				<code>
					[0,0]
				</code>
				<p>
					These numbers have special properties that allow them to model different musical concepts.
				</p>

				<h3>Discrete Integers</h3>
				<p>
					This simply means that the numbers are always whole numbers
					- no decimals or fractions are allowed.
					The integers can be positive, negative, or zero. We refer to a single integer as an **index**.
				</p>
				<h3>Cyclical</h3>
				<p>
					This means that each index has a minimum and maximum value.
					If you add 1 to the maximum, the index resets to the minimum.
					Likewise, if you subtract 1 from the minimum, the index resets to the maximum.
					The min and max of each index is independent of the other.
				</p>
				<h3>Zero-Indexed</h3>
				<p>
					This means that we start counting at 0 rather than 1.
					This makes the math easier. More on this later.
				</p>
			</section>

			<section>
				<h2>What Do The Indices Represent?</h2>

				<p>The indicies are called p and d, respectively, for pitch and degree.</p>
				<code>[p, d]</code>
				<p>Each of these represents a basic musical concept</p>

				<h3>Pitch (p)</h3>
				<p>
					Pitch is the measurement of physical frequency in Hertz.
					This is the fundamental characteristic that makes any given note sound unique from others.
				</p>
				<p>
					When a pitch is doubled or cut in half, the resulting pitches sound like higher and lower versions of the root pitch, respectively.
					This relationship is called an **octave**.
					Pitches related to each other by octaves are said to belong to the same **pitch class**.
				</p>
				<p>
					In most tuning systems, the distance between octaves is subdivided to simplify and define the set of available pitches.
					By far, the most common tuning system in Western music is **twelve-tone equal-temperament (TET)**, which divides an octave into exactly 12 equal parts.
					The reason for this choice is not yet important, just understand that it provides a convenient and flexible set of pitches.
				</p>
				<p>
					The distance between two adjacent pitches in this system is called a **semitone** (or **half-step**).
					Likewise, the distance spanning two half-steps is a **whole-tone** (or **whole-step**).
				</p>
				<p>
					In the context of pods, the p value can represent an **absolute** pitch (**position**) or **relative** pitch (**distance**).
					In other words, position is like a specific yard-line on a football field, whereas distance is the number of yard-lines spanned.
				</p>

				<h3>Degree (d)</h3>
				<p>
					Degree is similar to pitch, but represents a somewhat more abstract concept.
				</p>
				<p>
					TET provides 12 unique pitch classes within a single octave.
					However, most music is based on a subset of these at any given time.
					This is what is meant when music is written in a certain key or improvised from a certain scale.
					The chosen pitches are each assigned a **degree**, which is denoted by a letter name or **spelling**.
				</p>
				<p>
					Western music generally uses 7 of the 12 available pitches.
					The choices are somewhat arbitrary and may change depending on the context and purpose.
				</p>
				<p>
					The first degree is called the **root** and all other notes are named relative to that one.
					By convention, the most common root is C rather than A.
				</p>
				<p>
					Like pitch, degree can specify a **position** or **distance**.
				</p>

				<h3>Octave (o)</h3>
				<p>
					In pods, there is also a third, implicit index.
					The pitch index can be dissected into two parts, **octave** and **pitch class**.
				</p>
				<p>
					The octave represents how many times a pitch value wraps around the maximum.
					Remember that indices are cyclical.
				</p>
				<p>
					The pitch class represents the remainder after dividing by 12.
				</p>
				<p>
					For example, a pitch value of 13 is equivalent to an octave of 1 and a pitch class of 1, since 12 fits into 13 once with a remainder of 1.
				</p>
				<p>
					When o is included explicitly, the index names spell out the namesake of pods.
				</p>
				<code>[p (o), d]</code>
			</section>

			<section>
				<h3>Visualizing Pods</h3>
				<p>You can think of pods like coordinates on a cartesian plane, with p and d instead of x and y.</p>
				<p>You may also recognize that pods are simply a special kind of vector, which represent position or distance on a coordinate plane.</p>
				<p>Like all vectors, the principles of linear algebra apply to pods.</p>
				<p>They also lend themselves to additional operations useful for music. More on this later.</p>
			</section>

			<section>
				<h3>Pod Type</h3>
				<p>
					Okay, this is where the fun begins.
					The value of the pod format is not apparent until we understand what the combined indices can collectively represent.
					The representation differs if the pod specifies a position or distance.
					To indicate the representation, we use a term called **pod type**.
				</p>

				<p>There are two possible pod types:</p>
				<h4>Note</h4>
				<p>
					Analogous to position.
					Notes are named with a **letter spelling** (A-G) and an **accidental** (# or b).
				</p>
				<code>
					A, Bb, C#
				</code>
				<code>
					Root = C D E F G A B
				</code>
				<p>
					The letter spelling is a 1:1 mapping of the d value.
					The accidental is derived from a simple algorithm:
				</p>
				<details>
					<summary>View details</summary>
					TODO
				</details>
				<h4>Interval</h4>
				<p>
					Analogous to distance.
					Intervals are named with a **degree** (1-7) and a **quality** (major, minor, augmented, diminished, etc...).
				</p>
				<code>
					M2, m3, A4, d5
				</code>
				<code>
					Root = P1 m2 M2 m3 M3 P4 P5 m6 M6 m7 M7
				</code>
				<p>The degree number matches the d value. The quality is derived from a simple algorithm:</p>
				<details>
					<summary>View details</summary>
					TODO
				</details>
			</section>

			<section>
				<h3>Properties of Pod Type</h3>
				<h4>Type Inverse Summation</h4>
				<p>Adding an interval to a note produces another note (equivalent to musical transposition)</p>
				<code>C [0, 0] + M2 [2, 1] = D [2, 2]</code>
				<p>This property is (communicable?)</p>
				<code>M2 [2, 1] + C [0, 0] = D [2, 2]</code>

				<h4>Type Identity Summation</h4>
				<p>Adding an interval to another interval produces an interval that spans the combined distance</p>
				<code>P1 [0, 0] + m2 [1, 1] = m2 [1, 1]</code>
				<p>Adding a note to another note produces a note equal to the combined position</p>

				<h4>Modular Arithmetic</h4>
				<p>When adding pods together, remeber that the result can be reduced based on the max value for each index</p>
				<code>MAX = [12, 7]</code>
				<p>For example,</p>
				<code>[10, 5] + [10, 5] = [20, 10] reduces to [20 % 12, 10 % 7] = [8, 3]</code>
				<p>This step is optional, as you may want to analyze the exact pitch or extended intevals. Pods also cover these use-cases, but reduced pods are used here for simplicity.</p>

				<h4>Transference</h4>
				<p>It is important to remember that the pod type does not change the mathematical operation, it only helps us model what the operation is doing.</p>
			</section>















			<StyledBlock>
				<h2>Source Code</h2>
				<p>
					This is an open source project, but the code is not yet ready for public contribution.
					Details will be published here when available.
					For now, here are some useful links:
				</p>
				<ul>
					<li>
						<a href="https://dan9418.github.io/play-what/">App</a>
					</li>
					<li>
						<a href="https://github.com/dan9418/play-what">Monorepo</a>
					</li>
				</ul>
				<details>
					<summary>Beta Version</summary>
					<ul>
						<li>Sample</li>
						<ul>
							<li>
								<a href="https://github.com/dan9418/play-what-sample">Demo</a>
							</li>
							<li>
								<a href="https://github.com/dan9418/play-what-sample">Repo</a>
							</li>
						</ul>
						<li>Sandbox</li>
						<ul>
							<li>
								<a href="https://github.com/dan9418/play-what-sandbox">Demo</a>
							</li>
							<li>
								<a href="https://dan9418.github.io/play-what-sandbox/">Repo</a>
							</li>
						</ul>
						<li>Packages</li>
						<ul>
							<li>
								<a href="https://github.com/dan9418/play-what-beta">Repo (Core)</a>
							</li>
							<li>
								<a href="https://github.com/dan9418/play-what-react-viewers">Repo (React)</a>
							</li>
						</ul>
					</ul>
				</details>
			</StyledBlock>
		</StyledDocumentation>
	)
};

export default Documentation;
