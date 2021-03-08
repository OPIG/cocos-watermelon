"use strict";
cc._RF.push(module, '112feYICEhDVLEITA+DJarC', 'main');
// script/main.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    block_generate: cc.Node,
    collider: cc.BoxCollider
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
  },
  start: function start() {
    var _this = this;

    cc.director.getCollisionManager().enabled = true;
    this.collider.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
      var touchLoc = touch.getLocation();

      if (cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points)) {
        console.log('hit');
      } else {
        console.log('no hit');
      }
    }, this);
    console.log(1);
    this.node.on('touchstart', function (event) {
      var point = event.getLocation(); // console.table(point)

      var point_node = _this.node.convertToNodeSpaceAR(point);

      var point_node1 = _this.node.convertToWorldSpaceAR(point); // console.table(point_node)
      // console.table(point_node1)


      _this.block_generate.setPosition(cc.v2(point_node.x, point_node.y));
    });
  },
  // update (dt) {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    console.log('collision');
  },
  onCollisionExit: function onCollisionExit(other, self) {
    console.log('collision exit');
  }
});

cc._RF.pop();