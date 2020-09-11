import { AUTUMN_LEAVES } from "./Presets/Charts";

const RAW_SOURCE = {
    name: 'Test Source',
    a: 'PW/Vector/Note/preset/C/value',
    B: 'PW/Matrix/Scale/preset/Major/value',
    children: [
        {
            notes: {
                fn: 'PW/Vector/addMatrix/',
                args: {
                    B: 'parent/B',
                    a: 'parent/a',
                }
            },
            modes: {
                fn: 'PW/Matrix/Scale/getAllModes/',
                args: {
                    scale: 'parent/B',
                    keyCenter: 'parent/a',
                }
            },
            numerals: {
                fn: 'PW/Matrix/Scale/getAllNumerals/',
                args: {
                    scale: 'parent/B',
                    keyCenter: 'parent/a',
                }
            },
            children: [
                {
                    fn: 'PW/Log/print/',
                    args: {
                        a: 'parent/a',
                        B: 'parent/B',
                        notes: 'parent/notes',
                        modes: 'parent/modes',
                        numerals: 'parent/numerals'
                    }
                },
                {
                    component: 'PW_React/Explorer/component',
                    props: {
                        name: 'C Major',
                        keyCenter: 'parent/a',
                        intervals: 'parent/B',
                        viewer: {
                            component: 'PW_React/Fretboard/component',
                            //props: {}
                        }
                    }
                }
            ]
        }
    ],
};

export default RAW_SOURCE;
