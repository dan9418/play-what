export const TEST = {
	name: 'Test Source',
	a: '@core/Vector/preset/note/C/value',
	B: '@core/Matrix/preset/scale/Major/value',
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
				fn: '@core/Matrix/getAllModes/',
				args: {
					scale: 'parent/B',
					keyCenter: 'parent/a'
				}
			},
			numerals: {
				fn: '@core/Matrix/getAllNumerals/',
				args: {
					scale: 'parent/B',
					keyCenter: 'parent/a'
				}
			},
			children: [
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
					a: '@core/Vector/preset/note/C/value',
					B: '@core/Matrix/preset/chord/Min7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/F/value',
					B: '@core/Matrix/preset/chord/Dom7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/Bb/value',
					B: '@core/Matrix/preset/chord/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/Eb/value',
					B: '@core/Matrix/preset/chord/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/A/value',
					B: '@core/Matrix/preset/chord/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/D/value',
					B: '@core/Matrix/preset/chord/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/G/value',
					B: '@core/Matrix/preset/chord/Min6/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/G/value',
					B: '@core/Matrix/preset/chord/Maj7/value',
					t: 4
				}
			]
		},
		{
			scope: 'section',
			name: 'A\'',
			concepts: [
				{
					a: '@core/Vector/preset/note/C/value',
					B: '@core/Matrix/preset/chord/Min7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/F/value',
					B: '@core/Matrix/preset/chord/Dom7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/Bb/value',
					B: '@core/Matrix/preset/chord/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/Eb/value',
					B: '@core/Matrix/preset/chord/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/A/value',
					B: '@core/Matrix/preset/chord/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/D/value',
					B: '@core/Matrix/preset/chord/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/G/value',
					B: '@core/Matrix/preset/chord/Min6/value',
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
					a: '@core/Vector/preset/note/A/value',
					B: '@core/Matrix/preset/chord/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/D/value',
					B: '@core/Matrix/preset/chord/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/G/value',
					B: '@core/Matrix/preset/chord/Min6/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/G/value',
					B: '@core/Matrix/preset/chord/Min6/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/C/value',
					B: '@core/Matrix/preset/chord/Min7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/F/value',
					B: '@core/Matrix/preset/chord/Dom7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/Bb/value',
					B: '@core/Matrix/preset/chord/Maj7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/Eb/value',
					B: '@core/Matrix/preset/chord/Maj7/value',
					t: 4
				}
			]
		},
		{
			scope: 'section',
			name: 'C',
			concepts: [
				{
					a: '@core/Vector/preset/note/A/value',
					B: '@core/Matrix/preset/chord/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/D/value',
					B: '@core/Matrix/preset/chord/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/G/value',
					B: '@core/Matrix/preset/chord/Min7/value',
					t: 2
				},
				{
					a: '@core/Vector/preset/note/C/value',
					B: '@core/Matrix/preset/chord/Dom7/value',
					t: 2
				},
				{
					a: '@core/Vector/preset/note/F/value',
					B: '@core/Matrix/preset/chord/Min7/value',
					t: 2
				},
				{
					a: '@core/Vector/preset/note/Bb/value',
					B: '@core/Matrix/preset/chord/Dom7/value',
					t: 2
				},
				{
					a: '@core/Vector/preset/note/A/value',
					B: '@core/Matrix/preset/chord/HalfDim7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/D/value',
					B: '@core/Matrix/preset/chord/Dom7b9/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/G/value',
					B: '@core/Matrix/preset/chord/Min7/value',
					t: 4
				},
				{
					a: '@core/Vector/preset/note/G/value',
					B: '@core/Matrix/preset/chord/Min7/value',
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

                                            a: '@core/Vector/preset/note/C/value',
                                            B: '@core/Matrix/preset/chord/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/F/value',
                                            B: '@core/Matrix/preset/chord/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/Bb/value',
                                            B: '@core/Matrix/preset/chord/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/Eb/value',
                                            B: '@core/Matrix/preset/chord/Maj7/value',
                                            t: 4
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/Vector/preset/note/A/value',
                                            B: '@core/Matrix/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/D/value',
                                            B: '@core/Matrix/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/G/value',
                                            B: '@core/Matrix/preset/chord/Min6/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/G/value',
                                            B: '@core/Matrix/preset/chord/Maj7/value',
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

                                            a: '@core/Vector/preset/note/C/value',
                                            B: '@core/Matrix/preset/chord/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/F/value',
                                            B: '@core/Matrix/preset/chord/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/Bb/value',
                                            B: '@core/Matrix/preset/chord/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/Eb/value',
                                            B: '@core/Matrix/preset/chord/Maj7/value',
                                            t: 4
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/Vector/preset/note/A/value',
                                            B: '@core/Matrix/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/D/value',
                                            B: '@core/Matrix/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/G/value',
                                            B: '@core/Matrix/preset/chord/Min6/value',
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
                                            a: '@core/Vector/preset/note/A/value',
                                            B: '@core/Matrix/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/D/value',
                                            B: '@core/Matrix/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/G/value',
                                            B: '@core/Matrix/preset/chord/Min6/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/G/value',
                                            B: '@core/Matrix/preset/chord/Min6/value',
                                            t: 4
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/Vector/preset/note/C/value',
                                            B: '@core/Matrix/preset/chord/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/F/value',
                                            B: '@core/Matrix/preset/chord/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/Bb/value',
                                            B: '@core/Matrix/preset/chord/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/Vector/preset/note/Eb/value',
                                            B: '@core/Matrix/preset/chord/Maj7/value',
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
                                            a: '@core/Vector/preset/note/A/value',
                                            B: '@core/Matrix/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/preset/note/D/value',
                                            B: '@core/Matrix/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/preset/note/G/value',
                                            B: '@core/Matrix/preset/chord/Min7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/Vector/preset/note/C/value',
                                            B: '@core/Matrix/preset/chord/Dom7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/Vector/preset/note/F/value',
                                            B: '@core/Matrix/preset/chord/Min7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/Vector/preset/note/Bb/value',
                                            B: '@core/Matrix/preset/chord/Dom7/value',
                                            t: 2
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {
                                            a: '@core/Vector/preset/note/A/value',
                                            B: '@core/Matrix/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/preset/note/D/value',
                                            B: '@core/Matrix/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/preset/note/G/value',
                                            B: '@core/Matrix/preset/chord/Min7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/Vector/preset/note/G/value',
                                            B: '@core/Matrix/preset/chord/Min7/value',
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
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Db/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/E/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
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
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
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
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Db/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/E/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
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
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/B/value',
                                        B: '@core/Matrix/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/E/value',
                                        B: '@core/Matrix/preset/chord/Dom7b9/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Fs/value',
                                        B: '@core/Matrix/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/B/value',
                                        B: '@core/Matrix/preset/chord/Dom7b9/value',
                                        t: 2
                                    },
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/E/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
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
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/B/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/E/value',
                                        B: '@core/Matrix/preset/chord/Dom7b9/value',
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
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/E/value',
                                        B: '@core/Matrix/preset/chord/Dom7b9/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Dom7b9/value',
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
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/B/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/E/value',
                                        B: '@core/Matrix/preset/chord/Dom7b9/value',
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
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/E/value',
                                        B: '@core/Matrix/preset/chord/Dom7b9/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min6/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/B/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Maj6/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/A/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
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
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Min6/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/HalfDim7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
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
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Ab/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Db/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/HalfDim7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
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
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
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
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Gb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Gb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
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
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
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
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Eb/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Ab/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/D/value',
                                        B: '@core/Matrix/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/G/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 2
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/Vector/preset/note/C/value',
                                        B: '@core/Matrix/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/F/value',
                                        B: '@core/Matrix/preset/chord/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/Vector/preset/note/Bb/value',
                                        B: '@core/Matrix/preset/chord/Maj7/value',
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
                    a: '@core/Vector/preset/note/C/value'
                },
                sections: [
                    {
                        name: 'A',
                        progressions: [
                            {
                                name: 'ii V I',
                                concepts: [
                                    {
                                        B: '@core/Matrix/preset/chord/ii/value'
                                    },
                                    {
                                        B: '@core/Matrix/preset/chord/V/value'
                                    },
                                    {
                                        B: '@core/Matrix/preset/chord/i/value'
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
