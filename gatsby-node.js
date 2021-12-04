const chords = require("./src/data/chords.json")

module.exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const intervals = [];

  const chords = chords.map(chord => createNode({
    ...chord,
    //id: createNodeId(chord.id),
    id: chord.id.toLowerCase(),
    internal: {
      type: `Chord`,
      contentDigest: createContentDigest(chord)
    }
  }));

  const scales = [];

  return [...intervals, ...chords, ...scales];

}
