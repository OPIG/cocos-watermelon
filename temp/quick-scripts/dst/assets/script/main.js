
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

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    block_generate: cc.Node,
    collider: cc.BoxCollider
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
  },
  start: function start() {
    var _this = this;

    cc.director.getCollisionManager().enabled = true;
    this.collider.node.on(cc.Node.EventType.TOUCH_START, function (touch, event) {
      var touchLoc = touch.getLocation();

      if (cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points)) {
        console.log('hit');
      } else {
        console.log('no hit');
      }
    }, this);
    console.log(1);
    this.node.on('touchstart', function (event) {
      var point = event.getLocation(); // console.table(point)

      var point_node = _this.node.convertToNodeSpaceAR(point);

      var point_node1 = _this.node.convertToWorldSpaceAR(point); // console.table(point_node)
      // console.table(point_node1)


      _this.block_generate.setPosition(cc.v2(point_node.x, point_node.y));
    });
  },
  // update (dt) {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    console.log('collision');
  },
  onCollisionExit: function onCollisionExit(other, self) {
    console.log('collision exit');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmxvY2tfZ2VuZXJhdGUiLCJOb2RlIiwiY29sbGlkZXIiLCJCb3hDb2xsaWRlciIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwic3RhcnQiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaCIsImV2ZW50IiwidG91Y2hMb2MiLCJnZXRMb2NhdGlvbiIsIkludGVyc2VjdGlvbiIsInBvaW50SW5Qb2x5Z29uIiwid29ybGQiLCJwb2ludHMiLCJjb25zb2xlIiwibG9nIiwicG9pbnQiLCJwb2ludF9ub2RlIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJwb2ludF9ub2RlMSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInNldFBvc2l0aW9uIiwidjIiLCJ4IiwieSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJvbkNvbGxpc2lvbkV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxjQUFjLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEVDtBQUVWQyxJQUFBQSxRQUFRLEVBQUVOLEVBQUUsQ0FBQ087QUFGSCxHQUhQO0FBUUw7QUFFQUMsRUFBQUEsTUFWSyxvQkFVSztBQUNSUixJQUFBQSxFQUFFLENBQUNTLFFBQUgsQ0FBWUMsaUJBQVosR0FBZ0NDLE9BQWhDLEdBQTBDLElBQTFDO0FBRUQsR0FiSTtBQWVMQyxFQUFBQSxLQWZLLG1CQWVJO0FBQUE7O0FBQ1BaLElBQUFBLEVBQUUsQ0FBQ1MsUUFBSCxDQUFZSSxtQkFBWixHQUFrQ0YsT0FBbEMsR0FBNEMsSUFBNUM7QUFFQSxTQUFLTCxRQUFMLENBQWNRLElBQWQsQ0FBbUJDLEVBQW5CLENBQXNCZixFQUFFLENBQUNLLElBQUgsQ0FBUVcsU0FBUixDQUFrQkMsV0FBeEMsRUFBcUQsVUFBU0MsS0FBVCxFQUFnQkMsS0FBaEIsRUFBdUI7QUFDMUUsVUFBSUMsUUFBUSxHQUFHRixLQUFLLENBQUNHLFdBQU4sRUFBZjs7QUFFQSxVQUFHckIsRUFBRSxDQUFDc0IsWUFBSCxDQUFnQkMsY0FBaEIsQ0FBK0JILFFBQS9CLEVBQXlDLEtBQUtkLFFBQUwsQ0FBY2tCLEtBQWQsQ0FBb0JDLE1BQTdELENBQUgsRUFBeUU7QUFDdkVDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDRCxPQUZELE1BRUs7QUFDSEQsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0YsS0FSRCxFQVFHLElBUkg7QUFVQUQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksQ0FBWjtBQUNBLFNBQUtiLElBQUwsQ0FBVUMsRUFBVixDQUFhLFlBQWIsRUFBMkIsVUFBQ0ksS0FBRCxFQUFTO0FBQ2xDLFVBQUlTLEtBQUssR0FBR1QsS0FBSyxDQUFDRSxXQUFOLEVBQVosQ0FEa0MsQ0FFbEM7O0FBQ0EsVUFBSVEsVUFBVSxHQUFHLEtBQUksQ0FBQ2YsSUFBTCxDQUFVZ0Isb0JBQVYsQ0FBK0JGLEtBQS9CLENBQWpCOztBQUNBLFVBQUlHLFdBQVcsR0FBRyxLQUFJLENBQUNqQixJQUFMLENBQVVrQixxQkFBVixDQUFnQ0osS0FBaEMsQ0FBbEIsQ0FKa0MsQ0FLbEM7QUFDQTs7O0FBQ0EsTUFBQSxLQUFJLENBQUN4QixjQUFMLENBQW9CNkIsV0FBcEIsQ0FBZ0NqQyxFQUFFLENBQUNrQyxFQUFILENBQU1MLFVBQVUsQ0FBQ00sQ0FBakIsRUFBb0JOLFVBQVUsQ0FBQ08sQ0FBL0IsQ0FBaEM7QUFDRCxLQVJEO0FBU0QsR0F0Q0k7QUF3Q0w7QUFDQUMsRUFBQUEsZ0JBQWdCLEVBQUMsMEJBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQ3JDYixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsR0EzQ0k7QUE0Q0xhLEVBQUFBLGVBQWUsRUFBRSx5QkFBU0YsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0I7QUFDckNiLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7QUE5Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBibG9ja19nZW5lcmF0ZTogY2MuTm9kZSxcclxuICAgICAgY29sbGlkZXI6IGNjLkJveENvbGxpZGVyXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5jb2xsaWRlci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbih0b3VjaCwgZXZlbnQpIHtcclxuICAgICAgICBsZXQgdG91Y2hMb2MgPSB0b3VjaC5nZXRMb2NhdGlvbigpXHJcblxyXG4gICAgICAgIGlmKGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbih0b3VjaExvYywgdGhpcy5jb2xsaWRlci53b3JsZC5wb2ludHMpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnaGl0Jyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbm8gaGl0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coMSk7XHJcbiAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIChldmVudCk9PntcclxuICAgICAgICBsZXQgcG9pbnQgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgLy8gY29uc29sZS50YWJsZShwb2ludClcclxuICAgICAgICBsZXQgcG9pbnRfbm9kZSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludClcclxuICAgICAgICBsZXQgcG9pbnRfbm9kZTEgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHBvaW50KVxyXG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUocG9pbnRfbm9kZSlcclxuICAgICAgICAvLyBjb25zb2xlLnRhYmxlKHBvaW50X25vZGUxKVxyXG4gICAgICAgIHRoaXMuYmxvY2tfZ2VuZXJhdGUuc2V0UG9zaXRpb24oY2MudjIocG9pbnRfbm9kZS54LCBwb2ludF9ub2RlLnkpKVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6ZnVuY3Rpb24ob3RoZXIsIHNlbGYpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2NvbGxpc2lvbicpO1xyXG4gICAgfSxcclxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24ob3RoZXIsIHNlbGYpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2NvbGxpc2lvbiBleGl0Jyk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=