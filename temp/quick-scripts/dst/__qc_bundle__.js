
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

    this.current_score = 0;
    cc.director.getPhysicsManager().enabled = true;
    this.node.on('touchstart', function (event) {
      var mouse_position = event.getLocation();

      var world_position = _this.node.convertToNodeSpaceAR(mouse_position);

      world_position.y = 500;
      var randomNum = Math.floor(Math.random() * (_this.prefabList.length - 5));

      _this.createBlock(world_position, randomNum);
    });
  },
  // create block
  createBlock: function createBlock(position, typeNumber, isScale) {
    if (isScale === void 0) {
      isScale = false;
    }

    if (typeNumber >= this.prefabList.length) {
      typeNumber = this.prefabList.length;
    }

    var block_Node = cc.instantiate(this.block1);
    block_Node.setPosition(cc.v2(position.x, position.y));
    block_Node.scale = this.f_scale;

    if (isScale) {
      block_Node.scale = 0.3;
      var act = cc.scaleTo(0.15, this.f_scale);
      block_Node.runAction(act); // cc.tween(block_Node).to(0.15, {scale: 1})
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
  addScore: function addScore() {
    this.current_score += 1;
    this.score_Label.string = this.current_score;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmxvY2sxIiwiUHJlZmFiIiwic2NvcmVfTGFiZWwiLCJMYWJlbCIsImJ6UHJlZmFiIiwib25Mb2FkIiwicHJlZmFiTGlzdCIsIm5hbWUiLCJzaXplIiwiY29sb3IiLCJ3aW5kb3ciLCJtYWluIiwiZl9zY2FsZSIsImN1cnJlbnRfc2NvcmUiLCJkaXJlY3RvciIsImdldFBoeXNpY3NNYW5hZ2VyIiwiZW5hYmxlZCIsIm5vZGUiLCJvbiIsImV2ZW50IiwibW91c2VfcG9zaXRpb24iLCJnZXRMb2NhdGlvbiIsIndvcmxkX3Bvc2l0aW9uIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJ5IiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY3JlYXRlQmxvY2siLCJwb3NpdGlvbiIsInR5cGVOdW1iZXIiLCJpc1NjYWxlIiwiYmxvY2tfTm9kZSIsImluc3RhbnRpYXRlIiwic2V0UG9zaXRpb24iLCJ2MiIsIngiLCJzY2FsZSIsImFjdCIsInNjYWxlVG8iLCJydW5BY3Rpb24iLCJmcnVpdF9zcHJpdCIsImdldENvbXBvbmVudCIsImNoYW5nZVNwcml0ZUZyYW1lIiwiYmxvY2tfdHlwZSIsIk51bWJlciIsInBoeXNpc2NzX2NvbGxpZGVyIiwiUGh5c2ljc0NpcmNsZUNvbGxpZGVyIiwiZnJ1aXRJdGVtIiwiZmlsdGVyIiwiaXRlbSIsInJhZGl1cyIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnQiLCJjcmVhdGVUeCIsImJ6Tm9kZSIsIkNvbG9yIiwidHdlZW4iLCJ0byIsImNhbGwiLCJyZW1vdmVGcm9tUGFyZW50Iiwic3RhcnQiLCJhZGRTY29yZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNF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ZixFQUFrQlAsUUFBUSxDQUFDUCxDQUEzQixDQUFuQjtBQUNBa0MsSUFBQUEsTUFBTSxDQUFDRixNQUFQLEdBQWdCLEtBQUt2QyxJQUFyQjtBQUNBeUMsSUFBQUEsTUFBTSxDQUFDbkIsS0FBUCxHQUFlLENBQWY7QUFFQSxRQUFJVyxTQUFTLEdBQUcsS0FBSzVDLFVBQUwsQ0FBZ0I2QyxNQUFoQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDL0MsYUFBT0EsSUFBSSxDQUFDN0MsSUFBTCxJQUFhLFVBQVV3QyxNQUFNLENBQUNmLFVBQVUsR0FBRyxDQUFkLENBQXBDO0FBQ0QsS0FGZSxDQUFoQjtBQUlBMEIsSUFBQUEsTUFBTSxDQUFDakQsS0FBUCxHQUFlLElBQUliLEVBQUUsQ0FBQytELEtBQVAsQ0FBYVQsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhekMsS0FBYixDQUFtQixDQUFuQixDQUFiLEVBQW1DeUMsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhekMsS0FBYixDQUFtQixDQUFuQixDQUFuQyxFQUF5RHlDLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXpDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBekQsQ0FBZjtBQUVBYixJQUFBQSxFQUFFLENBQUNnRSxLQUFILENBQVNGLE1BQVQsRUFBaUJHLEVBQWpCLENBQW9CLEdBQXBCLEVBQXlCO0FBQUN0QixNQUFBQSxLQUFLLEVBQUM7QUFBUCxLQUF6QixFQUFzQ3VCLElBQXRDLENBQTJDLFlBQUk7QUFDN0NKLE1BQUFBLE1BQU0sQ0FBQ0ssZ0JBQVA7QUFDRCxLQUZELEVBRUdDLEtBRkg7QUFHRCxHQXBJTTtBQXFJUEMsRUFBQUEsUUFySU8sc0JBcUlHO0FBQ1IsU0FBS3BELGFBQUwsSUFBc0IsQ0FBdEI7QUFDQSxTQUFLWCxXQUFMLENBQWlCZ0UsTUFBakIsR0FBMEIsS0FBS3JELGFBQS9CO0FBQ0Q7QUF4SU0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgYmxvY2sxOiBjYy5QcmVmYWIsXHJcbiAgICBzY29yZV9MYWJlbDogY2MuTGFiZWwsXHJcbiAgICBielByZWZhYjogY2MuUHJlZmFiXHJcbiAgfSxcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCAoKSB7XHJcbiAgICB0aGlzLnByZWZhYkxpc3QgPSBbe1xyXG4gICAgICBuYW1lOiAnYmxvY2sxJyxcclxuICAgICAgc2l6ZTogMjYsXHJcbiAgICAgIGNvbG9yOiBbMTEwLDE2LDEwMF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazInLFxyXG4gICAgICBzaXplOiA0MCxcclxuICAgICAgY29sb3I6IFsyNTUsOSwzNl1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazMnLFxyXG4gICAgICBzaXplOiA1NCxcclxuICAgICAgY29sb3I6IFsyNTMsMTEsMV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazQnLFxyXG4gICAgICBzaXplOiA1OSxcclxuICAgICAgY29sb3I6IFsyNTUsMjMwLDIzXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrNScsXHJcbiAgICAgIHNpemU6IDc2LFxyXG4gICAgICBjb2xvcjogWzExMCwxNiwxMDBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmxvY2s2JyxcclxuICAgICAgc2l6ZTogOTEsXHJcbiAgICAgIGNvbG9yOiBbMTEwLDE2LDEwMF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazcnLFxyXG4gICAgICBzaXplOiA5NixcclxuICAgICAgY29sb3I6IFsxMTAsMTYsMTAwXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrOCcsXHJcbiAgICAgIHNpemU6IDEyOSxcclxuICAgICAgY29sb3I6IFsxMTAsMTYsMTAwXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrOScsXHJcbiAgICAgIHNpemU6IDE1NCxcclxuICAgICAgY29sb3I6IFsxMTAsMTYsMTAwXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrMTAnLFxyXG4gICAgICBzaXplOiAxNTQsXHJcbiAgICAgIGNvbG9yOiBbMTEwLDE2LDEwMF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazExJyxcclxuICAgICAgc2l6ZTogMjA0LFxyXG4gICAgICBjb2xvcjogWzExMCwxNiwxMDBdXHJcbiAgICB9XVxyXG5cclxuICAgIHdpbmRvdy5tYWluID0gdGhpc1xyXG4gICAgdGhpcy5mX3NjYWxlID0gMC44IC8vIOaVtOS9k+e8qeWwjzAuOFxyXG5cclxuICAgIHRoaXMuY3VycmVudF9zY29yZSA9IDBcclxuXHJcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG4gICAgICBsZXQgbW91c2VfcG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgIGxldCB3b3JsZF9wb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihtb3VzZV9wb3NpdGlvbilcclxuICAgICAgd29ybGRfcG9zaXRpb24ueSA9IDUwMFxyXG4gICAgICBsZXQgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMucHJlZmFiTGlzdC5sZW5ndGggLSA1KSlcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlQmxvY2sod29ybGRfcG9zaXRpb24sIHJhbmRvbU51bSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy8gY3JlYXRlIGJsb2NrXHJcbiAgY3JlYXRlQmxvY2sgKHBvc2l0aW9uLCB0eXBlTnVtYmVyLCBpc1NjYWxlPWZhbHNlKSB7XHJcbiAgICBpZiAodHlwZU51bWJlciA+PSB0aGlzLnByZWZhYkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgIHR5cGVOdW1iZXIgPSB0aGlzLnByZWZhYkxpc3QubGVuZ3RoXHJcbiAgICB9XHJcbiAgICBsZXQgYmxvY2tfTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2sxKVxyXG4gICAgYmxvY2tfTm9kZS5zZXRQb3NpdGlvbihjYy52Mihwb3NpdGlvbi54LCBwb3NpdGlvbi55KSlcclxuXHJcbiAgICBibG9ja19Ob2RlLnNjYWxlID0gdGhpcy5mX3NjYWxlXHJcblxyXG4gICAgaWYoaXNTY2FsZSkge1xyXG4gICAgICBibG9ja19Ob2RlLnNjYWxlID0gMC4zXHJcbiAgICAgIGxldCBhY3QgPSBjYy5zY2FsZVRvKDAuMTUsIHRoaXMuZl9zY2FsZSlcclxuICAgICAgYmxvY2tfTm9kZS5ydW5BY3Rpb24oYWN0KVxyXG4gICAgICAvLyBjYy50d2VlbihibG9ja19Ob2RlKS50bygwLjE1LCB7c2NhbGU6IDF9KVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcnVpdF9zcHJpdCA9IGJsb2NrX05vZGUuZ2V0Q29tcG9uZW50KCdibG9jaycpXHJcbiAgICAvLyDosIPnlKhibG9jay5qc+aWueazleS/ruaUuXNwcml0ZSBmcmFtZeWbvueJh1xyXG4gICAgZnJ1aXRfc3ByaXQuY2hhbmdlU3ByaXRlRnJhbWUodHlwZU51bWJlcilcclxuICAgIGJsb2NrX05vZGUuYmxvY2tfdHlwZSA9ICdibG9jaycgKyBOdW1iZXIodHlwZU51bWJlciArIDEpXHJcblxyXG4gICAgbGV0IHBoeXNpc2NzX2NvbGxpZGVyID0gYmxvY2tfTm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKVxyXG4gICAgbGV0IGZydWl0SXRlbSA9IHRoaXMucHJlZmFiTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PSBibG9ja19Ob2RlLmJsb2NrX3R5cGVcclxuICAgIH0pXHJcblxyXG4gICAgcGh5c2lzY3NfY29sbGlkZXIucmFkaXVzID0gZnJ1aXRJdGVtWzBdLnNpemVcclxuICAgIGNvbnNvbGUubG9nKHR5cGVOdW1iZXIsIGZydWl0SXRlbVswXSk7XHJcblxyXG4gICAgYmxvY2tfTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICB9LFxyXG4gIGNyZWF0ZVR4KHBvc2l0aW9uLCB0eXBlTnVtYmVyKXtcclxuICAgIGxldCBiek5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ6UHJlZmFiKVxyXG4gICAgYnpOb2RlLnNldFBvc2l0aW9uKGNjLnYyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpKVxyXG4gICAgYnpOb2RlLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgYnpOb2RlLnNjYWxlID0gMFxyXG5cclxuICAgIGxldCBmcnVpdEl0ZW0gPSB0aGlzLnByZWZhYkxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgPT0gJ2Jsb2NrJyArIE51bWJlcih0eXBlTnVtYmVyICsgMSlcclxuICAgIH0pXHJcblxyXG4gICAgYnpOb2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKGZydWl0SXRlbVswXS5jb2xvclswXSxmcnVpdEl0ZW1bMF0uY29sb3JbMV0sZnJ1aXRJdGVtWzBdLmNvbG9yWzJdKVxyXG5cclxuICAgIGNjLnR3ZWVuKGJ6Tm9kZSkudG8oMC4xLCB7c2NhbGU6MC4yfSkuY2FsbCgoKT0+e1xyXG4gICAgICBiek5vZGUucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICB9KS5zdGFydCgpXHJcbiAgfSxcclxuICBhZGRTY29yZSgpe1xyXG4gICAgdGhpcy5jdXJyZW50X3Njb3JlICs9IDFcclxuICAgIHRoaXMuc2NvcmVfTGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50X3Njb3JlXHJcbiAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------
