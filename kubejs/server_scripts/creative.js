events.listen('recipes', function (e) {
  //Creative energy cell Meka
  e.custom({
    'type': 'mekanism:nucleosynthesizing',
    'itemInput': { 'ingredient': { 'item': 'overloaded:creative_generator' } },
    'gasInput': { 'amount': 1000, 'gas': 'mekanism:antimatter' },
    'output': { "type": "forge:nbt", "item": "mekanism:creative_energy_cube", count: 1, "nbt": "{mekData: {EnergyContainers: [{Container: 0, stored: \"18446744073709551615.9999\"}]}}" },
    'duration': 1000
  })
  //Sphere Of All Things
  e.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
        { "item": "extendedcrafting:ultimate_singularity" },
        { "item": "kubejs:ultimate_comb" },
        { "item": "kubejs:miraculous_soup" },
        { "item": "kubejs:ultimate_skewer" },
        { "item": "kubejs:ultimate_netherite_lattice" },
        { "item": "kubejs:quarkonium_block" }
      ],
      "energy": 100000000,
      "result": {
        "item": "kubejs:sphere",
        "count": 1
      }
    }
  )
  //Ultimate Netherite Ingot
  e.custom(
    {
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:corrupt_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:feather_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:phantom_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:poison_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:wither_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:water_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:ender_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:fire_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "upgradednetherite:gold_upgraded_netherite_ingot"
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "extendedcrafting:the_ultimate_ingot"
        }],
      "pressure": 4.9,
      "results": [{ "item": "kubejs:ultimate_netherite" }]
    }
  )
  //Creative Energy Cell Powah
  e.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
        { "item": "kubejs:sphere" },
        { "item": "immersiveengineering:capacitor_creative" },
        { "item": "powah:energy_cell_nitro" },
        { "item": "powah:battery_nitro" },
        { "item": "powah:reactor_nitro" },
        { "item": "mysticalagradditions:creative_essence" }
      ],
      "energy": 1000000000,
      "result": {
        "item": "powah:energy_cell_creative",
        "count": 1
      }
    }
  )
  //The Everlasting Guilty Pool
  e.custom(
    {
      "type": "mythicbotany:infusion",
      "group": "infuser",
      "output": { "item": "botania:creative_pool" },
      "mana": 25000000,
      "ingredients": [
        { "item": "botania:fabulous_pool" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "botania:manasteel_block" },
        { "item": "botania:terrasteel_block" },
        { "item": "botania:elementium_block" },
        { "item": "mythicbotany:alfsteel_block" },
        { "item": "kubejs:sphere" }
      ],
      "fromColor": 8005113,
      "toColor": 16711821
    }
  )
  //Creative Mana Tablet
  e.custom(
    {
      "type": "extendedcrafting:combination",
      "powerCost": 100000000,
      "powerRate": 100000,
      "input": { "item": "botania:mana_tablet" },
      "ingredients": [
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "botania:manasteel_block" },
        { "item": "botania:terrasteel_block" },
        { "item": "botania:elementium_block" },
        { "item": "mythicbotany:alfsteel_block" },
        { "item": "kubejs:sphere" }
      ],
      "result": { "type": "forge.nbt", "item": "botania:mana_tablet", "count": 1, "nbt": "{mana:500000, creative:1}" }
    })
  //Creative Conatus
  e.custom(
    {
      "input": [
        { "item": "woot:factory_upgrade" },
        { "item": "create:creative_fluid_tank" },
        { "item": "woot:factory_upgrade" },
        { "item": "woot:ench_plate_3" },
        { "item": "woot:ench_plate_3" },
        { "item": "woot:factory_upgrade" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "woot:factory_upgrade" }
      ],
      "inputFluid": "{FluidName:\"woot:conatus_fluid\",Amount:8000}",
      "processingTime": 2000,
      "output": {
        "item": "woot:creative_conatus",
        "count": 1
      },
      "type": "industrialforegoing:dissolution_chamber"
    }
  )
  //Creative CAD Assembly
  e.custom(
    {
      "type": "psi:trick_crafting",
      "input": { "item": "kubejs:sphere" },
      "output": { "item": "psi:cad_assembly_creative" },
      "cad": { "item": "psi:cad_assembly_psimetal" },
      "trick": "psi:trick_greater_infusion"
    }
  )
  //Rat Creative Upgrade
  e.smithing('rats:rat_upgrade_creative', 'rats:rat_upgrade_basic', 'mysticalagradditions:creative_essence')
  //Creative Cheese
  e.smithing('rats:creative_cheese', 'rats:cheese', 'mysticalagradditions:creative_essence')
  //Creative Dragon Meal
  e.smithing('iceandfire:creative_dragon_meal', 'iceandfire:dragon_meal', 'mysticalagradditions:creative_essence')
  //Creative Blaze Cake
  e.smithing('create:creative_blaze_cake', 'create:blaze_cake', 'mysticalagradditions:creative_essence')
  //Creative Motor Create
  e.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": [" ABA ", "ACDCA", "BDEDB", "ACDCA", " ABA "],
      "key": {
        "A": { "item": "create:shaft" },
        "B": { "tag": "forge:cogwheels" },
        "C": { "tag": "forge:large_cogwheels" },
        "D": { "item": "mysticalagradditions:creative_essence" },
        "E": { "item": "kubejs:sphere" }
      },
      "result": { "item": "create:creative_motor", "count": 1 }
    }
  )
  //creative compressor
  e.custom(
    {
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "pneumaticcraft:advanced_pressure_tube",
          "count": 32
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "mysticalagradditions:creative_essence",
          "count": 4
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "pneumaticcraft:advanced_pcb",
          "count": 4
        },
        { "item": "kubejs:sphere" },
        { "item": "pneumaticcraft:electrostatic_compressor" }
      ],
      "pressure": 4.9,
      "results": [
        { "item": "pneumaticcraft:creative_compressor" }
      ]
    }
  )
  //creative Compressed Iron Block
  e.custom(
    {
      "type": "pneumaticcraft:pressure_chamber",
      "inputs": [
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "pneumaticcraft:compressed_iron_block",
          "count": 32
        },
        {
          "type": "pneumaticcraft:stacked_item",
          "item": "mysticalagradditions:creative_essence",
          "count": 4
        },
      ],
      "pressure": 4.9,
      "results": [
        { "item": "pneumaticcraft:creative_compressed_iron_block" }
      ]
    }
  )
  //Creative Upgrade Pneumaticraft
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": ["KBBBCBBBK", "BADDEDDAB", "BDAFGFADB", "BDFJHJFDB", "CEGHIHGEC", "BDFJHJFDB", "BDAFGFADB", "BADDEDDAB", "KBBBCBBBK"],
      "key": {
        "A": { "item": "pneumaticcraft:inventory_upgrade" },
        "B": { "item": "pneumaticcraft:pressure_chamber_wall" },
        "C": { "item": "mekanism:creative_fluid_tank" },
        "D": { "item": "pneumaticcraft:advanced_pcb" },
        "E": { "item": "mekanism:creative_chemical_tank" },
        "F": { "item": "extradisks:262144k_storage_part" },
        "G": { "item": "botania:creative_pool" },
        "H": { "item": "storagedrawers:creative_storage_upgrade" },
        "I": { "item": "draconicevolution:creative_op_capacitor" },
        "J": { "item": "kubejs:sphere" },
        "K": { "item": "projectex:final_star" }
      },
      "result": { "item": "pneumaticcraft:creative_upgrade", "count": 1 }
    }
  )
  //Creative Generator
  e.custom(
    {
      "type": "astralsorcery:infuser",
      "fluidInput": "materialis:molten_starmetal",
      "input": {
        "item": "powah:energy_cell_creative"
      },
      "output": {
        "item": "overloaded:creative_generator"
      },
      "consumptionChance": 1,
      "duration": 200,
      "consumeMultipleFluids": true,
      "acceptChaliceInput": true,
      "copyNBTToOutputs": false
    }
  )
  //Creative Storage Upgrade
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": ["ABCDEFEDA", "DBGCHFHBB", "EHIJKLIGC", "FFLIKIJCD", "EHKKMKKHE", "DCJIKILFF", "CGILKJIHE", "BBHFHCGBD", "ADEFEDCBA"],
      "key": {
        "A": { "item": "eidolon:polished_planks" },
        "B": { "item": "storagedrawers:gold_storage_upgrade" },
        "C": { "item": "storagedrawers:diamond_storage_upgrade" },
        "D": { "item": "twilightforest:tower_wood" },
        "E": { "item": "undergarden:grongle_planks" },
        "F": { "item": "botania:dreamwood_planks" },
        "G": { "item": "storagedrawers:obsidian_storage_upgrade" },
        "H": { "item": "tconstruct:bloodshroom_planks" },
        "I": { "item": "storagedrawers:emerald_storage_upgrade" },
        "J": { "item": "ironchest:diamond_chest" },
        "K": { "item": "storagedrawers:iron_storage_upgrade" },
        "L": { "item": "endergetic:poise_planks" },
        "M": { "item": "metalbarrels:netherite_barrel" }
      },
      "result": { "item": "storagedrawers:creative_storage_upgrade", "count": 2 }
    }
  )
  //RFTools Dimensional Cell
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": ["HAIBCBIAH", "ADABCBADA", "IAJECEJAI", "BBEEFEEBB", "CCCFGFCCC", "BBEEFEEBB", "IAJECEJAI", "ADABCBADA", "HAIBCBIAH"],
      "key": {
        "A": { "item": "rftoolspower:endergenic" },
        "B": { "item": "rftoolsbase:infused_diamond" },
        "C": { "item": "rftoolspower:dimensionalcell_advanced" },
        "D": { "item": "mysticalagradditions:creative_essence" },
        "E": { "item": "rftoolspower:blazing_rod" },
        "F": { "type": "forge:nbt", "item": "extendedcrafting:singularity", "nbt": "{Id:\"extendedcrafting:dimensional_shard\"}" },
        "G": { "item": "kubejs:sphere" },
        "H": { "item": "kubejs:quarkonium_block" },
        "I": { "item": "rftoolsdim:legendary_lost_knowledge" },
        "J": { "item": "kubejs:quarkonium_ingot" }
      },
      "result": { "item": "rftoolspower:dimensionalcell_creative", "count": 1 }
    }
  )
  //Crative Capacitor
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 3,
      "pattern": ["AAAAAAA", "BCDDDCB", "EDFGFDE", "HIGJGIH", "EDFGFDE", "BCDDDCB", "AAAAAAA"],
      "key": {
        "A": { "item": "immersiveengineering:steel_scaffolding_standard" },
        "B": { "item": "kubejs:quarkonium_block" },
        "C": { "item": "immersiveengineering:capacitor_hv" },
        "D": { "item": "immersivepetroleum:petcoke_block" },
        "E": { "item": "immersiveengineering:electron_tube" },
        "F": { "item": "kubejs:quarkonium_ingot" },
        "G": { "item": "mysticalagradditions:creative_essence" },
        "H": { "item": "immersiveengineering:rs_engineering" },
        "I": { "item": "immersiveengineering:heavy_engineering" },
        "J": { "item": "rftoolspower:dimensionalcell_creative" }
      },
      "result": { "item": "immersiveengineering:capacitor_creative", "count": 1 }
    }
  )
  //Creative Energy Cell (Wormhole)
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 1,
      "pattern": ["AAA", "ABA", "AAA"],
      "key": {
        "A": { "item": "wormhole:advanced_energy_cell" },
        "B": { "item": "rftoolspower:dimensionalcell_creative" }
      },
      "result": { "item": "wormhole:creative_energy_cell", "count": 1 }
    }
  )

  //Creative Chemical Tank
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 2,
      "pattern": ["ABCBA", "BDEFB", "CEGEC", "BFEDB", "ABCBA"],
      "key": {
        "A": { "item": "mekanism:pellet_polonium" },
        "B": { "item": "mekanism:reprocessed_fissile_fragment" },
        "C": { "item": "mekanism:ultimate_chemical_tank" },
        "D": { "item": "mysticalagradditions:creative_essence" },
        "E": { "item": "mekanism:upgrade_gas" },
        "F": { "item": "kubejs:quarkonium_ingot" },
        "G": { "item": "mekanism:creative_fluid_tank" }
      },
      "result": { "item": "mekanism:creative_chemical_tank", "count": 1 }
    }
  )
  //Creative Tank
  e.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "tier": 4,
      "pattern": ["ABCDEFGHI", "JKLLLLLKM", "NOPPQPPOR", "SOPTUTPOV", "WOQXYZQO0", "1OPT2TPO3", "4OPPQPPO5", "6KLLLLLK7", "89-+.!,;:"],
      "key": {
        "A": { "item": "tconstruct:magma_bucket" },
        "B": { "item": "bloodmagic:life_essence_bucket" },
        "C": { "item": "tconstruct:molten_signalum_bucket" },
        "D": { "item": "create:chocolate_bucket" },
        "E": { "item": "immersivepetroleum:napalm_bucket" },
        "F": { "item": "thermal:syrup_bucket" },
        "G": { "item": "tconstruct:blazing_blood_bucket" },
        "H": { "item": "resourcefulbees:honey_fluid_bucket" },
        "I": { "item": "mekanism:lithium_bucket" },
        "J": { "item": "industrialforegoing:sludge_bucket" },
        "K": { "item": "mekanism:pellet_polonium" },
        "L": { "item": "mekanism:crystal_osmium" },
        "M": { "item": "tconstruct:molten_lumium_bucket" },
        "N": { "item": "mekanism:heavy_water_bucket" },
        "O": { "item": "mekanism:hdpe_sheet" },
        "P": { "item": "mekanism:dirty_netherite_scrap" },
        "Q": { "item": "projectex:fading_matter" },
        "R": { "item": "pneumaticcraft:lpg_bucket" },
        "S": { "item": "woot:enchant_fluid_bucket" },
        "T": { "item": "mysticalagradditions:creative_essence" },
        "U": { "item": "immersiveengineering:ethanol_bucket" },
        "V": { "item": "woot:puredye_fluid_bucket" },
        "W": { "item": "undergarden:virulent_mix_bucket" },
        "X": { "item": "pneumaticcraft:plastic_bucket" },
        "Y": { "item": "kubejs:sphere" },
        "Z": { "item": "tconstruct:scorched_stone_bucket" },
        "0": { "item": "mekanism:chlorine_bucket" },
        "1": { "item": "mekanismgenerators:fusion_fuel_bucket" },
        "2": { "item": "tconstruct:liquid_soul_bucket" },
        "3": { "item": "industrialforegoing:essence_bucket" },
        "4": { "item": "tconstruct:ender_slime_bucket" },
        "5": { "item": "woot:mob_essence_fluid_bucket" },
        "6": { "item": "industrialforegoing:pink_slime_bucket" },
        "7": { "item": "pneumaticcraft:etching_acid_bucket" },
        "8": { "item": "integrateddynamics:bucket_liquid_chorus" },
        "9": { "item": "mekanism:ethene_bucket" },
        "-": { "item": "industrialforegoing:ether_gas_bucket" },
        "+": { "item": "integrateddynamics:bucket_menril_resin" },
        ".": { "item": "pneumaticcraft:kerosene_bucket" },
        "!": { "item": "woot:conatus_fluid_bucket" },
        ",": { "item": "tconstruct:sky_slime_bucket" },
        ";": { "item": "tconstruct:molten_enderium_bucket" },
        ":": { "item": "mahoutsukai:murky_bucket" },
      },
      "result": { "item": "mekanism:creative_fluid_tank", "count": 1 }
    }
  )
  //Creative Fluid Tank (Create)
  e.custom(
    {
      "type": "ars_nouveau:enchanting_apparatus",
      "item_1": [{ "item": "mysticalagradditions:creative_essence" }],
      "item_2": [{ "item": "create:fluid_tank" }],
      "item_3": [{ "item": "kubejs:quarkonium_ingot" }],
      "item_4": [{ "item": "create:fluid_tank" }],
      "item_5": [{ "item": "create:fluid_tank" }],
      "item_6": [{ "item": "kubejs:quarkonium_ingot" }],
      "item_7": [{ "item": "create:fluid_tank" }],
      "item_8": [{ "item": "mysticalagradditions:creative_essence" }],
      "reagent": [{ "item": "mekanism:creative_fluid_tank" }],
      "output": { "item": "create:creative_fluid_tank" }
    }
  )
  //Creative Augment RF Coil
  e.custom({
    "type": "astralsorcery:altar",
    "altar_type": 3,
    "duration": 300,
    "starlight": 5000,
    "pattern": ["ABCBA", "BDEDB", "CEFEC", "BDEDB", "ABCBA"],
    "key": {
      "A": { "item": "eidolon:ender_calx" },
      "B": { "item": "mysticalagradditions:creative_essence" },
      "C": { "item": "bloodmagic:steadfastcrystal" },
      "D": { "item": "create:chromatic_compound" },
      "E": { "item": "envirocore:nanorite_interconnect" },
      "F": { "item": "thermal:rf_coil_augment" }
    },
    "output": [
      { "item": "thermal:rf_coil_creative_augment", "count": 1 }
    ],
    "focus_constellation": "astralsorcery:lucerna",
    "relay_inputs": [
      { "item": "astralsorcery:colored_lens_spectral" },
      { "item": "astralsorcery:colored_lens_spectral" },
      { "item": "astralsorcery:colored_lens_spectral" },
      { "item": "astralsorcery:colored_lens_spectral" },
      { "item": "astralsorcery:colored_lens_spectral" },
      { "item": "astralsorcery:colored_lens_spectral" },
      { "item": "astralsorcery:colored_lens_spectral" },
      { "item": "astralsorcery:colored_lens_spectral" }
    ],
    "effects": [
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_trait_focus_circle",
      "astralsorcery:altar_default_sparkle",
      "astralsorcery:built_in_effect_constellation_lines",
      "astralsorcery:built_in_effect_attunement_sparkle"
    ]
  })
  //Creative Augment Machine Efficiendy
  e.custom(
    {
      "type": "astralsorcery:altar",
      "altar_type": 3,
      "duration": 300,
      "starlight": 5000,
      "pattern": ["ABCBA", "BDEDB", "CEFEC", "BDEDB", "ABCBA"],
      "key": {
        "A": { "item": "eidolon:ender_calx" },
        "B": { "item": "mysticalagradditions:creative_essence" },
        "C": { "item": "bloodmagic:steadfastcrystal" },
        "D": { "item": "create:chromatic_compound" },
        "E": { "item": "envirocore:nanorite_interconnect" },
        "F": { "item": "thermal:machine_efficiency_augment" }
      },
      "output": [
        { "item": "thermal:machine_efficiency_creative_augment", "count": 1 }
      ],
      "focus_constellation": "astralsorcery:lucerna",
      "relay_inputs": [
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" }
      ],
      "effects": [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  )
  //Creative Augment Fluid Tank
  e.custom(
    {
      "type": "astralsorcery:altar",
      "altar_type": 3,
      "duration": 300,
      "starlight": 5000,
      "pattern": ["ABCBA", "BDEDB", "CEFEC", "BDEDB", "ABCBA"],
      "key": {
        "A": { "item": "eidolon:ender_calx" },
        "B": { "item": "mysticalagradditions:creative_essence" },
        "C": { "item": "bloodmagic:steadfastcrystal" },
        "D": { "item": "create:chromatic_compound" },
        "E": { "item": "envirocore:nanorite_interconnect" },
        "F": { "item": "thermal:fluid_tank_augment" }
      },
      "output": [
        { "item": "thermal:fluid_tank_creative_augment", "count": 1 }
      ],
      "focus_constellation": "astralsorcery:lucerna",
      "relay_inputs": [
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" }
      ],
      "effects": [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  )
  //Creative Augment Machine Catalyst
  e.custom(
    {
      "type": "astralsorcery:altar",
      "altar_type": 3,
      "duration": 300,
      "starlight": 5000,
      "pattern": ["ABCBA", "BDEDB", "CEFEC", "BDEDB", "ABCBA"],
      "key": {
        "A": { "item": "eidolon:ender_calx" },
        "B": { "item": "mysticalagradditions:creative_essence" },
        "C": { "item": "bloodmagic:steadfastcrystal" },
        "D": { "item": "create:chromatic_compound" },
        "E": { "item": "envirocore:nanorite_interconnect" },
        "F": { "item": "thermal:machine_catalyst_augment" }
      },
      "output": [
        { "item": "thermal:machine_catalyst_creative_augment", "count": 1 }
      ],
      "focus_constellation": "astralsorcery:lucerna",
      "relay_inputs": [
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" },
        { "item": "astralsorcery:colored_lens_spectral" }
      ],
      "effects": [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  )
  //Creative Sensor
  e.smithing(Item.of('tconstruct:creative_slot', { slot: "sensor" }), 'create:refined_radiance', 'mysticalagradditions:creative_essence')
  //Creative Soul
  e.smithing(Item.of('tconstruct:creative_slot', { slot: "souls" }), 'minecraft:emerald', 'mysticalagradditions:creative_essence')
  //Creative Ability
  e.smithing(Item.of('tconstruct:creative_slot', { slot: "abilities" }), 'minecraft:nether_star', 'mysticalagradditions:creative_essence')
  //Creative Upgrade
  e.smithing(Item.of('tconstruct:creative_slot', { slot: "upgrades" }), 'minecraft:anvil', 'mysticalagradditions:creative_essence')
  //Infinity Pipe Upgrade
  e.smithing('pipez:infinity_upgrade', 'pipez:ultimate_upgrade', 'mysticalagradditions:creative_essence')
  //Creative Controller
  e.smithing('refinedstorage:creative_controller', '#refinedstorage:controller', 'rftoolspower:dimensionalcell_creative')
  //Creative Wireless Crafting Grid
  e.smithing('refinedstorageaddons:creative_wireless_crafting_grid', 'refinedstorageaddons:wireless_crafting_grid', 'rftoolspower:dimensionalcell_creative')
  //Apiary Creative
  e.remove({ id: "creativeapiary:tcreative_apiary" })
  e.custom(
    {
      "type": "mysticalagriculture:infusion",
      "input": { "item": "resourcefulbees:t4_apiary" },
      "ingredients": [
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" }
      ],
      "result": { "item": "creativeapiary:tcreative_apiary", "count": 1 }
    })
  //Storage Apiary Creative
  e.remove({ id: "creativeapiary:creative_apiary_storage" })
  e.custom(
    {
      "type": "mysticalagriculture:infusion",
      "input": { "item": "resourcefulbees:apiary_storage" },
      "ingredients": [
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" }
      ],
      "result": { "item": "creativeapiary:creative_apiary_storage", "count": 1 }
    })
  //Breeder Apiary Creative
  e.remove({ id: "creativeapiary:creative_apiary_breeder" })
  e.custom(
    {
      "type": "mysticalagriculture:infusion",
      "input": { "item": "resourcefulbees:apiary_breeder" },
      "ingredients": [
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "mysticalagradditions:creative_essence" }
      ],
      "result": { "item": "creativeapiary:creative_apiary_breeder", "count": 1 }
    })
  //Creative Crate (create)
  e.custom({
    "type": "create:mechanical_crafting",
    "pattern": [
      "  A   A  ",
      " BCC CCB ",
      "ACDEDEDCA",
      " CEFFFEC ",
      "  DFGFD  ",
      " CEFFFEC ",
      "ACDEDEDCA",
      " BCC CCB ",
      "  A   A  "
    ],
    "key": {
      "A": { "item": "kubejs:quarkonium_block" },
      "B": { "item": "kubejs:ultimate_comb_block" },
      "C": { "item": "extendedcrafting:the_ultimate_block" },
      "D": { "item": "mysticalagradditions:creative_essence" },
      "E": { "item": "kubejs:sphere" },
      "F": { "item": "create:adjustable_crate" },
      "G": { "item": "pneumaticcraft:creative_upgrade" }
    },
    "result": {
      "item": "create:creative_crate",
      "count": 1
    }
  })
  //Creative Vending Upgrade
  e.shaped(item.of('storagedrawers:creative_vending_upgrade', 1), [
    'AAA',
    'BCB',
    'AAA'
  ], {
    A: '#forge:rods/wooden',
    B: 'create:creative_crate',
    C: 'storagedrawers:creative_storage_upgrade'
  })
  //Creative Capacitor
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "tier": "CHAOTIC",
    "catalyst": { "item": "overloaded:creative_generator" },
    "total_energy": 1000000000,
    "ingredients": [
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_core" },
      { "item": "draconicevolution:chaotic_core" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "kubejs:sphere" },
      { "item": "kubejs:sphere" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_core" },
      { "item": "draconicevolution:chaotic_core" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_capacitor" }
    ],
    "result": { "item": "draconicevolution:creative_capacitor" }
  })
  //Creative Power Source
  e.custom({
    "type": "draconicevolution:fusion_crafting",
    "tier": "CHAOTIC",
    "catalyst": { "item": "overloaded:creative_generator" },
    "total_energy": 1000000000,
    "ingredients": [
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:reactor_core" },
      { "item": "draconicevolution:reactor_core" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "kubejs:sphere" },
      { "item": "kubejs:sphere" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:reactor_core" },
      { "item": "draconicevolution:reactor_core" },
      { "item": "draconicevolution:chaotic_capacitor" },
      { "item": "draconicevolution:chaotic_capacitor" }
    ],
    "result": { "item": "draconicevolution:creative_op_capacitor" }
  })
})