// เริ่มเขียนโค้ดตรงนี้
const getUser = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    return response.json()
}

const showDataUser = async() => {
    const data = await getUser();
    const dataName = data
    .map(dataInfo => dataInfo.name)
    .filter(dataInfo => dataInfo.length > 17);
    console.log(dataName)
}

showDataUser() 


// [ 'Mrs. Dennis Schulist', 'Nicholas Runolfsdottir V', 'Clementina DuBuque' ]