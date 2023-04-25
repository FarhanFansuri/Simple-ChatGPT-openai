const submitButton = document.getElementById('submit');
const outputElement = document.getElementById('output');
const inputtext = document.getElementById('inputtext');
const API_KEY = "your API Key"

async function fetchData(question){
    const response = await fetch("https://api.openai.com/v1/chat/completions",{
        method:"POST",
        headers:{
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{
                role:"user",
                content:`${question}`
            }]
        })
    })

    const data = await response.json()
    outputElement.textContent = data.choices[0].message.content
}


function getMassage(){
    console.log(inputtext.value)
}

submitButton.addEventListener('click',()=>{
    fetchData(inputtext.value)
})