function chkout(){
var table_rows = $("#tab tr");//subject_details
table_rows = table_rows.slice(1)
table_rows.each(function(index, object){
	$this = $(this)
	var first_test = $this.find("td").eq(1)
	var second_test = $this.find("td").eq(2)
	var exam_score = $this.find("td").eq(3)
	var list = [[first_test, 20], [second_test, 20], [exam_score, 60]]
	$(list).each(function(index, obj){
		if(parseInt(obj[0].text()) < obj[1]*0.5 ) {
			$(obj[0]).addClass('special')
		}
	})

})
}