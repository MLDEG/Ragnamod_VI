events.listen('recipes', function (e) {
  //Sleeping Bag
  function sleepingbag(color){
    e.remove({id: 'comforts:sleeping_bag_'+color+''})
    e.shaped(item.of('comforts:sleeping_bag_'+color+'', 1), ['   ','AAA','   '], {A: 'amb:'+color+'_wool_slab'})
  }
  var color = ["red", "orange", "yellow", "lime", "green", "blue", "cyan", "light_blue", "pink", "magenta", "purple", "brown", "black", "gray", "light_gray", "white"]
  color.forEach(C => { sleepingbag(C) })
  //Corundum
  function corundum(color){
    e.shaped(item.of('quark:'+ color +'_crystal', 1), ['AA ','AA ','   '], {A: "quark:"+ color +"_crystal_cluster"})
  }
  var crystalColor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
  crystalColor.forEach(C => { corundum(C) })
  //Aurum
  function woodFence(name){
    e.shaped(item.of('amb:'+name+'_fence', 3), ['   ','ABA','ABA'], {A: 'minecraft:'+name+'',B: 'minecraft:stick'})
    e.remove({id: 'amb:'+name+'_fence'})
    e.shaped(item.of('amb:'+name+'_fence_gate', 1), ['   ','ABA','ABA'], {A: 'minecraft:stick',B: 'minecraft:'+name+''})
    e.remove({id: 'amb:'+name+'_fence_gate'})
  }
  var name = ["dark_oak_wood", "acacia_wood", "jungle_wood", "birch_wood", "spruce_wood", "oak_wood", "warped_hyphae", "crimson_hyphae"]
  name.forEach(C => { woodFence(C)})
})