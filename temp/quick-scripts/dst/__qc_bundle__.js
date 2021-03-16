
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/block');
require('./assets/script/main');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        js_otherBlock.can_conllision = false;
        main.createTx(position_self, typeNumber);
        main.createTx(position_other, typeNumber); // 只执行一次的定时器 0.15s

        this.scheduleOnce(function () {
          // 在main.js中申明window.main = this
          main.createBlock(position_new, typeNumber, true);
          main.addScore();
        }.bind(this), 0.15);
      }
    }
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxibG9jay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwcml0ZUZyYW1lTGlzdCIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInN0YXJ0IiwiY2FuX2NvbmxsaXNpb24iLCJjaGFuZ2VTcHJpdGVGcmFtZSIsImkiLCJub2RlX3Nwcml0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJjb25zb2xlIiwibG9nIiwianNfb3RoZXJCbG9jayIsImJsb2NrX3R5cGUiLCJwb3NpdGlvbl9zZWxmIiwiZ2V0UG9zaXRpb24iLCJwb3NpdGlvbl9vdGhlciIsInBvc2l0aW9uX25ldyIsInkiLCJ0eXBlTnVtYmVyIiwiTnVtYmVyIiwic3BsaXQiLCJyZW1vdmVGcm9tUGFyZW50IiwibWFpbiIsImNyZWF0ZVR4Iiwic2NoZWR1bGVPbmNlIiwiY3JlYXRlQmxvY2siLCJhZGRTY29yZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxlQUFlLEVBQUU7QUFDZkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFdBRE07QUFFZixpQkFBUztBQUZNO0FBRFAsR0FITDtBQVdQO0FBRUE7QUFFQUMsRUFBQUEsS0FmTyxtQkFlRTtBQUNQLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDRCxHQWpCTTtBQWtCUDtBQUNBQyxFQUFBQSxpQkFuQk8sNkJBbUJZQyxDQW5CWixFQW1CZTtBQUNwQixRQUFJQyxXQUFXLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCYixFQUFFLENBQUNjLE1BQTFCLENBQWxCO0FBQ0FILElBQUFBLFdBQVcsQ0FBQ0ksV0FBWixHQUEwQixLQUFLWCxlQUFMLENBQXFCTSxDQUFyQixDQUExQjtBQUNELEdBdEJNO0FBd0JQO0FBQ0E7QUFDQU0sRUFBQUEsY0FBYyxFQUFFLHdCQUFVQyxPQUFWLEVBQW1CQyxZQUFuQixFQUFpQ0MsYUFBakMsRUFBZ0Q7QUFDOURDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsUUFBSUMsYUFBYSxHQUFHSCxhQUFhLENBQUNQLElBQWQsQ0FBbUJDLFlBQW5CLENBQWdDLE9BQWhDLENBQXBCOztBQUNBLFFBQUlTLGFBQWEsSUFBSSxLQUFLZCxjQUExQixFQUEwQztBQUN4QyxVQUFJLEtBQUtJLElBQUwsQ0FBVVcsVUFBVixJQUF3QkQsYUFBYSxDQUFDVixJQUFkLENBQW1CVyxVQUEvQyxFQUEyRDtBQUN6RCxZQUFJQyxhQUFhLEdBQUcsS0FBS1osSUFBTCxDQUFVYSxXQUFWLEVBQXBCO0FBQ0EsWUFBSUMsY0FBYyxHQUFHUCxhQUFhLENBQUNQLElBQWQsQ0FBbUJhLFdBQW5CLEVBQXJCO0FBQ0EsWUFBSUUsWUFBWSxHQUFHSCxhQUFuQjs7QUFFQSxZQUFJRyxZQUFZLENBQUNDLENBQWIsR0FBaUJGLGNBQWMsQ0FBQ0UsQ0FBcEMsRUFBdUM7QUFDckNELFVBQUFBLFlBQVksR0FBR0QsY0FBZjtBQUNEOztBQUVELFlBQUlHLFVBQVUsR0FBR0MsTUFBTSxDQUFDLEtBQUtsQixJQUFMLENBQVVXLFVBQVYsQ0FBcUJRLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLENBQUQsQ0FBdkI7QUFDQSxhQUFLbkIsSUFBTCxDQUFVb0IsZ0JBQVY7QUFDQWIsUUFBQUEsYUFBYSxDQUFDUCxJQUFkLENBQW1Cb0IsZ0JBQW5CO0FBQ0EsYUFBS3hCLGNBQUwsR0FBc0IsS0FBdEI7QUFDQWMsUUFBQUEsYUFBYSxDQUFDZCxjQUFkLEdBQStCLEtBQS9CO0FBRUF5QixRQUFBQSxJQUFJLENBQUNDLFFBQUwsQ0FBY1YsYUFBZCxFQUE2QkssVUFBN0I7QUFDQUksUUFBQUEsSUFBSSxDQUFDQyxRQUFMLENBQWNSLGNBQWQsRUFBOEJHLFVBQTlCLEVBaEJ5RCxDQWtCekQ7O0FBQ0EsYUFBS00sWUFBTCxDQUFrQixZQUFZO0FBQzVCO0FBQ0FGLFVBQUFBLElBQUksQ0FBQ0csV0FBTCxDQUFpQlQsWUFBakIsRUFBK0JFLFVBQS9CLEVBQTJDLElBQTNDO0FBQ0FJLFVBQUFBLElBQUksQ0FBQ0ksUUFBTDtBQUNELFNBSmlCLENBSWhCQyxJQUpnQixDQUlYLElBSlcsQ0FBbEIsRUFJYyxJQUpkO0FBS0Q7QUFDRjtBQUNGLEdBeERNLENBMERQOztBQTFETyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHNwcml0ZUZyYW1lTGlzdDoge1xyXG4gICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgZGVmYXVsdDogW11cclxuICAgIH0sXHJcbiAgIFxyXG4gIH0sXHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gIHN0YXJ0ICgpIHtcclxuICAgIHRoaXMuY2FuX2NvbmxsaXNpb24gPSB0cnVlXHJcbiAgfSxcclxuICAvLyDmlLnlj5jpooTliLbkvZPnmoTog4zmma9zcHJpdEZyYW1lLCDov5nmoLfkuI3nlKjliJvlu7rlpJrkuKrpooTliLbkvZNcclxuICBjaGFuZ2VTcHJpdGVGcmFtZSAoaSkge1xyXG4gICAgbGV0IG5vZGVfc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpXHJcbiAgICBub2RlX3Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWVMaXN0W2ldXHJcbiAgfSxcclxuXHJcbiAgLy8g55u45ZCM5YWD57Sg56Kw5pKe5ZCO5raI5aSxXHJcbiAgLy8g5Y+q5Zyo5Lik5Liq56Kw5pKe5L2T5byA5aeL5o6l6Kem5pe26KKr6LCD55So5LiA5qyhXHJcbiAgb25CZWdpbkNvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKCflj6rlnKjkuKTkuKrnorDmkp7kvZPlvIDlp4vmjqXop6bml7booqvosIPnlKjkuIDmrKEnKVxyXG4gICAgbGV0IGpzX290aGVyQmxvY2sgPSBvdGhlckNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdibG9jaycpXHJcbiAgICBpZiAoanNfb3RoZXJCbG9jayAmJiB0aGlzLmNhbl9jb25sbGlzaW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLm5vZGUuYmxvY2tfdHlwZSA9PSBqc19vdGhlckJsb2NrLm5vZGUuYmxvY2tfdHlwZSkge1xyXG4gICAgICAgIGxldCBwb3NpdGlvbl9zZWxmID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgICAgICBsZXQgcG9zaXRpb25fb3RoZXIgPSBvdGhlckNvbGxpZGVyLm5vZGUuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgIGxldCBwb3NpdGlvbl9uZXcgPSBwb3NpdGlvbl9zZWxmXHJcblxyXG4gICAgICAgIGlmIChwb3NpdGlvbl9uZXcueSA+IHBvc2l0aW9uX290aGVyLnkpIHtcclxuICAgICAgICAgIHBvc2l0aW9uX25ldyA9IHBvc2l0aW9uX290aGVyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHlwZU51bWJlciA9IE51bWJlcih0aGlzLm5vZGUuYmxvY2tfdHlwZS5zcGxpdCgnaycpWzFdKVxyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KClcclxuICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgdGhpcy5jYW5fY29ubGxpc2lvbiA9IGZhbHNlXHJcbiAgICAgICAganNfb3RoZXJCbG9jay5jYW5fY29ubGxpc2lvbiA9IGZhbHNlXHJcblxyXG4gICAgICAgIG1haW4uY3JlYXRlVHgocG9zaXRpb25fc2VsZiwgdHlwZU51bWJlcilcclxuICAgICAgICBtYWluLmNyZWF0ZVR4KHBvc2l0aW9uX290aGVyLCB0eXBlTnVtYmVyKVxyXG5cclxuICAgICAgICAvLyDlj6rmiafooYzkuIDmrKHnmoTlrprml7blmaggMC4xNXNcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyDlnKhtYWluLmpz5Lit55Sz5piOd2luZG93Lm1haW4gPSB0aGlzXHJcbiAgICAgICAgICBtYWluLmNyZWF0ZUJsb2NrKHBvc2l0aW9uX25ldywgdHlwZU51bWJlciwgdHJ1ZSlcclxuICAgICAgICAgIG1haW4uYWRkU2NvcmUoKVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgMC4xNSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmxvY2sxIiwiUHJlZmFiIiwic2NvcmVfTGFiZWwiLCJMYWJlbCIsImJ6UHJlZmFiIiwib25Mb2FkIiwicHJlZmFiTGlzdCIsIm5hbWUiLCJzaXplIiwiY29sb3IiLCJ3aW5kb3ciLCJtYWluIiwiZl9zY2FsZSIsImZydWlkQ291bnQiLCJjdXJyZW50X3Njb3JlIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsIm1vdXNlX3Bvc2l0aW9uIiwiZ2V0TG9jYXRpb24iLCJ3b3JsZF9wb3NpdGlvbiIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieSIsIlRPVUNIX01PVkUiLCJjb25zb2xlIiwibG9nIiwiVE9VQ0hfRU5EIiwidHlwZU51bWJlciIsImdldE5leHRGcnVpZElkIiwiY3JlYXRlQmxvY2siLCJUT1VDSF9DQU5DRUwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwb3NpdGlvbiIsImlzU2NhbGUiLCJibG9ja19Ob2RlIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsInYyIiwieCIsInNjYWxlIiwiYWN0Iiwic2NhbGVUbyIsInJ1bkFjdGlvbiIsImZydWl0X3Nwcml0IiwiZ2V0Q29tcG9uZW50IiwiY2hhbmdlU3ByaXRlRnJhbWUiLCJibG9ja190eXBlIiwiTnVtYmVyIiwicGh5c2lzY3NfY29sbGlkZXIiLCJQaHlzaWNzQ2lyY2xlQ29sbGlkZXIiLCJmcnVpdEl0ZW0iLCJmaWx0ZXIiLCJpdGVtIiwicmFkaXVzIiwicGFyZW50IiwiY3JlYXRlVHgiLCJiek5vZGUiLCJDb2xvciIsInR3ZWVuIiwidG8iLCJjYWxsIiwicmVtb3ZlRnJvbVBhcmVudCIsInN0YXJ0IiwiYWRkU2Nv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S0FGRCxFQUVHQyxLQUZIO0FBR0QsR0F4S007QUEwS1A7QUFDQUMsRUFBQUEsUUEzS08sc0JBMktLO0FBQ1YsU0FBSzFELGFBQUwsSUFBc0IsQ0FBdEI7QUFDQSxTQUFLWixXQUFMLENBQWlCdUUsTUFBakIsR0FBMEIsWUFBWSxLQUFLM0QsYUFBM0M7QUFDRDtBQTlLTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBibG9jazE6IGNjLlByZWZhYixcclxuICAgIHNjb3JlX0xhYmVsOiBjYy5MYWJlbCxcclxuICAgIGJ6UHJlZmFiOiBjYy5QcmVmYWJcclxuICB9LFxyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkICgpIHtcclxuICAgIHRoaXMucHJlZmFiTGlzdCA9IFt7XHJcbiAgICAgIG5hbWU6ICdibG9jazEnLFxyXG4gICAgICBzaXplOiAyNixcclxuICAgICAgY29sb3I6IFsxMTAsIDE2LCAxMDBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmxvY2syJyxcclxuICAgICAgc2l6ZTogNDAsXHJcbiAgICAgIGNvbG9yOiBbMjU1LCA5LCAzNl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazMnLFxyXG4gICAgICBzaXplOiA1NCxcclxuICAgICAgY29sb3I6IFsyNTMsIDExLCAxXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrNCcsXHJcbiAgICAgIHNpemU6IDU5LFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjMwLCAyM11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazUnLFxyXG4gICAgICBzaXplOiA3NixcclxuICAgICAgY29sb3I6IFsxMTAsIDE2LCAxMDBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmxvY2s2JyxcclxuICAgICAgc2l6ZTogOTEsXHJcbiAgICAgIGNvbG9yOiBbMTEwLCAxNiwgMTAwXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrNycsXHJcbiAgICAgIHNpemU6IDk2LFxyXG4gICAgICBjb2xvcjogWzExMCwgMTYsIDEwMF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazgnLFxyXG4gICAgICBzaXplOiAxMjksXHJcbiAgICAgIGNvbG9yOiBbMTEwLCAxNiwgMTAwXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrOScsXHJcbiAgICAgIHNpemU6IDE1NCxcclxuICAgICAgY29sb3I6IFsxMTAsIDE2LCAxMDBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmxvY2sxMCcsXHJcbiAgICAgIHNpemU6IDE1NCxcclxuICAgICAgY29sb3I6IFsxMTAsIDE2LCAxMDBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmxvY2sxMScsXHJcbiAgICAgIHNpemU6IDIwNCxcclxuICAgICAgY29sb3I6IFsxMTAsIDE2LCAxMDBdXHJcbiAgICB9XVxyXG5cclxuICAgIHdpbmRvdy5tYWluID0gdGhpc1xyXG4gICAgdGhpcy5mX3NjYWxlID0gMC44IC8vIOaVtOS9k+e8qeWwjzAuOFxyXG4gICAgdGhpcy5mcnVpZENvdW50ID0gMCAvLyDlvZPliY3lsY/luZXnmoTmlbDph49cclxuICAgIHRoaXMuY3VycmVudF9zY29yZSA9IDAgLy8g5b2T5YmN5YiG5pWwXHJcblxyXG4gICAgLy8g5byA5ZCv54mp55CG56Kw5pKeXHJcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIOeCueWHu+Wxj+W5leW8gOWni1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuICAgICAgbGV0IG1vdXNlX3Bvc2l0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKVxyXG4gICAgICBsZXQgd29ybGRfcG9zaXRpb24gPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIobW91c2VfcG9zaXRpb24pXHJcbiAgICAgIHdvcmxkX3Bvc2l0aW9uLnkgPSA1MDBcclxuICAgICAgLy8gbGV0IHR5cGVOdW1iZXIgPSB0aGlzLmdldE5leHRGcnVpZElkKClcclxuICAgICAgLy8gdGhpcy5jcmVhdGVCbG9jayh3b3JsZF9wb3NpdGlvbiwgdHlwZU51bWJlcilcclxuICAgIH0pXHJcblxyXG4gICAgLy8g54K55Ye75bGP5bmV56e75YqoXHJcbiAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZXZlbnQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVE9VQ0hfTU9WRScpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOeCueWHu+Wxj+W5lee7k+adn1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZXZlbnQgPT4ge1xyXG4gICAgICBsZXQgbW91c2VfcG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgIGxldCB3b3JsZF9wb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihtb3VzZV9wb3NpdGlvbilcclxuICAgICAgd29ybGRfcG9zaXRpb24ueSA9IDUwMFxyXG4gICAgICBsZXQgdHlwZU51bWJlciA9IHRoaXMuZ2V0TmV4dEZydWlkSWQoKVxyXG4gICAgICAvLyDliJvlu7rpooTliLbkvZPlsI/nkINcclxuICAgICAgdGhpcy5jcmVhdGVCbG9jayh3b3JsZF9wb3NpdGlvbiwgdHlwZU51bWJlcilcclxuICAgIH0pXHJcbiAgICAvLyDlj5bmtojngrnlh7vlsY/luZVcclxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIGV2ZW50ID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RPVUNIX0NBTkNFTCcpXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8vIOiOt+WPluS4i+S4gOS4quawtOaenOeahGlkXHJcbiAgZ2V0TmV4dEZydWlkSWQgKCkge1xyXG4gICAgaWYgKHRoaXMuZnJ1aWRDb3VudCA8PSAzKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g6ZqP5py66L+U5Zue6Zmk5LqG5ZCO5LqU5Liq5LmL5aSW55qEXHJcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5wcmVmYWJMaXN0Lmxlbmd0aCAtIDUpKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIGNyZWF0ZSBibG9ja1xyXG4gIGNyZWF0ZUJsb2NrIChwb3NpdGlvbiwgdHlwZU51bWJlciwgaXNTY2FsZSA9IGZhbHNlKSB7XHJcbiAgICBpZiAodHlwZU51bWJlciA+PSB0aGlzLnByZWZhYkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgIHR5cGVOdW1iZXIgPSB0aGlzLnByZWZhYkxpc3QubGVuZ3RoIC0gMVxyXG4gICAgfVxyXG4gICAgbGV0IGJsb2NrX05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrMSlcclxuICAgIGJsb2NrX05vZGUuc2V0UG9zaXRpb24oY2MudjIocG9zaXRpb24ueCwgcG9zaXRpb24ueSkpXHJcblxyXG4gICAgYmxvY2tfTm9kZS5zY2FsZSA9IHRoaXMuZl9zY2FsZVxyXG5cclxuICAgIHRoaXMuZnJ1aWRDb3VudCsrIC8vIOawtOaenOaVsOmHj+WKoOS4gOS4qlxyXG5cclxuICAgIGlmIChpc1NjYWxlKSB7XHJcbiAgICAgIGJsb2NrX05vZGUuc2NhbGUgPSAwLjNcclxuICAgICAgbGV0IGFjdCA9IGNjLnNjYWxlVG8oMC4xNSwgdGhpcy5mX3NjYWxlKVxyXG4gICAgICBibG9ja19Ob2RlLnJ1bkFjdGlvbihhY3QpXHJcbiAgICAgIC8vIGNjLnR3ZWVuKGJsb2NrX05vZGUpLnRvKDAuMTUsIHtzY2FsZTogMX0pXHJcblxyXG4gICAgICB0aGlzLmZydWlkQ291bnQgLT0gMSAvL+eisOaSnuaNn+iAl+S4gOS4qlxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcnVpdF9zcHJpdCA9IGJsb2NrX05vZGUuZ2V0Q29tcG9uZW50KCdibG9jaycpXHJcbiAgICAvLyDosIPnlKhibG9jay5qc+aWueazleS/ruaUuXNwcml0ZSBmcmFtZeWbvueJh1xyXG4gICAgZnJ1aXRfc3ByaXQuY2hhbmdlU3ByaXRlRnJhbWUodHlwZU51bWJlcilcclxuICAgIGJsb2NrX05vZGUuYmxvY2tfdHlwZSA9ICdibG9jaycgKyBOdW1iZXIodHlwZU51bWJlciArIDEpXHJcblxyXG4gICAgbGV0IHBoeXNpc2NzX2NvbGxpZGVyID0gYmxvY2tfTm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKVxyXG4gICAgbGV0IGZydWl0SXRlbSA9IHRoaXMucHJlZmFiTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PSBibG9ja19Ob2RlLmJsb2NrX3R5cGVcclxuICAgIH0pXHJcblxyXG4gICAgcGh5c2lzY3NfY29sbGlkZXIucmFkaXVzID0gZnJ1aXRJdGVtWzBdLnNpemVcclxuICAgIGNvbnNvbGUubG9nKHR5cGVOdW1iZXIsIGZydWl0SXRlbVswXSk7XHJcblxyXG4gICAgYmxvY2tfTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICB9LFxyXG5cclxuICAvLyDmt7vliqDnibnmlYhcclxuICBjcmVhdGVUeCAocG9zaXRpb24sIHR5cGVOdW1iZXIpIHtcclxuICAgIGxldCBiek5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ6UHJlZmFiKVxyXG4gICAgYnpOb2RlLnNldFBvc2l0aW9uKGNjLnYyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpKVxyXG4gICAgYnpOb2RlLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgYnpOb2RlLnNjYWxlID0gMFxyXG5cclxuICAgIGxldCBmcnVpdEl0ZW0gPSB0aGlzLnByZWZhYkxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgPT0gJ2Jsb2NrJyArIE51bWJlcih0eXBlTnVtYmVyICsgMSlcclxuICAgIH0pXHJcblxyXG4gICAgYnpOb2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKGZydWl0SXRlbVswXS5jb2xvclswXSwgZnJ1aXRJdGVtWzBdLmNvbG9yWzFdLCBmcnVpdEl0ZW1bMF0uY29sb3JbMl0pXHJcblxyXG4gICAgY2MudHdlZW4oYnpOb2RlKS50bygwLjEsIHsgc2NhbGU6IDAuMiB9KS5jYWxsKCgpID0+IHtcclxuICAgICAgYnpOb2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgfSkuc3RhcnQoKVxyXG4gIH0sXHJcblxyXG4gIC8vIOa3u+WKoOWIhuaVsFxyXG4gIGFkZFNjb3JlICgpIHtcclxuICAgIHRoaXMuY3VycmVudF9zY29yZSArPSAxXHJcbiAgICB0aGlzLnNjb3JlX0xhYmVsLnN0cmluZyA9ICdzY29yZTogJyArIHRoaXMuY3VycmVudF9zY29yZVxyXG4gIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
