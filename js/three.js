var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rgb(r, g, b) {
  return new THREE.Vector3(r, g, b);
}
document.addEventListener("DOMContentLoaded", function (e) {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(screen.width, screen.height);
  document.querySelector(".canvas").appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    screen.width / screen.height,
    0.1,
    1000
  );

  let vCheck = false;

  camera.position.z = 5;

  var randomisePosition = new THREE.Vector2(1, 2);

  var R = function (x, y, t) {
    return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
  };

  var G = function (x, y, t) {
    return Math.floor(
      192 +
        64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    );
  };

  var B = function (x, y, t) {
    return Math.floor(
      192 +
        64 *
          Math.sin(
            5 * Math.sin(t / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    );
  };
  let sNoise = document.querySelector("#snoise-function").textContent;
  let geometry = new THREE.PlaneGeometry(window.innerWidth / 2, 400, 100, 100);
  let material = new THREE.ShaderMaterial({
    uniforms: {
      u_bg: { type: "v3", value: rgb(68, 102, 160) },
      u_bgMain: { type: "v3", value: rgb(20, 25, 36) },
      u_color1: { type: "v3", value: rgb(57, 72, 97) },
      u_color2: { type: "v3", value: rgb(57, 72, 97) },
      u_time: { type: "f", value: 30 },
      u_randomisePosition: { type: "v2", value: randomisePosition }
    },
    fragmentShader:
      sNoise + document.querySelector("#fragment-shader").textContent,
    vertexShader: sNoise + document.querySelector("#vertex-shader").textContent
  });

  let mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(-200, 270, -280);
  mesh.scale.multiplyScalar(4);
  mesh.rotationX = -1.0;
  mesh.rotationY = 0.0;
  mesh.rotationZ = 0.1;
  scene.add(mesh);

  renderer.render(scene, camera);
  let t = 0;
  let j = 0;
  let x = randomInteger(0, 32);
  let y = randomInteger(0, 32);
  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.material.uniforms.u_randomisePosition.value = new THREE.Vector2(j, j);

    mesh.material.uniforms.u_color1.value = new THREE.Vector3(
      R(x, y, t / 2),
      G(x, y, t / 2),
      B(x, y, t / 2)
    );

    mesh.material.uniforms.u_time.value = t;
    if (t % 0.1 == 0) {
      if (vCheck == false) {
        x -= 1;
        if (x <= 0) {
          vCheck = true;
        }
      } else {
        x += 1;
        if (x >= 32) {
          vCheck = false;
        }
      }
    }

    // Increase t by a certain value every frame
    j = j + 0.01;
    t = t + 0.05;
  };
  animate();
});


}
/*
     FILE ARCHIVED ON 10:07:06 Mar 31, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:49:32 Nov 24, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 282.925
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.063
  cdx.remote: 0.054
  esindex: 0.008
  LoadShardBlock: 214.276 (3)
  PetaboxLoader3.datanode: 222.405 (4)
  load_resource: 139.555
  PetaboxLoader3.resolve: 61.306
*/