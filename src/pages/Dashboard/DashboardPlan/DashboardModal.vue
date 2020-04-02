<template>
  <div>
    <modal v-if="!status" @close="closeModal">
      <template slot="header">
        <h4 class="modal-title"><strong>Created a new Plan</strong></h4>
        <md-button
          class="md-simple md-just-icon md-round modal-default-button"
          @click="closeModal"
        >
          <md-icon>clear</md-icon>
        </md-button>
      </template>
      <template slot="body">
        <md-datepicker v-model="selectedDate">
          <label>Annual Plan Year</label>
        </md-datepicker>
        <md-field>
          <md-input
            v-model="helper"
            type="text"
            placeholder="Position or Role"
          ></md-input>
        </md-field>
        <md-field>
          <md-input
            v-model="helper"
            type="text"
            placeholder="Numbers of years in this role"
          ></md-input>
        </md-field>
        <md-field>
          <md-textarea
            v-model="helper"
            type="text"
            placeholder="Responsibility"
          ></md-textarea>
        </md-field>
      </template>
      <template slot="footer">
        <md-button class="md-success md-simple" @click="openModal2"
          >Save</md-button
        >
      </template>
    </modal>

    <modal v-if="modal2" @close="closeModal">
      <template slot="header">
        <h4 class="modal-title"><strong>Created a new Plan 2</strong></h4>
        <md-button
          class="md-simple md-just-icon md-round modal-default-button"
          @click="closeModal"
        >
          <md-icon>clear</md-icon>
        </md-button>
      </template>
      <template slot="body">
        <md-field>
          <md-textarea
            v-model="helper"
            type="text"
            placeholder="What competence areas have you identified in relation to your current role that require further development ?"
          ></md-textarea>
        </md-field>
        <md-field>
          <md-textarea
            v-model="helper"
            type="text"
            placeholder="Where would you like to be in the next 12 months ?"
          ></md-textarea>
        </md-field>
        <md-field>
          <md-textarea
            v-model="helper"
            type="text"
            placeholder="Where would you like to be beyond the next 12 months ?"
          ></md-textarea>
        </md-field>
      </template>
      <template slot="footer">
        <md-button class="md-success md-simple">Create Annual Plan</md-button>
      </template>
    </modal>
  </div>
</template>

<script>
import { Modal } from "@/components";
export default {
  name: "DashboardModal",
  components: {
    Modal
  },
  props: ["status"],
  data() {
    return {
      modal: false,
      modal2: false
    };
  },
  methods: {
    closeModal: function() {
      this.status = false;
    },
    openModal2: function() {
      this.status = false;
      this.modal2 = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-field > textarea {
  padding: 0px !important;
}
</style>
