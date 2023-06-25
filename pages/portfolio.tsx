import Layout from "@/components/layout/layout";
import requestApi from "@/components/requestApi";
import { useEffect, useState } from "react";
import prepareData from "@/components/prepareData";
import {PortfolioItem,ItemsByGroup} from '../type'

export default function contacts() {

    const [data, setData] = useState<Array<PortfolioItem>>([]);
    
    const [arrData, setArrData] = useState<ItemsByGroup>([
        ["Корпоративные сайты", []],
        ["CRM-системы", []],
        ["Прочие проекты", []],
    ]);

    useEffect(() => {
        requestApi(setData);
    }, []);

    useEffect(() => {
        const result = prepareData(data)
        setArrData(result);
    }, [data]);

    return <Layout></Layout>;
}
