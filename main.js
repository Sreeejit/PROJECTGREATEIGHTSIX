canvas = new fabric.Canvas("myCanvas");
block_img_width = 30;
block_img_height = 30;
player_x = 10;
player_y = 10;
player_object = "";
block_object = "";
function player_update(){
fabric.Image.fromURL("player.png", function(Img){
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object)
});
}


function new_image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
     block_object = Img;
    
    block_object.scaleToWidth(150);
    block_object.scaleToHeight(140);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object)
    });
    }

