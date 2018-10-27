$('.carousel').carousel({
    interval: 10000
})

$('.modal').on('hidden.bs.modal', function () {
    video = $(this).closest("div").find('video')[0];
    if(video != undefined) {
        video.pause();
        video.currentTime = 0;
    }
})

$('.modal').on('shown.bs.modal', function () {
    video = $(this).closest("div").find('video')[0];
    if(video != undefined) {
        video.play();
    }
})