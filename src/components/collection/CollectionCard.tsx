import { Link } from "gatsby";
import React from "react";
import { useRootSuffix } from "../../contexts/PagePropsContext";
import Chord from "../../core/models/Chord";
import { CHORD_PRESETS, SCALE_PRESETS } from "../../core/models/Model.presets";
import Scale from "../../core/models/Scale";
import Card from "../ui/Card";
import CollectionTable, { ICollectionTableProps } from "./CollectionTable";

const CollectionCard: React.FC<any> = ({ title, data }) => {
    return (
        <Card title={title} >
            <CollectionTable data={data} />
        </Card>
    );
};

export default CollectionCard;
