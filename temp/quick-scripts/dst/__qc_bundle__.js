
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
    score_Label: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this = this;

    this.prefabList = [{
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
    }, {
      name: 'block7',
      size: 96
    }, {
      name: 'block8',
      size: 129
    }, {
      name: 'block9',
      size: 154
    }, {
      name: 'block10',
      size: 154
    }, {
      name: 'block11',
      size: 204
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
  createBlock: function createBlock(position, typeNumber) {
    if (typeNumber >= this.prefabList.length) {
      typeNumber = this.prefabList.length;
    }

    var block_Node = cc.instantiate(this.block1);
    block_Node.setPosition(cc.v2(position.x, position.y));
    block_Node.f_scale = 0.8;
    var fruit_sprit = block_Node.getComponent('block'); // 调用block.js方法修改sprite frame图片

    fruit_sprit.changeSpriteFrame(typeNumber);
    block_Node.block_type = 'block' + Number(typeNumber + 1);
    var physiscs_collider = block_Node.getComponent(cc.PhysicsCircleCollider);
    var size = this.prefabList.filter(function (item) {
      return item.name == block_Node.block_type;
    });
    physiscs_collider.radius = size[0].size;
    console.log(typeNumber, size[0]);
    block_Node.parent = this.node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmxvY2sxIiwiUHJlZmFiIiwic2NvcmVfTGFiZWwiLCJMYWJlbCIsIm9uTG9hZCIsInByZWZhYkxpc3QiLCJuYW1lIiwic2l6ZSIsIndpbmRvdyIsIm1haW4iLCJmX3NjYWxlIiwiY3VycmVudF9zY29yZSIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwibm9kZSIsIm9uIiwiZXZlbnQiLCJtb3VzZV9wb3NpdGlvbiIsImdldExvY2F0aW9uIiwid29ybGRfcG9zaXRpb24iLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInkiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjcmVhdGVCbG9jayIsInBvc2l0aW9uIiwidHlwZU51bWJlciIsImJsb2NrX05vZGUiLCJpbnN0YW50aWF0ZSIsInNldFBvc2l0aW9uIiwidjIiLCJ4IiwiZnJ1aXRfc3ByaXQiLCJnZXRDb21wb25lbnQiLCJjaGFuZ2VTcHJpdGVGcmFtZSIsImJsb2NrX3R5cGUiLCJOdW1iZXIiLCJwaHlzaXNjc19jb2xsaWRlciIsIlBoeXNpY3NDaXJjbGVDb2xsaWRlciIsImZpbHRlciIsIml0ZW0iLCJyYWRpdXMiLCJjb25zb2xlIiwibG9nIiwicGFyZW50IiwiYWRkU2NvcmUiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxNQUFNLEVBQUVKLEVBQUUsQ0FBQ0ssTUFERDtBQUVWQyxJQUFBQSxXQUFXLEVBQUVOLEVBQUUsQ0FBQ087QUFGTixHQUhMO0FBUVA7QUFFQUMsRUFBQUEsTUFWTyxvQkFVRztBQUFBOztBQUNSLFNB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QUFBLFdBQVcsQ0FBQ0UsaUJBQVosQ0FBOEJSLFVBQTlCO0FBQ0FDLElBQUFBLFVBQVUsQ0FBQ1EsVUFBWCxHQUF3QixVQUFVQyxNQUFNLENBQUNWLFVBQVUsR0FBRyxDQUFkLENBQXhDO0FBRUEsUUFBSVcsaUJBQWlCLEdBQUdWLFVBQVUsQ0FBQ00sWUFBWCxDQUF3QnpDLEVBQUUsQ0FBQzhDLHFCQUEzQixDQUF4QjtBQUNBLFFBQUluQyxJQUFJLEdBQUcsS0FBS0YsVUFBTCxDQUFnQnNDLE1BQWhCLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUMxQyxhQUFPQSxJQUFJLENBQUN0QyxJQUFMLElBQWF5QixVQUFVLENBQUNRLFVBQS9CO0FBQ0QsS0FGVSxDQUFYO0FBSUFFLElBQUFBLGlCQUFpQixDQUFDSSxNQUFsQixHQUEyQnRDLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUEsSUFBbkM7QUFDQXVDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZakIsVUFBWixFQUF3QnZCLElBQUksQ0FBQyxDQUFELENBQTVCO0FBRUF3QixJQUFBQSxVQUFVLENBQUNpQixNQUFYLEdBQW9CLEtBQUtqQyxJQUF6QjtBQUNELEdBaEdNO0FBaUdQa0MsRUFBQUEsUUFqR08sc0JBaUdHO0FBQ1IsU0FBS3RDLGFBQUwsSUFBc0IsQ0FBdEI7QUFDQSxTQUFLVCxXQUFMLENBQWlCZ0QsTUFBakIsR0FBMEIsS0FBS3ZDLGFBQS9CO0FBQ0Q7QUFwR00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgYmxvY2sxOiBjYy5QcmVmYWIsXHJcbiAgICBzY29yZV9MYWJlbDogY2MuTGFiZWxcclxuICB9LFxyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgb25Mb2FkICgpIHtcclxuICAgIHRoaXMucHJlZmFiTGlzdCA9IFt7XHJcbiAgICAgIG5hbWU6ICdibG9jazEnLFxyXG4gICAgICBzaXplOiAyNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrMicsXHJcbiAgICAgIHNpemU6IDQwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmxvY2szJyxcclxuICAgICAgc2l6ZTogNTRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazQnLFxyXG4gICAgICBzaXplOiA1OVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrNScsXHJcbiAgICAgIHNpemU6IDc2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnYmxvY2s2JyxcclxuICAgICAgc2l6ZTogOTFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazcnLFxyXG4gICAgICBzaXplOiA5NlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrOCcsXHJcbiAgICAgIHNpemU6IDEyOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrOScsXHJcbiAgICAgIHNpemU6IDE1NFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Jsb2NrMTAnLFxyXG4gICAgICBzaXplOiAxNTRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdibG9jazExJyxcclxuICAgICAgc2l6ZTogMjA0XHJcbiAgICB9XVxyXG5cclxuICAgIHdpbmRvdy5tYWluID0gdGhpc1xyXG4gICAgdGhpcy5mX3NjYWxlID0gMC44IC8vIOaVtOS9k+e8qeWwjzAuOFxyXG5cclxuICAgIHRoaXMuY3VycmVudF9zY29yZSA9IDBcclxuXHJcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG4gICAgICBsZXQgbW91c2VfcG9zaXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgIGxldCB3b3JsZF9wb3NpdGlvbiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihtb3VzZV9wb3NpdGlvbilcclxuICAgICAgd29ybGRfcG9zaXRpb24ueSA9IDUwMFxyXG4gICAgICBsZXQgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMucHJlZmFiTGlzdC5sZW5ndGggLSA1KSlcclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlQmxvY2sod29ybGRfcG9zaXRpb24sIHJhbmRvbU51bSlcclxuICAgIH0pXHJcbiAgfSxcclxuXHJcbiAgLy8gY3JlYXRlIGJsb2NrXHJcbiAgY3JlYXRlQmxvY2sgKHBvc2l0aW9uLCB0eXBlTnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZU51bWJlciA+PSB0aGlzLnByZWZhYkxpc3QubGVuZ3RoKSB7XHJcbiAgICAgIHR5cGVOdW1iZXIgPSB0aGlzLnByZWZhYkxpc3QubGVuZ3RoXHJcbiAgICB9XHJcbiAgICBsZXQgYmxvY2tfTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmxvY2sxKVxyXG4gICAgYmxvY2tfTm9kZS5zZXRQb3NpdGlvbihjYy52Mihwb3NpdGlvbi54LCBwb3NpdGlvbi55KSlcclxuICAgIGJsb2NrX05vZGUuZl9zY2FsZSA9IDAuOCBcclxuXHJcbiAgICBsZXQgZnJ1aXRfc3ByaXQgPSBibG9ja19Ob2RlLmdldENvbXBvbmVudCgnYmxvY2snKVxyXG4gICAgLy8g6LCD55SoYmxvY2suanPmlrnms5Xkv67mlLlzcHJpdGUgZnJhbWXlm77niYdcclxuICAgIGZydWl0X3Nwcml0LmNoYW5nZVNwcml0ZUZyYW1lKHR5cGVOdW1iZXIpXHJcbiAgICBibG9ja19Ob2RlLmJsb2NrX3R5cGUgPSAnYmxvY2snICsgTnVtYmVyKHR5cGVOdW1iZXIgKyAxKVxyXG5cclxuICAgIGxldCBwaHlzaXNjc19jb2xsaWRlciA9IGJsb2NrX05vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcilcclxuICAgIGxldCBzaXplID0gdGhpcy5wcmVmYWJMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlbS5uYW1lID09IGJsb2NrX05vZGUuYmxvY2tfdHlwZVxyXG4gICAgfSlcclxuXHJcbiAgICBwaHlzaXNjc19jb2xsaWRlci5yYWRpdXMgPSBzaXplWzBdLnNpemVcclxuICAgIGNvbnNvbGUubG9nKHR5cGVOdW1iZXIsIHNpemVbMF0pO1xyXG5cclxuICAgIGJsb2NrX05vZGUucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgfSxcclxuICBhZGRTY29yZSgpe1xyXG4gICAgdGhpcy5jdXJyZW50X3Njb3JlICs9IDFcclxuICAgIHRoaXMuc2NvcmVfTGFiZWwuc3RyaW5nID0gdGhpcy5jdXJyZW50X3Njb3JlXHJcbiAgfVxyXG59KTtcclxuIl19
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
//------QC-SOURCE-SPLIT------
