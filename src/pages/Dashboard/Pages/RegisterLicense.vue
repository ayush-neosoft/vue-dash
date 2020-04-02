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
            <p class="dark-grey">Your Estimation</p>
            <div
              class="md-card-actions md-alignment-space-between estimate-card"
            >
              <div class="price">
                <h4 class="subCategory grey">
                  {{ license }} Licenses for {{ year }} years
                </h4>
              </div>
              <div class="stats">
                <p class="category grey">R{{ licenseValue }}</p>
              </div>
            </div>
            <div
              class="md-card-actions md-alignment-space-between estimate-card"
            >
              <div class="price">
                <h4 class="subCategory grey">Discount</h4>
              </div>
              <div class="stats">
                <p class="category grey">-R{{ discount }}</p>
              </div>
            </div>
            <hr />
            <div
              class="md-card-actions md-alignment-space-between estimate-card"
            >
              <div class="price">
                <h4 class="subCategory dark-grey">Total</h4>
              </div>
              <div class="stats">
                <p class="category dark-grey">R{{ total }}</p>
              </div>
            </div>
          </div>
          <div class="button-container">
            <md-button
              class="md-success md-round mt-4"
              href="/#/dashboard-plan"
              slot="footer"
            >
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
    return {
      license: 0,
      licenseValue: 0,
      year: 0,
      yearValue: 0,
      total: 0,
      discount: 0
    };
  },
  methods: {
    childData: function(data) {
      this.license =
        data.title === "Number of licenses" ? data.value : this.license;
      this.licenseValue = this.license;
      this.year = data.title === "License duration" ? data.value : this.year;
      this.yearValue = this.year;
      this.total = this.licenseValue;
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

.button-container {
  justify-content: flex-end;
}

.dark-gery {
  color: #3c4858;
}

.grey {
  color: #999999;
}
</style>
