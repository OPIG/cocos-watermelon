"use strict";
cc._RF.push(module, '112feYICEhDVLEITA+DJarC', 'main');
// script/main.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    block1: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    cc.director.getPhysicsManager().enabled = true;
    this.node.on('touchstart', function (event) {
      var mouse_position = event.getLocation();

      var world_position = _this.node.convertToNodeSpaceAR(mouse_position); // let blockNode = this.node.getChildByName('block')
      // blockNode.setPosition(world_position.x, world_position.y)


      _this.createBlock();
    }); // this.createBlock()
  },
  // create block
  createBlock: function createBlock() {
    var prefabList = [{
      name: 'block1',
      size: 26
    }, {
      name: 'block2',
      size: 40
    }, {
      name: 'block3',
      size: 54
    }, {
      name: 'block4',
      size: 59
    }, {
      name: 'block5',
      size: 76
    }, {
      name: 'block6',
      size: 91
    }];
    var randomNum = Math.floor(Math.random() * prefabList.length);
    var block_Node = cc.instantiate(this.block1);
    var fruit_sprit = block_Node.getComponent('block');
    fruit_sprit.changeSpriteFrame(randomNum);
    var physiscs_collider = block_Node.getComponent(cc.PhysicsCircleCollider);
    var size = prefabList.filter(function (item) {
      return item.name == 'block' + Number(randomNum + 1);
    });
    physiscs_collider.radius = size[0].size;
    console.log(randomNum, size[0]);
    block_Node.parent = this.node;
  }
});

cc._RF.pop();