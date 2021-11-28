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
    