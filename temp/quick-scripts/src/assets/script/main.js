"use strict";
cc._RF.push(module, '112feYICEhDVLEITA+DJarC', 'main');
// script/main.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    block1: cc.Prefab,
    score_Label: cc.Label,
    bzPrefab: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    this.prefabList = [{
      name: 'block1',
      size: 26,
      color: [110, 16, 100]
    }, {
      name: 'block2',
      size: 40,
      color: [255, 9, 36]
    }, {
      name: 'block3',
      size: 54,
      color: [253, 11, 1]
    }, {
      name: 'block4',
      size: 59,
      color: [255, 230, 23]
    }, {
      name: 'block5',
      size: 76,
      color: [110, 16, 100]
    }, {
      name: 'block6',
      size: 91,
      color: [110, 16, 100]
    }, {
      name: 'block7',
      size: 96,
      color: [110, 16, 100]
    }, {
      name: 'block8',
      size: 129,
      color: [110, 16, 100]
    }, {
      name: 'block9',
      size: 154,
      color: [110, 16, 100]
    }, {
      name: 'block10',
      size: 154,
      color: [110, 16, 100]
    }, {
      name: 'block11',
      size: 204,
      color: [110, 16, 100]
    }];
    window.main = this;
    this.f_scale = 0.8; // 整体缩小0.8

    this.fruidCount = 0; // 当前屏幕的数量

    this.current_score = 0; // 当前分数
    // 开启物理碰撞

    cc.director.getPhysicsManager().enabled = true; // 点击屏幕开始

    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      var mouse_position = event.getLocation();

      var world_position = _this.node.convertToNodeSpaceAR(mouse_position);

      world_position.y = 500; // let typeNumber = this.getNextFruidId()
      // this.createBlock(world_position, typeNumber)
    }); // 点击屏幕移动

    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      console.log('TOUCH_MOVE');
    }); // 点击屏幕结束

    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      var mouse_position = event.getLocation();

      var world_position = _this.node.convertToNodeSpaceAR(mouse_position);

      world_position.y = 500;

      var typeNumber = _this.getNextFruidId(); // 创建预制体小球


      _this.createBlock(world_position, typeNumber);
    }); // 取消点击屏幕

    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      console.log('TOUCH_CANCEL');
    });
  },
  // 获取下一个水果的id
  getNextFruidId: function getNextFruidId() {
    if (this.fruidCount <= 3) {
      return Math.floor(Math.random() * 3);
    } else {
      // 随机返回除了后五个之外的
      return Math.floor(Math.random() * (this.prefabList.length - 5));
    }
  },
  // create block
  createBlock: function createBlock(position, typeNumber, isScale) {
    if (isScale === void 0) {
      isScale = false;
    }

    if (typeNumber >= this.prefabList.length) {
      typeNumber = this.prefabList.length - 1;
    }

    var block_Node = cc.instantiate(this.block1);
    block_Node.setPosition(cc.v2(position.x, position.y));
    block_Node.scale = this.f_scale;
    this.fruidCount++; // 水果数量加一个

    if (isScale) {
      block_Node.scale = 0.3;
      var act = cc.scaleTo(0.15, this.f_scale);
      block_Node.runAction(act); // cc.tween(block_Node).to(0.15, {scale: 1})

      this.fruidCount -= 1; //碰撞损耗一个
    }

    var fruit_sprit = block_Node.getComponent('block'); // 调用block.js方法修改sprite frame图片

    fruit_sprit.changeSpriteFrame(typeNumber);
    block_Node.block_type = 'block' + Number(typeNumber + 1);
    var physiscs_collider = block_Node.getComponent(cc.PhysicsCircleCollider);
    var fruitItem = this.prefabList.filter(function (item) {
      return item.name == block_Node.block_type;
    });
    physiscs_collider.radius = fruitItem[0].size;
    console.log(typeNumber, fruitItem[0]);
    block_Node.parent = this.node;
  },
  // 添加特效
  createTx: function createTx(position, typeNumber) {
    var bzNode = cc.instantiate(this.bzPrefab);
    bzNode.setPosition(cc.v2(position.x, position.y));
    bzNode.parent = this.node;
    bzNode.scale = 0;
    var fruitItem = this.prefabList.filter(function (item) {
      return item.name == 'block' + Number(typeNumber + 1);
    });
    bzNode.color = new cc.Color(fruitItem[0].color[0], fruitItem[0].color[1], fruitItem[0].color[2]);
    cc.tween(bzNode).to(0.1, {
      scale: 0.2
    }).call(function () {
      bzNode.removeFromParent();
    }).start();
  },
  // 添加分数
  addScore: function addScore() {
    this.current_score += 1;
    this.score_Label.string = 'score: ' + this.current_score;
  }
});

cc._RF.pop();