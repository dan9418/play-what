const IntervalsQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);

    return (
        <QuickLink name="Intervals" preview={intervalsDetails.preview} modal={<IntervalsModal />} />
    );
};

const RootQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [rootDetails] = useRecoilState(rootDetailsState);

    return (
        <QuickLink name="Root" preview={rootDetails.name} modal={<RootModal />} />
    );
};

const ViewerQuickLink: React.FC<any> = () => {

    // @ts-ignore
    const [viewerId, setViewerId] = useRecoilState(viewerState);

    const viewerConfig = VIEWER_PRESET_MAP.get(viewerId);

    return (
        <QuickLink name="Viewer" preview={viewerConfig.name} modal={<ViewerModal viewerId={viewerId} setViewerId={setViewerId} />} />
    );
};
