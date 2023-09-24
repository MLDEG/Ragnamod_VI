events.listen('recipes', function (e) {
  
//Mossy Glowshroom
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"betterendforge:end_mycelium"},"display":{"block":"betterendforge:end_mycelium"},"categories":["mossy_glowshroom"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:mossy_glowshroom_sapling"
    },
    "categories": [
        "mossy_glowshroom"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:mossy_glowshroom_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:mossy_glowshroom_cap"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:mossy_glowshroom_fur"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:mossy_glowshroom_hymenophore"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "betterendforge:mossy_glowshroom_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Lacugrove
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"betterendforge:end_moss"},"display":{"block":"betterendforge:end_moss"},"categories":["lacugrove"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:lacugrove_sapling"
    },
    "categories": [
        "lacugrove"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:lacugrove_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:lacugrove_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:lacugrove_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
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
                "item": "betterendforge:lacugrove_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Pythadendron
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"betterendforge:chorus_nylium"},"display":{"block":"betterendforge:chorus_nylium"},"categories":["pythadendron"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:pythadendron_sapling"
    },
    "categories": [
        "pythadendron"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:pythadendron_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:pythadendron_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:pythadendron_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
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
                "item": "betterendforge:pythadendron_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Dragon
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"betterendforge:shadow_grass"},"display":{"block":"betterendforge:shadow_grass"},"categories":["dragonbetterend"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:dragon_tree_sapling"
    },
    "categories": [
        "dragonbetterend"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:dragon_tree_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:dragon_tree_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:dragon_tree_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
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
                "item": "betterendforge:dragon_tree_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Tenanea
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"betterendforge:pink_moss"},"display":{"block":"betterendforge:pink_moss"},"categories":["tenanea"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:tenanea_sapling"
    },
    "categories": [
        "tenanea"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:tenanea_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:tenanea_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:tenanea_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:tenanea_flowers"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "betterendforge:tenanea_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Umbrella
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"betterendforge:jungle_moss"},"display":{"block":"betterendforge:jungle_moss"},"categories":["umbrella"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:umbrella_tree_sapling"
    },
    "categories": [
        "umbrella"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:umbrella_tree_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:umbrella_tree_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:umbrella_tree_membrane"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:umbrella_tree_cluster"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "betterendforge:umbrella_tree_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Lucernia
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"betterendforge:rutiscus"},"display":{"block":"betterendforge:rutiscus"},"categories":["lucernia"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:lucernia_sapling"
    },
    "categories": [
        "lucernia"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:lucernia_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:lucernia_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:lucernia_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:lucernia_outer_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "betterendforge:lucernia_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Helix
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:helix_tree_sapling"
    },
    "categories": [
        "end_stone"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:helix_tree_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:helix_tree_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:helix_tree_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "betterendforge:helix_tree_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Lumecorn
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:lumecorn_seed"
    },
    "categories": [
        "lacugrove"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:lumecorn_seed"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:lumecorn_rod"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.05,
            "output": {
                "item": "betterendforge:lumecorn_seed"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Blue Vine Lantern
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:blue_vine_seed"
    },
    "categories": [
        "mossy_glowshroom"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:blue_vine_seed"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:blue_vine_lantern"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:blue_vine_fur"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "betterendforge:blue_vine_seed"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
  
//Glowing Pillar Luminophor
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"betterendforge:amber_moss"},"display":{"block":"betterendforge:amber_moss"},"categories":["amber_moss"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:glowing_pillar_seed"
    },
    "categories": [
        "amber_moss"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:glowing_pillar_seed"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:glowing_pillar_luminophor"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:glowing_pillar_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "betterendforge:glowing_pillar_seed"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
})