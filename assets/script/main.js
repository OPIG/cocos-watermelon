cc.Class({
  extends: cc.Component,

  properties: {
    block1: cc.Prefab,
    score_Label: cc.Label
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.prefabList = [{
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
    },
    {
      name: 'block7',
      size: 96
    },
    {
      name: 'block8',
      size: 129
    },
    {
      name: 'block9',
      size: 154
    },
    {
      name: 'block10',
      size: 154
    },
    {
      name: 'block11',
      size: 204
    }]

    window.main = this
    this.f_scale = 0.8 // 整体缩小0.8

    this.current_score = 0

    cc.director.getPhysicsManager().enabled = true;

    this.node.on('touchstart', (event) => {
      let mouse_position = event.getLocation()
      let world_position = this.node.convertToNodeSpaceAR(mouse_position)
      world_position.y = 500
      let randomNum = Math.floor(Math.random() * (this.prefabList.length - 5))

      this.createBlock(world_position, randomNum)
    })
  },

  // create block
  createBlock (position, typeNumber) {
    if (typeNumber >= this.prefabList.length) {
      typeNumber = this.prefabList.length
    }
    let block_Node = cc.instantiate(this.block1)
    block_Node.setPosition(cc.v2(position.x, position.y))
    block_Node.f_scale = 0.8 

    let fruit_sprit = block_Node.getComponent('block')
    // 调用block.js方法修改sprite frame图片
    fruit_sprit.changeSpriteFrame(typeNumber)
    block_Node.block_type = 'block' + Number(typeNumber + 1)

    let physiscs_collider = block_Node.getComponent(cc.PhysicsCircleCollider)
    let size = this.prefabList.filter((item) => {
      return item.name == block_Node.block_type
    })

    physiscs_collider.radius = size[0].size
    console.log(typeNumber, size[0]);

    block_Node.parent = this.node
  },
  addScore(){
    this.current_score += 1
    this.score_Label.string = this.current_score
  }
});
