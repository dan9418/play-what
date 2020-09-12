export const TEST = {
	name: 'Test Source',
	a: '@core/Vector/Note/preset/C/value',
	B: '@core/Matrix/Scale/preset/Major/value',
	children: [
		{
			notes: {
				fn: '@core/Vector/addMatrix/',
				args: {
					B: 'parent/B',
					a: 'parent/a'
				}
			},
			modes: {
				fn: '@core/Matrix/Scale/getAllModes/',
				args: {
					scale: 'parent/B',
					keyCenter: 'parent/a'
				}
			},
			numerals: {
				fn: '@core/Matrix/Scale/getAllNumerals/',
				args: {
					scale: 'parent/B',
					keyCenter: 'parent/a'
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
							component: '@react/Fretboard/component'
							// props: {}
						}
					}
				}
			]
		}
	]
};

export const AUTUMN_LEAVES = {
	id: 'autumnLeaves',
	name: 'Autumn Leaves',
	sections: [
		{
			name: 'A',
			concepts: [
				{
					a: '@core/Vector/Note/Preset/C/value',
					B: '@core/Matrix/Chord/Preset/Min7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/F/value',
					B: '@core/Matrix/Chord/Preset/Dom7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/Bb/value',
					B: '@core/Matrix/Chord/Preset/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/Eb/value',
					B: '@core/Matrix/Chord/Preset/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/A/value',
					B: '@core/Matrix/Chord/Preset/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/D/value',
					B: '@core/Matrix/Chord/Preset/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/G/value',
					B: '@core/Matrix/Chord/Preset/Min6/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/G/value',
					B: '@core/Matrix/Chord/Preset/Maj7/value',
					t: 4
				}
			]
		},
		{
			scope: 'section',
			name: 'A\'',
			concepts: [
				{
					a: '@core/Vector/Note/Preset/C/value',
					B: '@core/Matrix/Chord/Preset/Min7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/F/value',
					B: '@core/Matrix/Chord/Preset/Dom7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/Bb/value',
					B: '@core/Matrix/Chord/Preset/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/Eb/value',
					B: '@core/Matrix/Chord/Preset/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/A/value',
					B: '@core/Matrix/Chord/Preset/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/D/value',
					B: '@core/Matrix/Chord/Preset/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/G/value',
					B: '@core/Matrix/Chord/Preset/Min6/value',
					t: 8
				}
			]
		},
		{
			scope: 'section',
			name: 'B',
			concepts: [
				{
					section: 'B',
					a: '@core/Vector/Note/Preset/A/value',
					B: '@core/Matrix/Chord/Preset/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/D/value',
					B: '@core/Matrix/Chord/Preset/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/G/value',
					B: '@core/Matrix/Chord/Preset/Min6/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/G/value',
					B: '@core/Matrix/Chord/Preset/Min6/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/C/value',
					B: '@core/Matrix/Chord/Preset/Min7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/F/value',
					B: '@core/Matrix/Chord/Preset/Dom7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/Bb/value',
					B: '@core/Matrix/Chord/Preset/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/Eb/value',
					B: '@core/Matrix/Chord/Preset/Maj7/value',
					t: 4
				}
			]
		},
		{
			scope: 'section',
			name: 'C',
			concepts: [
				{
					a: '@core/Vector/Note/Preset/A/value',
					B: '@core/Matrix/Chord/Preset/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/D/value',
					B: '@core/Matrix/Chord/Preset/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/G/value',
					B: '@core/Matrix/Chord/Preset/Min7/value',
					t: 2
				},
				{
					a: '@core/Vector/Note/Preset/C/value',
					B: '@core/Matrix/Chord/Preset/Dom7/value',
					t: 2
				},
				{
					a: '@core/Vector/Note/Preset/F/value',
					B: '@core/Matrix/Chord/Preset/Min7/value',
					t: 2
				},
				{
					a: '@core/Vector/Note/Preset/Bb/value',
					B: '@core/Matrix/Chord/Preset/Dom7/value',
					t: 2
				},
				{
					a: '@core/Vector/Note/Preset/A/value',
					B: '@core/Matrix/Chord/Preset/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/D/value',
					B: '@core/Matrix/Chord/Preset/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/G/value',
					B: '@core/Matrix/Chord/Preset/Min7/value',
					t: 4
				},
				{
					a: '@core/Vector/Note/Preset/G/value',
					B: '@core/Matrix/Chord/Preset/Min7/value',
					t: 4
				}
			]
		}
	]
};

