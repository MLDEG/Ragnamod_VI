events.listen('recipes', function (e) {

  var cuShaped = e.recipes.cucumber.shaped_no_mirror

  function dyeShaped(result, pattern) {
    cuShaped({
      'pattern': pattern,
      'key': {
        'C': {
          'item': 'resourcefulbees:rgbee_honeycomb'
        }
      },
      'result': {
        'item': result,
        'count': 6
      }
    })
  }
  dyeShaped('minecraft:red_dye', ['  C',' C ',' C '])
  dyeShaped('minecraft:green_dye', ['  C','CC ','   '])
  dyeShaped('minecraft:purple_dye', ['  C','  C',' C '])
  dyeShaped('minecraft:cyan_dye', ['C C',' C ','   '])
  dyeShaped('minecraft:light_gray_dye', [' C ',' C ','  C'])
  dyeShaped('minecraft:gray_dye', ['  C',' C ','C  '])
  dyeShaped('minecraft:pink_dye', ['C  ',' C ','  C'])
  dyeShaped('minecraft:lime_dye', ['  C','  C','  C'])
  dyeShaped('minecraft:yellow_dye', [' C ',' C ',' C '])
  dyeShaped('minecraft:light_blue_dye', ['C  ','C  ','C  '])
  dyeShaped('minecraft:magenta_dye', ['   ','   ','CCC'])
  dyeShaped('minecraft:orange_dye', ['   ','CCC','   '])
  dyeShaped('minecraft:blue_dye', ['   ',' C ','C C'])
  dyeShaped('minecraft:brown_dye', ['  C',' C ','  C'])
  dyeShaped('minecraft:black_dye', ['   ','CC ','  C'])
  dyeShaped('minecraft:white_dye', ['CCC','   ','   '])

  function logShaped(result, pattern) {
    cuShaped({
      'pattern': pattern,
      'key': {
        'C': {
          'item': 'resourcefulbees:woody_honeycomb'
        }
      },
      'result': {
        'item': result,
        'count': 8
      }
    })
  }
  logShaped('minecraft:oak_log', ['CCC','   ','   '])
  logShaped('minecraft:spruce_log', ['   ','CCC','   '])
  logShaped('minecraft:birch_log', ['   ','   ','CCC'])
  logShaped('minecraft:jungle_log', ['C  ','C  ','C  '])
  logShaped('minecraft:acacia_log', [' C ',' C ',' C '])
  logShaped('minecraft:dark_oak_log', ['  C','  C','  C'])
  e.shaped(item.of('minecraft:crimson_stem', 8), ['A  ','B  ','A  '], {A: 'resourcefulbees:woody_honeycomb',B: 'resourcefulbees:nether_honeycomb'})
  e.shaped(item.of('minecraft:warped_stem', 8), ['ABA','   ','   '], {A: 'resourcefulbees:woody_honeycomb',B: 'resourcefulbees:nether_honeycomb'})
  //Stone
  e.shaped(item.of('minecraft:stone', 32), ['A A',' A ','A A'], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Cobblestone
  e.shaped(item.of('minecraft:cobblestone', 32), ['AAA','A A','AAA'], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Andesite
  e.shaped(item.of('minecraft:andesite', 16), [' A ','AAA',' A '], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Andesite
  e.shaped(item.of('minecraft:granite', 16), ['A A','   ','A A'], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Diorite
  e.shaped(item.of('minecraft:diorite', 16), ['  A',' A ','A  '], {
    A: 'resourcefulbees:rock_honeycomb'
  })
  //Blackstone
  e.shaped(item.of('minecraft:blackstone', 32), ['AAA','A B','BBB'], {
    A: 'resourcefulbees:rock_honeycomb',
    B: 'resourcefulbees:nether_honeycomb'
  })
  //Netherrack
  e.shaped(item.of('minecraft:netherrack', 32), ['A A',' A ','A A'], {
    A: 'resourcefulbees:nether_honeycomb'
  })
  //Blue Netherrack
  e.shaped(item.of('byg:blue_netherrack', 32), ['AAA','A A','AAA'], {
    A: 'resourcefulbees:nether_honeycomb'
  })
  //Brimstone
  e.shaped(item.of('byg:brimstone', 32), [' A ','AAA',' A '], {
    A: 'resourcefulbees:nether_honeycomb'
  })
  //Skyslime
  e.shaped(item.of('tconstruct:sky_slime_ball', 32), ['AAA','ABA','AAA'], {
    A: 'resourcefulbees:slimy_honeycomb',
    B: 'minecraft:light_blue_dye'
  })
  //Enderslime
  e.shaped(item.of('tconstruct:ender_slime_ball', 32), ['AAA','ABA','AAA'], {
    A: 'resourcefulbees:slimy_honeycomb',
    B: 'minecraft:purple_dye'
  })
  //Ichorslime
  e.shaped(item.of('tconstruct:ichor_slime_ball', 32), ['AAA','ABA','AAA'], {
    A: 'resourcefulbees:slimy_honeycomb',
    B: 'minecraft:orange_dye'
  })
  //Lavacomb
  e.shaped(item.of('minecraft:lava_bucket'), [' A ','ABA',' A '], {
    A: 'resourcefulbees:lava_honeycomb',
    B: 'minecraft:bucket'
  })
  //Centrifuge
  e.remove({ id: 'resourcefulbees:centrifuge' })
  e.shaped(item.of('resourcefulbees:centrifuge', 1), ['ABA','ACA','ADA'], {
    A: 'immersiveengineering:sheetmetal_steel',
    B: 'resourcefulbees:mechanical_centrifuge',
    C: 'minecraft:bucket',
    D: 'minecraft:piston'
  })
/*BEEHIVE*/
  function beehive(result, log){e.shaped(item.of(result, 1), ['AAA','BBB','AAA'], {A: log,B: '#resourcefulbees:resourceful_honeycomb'})}
  //Oak
    e.remove({ id: 'minecraft:beehive' })
    e.remove({ id: 'cyclic:solidifier_honeyhive' })
    beehive('minecraft:beehive', 'minecraft:oak_planks')
  //Spruce
    e.remove({ id: 'buzzier_bees:beehives/spruce_beehive' })
    beehive('buzzier_bees:spruce_beehive', 'minecraft:spruce_planks')
  //Birch
    e.remove({ id: 'buzzier_bees:beehives/birch_beehive' })
    beehive('buzzier_bees:birch_beehive', 'minecraft:birch_planks')
  //Jungle
    e.remove({ id: 'buzzier_bees:beehives/jungle_beehive' })
    beehive('buzzier_bees:jungle_beehive', 'minecraft:jungle_planks')
  //Acacia
    e.remove({ id: 'buzzier_bees:beehives/acacia_beehive' })
    beehive('buzzier_bees:acacia_beehive', 'minecraft:acacia_planks')
  //Dark Oak
    e.remove({ id: 'buzzier_bees:beehives/dark_oak_beehive' })
    beehive('buzzier_bees:dark_oak_beehive', 'minecraft:dark_oak_planks')
  //Crimson
    e.remove({ id: 'buzzier_bees:beehives/crimson_beehive' })
    beehive('buzzier_bees:crimson_beehive', 'minecraft:crimson_planks')
  //Warped
    e.remove({ id: 'buzzier_bees:beehives/warped_beehive' })
    beehive('buzzier_bees:warped_beehive', 'minecraft:warped_planks')
  //Poise
    e.remove({ id: 'endergetic:poise_beehive' })
    beehive('endergetic:poise_beehive', 'endergetic:poise_planks')
  //River
    e.remove({ id: 'upgrade_aquatic:river_beehive' })
    beehive('upgrade_aquatic:river_beehive', 'upgrade_aquatic:river_planks')
  //Driftwood
    e.remove({ id: 'upgrade_aquatic:driftwood_beehive' })
    beehive('upgrade_aquatic:driftwood_beehive', 'upgrade_aquatic:driftwood_planks')
/*Unification Honey*/
    e.remove({ id: 'thermal:machine/centrifuge/centrifuge_honeycomb' })
    e.remove({ id: 'thermal:machine/crucible/crucible_honey_block_to_honey' })
    e.remove({ id: 'thermal:machine/bottler/bottler_honey_bottle' })
    e.remove({ id: 'thermal:machine/chiller/chiller_honey_to_honey_block' })
    e.remove({ id: 'create:mixing/honey' })
    e.remove({ id: 'create:emptying/honey_bottle' })
    e.remove({ id: 'createaddition:filling/honey_cake' })
    //Honey
    e.custom({"type": "thermal:crucible","ingredient": {"item": "minecraft:honey_block"},"result": [{"fluid": "resourcefulbees:honey","amount": 1000}],"energy": 2000})
    e.custom({"type": "thermal:centrifuge","ingredient": {"item": "minecraft:honeycomb"},"result": [{"fluid": "resourcefulbees:honey","amount": 100}]})
    e.custom({"type": "create:mixing","ingredients": [{"item": "minecraft:honey_block"}],"results": [{"fluid": "resourcefulbees:honey","amount": 1000}],"heatRequirement": "heated"})
    e.custom({"type": "thermal:bottler","ingredients": [{"item": "minecraft:glass_bottle"},{"fluid": "resourcefulbees:honey","amount": 250}],"result": [{"item": "minecraft:honey_bottle"}]})
    e.custom({"type": "thermal:chiller","ingredient": {"fluid": "resourcefulbees:honey","amount": 1000},"result": [{"item": "minecraft:honey_block"}],"energy": 2000})
    e.custom({"type": "create:filling","ingredients": [{"item": "createaddition:cake_base_baked"},{"fluid": "resourcefulbees:honey","nbt": {},"amount": 500}],"results": [{"item": "createaddition:honey_cake"}]})
    e.custom({"type": "create:emptying","ingredients": [{"item": "minecraft:honey_bottle"}],"results": [{"item": "minecraft:glass_bottle"},{"fluid": "resourcefulbees:honey","amount": 250}]})
    tinkerCastingBasin("resourcefulbees:honey", 1000, "minecraft:honey_block", 40)
    tinkerCasting("resourcefulbees:honey", 250, "minecraft:honey_bottle", "minecraft:glass_bottle", true, 20)
    //Catnip Honey
    e.custom({"type": "thermal:crucible","ingredient": {"item": "resourcefulbees:catnip_honey_block"},"result": [{"fluid": "resourcefulbees:catnip_honey","amount": 1000}],"energy": 2000})
    e.custom({"type": "thermal:centrifuge","ingredient": {"item": "resourcefulbees:catnip_honeycomb"},"result": [{"fluid": "resourcefulbees:catnip_honey","amount": 100}]})
    e.custom({"type": "create:mixing","ingredients": [{"item": "resourcefulbees:catnip_honey_block"}],"results": [{"fluid": "resourcefulbees:catnip_honey","amount": 1000}],"heatRequirement": "heated"})
    e.custom({"type": "thermal:bottler","ingredients": [{"item": "minecraft:glass_bottle"},{"fluid": "resourcefulbees:catnip_honey","amount": 250}],"result": [{"item": "resourcefulbees:catnip_honey_bottle"}]})
    e.custom({"type": "thermal:chiller","ingredient": {"fluid": "resourcefulbees:catnip_honey","amount": 1000},"result": [{"item": "resourcefulbees:catnip_honey_block"}],"energy": 2000})
    e.custom({"type": "create:filling","ingredients": [{"item": "createaddition:cake_base_baked"},{"fluid": "resourcefulbees:catnip_honey","nbt": {},"amount": 500}],"results": [{"item": "createaddition:honey_cake"}]})
    e.custom({"type": "create:emptying","ingredients": [{"item": "resourcefulbees:catnip_honey_bottle"}],"results": [{"item": "minecraft:glass_bottle"},{"fluid": "resourcefulbees:catnip_honey","amount": 250}]})
    tinkerCastingBasin("resourcefulbees:catnip_honey", 1000, "resourcefulbees:catnip_honey_block", 40)
    tinkerCasting("resourcefulbees:catnip_honey", 250, "resourcefulbees:catnip_honey_bottle", "minecraft:glass_bottle", true, 20)
    
    //Starry Honey
    e.custom({"type": "thermal:crucible","ingredient": {"item": "resourcefulbees:starry_honey_block"},"result": [{"fluid": "resourcefulbees:starry_honey","amount": 1000}],"energy": 2000})
    e.custom({"type": "thermal:centrifuge","ingredient": {"item": "resourcefulbees:starry_honeycomb"},"result": [{"fluid": "resourcefulbees:starry_honey","amount": 100}]})
    e.custom({"type": "create:mixing","ingredients": [{"item": "resourcefulbees:starry_honey_block"}],"results": [{"fluid": "resourcefulbees:starry_honey","amount": 1000}],"heatRequirement": "heated"})
    e.custom({"type": "thermal:bottler","ingredients": [{"item": "minecraft:glass_bottle"},{"fluid": "resourcefulbees:starry_honey","amount": 250}],"result": [{"item": "resourcefulbees:starry_honey_bottle"}]})
    e.custom({"type": "thermal:chiller","ingredient": {"fluid": "resourcefulbees:starry_honey","amount": 1000},"result": [{"item": "resourcefulbees:starry_honey_block"}],"energy": 2000})
    e.custom({"type": "create:filling","ingredients": [{"item": "createaddition:cake_base_baked"},{"fluid": "resourcefulbees:starry_honey","nbt": {},"amount": 500}],"results": [{"item": "createaddition:honey_cake"}]})
    e.custom({"type": "create:emptying","ingredients": [{"item": "resourcefulbees:starry_honey_bottle"}],"results": [{"item": "minecraft:glass_bottle"},{"fluid": "resourcefulbees:starry_honey","amount": 250}]})
    tinkerCastingBasin("resourcefulbees:starry_honey", 1000, "resourcefulbees:starry_honey_block", 40)
    tinkerCasting("resourcefulbees:starry_honey", 250, "resourcefulbees:starry_honey_bottle", "minecraft:glass_bottle", true, 20)

    
function tinkerCasting(input, qte, output, cast, consume, time) {
  e.custom({"type": "tconstruct:casting_table","cast": { "item": cast },"cast_consumed": consume,"fluid": { "name": input, "amount": qte },"result": output,"cooling_time": time})}
function tinkerCastingBasin(input, qte, output, time) {
  e.custom({"type": "tconstruct:casting_basin","fluid": {"name": input,"amount": qte},"result": {"item": output},"cooling_time": time})}

})