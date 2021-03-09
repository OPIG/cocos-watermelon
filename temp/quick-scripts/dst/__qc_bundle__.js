
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJsb2NrMSIsIlByZWZhYiIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwibm9kZSIsIm9uIiwiZXZlbnQiLCJtb3VzZV9wb3NpdGlvbiIsImdldExvY2F0aW9uIiwid29ybGRfcG9zaXRpb24iLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsImNyZWF0ZUJsb2NrIiwicHJlZmFiTGlzdCIsIm5hbWUiLCJzaXplIiwicmFuZG9tTnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiYmxvY2tfTm9kZSIsImluc3RhbnRpYXRlIiwiZnJ1aXRfc3ByaXQiLCJnZXRDb21wb25lbnQiLCJjaGFuZ2VTcHJpdGVGcmFtZSIsInBoeXNpc2NzX2NvbGxpZGVyIiwiUGh5c2ljc0NpcmNsZUNvbGxpZGVyIiwiZmlsdGVyIiwiaXRlbSIsIk51bWJlciIsInJhZGl1cyIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUhQO0FBUUw7QUFFQUMsRUFBQUEsTUFWSyxvQkFVSztBQUFBOztBQUNSTixJQUFBQSxFQUFFLENBQUNPLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NDLE9BQWhDLEdBQTBDLElBQTFDO0FBRUEsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsWUFBYixFQUEyQixVQUFDQyxLQUFELEVBQVU7QUFDbkMsVUFBSUMsY0FBYyxHQUFHRCxLQUFLLENBQUNFLFdBQU4sRUFBckI7O0FBQ0EsVUFBSUMsY0FBYyxHQUFHLEtBQUksQ0FBQ0wsSUFBTCxDQUFVTSxvQkFBVixDQUErQkgsY0FBL0IsQ0FBckIsQ0FGbUMsQ0FHbkM7QUFDQTs7O0FBQ0EsTUFBQSxLQUFJLENBQUNJLFdBQUw7QUFDRCxLQU5ELEVBSFEsQ0FXUjtBQUNELEdBdEJJO0FBd0JMO0FBQ0FBLEVBQUFBLFdBekJLLHlCQXlCVTtBQUNiLFFBQU1DLFVBQVUsR0FBRyxDQUFDO0FBQ2xCQyxNQUFBQSxJQUFJLEVBQUUsUUFEWTtBQUVsQkMsTUFBQUEsSUFBSSxFQUFFO0FBRlksS0FBRCxFQUluQjtBQUNFRCxNQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFBQSxJQUFJLEVBQUU7QUFGUixLQUptQixFQVFuQjtBQUNFRCxNQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFBQSxJQUFJLEVBQUU7QUFGUixLQVJtQixFQVluQjtBQUNFRCxNQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFBQSxJQUFJLEVBQUU7QUFGUixLQVptQixFQWdCbkI7QUFDRUQsTUFBQUEsSUFBSSxFQUFFLFFBRFI7QUFFRUMsTUFBQUEsSUFBSSxFQUFFO0FBRlIsS0FoQm1CLEVBb0JuQjtBQUNFRCxNQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxNQUFBQSxJQUFJLEVBQUU7QUFGUixLQXBCbUIsQ0FBbkI7QUEwQkYsUUFBSUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTixVQUFVLENBQUNPLE1BQXRDLENBQWhCO0FBQ0UsUUFBSUMsVUFBVSxHQUFHMUIsRUFBRSxDQUFDMkIsV0FBSCxDQUFlLEtBQUt2QixNQUFwQixDQUFqQjtBQUNBLFFBQUl3QixXQUFXLEdBQUdGLFVBQVUsQ0FBQ0csWUFBWCxDQUF3QixPQUF4QixDQUFsQjtBQUNBRCxJQUFBQSxXQUFXLENBQUNFLGlCQUFaLENBQThCVCxTQUE5QjtBQUVBLFFBQUlVLGlCQUFpQixHQUFHTCxVQUFVLENBQUNHLFlBQVgsQ0FBd0I3QixFQUFFLENBQUNnQyxxQkFBM0IsQ0FBeEI7QUFDQSxRQUFJWixJQUFJLEdBQUdGLFVBQVUsQ0FBQ2UsTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQVE7QUFDbkMsYUFBT0EsSUFBSSxDQUFDZixJQUFMLElBQVcsVUFBU2dCLE1BQU0sQ0FBQ2QsU0FBUyxHQUFHLENBQWIsQ0FBakM7QUFDRCxLQUZVLENBQVg7QUFJQVUsSUFBQUEsaUJBQWlCLENBQUNLLE1BQWxCLEdBQTJCaEIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRQSxJQUFuQztBQUNBaUIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixTQUFaLEVBQXVCRCxJQUFJLENBQUMsQ0FBRCxDQUEzQjtBQUVBTSxJQUFBQSxVQUFVLENBQUNhLE1BQVgsR0FBb0IsS0FBSzdCLElBQXpCO0FBQ0Q7QUFsRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGJsb2NrMTogY2MuUHJlZmFiLFxuICAgICAgXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIChldmVudCkgPT57XG4gICAgICAgIGxldCBtb3VzZV9wb3NpdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKClcbiAgICAgICAgbGV0IHdvcmxkX3Bvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG1vdXNlX3Bvc2l0aW9uKVxuICAgICAgICAvLyBsZXQgYmxvY2tOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdibG9jaycpXG4gICAgICAgIC8vIGJsb2NrTm9kZS5zZXRQb3NpdGlvbih3b3JsZF9wb3NpdGlvbi54LCB3b3JsZF9wb3NpdGlvbi55KVxuICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrKClcbiAgICAgIH0pXG4gICAgIFxuICAgICAgLy8gdGhpcy5jcmVhdGVCbG9jaygpXG4gICAgfSxcblxuICAgIC8vIGNyZWF0ZSBibG9ja1xuICAgIGNyZWF0ZUJsb2NrICgpIHtcbiAgICAgIGNvbnN0IHByZWZhYkxpc3QgPSBbe1xuICAgICAgICBuYW1lOiAnYmxvY2sxJyxcbiAgICAgICAgc2l6ZTogMjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdibG9jazInLFxuICAgICAgICBzaXplOiA0MFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2Jsb2NrMycsXG4gICAgICAgIHNpemU6IDU0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnYmxvY2s0JyxcbiAgICAgICAgc2l6ZTogNTlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdibG9jazUnLFxuICAgICAgICBzaXplOiA3NlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2Jsb2NrNicsXG4gICAgICAgIHNpemU6IDkxXG4gICAgICB9XG4gICAgXVxuXG4gICAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHByZWZhYkxpc3QubGVuZ3RoKVxuICAgICAgbGV0IGJsb2NrX05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrMSlcbiAgICAgIGxldCBmcnVpdF9zcHJpdCA9IGJsb2NrX05vZGUuZ2V0Q29tcG9uZW50KCdibG9jaycpXG4gICAgICBmcnVpdF9zcHJpdC5jaGFuZ2VTcHJpdGVGcmFtZShyYW5kb21OdW0pXG4gICAgICBcbiAgICAgIGxldCBwaHlzaXNjc19jb2xsaWRlciA9IGJsb2NrX05vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcilcbiAgICAgIGxldCBzaXplID0gcHJlZmFiTGlzdC5maWx0ZXIoKGl0ZW0pPT57XG4gICAgICAgIHJldHVybiBpdGVtLm5hbWU9PSdibG9jaycrIE51bWJlcihyYW5kb21OdW0gKyAxKVxuICAgICAgfSlcblxuICAgICAgcGh5c2lzY3NfY29sbGlkZXIucmFkaXVzID0gc2l6ZVswXS5zaXplXG4gICAgICBjb25zb2xlLmxvZyhyYW5kb21OdW0sIHNpemVbMF0pO1xuXG4gICAgICBibG9ja19Ob2RlLnBhcmVudCA9IHRoaXMubm9kZVxuICAgIH0sXG59KTtcbiJdfQ==
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
  start: function start() {},
  // 改变预制体的背景spritFrame, 这样不用创建多个预制体
  changeSpriteFrame: function changeSpriteFrame(i) {
    var node_sprite = this.node.getComponent(cc.Sprite);
    node_sprite.spriteFrame = this.spriteFrameList[i];
  },
  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    console.log('只在两个碰撞体开始接触时被调用一次');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmxvY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcHJpdGVGcmFtZUxpc3QiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsImNoYW5nZVNwcml0ZUZyYW1lIiwiaSIsIm5vZGVfc3ByaXRlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwib25CZWdpbkNvbnRhY3QiLCJjb250YWN0Iiwic2VsZkNvbGxpZGVyIiwib3RoZXJDb2xsaWRlciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxlQUFlLEVBQUU7QUFDYkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFdBREk7QUFFYixpQkFBUztBQUZJO0FBRFQsR0FIUDtBQVVMO0FBRUE7QUFFQUMsRUFBQUEsS0FkSyxtQkFjSSxDQUVSLENBaEJJO0FBaUJMO0FBQ0FDLEVBQUFBLGlCQWxCSyw2QkFrQmFDLENBbEJiLEVBa0JlO0FBQ2hCLFFBQUlDLFdBQVcsR0FBRyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJaLEVBQUUsQ0FBQ2EsTUFBMUIsQ0FBbEI7QUFDQUgsSUFBQUEsV0FBVyxDQUFDSSxXQUFaLEdBQTBCLEtBQUtWLGVBQUwsQ0FBcUJLLENBQXJCLENBQTFCO0FBQ0gsR0FyQkk7QUF1Qkw7QUFDQU0sRUFBQUEsY0FBYyxFQUFFLHdCQUFTQyxPQUFULEVBQWtCQyxZQUFsQixFQUFnQ0MsYUFBaEMsRUFBK0M7QUFDM0RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0gsR0ExQkksQ0E0Qkw7O0FBNUJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNwcml0ZUZyYW1lTGlzdDoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcbiAgICAvLyDmlLnlj5jpooTliLbkvZPnmoTog4zmma9zcHJpdEZyYW1lLCDov5nmoLfkuI3nlKjliJvlu7rlpJrkuKrpooTliLbkvZNcbiAgICBjaGFuZ2VTcHJpdGVGcmFtZShpKXtcbiAgICAgICAgbGV0IG5vZGVfc3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpXG4gICAgICAgIG5vZGVfc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUxpc3RbaV1cbiAgICB9LFxuXG4gICAgLy8g5Y+q5Zyo5Lik5Liq56Kw5pKe5L2T5byA5aeL5o6l6Kem5pe26KKr6LCD55So5LiA5qyhXG4gICAgb25CZWdpbkNvbnRhY3Q6IGZ1bmN0aW9uKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBjb25zb2xlLmxvZygn5Y+q5Zyo5Lik5Liq56Kw5pKe5L2T5byA5aeL5o6l6Kem5pe26KKr6LCD55So5LiA5qyhJylcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------
