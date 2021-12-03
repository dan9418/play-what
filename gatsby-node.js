const chords = require("./src/data/chords.json")

module.exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  return chords.map(chord => createNode({
    ...chord,
    //id: createNodeId(chord.id),
    internal: {
      type: `Chord`,
      contentDigest: createContentDigest(chord)
    }
  }));
}
