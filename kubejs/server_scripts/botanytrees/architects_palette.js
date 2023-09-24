events.listen('recipes', function (e) {
  
//Twisted Sapling
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "architects_palette:twisted_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "architects_palette:twisted_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "architects_palette:twisted_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:stick"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "architects_palette:twisted_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "architects_palette:twisted_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

})