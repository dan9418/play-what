const NOTE_JSON = require("./static/notes.json")
const INTERVAL_JSON = require("./static/intervals.json")
const CHORD_JSON = require("./static/chords.json")
const SCALE_JSON = require("./static/scales.json")

module.exports.sourceNodes = ({ actions, createContentDigest }) => {
  const { createNode } = actions

  const notes = NOTE_JSON.map(note => createNode({
    ...note,
    internal: {
      type: `Interval`,
      contentDigest: createContentDigest(ivl)
    }
  }));

  const intervals = INTERVAL_JSON.map(ivl => createNode({
    ...ivl,
    internal: {
      type: `Interval`,
      contentDigest: createContentDigest(ivl)
    }
  }));

  const chords = CHORD_JSON.map(chord => createNode({
    ...chord,
    internal: {
      type: `Chord`,
      contentDigest: createContentDigest(chord)
    }
  }));

  const scales = SCALE_JSON.map(scale => createNode({
    ...scale,
    internal: {
      type: `Scale`,
      contentDigest: createContentDigest(scale)
    }
  }));

  return [...notes, ...intervals, ...chords, ...scales];
}
