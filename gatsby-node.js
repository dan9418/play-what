const NOTE_JSON = require("./static/notes.json")
const CHORD_JSON = require("./static/chords.json")
const SCALE_JSON = require("./static/scales.json")

const STATIC_PAGES = [
  { route: '/index/' },
  { route: '/browse/index/' },
  //{ route: '/browse/chords/' },
  //{ route: '/browse/scales/' },
  //{ route: '/about/' },
  //{ route: '/coming-soon/' },
  //{ route: '/help/' },
  // { route: '/view/fretboard/' },
  // { route: '/dev/index/' },
  // { route: '/dev/experimental/edit-theme/' },
  // { route: '/dev/test/all-intervals-from-all-roots/' },
  // { route: '/dev/notebook/index/' },
  // { route: '/dev/notebook/shapes/relationship-of-shapes/' },
  // { route: '/dev/notebook/shapes/connecting-shapes/' },
  // { route: '/dev/notebook/shapes/the-caged-system/' },
  // { route: '/dev/notebook/chord-charts/jazz-standards/' },
  // { route: '/dev/notebook/roman-numerals/deriving-numerals-from-scales/' },
  // { route: '/dev/notebook/roman-numerals/2-5-1-on-guitar/' },
  // { route: '/dev/notebook/roman-numerals/common-chord-progressions/' },
  // { route: '/dev/notebook/chords/voicings/common-voicings-from-e-a-d-roots/' },
  // { route: '/dev/notebook/chords/extensions/possible-extensions-for-chords/' },
  // { route: '/dev/notebook/intervals/extended-intervals-vs-standard-intervals/' },
  // { route: '/dev/notebook/intervals/intervals-from-fret-positions/' },
  // { route: '/dev/notebook/intervals/intervals-vs-harmonics/' },
  // { route: '/dev/notebook/intervals/intervals-vs-semitones/' }
];

const POD_LIST_PATH = './src/components/pages/browse/pod-list.page.tsx';

// module.exports.sourceNodes = ({ actions, createContentDigest }) => {
//   const { createNode } = actions;

//   const notes = NOTE_JSON.map(note => createNode({
//     ...note,
//     id: note.modelId,
//     internal: {
//       type: `Note`,
//       contentDigest: createContentDigest(note)
//     }
//   }));

//   const chords = CHORD_JSON.map(chord => createNode({
//     ...chord,
//     id: chord.modelId,
//     internal: {
//       type: `Chord`,
//       contentDigest: createContentDigest(chord)
//     }
//   }));

//   const scales = SCALE_JSON.map(scale => createNode({
//     ...scale,
//     id: scale.modelId,
//     internal: {
//       type: `Scale`,
//       contentDigest: createContentDigest(scale)
//     }
//   }));

//   return [...notes, ...chords, ...scales];
// }

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

  // CHORD_JSON.forEach(model => {
  //   createPage({
  //     path: `/browse/chords/${model.modelId}/`,
  //     component: require.resolve(POD_LIST_PATH),
  //     context: { presetType: 'chords', modelId: model.modelId },
  //   });

  //   NOTE_JSON.forEach(root => {
  //     createPage({
  //       path: `/browse/chords/${model.modelId}/root/${root.modelId}/`,
  //       component: require.resolve(POD_LIST_PATH),
  //       context: { presetType: 'chords', modelId: model.modelId, rootId: root.modelId },
  //     });
  //   })

  // });

  // SCALE_JSON.forEach(model => {
  //   createPage({
  //     path: `/browse/scales/${model.modelId}/`,
  //     component: require.resolve(POD_LIST_PATH),
  //     context: { presetType: 'scales', modelId: model.modelId },
  //   });

  //   NOTE_JSON.forEach(root => {
  //     createPage({
  //       path: `/browse/scales/${model.modelId}/root/${root.modelId}/`,
  //       component: require.resolve(POD_LIST_PATH),
  //       context: { presetType: 'scales', modelId: model.modelId, rootId: root.modelId },
  //     });
  //   })

  // });

}
