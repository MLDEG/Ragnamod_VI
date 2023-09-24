events.listen('recipes', function (e) {

//Laser Drill

    oreLaser('forge:ores/amethyst', 'industrialforegoing:laser_lens10')
    oreLaser('forge:ores/zinc', 'industrialforegoing:laser_lens8')
    oreLaser('forge:ores/dimshard', 'industrialforegoing:laser_lens0')
    oreLaser('forge:ores/prosperity', 'industrialforegoing:laser_lens0')
    oreLaser('forge:ores/inferium', 'industrialforegoing:laser_lens5')
    oreLaser('forge:ores/apatite', 'industrialforegoing:laser_lens3')
    oreLaser('forge:ores/mana', 'industrialforegoing:laser_lens2')
    oreLaser('forge:ores/tungsten', 'industrialforegoing:laser_lens15')
    oreLaser('forge:ores/endumium', 'industrialforegoing:laser_lens2')
    oreLaserEnd('forge:ores/amber', 'industrialforegoing:laser_lens1')
    oreLaserEnd('forge:ores/ender', 'industrialforegoing:laser_lens9')
    oreLaserEnd('forge:ores/thallasium', 'industrialforegoing:laser_lens3')
    oreLaserEnd('forge:ores/lignite', 'industrialforegoing:laser_lens12')
    oreLaserEnd('forge:ores/ametrine', 'industrialforegoing:laser_lens6')
    oreLaserNether('byg:emeraldite_ore', 'industrialforegoing:laser_lens13')
    oreLaserNether('byg:anthracite_ore', 'industrialforegoing:laser_lens15')
    oreLaserNether('byg:pendorite_ore', 'industrialforegoing:laser_lens11')
    oreLaserNether('mysticalagriculture:soulium_ore', 'industrialforegoing:laser_lens12')

  function oreLaser (ore, lens) {e.custom({"type": "forge:conditional","recipes": [{"conditions": [{"value": {"tag": ore,"type": "forge:tag_empty"},"type": "forge:not"}],"recipe": {"output": {"tag": ore},"rarity": [{"whitelist": {},"blacklist": {"type": "minecraft:worldgen/biome","values": ["minecraft:the_end","minecraft:the_void","minecraft:small_end_islands","minecraft:end_barrens","minecraft:end_highlands","minecraft:end_midlands"]},"depth_min": 30,"depth_max": 70,"weight": 6}],"pointer": 0,"catalyst": {"item": lens},"type": "industrialforegoing:laser_drill_ore"}}]})}

  function oreLaserEnd (ore, lens) {e.custom({"type": "forge:conditional","recipes": [{"conditions": [{"value": {"tag": ore,"type": "forge:tag_empty"},"type": "forge:not"}],"recipe": {"output": {"tag": ore},"rarity": [{"whitelist": {"type": "minecraft:worldgen/biome","values": ["minecraft:the_end","minecraft:the_void","minecraft:small_end_islands","minecraft:end_barrens","minecraft:end_highlands","minecraft:end_midlands"]},"blacklist": {},"depth_min": 20,"depth_max": 70,"weight": 4}],"pointer": 0,"catalyst": {"item": lens},"type": "industrialforegoing:laser_drill_ore"}}]})}

  function oreLaserNether (ore, lens) {e.custom({"output": {"item": ore},"rarity": [{"whitelist": {"type": "minecraft:worldgen/biome","values": ["minecraft:nether_wastes","minecraft:basalt_deltas","minecraft:warped_forest","minecraft:crimson_forest","minecraft:soul_sand_valley"]},"blacklist": {},"depth_min": 7,"depth_max": 117,"weight": 12}],"pointer": 0,"catalyst": {"item": lens},"type": "industrialforegoing:laser_drill_ore"})}

})