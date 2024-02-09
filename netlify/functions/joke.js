import fetch from "node-fetch";

export const handler = async (event) => {
    const res = await fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', {
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': 'c8bd8a80ebmsh8c56fd44c09624dp162eb9jsn079f3c78ed12',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    })
    const res_ = await res.json()

    return {
        statusCode: 200,
        body: JSON.stringify(res_)
    }
}
