import React, { useState } from "react";
import { IPod } from "../../../../../core/src/models/Model.constants";
import Meter from '../../../../../viewers/src/Meter/Meter';
import { useIsDesktop, useIsTablet } from "../../../hooks/useWindowSize";
import Panel from './Panel';

interface INotesPanelProps {
    root: IPod;
    notes: IPod[];
    preview: string;
}

interface IRangeConfig {
    mobile: [number, number],
    tablet: [number, number],
    desktop: [number, number]
}

const DEFAULT_RANGE: IRangeConfig = {
    mobile: [0, 12],
    tablet: [-12, 24],
    desktop: [-44, 44]
}

const NotesPanel: React.FC<INotesPanelProps> = ({ root, notes, preview }) => {

    const isTablet = useIsTablet();
    const isDesktop = useIsDesktop();

    const [range, setRange] = useState<IRangeConfig>(DEFAULT_RANGE);

    const deviceRange = isDesktop ? range.desktop : isTablet ? range.tablet : range.mobile;

    const notesModal = <h2>Edit Notes</h2>;

    return (
        <Panel name="Notes" preview={preview} modal={notesModal} headerChildren={<Meter root={root} notes={notes} range={deviceRange} />}>
            stuff here
        </Panel>
    );
};

export default NotesPanel;
