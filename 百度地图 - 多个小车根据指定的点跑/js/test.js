$(function(){
		function endDrawingPolyline(){
			$("#tip2").css("display","none");

			var target = $("#list_polyline .panel.show");
				target.prev().find(".editing").removeClass("hidden").addClass("show");
				target.removeClass("show").addClass("hidden");

			if(NUM_POLYLINE < MAX_POLYLINE_NUM){

				NUM_POLYLINE ++ ;
				var dom = '<div class = "bg_item l"><span class = "marker_title l">手绘线路'+config.polyline_array.length + '</span>'
						+	'<span class = "editin g r hidden" onclick = "deletePolyline(' + config.polyline_array.length + ')">删除</span><span class = "editing r hidden" onclick = "editPolyline('+NUM_POLYLINE+')">编辑| </span></div>'
						+	'<div class = "panel l show" style="margin-top:-6px">'
						+	'<div class= "l" style = "width:221px;border:#d6d6d6 solid 1px; ">'
						+		'<div class = "l" style = "width : 100%; margin-bottom:5px;">'
						+			'<div class= "l" style = "height: 20px;width:60px; line-height:20px; cursor:pointer;">宽 度：</div>'
						+			'<div class= "l" style = "height: 20px;width:30px;text-align:center;">'
						+				'<select name = "strokeWeight" onchange = "resetPolyStyle(this.value,this.name,' + config.polyline_array.length + ')">'
						+					'<option value = "4">中等</option>'
						+					'<option value = "3">较细</option>'
						+					'<option value = "2">最细</option>'
						+					'<option value = "5">较粗</option>'
						+					'<option value = "6">最粗</option>'
						+				'</select>'
						+			'</div>'
						+		'</div>'
						+		'<div class = "l" style = "width : 100%; margin-bottom:5px;">'
						+			'<div class= "l" style = "height: 20px;width:60px; line-height:20px; cursor:pointer;">颜 色：</div>'
						+			'<div class= "l" style = "height: 20px;width:30px;text-align:center;">'
						+				'<select name = "strokeColor" onchange = "resetPolyStyle(this.value,this.name,' + config.polyline_array.length + ')">'
						+					'<option value = "#f00">红色</option>'
						+					'<option value = "#f0f">紫色</option>'
						+					'<option value = "#0ff">青色</option>'
						+					'<option value = "#000">黑色</option>'
						+					'<option value = "#00f">蓝色</option>'
						+					'<option value = "#0f0">绿色</option>'
						+				'</select>'
						+			'</div>'
						+		'</div>'
						+		'<div class = "l" style = "width : 100%; margin-bottom:5px;">'
						+			'<div class= "l" style = "height: 20px;width:60px; line-height:20px; cursor:pointer;">透明度：</div>'
						+			'<div class= "l" style = "height: 20px;width:30px;text-align:center;">'
						+				'<select name = "strokeOpacity" onchange = "resetPolyStyle(this.value,this.name,' + config.polyline_array.length +')">'
						+					'<option value = "0.6">中等</option>'
						+					'<option value = "0.4">高透明</option>'
						+					'<option value = "0.8">低透明</option>'
						+					'<option value = "1">不透明</option>'
						+				'</select>'
						+			'</div>'
						+		'</div>'
						+		'<div class="l"><input type="checkbox" class="setDefaultPoly"/><span>保存为默认值</span></div>'
						+		'<div class = "l" style = "width : 100%; padding:15px 36px 5px 20px">'
						+			'<input class = "btn_gray" type = "button" value = "保 存" onclick = "savePlEditing(' + config.polyline_array.length + ')"/>'
						+			'<input class = "btn_gray" type = "button" value = "取 消" onclick = "exitPlEditing(' + config.polyline_array.length + ')"/>'
						+		'</div>'
						+	'</div>'
						+	'<p style = "margin-top:10px">(提示：请保存未保存的线标记，未保存的线标记在获取代码时内容不是最新的！)</p>'
						+'</div>';

				$("#list_polyline").append(dom);
				var target = $("#list_polyline .panel.show");
				target.find("select[name='strokeColor']").val(polyDefaultStyle.strokeColor);
				target.find("select[name='strokeOpacity']").val(polyDefaultStyle.strokeOpacity);
				target.find("select[name='strokeWeight']").val(polyDefaultStyle.strokeWeight);
			}else{
				$("#warning_polyline").css("display","block");
				window.setTimeout(function(){ $("#warning_polyline").css("display","none"); },2000);
			}
		}

})
