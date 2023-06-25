import {PortfolioItem,ItemsByGroup} from '../type'




const prepareData = (data: any) => {
    let arr:any  = [["Корпоративные сайты"], ["CRM-системы"], ["Прочие проекты"]];
    for (let index = 0; index < arr.length; index++) {
        arr[index].push(data.splice(0, 3));
    }
    return arr;
};

export default prepareData;
