<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>account_box</md-icon>
          </div>
          <h4 class="title">User Account Info</h4>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <InputText label="First Name" title="first_name" v-on:input="inputForm1" />
            <InputText label="Last Name" title="last_name" v-on:input="inputForm1" />
          </div>
          <br>
          <div class="md-layout">
            <InputText label="Contact Number" title="contact_number"  @input="inputForm1" />
            <InputText label="Mobile Number" title="mobile_number" @input="inputForm1" />
          </div>
          <br>
          <div class="md-layout">
            <InputText label="SAICA Number" title="saica_number" @input="inputForm1" />
            <InputText label="IRBA Number" title="irba_number" @input="inputForm1" />
          </div>
        </md-card-content>

        <md-card-actions md-alignment="left">
          <md-button class="md-success" @click="submitForm1">Submit</md-button>
        </md-card-actions>
      </md-card>
    </div>

    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>payment</md-icon>
          </div>
          <h4 class="title">Billing</h4>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <InputText label="Training Manager" title="training_manager" @input="inputForm2" />
            <InputText label="Licence Expiry Date" title="license_exp_date" @input="inputForm2" />
          </div>
        </md-card-content>

        <md-card-actions md-alignment="left">
          <md-button class="md-success" @click="submitForm2">Submit</md-button>
        </md-card-actions>
      </md-card>
    </div>

    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>account_balance</md-icon>
          </div>
          <h4 class="title">Account Management</h4>
        </md-card-header>
        <br>
        <md-card-content>
          <div class="md-layout">
            <div class="md-layout-item md-size-10">
            </div>
            <div class="md-layout-item md-size-30">
              <md-button 
                class="md-raised md-primary" 
                @click="$router.push({ name: 'Change Email'})">Change Email Address</md-button>
            </div>
            <div class="md-layout-item md-size-30">
              <md-button 
                class="md-raised md-primary"
                @click="$router.push({ name: 'Change Password'})">Change Password</md-button>
            </div>
            <div class="md-layout-item md-size-30">
              <md-button 
                class="md-raised md-primary"
                @click="$router.push({ name: 'Transfer License'})">Transfer License</md-button>
            </div>
          </div>
        </md-card-content>
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
      billing: {},
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
    },
    inputForm2(data) {
      let obj = {};
      obj[data.key] = data.value;
      this.billing = Object.assign(this.billing, obj);
    },
    submitForm2() {
      console.log(this.billing);
    },
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
