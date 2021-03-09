
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvbWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJsb2NrMSIsIlByZWZhYiIsInNjb3JlX0xhYmVsIiwiTGFiZWwiLCJielByZWZhYiIsIm9uTG9hZCIsInByZWZhYkxpc3QiLCJuYW1lIiwic2l6ZSIsImNvbG9yIiwid2luZG93IiwibWFpbiIsImZfc2NhbGUiLCJjdXJyZW50X3Njb3JlIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJub2RlIiwib24iLCJldmVudCIsIm1vdXNlX3Bvc2l0aW9uIiwiZ2V0TG9jYXRpb24iLCJ3b3JsZF9wb3NpdGlvbiIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieSIsInJhbmRvbU51bSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNyZWF0ZUJsb2NrIiwicG9zaXRpb24iLCJ0eXBlTnVtYmVyIiwiaXNTY2FsZSIsImJsb2NrX05vZGUiLCJpbnN0YW50aWF0ZSIsInNldFBvc2l0aW9uIiwidjIiLCJ4Iiwic2NhbGUiLCJhY3QiLCJzY2FsZVRvIiwicnVuQWN0aW9uIiwiZnJ1aXRfc3ByaXQiLCJnZXRDb21wb25lbnQiLCJjaGFuZ2VTcHJpdGVGcmFtZSIsImJsb2NrX3R5cGUiLCJOdW1iZXIiLCJwaHlzaXNjc19jb2xsaWRlciIsIlBoeXNpY3NDaXJjbGVDb2xsaWRlciIsImZydWl0SXRlbSIsImZpbHRlciIsIml0ZW0iLCJyYWRpdXMiLCJjb25zb2xlIiwibG9nIiwicGFyZW50IiwiY3JlYXRlVHgiLCJiek5vZGUiLCJDb2xvciIsInR3ZWVuIiwidG8iLCJjYWxsIiwicmVtb3ZlRnJvbVBhcmVudCIsInN0YXJ0IiwiYWRkU2NvcmUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxT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RUFBa0JQLFFBQVEsQ0FBQ1AsQ0FBM0IsQ0FBbkI7QUFDQWtDLElBQUFBLE1BQU0sQ0FBQ0YsTUFBUCxHQUFnQixLQUFLdkMsSUFBckI7QUFDQXlDLElBQUFBLE1BQU0sQ0FBQ25CLEtBQVAsR0FBZSxDQUFmO0FBRUEsUUFBSVcsU0FBUyxHQUFHLEtBQUs1QyxVQUFMLENBQWdCNkMsTUFBaEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQy9DLGFBQU9BLElBQUksQ0FBQzdDLElBQUwsSUFBYSxVQUFVd0MsTUFBTSxDQUFDZixVQUFVLEdBQUcsQ0FBZCxDQUFwQztBQUNELEtBRmUsQ0FBaEI7QUFJQTBCLElBQUFBLE1BQU0sQ0FBQ2pELEtBQVAsR0FBZSxJQUFJYixFQUFFLENBQUMrRCxLQUFQLENBQWFULFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXpDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBYixFQUFtQ3lDLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYXpDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBbkMsRUFBeUR5QyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWF6QyxLQUFiLENBQW1CLENBQW5CLENBQXpELENBQWY7QUFFQWIsSUFBQUEsRUFBRSxDQUFDZ0UsS0FBSCxDQUFTRixNQUFULEVBQWlCRyxFQUFqQixDQUFvQixHQUFwQixFQUF5QjtBQUFDdEIsTUFBQUEsS0FBSyxFQUFDO0FBQVAsS0FBekIsRUFBc0N1QixJQUF0QyxDQUEyQyxZQUFJO0FBQzdDSixNQUFBQSxNQUFNLENBQUNLLGdCQUFQO0FBQ0QsS0FGRCxFQUVHQyxLQUZIO0FBR0QsR0FwSU07QUFxSVBDLEVBQUFBLFFBcklPLHNCQXFJRztBQUNSLFNBQUtwRCxhQUFMLElBQXNCLENBQXRCO0FBQ0EsU0FBS1gsV0FBTCxDQUFpQmdFLE1BQWpCLEdBQTBCLEtBQUtyRCxhQUEvQjtBQUNEO0FBeElNLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICBibG9jazE6IGNjLlByZWZhYixcbiAgICBzY29yZV9MYWJlbDogY2MuTGFiZWwsXG4gICAgYnpQcmVmYWI6IGNjLlByZWZhYlxuICB9LFxuXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gIG9uTG9hZCAoKSB7XG4gICAgdGhpcy5wcmVmYWJMaXN0ID0gW3tcbiAgICAgIG5hbWU6ICdibG9jazEnLFxuICAgICAgc2l6ZTogMjYsXG4gICAgICBjb2xvcjogWzExMCwxNiwxMDBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYmxvY2syJyxcbiAgICAgIHNpemU6IDQwLFxuICAgICAgY29sb3I6IFsyNTUsOSwzNl1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdibG9jazMnLFxuICAgICAgc2l6ZTogNTQsXG4gICAgICBjb2xvcjogWzI1MywxMSwxXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Jsb2NrNCcsXG4gICAgICBzaXplOiA1OSxcbiAgICAgIGNvbG9yOiBbMjU1LDIzMCwyM11cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdibG9jazUnLFxuICAgICAgc2l6ZTogNzYsXG4gICAgICBjb2xvcjogWzExMCwxNiwxMDBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYmxvY2s2JyxcbiAgICAgIHNpemU6IDkxLFxuICAgICAgY29sb3I6IFsxMTAsMTYsMTAwXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Jsb2NrNycsXG4gICAgICBzaXplOiA5NixcbiAgICAgIGNvbG9yOiBbMTEwLDE2LDEwMF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdibG9jazgnLFxuICAgICAgc2l6ZTogMTI5LFxuICAgICAgY29sb3I6IFsxMTAsMTYsMTAwXVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2Jsb2NrOScsXG4gICAgICBzaXplOiAxNTQsXG4gICAgICBjb2xvcjogWzExMCwxNiwxMDBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYmxvY2sxMCcsXG4gICAgICBzaXplOiAxNTQsXG4gICAgICBjb2xvcjogWzExMCwxNiwxMDBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYmxvY2sxMScsXG4gICAgICBzaXplOiAyMDQsXG4gICAgICBjb2xvcjogWzExMCwxNiwxMDBdXG4gICAgfV1cblxuICAgIHdpbmRvdy5tYWluID0gdGhpc1xuICAgIHRoaXMuZl9zY2FsZSA9IDAuOCAvLyDmlbTkvZPnvKnlsI8wLjhcblxuICAgIHRoaXMuY3VycmVudF9zY29yZSA9IDBcblxuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBtb3VzZV9wb3NpdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKClcbiAgICAgIGxldCB3b3JsZF9wb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihtb3VzZV9wb3NpdGlvbilcbiAgICAgIHdvcmxkX3Bvc2l0aW9uLnkgPSA1MDBcbiAgICAgIGxldCByYW5kb21OdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5wcmVmYWJMaXN0Lmxlbmd0aCAtIDUpKVxuXG4gICAgICB0aGlzLmNyZWF0ZUJsb2NrKHdvcmxkX3Bvc2l0aW9uLCByYW5kb21OdW0pXG4gICAgfSlcbiAgfSxcblxuICAvLyBjcmVhdGUgYmxvY2tcbiAgY3JlYXRlQmxvY2sgKHBvc2l0aW9uLCB0eXBlTnVtYmVyLCBpc1NjYWxlPWZhbHNlKSB7XG4gICAgaWYgKHR5cGVOdW1iZXIgPj0gdGhpcy5wcmVmYWJMaXN0Lmxlbmd0aCkge1xuICAgICAgdHlwZU51bWJlciA9IHRoaXMucHJlZmFiTGlzdC5sZW5ndGhcbiAgICB9XG4gICAgbGV0IGJsb2NrX05vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrMSlcbiAgICBibG9ja19Ob2RlLnNldFBvc2l0aW9uKGNjLnYyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpKVxuXG4gICAgYmxvY2tfTm9kZS5zY2FsZSA9IHRoaXMuZl9zY2FsZVxuXG4gICAgaWYoaXNTY2FsZSkge1xuICAgICAgYmxvY2tfTm9kZS5zY2FsZSA9IDAuM1xuICAgICAgbGV0IGFjdCA9IGNjLnNjYWxlVG8oMC4xNSwgdGhpcy5mX3NjYWxlKVxuICAgICAgYmxvY2tfTm9kZS5ydW5BY3Rpb24oYWN0KVxuICAgICAgLy8gY2MudHdlZW4oYmxvY2tfTm9kZSkudG8oMC4xNSwge3NjYWxlOiAxfSlcbiAgICB9XG5cbiAgICBsZXQgZnJ1aXRfc3ByaXQgPSBibG9ja19Ob2RlLmdldENvbXBvbmVudCgnYmxvY2snKVxuICAgIC8vIOiwg+eUqGJsb2NrLmpz5pa55rOV5L+u5pS5c3ByaXRlIGZyYW1l5Zu+54mHXG4gICAgZnJ1aXRfc3ByaXQuY2hhbmdlU3ByaXRlRnJhbWUodHlwZU51bWJlcilcbiAgICBibG9ja19Ob2RlLmJsb2NrX3R5cGUgPSAnYmxvY2snICsgTnVtYmVyKHR5cGVOdW1iZXIgKyAxKVxuXG4gICAgbGV0IHBoeXNpc2NzX2NvbGxpZGVyID0gYmxvY2tfTm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKVxuICAgIGxldCBmcnVpdEl0ZW0gPSB0aGlzLnByZWZhYkxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5uYW1lID09IGJsb2NrX05vZGUuYmxvY2tfdHlwZVxuICAgIH0pXG5cbiAgICBwaHlzaXNjc19jb2xsaWRlci5yYWRpdXMgPSBmcnVpdEl0ZW1bMF0uc2l6ZVxuICAgIGNvbnNvbGUubG9nKHR5cGVOdW1iZXIsIGZydWl0SXRlbVswXSk7XG5cbiAgICBibG9ja19Ob2RlLnBhcmVudCA9IHRoaXMubm9kZVxuICB9LFxuICBjcmVhdGVUeChwb3NpdGlvbiwgdHlwZU51bWJlcil7XG4gICAgbGV0IGJ6Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnpQcmVmYWIpXG4gICAgYnpOb2RlLnNldFBvc2l0aW9uKGNjLnYyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpKVxuICAgIGJ6Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICBiek5vZGUuc2NhbGUgPSAwXG5cbiAgICBsZXQgZnJ1aXRJdGVtID0gdGhpcy5wcmVmYWJMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PSAnYmxvY2snICsgTnVtYmVyKHR5cGVOdW1iZXIgKyAxKVxuICAgIH0pXG5cbiAgICBiek5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoZnJ1aXRJdGVtWzBdLmNvbG9yWzBdLGZydWl0SXRlbVswXS5jb2xvclsxXSxmcnVpdEl0ZW1bMF0uY29sb3JbMl0pXG5cbiAgICBjYy50d2Vlbihiek5vZGUpLnRvKDAuMSwge3NjYWxlOjAuMn0pLmNhbGwoKCk9PntcbiAgICAgIGJ6Tm9kZS5yZW1vdmVGcm9tUGFyZW50KClcbiAgICB9KS5zdGFydCgpXG4gIH0sXG4gIGFkZFNjb3JlKCl7XG4gICAgdGhpcy5jdXJyZW50X3Njb3JlICs9IDFcbiAgICB0aGlzLnNjb3JlX0xhYmVsLnN0cmluZyA9IHRoaXMuY3VycmVudF9zY29yZVxuICB9XG59KTtcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvYmxvY2suanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcHJpdGVGcmFtZUxpc3QiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsImNhbl9jb25sbGlzaW9uIiwiY2hhbmdlU3ByaXRlRnJhbWUiLCJpIiwibm9kZV9zcHJpdGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJvbkJlZ2luQ29udGFjdCIsImNvbnRhY3QiLCJzZWxmQ29sbGlkZXIiLCJvdGhlckNvbGxpZGVyIiwiY29uc29sZSIsImxvZyIsImpzX290aGVyQmxvY2siLCJibG9ja190eXBlIiwicG9zaXRpb25fc2VsZiIsImdldFBvc2l0aW9uIiwicG9zaXRpb25fb3RoZXIiLCJwb3NpdGlvbl9uZXciLCJ5IiwidHlwZU51bWJlciIsIk51bWJlciIsInNwbGl0IiwicmVtb3ZlRnJvbVBhcmVudCIsIm1haW4iLCJjcmVhdGVUeCIsInNjaGVkdWxlT25jZSIsImNyZWF0ZUJsb2NrIiwiYWRkU2NvcmUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2ZDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxXQURNO0FBRWYsaUJBQVM7QUFGTTtBQURQLEdBSEw7QUFXUDtBQUVBO0FBRUFDLEVBQUFBLEtBZk8sbUJBZUU7QUFDUCxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0QsR0FqQk07QUFrQlA7QUFDQUMsRUFBQUEsaUJBbkJPLDZCQW1CWUMsQ0FuQlosRUFtQmU7QUFDcEIsUUFBSUMsV0FBVyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmIsRUFBRSxDQUFDYyxNQUExQixDQUFsQjtBQUNBSCxJQUFBQSxXQUFXLENBQUNJLFdBQVosR0FBMEIsS0FBS1gsZUFBTCxDQUFxQk0sQ0FBckIsQ0FBMUI7QUFDRCxHQXRCTTtBQXdCUDtBQUNBO0FBQ0FNLEVBQUFBLGNBQWMsRUFBRSx3QkFBVUMsT0FBVixFQUFtQkMsWUFBbkIsRUFBaUNDLGFBQWpDLEVBQWdEO0FBQzlEQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFFBQUlDLGFBQWEsR0FBR0gsYUFBYSxDQUFDUCxJQUFkLENBQW1CQyxZQUFuQixDQUFnQyxPQUFoQyxDQUFwQjs7QUFDQSxRQUFJUyxhQUFhLElBQUksS0FBS2QsY0FBMUIsRUFBMEM7QUFDeEMsVUFBSSxLQUFLSSxJQUFMLENBQVVXLFVBQVYsSUFBd0JELGFBQWEsQ0FBQ1YsSUFBZCxDQUFtQlcsVUFBL0MsRUFBMkQ7QUFDekQsWUFBSUMsYUFBYSxHQUFHLEtBQUtaLElBQUwsQ0FBVWEsV0FBVixFQUFwQjtBQUNBLFlBQUlDLGNBQWMsR0FBR1AsYUFBYSxDQUFDUCxJQUFkLENBQW1CYSxXQUFuQixFQUFyQjtBQUNBLFlBQUlFLFlBQVksR0FBR0gsYUFBbkI7O0FBRUEsWUFBSUcsWUFBWSxDQUFDQyxDQUFiLEdBQWlCRixjQUFjLENBQUNFLENBQXBDLEVBQXVDO0FBQ3JDRCxVQUFBQSxZQUFZLEdBQUdELGNBQWY7QUFDRDs7QUFFRCxZQUFJRyxVQUFVLEdBQUdDLE1BQU0sQ0FBQyxLQUFLbEIsSUFBTCxDQUFVVyxVQUFWLENBQXFCUSxLQUFyQixDQUEyQixHQUEzQixFQUFnQyxDQUFoQyxDQUFELENBQXZCO0FBQ0EsYUFBS25CLElBQUwsQ0FBVW9CLGdCQUFWO0FBQ0FiLFFBQUFBLGFBQWEsQ0FBQ1AsSUFBZCxDQUFtQm9CLGdCQUFuQjtBQUNBLGFBQUt4QixjQUFMLEdBQXNCLEtBQXRCO0FBQ0FjLFFBQUFBLGFBQWEsQ0FBQ2QsY0FBZCxHQUErQixLQUEvQjtBQUVBeUIsUUFBQUEsSUFBSSxDQUFDQyxRQUFMLENBQWNWLGFBQWQsRUFBNkJLLFVBQTdCO0FBQ0FJLFFBQUFBLElBQUksQ0FBQ0MsUUFBTCxDQUFjUixjQUFkLEVBQThCRyxVQUE5QixFQWhCeUQsQ0FrQnpEOztBQUNBLGFBQUtNLFlBQUwsQ0FBa0IsWUFBWTtBQUM1QjtBQUNBRixVQUFBQSxJQUFJLENBQUNHLFdBQUwsQ0FBaUJULFlBQWpCLEVBQStCRSxVQUEvQixFQUEyQyxJQUEzQztBQUNBSSxVQUFBQSxJQUFJLENBQUNJLFFBQUw7QUFDRCxTQUppQixDQUloQkMsSUFKZ0IsQ0FJWCxJQUpXLENBQWxCLEVBSWMsSUFKZDtBQUtEO0FBQ0Y7QUFDRixHQXhETSxDQTBEUDs7QUExRE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIHNwcml0ZUZyYW1lTGlzdDoge1xuICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICBkZWZhdWx0OiBbXVxuICAgIH0sXG4gICBcbiAgfSxcblxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAvLyBvbkxvYWQgKCkge30sXG5cbiAgc3RhcnQgKCkge1xuICAgIHRoaXMuY2FuX2NvbmxsaXNpb24gPSB0cnVlXG4gIH0sXG4gIC8vIOaUueWPmOmihOWItuS9k+eahOiDjOaZr3Nwcml0RnJhbWUsIOi/meagt+S4jeeUqOWIm+W7uuWkmuS4qumihOWItuS9k1xuICBjaGFuZ2VTcHJpdGVGcmFtZSAoaSkge1xuICAgIGxldCBub2RlX3Nwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgIG5vZGVfc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZUxpc3RbaV1cbiAgfSxcblxuICAvLyDnm7jlkIzlhYPntKDnorDmkp7lkI7mtojlpLFcbiAgLy8g5Y+q5Zyo5Lik5Liq56Kw5pKe5L2T5byA5aeL5o6l6Kem5pe26KKr6LCD55So5LiA5qyhXG4gIG9uQmVnaW5Db250YWN0OiBmdW5jdGlvbiAoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgY29uc29sZS5sb2coJ+WPquWcqOS4pOS4queisOaSnuS9k+W8gOWni+aOpeinpuaXtuiiq+iwg+eUqOS4gOasoScpXG4gICAgbGV0IGpzX290aGVyQmxvY2sgPSBvdGhlckNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KCdibG9jaycpXG4gICAgaWYgKGpzX290aGVyQmxvY2sgJiYgdGhpcy5jYW5fY29ubGxpc2lvbikge1xuICAgICAgaWYgKHRoaXMubm9kZS5ibG9ja190eXBlID09IGpzX290aGVyQmxvY2subm9kZS5ibG9ja190eXBlKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbl9zZWxmID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcbiAgICAgICAgbGV0IHBvc2l0aW9uX290aGVyID0gb3RoZXJDb2xsaWRlci5ub2RlLmdldFBvc2l0aW9uKClcbiAgICAgICAgbGV0IHBvc2l0aW9uX25ldyA9IHBvc2l0aW9uX3NlbGZcblxuICAgICAgICBpZiAocG9zaXRpb25fbmV3LnkgPiBwb3NpdGlvbl9vdGhlci55KSB7XG4gICAgICAgICAgcG9zaXRpb25fbmV3ID0gcG9zaXRpb25fb3RoZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlTnVtYmVyID0gTnVtYmVyKHRoaXMubm9kZS5ibG9ja190eXBlLnNwbGl0KCdrJylbMV0pXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KClcbiAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKVxuICAgICAgICB0aGlzLmNhbl9jb25sbGlzaW9uID0gZmFsc2VcbiAgICAgICAganNfb3RoZXJCbG9jay5jYW5fY29ubGxpc2lvbiA9IGZhbHNlXG5cbiAgICAgICAgbWFpbi5jcmVhdGVUeChwb3NpdGlvbl9zZWxmLCB0eXBlTnVtYmVyKVxuICAgICAgICBtYWluLmNyZWF0ZVR4KHBvc2l0aW9uX290aGVyLCB0eXBlTnVtYmVyKVxuXG4gICAgICAgIC8vIOWPquaJp+ihjOS4gOasoeeahOWumuaXtuWZqCAwLjE1c1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8g5ZyobWFpbi5qc+S4reeUs+aYjndpbmRvdy5tYWluID0gdGhpc1xuICAgICAgICAgIG1haW4uY3JlYXRlQmxvY2socG9zaXRpb25fbmV3LCB0eXBlTnVtYmVyLCB0cnVlKVxuICAgICAgICAgIG1haW4uYWRkU2NvcmUoKVxuICAgICAgICB9LmJpbmQodGhpcyksIDAuMTUpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
