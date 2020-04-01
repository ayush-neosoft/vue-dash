<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>lock</md-icon>
          </div>
          <!-- <h4 class="title">User Account Info</h4> -->
        </md-card-header>
        <br>
        <md-card-content>
          <div class="md-layout">
            <InputText label="Old Password" title="old_password" type="password" v-on:input="inputForm1" />
          </div>
          <br>
          <div class="md-layout">
            <InputText label="New Password" title="new_password" type="password" @input="inputForm1" />
            <InputText label="Confirm Password" title="confirm_password" type="password" @input="inputForm1" />
          </div>
        </md-card-content>

        <md-card-actions md-alignment="left">
          <md-button class="md-success" @click="submitForm1">Submit</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>
<script>
import InputText from '@/components/Inputs/InputText';
export default {
  components: {
    InputText
  },
  data() {
    return {
      user_account_info: {},
      layout1: null,
      layout2: null,
      layout3: null,
      emailadress: null,
      emailadress1: null,
      placeholder: null,
      password: null,
      success: null,
      error: null,
      password1: null,
      password2: null,
      boolean: false,
      disabled: null,
      boolean1: false,
      helper: null,
      checkbox1: null,
      checkbox2: null,
      checkbox3: null,
      checkbox4: null,
      checkbox5: null,
      checkbox6: true,
      checkbox7: null,
      checkbox8: true,
      checkbox9: null,
      radio: true,
      radio1: true,
      radio2: true
    };
  },
  methods: {
    inputForm1(data) {
      let obj = {};
      obj[data.key] = data.value;
      this.user_account_info = Object.assign(this.user_account_info, obj);
    },
    submitForm1() {
      console.log(this.user_account_info);
    }
  },
};
</script>
<style lang="scss" scoped>
.md-card .md-card-actions {
  border: none;
}

.md-inline-checkboxes {
  display: inline-flex;

  .md-checkbox {
    margin-top: 15px !important;
  }
}

.md-checkbox,
.md-radio {
  margin-top: 15px;
  margin-bottom: 0.5rem;
}

.md-checkbox,
.md-radio {
  display: flex;
}

.md-radio .md-radio-container {
  margin-left: 5px;
  position: relative;
  left: -3px;
}

.md-form-label + .md-layout-item .md-checkbox:not(:first-child),
.md-form-label + .md-layout-item + .md-layout-item .md-radio:not(:first-child),
.md-form-label + .md-layout-item .md-radio {
  margin-top: 0;
}

.form-control-static {
  margin-top: 6px;
}
</style>
