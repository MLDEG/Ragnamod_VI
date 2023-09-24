events.listen('recipes', function (e) {

  //Grass (nature essence)
  e.shapeless(item.of('minecraft:grass', 8), ['mysticalagriculture:nature_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:nature_essence', 'mysticalagriculture:nature_essence'])

  //Inferium Seed
  e.shaped(item.of('kubejs:inferium_seed', 1), [' X ','XSX',' X '], 
  {
  X: 'mysticalagriculture:inferium_essence',
  S: 'mysticalagriculture:prosperity_seed_base'
  })

  //Prudentium Seed
  e.shaped(item.of('kubejs:prudentium_seed', 1), [' X ','XSX',' X '], 
  {
    X: 'mysticalagriculture:prudentium_essence',
    S: 'kubejs:inferium_seed'
  })

  //Tertium Seed
  e.shaped(item.of('kubejs:tertium_seed', 1), [' X ','XSX',' X '], {
    X: 'mysticalagriculture:tertium_essence',
    S: 'kubejs:prudentium_seed'
  })

  //Imperium Seed
  e.shaped(item.of('kubejs:imperium_seed', 1), [' X ','XSX',' X '], {
    X: 'mysticalagriculture:imperium_essence',
    S: 'kubejs:tertium_seed'
  })

  //Supremium Seed
  e.shaped(item.of('kubejs:supremium_seed', 1), [' X ','XSX',' X '], {
    X: 'mysticalagriculture:supremium_essence',
    S: 'kubejs:imperium_seed'
  })

  //Insanium Seed
  e.shaped(item.of('kubejs:insanium_seed', 1), [' X ','XSX',' X '], {
    X: 'mysticalagradditions:insanium_essence',
    S: 'kubejs:supremium_seed'
  })

  //Steel Essence
  e.remove({ id: 'mysticalagriculture:essence/common/steel_ingot' })
  e.shaped(item.of('mekanism:ingot_steel', 3), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:steel_essence'
  })

  //Sulfur Essence
  e.remove({ id: 'mysticalagriculture:essence/common/sulfur' })
  e.shaped(item.of('thermal:sulfur_dust', 8), ['   ','XXX','   '], {
    X: 'mysticalagriculture:sulfur_essence'
  })

  //Bronze Essence
  e.remove({ id: 'mysticalagriculture:essence/common/bronze_ingot' })
  e.shaped(item.of('thermal:bronze_ingot', 4), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:bronze_essence'
  })

  //Constantan Essence
  e.remove({ id: 'mysticalagriculture:essence/common/constantan_ingot' })
  e.shaped(item.of('thermal:constantan_ingot', 4), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:constantan_essence'
  })

  //Electrum Essence
  e.remove({ id: 'mysticalagriculture:essence/common/electrum_ingot' })
  e.shaped(item.of('thermal:electrum_ingot', 4), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:electrum_essence'
  })
  
  //Jellyfish Jelly Essence
  e.shaped(item.of('jellyfishing:jellyfish_jelly', 6), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:jellyfish_jelly_essence'
  })

  //Rubber Essence
  e.shaped(item.of('industrialforegoing:dryrubber', 1), ['XXX','XXX','XXX'], {
    X: 'mysticalagriculture:rubber_essence'
  })

  //Arcane Gold Essence
  e.shaped(item.of('eidolon:arcane_gold_ingot', 1), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:arcane_gold_essence'
  })

  //Oratchalcum Essence
  e.shaped(item.of('rats:oratchalcum_ingot', 1), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:oratchalcum_essence'
  })

  //Obsidian Ingot Essence
  e.shaped(item.of('forbidden_arcanus:obsidian_ingot', 4), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:obsidian_ingot_essence'
  })

  //Regalium Essence
  e.shaped(item.of('undergarden:regalium_ingot', 4), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:regalium_essence'
  })

  //Cloggrum Essence
  e.shaped(item.of('undergarden:cloggrum_ingot', 4), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:cloggrum_essence'
  })

  //Froststeel Essence
  e.shaped(item.of('undergarden:froststeel_ingot', 4), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:froststeel_essence'
  })

  //Utherium Essence
  e.shaped(item.of('undergarden:utherium_ingot', 1), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:utherium_essence'
  })

  //Alfsteel Essence
  e.shaped(item.of('mythicbotany:alfsteel_ingot', 1), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:alfsteel_essence'
  })

  //Endumium Essence
  e.shaped(item.of('farlanders:endumium_crystal', 1), ['XXX','XXX','XXX'], {
    X: 'mysticalagriculture:endumium_essence'
  })

  //Arcane Crystal Essence
  e.shaped(item.of('forbidden_arcanus:arcane_crystal', 1), ['XXX','XXX','XXX'], {
    X: 'mysticalagriculture:arcanecrystal_essence'
  })

  //Ultimate Essence
  e.shaped(item.of('extendedcrafting:the_ultimate_ingot', 1), ['XXX','X X','XXX'], {
    X: 'kubejs:ultimate_essence'
  })

  //Forgotten Ingot Essence
  e.shaped(item.of('undergarden:forgotten_ingot', 1), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:forgotten_ingot_essence'
  })

  //Neptunium Essence
  e.shaped(item.of('aquaculture:neptunium_ingot', 1), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:neptunium_essence'
  })
  
  //Brass Essence
  e.remove({ id: 'mysticalagriculture:essence/common/brass_ingot' })
  e.shaped(item.of('create:brass_ingot', 4), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:brass_essence'
  })
  
  //Sapphie Essence
  e.remove({ id: 'mysticalagriculture:essence/gems/sapphire' })
  e.shaped(item.of('thermal:sapphire', 6), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:sapphire_essence'
  })
  
  //Ruby Essence
  e.remove({ id: 'mysticalagriculture:essence/gems/ruby' })
  e.shaped(item.of('thermal:ruby', 6), ['XXX','X X','XXX'], {
    X: 'mysticalagriculture:ruby_essence'
  })

  //Saltpeter Essence
  e.remove({ id: 'mysticalagriculture:essence/common/saltpeter' })
  e.shaped(item.of('immersiveengineering:dust_saltpeter', 8), [' X ',' X ',' X '], {
    X: 'mysticalagriculture:saltpeter_essence'
  })

  //Chaotic Shard Essence
  e.shaped(item.of('draconicevolution:small_chaos_frag', 1), ['XXX','XXX','XXX'], {
    X: 'mysticalagriculture:chaotic_essence'
  })

  //Phantom Essence
  e.shaped(item.of('minecraft:phantom_membrane', 6), [' X ','XXX',' X '], {
    X: 'mysticalagriculture:phantom_essence'
  })
  /*****************************CORAL****************************/

  //Acan
  e.shaped(item.of('upgrade_aquatic:acan_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/cyan'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:acan_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/cyan'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:acan_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/cyan'
  })

  //Finger
  e.shaped(item.of('upgrade_aquatic:finger_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/orange'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:finger_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/orange'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:finger_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/orange'
  })

  //Star
  e.shaped(item.of('upgrade_aquatic:star_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/lime'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:star_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/lime'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:star_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/lime'
  })

  //Moss
  e.shaped(item.of('upgrade_aquatic:moss_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/green'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:moss_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/green'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:moss_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/green'
  })

  //Petal
  e.shaped(item.of('upgrade_aquatic:petal_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/light_blue'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:petal_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/light_blue'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:petal_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/light_blue'
  })

  //Branch
  e.shaped(item.of('upgrade_aquatic:branch_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/black'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:branch_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/black'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:branch_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/black'
  })

  //Rock
  e.shaped(item.of('upgrade_aquatic:rock_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/brown'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:rock_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/brown'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:rock_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/brown'
  })

  //Pillow
  e.shaped(item.of('upgrade_aquatic:pillow_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/white'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:pillow_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/white'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:pillow_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/white'
  })

  //Silk
  e.shaped(item.of('upgrade_aquatic:silk_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/purple'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:silk_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/purple'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:silk_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/purple'
  })

  //Chrome
  e.shaped(item.of('upgrade_aquatic:chrome_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/gray'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:chrome_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/gray'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:chrome_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dyes/gray'
  })

  //Prismarine
  e.shaped(item.of('upgrade_aquatic:prismarine_coral', 8), [' X ','XOX',' X '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dusts/prismarine'
  })
  //block
  e.shaped(item.of('upgrade_aquatic:prismarine_coral_block', 12), ['XXX','XOX','XXX'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dusts/prismarine'
  })
  //Fan
  e.shaped(item.of('upgrade_aquatic:prismarine_coral_fan', 6), ['X X',' O ','X X'], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dusts/prismarine'
  })
  //Shower
  e.shaped(item.of('upgrade_aquatic:prismarine_coral_fan', 4), ['XOX',' X ','   '], {
    X: 'mysticalagriculture:coral_essence',
    O: '#forge:dusts/prismarine'
  })

  //Thermal insolator
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_air_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_earth_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_water_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_fire_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_inferium_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_stone_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_dirt_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_wood_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_ice_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_nature_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_dye_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_nether_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_coal_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_coral_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_honey_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_pig_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_chicken_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_cow_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_sheep_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_squid_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_fish_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_slime_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_turtle_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_rubber_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_silicon_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_sulfur_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_aluminum_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_copper_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_saltpeter_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_platinum_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_flower_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_iron_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_nether_quartz_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_glowstone_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_redstone_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_obsidian_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_prismarine_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_zombie_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_skeleton_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_creeper_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_spider_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_rabbit_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_tin_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_bronze_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_zinc_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_brass_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_silver_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_lead_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_graphite_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_blizz_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_blitz_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_basalz_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_manasteel_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_ender_biotite_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_sky_stone_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_gold_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_lapis_lazuli_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_end_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_experience_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_blaze_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_ghast_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_enderman_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_steel_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_nickel_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_constantan_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_electrum_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_invar_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_tungsten_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_uranium_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_signalum_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_lumium_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_hop_graphite_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_elementium_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_osmium_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_refined_glowstone_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_refined_obsidian_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_energized_steel_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_blazing_crystal_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_diamond_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_emerald_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_netherite_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_wither_skeleton_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_enderium_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_terrasteel_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_niotic_crystal_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_spirited_crystal_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_uraninite_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_quartz_enriched_iron_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_mithril_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_fluix_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_titanium_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_chrome_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_iridium_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_phantom_seeds' })
  e.remove({ id: 'thermal:compat/mysticalagriculture/insolator_mysticalag_certus_quartz_seeds' })

  //-----------------------------------------TIERS 1--------------------------------------------------------------------------------------
  e.remove({ id: "mysticalagriculture:seed/infusion/stone" })
  inferiumSeed('minecraft:stone', 'mysticalagriculture:stone_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/dirt" })
  inferiumSeed('minecraft:dirt', 'mysticalagriculture:dirt_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/wood" })
  inferiumSeed('minecraft:oak_log', 'mysticalagriculture:wood_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/ice" })
  inferiumSeed('minecraft:packed_ice', 'mysticalagriculture:ice_seeds')

  //-----------------------------------------TIERS 2--------------------------------------------------------------------------------------
  e.remove({ id: "mysticalagriculture:seed/infusion/nature" })
  prudentiumSeed('mysticalagriculture:nature_agglomeratio', 'mysticalagriculture:nature_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/dye" })
  prudentiumSeed('mysticalagriculture:dye_agglomeratio', 'mysticalagriculture:dye_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/nether" })
  prudentiumSeed('mysticalagriculture:nether_agglomeratio', 'mysticalagriculture:nether_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/coal" })
  prudentiumSeed('minecraft:coal', 'mysticalagriculture:coal_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/coral" })
  prudentiumSeed('mysticalagriculture:coral_agglomeratio', 'mysticalagriculture:coral_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/honey" })
  prudentiumSeed('mysticalagriculture:honey_agglomeratio', 'mysticalagriculture:honey_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/rubber" })
  prudentiumSeed('industrialforegoing:dryrubber', 'mysticalagriculture:rubber_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/sulfur" })
  prudentiumSeed('thermal:sulfur_dust', 'mysticalagriculture:sulfur_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/aluminum" })
  prudentiumSeed('janoeo:aluminium_ingot', 'mysticalagriculture:aluminum_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/copper" })
  prudentiumSeed('thermal:copper_ingot', 'mysticalagriculture:copper_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/saltpeter" })
  prudentiumSeed('thermal:niter_dust', 'mysticalagriculture:saltpeter_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/mystical_flower" })
  prudentiumSeed('mysticalagriculture:mystical_flower_agglomeratio', 'mysticalagriculture:mystical_flower_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/apatite" })
  prudentiumSeed('thermal:apatite', 'mysticalagriculture:apatite_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/marble" })
  prudentiumSeed('chisel:marble/raw', 'mysticalagriculture:marble_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/limestone" })
  prudentiumSeed('chisel:limestone/raw', 'mysticalagriculture:limestone_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/basalt" })
  prudentiumSeed('chisel:basalt/raw', 'mysticalagriculture:basalt_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/silicon" })
  prudentiumSeed('refinedstorage:silicon', 'mysticalagriculture:silicon_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/jellyfish_jelly" })
  prudentiumSeed('jellyfishing:jellyfish_jelly', 'mysticalagriculture:jellyfish_jelly_seeds')
  
  //-----------------------------------------TIERS 3--------------------------------------------------------------------------------------
  e.remove({ id: "mysticalagriculture:seed/infusion/iron" })
  tertiumSeed('minecraft:iron_ingot', 'mysticalagriculture:iron_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/nether_quartz" })
  tertiumSeed('minecraft:quartz', 'mysticalagriculture:nether_quartz_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/glowstone" })
  tertiumSeed('minecraft:glowstone_dust', 'mysticalagriculture:glowstone_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/redstone" })
  tertiumSeed('minecraft:redstone', 'mysticalagriculture:redstone_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/obsidian" })
  tertiumSeed('minecraft:obsidian', 'mysticalagriculture:obsidian_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/prismarine" })
  tertiumSeed('mysticalagriculture:prismarine_agglomeratio', 'mysticalagriculture:prismarine_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/tin" })
  tertiumSeed('thermal:tin_ingot', 'mysticalagriculture:tin_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/bronze" })
  tertiumSeed('thermal:bronze_ingot', 'mysticalagriculture:bronze_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/zinc" })
  tertiumSeed('janoeo:zinc_ingot', 'mysticalagriculture:zinc_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/brass" })
  tertiumSeed('create:brass_ingot', 'mysticalagriculture:brass_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/silver" })
  tertiumSeed('thermal:silver_ingot', 'mysticalagriculture:silver_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/lead" })
  tertiumSeed('thermal:lead_ingot', 'mysticalagriculture:lead_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/manasteel" })
  tertiumSeed('botania:manasteel_ingot', 'mysticalagriculture:manasteel_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/ender_biotite" })
  tertiumSeed('quark:biotite', 'mysticalagriculture:ender_biotite_seeds')
  
  e.remove({ id: "mysticalagriculture:cloggrum_seeds_infusion" })
  tertiumSeed('undergarden:cloggrum_ingot', 'mysticalagriculture:cloggrum_seeds')
  
  e.remove({ id: "mysticalagriculture:obsidian_ingot_seeds_infusion" })
  tertiumSeed('forbidden_arcanus:obsidian_ingot', 'mysticalagriculture:obsidian_ingot_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/aquamarine" })
  tertiumSeed('astralsorcery:aquamarine', 'mysticalagriculture:aquamarine_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/graphite" })
  tertiumSeed('bigreactors:graphite_ingot', 'mysticalagriculture:graphite_seeds')

  e.remove({ id: "mysticalagriculture:arcanecrystal_seeds_infusion" })
  tertiumSeed('forbidden_arcanus:arcane_crystal', 'mysticalagriculture:arcanecrystal_seeds')
 
  e.remove({ id: "mysticalagriculture:seed/infusion/ironwood" })
  tertiumSeed('twilightforest:ironwood_ingot', 'mysticalagriculture:ironwood_seeds')
 
  e.remove({ id: "mysticalagriculture:seed/infusion/steeleaf" })
  tertiumSeed('twilightforest:steeleaf_ingot', 'mysticalagriculture:steeleaf_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/tinkers_bronze" })
  tertiumSeed('tconstruct:tinkers_bronze_ingot', 'mysticalagriculture:tinkers_bronze_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/pig_iron" })
  tertiumSeed('tconstruct:pig_iron_ingot', 'mysticalagriculture:pig_iron_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/slimesteel" })
  tertiumSeed('tconstruct:slimesteel_ingot', 'mysticalagriculture:slimesteel_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/quartz_enriched_iron" })
  tertiumSeed('refinedstorage:quartz_enriched_iron', 'mysticalagriculture:quartz_enriched_iron_seeds')

  //-----------------------------------------TIERS 4--------------------------------------------------------------------------------------
  e.remove({ id: "mysticalagriculture:seed/infusion/gold" })
  imperiumSeed('minecraft:gold_ingot', 'mysticalagriculture:gold_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/lapis_lazuli" })
  imperiumSeed('minecraft:lapis_lazuli', 'mysticalagriculture:lapis_lazuli_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/end" })
  imperiumSeed('mysticalagriculture:end_agglomeratio', 'mysticalagriculture:end_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/steel" })
  imperiumSeed('mekanism:ingot_steel', 'mysticalagriculture:steel_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/nickel" })
  imperiumSeed('thermal:nickel_ingot', 'mysticalagriculture:nickel_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/constantan" })
  imperiumSeed('thermal:constantan_ingot', 'mysticalagriculture:constantan_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/electrum" })
  imperiumSeed('thermal:electrum_ingot', 'mysticalagriculture:electrum_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/invar" })
  imperiumSeed('thermal:invar_ingot', 'mysticalagriculture:invar_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/tungsten" })
  imperiumSeed('kubejs:tungsten_ingot', 'mysticalagriculture:tungsten_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/uranium" })
  imperiumSeed('mekanism:ingot_uranium', 'mysticalagriculture:uranium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/signalum" })
  imperiumSeed('thermal:signalum_ingot', 'mysticalagriculture:signalum_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/lumium" })
  imperiumSeed('thermal:lumium_ingot', 'mysticalagriculture:lumium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/hop_graphite" })
  imperiumSeed('immersiveengineering:ingot_hop_graphite', 'mysticalagriculture:hop_graphite_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/elementium" })
  imperiumSeed('botania:elementium_ingot', 'mysticalagriculture:elementium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/osmium" })
  imperiumSeed('mekanism:ingot_osmium', 'mysticalagriculture:osmium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/refined_glowstone" })
  imperiumSeed('mekanism:ingot_refined_glowstone', 'mysticalagriculture:refined_glowstone_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/refined_obsidian" })
  imperiumSeed('mekanism:ingot_refined_obsidian', 'mysticalagriculture:refined_obsidian_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/energized_steel" })
  imperiumSeed('powah:steel_energized', 'mysticalagriculture:energized_steel_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/blazing_crystal" })
  imperiumSeed('powah:crystal_blazing', 'mysticalagriculture:blazing_crystal_seeds')

  e.remove({ id: "mysticalagriculture:froststeel_seeds_infusion" })
  imperiumSeed('undergarden:froststeel_ingot', 'mysticalagriculture:froststeel_seeds')

  e.remove({ id: "mysticalagriculture:regalium_seeds_infusion" })
  imperiumSeed('undergarden:regalium_ingot', 'mysticalagriculture:regalium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/starmetal" })
  imperiumSeed('astralsorcery:starmetal_ingot', 'mysticalagriculture:starmetal_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/compressed_iron" })
  imperiumSeed('pneumaticcraft:ingot_iron_compressed', 'mysticalagriculture:compressed_iron_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/fluorite" })
  imperiumSeed('mekanism:fluorite_gem', 'mysticalagriculture:fluorite_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/fiery_ingot" })
  imperiumSeed('twilightforest:fiery_ingot', 'mysticalagriculture:fiery_ingot_seeds')
 
  e.remove({ id: "mysticalagriculture:seed/infusion/knightmetal" })
  imperiumSeed('twilightforest:knightmetal_ingot', 'mysticalagriculture:knightmetal_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/cobalt" })
  imperiumSeed('tconstruct:cobalt_ingot', 'mysticalagriculture:cobalt_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/sapphire" })
  imperiumSeed('thermal:sapphire', 'mysticalagriculture:sapphire_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/ruby" })
  imperiumSeed('thermal:ruby', 'mysticalagriculture:ruby_seeds')

  imperiumSeed('aquaculture:neptunium_ingot', 'mysticalagriculture:neptunium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/rose_gold" })
  imperiumSeed('tconstruct:rose_gold_ingot', 'mysticalagriculture:rose_gold_seeds')

  //-----------------------------------------TIERS 5--------------------------------------------------------------------------------------
  e.remove({ id: "mysticalagriculture:seed/infusion/hepatizon" })
  supremiumSeed('tconstruct:hepatizon_ingot', 'mysticalagriculture:hepatizon_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/manyullyn" })
  supremiumSeed('tconstruct:manyullyn_ingot', 'mysticalagriculture:manyullyn_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/queens_slime" })
  supremiumSeed('tconstruct:queens_slime_ingot', 'mysticalagriculture:queens_slime_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/cyanite" })
  supremiumSeed('bigreactors:cyanite_ingot', 'mysticalagriculture:cyanite_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/emerald" })
  supremiumSeed('minecraft:emerald', 'mysticalagriculture:emerald_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/netherite" })
  supremiumSeed('minecraft:netherite_ingot', 'mysticalagriculture:netherite_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/enderium" })
  supremiumSeed('thermal:enderium_ingot', 'mysticalagriculture:enderium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/terrasteel" })
  supremiumSeed('botania:terrasteel_ingot', 'mysticalagriculture:terrasteel_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/niotic_crystal" })
  supremiumSeed('powah:crystal_niotic', 'mysticalagriculture:niotic_crystal_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/spirited_crystal" })
  supremiumSeed('powah:crystal_spirited', 'mysticalagriculture:spirited_crystal_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/uraninite" })
  supremiumSeed('powah:uraninite', 'mysticalagriculture:uraninite_seeds')

  e.remove({ id: "mysticalagriculture:arcane_gold_seeds_infusion" })
  supremiumSeed('eidolon:arcane_gold_ingot', 'mysticalagriculture:arcane_gold_seeds')

  e.remove({ id: "mysticalagriculture:oratchalcum_seeds_infusion" })
  supremiumSeed('rats:oratchalcum_ingot', 'mysticalagriculture:oratchalcum_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/platinum" })
  supremiumSeed('kubejs:platinum_ingot', 'mysticalagriculture:platinum_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/diamond" })
  supremiumSeed('minecraft:diamond', 'mysticalagriculture:diamond_seeds')

  e.remove({ id: "mysticalagriculture:utherium_seeds_infusion" })
  supremiumSeed('undergarden:utherium_ingot', 'mysticalagriculture:utherium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/yellorium" })
  supremiumSeed('bigreactors:yellorium_ingot', 'mysticalagriculture:yellorium_seeds')

  e.remove({ id: "mysticalagriculture:endumium_seeds_infusion" })
  supremiumSeed('farlanders:endumium_block', 'mysticalagriculture:endumium_seeds')

  e.remove({ id: "mysticalagriculture:seed/infusion/rock_crystal" })
  supremiumSeed('astralsorcery:rock_crystal', 'mysticalagriculture:rock_crystal_seeds')

  e.remove({ id: "mysticalagriculture:forgotten_ingot_seeds_infusion" })
  supremiumSeed('undergarden:forgotten_ingot', 'mysticalagriculture:forgotten_ingot_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/draconium" })
  supremiumSeed('draconicevolution:draconium_ingot', 'mysticalagriculture:draconium_seeds')

  //-----------------------------------------TIERS 6--------------------------------------------------------------------------------------
  e.remove({ id: "mysticalagriculture:nether_star_seeds_infusion" })
  insaniumSeed('minecraft:nether_star','mysticalagriculture:nether_star_seeds')

  e.remove({ id: "mysticalagriculture:dragon_egg_seeds_infusion" })
  insaniumSeed('mysticalagradditions:dragon_scale','mysticalagriculture:dragon_egg_seeds')

  e.remove({ id: "mysticalagriculture:alfsteel_seeds_infusion" })
  insaniumSeed('mythicbotany:alfsteel_ingot','mysticalagriculture:alfsteel_seeds')

  e.remove({ id: "mysticalagriculture:nitro_crustal_seeds_infusion" })
  insaniumSeed('powah:crystal_nitro','mysticalagriculture:nitro_crystal_seeds')
  
  e.remove({ id: "mysticalagriculture:seed/infusion/awakened_draconium" })
  insaniumSeed('draconicevolution:awakened_draconium_ingot','mysticalagriculture:awakened_draconium_seeds')
  
  e.remove({ id: "mysticalagriculture:chaotic_seeds_infusion" })
  insaniumSeed('draconicevolution:chaos_shard','mysticalagriculture:chaotic_seeds')

  //-----------------------------------------SOULIUM--------------------------------------------------------------------------------------
  //Pig Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/pig" })
  souliumSeed('minecraft:porkchop', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:pig_seeds')
  //Chicken Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/chicken" })
  souliumSeed('minecraft:chicken', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:chicken_seeds')
  //Cow Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/cow" })
  souliumSeed('minecraft:beef', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:cow_seeds')
  //Sheep Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/sheep" })
  souliumSeed('minecraft:mutton', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:sheep_seeds')
  //Squid Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/squid" })
  souliumSeed('minecraft:ink_sac', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:squid_seeds')
  //Fish Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/fish" })
  souliumSeed('minecraft:cod', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:fish_seeds')
  //Slime Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/slime" })
  souliumSeed('minecraft:slime_ball', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:slime_seeds')
  //Turtle Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/turtle" })
  souliumSeed('minecraft:scute', 'mysticalagriculture:prudentium_essence', 'mysticalagriculture:turtle_seeds')
  //Zombie Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/zombie" })
  souliumSeed('minecraft:rotten_flesh', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:zombie_seeds')
  //Skeleton Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/skeleton" })
  souliumSeed('minecraft:bone', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:skeleton_seeds')
  //Creeper Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/creeper" })
  souliumSeed('minecraft:gunpowder', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:creeper_seeds')
  //Spider Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/spider" })
  souliumSeed('minecraft:spider_eye', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:spider_seeds')
  //Rabbit Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/rabbit" })
  souliumSeed('minecraft:rabbit', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:rabbit_seeds')
  //Blizz Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/blizz" })
  souliumSeed('thermal:blizz_rod', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:blizz_seeds')
  //Blitz Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/blitz" })
  souliumSeed('thermal:blitz_rod', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:blitz_seeds')
  //Basalz Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/basalz" })
  souliumSeed('thermal:basalz_rod', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:basalz_seeds')
  //Experience Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/experience" })
  souliumSeed('minecraft:experience_bottle', 'mysticalagriculture:imperium_essence', 'mysticalagriculture:experience_seeds')
  //Enderman Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/enderman" })
  souliumSeed('minecraft:ender_pearl', 'mysticalagriculture:imperium_essence', 'mysticalagriculture:enderman_seeds')
  //Ghast Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/ghast" })
  souliumSeed('minecraft:ghast_tear', 'mysticalagriculture:imperium_essence', 'mysticalagriculture:ghast_seeds')
  //Blaze Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/blaze" })
  souliumSeed('minecraft:blaze_rod', 'mysticalagriculture:imperium_essence', 'mysticalagriculture:blaze_seeds')
  //Wither Skeleton Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/wither_skeleton" })
  souliumSeed('minecraft:wither_skeleton_skull', 'mysticalagriculture:supremium_essence', 'mysticalagriculture:wither_skeleton_seeds')
  //Phantom Seed
  souliumSeed('minecraft:phantom_membrane', 'mysticalagriculture:tertium_essence', 'mysticalagriculture:phantom_seeds')

  //ultimate Seed
  e.remove({ id: "mysticalagriculture:seed/infusion/ultimate" })
  e.custom(
    {
      "type": "mysticalagriculture:infusion",
      "input": { "item": "kubejs:insanium_seed" },
      "ingredients": [
        { "item": "extendedcrafting:the_ultimate_block" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "extendedcrafting:the_ultimate_block" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "extendedcrafting:the_ultimate_block" },
        { "item": "mysticalagradditions:creative_essence" },
        { "item": "extendedcrafting:the_ultimate_block" },
        { "item": "mysticalagradditions:creative_essence" }
      ],
      "result": { "item": "kubejs:ultimate_seed", "count": 1 }
    })
  //Infusion Altar
  e.remove({ id: "mysticalagriculture:infusion_altar" })
  e.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": ["ABCBA", " ABA ", "AABAA", "ABBBA", "ABBBA"],
      "key": {
        "A": { "item": "quark:iron_plate" },
        "B": { "item": "thermal:red_rockwool" },
        "C": { "item": "powah:energized_steel_block" }
      },
      "result": { "item": "mysticalagriculture:infusion_altar", "count": 1 }
    }
  )
  //Infusion Pedestal
  e.remove({ id: "mysticalagriculture:infusion_pedestal" })
  e.custom(
    {
      "type": "create:mechanical_crafting",
      "pattern": ["ABCBA", " ABA ", " ABA ", " ABA ", "AABAA"],
      "key": {
        "A": { "item": "quark:iron_plate" },
        "B": { "item": "thermal:red_rockwool" },
        "C": { "item": "powah:steel_energized" }
      },
      "result": { "item": "mysticalagriculture:infusion_pedestal", "count": 1 }
    }
  )
  //Ingot, Gem, Coal
  e.remove({ id: "mysticalagriculture:prudentium_ingot" })
  e.shaped(item.of('mysticalagriculture:prudentium_ingot', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:inferium_ingot',
    B: 'mysticalagriculture:prudentium_essence'
  })
  e.remove({ id: "mysticalagriculture:prudentium_gemstone" })
  e.shaped(item.of('mysticalagriculture:prudentium_gemstone', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:inferium_gemstone',
    B: 'mysticalagriculture:prudentium_essence'
  })
  e.remove({ id: "mysticalagradditions:prudentium_coal" })
  e.shaped(item.of('mysticalagradditions:prudentium_coal', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagradditions:inferium_coal',
    B: 'mysticalagriculture:prudentium_essence'
  })
  e.remove({ id: "mysticalagriculture:tertium_ingot" })
  e.shaped(item.of('mysticalagriculture:tertium_ingot', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:prudentium_ingot',
    B: 'mysticalagriculture:tertium_essence'
  })
  e.remove({ id: "mysticalagriculture:tertium_gemstone" })
  e.shaped(item.of('mysticalagriculture:tertium_gemstone', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:prudentium_gemstone',
    B: 'mysticalagriculture:tertium_essence'
  })
  e.remove({ id: "mysticalagradditions:tertium_coal" })
  e.shaped(item.of('mysticalagradditions:tertium_coal', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagradditions:prudentium_coal',
    B: 'mysticalagriculture:tertium_essence'
  })
  e.remove({ id: "mysticalagriculture:imperium_ingot" })
  e.shaped(item.of('mysticalagriculture:imperium_ingot', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:tertium_ingot',
    B: 'mysticalagriculture:imperium_essence'
  })
  e.remove({ id: "mysticalagriculture:imperium_gemstone" })
  e.shaped(item.of('mysticalagriculture:imperium_gemstone', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:tertium_gemstone',
    B: 'mysticalagriculture:imperium_essence'
  })
  e.remove({ id: "mysticalagradditions:imperium_coal" })
  e.shaped(item.of('mysticalagradditions:imperium_coal', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagradditions:tertium_coal',
    B: 'mysticalagriculture:imperium_essence'
  })
  e.remove({ id: "mysticalagriculture:supremium_ingot" })
  e.shaped(item.of('mysticalagriculture:supremium_ingot', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:imperium_ingot',
    B: 'mysticalagriculture:supremium_essence'
  })
  e.remove({ id: "mysticalagriculture:supremium_gemstone" })
  e.shaped(item.of('mysticalagriculture:supremium_gemstone', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:imperium_gemstone',
    B: 'mysticalagriculture:supremium_essence'
  })
  e.remove({ id: "mysticalagradditions:supremium_coal" })
  e.shaped(item.of('mysticalagradditions:supremium_coal', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagradditions:imperium_coal',
    B: 'mysticalagriculture:supremium_essence'
  })
  e.remove({ id: "mysticalagradditions:insanium_ingot" })
  e.shaped(item.of('mysticalagradditions:insanium_ingot', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:supremium_ingot',
    B: 'mysticalagradditions:insanium_essence'
  })
  e.remove({ id: "mysticalagradditions:insanium_gemstone" })
  e.shaped(item.of('mysticalagradditions:insanium_gemstone', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:supremium_gemstone',
    B: 'mysticalagradditions:insanium_essence'
  })
  e.remove({ id: "mysticalagradditions:insanium_coal" })
  e.shaped(item.of('mysticalagradditions:insanium_coal', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagradditions:supremium_coal',
    B: 'mysticalagradditions:insanium_essence'
  })
  e.remove({ id: "mysticalagriculture:inferium_farmland" })
  e.remove({ id: "mysticalagriculture:inferium_farmland_till" })
  e.shaped(item.of('mysticalagriculture:inferium_farmland', 1), ['AB ', 'B  ', '   '], {
    A: 'minecraft:farmland',
    B: 'mysticalagriculture:inferium_essence'
  })
  e.remove({ id: "mysticalagriculture:prudentium_farmland" })
  e.remove({ id: "mysticalagriculture:prudentium_farmland_till" })
  e.shaped(item.of('mysticalagriculture:prudentium_farmland', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:inferium_farmland',
    B: 'mysticalagriculture:prudentium_essence'
  })
  e.remove({ id: "mysticalagriculture:tertium_farmland" })
  e.remove({ id: "mysticalagriculture:tertium_farmland_till" })
  e.shaped(item.of('mysticalagriculture:tertium_farmland', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:prudentium_farmland',
    B: 'mysticalagriculture:tertium_essence'
  })
  e.remove({ id: "mysticalagriculture:imperium_farmland" })
  e.remove({ id: "mysticalagriculture:imperium_farmland_till" })
  e.shaped(item.of('mysticalagriculture:imperium_farmland', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:tertium_farmland',
    B: 'mysticalagriculture:imperium_essence'
  })
  e.remove({ id: "mysticalagriculture:supremium_farmland" })
  e.remove({ id: "mysticalagriculture:supremium_farmland_till" })
  e.shaped(item.of('mysticalagriculture:supremium_farmland', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:imperium_farmland',
    B: 'mysticalagriculture:supremium_essence'
  })
  e.remove({ id: "mysticalagradditions:insanium_farmland" })
  e.remove({ id: "mysticalagradditions:insanium_farmland_till" })
  e.shaped(item.of('mysticalagradditions:insanium_farmland', 1), ['AB ', 'B  ', '   '], {
    A: 'mysticalagriculture:supremium_farmland',
    B: 'mysticalagradditions:insanium_essence'
  })
  e.shaped(item.of('kubejs:alfsteel_crux', 1), ['ABA', 'CDC', 'ABA'], {
    A: 'mysticalagradditions:insanium_essence',
    B: 'mythicbotany:alfsteel_pylon',
    C: 'mythicbotany:alfsteel_armor_upgrade',
    D: 'minecraft:diamond_block'
  })
  e.shaped(item.of('kubejs:chaotic_crux', 1), ['ABA', 'BCB', 'ABA'], {
    A: 'mysticalagradditions:creative_essence',
    B: 'draconicevolution:chaos_shard',
    C: 'draconicevolution:awakened_draconium_block'
  })
  e.shaped(item.of('kubejs:ultimate_crux', 1), ['ABA', 'BCB', 'ABA'], {
    A: 'mysticalagradditions:creative_essence',
    B: 'kubejs:ultimate_netherite_lattice',
    C: 'extendedcrafting:the_ultimate_block'
  })

  function souliumSeed (input, essence, output){
    e.custom({"type": "mysticalagriculture:infusion","input": { "item": "mysticalagriculture:soulium_seed_base" },"ingredients": [{"item": input},{"item": essence},{"item": input},{"item": essence},{"item": input},{"item": essence},{"item": input},{"item": essence}],"result": { "item": output, "count": 1 }})}

  function inferiumSeed (input, output){
    e.custom({"type": "mysticalagriculture:infusion","input": { "item": "kubejs:inferium_seed" },"ingredients": [{"item": input},{"item": "mysticalagriculture:inferium_essence"},{"item": input},{"item": "mysticalagriculture:inferium_essence"},{"item": input},{"item": "mysticalagriculture:inferium_essence"},{"item": input},{"item": "mysticalagriculture:inferium_essence"}],"result": { "item": output, "count": 1 }})}

  function prudentiumSeed (input, output){
    e.custom({"type": "mysticalagriculture:infusion","input": { "item": "kubejs:prudentium_seed" },"ingredients": [{"item": input},{"item": "mysticalagriculture:prudentium_essence"},{"item": input},{"item": "mysticalagriculture:prudentium_essence"},{"item": input},{"item": "mysticalagriculture:prudentium_essence"},{"item": input},{"item": "mysticalagriculture:prudentium_essence"}],"result": { "item": output, "count": 1 }})}

  function tertiumSeed (input, output){
    e.custom({"type": "mysticalagriculture:infusion","input": { "item": "kubejs:tertium_seed" },"ingredients": [{"item": input},{"item": "mysticalagriculture:tertium_essence"},{"item": input},{"item": "mysticalagriculture:tertium_essence"},{"item": input},{"item": "mysticalagriculture:tertium_essence"},{"item": input},{"item": "mysticalagriculture:tertium_essence"}],"result": { "item": output, "count": 1 }})}

  function imperiumSeed (input, output){
    e.custom({"type": "mysticalagriculture:infusion","input": { "item": "kubejs:imperium_seed" },"ingredients": [{"item": input},{"item": "mysticalagriculture:imperium_essence" },{"item": input},{"item": "mysticalagriculture:imperium_essence" },{"item": input},{"item": "mysticalagriculture:imperium_essence" },{"item": input},{"item": "mysticalagriculture:imperium_essence" }],"result": {"item": output, "count": 1}})}

  function supremiumSeed (input, output){
    e.custom({"type": "mysticalagriculture:infusion","input": { "item": "kubejs:supremium_seed" },"ingredients": [{"item": input},{"item": "mysticalagriculture:supremium_essence"},{"item": input},{"item": "mysticalagriculture:supremium_essence"},{"item": input},{"item": "mysticalagriculture:supremium_essence"},{"item": input},{"item": "mysticalagriculture:supremium_essence"}],"result": {"item": output, "count": 1}})}

  function insaniumSeed (input, output){
    e.custom({"type": "mysticalagriculture:infusion","input": { "item": "kubejs:insanium_seed" },"ingredients": [{"item": input},{"item": "mysticalagradditions:insanium_essence"},{"item": input},{"item": "mysticalagradditions:insanium_essence"},{"item": input},{"item": "mysticalagradditions:insanium_essence"},{"item": input},{"item": "mysticalagradditions:insanium_essence"}],"result": {"item": output, "count": 1}})}

})