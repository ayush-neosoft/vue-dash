<template>
  <div class="page">
    <div
      class="ui-slider"
      tabindex="0"
      ref="slider"
      :class="{ min: value === 0, max: value === 50, dragging: dragging }"
      @mousedown="sliderClick"
      @click="$emit('child-data', { value: $data.value, title: title })"
      @keydown.left.prevent="decrement"
      @keydown.right.prevent="increment"
    >
      <div class="ui-slider-containment" ref="container"></div>
      <div class="ui-slider-wrapper">
        <div class="ui-slider-track-container">
          <div class="ui-slider-track"></div>
          <div
            class="ui-slider-track-fill"
            :style="{ width: value + '%' }"
          ></div>
        </div>
        <div class="ui-slider-thumb-container" ref="thumb">
          <div class="ui-slider-focus-ring"></div>
          <div class="ui-slider-thumb"></div>
        </div>
        <p>{{ title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RangeSlider",
  props: ["title"],
  data() {
    return {
      value: 0,
      keyboardStep: 5,
      dragging: false,
      draggable: null
    };
  },

  mounted() {
    // Set initial value
    this.$refs.thumb.style.left = this.value + "%";

    // Initialize Draggabilly
    this.draggable = new Draggabilly(this.$refs.thumb, {
      containment: this.$refs.container,
      axis: "x"
    });

    // Setup drag events
    this.draggable.on("dragStart", this.dragStart);
    this.draggable.on("dragMove", this.dragMove);
    this.draggable.on("dragEnd", this.dragEnd);
  },

  methods: {
    sliderClick(e) {
      let sliderPosition = this.$refs.slider.getBoundingClientRect();

      let newValue =
        ((e.clientX - sliderPosition.left) / sliderPosition.width) * 100;

      this.setValue(newValue, true);

      if (e.target !== this.$refs.thumb) {
        this.draggable._pointerDown(e, e);
      }

      this.$refs.slider.focus();
    },

    dragStart() {
      this.dragging = true;
      this.$refs.slider.focus();
    },

    dragMove() {
      let x = this.draggable.position.x;
      let newValue =
        (x / this.$refs.slider.getBoundingClientRect().width) * 100;

      this.setValue(newValue);
    },

    dragEnd() {
      this.dragging = false;
    },

    increment() {
      if (this.value === 100) {
        return;
      }

      this.setValue(this.value + this.keyboardStep, true);
    },

    decrement() {
      if (this.value === 0) {
        return;
      }

      this.setValue(this.value - this.keyboardStep, true);
    },

    setValue(newValue, updateThumb) {
      if (newValue === this.value) {
        return;
      }

      // Round the value
      var moderatedValue = Math.round(newValue);

      // Check for max
      if (moderatedValue >= 100) {
        moderatedValue = 100;
      }

      // Check for min
      if (moderatedValue <= 0) {
        moderatedValue = 0;
      }

      this.value = moderatedValue;

      if (updateThumb) {
        this.$refs.thumb.style.left = this.value + "%";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// Slider container
.ui-slider {
  position: relative;
  width: 100%h;
  height: 38px + 4px;
  display: flex;
  align-items: center;
  outline: none;

  // Increase size of thumb on slider hover
  &:hover {
    .ui-slider-thumb {
      transform: scale(1.1);
    }
  }

  // Increase size of thumb and focus dot on focus
  &:focus,
  &.dragging {
    .ui-slider-thumb {
      transform: scale(1.1);
    }
    .ui-slider-focus-ring {
      transform: scale(1);
    }
  }
}

.ui-slider-wrapper {
  position: relative;
  width: 100%;
}

.ui-slider-track-container {
  position: relative;
}

.ui-slider-track {
  height: 3px;
  background-color: grey;
  width: 100%;
}

.ui-slider-track-fill {
  position: absolute;
  top: 0;
  height: 3px;
  background-color: #4caf50;
}

.ui-slider-thumb-container {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -(38px / 2) - (3px / 2);
  margin-left: -(38px / 2) - (3px / 2);
  width: 38px;
  height: 38px;
}

.ui-slider-thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: #4caf50;
  border-radius: 50%;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: linear;

  transform: scale(1);
}

.ui-slider-focus-ring {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: #4caf50;
  transition: transform 0.2s ease;
  transform: scale(0);
}

.ui-slider-containment {
  left: 0;
  right: 0;
  position: absolute;
  margin-left: -(38px / 2) - (3px / 2);
  margin-right: -(38px / 2) - (3px / 2);
}

.page {
  max-width: 100%;
  margin: 20px 0px;
  text-align: left;

  input {
    margin-top: 40px;
  }
}

* {
  box-sizing: border-box;
}
</style>
