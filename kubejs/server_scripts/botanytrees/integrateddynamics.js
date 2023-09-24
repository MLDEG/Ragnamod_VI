events.listen('recipes', function (e) {

e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "integrateddynamics:menril_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "integrateddynamics:menril_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "integrateddynamics:menril_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "integrateddynamics:crystalized_menril_chunk"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "integrateddynamics:menril_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.75,
            "output": {
                "item": "integrateddynamics:menril_berries"
            },
            "minRolls": 1,
            "maxRolls": 4
        }
    ]
})

})