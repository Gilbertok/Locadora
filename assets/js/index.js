$('.carousel').carousel({
    interval: 10000
})

$('.modal').on('hidden.bs.modal', function () {
    $('video').get(0).pause();
})

$('.modal').on('shown.bs.modal', function () {
    $('video').get(0).play();
  })