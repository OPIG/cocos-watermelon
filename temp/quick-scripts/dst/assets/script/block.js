
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmxvY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcHJpdGVGcmFtZUxpc3QiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsImNhbl9jb25sbGlzaW9uIiwiY2hhbmdlU3ByaXRlRnJhbWUiLCJpIiwibm9kZV9zcHJpdGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwiY29uc29sZSIsImxvZyIsImpzX290aGVyQmxvY2siLCJibG9ja190eXBlIiwicG9zaXRpb25fc2VsZiIsImdldFBvc2l0aW9uIiwicG9zaXRpb25fb3RoZXIiLCJwb3NpdGlvbl9uZXciLCJ5IiwidHlwZU51bWJlciIsIk51bWJlciIsInNwbGl0IiwicmVtb3ZlRnJvbVBhcmVudCIsIm1haW4iLCJjcmVhdGVUeCIsInNjaGVkdWxlT25jZSIsImNyZWF0ZUJsb2NrIiwiYWRkU2NvcmUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2ZDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxXQURNO0FBRWYsaUJBQVM7QUFGTTtBQURQLEdBSEw7QUFXUDtBQUVBO0FBRUFDLEVBQUFBLEtBZk8sbUJBZUU7QUFDUCxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0QsR0FqQk07QUFrQlA7QUFDQUMsRUFBQUEsaUJBbkJPLDZCQW1CWUMsQ0FuQlosRUFtQmU7QUFDcEIsUUFBSUMsV0FBVyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmIsRUFBRSxDQUFDYyxNQUExQixDQUFsQjtBQUNBSCxJQUFBQSxXQUFXLENBQUNJLFdBQVosR0FBMEIsS0FBS1gsZUFBTCxDQUFxQk0sQ0FBckIsQ0FBMUI7QUFDRCxHQXRCTTtBQXdCUDtBQUNBO0FBQ0FNLEVBQUFBLGNBQWMsRUFBRSx3QkFBVUMsT0FBVixFQUFtQkMsWUFBbkIsRUFBaUNDLGFBQWpDLEVBQWdEO0FBQzlEQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFFBQUlDLGFBQWEsR0FBR0gsYUFBYSxDQUFDUCxJQUFkLENBQW1CQyxZQUFuQixDQUFnQyxPQUFoQyxDQUFwQjs7QUFDQSxRQUFJUyxhQUFhLElBQUksS0FBS2QsY0FBMUIsRUFBMEM7QUFDeEMsVUFBSSxLQUFLSSxJQUFMLENBQVVXLFVBQVYsSUFBd0JELGFBQWEsQ0FBQ1YsSUFBZCxDQUFtQlcsVUFBL0MsRUFBMkQ7QUFDekQsWUFBSUMsYUFBYSxHQUFHLEtBQUtaLElBQUwsQ0FBVWEsV0FBVixFQUFwQjtBQUNBLFlBQUlDLGNBQWMsR0FBR1AsYUFBYSxDQUFDUCxJQUFkLENBQW1CYSxXQUFuQixFQUFyQjtBQUNBLFlBQUlFLFlBQVksR0FBR0gsYUFBbkI7O0FBRUEsWUFBSUcsWUFBWSxDQUFDQyxDQUFiLEdBQWlCRixjQUFjLENBQUNFLENBQXBDLEVBQXVDO0FBQ3JDRCxVQUFBQSxZQUFZLEdBQUdELGNBQWY7QUFDRDs7QUFFRCxZQUFJRyxVQUFVLEdBQUdDLE1BQU0sQ0FBQyxLQUFLbEIsSUFBTCxDQUFVVyxVQUFWLENBQXFCUSxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFELENBQXZCO0FBQ0EsYUFBS25CLElBQUwsQ0FBVW9CLGdCQUFWO0FBQ0FiLFFBQUFBLGFBQWEsQ0FBQ1AsSUFBZCxDQUFtQm9CLGdCQUFuQjtBQUNBLGFBQUt4QixjQUFMLEdBQXNCLEtBQXRCO0FBQ0FjLFFBQUFBLGFBQWEsQ0FBQ2QsY0FBZCxHQUErQixLQUEvQjtBQUVBeUIsUUFBQUEsSUFBSSxDQUFDQyxRQUFMLENBQWNWLGFBQWQsRUFBNkJLLFVBQTdCO0FBQ0FJLFFBQUFBLElBQUksQ0FBQ0MsUUFBTCxDQUFjUixjQUFkLEVBQThCRyxVQUE5QixFQWhCeUQsQ0FrQnpEOztBQUNBLGFBQUtNLFlBQUwsQ0FBa0IsWUFBWTtBQUM1QjtBQUNBRixVQUFBQSxJQUFJLENBQUNHLFdBQUwsQ0FBaUJULFlBQWpCLEVBQStCRSxVQUEvQixFQUEyQyxJQUEzQztBQUNBSSxVQUFBQSxJQUFJLENBQUNJLFFBQUw7QUFDRCxTQUppQixDQUloQkMsSUFKZ0IsQ0FJWCxJQUpXLENBQWxCLEVBSWMsSUFKZDtBQUtEO0FBQ0Y7QUFDRixHQXhETSxDQTBEUDs7QUExRE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHNwcml0ZUZyYW1lTGlzdDoge1xuICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH0sXG4gICBcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAvLyBvbkxvYWQgKCkge30sXG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuY2FuX2NvbmxsaXNpb24gPSB0cnVlXG4gIH0sXG4gIC8vIOaUueWPmOmihOWItuS9k+eahOiDjOaZr3Nwcml0RnJhbWUsIOi/meagt+S4jeeUqOWIm+W7uuWkmuS4qumihOWItuS9k1xuICBjaGFuZ2VTcHJpdGVGcmFtZSAoaSkge1xuICAgIGxldCBub2RlX3Nwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgIG5vZGVfc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUxpc3RbaV1cbiAgfSxcblxuICAvLyDnm7jlkIzlhYPntKDnorDmkp7lkI7mtojlpLFcbiAgLy8g5Y+q5Zyo5Lik5Liq56Kw5pKe5L2T5byA5aeL5o6l6Kem5pe26KKr6LCD55So5LiA5qyhXG4gIG9uQmVnaW5Db250YWN0OiBmdW5jdGlvbiAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgY29uc29sZS5sb2coJ+WPquWcqOS4pOS4queisOaSnuS9k+W8gOWni+aOpeinpuaXtuiiq+iwg+eUqOS4gOasoScpXG4gICAgbGV0IGpzX290aGVyQmxvY2sgPSBvdGhlckNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdibG9jaycpXG4gICAgaWYgKGpzX290aGVyQmxvY2sgJiYgdGhpcy5jYW5fY29ubGxpc2lvbikge1xuICAgICAgaWYgKHRoaXMubm9kZS5ibG9ja190eXBlID09IGpzX290aGVyQmxvY2subm9kZS5ibG9ja190eXBlKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbl9zZWxmID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcbiAgICAgICAgbGV0IHBvc2l0aW9uX290aGVyID0gb3RoZXJDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKClcbiAgICAgICAgbGV0IHBvc2l0aW9uX25ldyA9IHBvc2l0aW9uX3NlbGZcblxuICAgICAgICBpZiAocG9zaXRpb25fbmV3LnkgPiBwb3NpdGlvbl9vdGhlci55KSB7XG4gICAgICAgICAgcG9zaXRpb25fbmV3ID0gcG9zaXRpb25fb3RoZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlTnVtYmVyID0gTnVtYmVyKHRoaXMubm9kZS5ibG9ja190eXBlLnNwbGl0KCdrJylbMV0pXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KClcbiAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxuICAgICAgICB0aGlzLmNhbl9jb25sbGlzaW9uID0gZmFsc2VcbiAgICAgICAganNfb3RoZXJCbG9jay5jYW5fY29ubGxpc2lvbiA9IGZhbHNlXG5cbiAgICAgICAgbWFpbi5jcmVhdGVUeChwb3NpdGlvbl9zZWxmLCB0eXBlTnVtYmVyKVxuICAgICAgICBtYWluLmNyZWF0ZVR4KHBvc2l0aW9uX290aGVyLCB0eXBlTnVtYmVyKVxuXG4gICAgICAgIC8vIOWPquaJp+ihjOS4gOasoeeahOWumuaXtuWZqCAwLjE1c1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8g5ZyobWFpbi5qc+S4reeUs+aYjndpbmRvdy5tYWluID0gdGhpc1xuICAgICAgICAgIG1haW4uY3JlYXRlQmxvY2socG9zaXRpb25fbmV3LCB0eXBlTnVtYmVyLCB0cnVlKVxuICAgICAgICAgIG1haW4uYWRkU2NvcmUoKVxuICAgICAgICB9LmJpbmQodGhpcyksIDAuMTUpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=