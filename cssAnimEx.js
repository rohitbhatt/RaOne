//var mydiv = document.createElement('div');
//mydiv.setAttribute('id', 'mydiv');
/*
var mydiv = document.getElementById('mydiv')
var txt = document.createTextNode(" This text was added to the DIV.");
mydiv.appendChild(txt);

var indiv = document.createElement('div');
indiv.setAttribute('id', 'indiv');
mydiv.appendChild(indiv);

var indiv2 = document.createElement('div');
indiv2.setAttribute('id', 'indiv2');
mydiv.appendChild(indiv2);
*/

var matrix =
[
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,2,0,2,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,1,1,1,0,0,0,
	 0,0,0,0,0,2,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,1,1,1,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,1,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,2,0,0,0,0,0,0,0,2,
	 0,2,0,0,0,0,0,0,0,2,
	 0,2,0,0,0,0,0,0,0,2,
	 0,2,0,0,1,0,1,0,0,2,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,2,2,0,0,0,0,0,2,2
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,2,0,0,0,0,0,0,0,2,
	 0,2,0,0,0,1,0,0,0,2,
	 0,2,0,0,0,0,0,0,0,2,
	 0,2,0,0,0,0,0,0,0,2,
	 0,2,0,0,0,0,0,0,0,2,
	 0,2,0,0,0,0,0,0,0,2,
	 0,2,0,0,0,0,0,0,0,2
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,1,1,1,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,1,0,0,0,1,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,1,0,0,0,1,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,1,0,0,0,1,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,1,0,0,0,1,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	],
	[0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,1,0,0,0,1,0,0,
	 0,0,0,1,0,0,0,1,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0,
	 0,0,0,0,0,0,0,0,0,0
	]
	
]

var tile_size = 100;
var NO_OF_LAYERS = 12;

for(j=0;j<=NO_OF_LAYERS-1;j++)
{
	var coverID = "cover"+(NO_OF_LAYERS-j-1);
	var cover = document.getElementById(coverID);

	for(i=0;i<100;i++)
	{
		if( matrix[j][i] >= 1)
		{
			
			var wrap = document.createElement('div');
			wrap.setAttribute('class', 'wrap');
			cover.appendChild(wrap);
			
			if( matrix[j][i] == 1)
			{
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg');
				var tStyle = getTransformStyleValue(0,0,0,0,0,25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg');
				var tStyle = getTransformStyleValue(0,0,0,0,0,-25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg');
				var tStyle = getTransformStyleValue(0,90,0,0,0,25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg');
				var tStyle = getTransformStyleValue(0,90,0,0,0,-25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg');
				var tStyle = getTransformStyleValue(90,0,0,0,0,25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg');
				var tStyle = getTransformStyleValue(90,0,0,0,0,-25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
			}
			else if( matrix[j][i] == 2)
			{
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg1');
				var tStyle = getTransformStyleValue(0,0,0,0,0,25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg1');
				var tStyle = getTransformStyleValue(0,0,0,0,0,-25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg1');
				var tStyle = getTransformStyleValue(0,90,0,0,0,25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg1');
				var tStyle = getTransformStyleValue(0,90,0,0,0,-25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg1');
				var tStyle = getTransformStyleValue(90,0,0,0,0,25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
				
				var tile = document.createElement('div');
				tile.setAttribute('class', 'tile bg1');
				var tStyle = getTransformStyleValue(90,0,0,0,0,-25);
				tile.setAttribute('style', tStyle);
				wrap.appendChild(tile);
			}
			
		}
		else
		{
			var tile = document.createElement('div');
			tile.setAttribute('class', 'wrap');
			var tStyle = "background-color: transparent;";
			tile.setAttribute('style', tStyle);
			cover.appendChild(tile);
		}
	}

}
function getTransformStyleValue(rX,rY,rZ,tX,tY,tZ){
	return "transform: rotateX("+rX+"deg) rotateY("+rY+"deg) rotateZ("+rZ+"deg) translateX("+tX+"px) translateY("+tY+"px) translateZ("+tZ+"px);"
}