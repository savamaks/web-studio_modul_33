async function requestApi(setData: any) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=7");
        const data = await response.json();
        setData(data);
    } catch (error) {

        setData("error");

        console.log("error");
    }
}
export default requestApi;
