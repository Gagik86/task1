const drone = document.getElementById('drone')
const left = document.getElementById('left')
const right = document.getElementById('right')
const bottom = document.getElementById('bottom')
const clobalPLacDrone = document.getElementById('clobal-container')
const leftWings = document.getElementsByClassName('left-wing')
const rightWings = document.getElementsByClassName('right-wing')


const rect = drone.getBoundingClientRect();

document.body.addEventListener('keydown', (ev) => {
      const rect = drone.getBoundingClientRect()
      // DRONE Top
      if (ev.key === "ArrowUp") {
            if (rect.top < -102) {
                  return
            }
            let arr1 = Array.from(rightWings)
            arr1.map(element => {
                  element.classList.add('wings-right')
            })
            let bottom = Array.from(leftWings)
            bottom.map(element => {
                  element.classList.add('wings-right')
            })
            if (rect.top === clobalPLacDrone) {
                  return
            }
            drone.style.top = rect.top - 10 + 'px';
            // DRONE Bottom
      } else if (ev.key === "ArrowDown") {
            if (rect.bottom === clobalPLacDrone.offsetHeight) {
                  return
            }
            let arr1 = Array.from(rightWings)
            arr1.map(element => {
                  element.classList.add('wings-right')
            })
            let bottom = Array.from(leftWings)
            bottom.map(element => {
                  element.classList.add('wings-right')
            })
            if (rect.bottom === clobalPLacDrone) {
                  return
            }
            drone.style.top = rect.top + 10 + 'px';
            // DRONE Right
      } else if (ev.key === "ArrowRight") {
            if (rect.right === clobalPLacDrone.offsetWidth) {
                  return
            }
            let arr1 = Array.from(rightWings)
            arr1.map(element => {
                  element.classList.add('wings-right')
            })
            let bottom = Array.from(leftWings)
            bottom.map(element => {
                  element.classList.remove('wings-right')
            })

            drone.style.left = rect.left + 10 + 'px';
            // DRONE Left
      } else if (ev.key === "ArrowLeft") {
            console.log(rect.left)
            if (rect.left < -29) {
                  return
            }
            let arr = Array.from(leftWings)
            arr.map(element => {
                  element.classList.add('wings-right')
            })
            let arr1 = Array.from(rightWings)
            arr1.map(element => {
                  element.classList.remove('wings-right')
            })
            drone.style.left = rect.left - 10 + 'px';
      }

})
// BUTTONS CONTROL
function onLeft() {
      const rect = drone.getBoundingClientRect();
      let arr = Array.from(leftWings)
      arr.map(element => {
            element.classList.add('wings-right')
      })
      let arr1 = Array.from(rightWings)
      arr1.map(element => {
            element.classList.remove('wings-right')
      })
      drone.style.left = rect.left - 10 + 'px';
}

function onRight() {
      const rect = drone.getBoundingClientRect();
      let arr1 = Array.from(rightWings)
      arr1.map(element => {
            element.classList.add('wings-right')
      })
      let bottom = Array.from(leftWings)
      bottom.map(element => {
            element.classList.remove('wings-right')
      })
      drone.style.left = rect.left + 10 + 'px';
}


function onTop() {
      const rect = drone.getBoundingClientRect();
      let arr1 = Array.from(rightWings)
      arr1.map(element => {
            element.classList.add('wings-right')
      })
      let bottom = Array.from(leftWings)
      bottom.map(element => {
            element.classList.add('wings-right')
      })
      drone.style.top = rect.top - 10 + 'px';
}

function onBottom() {
      const rect = drone.getBoundingClientRect();
      let arr1 = Array.from(rightWings)
      arr1.map(element => {
            element.classList.add('wings-right')
      })
      let bottom = Array.from(leftWings)
      bottom.map(element => {
            element.classList.add('wings-right')
      })
      drone.style.top = rect.top + 10 + 'px';
}

