import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { ChordId, ModelType, NoteId } from "../../../core/models/Model.constants";
import Fretboard from "../../../viewers/fretboard/Fretboard";
import { TuningId, TUNING_PRESET_MAP } from "../../../viewers/fretboard/Fretboard.tuning";
import Keyboard from "../../../viewers/keyboard/Keyboard";
import DEFAULT_KEYBOARD_PROPS from "../../../viewers/keyboard/Keyboard.defaults";
import { StyledPageBody } from "../../layout/PageBody";
import PageTitle from "../../layout/PageTitle";
import Card, { StyledCard } from "../../ui/Card";
import { getNewModel } from "./NotesCol";

const StyledViewPage = styled(StyledPageBody)`
	
    ${StyledCard} {
        .fretboard, .keyboard {
            margin: 0;
            & + a {
                padding-top: 16px;
                font-size: 150%;
                font-weight: bold;
                display: block;
                text-align: right;
            }
        }

        margin-top: 16px;
         .instrument {
            display: grid;
            grid-template-columns: 1fr;
            @media(min-width: 512px) {
                grid-template-columns: 1fr 1fr;
            }
            gap: 16px;
            align-items: flex-start;

            h4 {
                text-transform: uppercase;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                td, th {
                    padding: 4px 0;
                    text-align: left;
                }
            }
        }
    }
`;

const COMMON_MODEL = getNewModel(ModelType.Chord, ChordId.MajTriad, NoteId.C);

const COMMON_FRETBOARD_PROPS = {
    model: COMMON_MODEL,
    showFretNumbers: false,
    showFretDots: false
}

const ViewPage: React.FC<any> = () => {

    return (
        <StyledViewPage>
            <PageTitle title="Instruments" subtitle="Choose an instrument preset" />
            <Card title="Guitar">
                <div className='instrument'>
                    <div>
                        <h4>Available Tunings</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Strings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Standard</Link></td>
                                    <td>E, A, D, G, B, E</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Flat</Link></td>
                                    <td>Eb, Ab, Db, Gb, Bb, Eb</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Double Flat</Link></td>
                                    <td>D, G, C, F, A, D</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Standard 7-String</Link></td>
                                    <td>B, E, A, D, G, B, E</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Drop D</Link></td>
                                    <td>D, A, D, G, B, E</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Open A</Link></td>
                                    <td>E, A, C#, E, A, E</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Open B</Link></td>
                                    <td>B, F#, B, F#, B, D#</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Open C</Link></td>
                                    <td>C, G, C, G, C, E</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Open D</Link></td>
                                    <td>D, A, D, F#, A, D</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Open E</Link></td>
                                    <td>E, B, E, G#, B, E</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Open F</Link></td>
                                    <td>F, A, C, F, C, F</td>
                                </tr>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Open G</Link></td>
                                    <td>D, G, G, B, D</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div>
                        <Fretboard
                            {...COMMON_FRETBOARD_PROPS}
                            tuning={TUNING_PRESET_MAP.get(TuningId.Standard).value}
                        />
                        <Link to='/view/fretboard/'>
                            Use Default Guitar {'>'}
                        </Link>
                    </div>
                </div>
            </Card>
            <Card title="Bass">
                <div className='instrument'>
                    <div>
                        <h4>Available Tunings</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Strings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Standard</Link></td>
                                    <td>E, A, D, G</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Fretboard
                            {...COMMON_FRETBOARD_PROPS}
                            tuning={TUNING_PRESET_MAP.get(TuningId.StandardBass).value}
                        />
                        <Link to='/view/fretboard/'>
                            Use Default Bass {'>'}
                        </Link>
                    </div>
                </div>
            </Card>
            <Card title="Keyboard">
                <div className='instrument'>
                    <div>
                        <h4>Available Tunings</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Key Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to='/view/fretboard/'>Double Octave</Link></td>
                                    <td>C2-C4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <Keyboard
                            model={COMMON_MODEL}
                            keyRange={DEFAULT_KEYBOARD_PROPS.keyRange as [number, number]}
                        />
                        <Link to='/view/keyboard/'>
                            Use Default Keyboard {'>'}
                        </Link>
                    </div>
                </div>
            </Card>
        </StyledViewPage >
    )
};

export default ViewPage;
