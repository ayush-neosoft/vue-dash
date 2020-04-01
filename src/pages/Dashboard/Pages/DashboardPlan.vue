<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
    >
      <h2>SAICA CPD REGISTRATION</h2>
    </div>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      <md-card class="md-card-stats">
        <md-card-header class="md-card-header-icon md-card-header-blue">
          <slot name="header">
            <p style="text-align:left"><b>2018</b></p>
            <p style="text-align:left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div class="md-card-actions md-alignment-space-between">
              <div class="price"><h4></h4></div>
              <div class="stats">
                <p class="category">
                  Edit Plan
                </p>
              </div>
            </div>
          </slot>
        </md-card-header>
      </md-card>
    </div>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      <md-card class="md-card-stats">
        <md-card-header class="md-card-header-icon md-card-header-blue">
          <slot name="header">
            <p style="text-align:left"><b>2019</b></p>
            <p style="text-align:left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div class="md-card-actions md-alignment-space-between">
              <div class="price"><h4></h4></div>
              <div class="stats">
                <p class="category">
                  Edit Plan
                </p>
              </div>
            </div>
          </slot>
        </md-card-header>
      </md-card>
    </div>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      <md-card class="md-card-stats">
        <md-card-header class="md-card-header-icon md-card-header-blue">
          <slot name="header">
            <p style="text-align:left"><b>2020</b></p>
            <p style="text-align:left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div class="md-card-actions md-alignment-space-between">
              <div class="price"><h4></h4></div>
              <div class="stats">
                <p class="category">
                  Edit Plan
                </p>
              </div>
            </div>
          </slot>
        </md-card-header>
      </md-card>
    </div>
    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      <md-card class="md-card-stats">
        <md-card-header class="md-card-header-icon md-card-header-blue">
          <slot name="header">
            <p style="text-align:left"><b>Add Annual Plan</b></p>
            <p style="text-align:left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div class="md-card-actions md-alignment-space-between">
              <div class="price"><h4></h4></div>
              <div class="stats">
                <p class="category">
                  Edit Plan
                </p>
              </div>
            </div>
          </slot>
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>

<script>
import AsyncWorldMap from "@/components/WorldMap/AsyncWorldMap.vue";
import {
  StatsCard,
  ChartCard,
  ProductCard,
  AnimatedNumber,
  GlobalSalesCard,
  GlobalSalesTable
} from "@/components";

export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.category {
  cursor: pointer !important;
}
</style>
