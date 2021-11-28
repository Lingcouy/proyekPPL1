var loadFile = function(event) {
    var canvas = document.getElementById("canvas");
    
    function getPosition(obj) {
      var right = 0,
      down = 0;
      if (obj.offsetParent) {
        do {
          right += obj.offsetLeft;
          down += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return {
          x: right,
          y: down
        };
      }
      return undefined;
    }
    
    function rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255)
        throw "color component not found";
        return ((r << 16) | (g << 8) | b).toString(16);
      }
    
      function drawImageFromWebUrl(sourceurl) {
        var img = new Image();
        img.addEventListener("load", function() {
          canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
        });
        img.setAttribute("src", sourceurl);
      }
      var image = document.getElementById('output');
      drawImageFromWebUrl(URL.createObjectURL(event.target.files[0]));
    
      
      canvas.addEventListener("mousemove", function(e) {
        var pos = getPosition(this);
        var x = e.pageX - pos.x;
        var y = e.pageY - pos.y;
        //var coord = "coordinate : ("+x+","+y+")";
        var c = this.getContext('2d');
        var p = c.getImageData(1, 1, 1, 1);
        var red = p.data[0];
        var green = p.data[1];
        var blue = p.data[2];
        //var alpha = p.data[3];
        var hex = "#" + ("000000" + rgbToHex(red, green, blue)).slice(-6);
        document.getElementById("show").innerHTML="hex : "+hex;
        document.getElementById("show2").innerHTML="rgb : "+"("+red+", "+green+", "+blue+")";
        // document.getElementById("show3").innerHTML= hasil;
        //document.getElementById("status").innerHTML = coord;
        document.getElementById("color").style.backgroundColor = hex;
        var datauji=[
          [0, 237, 28, 36],
          [1, 255, 90, 54],
          [2, 255, 153, 51],
          [3, 255, 196, 12],
          [4, 209, 226, 49],
          [5, 154, 205, 50],
          [6, 76, 187, 23],
          [7, 0, 144, 0],
          [8, 0, 158, 96],
          [9, 10, 186, 181],
          [10, 0, 135, 189],
          [11, 15, 82, 186],
          [12, 55, 36, 180],
          [13, 69, 23, 183],
          [14, 50, 18, 122],
          [0,231,27,36],          
          [1,250,84,36],
          [2,255,164,37],
          [3,255,205,22],
          [4,221,223,38],
          [5,148,214,29],
          [6,76,181,0],
          [7,0,156,13],
          [8,0,166,92],
          [9,0,191,184],
          [10,1,136,200],
          [11,0,76,198],
          [12,51,38,180],
          [13,72,22,181],
          [14,57,17,140],
          [0,237,27,38],
          [1,244,100,50],
          [2,247,143,30],
          [3,255,195,36],
          [4,254,242,0],
          [5,132,195,65],
          [6,77,183,73],
          [7,51,169,75],
          [8,10,184,182],
          [9,70,144,205],
          [10,60,87,166],
          [11,90,81,162],
          [12,99,69,157],
          [13,108,33,128],
          [14,73,23,110],
          [0,238,28,37],
          [1,242,103,36],
          [2,248,198,17],
          [3,245,237,28],
          [4,180,210,50],
          [5,132,195,65],
          [6,77,183,73],
          [7,52,170,73],
          [8,34,180,107],
          [9,10,184,182],
          [10,70,144,205],
          [11,56,82,166],
          [12,90,81,162],
          [13,99,69,157],
          [14,70,44,131],
          [0,236,29,35],
          [1,243,104,37],
          [2,248,197,18],
          [3,245,237,28],
          [4,180,210,50],
          [5,132,195,65],
          [6,77,183,73],
          [7,51,169,73],
          [8,34,178,106],
          [9,9,185,182],
          [10,73,144,200],
          [11,55,84,164],
          [12,90,81,162],
          [13,99,69,157],
          [14,70,44,131],
        ]
        
        var d = 0
        var minimum = 10000
        var indexmin = 0
        
        for (var index = 0; index < datauji.length; index++) {
          d = Math.abs(red-datauji[index][1]) + Math.abs(green-datauji[index][2]) + Math.abs(blue-datauji[index][3]) 
          if (d < minimum) {
            minimum = d
            indexmin = index 
          }
        }
        //return indexmin;
        if (indexmin < 7) {
          document.getElementById("show3").innerHTML= "ph = "+indexmin+ "asam";
        }
        if (indexmin == 7) {
          document.getElementById("show3").innerHTML= "ph = "+indexmin+ "netral";
        }
        if (indexmin > 7) {
          document.getElementById("show3").innerHTML= "ph = "+indexmin+ "basa";
        }
      }, false);
    }
    
    /*function algortima(){
      canvas.addEventListener("mousemove",function (e) {
        var pos = getPosition(this);
        var x = e.pageX - pos.x;
        var y = e.pageY - pos.y;
        var c = canvas.getContext('2d');
        var p = c.getImageData(x, y, 1, 1).data;
        var red = p.data[0];
        var green = p.data[1];
        var blue = p.data[2];
        var alpha = p.data[3];
        var datauji=[
          [0, 237, 28, 36],
          [1, 255, 90, 54],
          [2, 255, 153, 51],
          [3, 255, 196, 12],
          [4, 209, 226, 49],
          [5, 154, 205, 50],
          [6, 76, 187, 23],
          [7, 0, 144, 0],
          [8, 0, 158, 96],
          [9, 10, 186, 181],
          [10, 0, 135, 189],
          [11, 15, 82, 186],
          [12, 55, 36, 180],
          [13, 69, 23, 183],
          [14, 50, 18, 122],
        ]
        
        var d = 0
        var minimum = 10000
        var indexmin = 0
        
        for (var index = 0; index < datauji.length; index++) {
          d = Math.abs(red-datauji[index][1]) + Math.abs(green-datauji[index][2]) + Math.abs(blue-datauji[index][3]) 
          if (d < minimum) {
            minimum = d
            indexmin = index 
          }
        }
        //return indexmin;
        if (indexmin < 7) {
          document.getElementById("show3").innerHTML= "ph = "+indexmin+ "asam";
        }
        if (indexmin == 7) {
          document.getElementById("show3").innerHTML= "ph = "+indexmin+ "netral";
        }
        if (indexmin > 7) {
          document.getElementById("show3").innerHTML= "ph = "+indexmin+ "basa";
        }
      })
    }*/
    