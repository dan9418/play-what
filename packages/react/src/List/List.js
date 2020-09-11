import * as React from "react";
import DropdownInput from '../UI/DropdownInput/DropdownInput';
import "./List.css";

const List = ({ children, list, viewer, name, ...props }) => {

    const [open, setOpen] = React.useState(true);
    const [index, setIndex] = React.useState(0);

    const concepts = list.map((c, i) => {
        const Comp = viewer.component;
        const { a: keyCenter, B: intervals, name } = c;
        return (
            <>
                <h4>{name}</h4>
                <div className="subcard">
                    <Comp {...viewer.props} keyCenter={keyCenter} intervals={intervals} name={name} key={i} />
                </div>
            </>
        );
    });

    const options = list.map((v, i) => ({ id: i, name: v.name }));

    return (
        <>
            <h3 onClick={() => setOpen(!open)}>{name}</h3>
            <DropdownInput options={options} value={list[index]} setValue={v => setIndex(v.id)} />
            <div className="card">
                {open && concepts[index]}
            </div>
        </>
    );
}

export default List;