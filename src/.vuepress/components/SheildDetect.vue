<template>
  <div v-if="adblockerDetected" class="ab-container">
    <div class="ab-content">
      <p class="ab-close" @click="closeBanner">X</p>
      <h4 class="ab-alert">Your Feedback is Vital to the Success of this Course</h4>
      <h4>Please disable all <span class="ab-alert">Ad Blockers</span> for this site so we can get your feedback.</h4>
      <h5>Don't worry, we won't ruin your experience with ads. We just want to offer you a quick way to share your thoughts during the course.</h5>
    </div>
  </div>
</template>

<script>
  import AdDetect from "block-adblock-js";
  export default ({
    data() {
      return {
        adblockerDetected: false
      }

    },
    mounted() {
      if (AdDetect.check()) {
        this.adblockerDetected = true;
      }
    },
    methods: {
      closeBanner() {
        this.adblockerDetected = false;
      }
    }
  })
</script>


<style scoped>
  .ab-container {
    position: fixed;
    height: auto;
    top: 9rem;
    left: 50%;
    z-index: 31;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f7f7;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    width: 99vw;
    border: 1px solid #333;
    box-shadow: #333 0 0 0.5rem;
  }

  .ab-alert {
    font-weight: bold;
    color: #ff0000;
  }

  .ab-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .ab-content h4, .ab-content h5 {
    margin: 0;
    padding: .5rem;
    font-weight: bold;
    text-align: center;
  }

  .ab-close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    margin: 0;
    font-weight: bold;
  }
</style>
