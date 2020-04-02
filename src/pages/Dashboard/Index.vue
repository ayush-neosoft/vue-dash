<template>
  <div class="md-layout">
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
    >
      <h2>SAICA CPD REGISTRATION</h2>
    </div>
    <div
      class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25 text-center"
    >
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">2018</div>
        </md-card-header>
        <md-card-content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </md-card-content>
        <md-card-actions>
          <md-button class="md-simple md-success md-lg" @click="openModal"
            >EDIT PLAN</md-button
          >
        </md-card-actions>
      </md-card>
    </div>
    <div
      class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25 text-center"
    >
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">2019</div>
        </md-card-header>
        <md-card-content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </md-card-content>
        <md-card-actions>
          <md-button class="md-simple md-success md-lg" @click="openModal"
            >EDIT PLAN</md-button
          >
        </md-card-actions>
      </md-card>
    </div>
    <div
      class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25 text-center"
    >
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">2020</div>
        </md-card-header>
        <md-card-content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </md-card-content>
        <md-card-actions>
          <md-button class="md-simple md-success md-lg" @click="openModal"
            >EDIT PLAN</md-button
          >
        </md-card-actions>
      </md-card>
    </div>
    <div
      class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25 text-center"
    >
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">Add Annual Plan</div>
        </md-card-header>
        <md-card-content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </md-card-content>
        <md-card-actions>
          <md-button class="md-simple md-success md-lg" @click="openModal"
            >ADD PLAN</md-button
          >
        </md-card-actions>
      </md-card>
    </div>
    <dashboard-modal :status="isOpen"></dashboard-modal>
  </div>
</template>

<script>
import DashboardModal from "@/components/DashboardModal.vue";
export default {
  components: {
    DashboardModal
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.md-card.md-theme-default.md-with-hover {
  text-align: left;
}
</style>