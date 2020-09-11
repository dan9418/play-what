import _Fretboard from './Fretboard/_module';
import _Explorer from './Explorer/_module';
import _Chart from './Chart/_module';
import _List from './List/_module';

export const Fretboard = _Fretboard;
export const Explorer = _Explorer;
export const Chart = _Chart;
export const List = _List;

export const element = {
    from: ({ component, children, props }) => {
        if (typeof component !== 'string') throw ('only string component defs allowed');
        return {
            component,
            children,
            props
        };
    }
};
