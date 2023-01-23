const NOTE_JSON = require("./static/notes.json")
//const INTERVAL_JSON = require("./static/intervals.json")
const CHORD_JSON = require("./static/chords.json")
const SCALE_JSON = require("./static/scales.json")

const STATIC_PAGES = [
  { route: '/about/' },
  { route: '/browse/index/' },
  { route: '/browse/chords/' },
  { route: '/browse/scales/' },
  { route: '/coming-soon/' },
  { route: '/help/' },
  { route: '/index/' },
  { route: '/search/' },
  { route: '/view/fretboard/' },
  { route: '/dev/index/' },
  { route: '/dev/experimental/edit-theme/' },
  { route: '/dev/test/all-intervals-from-all-roots/' },
  { route: '/dev/notebook/index/' },
  { route: '/dev/notebook/caged/chords-and-scales-within-shapes/' },
  { route: '/dev/notebook/chord-charts/jazz-standards/' },
  { route: '/dev/notebook/chord-progressions/2-5-1-on-guitar/' },
  { route: '/dev/notebook/chords/voicings/common-voicings-from-e-a-d-roots/' },
  { route: '/dev/notebook/intervals/advanced/possible-extensions-for-chords/' },
  { route: '/dev/notebook/intervals/basic/intervals-table/' }
];

const POD_LIST_PATH = './src/components/pages/browse/pod-list.page.tsx';

module.exports.sourceNodes = ({ actions, createContentDigest }) => {
  const { createNode } = actions;

  const notes = NOTE_JSON.map(note => createNode({
    ...note,
    id: note.modelId,
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
    id: chord.modelId,
    internal: {
      type: `Chord`,
      contentDigest: createContentDigest(chord)
    }
  }));

  const scales = SCALE_JSON.map(scale => createNode({
    ...scale,
    id: scale.modelId,
    internal: {
      type: `Scale`,
      contentDigest: createContentDigest(scale)
    }
  }));

  return [...notes, /*...intervals, */...chords, ...scales];
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  STATIC_PAGES.forEach(page => {
    const { route } = page;
    const path = route.replace('/index/', '/');
    const componentPath = `./src/components/pages${route.slice(0, route.length - 1)}.page.tsx`;
    createPage({
      path,
      component: require.resolve(componentPath),
      context: {}
    });
  });

  /*const { data } = await graphql(`
    query {
      //your query here
    }
  `)*/

  // CHORDS

  CHORD_JSON.forEach(model => {
    createPage({
      path: `/browse/chords/${model.modelId}/`,
      component: require.resolve(POD_LIST_PATH),
      context: { modelType: 'chords', modelId: model.modelId },
    });

    NOTE_JSON.forEach(root => {
      createPage({
        path: `/browse/chords/${model.modelId}/root/${root.modelId}/`,
        component: require.resolve(POD_LIST_PATH),
        context: { modelType: 'chords', modelId: model.modelId, rootId: root.modelId },
      });
    })

  });

  // SCALES

  SCALE_JSON.forEach(model => {
    createPage({
      path: `/browse/scales/${model.modelId}/`,
      component: require.resolve(POD_LIST_PATH),
      context: { modelType: 'scales', modelId: model.modelId },
    });

    NOTE_JSON.forEach(root => {
      createPage({
        path: `/browse/scales/${model.modelId}/root/${root.modelId}/`,
        component: require.resolve(POD_LIST_PATH),
        context: { modelType: 'scales', modelId: model.modelId, rootId: root.modelId },
      });
    })

  });

}
