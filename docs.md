# Documentation (unfinished)

## Disclaimer

This app is in beta and is under active development. Some features may be unstable and the documentation is not yet complete.

## How Does It Work?

You can think of the interface like a folder tree. A folder can contain files or subfolders. In Play What, *files* and *folders* are called *models* and *groups*, respectively.

Play What currently supports the following models:
- Intervals
- Notes
- Chords
- Scales/Modes

### Models: The Basics

The most fundamental model is the **note**. In general terms, a note is just the name we give to a specific *pitch*, or frequency. The name we assign to any given frequency can vary depending on the context, and so can the frequency that a certain name refers to.

The other core model is the **interval**. An interval simply measures the *distance* between two notes. Similarly, the name we give to an interval depends on how we measure that distance. More on this later.

If we start at a note (a specific pitch) and move by an interval (a specific distance), we arrive at another note. In this case, we call the starting note the **root**. The root is a point of reference for measuring distance.

### Compound Models

When we put two or more of these core models in a list, we have a **compound model**. These can represent a number of musical concepts, like chords, scales, modes, and medodies.

In Play What, we define two types of compound models, **chords** and **scales**. Chords are notes played *simultanously* and scales are notes played *sequentially*.

Chords and scales are best defined with intervals. In other words, we use the relative distances of their intervals to describe their shape rather than specific notes. From here, we can easily assign a single root for all the intervals to get the resulting notes.

For a list of model presets, please see the appendix at the end of this document.

### Groups

We can abstract models one level further by adding them to a special model called a **group**. Groups are intentionally flexible and can represent a number of different concepts, like chord progressions, song sections, and melodies. A group can contain any type of model, including more groups.

## Using the App

This app essentially provides a hierarchical interface for working with the models described above. We can organize them in a folder tree specific to our own needs. If we create a group, we can zoom in to see its subitems. If we create a chord, we can zoom in to see its constituent notes. And so on.

### The Interface

At each level of the tree, we see the *name* of the data, the *type* of the data, and a *preview* of its contents. We also have a number of options available for editing the data, which will be saved when navigating elsewhere in the tree.

You'll notice right away the lower interface is divided into two halves. The first half is for the data itself. The second half is dedicated to a **viewer**, or visualization of the data. Just like the data, this is configurable and persisted at every *node* in the tree.

When in *groups*, the viewers do not display data. You must zoom in to see the data applied to the viewer. But viewers can still be configured at the group level, so all the subitems inherit the same viewer.

You can easily tell whether or not you are in a group by the presence of the *meter* right below the header. The meter shows the distribution of notes, similar to a keyboard. The notes are colored according to their degree. If you hover or tap on a note in the meter, it will be focused on the viewer as well.

### Navigation Controls

At every level, we can preview the details of its subitems by clicking the *expand* button (+) on that item. This will keep you on the current level, but give you more details about the child. To zoom into the child itself, click the *zoom* button (arrow).

At the very top of the page, you will find a list of *breadcrumbs*. These provide quick context to where you are in the tree and quick links for navigating upwards. On the right, you will see buttons for navigating to the direct parent model and the previous/next sibling models.

### Editing

To edit the contents of any level, use the *action* buttons at the top-right of the data and viewer columns. The available options differ based on the context, but include operations like loading presets, changing the viewer, setting the root note, and transposing notes. More detailed documentaion on these operations coming soon. This is the most unstable portion of the beta.

### Other Tools

Finally, we have a few options that are not saved within the data itself. In the header, you will see an **octave filter** switch and a **play sound** button. The sound button provides a very simple preview of the frequencies in the model. The octave filter toggles whether the app will match equivalent pitches in all octaves or just the exact pitch specified in the model data.

That's all you need to know to start using Play What. Please [visit the app](https://dan9418.github.io/play-what/) and start exploring. More features are planned and feedback is encouraged.

## Appendix A: Presets

### Notes
*Coming soon!*

### Intervals
*Coming soon!*

### Chords
*Coming soon!*

### Scales
*Coming soon!*

### Groups
*Coming soon!*

## Appendix B: Show Me The Math

*The remainder of this documentation is intended to cover the underlying modeling system and is not necessary to use Play What.*

### Pods
The foundational mathmatical building block of Play What is the **pod**. In it's most raw, basic form, a pod is simply a pair of two numbers.

> `[0,0]`

These numbers have some special properties:
* **Discrete Integers**
  * This simply means that the numbers are always whole numbers - no decimals or fractions are allowed. The integers can be positive, negative, or zero.
* **Cyclical/Modular**
  * This means that each index has a minimum and maximum value. If you add 1 to the maximum, it resets to the minimum. Likewise, if you subtract 1 from the minimum, it resets to the maximum. The min and max of each index is independent of the other.
* **Zero-Indexed**
  * This means that we start counting at 0 rather than 1. This makes the math easier. More on this later.

### What Do The Nubmers Represent?
The two indicies are called *p* and *d*, respectively, for *pitch* and *degree*.
> `[p, d]`

