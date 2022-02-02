const NOTE_JSON = require("./static/notes.json")
//const INTERVAL_JSON = require("./static/intervals.json")
const CHORD_JSON = require("./static/chords.json")
const SCALE_JSON = require("./static/scales.json")

module.exports.sourceNodes = ({ actions, createContentDigest }) => {
  const { createNode } = actions

  const notes = NOTE_JSON.map(note => createNode({
    ...note,
    internal: {
      type: `Note`,
      contentDigest: createContentDigest(note)
    }
  }));

  /*const intervals = INTERVAL_JSON.map(ivl => createNode({
    ...ivl,
    internal: {
      type: `Interval`,
      contentDigest: createContentDigest(ivl)
    }
  }));*/

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

  return [...notes, /*...intervals, */...chords, ...scales];
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  /*const { data } = await graphql(`
    query {
      //your query here
    }
  `)*/

  // CHORDS

  createPage({
    path: `/browse/chords/`,
    component: require.resolve(
      './src/components/pages/ChordsPage.tsx'
    ),
    context: {},
  });

  CHORD_JSON.forEach(model => {
    createPage({
      path: `/browse/chords/${model.modelId}/`,
      component: require.resolve(
        './src/components/pages/PodListPage.tsx'
      ),
      context: { modelType: 'chords', modelId: model.modelId },
    });

    NOTE_JSON.forEach(root => {
      createPage({
        path: `/browse/chords/${model.modelId}/root/${root.modelId}/`,
        component: require.resolve(
          './src/components/pages/PodListPage.tsx'
        ),
        context: { modelType: 'chords', modelId: model.modelId, rootId: root.modelId },
      });
    })

  });

  // SCALES

  createPage({
    path: `/browse/scales/`,
    component: require.resolve(
      './src/components/pages/ScalesPage.tsx'
    ),
    context: {},
  });

  SCALE_JSON.forEach(model => {
    createPage({
      path: `/browse/scales/${model.modelId}/`,
      component: require.resolve(
        './src/components/pages/PodListPage.tsx'
      ),
      context: { modelType: 'scales', modelId: model.modelId },
    });

    NOTE_JSON.forEach(root => {
      createPage({
        path: `/browse/scales/${model.modelId}/root/${root.modelId}/`,
        component: require.resolve(
          './src/components/pages/PodListPage.tsx'
        ),
        context: { modelType: 'scales', modelId: model.modelId, rootId: root.modelId },
      });
    })

  });

}
