import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
	min-height: 100%;
	width: 100%;
	max-width: 512px;
	margin: auto;

	& > h1, & > p {
		margin: 32px 0;
	}
`;

const About = () => {
	return (
		<StyledAbout>
			<h2>How Does It Work?</h2>
			<p>
                The foundational building block of Play What is a concept called a pod.
                In it's most raw, basic form, a pod is simply a pair of two numbers.
			</p>
			<pre><code>[0,0]</code></pre>
			<p>
                These numbers have a number of properties that allows them to model different musical concepts.
			</p>
			<ol>
				<li>The numbers are discrete integers</li>
				<li>The numbers are cyclical</li>
			</ol>
			<h3>1. Discrete Integers</h3>
			<p>
                This simply means that the numbers are always whole numbers - no decimals or fractions are allowed.
                The integers can be positibe, negative, or zero. We can refer to one of the integers as an index.
			</p>
			<h3>2. Cyclical</h3>
			<p>
                This means that each index has a minimum and maximum value.
                If you add 1 to the maximum, the index reset to the minimum.
                Likewise, if you subtract 1 from the maximum, the index resets to the maximum.
                The min and max of each index is independed of the other.
			</p>
			<h2>What Do The Indicies Represent?</h2>
			<p>
                The indicies are called p and d, respectively, for pitch and degree.
			</p>
			<pre><code>{`[p, d]`}</code></pre>
			<p>
                The first index also has an implicit index, o, for octave.
                When o is included excplictly, the index names spell out the namesake of pods.
			</p>
			<pre><code>{`[p (o), d]`}</code></pre>
			<h3>Pitch (p)</h3>
			<p>
                Pitch is the measurement of physical frequency in Hertz.
                This is the fundamental characteristic that makes one note sound unique from others.
                When a pitch is doubled or cut in half, the resulting pitches sound like higher and lower versions of the root pitch.
                This relationship is called an octave, and pitches related to each other by octaves are said to belong to the same pitch class.
                In most tuning systems, the distance between octaves is subdivided to define the set of pitches available in songwriting.
                The system used in nearly all western music is called twelve-tone equal-temperament (TET),
                which divides an octave into exactly 12 equal parts (that coincidentally align nicely with the physical characterics of sound, but more on that later).
                The p index measures the number of steps (or semitones) from some arbitrarily defined root pitch.
                In western music, that root pitch is often middle C (where p = 0).
                Since the octave is divided into 12 parts, the maximum value is 11 (zero-indexed).
                The number of times 12 fits into the initial pitch index is the octave (o)
                and the the remainder is the pitchClass (pc).
			</p>
			<h3>Degree (d)</h3>
			<p>
                Degree is similar to pitch, but represents a somewhat more abstract concept.
                TET provides 12 unique pitch classes to work with within a single octave.
                However, most musical makes heavy use of just a subset of these at any given time.
                This is what is meant when music is written in a certain key or improvised from a certain scale.
                Western music usually chooses 7 pitches out of 12.
                The reasons for this are not important yet, just understand that the the piches work well together.
                The degree that is chosen as the root defines the name for all the notes relative to that one.
                The most common root note in Western music is middle C.
			</p>
			<h2>Greater Than The Sum Of Its Parts</h2>
			<p>
                The value from this format is not apparent until we combine the indicies.
                When p and d are both present, a pod is formed, which represents a value for both pitch and degree.
                You can think of pods like vectors on a cartesian plane, with p and d instead of x and y.
                Like any vector, a pod can represent position or distance.
			</p>
			<ol>
				<li>Positon, analogous to musical note</li>
				<li>Distance, analogous to musical interval</li>
			</ol>
			<h3>Position (note)</h3>
			<p>
                When representing position, a pod is equivalent to a musical note.
                In other words, a specific pitch given a specific name (e.g. C4 or Eb2).
			</p>
			<h3>Distance (interval)</h3>
			<p>
                When representing distance, a pod is equivalent to a musical interval.
                In other words, how many steps the pitch stepped and how many letter names stepped
                (e.g. C to D is one degree step).
			</p>
			<h3>Pod Type</h3>
			<p>
                When thinking of pods in this way, a new propety emerges called 'pod type'
                We can also use pod type to define new properties of pods:
			</p>
			<ul>
				<li>Adding an interval to a note produces another note (equivalent to musical transposition)</li>
				<li>Adding an interval to another interval produces an interval that spans the combined distance</li>
			</ul>
			<h2>Working With Pods</h2>
			<p>To illustrate these relationships, look at these simple examples...</p>
			<pre><code>{`C [0, 0] + M2 [2, 1] = D [2, 2]`}</code></pre>
			<pre><code>{`P1 [0, 0] + m2 [1, 1] = m2 [1, 1]`}</code></pre>
			<h3>Taking The Modulos</h3>
			<p>
                When adding pods together, remeber that the result can be reduced based on the max value for each index
			</p>
			<pre><code>{`MAX = [12, 7]`}</code></pre>
			<p>
                For example,
			</p>
			<pre><code>{`[10, 5] + [10, 5] = [20, 10] reduces to [20 % 12, 10 % 7] = [8, 3]`}</code></pre>
			<p>
                This step is optional, as you may want to analyze the exact pitch or extended intevals.
                Pods also cover these use-cases, but reduced pods are used here for simplicity.
			</p>
			<h2>Pod Lists</h2>
			<p>
                We can take this abstraction one step further and analyze lists of pods.
                In music, this is analogous to chords and scales, depending on the temporal relationship.
			</p>
			<ul>
				<li>Chords are sets of notes that are played simultanoesly</li>
				<li>Chords are sets of notes that are played sequentially</li>
			</ul>
			<pre><code>{`Major Triad = [P1, M3, P5] = [[0, 0], [3, 2], [5, 4]]`}</code></pre>
			<p>
                This makes it extrordinarily simple represent and manipulate common musical concepts
			</p>
			<h3>Applications</h3>
			<h4>Key Center + Intervals</h4>
			<pre><code>{`C + [P1, M3, P5] = [C, E, G]`}</code></pre>
			<h4>Transposition</h4>
			<pre><code>{`[C, E, G] + M2 = [D, F, A]`}</code></pre>
			<h4>Chordal Inversions</h4>
			<pre><code>{`TBA`}</code></pre>
			<h4>Melodic Inversions</h4>
			<pre><code>{`TBA`}</code></pre>
			<h4>Roman Numerals</h4>
			<pre><code>{`TBA`}</code></pre>
			<h4>Supersets</h4>
			<pre><code>{`TBA`}</code></pre>
			<h2>Getting Started</h2>
			<p>
                Check out the Explore tab to experiment with some pods.
			</p>
		</StyledAbout>
	)
};

export default About;
