export default class FilterBy {
    static none() {
        return () => true;
    }
    static active(note) {
        return note && note.interval;
    }
}