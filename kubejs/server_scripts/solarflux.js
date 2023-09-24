events.listen('recipes', function (e) {
    //Mirror
    e.shaped(item.of('solarflux:mirror', 3), ['AAA', 'ABA', 'AAA'], {
        A: 'quark:framed_glass_pane',
        B: 'woot:white_dyecasing'
    })
    //Solar 1
    e.shaped(item.of('solarflux:sp_1', 1), ['AAA', 'BCB', 'BBB'], {
        A: 'solarflux:mirror',
        B: 'quark:rusty_iron_plate_slab',
        C: 'extendedcrafting:redstone_ingot'
    })
    //Solar 2
    e.shaped(item.of('solarflux:sp_2', 2), ['AAA', 'ABA', 'AAA'], {
        A: 'solarflux:sp_1',
        B: 'minecraft:piston'
    })
    //Solar 3
    e.shaped(item.of('solarflux:sp_3', 2), ['ABA', 'BCB', 'ABA'], {
        A: 'solarflux:sp_2',
        B: 'solarflux:photovoltaic_cell_1',
        C: 'thermal:electrum_gear'
    })
    //Solar 4
    e.shaped(item.of('solarflux:sp_4', 2), ['ABA', 'BCB', 'ABA'], {
        A: 'solarflux:sp_3',
        B: 'solarflux:photovoltaic_cell_2',
        C: 'thermal:signalum_gear'
    })
    //Solar 5
    e.shaped(item.of('solarflux:sp_5', 2), ['ABA', 'BCB', 'ABA'], {
        A: 'solarflux:sp_4',
        B: 'solarflux:photovoltaic_cell_3',
        C: 'thermal:diamond_gear'
    })
    //Solar 6
    e.shaped(item.of('solarflux:sp_6', 2), ['ABA', 'BCB', 'ABA'], {
        A: 'solarflux:sp_5',
        B: 'solarflux:photovoltaic_cell_4',
        C: 'thermal:enderium_gear'
    })
    //Solar 7
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": ["ABBBA", "BCCCB", "BCDCB", "BCCCB", "ABBBA"],
            "key": {
                "A": { "item": "solarflux:sp_6" },
                "B": { "item": "solarflux:photovoltaic_cell_5" },
                "C": { "item": "minecraft:dragon_breath" },
                "D": { "item": "botania:dragonstone" }
            },
            "result": { "item": "solarflux:sp_7", "count": 2 }
        })
    //Solar 8
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": ["ABBBA", "BCDCB", "BDEDB", "BCDCB", "ABBBA"],
            "key": {
                "A": { "item": "solarflux:sp_7" },
                "B": { "item": "solarflux:photovoltaic_cell_6" },
                "C": { "item": "quark:dragon_scale" },
                "D": { "item": "minecraft:dragon_egg" },
                "E": { "item": "minecraft:dragon_head" }
            },
            "result": { "item": "solarflux:sp_8", "count": 2 }
        })
    //Solar 9
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": ["ABBBA", "BCCCB", "BCDCB", "BCCCB", "ABBBA"],
            "key": {
                "A": { "item": "solarflux:sp_8" },
                "B": { "item": "draconicevolution:wyvern_energy_core" },
                "C": { "item": "draconicevolution:draconium_ingot" },
                "D": { "item": "draconicevolution:wyvern_core" }
            },
            "result": { "item": "solarflux:sp_de.wyvern", "count": 2 }
        })
    //Solar 10
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": ["ABBBA", "BCCCB", "BCDCB", "BCCCB", "ABBBA"],
            "key": {
                "A": { "item": "solarflux:sp_de.wyvern" },
                "B": { "item": "draconicevolution:draconic_energy_core" },
                "C": { "item": "draconicevolution:awakened_draconium_ingot" },
                "D": { "item": "draconicevolution:awakened_core" }
            },
            "result": { "item": "solarflux:sp_de.draconic", "count": 2 }
        })
    //Solar 11
    e.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {"item": "solarflux:sp_de.chaotic","count": 2},
            "catalyst": {"item": "draconicevolution:chaotic_core"},
            "total_energy": 256000000,
            "tier": "DRACONIC",
            "ingredients": [
              {"item": "solarflux:sp_de.draconic"},
              {"item": "solarflux:sp_de.draconic"},
              {"item": "draconicevolution:awakened_core"},
              {"item": "draconicevolution:awakened_core"},
              {"item": "solarflux:sp_de.draconic"},
              {"item": "solarflux:sp_de.draconic"},
              {"item": "draconicevolution:awakened_core"},
              {"item": "draconicevolution:awakened_core"}
            ]
          })
    //Solar 12
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": ["ABBBA", "BCCCB", "BCDCB", "BCCCB", "ABBBA"],
            "key": {
                "A": { "item": "solarflux:sp_de.chaotic" },
                "B": { "item": "kubejs:etherium_photovoltaic_cell" },
                "C": { "item": "enigmaticlegacy:etherium_ore" },
                "D": { "item": "minecraft:nether_star" }
            },
            "result": { "item": "solarflux:sp_custom_etherium", "count": 2 }
        })
    //Solar 13
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": ["ABBBA", "BCDCB", "BDEDB", "BCDCB", "ABBBA"],
            "key": {
                "A": { "item": "solarflux:sp_custom_etherium" },
                "B": { "item": "kubejs:gobber_photovoltaic_cell" },
                "C": { "item": "gobber2:gobber2_glob_end" },
                "D": { "item": "gobber2:gobber2_links_end" },
                "E": { "item": "gobber2:gobber2_medallion_end" }
            },
            "result": { "item": "solarflux:sp_custom_gobber", "count": 2 }
        })
    //Solar 14
    e.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "tier": 2,
            "pattern": ["ABBBA", "BCDCB", "BDEDB", "BCDCB", "ABBBA"],
            "key": {
                "A": { "item": "solarflux:sp_custom_gobber" },
                "B": { "item": "kubejs:ultimate_photovoltaic_cell" },
                "C": { "item": "extendedcrafting:the_ultimate_ingot" },
                "D": { "item": "mysticalagradditions:creative_essence" },
                "E": { "item": "kubejs:sphere" }
            },
            "result": { "item": "solarflux:sp_custom_ultimate", "count": 1 }
        })
})