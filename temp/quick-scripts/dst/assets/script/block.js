
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