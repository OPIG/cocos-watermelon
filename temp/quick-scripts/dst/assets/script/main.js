
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