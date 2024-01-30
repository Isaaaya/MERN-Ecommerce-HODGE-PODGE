import { useState } from "react";
import { useParams } from "react-router-dom";
import { useListInstances } from "hooks/instance/useListInstances";
import { useDebounce } from "hooks/debounce/useDebounce";
import { useGetInstanceGroupData } from "hooks/instance/useGetInstanceGroupData";
import { useScrollToTop } from "hooks/scrollToTop/useScrollToTop";
import { usePage } from "hooks/page/usePage";

export const useAdminInstanceGroupPage = () => {
    const { instanceType } = useParams();
    const [search, setSearch] = useState("");
    const { page, setPage } = usePage({ search });
    const debouncedSearch = useDebounce({ value: search, delay: 450 });
    const instanceGroupData = useGetInstanceGroupData();
    useScrollToTop();

    const { instancesData, isInstancesPlaceholderData, stillRetrievingData } =
        useListInstances({
            configData: {
                instanceType,
                page,
                search: debouncedSearch,
                limit: 10,
            },
        });

    const { instancesData: parentInstancesData } = useListInstances({
        configData: { instanceType: instanceGroupData?.parentGroup },
        enabled: !!instanceGroupData?.parentGroup,
    });

    const instancesAreFound =
        instancesData && instancesData[instanceType]?.length > 0;

    return { instancesData, instanceType, isInstancesPlaceholderData, stillRetrievingData, instanceGroupData, parentInstancesData, instancesAreFound, page, setPage, search, setSearch }
}
