cc.Class({
    extends: cc.Component,

    properties: {
      block1: cc.Prefab,
      
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      cc.director.getPhysicsManager().enabled = true;

      this.node.on('touchstart', (event) =>{
        let mouse_position = event.getLocation()
        let world_position = this.node.convertToNodeSpaceAR(mouse_position)
        // let blockNode = this.node.getChildByName('block')
        // blockNode.setPosition(world_position.x, world_position.y)
        this.createBlock()
      })
     
      // this.createBlock()
    },

    // create block
    createBlock () {
      const prefabList = [{
        name: 'block1',
        size: 26
      },
      {
        name: 'block2',
        size: 40
      },
      {
        name: 'block3',
        size: 54
      },
      {
        name: 'block4',
        size: 59
      },
      {
        name: 'block5',
        size: 76
      },
      {
        name: 'block6',
        size: 91
      }
    ]

    let randomNum = Math.floor(Math.random() * prefabList.length)
      let block_Node = cc.instantiate(this.block1)
      let fruit_sprit = block_Node.getComponent('block')
      fruit_sprit.changeSpriteFrame(randomNum)
      
      let physiscs_collider = block_Node.getComponent(cc.PhysicsCircleCollider)
      let size = prefabList.filter((item)=>{
        return item.name=='block'+ Number(randomNum + 1)
      })

      physiscs_collider.radius = size[0].size
      console.log(randomNum, size[0]);

      block_Node.parent = this.node
    },
});