#### **Pitch (p)**
Pitch is the measurement of physical frequency in Hertz. This is the fundamental characteristic that makes any given note sound unique from others.

When a pitch is doubled or cut in half, the resulting pitches sound like higher and lower versions of the root pitch, respectively. This relationship is called an **octave**. Pitches related to each other by octaves are said to belong to the same **pitch class**.

In most tuning systems, the distance between octaves is subdivided to simplify and define the set of available pitches. By far, the most common tuning system in Western music is **twelve-tone equal-temperament (TET)**, which divides an octave into exactly 12 equal parts. The reason for this choice is not yet important, just understand that it provides a convenient and flexible set of pitches.

The distance between two adjacent pitches in this system is called a **semitone** (or *half-step*). Likewise, the distance spanning two half-steps is a **whole-tone** (or *whole-step*).

In the context of pods, the p value can represent an **absolute** pitch (*position*) or **relative** pitch (*distance*). In other words, it can be a *scalar* or a *vector*.

#### **Degree (d)**
Degree is similar to pitch, but represents a somewhat more abstract concept.

TET provides 12 unique pitch classes within a single octave. However, music is often based on a subset of these choices. Western music generally uses 7 of the 12 available pitches at any given time. The chosen pitches are each assigned a **degree**, which is denoted by a letter name or **spelling** (A-G). The exact degree and spelling choices are somewhat arbitrary and may change depending on the context and purpose. The first degree is called the **root** (or *tonic*) and all other degrees are named relative to that one. By convention, the most common root is C rather than A.

Like pitch, degree can specify a *position* or *distance*.

### Pods to Models

Since pitch and degree can represent both position and distance, we are reminded of our core models, notes and intervals. When we combine p and d, we create a pod that can be either a note or an interval, depending on what it represents mathmatically.  

### Reducing Pods

In theory, there are no minimun or maximum values for p and d. However, it is often useful to *octave reduce* pods to see their relationship within the span of a single octave. That means we have a total of 12 p choices (0-11) and 7 d choices (0-6). Any values outside this range wrap around to the beginning, as described earlier. The max value of either dimension is independent of the other.  

#### Octave (o)
When octave reducing the pitch, we discover a third, implicit value. The pitch can be dissected into two parts, **octave** and **pitch class**.

The octave represents *how many times a pitch value can wrap around the maximum*. The pitch class is *whatever remains*.

For example, a pitch value of 13 is equivalent to an octave of 1 and a pitch class of 1, since 12 fits into 13 once with a remainder of 1.

When o is included explicitly, the variable names spell out the namesake of pods.
> `[p (o), d]`

### Visualizing Pods
You can think of pods like coordinates on a cartesian plane, with p and d instead of x and y.

You may recognize that pods are simply a special kind of vector, which represent position or distance on a coordinate plane. Like all vectors, the principles of linear algebra apply to pods.

Furthmore, compound pods are simply 2xN matricies. However, we generally call them *lists* because the 2nd dimension of the matrix is kept intact.

### Applications
Given the simplicity of the pod system, we can easily and efficiently perform a number of musical operations using simple mathmatical algorithms.

#### Derivation of Names
*Coming soon!*

#### Transposition of Notes
> `[C, E, G] + M2 = [D, F, A]`

#### Derivation of Notes from Root & Intervals
>`C + [P1, M3, P5] = [C, E, G]`

#### Chordal Inversions
*Coming soon!*

#### Melodic Inversions
*Coming soon!*

#### Derivation of Roman Numerals
*Coming soon!*

#### Finding Supersets
*Coming soon!*

## What Else Can Pods Do?
The pod system allows for the qualitative modelling of abstract musical ideas in a way that is extraordinarily simple and efficient to work with.

The musical idea can be a collection of notes/intervals (like chords, scales, and melodies) or a musical operation (like transposition and inversion).

For example, in roman numeral chord analysis, which is the basis for most popular Western music, all the available chords are derived from a single scale. This derivation is essentially an algorithm, so the structured representation of pods makes them well suited to operate on.

Moreover, having a consistent model of the operation, and namely, the musical CHARACTER of the operation, allows us to separate it from the source material and even the underlying musical system. Using this abstraction, we can essentially reverse-engineer the framework of music theory to derive ideas from altered tuning systems, custom degree definitions, etc...

To this end, pods are flexible enough to accommodate nearly any musical system and can also provide an interchange format between them in some cases. For example, the "algorithm" of roman numeral chord derivation could be applied to Eastern microtonal music systems, or modified appropriately to suit such systems.

Additionally, pods can be used to make connections between variations of a musical idea within the universe of musical ideas. For example, a certain chord may be essentially identical in character to some other chord when inverted. These relationships are often intuitive to musicians, but pods can identify them clearly and unambigously, which could be useful in songwriting or algorithmic music generation.

These are just some of the far-reaching applications of pods that I hope to explore in the future.

## Appendix C: Show Me The Code

This is an open source project, but the code is not yet ready for public contribution (or scrutiny - lol).
Details will be published here when available.

## Appendix D: Planned Features

*Coming soon!*
