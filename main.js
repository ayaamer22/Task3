let links = document.querySelectorAll("a");
for(let i = 0 ; i<links.length ; i++){
    links[i].onclick = printData;

}
function printData(e) {
    let query = e.target.textContent;
 getData(query)
}
async function getData(q) {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${q}`);
    const data = await response.json();
    const recipes = data.recipes;
    const result =  recipes.map(
        function ( recipe) {
            return `
            <h2>${recipe.title}</h2>
            <h2>${recipe.publisher}</h2>
            <h2>${recipe.recipe_id}</h2>
            <h2>${recipe.social_rank}</h2>
            <img src = ${recipe.image_url} >
            <a href="">${recipe.source_url}</a>
            <a href="">${recipe.publisher_url }</a>
            
            `
        }
    )
    console.log(recipes);
   
document.querySelector("div").innerHTML=result;
}