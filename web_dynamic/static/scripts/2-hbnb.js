$(document).ready(function () {
  const dict = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      dict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if ($(this).prop('checked') === false) {
      delete dict[$(this).attr('data-id')];
    }
    const list = [];
    for (const i in dict) {
      list.push(dict[i]);
    }
    $('.amenities h4').text(list.join(', '));
  });
});
const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(apiUrl, function (resp) {
    if (resp.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
