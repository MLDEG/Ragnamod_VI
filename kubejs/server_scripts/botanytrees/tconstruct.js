events.listen('recipes', function (e) {
  
//Earth Slime
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "tconstruct:earth_slime_sapling"
    },
    "categories": [
        "slime"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "tconstruct:earth_slime_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "tconstruct:greenheart_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:slime_ball"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "tconstruct:earth_slime_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "tconstruct:earth_slime_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Sky Slime
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "tconstruct:sky_slime_sapling"
    },
    "categories": [
        "slime"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "tconstruct:sky_slime_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "tconstruct:skyroot_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "tconstruct:sky_slime_ball"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "tconstruct:sky_slime_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "tconstruct:sky_slime_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Ender Slime
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "tconstruct:ender_slime_sapling"
    },
    "categories": [
        "slime"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "tconstruct:ender_slime_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "tconstruct:greenheart_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "tconstruct:ender_slime_ball"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "tconstruct:ender_slime_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "tconstruct:ender_slime_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Blood Slime
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "tconstruct:blood_slime_sapling"
    },
    "categories": [
        "slime"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "tconstruct:blood_slime_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "tconstruct:bloodshroom_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "tconstruct:ichor_slime_ball"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "tconstruct:blood_slime_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "tconstruct:blood_slime_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

})