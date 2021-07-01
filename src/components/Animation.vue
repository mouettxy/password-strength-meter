<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue'
import gsap from 'gsap'

export default defineComponent({

  props: {
    strength: {
      required: true,
      type: Number,
    },
  },

  setup(props) {
    function getZIndexTimeline() {
      const tl = gsap.timeline()

      const setZIndex = (elements: Map<string | string[], number>) => {
        for (const [key, zIndex] of elements) tl.set(key, { zIndex })
      }

      const zIndexMap = new Map()
      zIndexMap.set('.svg-diamond', 1)
      zIndexMap.set('.svg-shiny', 2)
      zIndexMap.set('.svg-showcase', 3)
      zIndexMap.set('.svg-container-box', 4)
      zIndexMap.set('.svg-box', 5)
      zIndexMap.set(['.svg-container-door-left', '.svg-container-door-right'], 6)
      zIndexMap.set('.svg-container-lock', 7)
      zIndexMap.set('.svg-safe', 4)
      zIndexMap.set('.svg-safe-vault', 9)

      setZIndex(zIndexMap)

      return tl
    }
    function getSetTimeline() {
      const tl = gsap.timeline()

      tl.set([
        '#Showcase #Top',
        '#Showcase #Bottom',
        '#Box #Top',
        '#Box #Bottom',
        '#Shiny',
        '#Box #CompleteMark',
        '#Container #ContainerBox',
        '.svg-container-door-left',
        '.svg-container-door-right',
        '#Container #LockPlace',
        '#Container #Lock',
        '#Safe #SafeBox',
        '.svg-safe-vault',
      ], {
        opacity: 0,
      })

      return tl
    }
    function getShowcaseTimeline() {
      const tl = gsap.timeline()

      tl
        .addLabel('ShowcaseStart')
        .fromTo(
          '#Showcase #Top',
          {
            translateY: -64,
            opacity: 0,
          },
          {
            translateY: 0,
            opacity: 1,
          },
        )
        .fromTo(
          '#Showcase #Bottom',
          {
            translateY: 64,
            opacity: 0,
          },
          {
            translateY: 0,
            opacity: 1,
          },
          '-=0.75',
        )
        .fromTo(
          '#Shiny',
          {
            opacity: 0,
            easing: 'linear',
          },
          {
            translateY: -120,
            translateX: 40,
            opacity: 1,
          },
          '-=0.75',
        )
        .to(
          '#Shiny',
          {
            opacity: 0,
            easing: 'linear',
            duration: 0.1,
          },
          '-=0.25',
        )
        .addLabel('ShowcaseEnd')

      return tl
    }
    function getBoxTimeline() {
      const tl = gsap.timeline()

      tl
        .addLabel('BoxStart')
        .to('#Showcase', {
          opacity: 1,
          scale: 0.75,
          duration: 1.5,
          transformOrigin: 'center center',
        })
        .fromTo('#Box #Top', {
          translateY: -64,
          opacity: 1,
        }, {
          translateY: 0,
          opacity: 1,
        }, '-=1.5')
        .fromTo('#Box #Bottom', {
          translateY: 64,
          opacity: 0,
        }, {
          translateY: 0,
          opacity: 1,
        }, '-=1.5')
        .fromTo('#Box #CompleteMark', {
          scaleY: 0,
          opacity: 0,
          transformOrigin: 'top',
        }, {
          scaleY: 1,
          opacity: 1,
        }, '-=.75')
        .addLabel('BoxEnd')

      return tl
    }
    function getContainerTimeline() {
      const tl = gsap.timeline()

      tl
        .addLabel('ContainerStart')
        .to('#Box', {
          opacity: 1,
          scale: 0.9,
          transformOrigin: 'center center',
        })
        .to('#Container #ContainerBox', {
          opacity: 1,
        }, '-=0.5')
        .fromTo('.svg-container-door-left', {
          perspective: 1024,
          rotateY: '64deg',
          transformOrigin: 'left',
        }, {
          opacity: 1,
          rotateY: 0,
        })
        .fromTo('.svg-container-door-right', {
          perspective: 1024,
          rotateY: '-64deg',
          transformOrigin: 'right',
        }, {
          opacity: 1,
          rotateY: 0,
        }, '-=0.5')
        .to('#Container #LockPlace', {
          opacity: 1,
        })
        .fromTo('#Container #LockPlace #Plate', {
          transformOrigin: 'center center',
          scaleX: 0.5,
        }, {
          scaleX: 1,
        }, '-=0.75')
        .fromTo('#Container #LockPlace #Pill', {
          transformOrigin: 'center center',
          scaleX: 0,
          translateY: -20,
        }, {
          translateY: 0,
          scaleX: 1,
        }, '-=0.75')
        .fromTo('#Container #LockPlace #HandleLeft', {
          translateX: 20,
        }, {
          translateX: 0,
        }, '-=0.75')
        .fromTo('#Container #LockPlace #HandleLeft', {
          translateX: -20,
        }, {
          translateX: 0,
        }, '-=0.75')
        .fromTo('#Container #Lock', {
          transformOrigin: 'center center',
          rotate: 40,
          translateY: -15,
          easing: 'linear',
          duration: 250,
        }, {
          opacity: 1,
          translateY: 0,
          rotate: -35,
        }, '-=0.25')
        .to('#Container #Lock', {
          rotation: 40,
          yoyo: true,
          duration: 0.15,
        })
        .to('#Container #Lock', {
          rotation: -35,
          yoyo: true,
          duration: 0.15,
        })
        .to('#Container #Lock', {
          rotation: 25,
          yoyo: true,
          duration: 0.15,
        })
        .to('#Container #Lock', {
          rotation: -25,
          yoyo: true,
          duration: 0.15,
        })
        .to('#Container #Lock', {
          rotation: 15,
          yoyo: true,
          duration: 0.15,
        })
        .to('#Container #Lock', {
          rotation: -10,
          yoyo: true,
          duration: 0.15,
        })
        .to('#Container #Lock', {
          rotation: 0,
          yoyo: true,
          duration: 0.15,
        })
        .addLabel('ContainerEnd')

      return tl
    }
    function getSafeTimeline() {
      const tl = gsap.timeline()

      tl
        .to('#Box', {
          opacity: 0,
        })
        .to('#Container', {
          svgOrigin: '64 64',
          scale: 0.7,
        }, '-=0.75')
        .to('#Safe #SafeBox', {
          opacity: 1,
        }, '-=0.75')
        .fromTo('#Safe #Legs', {
          scaleY: 0,
        }, {
          scaleY: 1,
        }, '-=0.75')
        .fromTo('.svg-safe-vault', {
          transformOrigin: 'right',
          rotateY: '90deg',
          perspective: 1024,
          opacity: 0,
        }, {
          rotateY: 0,
          opacity: 1,
        }, '-=0.5')
        .to('#Safe #VaultLock', {
          transformOrigin: 'center center',
          rotate: 220,
        })
        .to('#Safe #VaultLock', {
          transformOrigin: 'center center',
          rotate: -160,
        })
        .to('#Safe #VaultLock', {
          transformOrigin: 'center center',
          rotate: 0,
        })

      return tl
    }

    function setBackgroundLoop() {
      gsap.to('#PasswordBg #FloatingYellow', {
        translateY: -20,
        duration: 5,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('#PasswordBg #FloatingRed', {
        translateY: 20,
        duration: 5,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
      })
    }

    const masterTl = gsap.timeline({ duration: 0.75, ease: 'easeOutExpo', paused: true })
    const helperTl = gsap.timeline()

    onMounted(() => {
      setBackgroundLoop()

      /* -------------------------------- utilities ------------------------------- */
      const setTl = getSetTimeline()
      const zIndexTl = getZIndexTimeline()

      helperTl.add(setTl, 0)
      helperTl.add(zIndexTl, 0)

      /* -------------------------------- timelines ------------------------------- */
      const showcaseTl = getShowcaseTimeline()
      const boxTl = getBoxTimeline()
      const containerTl = getContainerTimeline()
      const safeTimeline = getSafeTimeline()

      masterTl.add(showcaseTl, 0)
      masterTl.add(boxTl, 0.75)
      masterTl.add(containerTl, 2.25)
      masterTl.add(safeTimeline, 5.05)

      // console.log(masterTl)

      // masterTl.play(5.05)
    })

    watch(() => props.strength, (strength) => {
      if (strength === 0)
        masterTl.reverse()

      if (strength === 1)
        masterTl.tweenFromTo(0, 0.75)

      if (strength === 2)
        masterTl.tweenFromTo(0.75, 2.25)

      if (strength === 3)
        masterTl.tweenFromTo(2.25, 5.05)

      if (strength === 4)
        masterTl.tweenFromTo(5.05, 7.3)
    })
  },
})
</script>

<template>
  <div class="relative overflow-hidden">
    <PasswordBg class="w-[328px] h-[328px] z-1" />
    <div class="password-svg svg-safe-vault">
      <SafeVault />
    </div>
    <Safe class="password-svg svg-safe" />
    <ContainerLock class="password-svg svg-container-lock" />
    <div class="password-svg svg-container-door-left">
      <ContainerDoorLeft />
    </div>
    <div class="password-svg svg-container-door-right">
      <ContainerDoorRight />
    </div>
    <ContainerBox class="password-svg svg-container-box" />
    <Box class="password-svg svg-box" />
    <Showcase class="password-svg svg-showcase" />
    <Shiny class="password-svg svg-shiny" />
    <Diamond class="password-svg svg-diamond" />
  </div>
</template>

<style lang="scss">
.password-svg {
  @apply absolute;
  top: calc(50% - 64px);
  left: calc(50% - 64px);
}

#Safe {
  #Legs {
    transform-origin: top;
  }

  // #VaultLock {
  //   transform-box: fill-box;
  //   transform-origin: center center;
  // }

  #VaultDoor {
    transform-origin: right;
    backface-visibility: hidden;
  }
}
</style>
