<template>
  <div class="sm-layout card-view">
    <div class="md-layout-item">
      <signup-card>
        <h2 class="text-center" slot="title">SAICA CPD REGISTRATION</h2>
        <br />
        <div
          class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100"
        >
          <div style="margin-bottom:50px">
            <range-slider
              title="Number of licenses"
              v-on:child-data="childData"
            ></range-slider>
            <br />
            <range-slider
              title="License duration"
              v-on:child-data="childData"
            ></range-slider>
          </div>
          <div>
            <b>Your Estimation</b>
            <div
              class="md-card-actions md-alignment-space-between estimate-card"
            >
              <div class="price">
                <h4 class="subCategory">5 Licenses for 2 years</h4>
              </div>
              <div class="stats">
                <p class="category">R1,000.00</p>
              </div>
            </div>
            <div
              class="md-card-actions md-alignment-space-between estimate-card"
            >
              <div class="price">
                <h4 class="subCategory">Discount</h4>
              </div>
              <div class="stats">
                <p class="category">-R100.00</p>
              </div>
            </div>
          </div>
          <div class="button-container right">
            <md-button class="md-success md-round mt-4" slot="footer">
              Continue
            </md-button>
          </div>
        </div>
      </signup-card>
    </div>
  </div>
</template>
<script>
import { RangeSlider } from "@/components";
export default {
  components: {
    RangeSlider
  },
  data() {
    return {};
  },
  methods: {
    childData: function(data) {
      console.log("data----", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-view {
  margin: 0 auto;
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 20px;
}
.category {
  margin: 0px;
}

.subCategory {
  margin: 0px;
}

.estimate-card {
  padding: 5px 0px;
}
</style>
