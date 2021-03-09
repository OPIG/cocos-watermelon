
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxibG9jay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwcml0ZUZyYW1lTGlzdCIsInR5cGUiLCJTcHJpdGVGcmFtZSIsInN0YXJ0IiwiY2FuX2NvbmxsaXNpb24iLCJjaGFuZ2VTcHJpdGVGcmFtZSIsImkiLCJub2RlX3Nwcml0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJjb25zb2xlIiwibG9nIiwianNfb3RoZXJCbG9jayIsImJsb2NrX3R5cGUiLCJwb3NpdGlvbl9zZWxmIiwiZ2V0UG9zaXRpb24iLCJwb3NpdGlvbl9vdGhlciIsInBvc2l0aW9uX25ldyIsInkiLCJ0eXBlTnVtYmVyIiwiTnVtYmVyIiwic3BsaXQiLCJyZW1vdmVGcm9tUGFyZW50Iiwic2NoZWR1bGVPbmNlIiwibWFpbiIsImNyZWF0ZUJsb2NrIiwiYWRkU2NvcmUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2ZDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxXQURNO0FBRWYsaUJBQVM7QUFGTTtBQURQLEdBSEw7QUFVUDtBQUVBO0FBRUFDLEVBQUFBLEtBZE8sbUJBY0U7QUFDUCxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0QsR0FoQk07QUFpQlA7QUFDQUMsRUFBQUEsaUJBbEJPLDZCQWtCWUMsQ0FsQlosRUFrQmU7QUFDcEIsUUFBSUMsV0FBVyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmIsRUFBRSxDQUFDYyxNQUExQixDQUFsQjtBQUNBSCxJQUFBQSxXQUFXLENBQUNJLFdBQVosR0FBMEIsS0FBS1gsZUFBTCxDQUFxQk0sQ0FBckIsQ0FBMUI7QUFDRCxHQXJCTTtBQXVCUDtBQUNBO0FBQ0FNLEVBQUFBLGNBQWMsRUFBRSx3QkFBVUMsT0FBVixFQUFtQkMsWUFBbkIsRUFBaUNDLGFBQWpDLEVBQWdEO0FBQzlEQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFFBQUlDLGFBQWEsR0FBR0gsYUFBYSxDQUFDUCxJQUFkLENBQW1CQyxZQUFuQixDQUFnQyxPQUFoQyxDQUFwQjs7QUFDQSxRQUFJUyxhQUFhLElBQUksS0FBS2QsY0FBMUIsRUFBMEM7QUFDeEMsVUFBSSxLQUFLSSxJQUFMLENBQVVXLFVBQVYsSUFBd0JELGFBQWEsQ0FBQ1YsSUFBZCxDQUFtQlcsVUFBL0MsRUFBMkQ7QUFDekQsWUFBSUMsYUFBYSxHQUFHLEtBQUtaLElBQUwsQ0FBVWEsV0FBVixFQUFwQjtBQUNBLFlBQUlDLGNBQWMsR0FBR1AsYUFBYSxDQUFDUCxJQUFkLENBQW1CYSxXQUFuQixFQUFyQjtBQUNBLFlBQUlFLFlBQVksR0FBR0gsYUFBbkI7O0FBRUEsWUFBSUcsWUFBWSxDQUFDQyxDQUFiLEdBQWlCRixjQUFjLENBQUNFLENBQXBDLEVBQXVDO0FBQ3JDRCxVQUFBQSxZQUFZLEdBQUdELGNBQWY7QUFDRDs7QUFFRCxZQUFJRyxVQUFVLEdBQUdDLE1BQU0sQ0FBQyxLQUFLbEIsSUFBTCxDQUFVVyxVQUFWLENBQXFCUSxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFELENBQXZCO0FBQ0EsYUFBS25CLElBQUwsQ0FBVW9CLGdCQUFWO0FBQ0FiLFFBQUFBLGFBQWEsQ0FBQ1AsSUFBZCxDQUFtQm9CLGdCQUFuQjtBQUNBLGFBQUt4QixjQUFMLEdBQXNCLEtBQXRCO0FBQ0FjLFFBQUFBLGFBQWEsQ0FBQ2QsY0FBZCxHQUErQixLQUEvQixDQWJ5RCxDQWV6RDs7QUFDQSxhQUFLeUIsWUFBTCxDQUFrQixZQUFZO0FBQzVCO0FBQ0FDLFVBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQlIsWUFBakIsRUFBK0JFLFVBQS9CO0FBQ0FLLFVBQUFBLElBQUksQ0FBQ0UsUUFBTDtBQUNELFNBSmlCLENBSWhCQyxJQUpnQixDQUlYLElBSlcsQ0FBbEIsRUFJYyxJQUpkO0FBS0Q7QUFDRjtBQUNGLEdBcERNLENBc0RQOztBQXRETyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHNwcml0ZUZyYW1lTGlzdDoge1xyXG4gICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgZGVmYXVsdDogW11cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICBzdGFydCAoKSB7XHJcbiAgICB0aGlzLmNhbl9jb25sbGlzaW9uID0gdHJ1ZVxyXG4gIH0sXHJcbiAgLy8g5pS55Y+Y6aKE5Yi25L2T55qE6IOM5pmvc3ByaXRGcmFtZSwg6L+Z5qC35LiN55So5Yib5bu65aSa5Liq6aKE5Yi25L2TXHJcbiAgY2hhbmdlU3ByaXRlRnJhbWUgKGkpIHtcclxuICAgIGxldCBub2RlX3Nwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgbm9kZV9zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lTGlzdFtpXVxyXG4gIH0sXHJcblxyXG4gIC8vIOebuOWQjOWFg+e0oOeisOaSnuWQjua2iOWksVxyXG4gIC8vIOWPquWcqOS4pOS4queisOaSnuS9k+W8gOWni+aOpeinpuaXtuiiq+iwg+eUqOS4gOasoVxyXG4gIG9uQmVnaW5Db250YWN0OiBmdW5jdGlvbiAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5Y+q5Zyo5Lik5Liq56Kw5pKe5L2T5byA5aeL5o6l6Kem5pe26KKr6LCD55So5LiA5qyhJylcclxuICAgIGxldCBqc19vdGhlckJsb2NrID0gb3RoZXJDb2xsaWRlci5ub2RlLmdldENvbXBvbmVudCgnYmxvY2snKVxyXG4gICAgaWYgKGpzX290aGVyQmxvY2sgJiYgdGhpcy5jYW5fY29ubGxpc2lvbikge1xyXG4gICAgICBpZiAodGhpcy5ub2RlLmJsb2NrX3R5cGUgPT0ganNfb3RoZXJCbG9jay5ub2RlLmJsb2NrX3R5cGUpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb25fc2VsZiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXHJcbiAgICAgICAgbGV0IHBvc2l0aW9uX290aGVyID0gb3RoZXJDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKClcclxuICAgICAgICBsZXQgcG9zaXRpb25fbmV3ID0gcG9zaXRpb25fc2VsZlxyXG5cclxuICAgICAgICBpZiAocG9zaXRpb25fbmV3LnkgPiBwb3NpdGlvbl9vdGhlci55KSB7XHJcbiAgICAgICAgICBwb3NpdGlvbl9uZXcgPSBwb3NpdGlvbl9vdGhlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHR5cGVOdW1iZXIgPSBOdW1iZXIodGhpcy5ub2RlLmJsb2NrX3R5cGUuc3BsaXQoJ2snKVsxXSlcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxyXG4gICAgICAgIHRoaXMuY2FuX2NvbmxsaXNpb24gPSBmYWxzZVxyXG4gICAgICAgIGpzX290aGVyQmxvY2suY2FuX2NvbmxsaXNpb24gPSBmYWxzZVxyXG5cclxuICAgICAgICAvLyDlj6rmiafooYzkuIDmrKHnmoTlrprml7blmaggMC4xNXNcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyDlnKhtYWluLmpz5Lit55Sz5piOd2luZG93Lm1haW4gPSB0aGlzXHJcbiAgICAgICAgICBtYWluLmNyZWF0ZUJsb2NrKHBvc2l0aW9uX25ldywgdHlwZU51bWJlcilcclxuICAgICAgICAgIG1haW4uYWRkU2NvcmUoKVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgMC4xNSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=