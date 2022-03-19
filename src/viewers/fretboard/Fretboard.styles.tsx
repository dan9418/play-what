import styled from 'styled-components';

const StyledFretboard = styled.div`
    display: inline-grid;
	width: 100%;
	background-image: radial-gradient(ellipse, #E8DBB8 0%, #D0B27C 100%);
	font-size: 90%;
	margin: 16px 0;

    .fret {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-right: 2px solid darkgrey;
    }

    .fret.open {
        border-right: 3px solid grey;
        background-color: #D0B27C;;
    }

    /* Used to maintain aspect ratio */

    .fret::before {
        content: "";
        display: block;
        height: 0;
        width: 0;
        margin-top: calc(1/2 * 100%);
    }

    /* Fret String */

    .fret-string {
        border-top: 1px solid grey;
        width: 100%;
    }

    /* Fret Numbers */

    .fret-number {
        position: absolute;
        bottom: 100%;
    }

    /* Fret Dots */

    .fret-dots {
        position: absolute;
        top: 95%;
        font-size: 16px;
        white-space: nowrap;
    }

    .fret-number, .fret-dots {
        color: #888;
    }
`;

export default StyledFretboard;
