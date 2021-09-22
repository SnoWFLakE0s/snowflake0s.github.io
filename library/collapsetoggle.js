$(document).ready(function(){
  var $groupOne = $('#myGroup');
    $groupOne.on('show.bs.collapse','.collapse', function() {
    $groupOne.find('.collapse.show').collapse('hide');
  });
});
