
// Looks like khan algorithm
// O(n) / O(i) - where i is ingarients;
class Solution {
    findAllRecipes(recipes, ingredients, supplies) {
         const dependsFromIngeradient = new Map(); // ingradient: recepies[];
        const recepiesDependencies = new Map(); // recepies: number;


        for(let i = 0; i < recipes.length; i++){
            for(let ing of ingredients[i]){
                if(!dependsFromIngeradient.has(ing)) dependsFromIngeradient.set(ing, []);

                dependsFromIngeradient.get(ing).push(recipes[i]);
            }

            recepiesDependencies.set(recipes[i], ingredients[i].length)
        }

        const accesibleIngarients = [...supplies]
        let head = 0;
        let res = []
        while(head < accesibleIngarients.length){
            const dependenciesFromIngradients = dependsFromIngeradient.get(accesibleIngarients[head++])

            if(dependenciesFromIngradients){
                for(let recipe of dependenciesFromIngradients){
                    const counter = recepiesDependencies.get(recipe);

                    recepiesDependencies.set(recipe, counter - 1)
                    
                    if(counter === 1) {
                        accesibleIngarients.push(recipe)
                        res.push(recipe);
                    }
                }
                
            }
        }

        return  res

    }
}
