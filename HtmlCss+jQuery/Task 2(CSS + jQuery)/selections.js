$(document).ready(function(){
	(function () {
		function Selector() {	
		
			var currentEl = $('.pager-current');
			var currentElHtml = currentEl.html();		
						
			$('li').mouseenter(function() {						
					if(currentElHtml !== $( this ).html()){
					$( this ).addClass( "pager-current" ).removeClass("pager-next pager-item");
					}		
				})
				.mouseleave(function() {					
					if(currentElHtml !== $( this ).html()){
						$( this ).removeClass("pager-current");
						$( this ).hasClass( "last" )?$( this ).addClass( "pager-next" )
													:$( this ).addClass( "pager-item" );
					}
				})
				.click(function() {					
					if(currentElHtml !== $( this ).html()){
						currentEl.removeClass("pager-current");
						currentEl.hasClass( "last" )?$( this ).addClass( "pager-next" )
													:$( this ).addClass( "pager-item" );
						currentEl = $( this );
						currentElHtml = currentEl.html();
						$( this ).addClass( "pager-current" ).removeClass("pager-next pager-item");
					}
				});			
		}
		this.Selector = new Selector();
	})();
});