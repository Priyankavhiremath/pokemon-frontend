const fetchData = async(url) =>{
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            return data;
        }
        throw new Error("API is not working");
        
    }
    catch(e){
        console.log(e.message)
    }
}

export default fetchData;

