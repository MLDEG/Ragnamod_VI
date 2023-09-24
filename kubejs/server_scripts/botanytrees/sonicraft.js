events.listen('recipes', function (e) {

//Cherrywood
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "sonicraft:green_hill_palm_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "sonicraft:green_hill_palm_sapling"
    },
    "results": [
        {
            "chance": 0.50,
            "output": {
                "item": "sonicraft:green_hill_palm_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.10,
            "output": {
                "item": "minecraft:stick"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.01,
            "output": {
                "item": "sonicraft:ghz_leaves_persistent"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.05,
            "output": {
                "item": "sonicraft:green_hill_palm_sapling"
            },
            "minRolls": 1,
            "maxRolls": 1
        }
    ]
})
})