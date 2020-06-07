export const parseSong = song => {
    const { name, defaults, sections } = song;

    const output = { name, sections: [] };

    sections.forEach(sec => {
        const bars = [];
        sec.bars.forEach(bar => {
            if (!bar) {
                bars.push(null);
                return;
            }
            const Q = defaults.q;
            let q = 0;
            const pulseMap = []; // length Q
            for (let idx = 0; idx < bar.pulses.length; idx++) {
                const pulse = bar.pulses[idx];
                const nextPulse = bar.pulses[idx + 1] || null; // TODO port logic
                const { a, B, i, x, y } = pulse;

                while (q < i) {
                    pulseMap.push(null);
                    q++;
                }
                let rem = pulse.x || defaults.x;
                while (rem >= 0 && q < Q) {
                    pulseMap.push({
                        pulse,
                        nextPulse
                    });
                    rem--;
                    q++;
                }
                // TODO handle overflow
            }
            while (q < Q) {
                pulseMap.push(null);
            }
            bars.push({ beats: pulseMap });
        });
        output.sections.push({
            name: sec.name,
            bars
        });
    });
    return output;
}