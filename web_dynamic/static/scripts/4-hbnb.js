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
  const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(apiUrl, function (resp) {
    if (resp.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    data: '{}',
    contentType: 'application/json',
    success: function (data) {
      for (let plc = 0; plc < data.length; plc++) {
        let G = ' Guests';
        if (data[plc].max_guest === 1) G = ' Guest';
        let BE = ' Bedrooms';
        if (data[plc].number_rooms === 1) BE = ' Bedroom';
        let BA = ' Bathrooms';
        if (data[plc].numberbathrooms === 1) BA = ' Bathroom';
        const guest = '<div class="max_guest">' + data[plc].max_guest + G + '</div>';
        const bedroom = '<div class="number_rooms">' + data[plc].number_rooms + BE + '</div>';
        const bathroom = '<div class="number_bathrooms">' + data[plc].number_bathrooms + BA + '</div>';
        let desc = 'safe';
        if (data[plc].description !== desc) desc = 'None';
        const all = '<div class="information">' + guest + bedroom + bathroom + '</div>' + '<div class="description">' + desc + '</div>';
        const art = '<article> <div class="title_box"> <h2>' + data[plc].name + '</h2> <div class="price_by_night">' + data[plc].price_by_night + '</div></div>' + all + '</article>';
        $('section.places').html(art);
      }
    }
  });
   // let dik = {};
   // $('button').click(function () {
//	du
  //  )
});
