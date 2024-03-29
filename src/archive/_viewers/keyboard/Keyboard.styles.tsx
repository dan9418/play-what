import styled from 'styled-components';

const StyledKeyboard = styled.div`
    display: inline-flex;
	width: 100%;
	//min-width: 100px;
    font-size: 12px;
	text-align: center;
	font-family: sans-serif;
	margin: 16px 0;

    .center {
        text-align: center;
    }

    /* Key Container */

    .white-key-container {
        display: inline-block;
    }

    .black-key-container {
        display: inline-block;
        width: 0px;
    }

    /* Key */

    .keyboard-key {
        vertical-align: top;
        position: relative;
        display: inline-flex;
        justify-content: center;
        cursor: pointer;
    }

    .white-key {
        box-shadow: 0 0 1px 1px black inset;
        border-radius: 0 0 5% 5%;
    }

    /*.white-key:hover {
        box-shadow: 0 0 1px 2px black inset;
    }*/

    .black-key {
        box-shadow: 0 0 1px 2px #333 inset;
        z-index: 10;
        border-radius: 0 0 10% 10%;
    }

    /*.black-key:hover {
        background-color: #333;
        box-shadow: 0 0 1px 2px black inset;
    }*/

    /* Colors (applied only in absence of degree class) */

    .white {
        background-color: white;
        color: black;
    }

    .black {
        background-color: black;
        color: white;
    }


    /* Label */

    .white-key .keyboard-key-label {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 0 0 5% 5%;
        box-shadow: 0 0 1px 1px black inset;

        padding-bottom: 4px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    /*.white-key .keyboard-key-label:hover {
        box-shadow: 0 0 1px 2px black inset;
    }*/

    .black-key .keyboard-key-label {
        bottom: 105%;
        position: absolute;
        color: black;
    }
`;

export default StyledKeyboard;
