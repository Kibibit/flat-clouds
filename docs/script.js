(function() {

  var cloudbox = document.getElementById('cloudbox');
  var cloudbox1 = document.getElementById('cloudbox2');

  function createCloud(cloudbox) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // CREATE THE CLOUD SPAN
    var cloud = document.createElement('span');
    cloud.style.width = Math.abs(Math.random() * (180 - 60) + 60) + "px";

    // ANIMATION VARIABLES
    var cloudTime = Math.abs(Math.random() * (240 - 120) + 120);
    var cloudTop = Math.abs(Math.random() * vh);

    // GSAP TIMELINES
    var tlAcross = new TimelineMax({repeat: -1});
    tlAcross.set(cloud, {left: 0})
      .seek(cloudTime * Math.random())
      .to(cloud, cloudTime, {left: "100%", ease: Power0.easeNone})

    var tlDown = new TimelineMax({repeat: -1});
    tlDown.set(cloud, {top: cloudTop, ease: Power0.easeNone})
      .seek(cloudTime * Math.random())
      .to(cloud, cloudTime/2, {top: cloudTop + 40, ease: Power0.easeNone})
      .to(cloud, cloudTime/2, {top: cloudTop, ease: Power0.easeNone})

    // ADD IT TO THE CLOUDBOX
    cloudbox.appendChild(cloud)
  }

  for ( var i = 0; i < 50; i ++ ) {
    createCloud(cloudbox); 
  }

  for ( var i = 0; i < 50; i ++ ) {
    createCloud(cloudbox1); 
  }

})();