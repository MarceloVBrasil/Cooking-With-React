const sampleRecipes = [
    {
        id: 1,
        name: 'Plain Chicken',
        cookTime: '1:45',
        servings: 3,
        instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
        ingredients: [
          {
            id: 1,
            name: "Chicken",
            amount: "2 Pounds"
          },

          {
            id: 2,
            name: "Salt",
            amount: "1 Tbs"
          }
        ],
        creators: [
          {
            id: 1,
            name: "Marcelo Brasil"
          }
        ]
    },

    {
        id: 2,
        name: 'Plain Pork',
        cookTime: '0:45',
        servings: 5,
        instructions: '1. Put paprika on Pork\n2. Put pork in oven \n3. Eat pork',
        ingredients: [
          {
            id: 1,
            name: "Pork",
            amount: "3 Pounds"
          },

          {
            id: 2,
            name: "Paprika",
            amount: "2 Tbs"
          }
        ],
        creators: [
          {
            id: 1,
            name: "Marcelo Brasil"
          }
        ]
    },
]

export default sampleRecipes;