import React from 'react';
import './HarmonicSeries.css';

const PRIMES = {
    ['1']: 'black',
    ['2']: 'red',
    ['3']: 'orange',
    ['5']: 'yellow',
    ['7']: 'green',
    ['9']: 'salmon',
    ['11']: 'blue',
    ['13']: 'indigo',
    ['15']: 'darkred',
    ['17']: 'purple',
    ['19']: 'darkblue',
    ['21']: 'aqua',
    ['23']: 'darkgreen',
    ['27']: 'lime'
}


const Overtone = ({ f, n }) => {
    //const color = (n * 1000).toString(16);
    //const color = Math.floor(Math.random() * parseInt('aaaaaa', 16)).toString(16);
    //console.log(color);
    let color = '#ddd';
    if (PRIMES[n]) {
        color = PRIMES[n];
    }
    else {
        let x = n;
        while (x >= 1) {
            x = x / 2;
            if (PRIMES[x]) {
                color = PRIMES[x];
                break;
            }
        }
    }

    return (
        <div className="overtone" style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
            {[...Array(n)].map((e, i) => (
                <div className="n" key={i} >
                    <div className="overtone-line"
                    style={{ backgroundColor: i === 1 && PRIMES[n] ? color : '#ddd' }}
                    onClick={}
                    />
                    <div className="overtone-info">
                        {n}
                    </div>
                </div>
            ))}
        </div>
    );
};

const DEFAULT_PROPS = {
    fundamental: 100,
    n: 8
}
const HarmonicSeries = props => {
    const { fundamental, n } = props;
    const config = { ...DEFAULT_PROPS, ...props };
    return (
        <div className="harmonic-series">
            {[...Array(n)].map((e, i) => <Overtone key={i} f={config.fundamental} n={config.n - i} />)}
        </div>
    );
};

export default HarmonicSeries;