events.listen('recipes', function (e) {
    //Hopper botany pot
    function hopperPots(color) {
        e.remove({ id: "botanypots:crafting/hopper_" + color + "_botany_pot" })
        e.remove({ id: "botanypots:crafting/compact_hopper_" + color + "_botany_pot" })
        e.shaped(item.of('botanypots:hopper_' + color + '_botany_pot', 1), ["ABA", "CFC", "DED"], {
            A: 'thermal:enderium_gear',
            B: 'xreliquary:fortune_coin',
            C: 'create:electron_tube',
            D: 'minecraft:netherite_scrap',
            E: 'goldenhopper:golden_hopper',
            F: 'botanypots:' + color + '_botany_pot'
          })
    }
    var color = ["red", "orange", "yellow", "lime", "green", "blue", "cyan", "light_blue", "pink", "magenta", "purple", "brown", "black", "gray", "light_gray", "white"]
    color.forEach(C => { hopperPots(C) })

    e.remove({ id: "botanypots:crafting/hopper_botany_pot" })
    e.remove({ id: "botanypots:crafting/compact_hopper_botany_pot" })
    e.shaped(item.of('botanypots:hopper_botany_pot', 1), ["ABA", "CFC", "DED"], {
        A: 'thermal:enderium_gear',
        B: 'xreliquary:fortune_coin',
        C: 'create:electron_tube',
        D: 'minecraft:netherite_scrap',
        E: 'goldenhopper:golden_hopper',
        F: 'botanypots:botany_pot'
      })


    //Seed
    function seedPot(seed, categorie, growth) {
        e.remove({ id: "mysticalagriculture:crops/" + seed })
        e.custom({
            "type": "botanypots:crop",
            "seed": { "item": "mysticalagriculture:" + seed + "_seeds" },
            "categories": [categorie],
            "growthTicks": growth,
            "display": { "block": "mysticalagriculture:" + seed + "_crop", "properties": { "age": 7 } },
            "results": [
                {
                    "chance": 0.75, "minRolls": 1, "maxRolls": 1,
                    "output": { "item": "mysticalagriculture:" + seed + "_essence", "count": 1 }
                },
                {
                    "chance": 0.01, "minRolls": 1, "maxRolls": 1,
                    "output": { "item": "mysticalagriculture:fertilized_essence", "count": 1 }
                }]
        })
    }

    var seed1 = ["air", "earth", "water", "fire", "inferium", "stone", "dirt", "wood", "ice"]
    seed1.forEach(S => { seedPot(S, "Farmland_all", 1200) })
    var seed2 = ["nature", "dye", "nether", "coal", "coral", "honey", "pig", "chicken", "cow", "sheep", "squid", "fish", "slime", "turtle", "rubber", "silicon", "sulfur", "aluminum", "copper", "saltpeter", "mystical_flower", "apatite", "marble", "limestone", "basalt", "jellyfish_jelly"]
    seed2.forEach(S => { seedPot(S, "Farmland_t2", 2400) })
    var seed3 = ["iron", "nether_quartz", "glowstone", "redstone", "obsidian", "prismarine", "zombie", "skeleton", "creeper", "spider", "rabbit", "tin", "bronze", "zinc", "brass", "silver", "lead", "graphite", "blizz", "blitz", "basalz", "manasteel", "ender_biotite", "cloggrum", "obsidian_ingot", "aquamarine", "arcanecrystal", "rose_gold", "steeleaf", "ironwood", "slimesteel", "pig_iron", "tinkers_bronze", "quartz_enriched_iron"]
    seed3.forEach(S => { seedPot(S, "Farmland_t3", 3600) })
    var seed4 = ["gold", "lapis_lazuli", "end", "experience", "blaze", "ghast", "enderman", "steel", "nickel", "constantan", "electrum", "invar", "tungsten", "uranium", "signalum", "lumium", "hop_graphite", "elementium", "osmium", "refined_glowstone", "refined_obsidian", "energized_steel", "blazing_crystal", "froststeel", "regalium", "cyanite", "starmetal", "compressed_iron", "fluorite", "neptunium", "fiery_ingot", "knightmetal", "cobalt", "hepatizon", "sapphire", "ruby", "phantom"]
    seed4.forEach(S => { seedPot(S, "Farmland_t4", 4000) })
    var seed5 = ["platinum", "diamond", "emerald", "netherite", "wither_skeleton", "enderium", "terrasteel", "niotic_crystal", "spirited_crystal", "uraninite", "arcane_gold", "oratchalcum", "utherium", "yellorium", "rock_crystal", "endumium", "forgotten_ingot", "manyullyn", "queens_slime", "draconium"]
    seed5.forEach(S => { seedPot(S, "Farmland_t5", 4500) })
    seedPot("alfsteel", "alfsteel_crux", 3000)
    seedPot("nitro_crystal", "nitro_crystal_crux", 3000)
    seedPot("nether_star", "nether_star_crux", 3000)
    seedPot("dragon_egg", "dragon_egg_crux", 3000)
    seedPot("chaotic", "chaotic_crux", 3000)
    seedPot("awakened_draconium", "draconium_crux", 3000)

    e.custom({
        "type": "botanypots:crop",
        "seed": { "item": "kubejs:ultimate_seed" },
        "categories": ["ultimate_crux"],
        "growthTicks": 3000,
        "display": { "block": "mysticalagriculture:ultimate_crop", "properties": { "age": 7 } },
        "results": [
            {
                "chance": 0.75, "minRolls": 1, "maxRolls": 1,
                "output": { "item": "kubejs:ultimate_essence", "count": 1 }
            },
            {
                "chance": 0.01, "minRolls": 1, "maxRolls": 1,
                "output": { "item": "mysticalagriculture:fertilized_essence", "count": 1 }
            }]
    })

    //soil
    function soil(item, categorie, growth) {
        e.recipes.botanypots.soil({
            input: { item: item },
            display: { block: item },
            categories: categorie,
            growthModifier: growth
        })
    }

    soil("mysticalagradditions:nether_star_crux", ["nether_star_crux"], 0.90)
    soil("mysticalagradditions:dragon_egg_crux", ["dragon_egg_crux"], 0.90)
    soil("mysticalagradditions:nitro_crystal_crux", ["nitro_crystal_crux"], 0.90)
    soil("mysticalagradditions:awakened_draconium_crux", ["draconium_crux"], 0.90)
    soil("kubejs:alfsteel_crux", ["alfsteel_crux"], 0.90)
    soil("kubejs:ultimate_crux", ["ultimate_crux"], 0.90)
    soil("kubejs:chaotic_crux", ["chaotic_crux"], 0.90)

    e.remove({ id: "mysticalagriculture:soils/inferium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/prudentium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/tertium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/imperium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/supremium_farmland" })
    e.remove({ id: "mysticalagriculture:soils/insanium_farmland" })
    soil("minecraft:farmland", ["Farmland_all"], 0.10)
    soil("mysticalagriculture:inferium_farmland", ["Farmland_all", "Farmland_t1"], 0.20)
    soil("mysticalagriculture:prudentium_farmland", ["Farmland_all", "Farmland_t1", "Farmland_t2"], 0.30)
    soil("mysticalagriculture:tertium_farmland", ["Farmland_all", "Farmland_t1", "Farmland_t2", "Farmland_t3"], 0.40)
    soil("mysticalagriculture:imperium_farmland", ["Farmland_all", "Farmland_t1", "Farmland_t2", "Farmland_t3", "Farmland_t4"], 0.50)
    soil("mysticalagriculture:supremium_farmland", ["Farmland_all", "Farmland_t1", "Farmland_t2", "Farmland_t3", "Farmland_t4", "Farmland_t5"], 0.60)
    soil('mysticalagradditions:insanium_farmland', ["Farmland_all", "Farmland_t1", "Farmland_t2", "Farmland_t3", "Farmland_t4", "Farmland_t5"], 0.75)

    //Crystal Quark
    function crystalGrowth (color){
    e.custom({"type":"botanypots:crop","seed":{"item":"quark:"+ color +"_crystal_cluster"},"categories":[""+ color +"_crystal"],"growthTicks":1000,"display":{"block":"quark:"+ color +"_crystal"},"results":[{"chance":1,"output":{"item":"quark:"+ color +"_crystal_cluster"},"minRolls":2,"maxRolls":4},{"chance":0.5,"output":{"item":"quark:"+ color +"_crystal_cluster"},"minRolls":1,"maxRolls":1}]})
    e.custom({"type":"botanypots:soil","input":{"item":"quark:"+ color +"_crystal"},"display":{"block":"quark:"+ color +"_crystal"},"categories":[""+ color +"_crystal"],"growthModifier":0})}

    var crystalColor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
    crystalColor.forEach(C => { crystalGrowth(C) })
})