/*
const CHARTS = [
    {
        id: 'standards',
        name: 'Jazz Standards',
        presets: [
            {
                scope: 'chart',
                id: 'autumnLeaves',
                name: 'Autumn Leaves',
                defaults: {

                },
                children:
                    [
                        {
                            scope: 'section',
                            name: 'A',
                            children: [
                                {
                                    children: [
                                        {

                                            a: '@core/Vector/Note/Preset/C/value',
                                            B: '@core/Matrix/Chord/Preset/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/F/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/Bb/value',
                                            B: '@core/Matrix/Chord/Preset/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/Eb/value',
                                            B: '@core/Matrix/Chord/Preset/Maj7/value',
                                            t: 4
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/Vector/Note/Preset/A/value',
                                            B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/D/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/G/value',
                                            B: '@core/Matrix/Chord/Preset/Min6/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/G/value',
                                            B: '@core/Matrix/Chord/Preset/Maj7/value',
                                            t: 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            scope: 'section',
                            name: 'A\'',
                            children: [
                                {
                                    children: [
                                        {

                                            a: '@core/Vector/Note/Preset/C/value',
                                            B: '@core/Matrix/Chord/Preset/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/F/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/Bb/value',
                                            B: '@core/Matrix/Chord/Preset/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/Eb/value',
                                            B: '@core/Matrix/Chord/Preset/Maj7/value',
                                            t: 4
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/Vector/Note/Preset/A/value',
                                            B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/D/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/G/value',
                                            B: '@core/Matrix/Chord/Preset/Min6/value',
                                            t: 8
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            scope: 'section',
                            name: 'B',
                            children: [
                                {
                                    children: [
                                        {

                                            section: 'B',
                                            a: '@core/Vector/Note/Preset/A/value',
                                            B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/D/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/G/value',
                                            B: '@core/Matrix/Chord/Preset/Min6/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/G/value',
                                            B: '@core/Matrix/Chord/Preset/Min6/value',
                                            t: 4
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/Vector/Note/Preset/C/value',
                                            B: '@core/Matrix/Chord/Preset/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/F/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/Bb/value',
                                            B: '@core/Matrix/Chord/Preset/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/Note/Preset/Eb/value',
                                            B: '@core/Matrix/Chord/Preset/Maj7/value',
                                            t: 4
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            scope: 'section',
                            name: 'C',
                            children: [
                                {
                                    children: [
                                        {
                                            section: 'C',
                                            a: '@core/Vector/Note/Preset/A/value',
                                            B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/Note/Preset/D/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/Note/Preset/G/value',
                                            B: '@core/Matrix/Chord/Preset/Min7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/Vector/Note/Preset/C/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/Vector/Note/Preset/F/value',
                                            B: '@core/Matrix/Chord/Preset/Min7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/Vector/Note/Preset/Bb/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7/value',
                                            t: 2
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {
                                            a: '@core/Vector/Note/Preset/A/value',
                                            B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/Note/Preset/D/value',
                                            B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/Note/Preset/G/value',
                                            B: '@core/Matrix/Chord/Preset/Min7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/Note/Preset/G/value',
                                            B: '@core/Matrix/Chord/Preset/Min7/value',
                                            t: 4
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
            },
            {
                id: 'onGreenDolphinStreet',
                name: 'On Green Dolphin Street',
                sections: [
                    {
                        name: 'A',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Db/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/E/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'B',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'A',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Db/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/E/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'C',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/B/value',
                                        B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/E/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Fs/value',
                                        B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/B/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                        t: 2
                                    },
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/E/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 'outOfNowhere',
                name: 'Out of Nowhere',
                sections: [
                    {
                        name: 'A',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/B/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/E/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                        t: 4
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'B',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/E/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                        t: 8
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'A',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/B/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/E/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                        t: 4
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'C',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/E/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7b9/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min6/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/B/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Maj6/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/A/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 'blueBossa',
                name: 'Blue Bossa',
                sections: [
                    {
                        name: 'A',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Min6/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 8
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'B',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Ab/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Db/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 'blueWorld',
                name: 'It\'s A Blue World',
                sections: [
                    {
                        name: 'A',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 8
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'B',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Gb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Gb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'A',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 8
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'C',
                        progressions: [
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Eb/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Ab/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/D/value',
                                        B: '@core/Matrix/Chord/Preset/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/G/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/C/value',
                                        B: '@core/Matrix/Chord/Preset/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/F/value',
                                        B: '@core/Matrix/Chord/Preset/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/Note/Preset/Bb/value',
                                        B: '@core/Matrix/Chord/Preset/Maj7/value',
                                        t: 8
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'exercises',
        name: 'Exercises',
        presets: [
            {
                id: 'Roman Numerals',
                name: 'Roman Numerals',
                defaults: {
                    a: '@core/Vector/Note/Preset/C/value'
                },
                sections: [
                    {
                        name: 'A',
                        progressions: [
                            {
                                name: 'ii V I',
                                concepts: [
                                    {
                                        B: '@core/Matrix/Chord/Preset/ii/value'
                                    },
                                    {
                                        B: '@core/Matrix/Chord/Preset/V/value'
                                    },
                                    {
                                        B: '@core/Matrix/Chord/Preset/i/value'
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
        ]
    }
];
*/
