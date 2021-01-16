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

                                            a: '@core/models/pod/preset/note/C/value',
                                            B: '@core/models/podList/preset/chord/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/F/value',
                                            B: '@core/models/podList/preset/chord/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/Bb/value',
                                            B: '@core/models/podList/preset/chord/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/Eb/value',
                                            B: '@core/models/podList/preset/chord/Maj7/value',
                                            t: 4
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/models/pod/preset/note/A/value',
                                            B: '@core/models/podList/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/D/value',
                                            B: '@core/models/podList/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/G/value',
                                            B: '@core/models/podList/preset/chord/Min6/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/G/value',
                                            B: '@core/models/podList/preset/chord/Maj7/value',
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

                                            a: '@core/models/pod/preset/note/C/value',
                                            B: '@core/models/podList/preset/chord/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/F/value',
                                            B: '@core/models/podList/preset/chord/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/Bb/value',
                                            B: '@core/models/podList/preset/chord/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/Eb/value',
                                            B: '@core/models/podList/preset/chord/Maj7/value',
                                            t: 4
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/models/pod/preset/note/A/value',
                                            B: '@core/models/podList/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/D/value',
                                            B: '@core/models/podList/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/G/value',
                                            B: '@core/models/podList/preset/chord/Min6/value',
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
                                            a: '@core/models/pod/preset/note/A/value',
                                            B: '@core/models/podList/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/D/value',
                                            B: '@core/models/podList/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/G/value',
                                            B: '@core/models/podList/preset/chord/Min6/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/G/value',
                                            B: '@core/models/podList/preset/chord/Min6/value',
                                            t: 4
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {

                                            a: '@core/models/pod/preset/note/C/value',
                                            B: '@core/models/podList/preset/chord/Min7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/F/value',
                                            B: '@core/models/podList/preset/chord/Dom7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/Bb/value',
                                            B: '@core/models/podList/preset/chord/Maj7/value',
                                            t: 4
                                        },
                                        {

                                            a: '@core/models/pod/preset/note/Eb/value',
                                            B: '@core/models/podList/preset/chord/Maj7/value',
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
                                            a: '@core/models/pod/preset/note/A/value',
                                            B: '@core/models/podList/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/models/pod/preset/note/D/value',
                                            B: '@core/models/podList/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/models/pod/preset/note/G/value',
                                            B: '@core/models/podList/preset/chord/Min7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/models/pod/preset/note/C/value',
                                            B: '@core/models/podList/preset/chord/Dom7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/models/pod/preset/note/F/value',
                                            B: '@core/models/podList/preset/chord/Min7/value',
                                            t: 2
                                        },
                                        {
                                            a: '@core/models/pod/preset/note/Bb/value',
                                            B: '@core/models/podList/preset/chord/Dom7/value',
                                            t: 2
                                        },

                                    ]
                                },
                                {
                                    children: [
                                        {
                                            a: '@core/models/pod/preset/note/A/value',
                                            B: '@core/models/podList/preset/chord/HalfDim7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/models/pod/preset/note/D/value',
                                            B: '@core/models/podList/preset/chord/Dom7b9/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/models/pod/preset/note/G/value',
                                            B: '@core/models/podList/preset/chord/Min7/value',
                                            t: 4
                                        },
                                        {
                                            a: '@core/models/pod/preset/note/G/value',
                                            B: '@core/models/podList/preset/chord/Min7/value',
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
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Db/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/E/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/A/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
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
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/G/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/G/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
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
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Db/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/E/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/A/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
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
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/B/value',
                                        B: '@core/models/podList/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/E/value',
                                        B: '@core/models/podList/preset/chord/Dom7b9/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/A/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/A/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Fs/value',
                                        B: '@core/models/podList/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/B/value',
                                        B: '@core/models/podList/preset/chord/Dom7b9/value',
                                        t: 2
                                    },
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/E/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/A/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/G/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/G/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 8
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
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 8
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Min6/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/HalfDim7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/G/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
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
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Ab/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Db/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/HalfDim7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/G/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/G/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
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
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
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
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Gb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Gb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
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
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
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
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Eb/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Ab/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/D/value',
                                        B: '@core/models/podList/preset/chord/HalfDim7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/G/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 2
                                    }
                                ]
                            },
                            {
                                concepts: [
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 4
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/C/value',
                                        B: '@core/models/podList/preset/chord/Min7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/F/value',
                                        B: '@core/models/podList/preset/chord/Dom7/value',
                                        t: 2
                                    },
                                    {
                                        a: '@core/models/pod/preset/note/Bb/value',
                                        B: '@core/models/podList/preset/chord/Maj7/value',
                                        t: 8
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
*/
