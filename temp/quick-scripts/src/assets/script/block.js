"use strict";
cc._RF.push(module, 'aeee7BUxmpMhIAb+ZP37loM', 'block');
// script/block.js

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
    spriteFrameList: {
      type: cc.SpriteFrame,
      "default": []
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.can_conllision = true;
  },
  // 改变预制体的背景spritFrame, 这样不用创建多个预制体
  changeSpriteFrame: function changeSpriteFrame(i) {
    var node_sprite = this.node.getComponent(cc.Sprite);
    node_sprite.spriteFrame = this.spriteFrameList[i];
  },
  // 相同元素碰撞后消失
  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    console.log('只在两个碰撞体开始接触时被调用一次');
    var js_otherBlock = otherCollider.node.getComponent('block');

    if (js_otherBlock && this.can_conllision) {
      if (this.node.block_type == js_otherBlock.node.block_type) {
        var position_self = this.node.getPosition();
        var position_other = otherCollider.node.getPosition();
        var position_new = position_self;

        if (position_new.y > position_other.y) {
          position_new = position_other;
        }

        var typeNumber = Number(this.node.block_type.split('k')[1]);
        this.node.removeFromParent();
        otherCollider.node.removeFromParent();
        this.can_conllision = false;
        js_otherBlock.can_conllision = false; // 只执行一次的定时器 0.15s

        this.scheduleOnce(function () {
          // 在main.js中申明window.main = this
          main.createBlock(position_new, typeNumber);
          main.addScore();
        }.bind(this), 0.15);
      }
    }
  } // update (dt) {},

});

cc._RF.pop();