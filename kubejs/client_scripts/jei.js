events.listen('jei.information', function (e) {
    e.add('enigmaticlegacy:etherium_ore', ['You can obtain a lot of this item in Loot Chest from Ice and Fire'])
    e.add('bhc:red_heart', ['Drop from all mobs'])
    e.add('bhc:yellow_heart', ['Drop from bosses'])
    e.add('bhc:green_heart', ['Drop from Ender Dragon'])
    e.add('bhc:blue_heart', ['Drop from Evoker'])
    e.add('kubejs:loading_pearl', ['Used only for crafting chunk loaders'])
    e.add('astralsorcery:rock_crystal_ore', ['Use your Resonating Wand at night'])
    e.add('lavasponge:hot_lavasponge', ['To obtain a Hot Lava Sponge, simply use a Lava Sponge in Lava.', 'It works like a regular sponge.'])
  })
onEvent('jei.add.items', e => {
  e.add([
    'thermal:sapphire_ore',
    'thermal:sapphire_block',
    'thermal:sapphire',
    'thermal:ruby_ore',
    'thermal:ruby_block',
    'thermal:ruby'
      ])

})