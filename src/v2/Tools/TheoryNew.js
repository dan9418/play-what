const Theory = {
    getAccidentalString: (offset) => {
        switch (offset) {
            case 0:
                return ''
            case 1:
                return '#';
            case 2:
                return 'x';
            case -1:
                return 'b';
            case -2:
                return 'bb';
            default:
                return (offset < 0) ? -offset + 'b' : offset + '#';
        }
    },
    addVectors: (origin, vector, max) => {
        return {
            p: (origin.p + vector.p) % max.p,
            d: (origin.d + vector.d) % max.d
        };
    }
}

export default Theory;