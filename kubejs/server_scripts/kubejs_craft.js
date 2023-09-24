events.listen('recipes', function (e) {
  //Platinum
  e.shaped(item.of('kubejs:platinum_ingot', 1), ['AAA','AAA','AAA'], {A: 'kubejs:platinum_nugget'})
  e.shapeless(item.of('kubejs:platinum_nugget', 9), ['kubejs:platinum_ingot'])
  e.shaped(item.of('kubejs:platinum_block', 1), ['AAA','AAA','AAA'], {A: 'kubejs:platinum_ingot'})
  e.shapeless(item.of('kubejs:platinum_ingot', 9), ['kubejs:platinum_block'])
  e.smelting('kubejs:platinum_ingot', 'janoeo:platinum_dust')
  e.blasting('kubejs:platinum_ingot', 'janoeo:platinum_dust')
  //Tungsten
  e.shaped(item.of('kubejs:tungsten_ingot', 1), ['AAA','AAA','AAA'], {A: 'kubejs:tungsten_nugget'})
  e.shapeless(item.of('kubejs:tungsten_nugget', 9), ['kubejs:tungsten_ingot'])
  e.shaped(item.of('kubejs:tungsten_block', 1), ['AAA','AAA','AAA'], {A: 'kubejs:tungsten_ingot'})
  e.shapeless(item.of('kubejs:tungsten_ingot', 9), ['kubejs:tungsten_block'])
  //Obsidian Ingot Block
  e.shapeless(item.of('forbidden_arcanus:obsidian_ingot', 9), ['kubejs:obsidian_ingot_block'])
  e.shaped(item.of('kubejs:obsidian_ingot_block', 1), ['AAA','AAA','AAA'], {A: 'forbidden_arcanus:obsidian_ingot'})
  /*****************************************SOLAR PANEL*****************************************/
  //Ethernium Photovoltaic Cell
  e.shaped(item.of('kubejs:etherium_photovoltaic_cell', 1), ['AAA','BCB','DED'], {
    A: 'enigmaticlegacy:etherium_ingot',
    B: 'minecraft:glowstone',
    C: 'compressium:diamond_2',
    D: '#forge:storage_blocks/quartz',
    E: 'solarflux:photovoltaic_cell_6'
  })
  //Gobber Photovoltaic Cell
  e.shaped(item.of('kubejs:gobber_photovoltaic_cell', 1), ['AAA','BCB','DED'], {
    A: 'gobber2:gobber2_ingot_end',
    B: 'minecraft:glowstone',
    C: 'compressium:diamond_1',
    D: '#forge:storage_blocks/quartz',
    E: 'kubejs:etherium_photovoltaic_cell'
  })
  //Ultimate Photovoltaic Cell
  e.shaped(item.of('kubejs:ultimate_photovoltaic_cell', 1), ['AAA','BCB','DED'], {
    A: 'extendedcrafting:the_ultimate_ingot',
    B: 'minecraft:glowstone',
    C: 'compressium:diamond_3',
    D: '#forge:storage_blocks/quartz',
    E: 'kubejs:gobber_photovoltaic_cell'
  })
  //Loading Pearl
  e.shaped(item.of('kubejs:loading_pearl', 1), [' A ','ABA',' A '], {
    A: 'waystones:warp_dust',
    B: 'minecraft:ender_pearl'
  })
  //Chaotic Bee Flower
  e.shaped(item.of('kubejs:chaotic_bee_flower', 1), ['ABA','BCB','ABA'], {
    A: '#minecraft:flowers',
    B: 'draconicevolution:chaos_shard',
    C: 'resourcefulbees:wax_block'
  })
  //Dragon Bee Flower
  e.shaped(item.of('kubejs:dragon_bee_flower', 1), ['ABA','BCB','ABA'], {
    A: '#minecraft:flowers',
    B: 'mysticalagradditions:dragon_scale',
    C: 'resourcefulbees:wax_block'
  })
  //Smithing Machine Block
  e.shapeless(item.of('kubejs:smithing_machine_block'), ['minecraft:smithing_table'])
  //Beer
  e.shapeless(item.of('kubejs:beer'), ['pamhc2crops:barleyitem', 'pamhc2foodextended:ediblerootitem', 'pamhc2foodcore:potitem', 'pneumaticcraft:yeast_culture_bucket'])
  //Double Stuf Epic Oreo
  e.shapeless(item.of('kubejs:ds_oreo'), ['resourcefulbees:oreo_cookie', 'resourcefulbees:oreo_cookie', 'resourcefulbees:oreo_cookie', 'resourcefulbees:oreo_cookie'])
  //Waxed Block of Fiery Metal
  e.shaped(item.of('kubejs:waxed_fiery_block', 1), ['AAA','ABA','AAA'], {
    A: 'resourcefulbees:icy_honeycomb',
    B: 'twilightforest:fiery_block'
  })
  //Tiny Antimatter Rubber 
  e.custom(
    {
      "type": "astralsorcery:altar",
      "altar_type": 1,
      "duration": 100,
      "starlight": 200,
      "pattern": ["A___A","_ A _","_ABA_","_ A _","A___A"],
      "key": {
        "A": {"item": "industrialforegoing:tinydryrubber"},
        "B": {"item": "mekanism:pellet_antimatter"}
      },
      "output": [
        {"item": "kubejs:antimatter_silicon","count": 16}
      ],
      "effects": ["astralsorcery:built_in_effect_discovery_central_beam"]
    }
  )
  //Aquamarine Block
  e.shaped(item.of('kubejs:aquamarine_block', 1), ['AAA','AAA','AAA'], {A: 'astralsorcery:aquamarine'})
  e.shapeless(item.of('astralsorcery:aquamarine', 9), ['kubejs:aquamarine_block'])
  //Ultimate Netherite Lattice
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": ["A A", " A ", "A A"],
      "key": {
        "A": { "item": "kubejs:ultimate_netherite" }
      },
      "result": { "item": "kubejs:ultimate_netherite_lattice", "count": 1 }
    }
  )
  //Ultimate Comb
  e.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "tier": 4,
      "ingredients": [
        { "item": "resourcefulbees:nitrocrystal_honeycomb" }, { "item": "resourcefulbees:carminite_honeycomb" }, { "item": "resourcefulbees:redstone_honeycomb" }, { "item": "resourcefulbees:awakeneddraco_honeycomb" }, { "item": "resourcefulbees:signalum_honeycomb" }, { "item": "resourcefulbees:copper_honeycomb" }, { "item": "resourcefulbees:bronze_honeycomb" }, { "item": "resourcefulbees:alfsteel_honeycomb" }, { "item": "resourcefulbees:blaze_honeycomb" },

        { "item": "resourcefulbees:amber_honeycomb" }, { "item": "resourcefulbees:gold_honeycomb" }, { "item": "resourcefulbees:blazingcrystal_honeycomb" }, { "item": "resourcefulbees:arcanegold_honeycomb" }, { "item": "resourcefulbees:brass_honeycomb" }, { "item": "resourcefulbees:yellorium_honeycomb" }, { "item": "resourcefulbees:regalium_honeycomb" }, { "item": "resourcefulbees:electrum_honeycomb" }, { "item": "resourcefulbees:constantan_honeycomb" },

        { "item": "resourcefulbees:iron_honeycomb" }, { "item": "resourcefulbees:skeleton_honeycomb" }, { "item": "resourcefulbees:zinc_honeycomb" }, { "item": "resourcefulbees:cake_honeycomb" }, { "item": "resourcefulbees:silver_honeycomb" }, { "item": "resourcefulbees:nether_quartz_honeycomb" }, { "item": "resourcefulbees:invar_honeycomb" }, { "item": "resourcefulbees:nickel_honeycomb" }, { "item": "resourcefulbees:steel_honeycomb" },

        { "item": "resourcefulbees:compressediron_honeycomb" }, { "item": "resourcefulbees:aluminum_honeycomb" }, { "item": "resourcefulbees:tin_honeycomb" }, { "item": "resourcefulbees:ghast_honeycomb" }, { "item": "resourcefulbees:guardian_honeycomb" }, { "item": "resourcefulbees:osmium_honeycomb" }, { "item": "resourcefulbees:froststeel_honeycomb" }, { "item": "resourcefulbees:lead_honeycomb" }, { "item": "resourcefulbees:gobber_honeycomb" },

        { "item": "resourcefulbees:cyanite_honeycomb" }, { "item": "resourcefulbees:platinum_honeycomb" }, { "item": "resourcefulbees:nioticcrystal_honeycomb" }, { "item": "resourcefulbees:diamond_honeycomb" }, { "item": "resourcefulbees:manasteel_honeycomb" }, { "item": "resourcefulbees:aquamarine_honeycomb" }, { "item": "resourcefulbees:cobalt_honeycomb" }, { "item": "resourcefulbees:lapis_honeycomb" }, { "item": "resourcefulbees:starmetal_honeycomb" },

        { "item": "resourcefulbees:enderium_honeycomb" }, { "item": "resourcefulbees:ender_honeycomb" }, { "item": "resourcefulbees:zombie_honeycomb" }, { "item": "resourcefulbees:steeleaf_honeycomb" }, { "item": "resourcefulbees:creeper_honeycomb" }, { "item": "resourcefulbees:emerald_honeycomb" }, { "item": "resourcefulbees:uraninite_honeycomb" }, { "item": "resourcefulbees:terrasteel_honeycomb" }, { "item": "resourcefulbees:spiritedcrystal_honeycomb" },

        { "item": "resourcefulbees:endgobber_honeycomb" }, { "item": "resourcefulbees:uranium_honeycomb" }, { "item": "resourcefulbees:knightmetal_honeycomb" }, { "item": "resourcefulbees:lumium_honeycomb" }, { "item": "resourcefulbees:energizedsteel_honeycomb" }, { "item": "resourcefulbees:rosegold_honeycomb" }, { "item": "resourcefulbees:utherium_honeycomb" }, { "item": "resourcefulbees:pigiron_honeycomb" }, { "item": "resourcefulbees:jellyfishjelly_honeycomb" },

        { "item": "resourcefulbees:shulker_honeycomb" }, { "item": "resourcefulbees:manyullyn_honeycomb" }, { "item": "resourcefulbees:draconium_honeycomb" }, { "item": "resourcefulbees:hepatizon_honeycomb" }, { "item": "resourcefulbees:obsidianingot_honeycomb" }, { "item": "resourcefulbees:managem_honeycomb" }, { "item": "resourcefulbees:dragon_honeycomb" }, { "item": "resourcefulbees:nethergobber_honeycomb" }, { "item": "resourcefulbees:elementium_honeycomb" },

        { "item": "resourcefulbees:netherite_honeycomb" }, { "item": "resourcefulbees:pigman_honeycomb" }, { "item": "resourcefulbees:cloggrum_honeycomb" }, { "item": "resourcefulbees:ironwood_honeycomb" }, { "item": "resourcefulbees:wither_honeycomb" }, { "item": "resourcefulbees:coal_honeycomb" }, { "item": "resourcefulbees:chaotic_honeycomb" }, { "item": "resourcefulbees:obsidian_honeycomb" }, { "item": "resourcefulbees:fiery_honeycomb" }
      ],
      "result": { "item": "kubejs:ultimate_comb", "count": 1 }
    })
  //Ultimate Comb Block
  e.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "tier": 4,
      "ingredients": [
        { "item": "resourcefulbees:nitrocrystal_honeycomb_block" }, { "item": "resourcefulbees:carminite_honeycomb_block" }, { "item": "resourcefulbees:redstone_honeycomb_block" }, { "item": "resourcefulbees:awakeneddraco_honeycomb_block" }, { "item": "resourcefulbees:signalum_honeycomb_block" }, { "item": "resourcefulbees:copper_honeycomb_block" }, { "item": "resourcefulbees:bronze_honeycomb_block" }, { "item": "resourcefulbees:alfsteel_honeycomb_block" }, { "item": "resourcefulbees:blaze_honeycomb_block" },

        { "item": "resourcefulbees:amber_honeycomb_block" }, { "item": "resourcefulbees:gold_honeycomb_block" }, { "item": "resourcefulbees:blazingcrystal_honeycomb_block" }, { "item": "resourcefulbees:arcanegold_honeycomb_block" }, { "item": "resourcefulbees:brass_honeycomb_block" }, { "item": "resourcefulbees:yellorium_honeycomb_block" }, { "item": "resourcefulbees:regalium_honeycomb_block" }, { "item": "resourcefulbees:electrum_honeycomb_block" }, { "item": "resourcefulbees:constantan_honeycomb_block" },

        { "item": "resourcefulbees:iron_honeycomb_block" }, { "item": "resourcefulbees:skeleton_honeycomb_block" }, { "item": "resourcefulbees:zinc_honeycomb_block" }, { "item": "resourcefulbees:cake_honeycomb_block" }, { "item": "resourcefulbees:silver_honeycomb_block" }, { "item": "resourcefulbees:nether_quartz_honeycomb_block" }, { "item": "resourcefulbees:invar_honeycomb_block" }, { "item": "resourcefulbees:nickel_honeycomb_block" }, { "item": "resourcefulbees:steel_honeycomb_block" },

        { "item": "resourcefulbees:compressediron_honeycomb_block" }, { "item": "resourcefulbees:aluminum_honeycomb_block" }, { "item": "resourcefulbees:tin_honeycomb_block" }, { "item": "resourcefulbees:ghast_honeycomb_block" }, { "item": "resourcefulbees:guardian_honeycomb_block" }, { "item": "resourcefulbees:osmium_honeycomb_block" }, { "item": "resourcefulbees:froststeel_honeycomb_block" }, { "item": "resourcefulbees:lead_honeycomb_block" }, { "item": "resourcefulbees:gobber_honeycomb_block" },

        { "item": "resourcefulbees:cyanite_honeycomb_block" }, { "item": "resourcefulbees:platinum_honeycomb_block" }, { "item": "resourcefulbees:nioticcrystal_honeycomb_block" }, { "item": "resourcefulbees:diamond_honeycomb_block" }, { "item": "resourcefulbees:manasteel_honeycomb_block" }, { "item": "resourcefulbees:aquamarine_honeycomb_block" }, { "item": "resourcefulbees:cobalt_honeycomb_block" }, { "item": "resourcefulbees:lapis_honeycomb_block" }, { "item": "resourcefulbees:starmetal_honeycomb_block" },

        { "item": "resourcefulbees:enderium_honeycomb_block" }, { "item": "resourcefulbees:ender_honeycomb_block" }, { "item": "resourcefulbees:zombie_honeycomb_block" }, { "item": "resourcefulbees:steeleaf_honeycomb_block" }, { "item": "resourcefulbees:creeper_honeycomb_block" }, { "item": "resourcefulbees:emerald_honeycomb_block" }, { "item": "resourcefulbees:uraninite_honeycomb_block" }, { "item": "resourcefulbees:terrasteel_honeycomb_block" }, { "item": "resourcefulbees:spiritedcrystal_honeycomb_block" },

        { "item": "resourcefulbees:endgobber_honeycomb_block" }, { "item": "resourcefulbees:uranium_honeycomb_block" }, { "item": "resourcefulbees:knightmetal_honeycomb_block" }, { "item": "resourcefulbees:lumium_honeycomb_block" }, { "item": "resourcefulbees:energizedsteel_honeycomb_block" }, { "item": "resourcefulbees:rosegold_honeycomb_block" }, { "item": "resourcefulbees:utherium_honeycomb_block" }, { "item": "resourcefulbees:pigiron_honeycomb_block" }, { "item": "resourcefulbees:jellyfishjelly_honeycomb_block" },

        { "item": "resourcefulbees:shulker_honeycomb_block" }, { "item": "resourcefulbees:manyullyn_honeycomb_block" }, { "item": "resourcefulbees:draconium_honeycomb_block" }, { "item": "resourcefulbees:hepatizon_honeycomb_block" }, { "item": "resourcefulbees:obsidianingot_honeycomb_block" }, { "item": "resourcefulbees:managem_honeycomb_block" }, { "item": "resourcefulbees:dragon_honeycomb_block" }, { "item": "resourcefulbees:nethergobber_honeycomb_block" }, { "item": "resourcefulbees:elementium_honeycomb_block" },

        { "item": "resourcefulbees:netherite_honeycomb_block" }, { "item": "resourcefulbees:pigman_honeycomb_block" }, { "item": "resourcefulbees:cloggrum_honeycomb_block" }, { "item": "resourcefulbees:ironwood_honeycomb_block" }, { "item": "resourcefulbees:wither_honeycomb_block" }, { "item": "resourcefulbees:coal_honeycomb_block" }, { "item": "resourcefulbees:chaotic_honeycomb_block" }, { "item": "resourcefulbees:obsidian_honeycomb_block" }, { "item": "resourcefulbees:fiery_honeycomb_block" }
      ],
      "result": { "item": "kubejs:ultimate_comb_block", "count": 1 }
    })
  e.shapeless(item.of('kubejs:ultimate_comb', 9), ['kubejs:ultimate_comb_block'])
  e.shapeless('kubejs:ultimate_comb_block', [item.of('kubejs:ultimate_comb', 9)])
  //Miraculous Soup
  e.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "tier": 4,
      "ingredients": [
        { "item": "minecraft:apple" }, { "item": "pamhc2crops:asparagusitem" }, { "item": "pamhc2trees:avocadoitem" }, { "item": "pamhc2trees:bananaitem" }, { "item": "pamhc2crops:barleyitem" }, { "item": "minecraft:beetroot" }, { "item": "thermal:bell_pepper" }, { "item": "pamhc2crops:blackberryitem" }, { "item": "pamhc2crops:blueberryitem" }, { "item": "pamhc2trees:breadfruititem" },
        { "item": "pamhc2crops:broccoliitem" }, { "item": "pamhc2crops:cabbageitem" }, { "item": "pamhc2crops:cactusfruititem" }, { "item": "pamhc2crops:candleberryitem" }, { "item": "pamhc2trees:candlenutitem" }, { "item": "minecraft:carrot" }, { "item": "pamhc2crops:caulifloweritem" }, { "item": "pamhc2crops:celeryitem" }, { "item": "forbidden_arcanus:cherry_peach" },
        { "item": "pamhc2trees:chestnutitem" }, { "item": "pamhc2crops:chilipepperitem" }, { "item": "minecraft:chorus_fruit" }, { "item": "pamhc2trees:coconutitem" }, { "item": "pamhc2crops:cornitem" }, { "item": "pamhc2crops:cranberryitem" }, { "item": "pamhc2crops:cucumberitem" }, { "item": "pamhc2trees:dragonfruititem" }, { "item": "pamhc2trees:durianitem" },
        { "item": "thermal:eggplant" }, { "item": "pamhc2crops:elderberryitem" }, { "item": "pamhc2trees:figitem" }, { "item": "jellyfishing:jellyfish_jelly" }, { "item": "thermal:frost_melon_slice" }, { "item": "pamhc2crops:garlicitem" }, { "item": "pamhc2trees:gooseberryitem" }, { "item": "pamhc2trees:grapefruititem" },
        { "item": "pamhc2crops:huckleberryitem" }, { "item": "pamhc2crops:juniperberryitem" }, { "item": "pamhc2crops:kiwiitem" }, { "item": "pamhc2crops:kohlrabiitem" }, { "item": "xreliquary:apothecary_cauldron" }, { "item": "pamhc2trees:lemonitem" }, { "item": "pamhc2crops:lettuceitem" }, { "item": "pamhc2trees:limeitem" }, { "item": "pamhc2trees:lycheeitem" },
        { "item": "pamhc2trees:mangoitem" }, { "item": "minecraft:melon_slice" }, { "item": "pamhc2crops:mulberryitem" }, { "item": "pamhc2crops:okraitem" }, { "item": "pamhc2crops:onionitem" }, { "item": "pamhc2trees:orangeitem" }, { "item": "pamhc2crops:parsnipitem" }, { "item": "pamhc2trees:passionfruititem" }, { "item": "pamhc2trees:peachitem" },
        { "item": "pamhc2crops:peanutitem" }, { "item": "pamhc2trees:pearitem" }, { "item": "pamhc2trees:persimmonitem" }, { "item": "pamhc2trees:pistachioitem" }, { "item": "pamhc2trees:plumitem" }, { "item": "pamhc2trees:pomegranateitem" }, { "item": "pamhc2trees:cherryitem" }, { "item": "minecraft:potato" }, { "item": "thermal:radish" },
        { "item": "pamhc2trees:rambutanitem" }, { "item": "pamhc2crops:raspberryitem" }, { "item": "pamhc2crops:amaranthitem" }, { "item": "thermal:rice" }, { "item": "thermal:sadiroot" }, { "item": "pamhc2trees:soursopitem" }, { "item": "pamhc2crops:soybeanitem" }, { "item": "pamhc2crops:spiceleafitem" }, { "item": "thermal:spinach" },
        { "item": "pamhc2trees:starfruititem" }, { "item": "pamhc2crops:strawberryitem" }, { "item": "minecraft:sweet_berries" }, { "item": "pamhc2crops:sweetpotatoitem" }, { "item": "pamhc2crops:tomatilloitem" }, { "item": "pamhc2crops:tomatoitem" }, { "item": "pamhc2crops:turnipitem" }, { "item": "pamhc2crops:whitemushroomitem" }, { "item": "pamhc2crops:zucchiniitem" }
      ],
      "result": { "item": "kubejs:miraculous_soup", "count": 1 }
    }
  )
  //Ultimate Skewer
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": ["      ABC","     DECF","    GHCIJ","   KLCMN ","  OPCQR  "," STCUV   ","WXCYZ    ","5C12     ","C43      "],
      "key": {
        "A": { "item": "minecraft:cod" },
        "B": { "item": "dropthemeat:raw_strider" },
        "C": { "item": "immersiveengineering:stick_steel" },
        "D": { "item": "dropthemeat:raw_bee" },
        "E": { "item": "minecraft:mutton" },
        "F": { "item": "dropthemeat:raw_fox" },
        "G": { "item": "rats:raw_rat" },
        "H": { "item": "dropthemeat:raw_iron_golem" },
        "I": { "item": "minecraft:porkchop" },
        "J": { "item": "minecraft:salmon" },
        "K": { "item": "minecraft:tropical_fish" },
        "L": { "item": "dropthemeat:raw_bear" },
        "M": { "item": "minecraft:beef" },
        "N": { "item": "dropthemeat:raw_bat" },
        "O": { "item": "dropthemeat:raw_turtle" },
        "P": { "item": "dropthemeat:raw_villager" },
        "Q": { "item": "dropthemeat:raw_llama" },
        "R": { "item": "dropthemeat:raw_cat" },
        "S": { "item": "dropthemeat:raw_dolphin" },
        "T": { "item": "dropthemeat:piglin_porkchop" },
        "U": { "item": "dropthemeat:raw_horse" },
        "V": { "item": "undergarden:raw_dweller_meat" },
        "W": { "item": "quark:frog_leg" },
        "X": { "item": "dropthemeat:raw_parrot" },
        "Y": { "item": "minecraft:rabbit" },
        "Z": { "item": "dropthemeat:raw_squid" },
        "1": { "item": "minecraft:chicken" },
        "2": { "item": "dropthemeat:raw_wolf" },
        "3": { "item": "quark:crab_leg" },
        "4": { "item": "twilightforest:raw_meef" },
        "5": { "item": "twilightforest:raw_venison" }
      },
      "result": { "item": "kubejs:ultimate_skewer", "count": 1 }
    }
  )
})