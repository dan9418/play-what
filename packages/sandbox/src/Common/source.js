import { AUTUMN_LEAVES } from "./Presets/Charts";

const RAW_SOURCE = {
    name: 'Test Source',
    a: '@core/Vector/Note/preset/C/value',
    B: '@core/Matrix/Scale/preset/Major/value',
    children: [
        {
            notes: {
                fn: '@core/Vector/addMatrix/',
                args: {
                    B: 'parent/B',
                    a: 'parent/a',
                }
            },
            modes: {
                fn: '@core/Matrix/Scale/getAllModes/',
                args: {
                    scale: 'parent/B',
                    keyCenter: 'parent/a',
                }
            },
            numerals: {
                fn: '@core/Matrix/Scale/getAllNumerals/',
                args: {
                    scale: 'parent/B',
                    keyCenter: 'parent/a',
                }
            },
            children: [
                {
                    fn: '@core/Log/print/',
                    args: {
                        a: 'parent/a',
                        B: 'parent/B',
                        notes: 'parent/notes',
                        modes: 'parent/modes',
                        numerals: 'parent/numerals'
                    }
                },
                {
                    component: '@react/Explorer/component',
                    props: {
                        name: 'C Major',
                        keyCenter: 'parent/a',
                        intervals: 'parent/B',
                        viewer: {
                            component: '@react/Fretboard/component',
                            //props: {}
                        }
                    }
                }
            ]
        }
    ],
};

export default RAW_SOURCE;
