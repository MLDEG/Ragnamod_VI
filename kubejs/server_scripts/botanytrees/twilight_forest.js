events.listen('recipes', function (e) {
  
function twilightBotany(name){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "twilightforest:"+name+"_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "twilightforest:"+name+"_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "twilightforest:"+name+"_log"
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
            "chance": 0.05,
            "output": {
                "item": "twilightforest:"+name+"_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "twilightforest:"+name+"_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
}

var name = ["twilight_oak", "canopy", "mangrove", "time", "transformation", "mining", "sorting"]
name.forEach(C => { twilightBotany(C)})

//Darkwood
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "twilightforest:darkwood_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "twilightforest:darkwood_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "twilightforest:dark_log"
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
            "chance": 0.05,
            "output": {
                "item": "twilightforest:darkwood_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "twilightforest:dark_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Twilight Robust
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "twilightforest:hollow_oak_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "twilightforest:hollow_oak_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "twilightforest:twilight_oak_log"
            },
            "minRolls": 2,
            "maxRolls": 4
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
            "chance": 0.05,
            "output": {
                "item": "twilightforest:hollow_oak_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "twilightforest:twilight_oak_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

//Rainbow
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "twilightforest:rainboak_sapling"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "twilightforest:rainboak_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "twilightforest:twilight_oak_log"
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
            "chance": 0.05,
            "output": {
                "item": "twilightforest:rainboak_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "twilightforest:rainboak_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

})