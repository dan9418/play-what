# Play *What*?

Play What is a toolkit for modeling, visualizing, and building music theory concepts. The app supports custom musical strcutures like chords, scales, and songs - all of which can be zoomed in at any level and displayed on a number of instruments. It also supports musical transforms like chord inversions and transposition.

Under the hood, Play What is an open source JavaScript library and data structure spec. The project is intended to be easily forked and extended by developers, but the technical documentation is not yet ready.

To check out the work-in-progress, please [visit the app](https://dan9418.github.io/play-what/) on GitHub Pages.

### Disclaimer

This repo is under active development is is highly unstable.

## How Does It Work?

You can think of the interface like a folder tree. A folder can contain subfolders or musical concepts. Play What currently supports the following concepts:

- Notes
- Intervals
- Chords
- Scales/Modes

### The Basics

The most basic concept is the **interval**. An interval measures the difference between two notes. A list of interval presets is available *here*.

If we give the interval a *root*, it then becomes a **note**. Think of it this way: the root itself is a note, so it provides a point of reference for measuring distance. The point on the other end of that distance is also a note, which is defined by the starting note and the distance from it. A list of note presets can be found *here*.

Chords, Scales, and Modes are simply lists of notes or intervals. In Play What terms, chords are notes played simultanously and scales are notes played sequentially. If a chord or scale is defined with intervals, it simply describes a list of musical distances. Likewise, if we provide root note, we can add all of those distances to the root and derive a list of notes. See here for presets.

We can abstract these concepts one level further by putting serveral of them in a folder, or **group**. A group is intentionally flexible, and can represent a number of concepts like chord progressions, song sections, and melodies.

### Using the App

The relationship between these concepts becomes more evident when we see them in action. The app allows us to create or import presents from each of these concepts and organize them in a folder tree specific to our needs. If we create a group, we can zoom in to see its subitems. If we create a chord, we can zoom in to see its constituent notes. And so on.

At each level of the tree, we see the *name* of the data, the *type* of the data, and a *preview* of its contents.

You'll notice right away the lower interface is divided into two halves. One half is for the data, which we have already covered. The other half is for a **viewer**, or visualization of the data. Viewers do not display data in groups, but they can still be edited at the group level so the same viewer is applied to all of its children. You can easily tell whether or not you are in a group by the presence of the *meter*. The meter shows the distribution of notes, similar to a keyboard.

Every concept and group in your folder tree is independently customizable. That means that every **node** can have a different root, instrument viewer, etc...

At every level, we can preview the details of its subitems by clicking the *expand* button (+). This will keep you on the current level, but give you more details about the child. We can also focus on just the child by clicking the *zoom* button (=>).

Also at every level, we have number of configuration options and actions available. These can be accessed through the *action* button (...) The exact options are determined by the context of the data. More detailed documentation coming soon...

Finally, we have the ability to toggle the *octave filter* and *play sound*.

## Show Me The Math
### Pods
The foundational building block of Play What is a block called a pod. In it's most raw, basic form, a pod is simply a pair of two numbers.
[0,0]
These numbers have special properties that allow them to model different musical blocks.
#### Discrete Integers
This simply means that the numbers are always whole numbers - no decimals or fractions are allowed. The integers can be positive, negative, or zero. We refer to a single integer as an **index**.
#### Cyclical
This means that each index has a minimum and maximum value. If you add 1 to the maximum, the index resets to the minimum. Likewise, if you subtract 1 from the minimum, the index resets to the maximum. The min and max of each index is independent of the other.
#### Zero-Indexed
This means that we start counting at 0 rather than 1. This makes the math easier. More on this later.

### What Do The Indices Represent?
The indicies are called p and d, respectively, for pitch and degree.
> `[p, d]`

Each of these represents a basic musical block
#### Pitch (p)
Pitch is the measurement of physical frequency in Hertz. This is the fundamental characteristic that makes any given note sound unique from others.

When a pitch is doubled or cut in half, the resulting pitches sound like higher and lower versions of the root pitch, respectively. This relationship is called an **octave**. Pitches related to each other by octaves are said to belong to the same **pitch class**.

In most tuning systems, the distance between octaves is subdivided to simplify and define the set of available pitches. By far, the most common tuning system in Western music is **twelve-tone equal-temperament (TET)**, which divides an octave into exactly 12 equal parts. The reason for this choice is not yet important, just understand that it provides a convenient and flexible set of pitches.

The distance between two adjacent pitches in this system is called a **semitone** (or **half-step**). Likewise, the distance spanning two half-steps is a **whole-tone** (or **whole-step**).

In the context of pods, the p value can represent an **absolute** pitch (**position**) or **relative** pitch (**distance**). In other words, position is like a specific yard-line on a football field, whereas distance is the number of yard-lines spanned.

#### Degree (d)
Degree is similar to pitch, but represents a somewhat more abstract block.

TET provides 12 unique pitch classes within a single octave. However, most music is based on a subset of these at any given time. This is what is meant when music is written in a certain key or improvised from a certain scale. The chosen pitches are each assigned a **degree**, which is denoted by a letter name or **spelling**. Western music generally uses 7 of the 12 available pitches (A-G). The choices are somewhat arbitrary and may change depending on the context and purpose. The first degree is called the **root** and all other notes are named relative to that one. By convention, the most common root is C rather than A.

Like pitch, degree can specify a **position** or **distance**.
#### Octave (o)
In pods, there is also a third, implicit index. The pitch index can be dissected into two parts, **octave** and **pitch class**.

The octave represents how many times a pitch value wraps around the maximum. Remember that indices are cyclical. The pitch class represents the remainder after dividing by 12.

For example, a pitch value of 13 is equivalent to an octave of 1 and a pitch class of 1, since 12 fits into 13 once with a remainder of 1.
When o is included explicitly, the index names spell out the namesake of pods.
> `[p (o), d]`

### Visualizing Pods
You can think of pods like coordinates on a cartesian plane, with p and d instead of x and y.

You may also recognize that pods are simply a special kind of vector, which represent position or distance on a coordinate plane. Like all vectors, the principles of linear algebra apply to pods. They also lend themselves to additional operations useful for music. More on this later.
### Pod Type
Okay, this is where the fun begins. The value of the pod format is not apparent until we understand what the combined indices can collectively represent. The representation differs if the pod specifies a position or distance. To indicate the representation, we use a term called **pod type**.
There are two possible pod types:
#### Note
Analogous to position. Notes are named with a **letter spelling** (A-G) and an **accidental** (# or b). 
A, Bb, C#
Root = C D E F G A B
The letter spelling is a 1:1 mapping of the d value. The accidental is derived from a simple algorithm:

#### Interval
Analogous to distance. Intervals are named with a **degree** (1-7) and a **quality** (major, minor, augmented, diminished, etc...).
M2, m3, A4, d5
Root = P1 m2 M2 m3 M3 P4 P5 m6 M6 m7 M7
The degree number matches the d value. The quality is derived from a simple algorithm:

### Properties of Pod Type
#### Type Inverse Summation
Adding an interval to a note produces another note (equivalent to musical transposition)
C [0, 0] + M2 [2, 1] = D [2, 2]
This property is (communicable?)
M2 [2, 1] + C [0, 0] = D [2, 2]
#### Type Identity Summation
Adding an interval to another interval produces an interval that spans the combined distance
> `P1 [0, 0] + m2 [1, 1] = m2 [1, 1]`

Adding a note to another note produces a note equal to the combined position
#### Modular Arithmetic
When adding pods together, remeber that the result can be reduced based on the max value for each index
> `MAX = [12, 7]`

For example,
> [10, 5] + [10, 5] = [20, 10] reduces to [20 % 12, 10 % 7] = [8, 3]

This step is optional, as you may want to analyze the exact pitch or extended intevals. Pods also cover these use-cases, but reduced pods are used here for simplicity.
#### Transference
It is important to remember that the pod type does not change the mathematical operation, it only helps us model what the operation is doing.
### Pod Lists
We can take the abstraction of pod type one step further and analyze lists of pods.

You may notice that a list of pods is essentially a **matrix**, but we call them **lists** here because the 2nd dimension of the matrix is generally kept intact.

Any operation that can be applied to a single pod can also be applied to a list of pods. This allows us to model more useful musical blocks like chords, scales, melodies, etc... Just like individual pods, pod lists can be defined using notes or intervals.

### Pod List Type
Similar to how pod type is defined based on what the pod measures, the **pod list type** is defined based on how the constituent pods are **temporally related**.
In music, this relationship is equivalent to **chords** and **scales**
#### Chords
**Chords** are sets of notes that are played simultanoesly
> `Major Chord = [P1, M3, P5] = [C, E, G]`

#### Scales
**Scales** are sets of notes that are played sequentially
> `Major Scale = [P1, M2, M3, P4, P5, M6, M7] = [C, D, E, F, G, A, B]`

Just like pod type, the pod list type does not change how we work with pods. It simply provides a mental model to think about the blocks we are working with.

### Applications
Given the above properties, we can easily and efficiently perform a number of useful operations on a number of musical blocks.

#### Transposition
> `[C, E, G] + M2 = [D, F, A]`

#### Root + Intervals
>`C + [P1, M3, P5] = [C, E, G]`

This is equivalent to the the (commutation?)  property of transposition
#### Chordal Inversions
TBA
#### Melodic Inversions
TBA
#### Roman Numerals
TBA
#### Supersets
TBA

## Why Is It Useful?
The pod block allows for the qualitative modelling of abstract musical ideas in a way that is extraordinarily simple and efficient to work with.

The musical idea can be a...
- Collection of notes and intervals (Like chords, scales, and melodies)
- Musical operation (Like transpositions or inversions)

For example, in Roman Numeral chord analysis, which is the basic for most popular Western music, all the available chords are derived from a single scale. The derivation is essentially an algorithm, so the structured representation of pods makes them well suited to operate on.

Additionally, having a consistent model of the operation, and namely, the musical CHARACTER of the operation, allows us to separate it from the source material, and even more, the source musical system. Using this abstraction, we can essentially reverse-engineer the musical system to get chords from altered tuning systems, degree definitions, etc... As a result, it is flexible enough to accommodate nearly any musical system and moreover provide an interchange format between them.

Additionally, it can be used to connect variations on a musical idea in the universe of musical ideas. For example, a major chord may be essentially identical in character to some other inverted chord. Pods clearly expose this relationship, which can be useful in songwriting or algorithmic music generation. The pod model provides a framework for finding those relationships.

## Links

This is an open source project, but the code is not yet ready for public contribution.
Details will be published here when available.

For now, here are some useful links:

### Latest Version
- [App](https://dan9418.github.io/play-what/)
- [Monorepo](https://github.com/dan9418/play-what)
### Beta Version
#### Sample
- [Demo](https://github.com/dan9418/play-what-sample)
- [Repo](https://github.com/dan9418/play-what-sample)
#### Sandbox
						
- [Demo](https://github.com/dan9418/play-what-sandbox)
- [Repo](https://dan9418.github.io/play-what-sandbox/)
#### Packages
				
- [Repo (Core)](https://github.com/dan9418/play-what-beta)
- [Repo (React)](https://github.com/dan9418/play-what-react-viewers)
