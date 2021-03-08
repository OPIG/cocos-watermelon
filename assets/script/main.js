// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
      block_generate: cc.Node,
      collider: cc.BoxCollider
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      cc.director.getPhysicsManager().enabled = true;
     
    },

    start () {
      cc.director.getCollisionManager().enabled = true;

      this.collider.node.on(cc.Node.EventType.TOUCH_START, function(touch, event) {
        let touchLoc = touch.getLocation()

        if(cc.Intersection.pointInPolygon(touchLoc, this.collider.world.points)) {
          console.log('hit');
        }else{
          console.log('no hit');
        }
      }, this)

      console.log(1);
      this.node.on('touchstart', (event)=>{
        let point = event.getLocation()
        // console.table(point)
        let point_node = this.node.convertToNodeSpaceAR(point)
        let point_node1 = this.node.convertToWorldSpaceAR(point)
        // console.table(point_node)
        // console.table(point_node1)
        this.block_generate.setPosition(cc.v2(point_node.x, point_node.y))
      })
    },

    // update (dt) {},
    onCollisionEnter:function(other, self) {
      console.log('collision');
    },
    onCollisionExit: function(other, self) {
      console.log('collision exit');
    }
});
