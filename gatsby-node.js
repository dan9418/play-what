const INTERVAL_JSON = require("./static/intervals.json")
const CHORD_JSON = require("./static/chords.json")
const SCALE_JSON = require("./static/scales.json")

module.exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const intervals = INTERVAL_JSON.map(ivl => createNode({
    ...ivl,
    id: ivl.id.,
    internal: {
      type: `Interval`,
      contentDigest: createContentDigest(ivl)
    }
  }));

  const chords = CHORD_JSON.map(chord => createNode({
    ...chord,
    id: chord.id.,
    internal: {
      type: `Chord`,
      contentDigest: createContentDigest(chord)
    }
  }));

  const scales = SCALE_JSON.map(scale => createNode({
    ...scale,
    id: scale.id.,
    internal: {
      type: `Scale`,
      contentDigest: createContentDigest(scale)
    }
  }));

  return [...intervals, ...chords, ...scales];
}
