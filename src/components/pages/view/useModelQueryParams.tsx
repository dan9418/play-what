import { useQueryParam } from "use-query-params";

const useModelQueryParams = () => {
  const [qpModelType] = useQueryParam("modelType");
  const [qpModelId] = useQueryParam("presetId");
  const [qpRootId] = useQueryParam("rootId");

  return [qpModelType, qpModelId, qpRootId];
};

export default useModelQueryParams;
