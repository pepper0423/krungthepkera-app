import GlobalNavbar from "@/components/globalnavbar";
import { useRouter } from 'next/router';
import Breadcrumb from "@/components/breadcrumbs";
import { useHistory } from "react-router-dom";

export default function sItem() {
    const router = useRouter();
    const { id, param } = router.query;

    const history = useHistory();

    const breadcrumbItems = [
        { label: 'เลือกประเภทกีฬา', href: '/sport' },
        { label: 'เลือกอุปกรณ์กีฬา', href: history.location.pathname },
        { label: 'อุปกรณ์กีฬา' },
    ];

    return (
        <>
            <GlobalNavbar />
            <Breadcrumb breadcrumb={breadcrumbItems} />
        </>
    );
}