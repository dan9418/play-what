export enum PageTemplate {
    Home = '/',
    Browse = '/browse/',
    ChordDirectory = 'browse/chords/',
    ChordIntervals = '/browse/chords/{modelId}/',
    ChordDetails = '/browse/chords/{modelId}/root/{rootId}/',
    ScaleDirectory = '/browse/scales/',
    ScaleIntervals = '/browse/{modelId}/',
    ScaleDetails = '/browse/{modelId}/root/{rootId}',
    View = '/view/',
    Fretboard = '/view/fretboard/',
    Keyboard = '/view/keyboard/',
    Search = '/search/',
    Help = '/help/',
    ComingSoon = '/coming-soon/',
    About = '/about/',
    Dev = '/dev/'
}
